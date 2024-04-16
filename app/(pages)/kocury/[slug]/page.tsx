import { db } from '@/db';
import CatDetail from '@/components/CatDetail/CatDetail';
import NotFound from './not-found';

interface CatDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function CatDetailPage({ params }: CatDetailPageProps) {
  const catSlug = params.slug;
  const catInfo = await db.cat.findFirst({
    where: { slug: catSlug },
  });

  if (catInfo) {
    return <CatDetail catInfo={catInfo} />;
  } else {
    return NotFound();
  }
}
