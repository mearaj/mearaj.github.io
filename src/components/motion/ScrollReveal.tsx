import { motion, useReducedMotion, type Transition } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale';

const hiddenOffset: Record<RevealDirection, { x?: number; y?: number; scale?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: -40 },
  right: { x: 40 },
  scale: { scale: 0.96, y: 20 },
};

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  /** 0–1: how much of the element must be visible before animating */
  amount?: number;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  style,
  amount = 0.18,
  once = true,
}: Props) {
  const reduceMotion = useReducedMotion();
  const offset = hiddenOffset[direction];

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const transition: Transition = { duration, delay, ease };

  const slidesHorizontally = direction === 'left' || direction === 'right';

  return (
    <motion.div
      className={className}
      style={{
        ...style,
        overflowX: slidesHorizontally ? 'clip' : undefined,
        maxWidth: '100%',
      }}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount, margin: '0px 0px -48px 0px' }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
