import { motion, useReducedMotion, type Transition, type Variants } from 'framer-motion';
import { useCallback, useState, type CSSProperties, type ReactNode } from 'react';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale';

const hiddenOffset: Record<RevealDirection, { x?: number; y?: number; scale?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -36 },
  right: { x: 36 },
  scale: { scale: 0.96, y: 16 },
};

const ease = [0.22, 1, 0.36, 1] as const;

function buildVariants(direction: RevealDirection): Variants {
  return {
    hidden: { opacity: 0, ...hiddenOffset[direction] },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };
}

type Props = {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  amount?: number;
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  style,
  amount = 0.12,
}: Props) {
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);

  const onEnter = useCallback(() => {
    setTick((t) => t + 1);
  }, []);

  const transition: Transition = { duration, delay, ease };

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ ...style, maxWidth: '100%' }}
      onViewportEnter={onEnter}
      viewport={{ amount, margin: '0px 0px 12% 0px', once: false }}
    >
      <motion.div
        key={tick}
        variants={buildVariants(direction)}
        initial="hidden"
        animate={tick > 0 ? 'visible' : 'hidden'}
        transition={transition}
        style={{ maxWidth: '100%' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
