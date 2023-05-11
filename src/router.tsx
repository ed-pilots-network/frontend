import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '@pages';
const AppRouter = () => {
  return (
    <Routes>
      <Route Component={Dashboard} path="/" />
    </Routes>
  );
};

export default AppRouter;
