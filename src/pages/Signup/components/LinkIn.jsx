import React from 'react';
import { StyledLink, StyledA } from './LinkStyled';

function FollowLinkIn() {
  return(
    <StyledLink to='/sign-in'>
      <StyledA>Already have an account? Log In</StyledA>
    </StyledLink>
  )
}

export default FollowLinkIn;