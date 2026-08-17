import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Activity, ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { title: "총 사용자", value: "12,842", icon: Users, trend: "+12%" },
    { title: "총 매출", value: "$45,231", icon: DollarSign, trend: "+8%" },
    { title: "활성 세션", value: "1,203", icon: Activity, trend: "+5%" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">대시보드 개요</h1>
        <p className="text-muted-foreground">서비스의 현재 상태를 한눈에 확인하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-primary font-medium mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                {stat.trend} <span className="text-muted-foreground ml-1">지난달 대비</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">최근 활동</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg border bg-muted/30">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                  U{i}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">사용자 U{i}님이 프로필을 업데이트했습니다.</p>
                  <p className="text-xs text-muted-foreground">2시간 전</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-6 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <Activity className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">데이터 분석 그래프</h3>
            <p className="text-sm text-muted-foreground">이 영역에 차트 라이브러리를 통합하여<br />데이터 시각화를 구현하세요.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
