import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    // The true argument in addEventListener makes the event listener work during the capture phase, rather than the bubble phase.
    // This is useful for ensuring that the modal close logic runs before any other click handlers on the page, particularly those that might be added to elements inside or outside the modal.
    document.addEventListener("click", handleClick, listenCapturing);

    return () => document.removeEventListener("click", handleClick);
  }, [handler, listenCapturing]);
  return ref;
}
