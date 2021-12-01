import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './theme/Theme';
import PageRoutes from './pages/Routes'
import { Routes } from './components/layout/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={createTheme(Theme)}>
          <BrowserRouter>
            <Routes routes={PageRoutes}/>
          </BrowserRouter>
        </ThemeProvider>        
      </QueryClientProvider>
    </>
  );
}

export default App;
