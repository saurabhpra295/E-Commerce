import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value)
  

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="female" control={<Radio />} label="Men's" />
        <FormControlLabel value="male" control={<Radio />} label="Women's" />
        <FormControlLabel value="kids" control={<Radio />} label="Kid's" />
      </RadioGroup>
    </FormControl>
  );
}
