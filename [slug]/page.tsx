import DynamicProduct from '@/component/dynamicProduct/dynamicProduct';
import { appRoutingConst } from '@/constant/appRouting';
import { notFound } from 'next/navigation';

export default function Page({ params }: any) {
  const getSlug = params && params?.slug;
  const isValidSlug = appRoutingConst?.some((route) => route?.slug === params?.slug);

  if (!isValidSlug) {
    notFound();
  }

  return <DynamicProduct getSlug={getSlug} /> ;
}