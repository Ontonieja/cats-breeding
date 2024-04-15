import SectionWrapper from '@/components/Wrappers/SectionWrappers';
import { db } from '@/db';
import { PiChatDotsDuotone } from 'react-icons/pi';

interface CatDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function CatDetailPage({ params }: CatDetailPageProps) {
  const catDetail = await db.cat.findFirst({
    where: { slug: params.slug },
  });

  return (
    <SectionWrapper>
      <section className="max-container"></section>;
    </SectionWrapper>
  );
}
