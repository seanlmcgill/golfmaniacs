import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProfileCard } from './ProfileCard';
import { LowRoundList } from './LowRoundList';
import styles from './Profile.module.scss';

export const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <Container>
        <Row>
          <Col>
            <ProfileCard />
          </Col>
          <Col>
            <LowRoundList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
