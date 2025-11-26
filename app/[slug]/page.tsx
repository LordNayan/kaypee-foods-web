import DynamicProduct from "@/component/dynamicProduct/dynamicProduct";
import { appRoutingConst } from "@/constant/appRouting";
import { notFound } from "next/navigation";

export default async function Page({ params }: any) {
  const awaitedParams = await params;
  const getSlug = awaitedParams && awaitedParams?.slug;
  const isValidSlug = appRoutingConst?.some(
    (route) => route?.slug === awaitedParams?.slug
  );

  if (!isValidSlug) {
    notFound();
  }

  return (
    <div>
      <DynamicProduct getSlug={getSlug} />
    </div>
  );
}
