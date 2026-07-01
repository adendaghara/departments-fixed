import React from 'react';

const pageTitles = {
  departments: 'الأقسام',
  employees:   'الموظفون',
  reports:     'التقارير',
  dashboard:   'لوحة التحكم',
};

export default function Header({ activePage, darkMode, onToggleDark }) {
  return (
    <header className="header">
      <span className="header-breadcrumb">
        <span>الرئيسية</span>
        <span>›</span>
        <span className="current">{pageTitles[activePage] || activePage}</span>
      </span>

      <div className="header-spacer" />

      <button
        className={`dark-toggle ${darkMode ? 'dark-toggle--on' : ''}`}
        onClick={onToggleDark}
        title={darkMode ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
        aria-label="تبديل الوضع الداكن"
      >
        <span className="dark-toggle__track">
          <span className="dark-toggle__thumb">
            {darkMode ? '🌙' : '☀️'}
          </span>
        </span>
        <span className="dark-toggle__label">
          {darkMode ? 'داكن' : 'فاتح'}
        </span>
      </button>

      <div className="header-avatar">م</div>
    </header>
  );
}
