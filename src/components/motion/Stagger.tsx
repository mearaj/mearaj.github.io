import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

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

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
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
    direction === 'left' ? { x: -24, y: 0 } : direction === 'right' ? { x: 24, y: 0 } : { y: 24, x: 0 };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{ maxWidth: '100%', overflowX: direction === 'up' ? undefined : 'clip' }}
      variants={{
        hidden: { opacity: 0, ...offset, scale: 0.96 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
