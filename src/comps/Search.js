import * as React from 'react';
import Title from '../Title';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function isAddress(address) {
    return (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));
}

function isHash(hash) {
    return (/^(0x){1}[0-9a-fA-F]{64}$/i.test(hash));
}



export default function Search(props) {
    const navigate = useNavigate();

    const goSearch = event => {
        event.preventDefault();
    
        if(isHash(document.getElementById("toSearch").value)) {
            navigate("/transaction/"+document.getElementById("toSearch").value);
        } else if(isAddress(document.getElementById("toSearch").value)) {
            navigate("/address/"+document.getElementById("toSearch").value);
        } else if(document.getElementById("toSearch").value !== "") { // Block?
            navigate("/block/"+document.getElementById("toSearch").value);
        }
    }
    
    return (
        <>
            <Title>Search</Title>
            <form onSubmit={goSearch}>
            <TextField id="toSearch" label="Address/Transaction/Block" variant="outlined" fullWidth="true" />
            <Button variant="contained" type="submit">Search</Button>
                </form>
        </>
    );
  }