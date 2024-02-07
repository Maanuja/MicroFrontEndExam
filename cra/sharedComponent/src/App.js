import LocalButton from './Button';
import Header from './Header';
import styled from 'styled-components';

const Component = styled('div')`
  margin: 0;
  padding: 0;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const App = () => (
  <Component>
    <Header title={'This is the Shared landing page'} />
    <Main>
      <h1>Basic Host-Remote</h1>
      <h2>SharedComponent</h2>
      <LocalButton />
    </Main>
  </Component>
);

export default App;
