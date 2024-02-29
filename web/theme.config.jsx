import React from "react";
import { ThemeSwitch } from "nextra-theme-docs";
import Logo from "./components/logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const config = {
  logo: () => {
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Logo></Logo>
        <span style={{ fontWeight: "bold" }}>EJG Diákönkormányzat</span>
      </div>
    );
  },
  head: (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png?v=1"
      />
      <link rel="manifest" href="/site.webmanifest?v=1" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#ff7900" />
      <link rel="shortcut icon" href="/favicon.ico?v=1" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  ),
  logoLink: "/",
  useNextSeoProps() {
    return {
      titleTemplate: "%s | EJG DÖ",
    };
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "light",
  },
  primaryHue: { light: 220, dark: 200 },
  search: {
    emptyResult: (
      <p className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        Hmm... Úgy tűnik nincs ilyen információ.
      </p>
    ),
    loading: "Betöltés...",
    placeholder: "Keresés az oldalon...",
  },
  navbar: {
    extraContent: <ThemeSwitch lite={true}></ThemeSwitch>,
  },
  sidebar: {
    toggleButton: true,
  },
  editLink: {
    component: () => <></>,
  },
  navigation: false,
  toc: {
    title: "Tartalomjegyzék",
  },
  feedback: {
    content: null,
  },
  docsRepositoryBase: "https://github.com/barnagoz/do/tree/main/web/",
  footer: {
    component: (
      <div
        style={{
          padding: "1rem",
          display: "flex",
          gap: "1rem",
          fontSize: "0.8rem",
          justifyContent: "space-between",
          color: "#666",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "0.8rem",
          }}
        >
          <p>
            {new Date().getFullYear()} ©{" "}
            <a href="https://e5vosdo.hu" target="_blank">
              Eötvös József Gimnázium Diákönkormányzata
            </a>
          </p>
          <p>
            Developed by <a href="https://barnagoz.com">Barnabás Gőz</a>
          </p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
        >
          <p>
            <a href="/contact" target="_blank">
              Kapcsolat
            </a>
          </p>
          <a
            href="https://www.facebook.com/e5vosdo"
            target="_blank"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaFacebook size={"18px"} />
          </a>
          <a
            href="https://www.instagram.com/e5vosdo/"
            target="_blank"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaInstagram size={"18px"} />
          </a>
        </div>
      </div>
    ),
  },
  banner: {
    dismissible: true,
    key: "webagain",
    text: "Újra elérhető információs weboldalunk!",
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Világos mód",
        dark: "Sötét mód",
        system: "Rendszer által beállított",
      };
    },
  },
  gitTimestamp: <></>,
};

export default config;
