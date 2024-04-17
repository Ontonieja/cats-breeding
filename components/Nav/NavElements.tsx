import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavDesktopElementProps {
  title: string;
  href: string;
}

interface NavMobileElementProps {
  title: string;
  href: string;
  onClick: () => void;
}
export function NavDesktopElement({ title, href }: NavDesktopElementProps) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`${pathname === href ? 'text-coral-red' : ''} `}
      >
        {title}
      </Link>
    </li>
  );
}

export function NavMobileElement({
  title,
  href,
  onClick,
}: NavMobileElementProps) {
  const pathname = usePathname();
  return (
    <Link href={href} onClick={onClick}>
      <li className="py-3 cursor-pointer flex gap-2 items-center">{title}</li>
    </Link>
  );
}
