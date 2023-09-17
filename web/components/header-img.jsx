import { useEffect } from "react";
import React from "react";

export default function HeaderImg() {
  function marginheader() {
    var main = document.getElementById("main");
    var head = document.getElementById("head").getBoundingClientRect();
    const newhead = head.height.toString();
    main.style.marginTop = newhead + "px";
    main.style.position = "relative";
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      function (event) {
        marginheader();
      },
      true
    );
    marginheader();
  }, []);

  return (
    <>
      <img
        style={{
          width: "100%",
          position: "absolute",
          top: "65px",
          left: "0",
        }}
        src="/parlament.jpg"
        id="head"
      ></img>
    </>
  );
}
