import { SidebarProvider } from '@/client/ui/sidebar';

export const ShadCnSidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
