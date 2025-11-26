import { appRoutingConst } from '@/constant/appRouting';
import { Metadata } from 'next';
import React from 'react';

interface Route {
  slug: string;
  title: string;
  description: string;
}


export async function generateMetadata({ params }: any): Promise<Metadata> {
  const awaitedParams = await params;
  const currentSlug = appRoutingConst.find((route: Route) => route.slug === awaitedParams.slug);

  if (currentSlug) {
    return {
      title: currentSlug.title,
      description: currentSlug.description,
    };
  }

  return {
    title: 'Not Found | Kay Pee',
    description: 'The page you are looking for does not exist.',
  };
}

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}