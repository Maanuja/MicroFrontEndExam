import React from 'react';
import Header from '../../sharedComponent/src/Header';
import Footer from '../../sharedComponent/src/Footer';
const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Header title={"This is the host landing page"}/>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <Footer/>
  </div>
);

export default App;
