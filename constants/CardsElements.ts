import catAstro from '@/public/cat-astronaut.png';
import catFemale from '@/public/cat-female.png';
import catYoung from '@/public/cat-young.png';

export const mainPageMenuCards = [
  {
    title: 'kotki',
    description: 'Kliknij w kartę by zobaczyć nasze piękne kotki!',
    img: catFemale,
    alt: '',
    cardContainerClasses: 'bg-light-pink',
    navContainerClasses: 'border-light-pink',
    href: '/kotki',
  },
  {
    title: 'kocury',
    description: 'Kliknij w kartę by zobaczyć nasze czarujące kocury!',
    img: catAstro,
    alt: '',
    cardContainerClasses: 'bg-light-blue',
    navContainerClasses: 'border-light-blue',
    href: '/kocury',
  },

  {
    title: 'kocięta',
    description: 'Kliknij w kartę by zobaczyć nasze urocze kocięta!',
    img: catYoung,
    alt: '',
    cardContainerClasses: 'bg-light-green',
    navContainerClasses: 'border-light-green',
    href: '/kocieta',
  },
];
