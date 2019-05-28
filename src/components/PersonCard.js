import React from 'react';
import { Card, Image } from 'semantic-ui-react';

/** 
 * PersonCard component
 * @param {Object} props - Props
 * @param {string} props.name - Person name
 * @param {number} props.age - Person's age
 * @param {string} props.photoUrl - Person's profile picture
 * @param {Object} props.style - Custom styles
*/
const PersonCard = ({ name, age, photoUrl, style }) => {
  return (
    <Card style={style}>
      <Image src={photoUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Edad: {age}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default PersonCard;
