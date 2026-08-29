import AdminLogin from './pages/AdminLogin';
// ...
function App() {
  const isAdminRoute = window.location.pathname === '/admin';
  
  return isAdminRoute ? <AdminLogin /> : <Dashboard />;
}
