import { SidebarProvider } from '@/components/ui/sidebar';
// import { cookies } from 'next/headers';

export const ShadCnSidebarProvider =
  //  async
  ({ children }: { children: React.ReactNode }) => {
    // const cookieStore = await cookies();
    // const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

    return (
      <SidebarProvider
      // defaultOpen={defaultOpen}
      >
        {children}
      </SidebarProvider>
    );
  };
