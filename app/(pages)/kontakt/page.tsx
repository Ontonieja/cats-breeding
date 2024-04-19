import SectionWrapper from '@/components/Wrappers/SectionWrappers';
import ContactForm from '@/components/Contact/ContactForm';
import contactImg from '@/public/contac.png';
import phoneImg from '@/public/phone-contact.png';
import emailImg from '@/public/mail-contact.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

import Image from 'next/image';
export default function Kontakt() {
  return (
    <SectionWrapper>
      <div className="max-container flex max-sm:flex-col gap-8 mb-12">
        <div className="w-full sm:w-1/2 flex-col ">
          <div className="flex gap-4 justify-between items-center">
            <Image
              src={contactImg}
              width={140}
              alt="kobieta"
              className="sm:mr-8 max-sm:order-2"
            />
            <div className="flex-col">
              <h1 className="text-4xl font-madimi">Kontakt</h1>
              <p className="md:text-xl mt-2">
                Masz pytania? Skorzystaj z formularza poniżej lub skontaktuj się
                bezpośrednio. Odpowiemy tak szybko, jak to możliwe. Dziękujemy
                za zainteresowanie naszą hodowlą!
              </p>
            </div>
          </div>
          <div className="mt-20 flex max-sm:flex-col justify-around gap-4">
            <div className="flex items-center gap-4">
              <MdOutlineEmail className="size-6 text-coral-red" />
              <h2 className="text-xl font-madimi">
                samo.szczesciepl@gmail.com
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="size-6 text-coral-red" />
              <h2 className="text-xl font-madimi">+48 530 984 939</h2>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 bg-light-blue rounded-3xl p-12">
          <div className=" rounded-2xl shadow-xl flex-col px-6 py-6  bg-white sm:px-12 sm:py-12">
            <h1 className="text-4xl font-madimi max-sm:text-3xl">
              Skontaktuj się z nami
            </h1>
            <p className="md:text-xl sm:mt-2  mb-6 sm:mb-12">
              Napisz do nas w każdej chwili!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
