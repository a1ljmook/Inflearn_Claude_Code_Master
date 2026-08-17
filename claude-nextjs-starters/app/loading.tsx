export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
        <p className="text-sm text-muted-foreground animate-pulse">로딩 중...</p>
      </div>
    </div>
  );
}
