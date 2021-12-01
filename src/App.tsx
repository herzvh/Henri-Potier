import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './theme/Theme';
import PageRoutes from './pages/Routes'
import { Routes } from './components/layout/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={createTheme(Theme)}>
            <BrowserRouter>
              <Routes routes={PageRoutes}/>
            </BrowserRouter>
          </ThemeProvider>        
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
