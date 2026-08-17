import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center px-4">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
        Next.js 스타터 프로젝트에 오신 것을 환영합니다
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground mb-10">
        이 프로젝트는 Claude Code를 사용하여 빠르게 개발할 수 있도록 설계된 최적의 스타터 템플릿입니다.
        모던한 UI 컴포넌트와 최적화된 구조를 경험해 보세요.
      </p>
      <div className="flex gap-4">
        <Link href="/login">
          <Button size="lg">시작하기</Button>
        </Link>
        <Link href="/dashboard">
          <Button size="lg" variant="outline">대시보드 보기</Button>
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">빠른 설정</h3>
          <p className="text-muted-foreground">
            복잡한 설정 없이 바로 개발을 시작할 수 있도록 모든 기본 설정이 완료되어 있습니다.
          </p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">모던 스택</h3>
          <p className="text-muted-foreground">
            Next.js, Tailwind CSS, TypeScript, Zod 등 최신 기술 스택을 사용합니다.
          </p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">Claude 최적화</h3>
          <p className="text-muted-foreground">
            Claude Code가 코드를 더 잘 이해하고 수정할 수 있도록 구조화되어 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
