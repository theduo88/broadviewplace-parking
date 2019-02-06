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

        this.state = {
            licencePlateNumber: '',
            residentVehicles: null,
            error: null,
        }
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

    vehicleIsRegistered(licensePlateNumber)   {
        this.setState({
            error: ''
        })
        let registeredVehicle = this.state.residentVehicles;
        if (registeredVehicle) {
            registeredVehicle.reduce((result, item) => {
                if (item.licensePlateNumber === licensePlateNumber) {
                    this.setState({
                        error: 'This vehicle belongs to a resident'
                    })
                }

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
                                    this.getResidentVehicle();
                                    this.vehicleIsRegistered(event.target.value);
                                }}
                                error={this.state.error === 'This vehicle belongs to a resident'}
                                helperText={this.state.error === 'This vehicle belongs to a resident' ? this.state.error : ''}
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
                                    {this.state.error === 'This vehicle belongs to a resident' ? 'Report Anyway': 'Check Plate'}
                                </Button>
                        </Grid>
                    </Grid>
            </React.Fragment>
        )
    }

}
export default Home;