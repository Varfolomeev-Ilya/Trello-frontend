import React from 'react';
import { StyledLink,StyledH3 } from './LinkStyled';

function FollowLink() {
  return(
    <StyledLink to='/sign-up'>
      <StyledH3>Sign up</StyledH3>
    </StyledLink>
  )
}

export default FollowLink;