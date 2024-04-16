import errorImg from '@/public/error.png';
import Image from 'next/image';
import Button from '@/components/Base/Button/Button';
import Link from 'next/link';
export default function NotFound() {
  return (
    <main className="flex items-center max-sm:flex-col justify-center padding-y gap-10 padding-x">
      <Image src={errorImg} alt="error" width={260}></Image>
      <div>
        <h1 className="text-3xl font-madimi">
          Niestety nie udało się znaleźć kota
        </h1>
        <p className="text-lg">
          Spróbuj ponownie lub przejdź do strony głównej
        </p>
        <div className="mb-20">
          <Link href="/">
            <Button buttonStyle="primary" className="mt-6">
              Strona główna
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
