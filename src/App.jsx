import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Searcher } from './components/Searcher';
import { getUser } from './services/users';
import { UserCard } from './containers/UserCard';

export const App = () => {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState(false);

  const initialState = async (user) => {
    const userInitial = await getUser(user);
    console.log(userInitial);
    if (userState === 'octocat') {
      localStorage.setItem('octocat', JSON.stringify(userInitial));
    }
    if (userInitial.message === 'Not found') {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userInitial);
    }
    console.log(userState);
  };

  useEffect(() => {
    initialState(inputUser);
  }, [inputUser]);

  return (
    <>
      <Container
        sx={{
          background: '#dcdcdc',
          width: '90vw',
          height: '500px',
          borderRadius: '20px',
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        <UserCard userState={userState} />
      </Container>
    </>
  );
};
