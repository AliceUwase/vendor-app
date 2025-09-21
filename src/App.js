import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Components/VendorApp/LogIn';
import { SignUp } from './Components/VendorApp/SignUp'; 
import { SelectionCard } from './Components/VendorApp/SelectionCard';
import { Landing } from './Components/VendorApp/Landing';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectionCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
      </Router>
  );
}

export default App;
