import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage/LoginPage';
import OrdersPage from './pages/OrgersPage/OrdersPage';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<OrdersPage />} />
            <Route path="employees" element={<EmployeesPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />

        </Routes>
        </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
