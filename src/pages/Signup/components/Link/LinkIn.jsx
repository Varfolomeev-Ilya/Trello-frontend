import React from 'react';
import { StyledLink, StyledH3 } from './LinkStyled';

function FollowLinkIn() {
  return (
    <StyledLink to='/sign-in'>
      <StyledH3>Already have an account? Log In</StyledH3>
    </StyledLink>
  )
}

export default FollowLinkIn;