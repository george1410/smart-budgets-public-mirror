import React from 'react';
import Header from '../Header/Header';
import Wrapper from './Wrapper';
import SocialSection from './SocialSection/SocialSection';
import Card from './Card/Card';

const Home = () => (
  <>
    <Header title="Smart Budgets" />
    <Wrapper>
      <SocialSection>
        <Card
          title="Find Friends"
          linkTo="/add"
        />
        <Card
          title="Manage Friendships"
          linkTo="/friends"
        />
      </SocialSection>
    </Wrapper>
  </>
);

export default Home;
