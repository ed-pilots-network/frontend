import React from 'react';
import 'fomantic-ui-css/semantic.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
