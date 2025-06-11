"use client";

import { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (elementRef) => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider
      value={{ homeRef, aboutRef, servicesRef, contactRef, scrollTo }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
