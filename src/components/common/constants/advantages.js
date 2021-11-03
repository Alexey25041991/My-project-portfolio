import { ReactComponent as PriceIcon } from "../icon/icon-advantages/PriceIcon.svg";
import { ReactComponent as ExperienceIcon } from "../icon/icon-advantages/ExperienceIcon.svg";
import { ReactComponent as TermIcon } from "../icon/icon-advantages/TermIcon.svg";
import { ReactComponent as TechnologiesIcon } from "../icon/icon-advantages/TechnologiesIcon.svg";
import { ReactComponent as LayoutIcon } from "../icon/icon-advantages/LayoutIcon.svg";
import { ReactComponent as SupportIcon } from "../icon/icon-advantages/SupportIcon.svg";

export const propsHeaderMenu = [
  {
    id: "1",
    title: "АКТУАЛЬНЫЕ ЦЕНЫ НА СОЗДАНИЕ ВЕБ-САЙТА",
    label:
      "Я беру за мои услуги столько, сколько они действительно стоят. Ничего лишнего. 100% отработка ваших денег.",
    value: "Price",
    icon: <PriceIcon />,
  },
  {
    id: "2",
    title: "БОЛЕЕ 3 ЛЕТ ОПЫТА WEB РАЗРАБОТЧИКОМ",
    label:
      "Это моя основная деятельность, создано большое количество сайтов разной степени сложности - от визитки до интернет-магазина и различных приложений.",
    value: "Experience",
    icon: <ExperienceIcon />,
  },
  {
    id: "3",
    title: "САМЫЕ ОПТИМАЛЬНЫЕ СРОКИ РАЗРАБОТКИ",
    label:
      "Предлагаю вам создание сайта любой сложности в самые сжатые сроки, без потери качества выполнения работы.",
    value: "Term",
    icon: <TermIcon />,
  },
  {
    id: "4",
    title: "СОВРЕМЕННЫЙ СТЕК ТЕХНОЛОГИЙ ПО WEB РАЗРАБОТКЕ",
    label:
      "Использую самые передовые технологии web разработки под каждый проект для наибольшой эффективности и результата",
    value: "Technologies",
    icon: <TechnologiesIcon />,
  },
  {
    id: "5",
    title: "ЧИСТЫЙ КОД, КРОССБРАУЗЕРНОСТЬ И АДАПТИВНАЯ ВЕРСТКА",
    label:
      "Разработка происходит по всем правилам веб-стандартов. А так же адаптивая верстка, которая позволяет просматривать сайт как на компьютере так и на моб.устройствах.",
    value: "Layout",
    icon: <LayoutIcon />,
  },
  {
    id: "6",
    title: "ОБСЛУЖИВАНИЕ И ПОДДЕРЖКА САЙТА В ЛЮБОЕ ВРЕМЯ",
    label:
      "Быстро устраню любую проблему на вашем сайте, я всегда на связи, и никуда не пропадаю! Связь как по скайпу так и по телефону.",
    value: "Support",
    icon: <SupportIcon />,
  },
];
