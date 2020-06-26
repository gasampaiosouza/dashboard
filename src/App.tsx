import React from 'react';
import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { Main } from './components/Main/Main';

const App: React.FC = () => {
  return (
    <div className="container">
      <Navigation></Navigation>
      <Main></Main>
    </div>
  );
};

export default App;
