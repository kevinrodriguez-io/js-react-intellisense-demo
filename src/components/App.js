import React, { useState, useEffect } from 'react';
import PersonCard from './PersonCard';
import { centerBlock, mt1, height100vh } from '../ui/styles';
import { Grid, GridRow, Loader, Segment, Dimmer } from 'semantic-ui-react';

export default () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    setUsers(json);
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  if (users.length === 0) {
    return (
      <Segment style={height100vh}>
        <Dimmer active>
          <Loader size='small'>Loading</Loader>
        </Dimmer>
      </Segment>
    );
  }

  return (
    <Grid relaxed padded>
      <GridRow>
        {users.map(user =>
          <PersonCard
            style={{ ...centerBlock, ...mt1 }}
            name={user.name}
            email={user.email}
            photoUrl="http://placehold.it/500x300"
          />)
        }
      </GridRow>
    </Grid>
  );
};
