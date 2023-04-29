import React, { useEffect } from 'react';
import 'fomantic-ui-css/semantic.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from './pages/Main';
import RouteFinder from './pages/RouteFinder';
import { fetchStationData } from './store/stationsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStationData());
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/route_finder">Route finder</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/route_finder" element={<RouteFinder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
