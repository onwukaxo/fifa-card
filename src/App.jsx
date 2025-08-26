// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Import custom styles from App.css
import './App.css';
// Import PlayersList component
import PlayersList from './components/PlayersList';

function App() {
  return (
    <>
      {/* Render the PlayersList component */}
      <PlayersList />
    </>
  );
};

// Export the App component for use in index.js
export default App;
