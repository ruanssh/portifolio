import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function useTypewriter(text: string, speedMs = 45) {
  const reduceMotion = useReducedMotion();
  const [prevText, setPrevText] = useState(text);
  const [index, setIndex] = useState(0);

  // Reset the typed index whenever the target text changes (e.g. a language
  // switch), following React's "adjust state during render" pattern instead
  // of a synchronous setState-in-effect.
  if (text !== prevText) {
    setPrevText(text);
    setIndex(0);
  }

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setIndex((current) => {
        if (current >= text.length) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, speedMs);

    return () => clearInterval(interval);
  }, [text, speedMs, reduceMotion]);

  const displayed = reduceMotion ? text : text.slice(0, index);
  const done = reduceMotion ? true : index >= text.length;

  return { displayed, done };
}
