import React, { Component } from 'react';
import './App.css';
import Main from "./components/main/Main";
import "react-table/react-table.css";
import Grid from "@material-ui/core/Grid";

class App extends Component {
    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                    <Main />
            </Grid>
        );
    }
}

export default App;