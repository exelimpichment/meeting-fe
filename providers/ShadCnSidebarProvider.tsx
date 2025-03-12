import { SidebarProvider } from '@/components/ui/sidebar';

export const ShadCnSidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
