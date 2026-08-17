import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Shield, Smartphone } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            더 빠르게, 더 완벽하게<br />
            <span className="text-primary">모던 웹 프로젝트를 시작하세요</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Next.js 16, React 19, Tailwind 4 기반의 최적화된 스타터킷입니다.<br />
            복잡한 설정 없이 비즈니스 로직에만 집중하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-8">지금 시작하기</Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">문서 보기</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">압도적인 기술 스택</h2>
            <p className="text-muted-foreground">최신 웹 표준을 준수하는 도구들로 구성되었습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="초고속 성능"
              description="Next.js 16 App Router와 Server Components를 통해 최상의 LCP와 TTI를 제공합니다."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="철저한 타입 안전성"
              description="TypeScript와 Zod를 결합하여 런타임 에러를 최소화하고 개발 생산성을 높였습니다."
            />
            <FeatureCard
              icon={<Smartphone className="h-10 w-10 text-primary" />}
              title="완벽한 반응형"
              description="Tailwind CSS 4의 새로운 기능을 활용하여 모든 기기에서 일관된 UX를 제공합니다."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">합리적인 가격 플랜</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              tier="Free"
              price="0"
              features={["기본 레이아웃", "커뮤니티 지원", "공개 저장소"]}
            />
            <PricingCard
              tier="Pro"
              price="29"
              featured
              features={["모든 프리미엄 템플릿", "우선 지원 서비스", "프라이빗 저장소", "고급 컴포넌트 라이브러리"]}
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              features={["엔터프라이즈 전용 지원", "SLA 보장", "커스텀 온보딩", "보안 감사"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({ tier, price, features, featured = false }: { tier: string, price: string, features: string[], featured?: boolean }) {
  return (
    <div className={cn(
      "p-8 rounded-2xl border flex flex-col",
      featured ? "border-primary ring-2 ring-primary ring-opacity-50 bg-background scale-105 relative z-10" : "bg-background"
    )}>
      {featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">추천</span>}
      <h3 className="text-lg font-semibold mb-2">{tier}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        {price !== "Custom" && <span className="text-muted-foreground text-sm">/월</span>}
      </div>
      <ul className="space-y-3 mb-8 flex-1 text-left">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" /> {f}
          </li>
        ))}
      </ul>
      <Button className={cn("w-full", featured ? "bg-primary" : "variant-outline")}>
        {price === "Custom" ? "문의하기" : "선택하기"}
      </Button>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
