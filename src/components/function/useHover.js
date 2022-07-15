import { useRef, useState, useEffect } from "react";

export const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => {
    setHovered(true);
  };
  // const leave = () => {
  //   setHovered(false);
  // };
  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    // ref.current.addEventListener("mouseleave", leave);
    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      // ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
};