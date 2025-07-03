
import TopBar from './components/TopBar';
import SpreadsheetTable from "./components/SpreadsheetTable";
import SpreadsheetHeaderRow from './components/SpreadsheetHeaderRow';
import StickyTabBar from './components/StickyTabBar';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopBar />
    
<SpreadsheetHeaderRow />


      {/* Your spreadsheet and tabs go below */}
      <SpreadsheetTable />
      <StickyTabBar />

    </div>
  );
};

export default App;
