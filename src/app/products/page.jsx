import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { useLocaleStore } from "@/core/zustand/locale/store";
import { getProductsFeatureDictionaries } from "@/features/products/constants/dictionaries";
import BannerProducts from "@/features/products/fragments/banner/Banner.products";
import ContentProducts from "@/features/products/fragments/content/Content.products";
import { useProductsDictionaries } from "@/features/products/zustand/dictionaries/store";
import MetadataData from "@/core/utils/metadata/metadata.json";

export const metadata = {
  title: MetadataData.teams.title,
  description: MetadataData.teams.description,
};

export default async function ProductsPage() {
  useLocaleStore.setState({ locale: "en" });
  const dict = getProductsFeatureDictionaries("en");
  useProductsDictionaries.setState({ dict: dict });
  return (
    <PublicLayout>
      <BannerProducts />
      <ContentProducts />
    </PublicLayout>
  );
}
