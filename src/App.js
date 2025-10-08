import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Components/VendorApp/LogIn';
import { SignUp } from './Components/VendorApp/SignUp'; 
import { Landing } from './Components/VendorApp/Landing';
import VendorRegistration from './Components/VendorRegistration/VendorReg';
import { ReviewForm } from './Components/VendorApp/ReviewForm';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/vendor-registration" element={<VendorRegistration />} />
        <Route path="/ReviewForm" element={<ReviewForm />} />
      </Routes>
      </Router>
  );
}

export default App;
