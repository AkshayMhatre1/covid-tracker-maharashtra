import React from "react";

import CanvasJSReact from '../canvasjs.react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Districts = ({data,dname,classes}) =>{

    const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    return(
        <Grid container spacing={2} >
      {        
        data.map((dis)=>(
          dis.districtData.filter((aa)=>{
            if(dname == null)
                return aa
            else if(aa.district.toLowerCase().includes(dname.toLowerCase())){
                return aa
            }
          }).map(aa=>{
            
            const options = {
              
              animationEnabled: true,
              exportEnabled: true,
              
              data: [{
                type: "pie",
                showInLegend: true,
                theme:"dark2",
                legendText: "{label}",
                toolTipContent: "{label}: <strong>{y}</strong>",
                indexLabel: "{y}",
                indexLabelPlacement: "inside",
                dataPoints: [
                  { y: aa.active, label: "Active" },
                  { y: aa.deceased, label: "deceased" },
                  { y: aa.recovered, label: "Recovered" },
                  
                ]
              }]
            }
            
            return (
              
                  <Grid item xs={4}>
                    <Paper elevation={3} className={classes.paper}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {aa.district}
                    </Typography>
                    <CanvasJSChart options = {options} />
                    <Typography variant="body1" component="p">
                    Confirmed : {aa.confirmed}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Active : {aa.active}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Recovered : {aa.recovered}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Deceased : {aa.deceased}
                    </Typography>
                    </Paper>                   
                  </Grid>
                
            )
          })       
        ))
      }
      </Grid>
    );
}

export default Districts;