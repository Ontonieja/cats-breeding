import Link from 'next/link';
import { PawLogo } from '../Icons/Icons';

const Nav = () => {
  return (
    <nav className='flex justify-between item-center py-2'>
      <div className='flex items-center font-madimi'>
        <PawLogo />
        <span className='text-xl leading-none'>
          Samo <br></br>Szczęście
        </span>
      </div>
      <ul className='flex gap-16 text-xl font-medium'>
        <li>
          <Link href='/' className='text-coral-red'>
            Strona główna
          </Link>
        </li>
        <li>
          <Link href='/kocury'>Kocury</Link>
        </li>
        <li>
          <Link href='/kotki'>Kotki</Link>
        </li>
        <li>
          <Link href='/kocieta'>Kocięta</Link>
        </li>
        <li>
          <Link href='/kontakt'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
