import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Home, Login, Signup, Category } from './components/pages/pageIndex.js';
import UserDashboard from './components/userDashboard/UserDashboard.jsx';
import AdminDashboard from './components/adminDashboard/AdminDashboard.jsx';
import GetUserDetails from './components/userDashboard/getUserDetails/GetUserDetails.jsx';
import UpdatePassword from './components/userDashboard/updatePassword/UpdatePassword.jsx';
import UpdateProfile from './components/userDashboard/UpdateProfile/UpdateProfile.jsx';
import Profile from './components/userDashboard/profile/Profile.jsx';
import UserContextProvider from './context/UserContextProvider.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
function App() {
  return (
    <>
      <UserContextProvider>
        {' '}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index="true" element={<Home />}></Route>
              <Route path="/category" element={<Category />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/login/user-dashboard"
                element={
                  <PrivateRoute>
                    <UserDashboard />
                  </PrivateRoute>
                }
              >
                <Route path="" element={<Profile />} />
                <Route path="get-user-details" element={<GetUserDetails />} />
                <Route path="update-password" element={<UpdatePassword />} />
                <Route path="update-profile" element={<UpdateProfile />} />
              </Route>
              <Route
                path="/login/admin-dashboard"
                element={<AdminDashboard />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
