import LocalButton from './Button';
import styled from 'styled-components';
import Header from '../../sharedComponent/src/Header';
import Contacts from './Contacts';
import Footer from '../../sharedComponent/src/Footer';
import Message from './Message';

const Component = styled('div')`
  padding: 0;
  margin: 0;

  p {
    font-size: 20px;
  }
`;

const Main = styled('main')`
  max-width: 80%;
  margin: 60px auto;
`;

const App = () => (
  <Component>
    <Header title={'Remote'} />
    <Main>
      <Message
        text={'Welcome to the Remote !'}
        image={'https://api.multiavatar.com/910eb4bc91c6027c06.svg'}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <LocalButton />
      <Contacts />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <LocalButton />
    </Main>
    <Footer />
  </Component>
);

export default App;
