import {createGlobalStyle} from 'styled-components';
import background from '../../ui/images/bodyPicture-main.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: 100%;
    width: 100%;
    height: auto;
  }
`;

export default GlobalStyle ;