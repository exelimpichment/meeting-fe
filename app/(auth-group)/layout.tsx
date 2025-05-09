import { ThemeChanger } from '@/client/navbar';

export default function AuthGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-muted">
      <div className="absolute top-1 right-1">
        <ThemeChanger className="dark:hover:bg-red-200" />
      </div>

      {children}
    </main>
  );
}
