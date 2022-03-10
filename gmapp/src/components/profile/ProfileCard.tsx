import React from 'react';
import { Card, Button } from 'react-bootstrap';
import profilePicture from './profile.jpg';
import styles from './ProfileCard.module.scss';

export const ProfileCard: React.FC = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={profilePicture} className={styles.profileImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
