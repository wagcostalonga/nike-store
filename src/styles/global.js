import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --white: #ffffff;
  --primary: #28293D;
  --secondary: #555770;
  --tertiary: #6681D6;
  --placeholder: #9A9BAF;
  --input: #F3F3F5;
  --stroke: #DBE0E8;
  --red: #D94B2C;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }

  @media(max-width: 728px) {
    font-size: 87.5%;
  }
}

body {
  background-color: #fff;
  color: var(---primary);
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 450;
}

button {
  cursor: pointer;
}

.react-modal-overlay {
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
}

.react-modal-content {
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
}

`;