import React from 'react';
import TopBar from './components/TopBar';
import SpreadsheetTable from "./components/SpreadsheetTable";
import SpreadsheetHeaderRow from './components/SpreadsheetHeaderRow';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopBar />
    
<SpreadsheetHeaderRow />


      {/* Your spreadsheet and tabs go below */}
      <SpreadsheetTable />

    </div>
  );
};

export default App;
