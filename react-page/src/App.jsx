import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/TopNavbar'; // import the navbar
import Blog from './components/Blog'; // your blog cards list


function App() {
  return (
    <div>
      <TopNavbar />
      <Blog />
    </div>
  );
}

export default App;
