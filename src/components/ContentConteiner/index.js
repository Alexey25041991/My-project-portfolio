import React from 'react';

import AdvantagesSection from './Advantages';
import PersonalInformation from './PersonalInformation';
import Resume from './Resume';
import Services from './Services';
import ServiseList from './ServiseList';
import Portfolio from './Portfolio';
import OrderSite from './OrderSite';
import Blog from './Blog';

const ContentConteiner = () => (
  <>
    <AdvantagesSection />
    <PersonalInformation />
    <Resume />
    <Services />
    <ServiseList />
    <Portfolio />
    <OrderSite />
    <Blog />
  </>
);

export default ContentConteiner;
