import Link from 'next/link';
import { IoPaw } from 'react-icons/io5';

const Nav = () => {
  return (
    <nav className='flex justify-between item-center p-2'>
      <div className='flex items-center font-madimi'>
        <IoPaw className='size-8 mr-2' />
        Samo szczęście
      </div>
      <ul className='flex gap-4'>
        <li>
          <Link href='/'>Strona główna</Link>
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
