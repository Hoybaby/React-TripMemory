import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

const Input = ({name, half, label}) => {



    return (
        <Grid item xs={12} sm={ half ? 6 : 12}>
            <TextField
                name={name}
                label={label}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                autoFocus={autoFocus}
                type={type}
                // this is just an icon
                InputProps={ name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <Visibility /> : <VisibilityOff />}
                            <IconButton/>
                        </InputAdornment>
                    )
                } : null }
            />

        </Grid>
    )
}

export default Input
