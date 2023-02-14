import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      const classNa = event.target;
      const child = "iam child";
      const staticCell = "table-static-cll";
      console.log("event.target", classNa);
      if (
        ref.current &&
        (!ref.current.contains(event.target) ||
          event.target.hasAttribute("disabled"))
      ) {
        console.log("useOutsideAlerter clicked");
      }
    }
    // Bind the event listene
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      // console.log("clicked removed");

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
