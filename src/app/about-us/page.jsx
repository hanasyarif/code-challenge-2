import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { useLocaleStore } from "@/core/zustand/locale/store";
import { getAboutUsFeatureDictionaries } from "@/features/about_us/constants/dictionaries";
import BannerAboutUs from "@/features/about_us/fragments/banner/Banner.about_us";
import ContentAboutUs from "@/features/about_us/fragments/content/Content.about_us";
import { useAboutUsDictionaries } from "@/features/about_us/zustand/dictionaries/store";
import MetadataData from "@/core/utils/metadata/metadata.json";

export const metadata = {
  title: MetadataData.teams.title,
  description: MetadataData.teams.description,
};

export default async function AboutUsPage() {
  useLocaleStore.setState({ locale: "en" });
  const dict = getAboutUsFeatureDictionaries("en");
  useAboutUsDictionaries.setState({ dict: dict });
  return (
    <PublicLayout>
      <BannerAboutUs />
      <ContentAboutUs />
    </PublicLayout>
  );
}
