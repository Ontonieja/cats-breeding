import demoCat from '@/public/cat1.jpg';
import { PiChatDotsDuotone } from 'react-icons/pi';
import Image from 'next/image';
import SectionWrapper from '@/components/Wrappers/SectionWrappers';
import { Cat } from '@prisma/client';
import Button from '../Base/Button/Button';

interface CatDetailProps {
  catInfo: Cat;
}
export default function CatDetail({ catInfo }: CatDetailProps) {
  return (
    <SectionWrapper>
      <section className="max-container">
        <div className="flex gap-12 max-sm:flex-col ">
          <div className="w-3/5 max-sm:w-full flex-col mt-2">
            <h1 className="text-4xl font-madimi max-sm:mt-2">
              {catInfo?.name}
            </h1>
            <p>{catInfo?.description}</p>
          </div>
          <div className="w-2/5 max-sm:w-full">
            <Image src={demoCat} alt="kot" className="rounded-xl shadow-card" />
          </div>
        </div>

        <div className="flex gap-12 padding-y max-sm:flex-col-reverse">
          <div className="w-2/5 max-sm:w-full">
            <Image src={demoCat} alt="kot" className="rounded-xl shadow-card" />
          </div>
          <div className="w-3/5 text-xl max-sm:w-full">
            <h2 className="text-4xl font-madimi max-sm:mt-2">Informacje</h2>
            <div className="gap-1 flex flex-col mt-2">
              <p>
                <b>Data urodzin: </b> {catInfo?.birthday}
              </p>
              <p>
                <b>Płeć: </b>
                {catInfo?.genderGroup === 'MALE' ? 'Kocur' : 'Kotka'}
              </p>
              <p>
                <b>Matka: </b> {catInfo?.Mother}
              </p>
              <p>
                <b>Ojciec: </b> {catInfo?.father}
              </p>

              <p>
                <b>Grupa krwi: </b> {catInfo?.blood}
              </p>
              <p>
                <b>Kolor: </b> {catInfo?.color}
              </p>
              <div className="flex gap-4 mt-4">
                <Button type="button" buttonStyle="whiteBlue">
                  Rodowód
                </Button>
                <Button type="button" buttonStyle="whiteBlue">
                  PKD
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-y">
          <h3 className="font-madimi text-4xl">Galeria</h3>
          <div className="sm:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4 my-10 overflow-x-scroll sm:overflow-visible flex flex-nowrap sm:flex-wrap max-container">
            <div>
              <Image src={demoCat} alt="demoCat"></Image>
            </div>
            <div>
              <Image src={demoCat} alt="demoCat"></Image>
            </div>
            <div>
              <Image src={demoCat} alt="demoCat"></Image>
            </div>
            <div>
              <Image src={demoCat} alt="demoCat"></Image>
            </div>
            <div>
              <Image src={demoCat} alt="demoCat"></Image>
            </div>
          </div>
        </div>
      </section>
      ;
    </SectionWrapper>
  );
}
