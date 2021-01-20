import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Directory from './pages/Directory.jsx';


function App() {
  return (
    <Router basename="/user-directory">
      <div>
        <Directory />
      </div>
    </Router>
  );
}

export default App;
