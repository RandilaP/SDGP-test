import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SeminarContextProvider} from "./context/SeminarContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <SeminarContextProvider>
      <App />
      </SeminarContextProvider>
  </React.StrictMode>
);