import { SyntheticEvent } from 'react';

import useAccordionContext from './useAccordionContext';

const useAccordionClick = (
  itemKey: number | string,
  onClick?: (e: SyntheticEvent) => void,
  disabled?: boolean
) => {
  const { onToggle } = useAccordionContext();
  if (disabled) return () => {};
  return (event: any) => {
    if (
      event.type === 'keydown' &&
      event.key !== 'Enter' &&
      event.key !== 'Spacebar' &&
      event.key !== ' '
    ) {
      return;
    }
    onToggle?.(itemKey);
    onClick?.(event);
  };
};

export default useAccordionClick;
