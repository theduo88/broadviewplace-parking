import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

export class ReportViolation extends Component {
    constructor(props, context) {
        super(props, context);

        // this.getViolation = this.getViolation.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.setNewViolation = this.setNewViolation.bind(this);
        // this.toggleHidden = this.toggleHidden.bind(this);

        this.state = {
            isHidden: false
        }
    }

    handleChange (event) {
        // let exists;
        // if (event.target.name.toLowerCase() === 'licenseplatenumber') {
        //     exists = ViolationService.plateNumberExists(event.target.value, this.state.data)
        // }

        this.setState({
            [event.target.name]: event.target.value,
            // error: exists
        });

        console.log(this.state)

    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.toggleHidden}>
                    +
                </Button>
                <Card hidden={this.state.isHidden}>
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
                            <Button variant="contained" color="primary" href="/violation-log">
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