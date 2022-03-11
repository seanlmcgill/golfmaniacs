import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useUserContext } from '../../providers/userProvider';
import emptyProfile from './empty-profile.png';
import styles from './ProfileCard.module.scss';

export const ProfileCard: React.FC = () => {
  const userContext = useUserContext();
  const loading = userContext?.loading ?? true;
  const user = userContext?.user;
  const name = user ? `${user?.givenName} ${user?.surName}` : '';
  return (
    <Card className={styles.profile}>
      <Card.Img variant="top" src={emptyProfile} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text as="div">{loading ? <Spinner animation="border" /> : user?.about}</Card.Text>
      </Card.Body>
    </Card>
  );
};
