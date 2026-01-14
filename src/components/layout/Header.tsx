import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/timeline', label: t('nav.timeline') },
    { path: '/archive', label: t('nav.archive') },
    { path: '/about', label: t('nav.about') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TS</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-headline text-lg text-slate-900">Thomas Schmidt</p>
              <p className="text-xs text-slate-500">{t('hero.subtitle')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`
                  text-sm font-medium transition-colors duration-200
                  ${
                    isActive(path)
                      ? 'text-primary-600'
                      : 'text-slate-600 hover:text-primary-600'
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col gap-2">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                    ${
                      isActive(path)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }
                  `}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 px-4 sm:hidden">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
