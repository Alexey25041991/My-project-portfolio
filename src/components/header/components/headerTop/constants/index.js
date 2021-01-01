import { ReactComponent as ResumeIcon } from '../icon/ResumeIcon.svg';
import { ReactComponent as PortfolioIcon } from '../icon/PortfolioIcon.svg';
import { ReactComponent as ServicesIcon } from '../icon/ServicesIcon.svg';
import { ReactComponent as СooperationIcon } from '../icon/СooperationIcon.svg';
import { ReactComponent as BlogIcon } from '../icon/BlogIcon.svg';
import { ReactComponent as СontactsIcon } from '../icon/СontactsIcon.svg';

export const propsHeaderMenu = [
  {
    id: '1',
    label: 'Резюме',
    value: 'Resume',
    icon: <ResumeIcon />,
  },
  {
    id: '2',
    label: 'Портфолио',
    value: 'Portfolio',
    icon: <PortfolioIcon />,
  },
  {
    id: '3',
    label: 'Услуги',
    value: 'Services',
    icon: <ServicesIcon />,
  },
  {
    id: '4',
    label: 'Сотрудничество',
    value: 'Сooperation',
    icon: <СooperationIcon />,
  },
  {
    id: '5',
    label: 'Блог',
    value: 'Blog',
    icon: <BlogIcon />,
  },
  {
    id: '6',
    label: 'Контакты',
    value: 'Сontacts',
    icon: <СontactsIcon />,
  },
];
