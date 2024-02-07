import LocalButton from './Button';
import Header from '../../sharedComponent/src/Header';
import Footer from '../../sharedComponent/src/Footer';
import MockData from './MockData';

const App = () => (
  <div>
    <Header title={'This is the Remote landing page'} />
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <MockData />
    <Footer />
  </div>
);

export default App;
