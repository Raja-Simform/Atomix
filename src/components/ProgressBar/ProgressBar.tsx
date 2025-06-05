import { useEffect, useState } from "react";
import type { ProgressBarProps } from "./ProgressBarType";

export default function ProgressBar({
  domSelector,
  height = 6,
  color = "blue",
  top = 0,
  left = 0,
  onBottom,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = document.getElementById(domSelector);
    function scrollFn() {
      if (element) {
        const scrollTop = element.scrollTop;
        const elementHeight = element.scrollHeight - element.clientHeight;
        const progress = (scrollTop / elementHeight) * 100;
        console.log(progress);
        if (progress === 100 && onBottom) {
          onBottom();
        }
        setProgress(progress);
      }
    }
    element?.addEventListener("scroll", scrollFn);

    return () => {
      element?.removeEventListener("scroll", scrollFn);
    };
  }, [domSelector, onBottom]);

  return (
    <>
      <div
        style={{
          width: `${progress}%`,
          height: `${height}px`,
          backgroundColor: `${color}`,
          position: "fixed",
          top: `${top}`,
          left: `${left}`,
        }}
      />
    </>
  );
}
