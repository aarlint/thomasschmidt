import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Timeline } from './pages/Timeline';
import { About } from './pages/About';
import { Archive } from './pages/Archive';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
