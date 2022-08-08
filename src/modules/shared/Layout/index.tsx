import { ReactNode } from 'react';

export const Layout = ({
  children,
  other,
  footer,
  maxWidth = 1000,
}: {
  children: ReactNode;
  other?: ReactNode;
  footer?: ReactNode;
  maxWidth?: number;
}) => {
  return (
    <div>
      <>{other}</>
      <div style={{ maxWidth, margin: 'auto', padding: 20 }}>{children}</div>
      <>{footer}</>
    </div>
  );
};
