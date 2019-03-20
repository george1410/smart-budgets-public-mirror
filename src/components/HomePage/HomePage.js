import React from 'react';
import Header from '../Header/Header';
import Wrapper from './Wrapper';
import SocialSection from './SocialSection/SocialSection';
import Card from './Card/Card';

const Home = () => (
  <>
    <Header title="Home" />
    <Wrapper>
      <SocialSection>
        <Card
          title="Add Friends"
          description="Make budgeting competitive."
          linkTo="/add"
          action="Find friends"
        />
        <Card
          title="Friendships"
          description="Manage your friendships."
          linkTo="/friends"
          action="List Friends"
        />
      </SocialSection>
    </Wrapper>
  </>
);

export default Home;
