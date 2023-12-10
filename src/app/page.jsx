import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { useLocaleStore } from "@/core/zustand/locale/store";
import { getHomeFeatureDictionaries } from "@/features/home/constants/dictionaries";
import AboutUsHome from "@/features/home/fragments/about_us/AboutUs.home";
import HeroHome from "@/features/home/fragments/hero/Hero.home";
import ProductsHome from "@/features/home/fragments/products/Products.home";
import TestimonialsHome from "@/features/home/fragments/testimonials/Testimonials.home";
import HomeFeatureDictionariesStoreInitializer from "@/features/home/zustand/dictionaries/initializer";
import { useHomeDictionaries } from "@/features/home/zustand/dictionaries/store";

export default function HomePage() {
  useLocaleStore.setState({ locale: "en" });
  const dict = getHomeFeatureDictionaries("en");
  useHomeDictionaries.setState({ dict: dict });
  return (
    <PublicLayout>
      <HomeFeatureDictionariesStoreInitializer dict={dict} />
      <HeroHome />
      <AboutUsHome />
      <ProductsHome />
      <TestimonialsHome />
    </PublicLayout>
  );
}
