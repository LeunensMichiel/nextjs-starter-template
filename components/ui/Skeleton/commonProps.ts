import { CSSProperties } from 'react';

const style: CSSProperties = { width: '100%' };

export type CommonSkeletonProps = {
  className?: string;
};

export const CommonSkeletonInlineProps = {
  backgroundColor: 'var(--color-bg-secondary)',
  foregroundColor: 'var(--color-bg-tertiary)',
  style,
};
