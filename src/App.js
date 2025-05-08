import { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  // Automatically redirect to the translated version of the site
  useEffect(() => {
    if (window.location.hostname === 'your-website.com' || window.location.hostname === 'www.your-website.com') {
      window.location.replace('https://bentaidev.vercel.app/');  // Redirect to the translated version
    }
  }, []);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
