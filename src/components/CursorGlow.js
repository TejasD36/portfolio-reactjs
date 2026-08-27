import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pointerRef = useRef({ x: -100, y: -100 });
  const ringPositionRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return undefined;
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) {
      return undefined;
    }

    document.body.classList.add("has-custom-cursor");

    const onPointerMove = (event) => {
      const { clientX, clientY } = event;
      pointerRef.current = { x: clientX, y: clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX - 3.5}px, ${clientY - 3.5}px, 0)`;
      }
    };

    let animationFrame;
    const animateRing = () => {
      const current = ringPositionRef.current;
      const target = pointerRef.current;
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.x - 17}px, ${current.y - 17}px, 0)`;
      }

      animationFrame = window.requestAnimationFrame(animateRing);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    animationFrame = window.requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <span ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};
