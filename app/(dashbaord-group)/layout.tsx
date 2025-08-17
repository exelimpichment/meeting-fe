import { ShadCnSidebarProvider } from '@/providers/ShadCnSidebarProvider';
import CustomSidebarTrigger from '@/client/sidebar/CustomSidebarTrigger';
import { AppSidebar } from '@/client/sidebar/AppSidebar';
import { getQueryClient } from '@/lib/get-query-client';
import { cookies } from 'next/headers';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { generateConversationsQueryObject } from '@/client/messages/query-options/generate-conversations-query-object';

export default async function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    generateConversationsQueryObject({
      headers: {
        Cookie: cookieStore.toString(),
      },
    }),
  );

  return (
    <ShadCnSidebarProvider>
      {/* TODO: Add a loading state for the sidebar */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AppSidebar />
      </HydrationBoundary>

      <main className="flex h-svh flex-1 flex-col overflow-hidden">
        <CustomSidebarTrigger />

        {children}
      </main>
    </ShadCnSidebarProvider>
  );
}
