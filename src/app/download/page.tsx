import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { useLocaleStore } from "@/core/zustand/locale/store";
import { Metadata } from "next";
import MetadataData from "@/core/utils/metadata/metadata.json";
import { getDownloadFeatureDictionaries } from "@/features/download/constants/dictionaries";
import BannerDownload from "@/features/download/fragments/banner/Banner.download";
import ContentDownload from "@/features/download/fragments/content/Content.download";
import { useDownloadDictionaries } from "@/features/download/zustand/dictionaries/store";
import DownloadFeatureDictionariesStoreInitializer from "@/features/download/zustand/dictionaries/initializer";

export const metadata: Metadata = {
  title: MetadataData.download.title,
  description: MetadataData.download.description,
};

export default async function DownloadPage() {
  useLocaleStore.setState({ locale: "en" });
  const dict = getDownloadFeatureDictionaries("en");
  useDownloadDictionaries.setState({ dict: dict });
  return (
    <>
      <DownloadFeatureDictionariesStoreInitializer dict={dict} />
      <PublicLayout>
        <BannerDownload />
        <ContentDownload />
      </PublicLayout>
    </>
  );
}
