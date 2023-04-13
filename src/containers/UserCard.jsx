import { CardMedia, Grid } from '@mui/material';
import React from 'react';

export const UserCard = ({ userState }) => {
  console.log(userState.avatar_url);
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            image={userState.avatar_url}
            alt="avatar_url"
          />
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
    </>
  );
};
