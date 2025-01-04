import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists
import App from './App'; // Ensure this file exists and exports a component

// Check if the root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Root element not found. Make sure your index.html has a <div id='root'></div>.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}