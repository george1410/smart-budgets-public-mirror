import React from 'react';
import Header from '../Header/Header';
import Wrapper from './Wrapper';
import SocialSection from './SocialSection/SocialSection';
import Card from './Card/Card';
import LeaderBoard from './LeaderBoard/LeaderBoard';

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
      <LeaderBoard />
    </Wrapper>
  </>
);

export default Home;
