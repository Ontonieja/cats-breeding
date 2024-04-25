import AuthProvider from '@/components/Auth/AuthProvider';
import { ReactNode } from 'react';
import { NavAdminPageElements } from '@/constants/NavElements';
import Nav from '@/components/Nav/Nav';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container p-10 m-auto">
      <div className="padding-b ">
        <Nav navElements={NavAdminPageElements} />
      </div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
