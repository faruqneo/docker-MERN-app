import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import TextBox from './TextBox';


const AddNewTextBox = () => {
    const [toogle, setToggle] = useState(false);
    const [editable, setEditable] = useState(false);
    const [recorder, setRecorder] = useState('');
    const [data, setData] =useState({name: '', id: '', classname: '', size: 12});

    const handleChange = ({target}) => {
        setData({...data, [target.name]: target.value})
    }

    const handleSubmit = async () => {
        try {
            const value = {
                name: data.name,
                id: data.id,
                class: data.classname,
                size: data.size
            }
            console.log("value", value);
            let res = null;
            if(!editable) res = await axios.post('http://localhost:8000/addTextBox', value);
            else res = await axios.put(`http://localhost:8000/updateTextbox/${recorder}`, value);
            // console.log("res id", res?.data?.data?._id);
            setRecorder(res?.data?.data?._id);
            setEditable(true);
        } catch (error) {
           alert(error)
        }
    }

  return (
    <div>{!toogle ? !editable && <Fab color="primary" aria-label="add" onClick={() => setToggle(!toogle)}>
        <AddIcon/>
      </Fab>: <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="name" variant="standard" name='name' value={data.name} onChange={handleChange}/>
      <TextField id="standard-basic" label="id" variant="standard" name='id' value={data.id} onChange={handleChange}/>
      <TextField id="standard-basic" label="className" variant="standard" name='classname' value={data.classname} onChange={handleChange}/>
      <TextField id="standard-basic" label="size" variant="standard" name='size' value={data.size} onChange={handleChange}/>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant="contained" color="success" onClick={() => setToggle(!toogle)}>
        Back
      </Button>
    </Box>}

    <h1>Preview</h1>
    <TextBox value={data} />
    {editable && <Fab color="secondary" aria-label="edit" onClick={() => setToggle(!toogle)}>
        <EditIcon />
    </Fab>}
    </div>
  )
}

export default AddNewTextBox;