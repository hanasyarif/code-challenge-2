"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useHomeDictionaries } from "../../zustand/dictionaries/store";
import Section from "@/core/ui/components/section/Section.component";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import { faker } from "@faker-js/faker";
import TestimonialCardHome from "@/features/home/components/testimonial_card/TestimonialCard.home";

export default function TestimonialsHome() {
  const dict = useHomeDictionaries().dict.testimonials;
  const router = useRouter();

  return (
    <div className={clsx("w-full")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-items-center place-content-center gap-y-[1.5rem]",
              "w-full",
              "py-[3rem] md:py-[6rem]"
            )}
          >
            {/* headline */}
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-start place-items-start gap-y-[1.5rem]",
                  "w-full"
                )}
              >
                <h4
                  className={clsx(
                    "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] text-raisin-black font-normal uppercase tracking-[0.3rem]"
                  )}
                >
                  {dict.pre}
                </h4>
              </div>
            </div>

            {/* values */}
            <div
              className={clsx(
                "grid grid-cols-1 lg:grid-cols-3 place-content-start place-items-start gap-x-[1.25rem] gap-y-[1.25rem]",
                "w-full"
              )}
            >
              {dict.values.map((value) => (
                <TestimonialCardHome
                  key={value.id}
                  image={faker.internet.avatar({ width: 480, height: 480 })}
                  name={value.name}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </ContentSection>
      </Section>
    </div>
  );
}
