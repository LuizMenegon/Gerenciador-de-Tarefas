import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'  // ← Import do ReactDOM completo
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TaskPage from './pages/TaskPage.jsx'  // ← Import do TaskPage

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);