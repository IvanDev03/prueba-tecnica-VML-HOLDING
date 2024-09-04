import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import CompLogin from './components/Auth/CompLogin'
import CompSingUp from './components/Auth/CompSignUp'
import CompManageLoans from './components/admin/CompManageLoans'
import CompManageUsers from './components/admin/CompManageUsers'
import Home from './components/common/CompHome'
import CompNavBar from './components/common/CompNavBar'
import CompFooter from './components/common/CompFooter'
import CompAbout from './components/common/CompAbout'
import PrivateRoute from './components/Auth/CompProtectedRoutes'
import CompGetBooks from './components/common/CompGetBooks'
import CompUpdateBook from './components/common/CompUpdateBook'

function App() {


  return (
    <>
      <div className="mt-16 absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
          <div className="flex flex-col min-h-screen">
            <Router>
              <CompNavBar />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<CompAbout />} />
                  <Route path="/about" element={<CompAbout />} />
                  <Route path="/sign-up" element={<CompSingUp />} />
                  <Route path="/login" element={<CompLogin />} />
                  <Route path="/Libros" element={<CompGetBooks />} />
                  <Route path="/admin-edit-book/:id" element={<CompUpdateBook />} />
                  <Route
                    path="/home"
                    element={
                      <PrivateRoute>
                        <Home />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/manage-loans"
                    element={
                      <PrivateRoute>
                        <CompManageLoans />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin/manage-users"
                    element={
                      <PrivateRoute>
                        <CompManageUsers />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </div>
            </Router>
            <CompFooter />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
