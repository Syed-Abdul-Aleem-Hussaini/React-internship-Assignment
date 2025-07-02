import React from 'react';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopBar />
      {/* Your spreadsheet and tabs go below */}
    </div>
  );
};

export default App;
