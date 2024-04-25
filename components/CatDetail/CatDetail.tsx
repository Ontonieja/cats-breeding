import demoCat from '@/public/cat1.jpg';
import { PiChatDotsDuotone } from 'react-icons/pi';
import Image from 'next/image';
import SectionWrapper from '@/components/Wrappers/SectionWrappers';
import { Cat, CatPhoto } from '@prisma/client';
import Button from '../Base/Button/Button';
import { db } from '@/db';
import {
  getCatGalleryPhotos,
  getCatLinegaeDocument,
  getCatPkdDocument,
} from '@/db/src/services/catPhotosData';
import Link from 'next/link';

interface CatDetailProps {
  catInfo: Cat;
}

export default async function CatDetail({ catInfo }: CatDetailProps) {
  const catPrimaryPhoto = await db.catPhoto.findFirst({
    where: {
      catId: catInfo?.id,
      primary: true,
    },
  });
  const catSecondaryPhoto = await db.catPhoto.findFirst({
    where: {
      catId: catInfo?.id,
      primary: false,
    },
  });
  const galleryImages = await getCatGalleryPhotos(catInfo.id);
  const lineage = await getCatLinegaeDocument(catInfo.id);
  const pkdElement = await getCatPkdDocument(catInfo.id);

  return (
    <SectionWrapper>
      <section className="max-container">
        <div className="flex gap-12 max-md:flex-col ">
          <div className="w-4/5 max-md:w-full flex-col mt-2">
            <h1 className="text-4xl font-madimi max-sm:mt-2">
              {catInfo?.name}
            </h1>
            <p>{catInfo?.description}</p>
          </div>
          <div className="w-full md:w-4/5 lg:1/5">
            <Image
              src={catPrimaryPhoto?.photo || demoCat}
              width={681}
              height={383}
              alt="kot"
              className="rounded-xl shadow-card"
            />
          </div>
        </div>

        <div className="flex gap-12 padding-y max-md:flex-col-reverse">
          <div className="w-full md:w-4/5 lg:1/5">
            <Image
              src={catSecondaryPhoto?.photo || demoCat}
              width={681}
              height={383}
              alt="kot"
              className="rounded-xl shadow-card"
            />
          </div>
          <div className="w-4/5 text-xl max-md:w-full">
            <h2 className="text-4xl font-madimi max-sm:mt-2">Informacje</h2>
            <div className="gap-2 flex flex-col mt-2">
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
              <div className="flex gap-4 mt-4 ">
                <Link href={lineage?.lineage || ''}>
                  <Button type="button" buttonStyle="whiteBlue">
                    Rodowód
                  </Button>
                </Link>
                <Link href={pkdElement?.pkd || ''}>
                  <Button type="button" buttonStyle="whiteBlue">
                    PKD
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-y">
          <h3 className="font-madimi text-4xl">Galeria</h3>
          <div className="sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 auto-rows-[300px] gap-4 my-10 overflow-x-scroll sm:overflow-visible flex flex-nowrap sm:flex-wrap max-container">
            {galleryImages.map(({ photo, id }, index) => {
              return (
                <div
                  key={id}
                  className={`h-full shadow-card w-full rounded-xl overflow-hidden max-sm:min-w-[90%] max-sm:min-h-full sm:hover:scale-105 duration-500`}
                >
                  <Image
                    src={photo}
                    width={533}
                    height={300}
                    alt="kot"
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
