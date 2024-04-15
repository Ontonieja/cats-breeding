import catAstro from '@/public/cat-astronaut.png';
import catFemale from '@/public/cat-female.png';
import catYoung from '@/public/cat-young.png';

export const mainPageMenuCards = [
  {
    title: 'kocury',
    description: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
    img: catAstro,
    alt: '',
    cardContainerClasses: 'bg-light-blue',
    navContainerClasses: 'border-light-blue',
    href: '/kocury',
  },
  {
    title: 'kotki',
    description: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
    img: catFemale,
    alt: '',
    cardContainerClasses: 'bg-light-pink',
    navContainerClasses: 'border-light-pink',
    href: '/kotki',
  },
  {
    title: 'kocięta',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    img: catYoung,
    alt: '',
    cardContainerClasses: 'bg-light-green',
    navContainerClasses: 'border-light-green',
    href: '/kocieta',
  },
];
