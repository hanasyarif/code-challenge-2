"use client";
import { useEffect } from "react";
import clsx from "clsx";
import Navbar from "../../components/navbar/Navbar.component";
import { useLocaleStore } from "@/core/zustand/locale/store";
import Footer from "../../components/footer/Footer.component";
import { getCompanyDictionaries } from "@/core/dictionaries/company";
import { getContactDictionaries } from "@/core/dictionaries/contact";
import { getMenuDictionaries } from "@/core/dictionaries/menu";
import { useRouter, usePathname } from "next/navigation";

export default function PublicLayout({ children }) {
  const locale = useLocaleStore().locale;
  const menu = getMenuDictionaries(locale).alvisual;
  const company = getCompanyDictionaries(locale).alvisual;
  const contact = getContactDictionaries(locale).alvisual;
  const router = useRouter();
  const pathname = usePathname();

  const defaultLink = "/";

  const handleClickNavbar = (value) => {
    router.push(value);
  };
  const handleClickFooter = (value) => {
    router.push(value);
  };

  return (
    <main className={clsx("w-full")}>
      <Navbar
        defaultLink={defaultLink}
        activeTargetID={pathname}
        list={menu.list}
        onClick={handleClickNavbar}
      />
      {children}
      <Footer
        company={company}
        link={{
          ...menu,
          activeTargetID: pathname,
          defaultLink: defaultLink,
          onClick: handleClickFooter,
        }}
        contact={contact}
        credits={company.credits}
      />
    </main>
  );
}
