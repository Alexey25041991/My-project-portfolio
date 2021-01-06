import { ReactComponent as PriceIcon } from '../icon/PriceIcon.svg';
import { ReactComponent as ExperienceIcon } from '../icon/ExperienceIcon.svg';
import { ReactComponent as TermIcon } from '../icon/TermIcon.svg';
import { ReactComponent as TechnologiesIcon } from '../icon/TechnologiesIcon.svg';
import { ReactComponent as LayoutIcon } from '../icon/LayoutIcon.svg';
import { ReactComponent as SupportIcon } from '../icon/SupportIcon.svg';

export const propsHeaderMenu = [
  {
    id: '1',
    title: 'АКТУАЛЬНЫЕ ЦЕНЫ НА СОЗДАНИЕ ВЕБ-САЙТА',
    label:
      'Я беру за мои услуги столько, сколько они действительно стоят. Ничего лишнего. 100% отработка ваших денег.',
    value: 'Price',
    icon: <PriceIcon />,
  },
  {
    id: '2',
    title: 'БОЛЕЕ 9 ЛЕТ ОПЫТА БОЛЕЕ 160+ САЙТОВ',
    label:
      'Это моя основная деятельность, создано более 100+ сайтов разных тематик - от визитки до интернет-магазина.',
    value: 'Experience',
    icon: <ExperienceIcon />,
  },
  {
    id: '3',
    title: 'САМЫЕ ОПТИМАЛЬНЫЕ СРОКИ РАЗРАБОТКИ',
    label:
      'Предлагаю вам создание сайта любой сложности в самые сжатые сроки, без потери качества выполнения работы.',
    value: 'Term',
    icon: <TermIcon />,
  },
  {
    id: '4',
    title: 'СОВРЕМЕННАЯ ТЕХНИКА ВЕРСТКИ ВЕБ-САЙТА',
    label:
      'При верстке использую HTML5, эффекты создаю при помощи CSS3, а динамику сайту придаю с помощью jQuery.',
    value: 'Technologies',
    icon: <TechnologiesIcon />,
  },
  {
    id: '5',
    title: 'ЧИСТЫЙ КОД И АДАПТИВНАЯ ВЕРСТКА',
    label:
      'HTML код без всего лишнего, понятными названиями классов и отступами. Адаптивая верстка позволяет просматривать сайт как на компьютере так и на моб.устройствах.',
    value: 'Layout',
    icon: <LayoutIcon />,
  },
  {
    id: '6',
    title: 'ОБСЛУЖИВАНИЕ И ПОДДЕРЖКА САЙТА',
    label:
      'Быстро устраню любую проблему на вашем сайте, я всегда на связи, и никуда не пропадаю! Связь как по скайпу так и по телефону.',
    value: 'Support',
    icon: <SupportIcon />,
  },
];
