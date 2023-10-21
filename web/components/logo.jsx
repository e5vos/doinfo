import React from "react";
import { useTheme } from "nextra-theme-docs";
import { useEffect, useState } from "react";

function Logo() {
  const [logoURL, setLogoURL] = useState();
  const { theme } = useTheme();

  useEffect(() => {
    setLogoURL(theme === "dark" ? "/logo-white.png" : "/logo-black.png");
  }, [theme]);

  return <img src={logoURL} width={"40px"}></img>;
}

export default Logo;
