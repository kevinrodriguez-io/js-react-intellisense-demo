import React from 'react';
import PersonCard from './PersonCard';
import { centerBlock, mt1 } from '../ui/align-styles';

export default () => {
  return <PersonCard
    style={{ ...centerBlock, ...mt1 }}
    name="Kevin"
    age={24}
    photoUrl="https://avatars3.githubusercontent.com/u/6248571"
  />;
};
