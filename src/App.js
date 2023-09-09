import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/profile/ProfilePage';
import { LoginPage } from './pages/login/LoginPage';
import { Guard, AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Guard component={<ProfilePage />} />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
