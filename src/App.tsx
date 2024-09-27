import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default App;
