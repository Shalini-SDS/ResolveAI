import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
