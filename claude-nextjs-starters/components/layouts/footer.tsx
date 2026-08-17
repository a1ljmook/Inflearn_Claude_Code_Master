import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              StarterKit
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              최신 Next.js 스택으로 구축된 전문적인 웹 스타터킷입니다.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">제품</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary transition-colors">특징</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">가격</Link></li>
              <li><Link href="/docs" className="hover:text-primary transition-colors">문서</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">회사</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">소개</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">블로그</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">문의</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">법적 고지</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-primary transition-colors">이용약관</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">개인정보처리방침</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} StarterKit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
