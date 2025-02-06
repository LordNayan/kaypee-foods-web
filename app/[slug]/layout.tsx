import { Metadata } from 'next';
import React from 'react';

const appRoutingConst = [
  { slug: 'truffles', title: 'Truffles Delight', description: 'Delicious truffles for you.' },
  { slug: 'bites', title: 'Tasty Bites', description: 'Small bites, big flavors.' },
  { slug: 'squares', title: 'Chocolate Squares', description: 'Perfectly shaped chocolate squares.' },
  { slug: 'wafer-rolls', title: 'Crispy Wafer Rolls', description: 'Crunchy wafer rolls for snack time.' },
  { slug: 'bars', title: 'Chocolate Bars', description: 'Classic chocolate bars you love.' },
  { slug: 'gift-boxes', title: 'Gift Boxes', description: 'Perfect gift boxes for any occasion.' },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const currentSlug = appRoutingConst.find((route) => route.slug === params.slug);

  if (currentSlug) {
    return {
      title: currentSlug.title,
      description: currentSlug.description,
    };
  }

  return {
    title: 'Not Found',
    description: 'The page you are looking for does not exist.',
  };
}

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}