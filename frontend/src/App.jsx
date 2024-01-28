import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
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
import { useEffect, useState } from 'react';
import AdminProfile from './components/adminDashboard/profile/AdminProfile.jsx';
import GetAllUsers from './components/adminDashboard/getAllUsers/GetAllUsers.jsx';
import UserDetails from './components/adminDashboard/userDetails/UserDetails.jsx';
import AddProducts from './components/adminDashboard/addProducts/AddProducts.jsx';
import ProductsDetails from './components/products/ProductsDetails/ProductsDetails.jsx';
import AddReviews from './components/products/addReviews/AddReviews.jsx';
function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return loader ? (
    <div className="d-flex justify-content-center  align-items-center m-autow-full h-screen bg-slate-400 ">
      <GridLoader
        className="m-auto "
        color="#2230f1"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index="true" element={<Home />}></Route>
              <Route
                path="/products/details/:id"
                element={<ProductsDetails />}
              ></Route>
              <Route path="/category" element={<Category />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/products/reviews/:id"
                element={<AddReviews />}
              ></Route>
              <Route
                path="/login/user-dashboard"
                element={
                  <PrivateRoute>
                    <UserDashboard />
                  </PrivateRoute>
                }
              >
                <Route index={true} element={<Profile />} />
                <Route path="get-user-details" element={<GetUserDetails />} />
                <Route path="update-password" element={<UpdatePassword />} />
                <Route path="update-profile" element={<UpdateProfile />} />
              </Route>
              <Route
                path="/login/admin-dashboard"
                element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              >
                <Route index={true} element={<AdminProfile />} />
                <Route path="get-all-user" element={<GetAllUsers />}></Route>
                <Route path="details/:id" element={<UserDetails />} />
                <Route path="add-products" element={<AddProducts />}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
