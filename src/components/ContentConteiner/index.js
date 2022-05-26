import React, { useEffect } from "react";

import AdvantagesSection from "./Advantages";
import PersonalInformation from "./PersonalInformation";
import Resume from "./Resume";
import Services from "./Services";
import ServiseList from "./ServiseList";
import Portfolio from "./Portfolio";
import OrderSite from "./OrderSite";
import Blog from "./Blog";
import Nav from "./Nav";

import { IS_SSR } from "../common/constants";

import { store } from "../../store";

const ContentConteiner = () => {
  useEffect(() => {
    const route = IS_SSR && window?.location?.pathname.slice(1);
    store.setRouteLink(route);
  }, []);
  return (
    <>
      <AdvantagesSection />
      <PersonalInformation />
      <Resume />
      <Services />
      <ServiseList />
      <Portfolio />
      <OrderSite />
      <Blog />
      <Nav />
    </>
  );
};

export default ContentConteiner;
