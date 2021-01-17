import { ReactComponent as ResumeIcon } from '../icon/ResumeIcon.svg';
import { ReactComponent as PortfolioIcon } from '../icon/PortfolioIcon.svg';
import { ReactComponent as ServicesIcon } from '../icon/ServicesIcon.svg';
import { ReactComponent as СooperationIcon } from '../icon/СooperationIcon.svg';
import { ReactComponent as PersonIcon } from '../icon/PersonIcon.svg';
import { ReactComponent as BlogIcon } from '../icon/BlogIcon.svg';
import { ReactComponent as СontactsIcon } from '../icon/СontactsIcon.svg';

export const propsHeaderMenu = [
  {
    id: '1',
    label: 'Обо мне',
    value: 'person',
    icon: <PersonIcon width={32} height={32} fill="#ffff" />,
  },
  {
    id: '2',
    label: 'Резюме',
    value: 'resume',
    icon: <ResumeIcon />,
  },
  {
    id: '3',
    label: 'Услуги',
    value: 'services',
    icon: <ServicesIcon />,
  },
  {
    id: '4',
    label: 'Портфолио',
    value: 'portfolio',
    icon: <PortfolioIcon />,
  },
  {
    id: '5',
    label: 'Сотрудничество',
    value: 'cooperation',
    icon: <СooperationIcon />,
  },
  {
    id: '6',
    label: 'Блог',
    value: 'blog',
    icon: <BlogIcon />,
  },
  {
    id: '7',
    label: 'Контакты',
    value: 'contacts',
    icon: <СontactsIcon />,
  },
];
