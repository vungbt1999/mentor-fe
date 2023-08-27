import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
