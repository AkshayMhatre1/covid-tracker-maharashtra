import React,{useState,useEffect} from 'react';
import './App.css';
import Search from "./component/Search";
import Districts from "./component/Districts";

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {    
    margin:'5px 10px 0 10px',
    fontFamily: 'Montserrat',
    display: 'flex',    
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  textField: {
    margin: theme.spacing(4),
    width: '40ch',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'linear-gradient(45deg, #80d8ff 30%, #a7ffeb 90%)',
    
  },
}));

const theme = createMuiTheme({
    typography:{
    fontFamily: 'Montserrat',

    h5:{      
      fontWeight: "bold",
      textTransform:"uppercase",
    }
  }
 });

const App= () => {
  const[data,setData] =useState([]);
  const [dname, setDname] = useState('');

  const handleChange = (event) => {
    setDname(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://api.covid19india.org/v2/state_district_wise.json`
    );
    const rdata = await response.json();    
    const mdata = rdata.filter((el) =>(
      el.statecode === "MH"
    ));

    setData(mdata)
  };

  const classes = useStyles();

  return (    
    <ThemeProvider theme={theme}>      
    <div className='App' >     
    <Typography variant="h4" color="primary">Maharashtra Covid-19 Tracker</Typography>

    <Search dname={dname}  handleChange={handleChange} classes ={classes}/>     
      
      <div className={classes.root}>
      <Districts data={data} dname={dname} classes={classes} />
      </div>  
  
    </div>
    </ThemeProvider>
  );
}

export default App;
