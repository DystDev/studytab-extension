import './App.css';
import { useState } from 'react';
import CardDisplay from './screens/CardDisplay';
import CardEdit from './screens/CardEdit';

function App() {
  const [currentComponent, setCurrentComponent] = useState('CardDisplay');
  // ReactRouter cannot be used in chrome extensions sadly

  switch (currentComponent) {
    case 'CardDisplay':
      return (
        <div className="appLayout">
          <CardDisplay setCurrentComponent={setCurrentComponent} />
        </div>
      );
    case 'CardEdit':
      return (
        <div className="appLayout">
          <CardEdit setCurrentComponent={setCurrentComponent} />
        </div>
      );
    default:
      return null;
  }
}

export default App;
