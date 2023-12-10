import * as React from "react";
import clsx from "clsx";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import Section from "@/core/ui/components/section/Section.component";
import Breadcrumb from "@/core/ui/components/breadcrumb/Breadcrumb.component";
import { useAboutUsDictionaries } from "../../zustand/dictionaries/store";
import PersonnelCardTeams from "../../components/personnel_card/PersonnelCard.about_us";

export default function ContentAboutUs() {
  const dict = useAboutUsDictionaries.getState().dict;
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

            {/* history */}
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
                {dict.team.history.headline}
              </h2>
              <h3
                className={clsx(
                  "text-[1rem] md:text-[1.125rem] leading-[1.5rem] md:leading-[2rem] text-granite-gray font-light"
                )}
              >
                {dict.team.history.description}
              </h3>
            </div>

            {/* culture */}
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
                {dict.team.culture.headline}
              </h2>
              <h3
                className={clsx(
                  "text-[1rem] md:text-[1.125rem] leading-[1.5rem] md:leading-[2rem] text-granite-gray font-light"
                )}
              >
                {dict.team.culture.description}
              </h3>

              <ul className={clsx("list-disc", "pl-[3rem]")}>
                {dict.team.culture.aspects.map((aspect, aspectIndex) => (
                  <li
                    key={aspectIndex}
                    className={clsx(
                      "text-[1.125rem] leading-[2rem] font-light text-granite-gray"
                    )}
                  >
                    <span
                      className={clsx(
                        "text-[1.125rem] leading-[2rem] font-semibold text-primary"
                      )}
                    >
                      {aspect.name}
                    </span>
                    {": "}
                    <span
                      className={clsx(
                        "text-[1.125rem] leading-[2rem] font-light text-granite-gray"
                      )}
                    >
                      {aspect.description}
                    </span>
                  </li>
                ))}
              </ul>

              <h3
                className={clsx(
                  "text-[1rem] md:text-[1.125rem] leading-[1.5rem] md:leading-[2rem] text-granite-gray font-light"
                )}
              >
                {dict.team.culture.description_2}
              </h3>
            </div>

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
                {dict.team.teams.headline}
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
                  "grid grid-cols-1 lg:grid-cols-2 place-content-start place-items-start gap-y-[1.5rem] gap-x-[1.5rem]",
                  "w-full"
                )}
              >
                {dict.team.founders.map((founder) => (
                  <PersonnelCardTeams
                    key={founder.id}
                    name={founder.name}
                    role={founder.role}
                    photo={founder.photo}
                    description={founder.description}
                    variant={
                      founder.name.toLowerCase().includes("yusong")
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
