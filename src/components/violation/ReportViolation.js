import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import * as ViolationService from "../../services/ViolationService";
import {Link} from "react-router-dom";

export class ReportViolation extends Component {
    constructor(props, context, licensePlate) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.checkExistingViolation = this.checkExistingViolation.bind(this);
        console.log(props.location.state.data)

        this.state = {
            licensePlateNumber: Object.values(props.location.state)[0].toString(),
            existingData: props.location.state.data

        };

        console.log(this.state)



    }

    componentWillMount() {
        this.checkExistingViolation();
    }

    checkExistingViolation()    {
        let exists = ViolationService.plateNumberExists(this.state.licensePlateNumber, this.state.existingData);

        this.setState({
            error: exists
        })

    }

    handleChange (event) {

        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.toggleHidden}>
                    +
                </Button>
                <Card>
                    <CardContent>
                        <React.Fragment>
                            <Typography variant="h6" gutterBottom>
                                Violation Form
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="date"
                                        label="Date"
                                        name="date"
                                        type="date"
                                        fullWidth
                                        onChange={this.handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <TextField
                                        required
                                        id="time"
                                        label="Time"
                                        name="time"
                                        type="time"
                                        fullWidth
                                        onChange={this.handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="licensePlateNumber"
                                        name="licensePlateNumber"
                                        label="License Plate"
                                        fullWidth
                                        value={this.state.licensePlateNumber}
                                        onChange={this.handleChange}
                                        error={this.state.error === 'Plate has already be reported'}
                                        helperText={this.state.error === 'Plate has already be reported' ? this.state.error : ''}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Select
                                        required
                                        id="state"
                                        name="state"
                                        label="State"
                                        fullWidth
                                        autoComplete="state"
                                        onChange={this.handleChange}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="vehicle"
                                        name="vehicle"
                                        label="Vehicle"
                                        fullWidth
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="location"
                                        name="location"
                                        label="Location"
                                        fullWidth
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="towingDeadline"
                                        label="Towing Deadline"
                                        name="towingDeadline"
                                        type="date"
                                        fullWidth
                                        onChange={this.handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="reason"
                                        name="reason"
                                        label="Reason"
                                        fullWidth
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="recordedBy"
                                        name="recordedBy"
                                        label="Recorded By"
                                        fullWidth
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="otherNotes"
                                        name="otherNotes"
                                        label="Notes"
                                        fullWidth
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button variant="contained" color="primary" component={Link} to={{
                                pathname: '/violation-log',
                                state: {
                                    newViolation: {
                                        date: this.state.date,
                                        time: this.state.time,
                                        licensePlateNumber: this.state.licensePlateNumber,
                                        state: this.state.state,
                                        vehicle: this.state.vehicle,
                                        location: this.state.location,
                                        towingDeadline: this.state.towingDeadline,
                                        reason: this.state.reason,
                                        recordedBy: this.state.recordedBy,
                                        otherNotes: this.state.otherNotes
                                    }
                                }
                            }}>
                                Submit
                            </Button>
                        </React.Fragment>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default ReportViolation;