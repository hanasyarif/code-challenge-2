import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { useLocaleStore } from "@/core/zustand/locale/store";
import { getTeamsFeatureDictionaries } from "@/features/teams/constants/dictionaries";
import BannerTeams from "@/features/teams/fragments/banner/Banner.teams";
import ContentTeams from "@/features/teams/fragments/content/Content.teams";
import { useTeamsDictionaries } from "@/features/teams/zustand/dictionaries/store";
import MetadataData from "@/core/utils/metadata/metadata.json";

export const metadata = {
  title: MetadataData.teams.title,
  description: MetadataData.teams.description,
};

export default async function TeamsPage() {
  useLocaleStore.setState({ locale: "en" });
  const dict = getTeamsFeatureDictionaries("en");
  useTeamsDictionaries.setState({ dict: dict });
  return (
    <PublicLayout>
      <BannerTeams />
      <ContentTeams />
    </PublicLayout>
  );
}
