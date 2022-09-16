import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620',
  button: '#000'
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
  button: '#fff'
};

export const Button = styled.button`
  background-color: ${({ theme }) => theme.button};
  border: 0;
  width: 50px;
  height: 50px;
`