import { Search } from '@mui/icons-material';
import { IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

export const Searcher = ({ setInputUser }) => {
  const [value, setValue] = useState('');
  const handleClick = () => {
    setInputUser(value);
  };
  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input);
  };
  return (
    <>
      <Stack
        direction="row"
        sx={{
          marginTop: '30px',
          width: '100%',
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          sx={{ width: '100%' }}
          placeholder="Octocat"
          label="GitHub User"
          type="search"
          id="standar-basic"
          variant="standard"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleClick}>
                <Search />
              </IconButton>
            ),
          }}
        />
      </Stack>
    </>
  );
};
