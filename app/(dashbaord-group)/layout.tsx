import { AppSidebar } from '@/client/sidebar';
import CustomSidebarTrigger from '@/client/sidebar/CustomSidebarTrigger';
import { ShadCnSidebarProvider } from '@/providers';

export default function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShadCnSidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <CustomSidebarTrigger />

        {children}
      </main>
    </ShadCnSidebarProvider>
  );
}
