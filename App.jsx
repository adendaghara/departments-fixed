import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import DepartmentsPage from './components/DepartmentsPage.jsx';
import './styles/app.css';

export default function App() {
  const [activePage, setActivePage] = useState('departments');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="app-main">
        <Header
          activePage={activePage}
          darkMode={darkMode}
          onToggleDark={() => setDarkMode(prev => !prev)}
        />
        <main className="app-content">
          {activePage === 'departments' && <DepartmentsPage />}
        </main>
      </div>
    </div>
  );
}
