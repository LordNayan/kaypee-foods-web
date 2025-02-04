import { notFound } from 'next/navigation';

const appRoutingConst = [
  { slug: 'truffles' },
  { slug: 'bites' },
  { slug: 'squares' },
  { slug: 'wafer-rolls' },
  { slug: 'bars' },
  { slug: 'gift-boxes' },
];

export default function Page({ params }: any) {
  const isValidSlug = appRoutingConst.some((route) => route?.slug === params?.slug);

  if (!isValidSlug) {
    notFound();
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to {params.slug.replace('-', ' ')}</h1>
    </div>
  );
}