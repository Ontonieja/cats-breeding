import AuthProvider from '@/components/Auth/AuthProvider';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container p-10 m-auto">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
