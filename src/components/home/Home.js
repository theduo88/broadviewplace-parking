import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'
import * as ViolationService from "../../services/ViolationService";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.getLicensePlate = this.getLicensePlate.bind(this);
        this.getViolation = this.getViolation.bind(this);
        this.getResidentVehicle = this.getResidentVehicle.bind(this);
        this.vehicleIsRegistered = this.vehicleIsRegistered.bind(this);
        this.getGuestVehicle = this.getGuestVehicle.bind(this);

        this.state = {
            licencePlateNumber: '',
            residentVehicles: null,
            guestVehicles: null,
            error: null,
        };
    }

    getLicensePlate(event)   {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    componentWillMount() {
        this.getViolation();
    }

    getResidentVehicle()  {
        ViolationService.getResidentVehicles()
            .then( result => {
                this.setState({
                    residentVehicles: result
                })
            });
    }

    getGuestVehicle()  {
        ViolationService.getGuestVehicles()
            .then( result => {
                this.setState({
                    guestVehicles: result
                })
            });
    }

    vehicleIsRegistered(licensePlateNumber)   {
        this.getResidentVehicle();
        this.getGuestVehicle();
        this.setState({
            error: ''
        });
        let registeredVehicle = this.state.residentVehicles;
        if (registeredVehicle) {
            registeredVehicle.reduce((result, item) => {
                if (item.licensePlateNumber.toLowerCase() === licensePlateNumber.toLowerCase()) {
                    this.setState({
                        error: 'This vehicle belongs to a resident'
                    })
                }
                return null
            });
        }

        let guestVehicle = this.state.guestVehicles;
        if (guestVehicle) {
            guestVehicle.reduce((result, item) => {
                if (item.licensePlateNumber.toLowerCase() === licensePlateNumber.toLowerCase()) {
                    this.setState({
                        error: 'This vehicle is registered as a guest'
                    })
                }
                return null
            });
        }
    }

    getViolation() {
        let newState = {
            data: []
        };

        this.setState(newState,() => {
            return ViolationService.getViolations(null, this.state.data)
                .then(async response => {
                    this.setState({
                        data: response
                    });
                })
        })

    }

    render()    {
        const residentError = 'This vehicle belongs to a resident';
        const guestError = 'This vehicle is registered as a guest';
        return  (
            <React.Fragment>
                    <Grid  spacing={16}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="licencePlateNumber"
                                name="licencePlateNumber"
                                label="License Plate Number"
                                onChange={ (event) => {
                                    this.getLicensePlate(event);
                                    this.vehicleIsRegistered(event.target.value);
                                }}
                                error={this.state.error === residentError || this.state.error === guestError}
                                helperText={this.state.error === residentError || this.state.error === guestError ? this.state.error : ''}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                                <Button variant="contained" color="primary" component={Link} to={{
                                    pathname: '/report-violation',
                                    state: {
                                        licencePlateNumber: this.state.licencePlateNumber,
                                        data: this.state.data
                                    }}}>
                                    {this.state.error === residentError || this.state.error === guestError ? 'Report Anyway': 'Check Plate'}
                                </Button>
                        </Grid>
                    </Grid>
            </React.Fragment>
        )
    }

}
export default Home;