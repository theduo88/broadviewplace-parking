import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.getLicensePlate = this.getLicensePlate.bind(this);
        this.state = {
            licencePlateNumber: '',
        }
    }

    getLicensePlate(event)   {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render()    {
        return  (
            <React.Fragment>
                <Paper elevation={10}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                required
                                id="licencePlateNumber"
                                name="licencePlateNumber"
                                label="License Plate Number"
                                onChange={this.getLicensePlate}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                                <Button variant="contained" color="primary" component={Link} to={{
                                    pathname: '/report-violation',
                                    state: {
                                        licencePlateNumber: this.state.licencePlateNumber
                                    }}}>
                                    Check Plate
                                </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </React.Fragment>
        )
    }

}
export default Home;