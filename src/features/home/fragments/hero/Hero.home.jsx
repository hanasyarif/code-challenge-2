"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { useHomeDictionaries } from "../../zustand/dictionaries/store";
import Section from "@/core/ui/components/section/Section.component";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";

export default function HeroHome() {
  const dict = useHomeDictionaries.getState().dict.hero;
  const router = useRouter();

  const handleClickPrimaryCTA = (e) => {
    router.push("/products");
  };

  return (
    <div id={"hero"} className={clsx("w-full", "py-[72px] sm:py-[5.5rem]")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-items-center place-content-center gap-y-[2rem]",
              "w-full",
              "py-[1rem] sm:py-[6rem]"
            )}
          >
            <h1
              className={clsx(
                "text-[2.5rem] leading-[3.375rem] md:text-[52px] md:leading-[60px] lg:text-[3rem] lg:leading-[4rem] font-bold text-eerie-black text-center"
              )}
              // dangerouslySetInnerHTML={{ __html: motto }}
            >
              {dict.headline}
            </h1>

            <p
              className={clsx(
                "text-[1rem] leading-[1.75rem] sm:text-[1.125rem] sm:leading-[2rem] text-granite-gray font-light text-center"
              )}
            >
              {dict.description}
            </p>

            <div
              className={clsx(
                "flex items-center justify-center flex-wrap gap-[1.25rem] sm:gap-[1.5rem]",
                "w-full"
              )}
            >
              <button
                aria-label={dict.cta.primary.text}
                className={clsx(
                  "grid grid-flow-col place-content-center place-items-center",
                  "px-[1.25rem] py-[0.625rem]",
                  "bg-primary",
                  "rounded-[0.375rem]",
                  "border border-primary",
                  "text-[1rem] leading-[2rem] text-white font-semibold uppercase"
                )}
                value={dict.cta.primary.link}
                onClick={handleClickPrimaryCTA}
              >
                {dict.cta.primary.text}
              </button>
            </div>
          </div>
        </ContentSection>
      </Section>

      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center",
          "w-full",
          "bg-lotion"
        )}
      >
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-content-center place-items-center",
              "w-full",
              "overflow-hidden"
            )}
          >
            <div
              className={clsx(
                "h-[330px] lg:h-[648px]",
                "aspect-[6312/4000]",
                "relative"
              )}
            >
              <Image
                src={"/images/home/hero.image.png"}
                alt={"hero-image"}
                fill={true}
                loading={"eager"}
                sizes={"100vw"}
              />
            </div>
          </div>
        </ContentSection>
      </div>
    </div>
  );
}
