import React from 'react';
import greeter from 'greeter';
import styled from '@emotion/styled';
import { Heading } from 'components/Heading';
interface AppProps extends React.ComponentProps<'div'> {
  userName: string;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  color: blue;
  background-color: lightcoral;
  height: 5rem;
  width: 10rem;
`;
function App({ userName, children, ...rest }: AppProps) {
  return (
    <div {...rest}>
      <StyledButton>hello, I am from emotion</StyledButton>
      {greeter(userName)}
      {children}
      <Heading level="2">hello</Heading>
    </div>
  );
}

export default App;
