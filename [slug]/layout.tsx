import { appRoutingConst } from '@/constant/appRouting';
import { Metadata } from 'next';
import React from 'react';

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