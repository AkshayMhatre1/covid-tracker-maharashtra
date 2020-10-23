import React from 'react';

import TextField from '@material-ui/core/TextField';

const Search = ({dname,handleChange,classes})=>{
    return(
        <TextField
          label="District"
          id="outlined-margin-normal"
          placeholder="Ex. Raigad"
          value={dname} 
          onChange={handleChange}
          className={classes.textField}
          helperText="Enter District Name"
          margin="normal"
          variant="outlined"
        />
    );
}

export default Search;