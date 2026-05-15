import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useState, type ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type ContainerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

export function StaggerContainer({
  children,
  className,
  stagger = 0.06,
  delayChildren = 0.08,
}: ContainerProps) {
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);
  const onEnter = useCallback(() => setTick((t) => t + 1), []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      onViewportEnter={onEnter}
      viewport={{ amount: 0.1, margin: '0px 0px 12% 0px', once: false }}
    >
      <motion.div
        key={tick}
        initial="hidden"
        animate={tick > 0 ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: stagger, delayChildren },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

type ItemProps = {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
};

export function StaggerItem({ children, className, direction = 'up' }: ItemProps) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === 'left' ? { x: -20, y: 0 } : direction === 'right' ? { x: 20, y: 0 } : { y: 20, x: 0 };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{ maxWidth: '100%' }}
      variants={{
        hidden: { opacity: 0, ...offset, scale: 0.97 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: 0.45, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
