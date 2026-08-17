export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">총 방문자 수</p>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">활성 사용자</p>
          <p className="text-2xl font-bold">567</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">전환율</p>
          <p className="text-2xl font-bold">12.5%</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">매출액</p>
          <p className="text-2xl font-bold">₩4,500,000</p>
        </div>
      </div>
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">최근 활동</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
              <p className="text-sm">사용자 {i}님이 프로필을 업데이트했습니다.</p>
              <p className="text-xs text-muted-foreground">2시간 전</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
