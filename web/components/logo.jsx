import React from "react";
import { useTheme } from "nextra-theme-docs";
import { useEffect, useState } from "react";

function Logo() {
  const [logoURL, setLogoURL] = useState();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setLogoURL(
      resolvedTheme === "dark" ? "/logo-white.png" : "/logo-black.png"
    );
  }, [resolvedTheme]);

  return <img src={logoURL} width={"40px"}></img>;
}

export default Logo;
