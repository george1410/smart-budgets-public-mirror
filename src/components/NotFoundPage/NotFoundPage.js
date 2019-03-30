import React from 'react';
import Background from './Background';
import Message from './Message';
import StyledLink from './StyledLink';

const NotFoundPage = () => (
  <>
    <Message>This is not the page you are looking for.</Message>
    <Background>
      <div>4</div>
      <div>0</div>
      <div>4</div>
    </Background>
    <StyledLink to="/home">Back Home</StyledLink>
  </>
);

export default NotFoundPage;
