import * as React from "react";
import clsx from "clsx";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import Section from "@/core/ui/components/section/Section.component";
import Breadcrumb from "@/core/ui/components/breadcrumb/Breadcrumb.component";
import { useProductsDictionaries } from "../../zustand/dictionaries/store";
import PersonnelCardProducts from "../../components/personnel_card/PersonnelCard.products";
import TestimonialCardProducts from "@/features/products/components/testimonial_card/TestimonialCard.products";

export default function ContentProducts() {
  const dict = useProductsDictionaries.getState().dict;
  return (
    <div id={"meet-our-teams"} className={clsx("w-full")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
              "w-full",
              "py-[2rem] md:py-[2rem]"
            )}
          >
            <Breadcrumb list={dict.breadcrumb} />

            {/* teams */}
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <h2
                className={clsx(
                  "text-[2.5rem] md:text-[3rem] leading-[3.375rem] md:leading-[4rem] text-eerie-black font-semibold"
                )}
              >
                {dict.products.headline}
              </h2>
            </div>

            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <div
                className={clsx(
                  "grid grid-cols-1 lg:grid-cols-3 place-content-start place-items-start gap-y-[1.5rem] gap-x-[1.5rem]",
                  "w-full"
                )}
              >
                {dict.products.data.map((product) => (
                  <PersonnelCardProducts
                    key={product.id}
                    name={product.name}
                    role={product.role}
                    photo={product.photo}
                    description={product.description}
                    variant={
                      product.name.toLowerCase().includes("yusong")
                        ? "narrow"
                        : "wide"
                    }
                  />
                ))}
              </div>
            </div>

            {/* testimonial */}
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <h2
                className={clsx(
                  "text-[2.5rem] md:text-[3rem] leading-[3.375rem] md:leading-[4rem] text-eerie-black font-semibold"
                )}
              >
                {dict.testimonials.headline}
              </h2>
            </div>

            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <div
                className={clsx(
                  "grid grid-cols-1 lg:grid-cols-3 place-content-start place-items-start gap-y-[1.5rem] gap-x-[1.5rem]",
                  "w-full"
                )}
              >
                {dict.testimonials.data.map((testimony) => (
                  <TestimonialCardProducts
                    key={testimony.id}
                    name={testimony.name}
                    photo={testimony.photo}
                    description={testimony.description}
                    variant={
                      testimony.name.toLowerCase().includes("yusong")
                        ? "narrow"
                        : "wide"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </ContentSection>
      </Section>
    </div>
  );
}
