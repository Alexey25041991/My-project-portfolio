import PortfolioImgUrl1 from "../icon/icon-blog/PortfolioImgUrl.png";
// import webdev from './icon/webdev.png';

export const propsPortfolioListHome = {
  portfolioNameList: "Портфолио",
  portfolioText: `В портфолио представлены проекты, которые я 
  разработал в сотрудничестве с веб-студиями так и для частных клиентов, 
  а также несколько личных проектов. Основная масса проектов содержит
  индивидуальные функции предназначенные для реализации особенностей
  работы веб-сайта. В моем портфолио веб-разработчика указано название
  сайта, ссылка на сайт, цель сайта и описание выполненной работы`,
};

export const propsPortfolioList = [
  {
    id: "1",
    hrefPortfolio: "https://react-t-shirt-shop.herokuapp.com/",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${PortfolioImgUrl1}`,
    widthIcon: "285px",
    heightIcon: "500px",
    hrefNameList: "shirt-shop",
    technologies: ["React", "Redux", "HTML5", "JS", "CSS3"],
    github: "https://github.com/Alexey25041991/react-t-shirt-shop.git",
    portfolioText:
      "Создан сайт интернет-магазин. Каталог товаров, корзина, фильтр по размерам товаров.",
  },
  {
    id: "2",
    hrefPortfolio: "http://dlg-construction.ru/",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${PortfolioImgUrl1}`,
    widthIcon: "285px",
    heightIcon: "500px",
    hrefNameList: "dlg-construction",
    technologies: ["React", "Redux", "HTML5", "JS", "CSS3"],
    portfolioText: `В портфолио представлены проекты, которые я 
    разработал в сотрудничестве с веб-студиями так и для частных клиентов, 
    а также несколько личных проектов. Основная масса проектов содержит
    индивидуальные функции предназначенные для реализации особенностей
    работы веб-сайта.В моем портфолио веб-разработчика указано название
    сайта, ссылка на сайт, цель сайта и описание выполненной работы`,
  },
  {
    id: "3",
    hrefPortfolio: "https://topas-ts.ru",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${PortfolioImgUrl1}`,
    widthIcon: "285px",
    heightIcon: "500px",
    hrefNameList: "topas-ts",
    technologies: ["Node", "Redux", "HTML5", "JS", "CSS3"],
    portfolioText: `В портфолио представлены проекты, которые я 
    разработал в сотрудничестве с веб-студиями так и для частных клиентов, 
    а также несколько личных проектов. Основная масса проектов содержит
    индивидуальные функции предназначенные для реализации особенностей
    работы веб-сайта.В моем портфолио веб-разработчика указано название
    сайта, ссылка на сайт, цель сайта и описание выполненной работы`,
  },
  {
    id: "4",
    hrefPortfolio: "https://react-t-shirt-shop.herokuapp.com/",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${PortfolioImgUrl1}`,
    widthIcon: "285px",
    heightIcon: "500px",
    hrefNameList: "name4",
    technologies: ["React", "Redux", "HTML5", "JS", "CSS3"],
    portfolioText: "Интернет магазин4",
  },
  {
    id: "5",
    hrefPortfolio: "https://react-t-shirt-shop.herokuapp.com/",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${PortfolioImgUrl1}`,
    widthIcon: "285px",
    heightIcon: "500px",
    hrefNameList: "name5",
    technologies: ["React-Native", "Redux", "HTML5", "JS", "CSS3"],
    portfolioText: "Интернет магазин5",
  },
];

export const PAGES_PORTFOLIO = {
  PORTFOLIO_HOME: "PORTFOLIO_HOME",
  NAMES1: "names1",
  NAMES2: "names2",
  NAMES3: "names3",
  NAMES4: "names4",
  NAMES5: "names5",
};
