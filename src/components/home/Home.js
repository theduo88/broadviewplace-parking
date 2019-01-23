import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Home extends Component {

    render()    {
        return  (
            <React.Fragment>
                <Paper elevation={10}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                required
                                id="licenPlateNumber"
                                name="licenPlateNumber"
                                label="License Plate Number"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button variant="contained" color="primary" href="/report-violation">
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