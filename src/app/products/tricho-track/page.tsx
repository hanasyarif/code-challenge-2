import clsx from "clsx";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import Section from "@/core/ui/components/section/Section.component";
import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { useLocaleStore } from "@/core/zustand/locale/store";
import { getTrichoTrackFeatureDictionaries } from "@/features/products/tricho_track/constants/dictionaries";
import BannerTrichoTrack from "@/features/products/tricho_track/fragments/banner/Banner.tricho_track";
import { useTrichoTrackDictionaries } from "@/features/products/tricho_track/zustand/dictionaries/store";
import NavigationTrichoTrack from "@/features/products/tricho_track/fragments/navigation/Navigation.tricho_track";
import OverviewTrichoTrack from "@/features/products/tricho_track/fragments/overview/Overview.tricho_track";
import ArchitectureTrichoTrack from "@/features/products/tricho_track/fragments/architecture/Architecture.tricho_track";
import TrichoTrackFeatureDictionariesStoreInitializer from "@/features/products/tricho_track/zustand/dictionaries/initializer";
import { Metadata } from "next";
import MetadataData from "@/core/utils/metadata/metadata.json";

export const metadata: Metadata = {
  title: MetadataData.tricho_track.title,
  description: MetadataData.tricho_track.description,
};

export default async function TrichoTrackPage() {
  useLocaleStore.setState({ locale: "en" });
  const dict = getTrichoTrackFeatureDictionaries("en");
  useTrichoTrackDictionaries.setState({ dict: dict });
  return (
    <PublicLayout>
      <TrichoTrackFeatureDictionariesStoreInitializer dict={dict} />
      <BannerTrichoTrack />

      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
              "w-full",
              "py-[5rem]"
            )}
          >
            <NavigationTrichoTrack />
            <OverviewTrichoTrack />
            <ArchitectureTrichoTrack />
          </div>
        </ContentSection>
      </Section>
    </PublicLayout>
  );
}
