export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
          <p className="text-muted-foreground">계정을 관리하고 서비스에 접속하세요</p>
        </div>
        <div className="bg-background p-6 rounded-xl border shadow-sm">
          {children}
        </div}
      </div>
    </div>
  );
}
