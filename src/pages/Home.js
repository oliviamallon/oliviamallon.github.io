import React from "react";

import About from "../components/Cover";
import Credentials from "../components/Credentials";
import AboutBar from "../components/AboutBar";

export default function Home() {
  return (
    <>
      <About />
      <Credentials />
      <AboutBar />
    </>
  );
}
