import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';
import Toasts from './components/Toasts';

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    const revalidate = () => queryClient.invalidateQueries();
    window.addEventListener("focus", revalidate);
    return () => window.removeEventListener("focus", revalidate);
  }, []);

  const isAdminRoute = window.location.pathname === '/admin';

  return (
    <QueryClientProvider client={queryClient}>
      {isAdminRoute ? <AdminLogin /> : <Dashboard />}
      <Toasts />
    </QueryClientProvider>
  );
}
