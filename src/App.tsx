import { Suspense } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routers from './setting/routers'
import Navbar from './components/Navbar/Navbar';
import Loading from '../src/components/Loading/Loading';
import { ThemeModeProvider } from './setting/ThemeModeContext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeModeProvider>
      <Router>
        <div className="layout">
          <Navbar />
          <main className="main">
            <Suspense fallback={<Loading />}>
              <Routes>
                {routers.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeModeProvider>
  )
}

export default App
