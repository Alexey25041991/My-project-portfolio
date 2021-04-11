import React from 'react';

import HeaderConteiner from '../components/Header';
import AdvantagesSection from '../components/Advantages';
import PersonalInformation from '../components/PersonalInformation';
import Resume from '../components/Resume';
import Services from '../components/Services';
import ServiseList from '../components/ServiseList';
import Portfolio from '../components/Portfolio';
import OrderSite from '../components/OrderSite';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const App = () => (
  <>
    <HeaderConteiner />
    <AdvantagesSection />
    <PersonalInformation />
    <Resume />
    <Services />
    <ServiseList />
    <Portfolio />
    <OrderSite />
    <Blog />
    <Footer />
    <Nav />
  </>
);

export default App;
