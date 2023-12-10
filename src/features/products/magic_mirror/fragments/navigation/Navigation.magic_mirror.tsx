import * as React from "react";
import clsx from "clsx";
import Section from "@/core/ui/components/section/Section.component";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import Breadcrumb from "@/core/ui/components/breadcrumb/Breadcrumb.component";
import { useMagicMirrorDictionaries } from "../../zustand/dictionaries/store";

export interface NavigationMagicMirrorProps {}

export default function NavigationMagicMirror(
  props: NavigationMagicMirrorProps
) {
  const dict = useMagicMirrorDictionaries.getState().dict;
  return <Breadcrumb list={dict.breadcrumb} />;
}
