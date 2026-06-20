'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  showCursor?: boolean;
  startOnMount?: boolean;
  /** Skip animation entirely — show full text immediately, no cursor */
  skip?: boolean;
  onDone?: () => void;
}

export default function TerminalTyping({
  text,
  speed = 35,
  delay = 0,
  className = '',
  style,
  showCursor = true,
  startOnMount = false,
  skip = false,
  onDone,
}: Props) {
  const [displayed, setDisplayed] = useState(skip ? text : '');
  const [done, setDone] = useState(skip);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  // Stable ref so onDone identity changes never re-trigger the effect
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  // Only set true when typing reaches the final character.
  // Unlike startedRef, cleanup does NOT reset this — so re-renders after
  // completion never restart the animation. StrictMode's double-invoke is
  // handled naturally: the first run gets cleaned up before finishing,
  // completedRef stays false, the second run proceeds and completes.
  const completedRef = useRef(false);

  const shouldStart = !skip && (startOnMount || isInView);

  useEffect(() => {
    if (!shouldStart || completedRef.current) return;

    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          completedRef.current = true;
          setDone(true);
          onDoneRef.current?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      // intentionally NOT resetting completedRef — completion is permanent
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldStart]);

  return (
    <span ref={ref} className={className} style={style}>
      {displayed}
      {showCursor && !done && (
        <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 align-middle animate-pulse" />
      )}
      {showCursor && done && !skip && (
        <span
          className="inline-block w-2 h-4 bg-green-400 ml-0.5 align-middle"
          style={{ animation: 'blink 1s step-end infinite' }}
        />
      )}
    </span>
  );
}
