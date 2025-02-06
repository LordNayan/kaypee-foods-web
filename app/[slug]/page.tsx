import { notFound } from 'next/navigation';

const appRoutingConst = [
  { slug: 'truffles' },
  { slug: 'bites' },
  { slug: 'squares' },
  { slug: 'wafer-rolls' },
  { slug: 'bars' },
  { slug: 'gift-boxes' },
];

interface PageParams {
  slug: string;
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  const isValidSlug = appRoutingConst.some(
    (route) => route?.slug === resolvedParams?.slug
  );

  if (!isValidSlug) {
    notFound();
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">
        Welcome to {resolvedParams.slug.replace("-", " ")}
      </h1>
    </div>
  );
}