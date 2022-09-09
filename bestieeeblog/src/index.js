import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from './components/Home/darkmode/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<React.StrictMode>
    <ThemeProvider>
      <body className="bg-violet-50 dark:bg-gray-900 transition-all">
        <main>
          <App />
        </main>
      </body>
    </ThemeProvider>
  </React.StrictMode>

);
