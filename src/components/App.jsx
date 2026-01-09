import '../index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import LoginPage from './Login';
import SignUp from './Signup';
import Navbar from './Navbar';
import PoiSearch from '../routes/poisearch';
import AddPoi from '../routes/addpoi';
import Home from '../routes/home';
import '../components/footer.css';
import Footer from './footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/signup'];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Navbar />}
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpoi" element={<AddPoi />} />
        <Route path="/poisearch" element={<PoiSearch />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {shouldShowHeader && <Footer />}
    </>
  );
}

export default App;
