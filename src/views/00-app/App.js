import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from '../../features/navigation/Navigation';
import './App.css';
import Homepage from '../01-homepage/Homepage';
import AboutUs from '../02-about-us/AboutUs';
import CaseStudies from '../03-case-studies/CaseStudies';
import SingleCaseStudies from '../04-single-case-study/SingleCaseStudies';
import Contact from '../05-contact/Contact';
import Footer from '../../features/standalone/Footer';
import Error404 from '../06-error-pages/Error404';

import ScrollToTop from '../../features/functions/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main className='container-wrapper bg-charcoal relative z-10 border-b-8 border-pink'>
        <ScrollToTop>
          <Routes>
            <Route path="/">
              <Route index element={<Homepage />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="case-studies" element={<CaseStudies />} />
              <Route path="case-studies/:id" element={<SingleCaseStudies />} />
              <Route path="contact-us" element={<Contact />} />

              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
