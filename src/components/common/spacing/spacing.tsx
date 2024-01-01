import { memo } from 'react';

interface Props {
  size: number;
  type?: 'horizontal' | 'vertical';
  children?: never;
}

const Spacing = memo(({ size, type = 'vertical' }: Props) => {
  const style = {
    width: type === 'horizontal' ? size : undefined,
    height: type === 'vertical' ? size : undefined,
  };

  return <div style={style} />;
});

Spacing.displayName = 'Spacing';

export default Spacing;
