// import type { Metadata } from 'next';

import Prose from 'components/prose';
import { getPage } from 'lib/saleor';
import { notFound } from 'next/navigation';

// export const runtime = 'edge';

export const revalidate = 43200; // 12 hours in seconds

// export async function generateMetadata({
//   params
// }: {
//   params: { page: string };
// }): Promise<Metadata> {
//   const page = await getPage(params.page);

//   if (!page) return notFound();

//   return {
//     title: page.seo?.title || page.title,
//     description: page.seo?.description || page.bodySummary,
//     openGraph: {
//       images: [
//         {
//           url: `/api/og?title=${encodeURIComponent(page.title)}`,
//           width: 1200,
//           height: 630
//         }
//       ],
//       publishedTime: page.createdAt,
//       modifiedTime: page.updatedAt,
//       type: 'article'
//     }
//   };
// }

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-8" html={page.body as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
