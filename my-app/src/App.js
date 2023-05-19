import React from 'react'; //import React library
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Homemain';
import 'bootstrap/dist/css/bootstrap.css';

// This is the homepage. 
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

