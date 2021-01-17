import React from 'react';

import HeaderConteiner from '../components/header';
import AdvantagesSection from '../components/advantages';
import PersonalInformation from '../components/personalInformation';
import Resume from '../components/resume';
import Services from '../components/services';
import ServiseList from '../components/serviseList';
import Portfolio from '../components/portfolio';
import OrderSite from '../components/orderSite';
import Blog from '../components/blog';
import Footer from '../components/footer';
import Nav from '../components/nav';

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
