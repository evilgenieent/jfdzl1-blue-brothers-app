import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis} from 'recharts';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button'

class Dashboard extends Component {

    state = {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
    };

    render() {
        const {classes} = this.props;
        const {alignItems, direction, justify} = this.state;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Grid
                        container
                        alignItems={alignItems}
                        direction={direction}
                        justify={justify}
                    >
                        <Paper>
                            <h1>PubFinder</h1>
                            <h2>Wyszukiwarka najlepszych lokali w Twojej okolicy</h2>
                            <h3>Uruchom aplikację i wyszukaj lokal idealny dla Ciebie!! </h3>
                            <div style={{textAlign: "center"}}>
                                <Button raised color="primary"
                                        style={{textAlign: "center", fontSize: 32}}>Start</Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>


                <Grid container spacing={24}>
                    <Grid
                        container
                        alignItems={alignItems}
                        direction={direction}
                        justify={justify}
                    >

                        <Grid item xs={3}>
                            <h2> Visitor </h2>
                            <LineChart width={300} height={200} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                                <XAxis dataKey="name" stroke="#8884d8"/>
                                <YAxis/>
                            </LineChart>
                        </Grid>


                        <Grid item xs={3}>
                            <h2> Bars </h2>
                            <LineChart width={300} height={200} data={dataBars}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                                <XAxis dataKey="name" stroke="#8884d8"/>
                                <YAxis/>
                            </LineChart>
                        </Grid>

                        <Grid item xs={3}>
                            <h2> Customers </h2>
                            <LineChart width={300} height={200} data={dataCustomers}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                                <XAxis dataKey="name" stroke="#8884d8"/>
                                <YAxis/>
                            </LineChart>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


const data = [
    {name: 'January', uv: 1000, pv: 1000, amt: 1000},
    {name: 'February', uv: 1000, pv: 1500, amt: 1000},
    {name: 'March', uv: 1500, pv: 1000, amt: 1500},
    {name: 'April', uv: 1500, pv: 1500, amt: 1000},
    {name: 'May', uv: 1500, pv: 1500, amt: 1000},

];


const dataBars = [
    {name: 'January', uv: 100, pv: 100, amt: 100},
    {name: 'February', uv: 100, pv: 100, amt: 150},
    {name: 'March', uv: 120, pv: 150, amt: 150},
    {name: 'April', uv: 150, pv: 150, amt: 100},
    {name: 'May', uv: 150, pv: 150, amt: 150},

];

const dataCustomers = [
    {name: 'January', uv: 2000, pv: 4300, amt: 4400},
    {name: 'February', uv: 1000, pv: 3390, amt: 2500},
    {name: 'March', uv: 2181, pv: 1800, amt: 5290},
    {name: 'May', uv: 4000, pv: 2000, amt: 2000},

];

const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 20

};


export default Dashboard;
