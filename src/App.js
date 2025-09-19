import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Components/VendorApp/LogIn';
import { SignUp } from './Components/VendorApp/SignUp'; 
import { SelectionCard } from './Components/VendorApp/SelectionCard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectionCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </Router>
  );
}

export default App;
