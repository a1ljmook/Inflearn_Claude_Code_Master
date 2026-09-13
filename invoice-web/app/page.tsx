import { InvoiceSearch } from '@/components/invoice-search';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          노션 기반 <span className="text-primary">견적서 관리 시스템</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Notion의 강력한 데이터베이스를 활용하여 견적서를 효율적으로 관리하고,
          고객에게 전문적인 웹 뷰와 PDF 다운로드 경험을 제공합니다.
        </p>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl bg-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">실시간 연동</h3>
            <p className="text-muted-foreground">
              Notion 데이터베이스와 실시간으로 연결되어 최신 견적 정보를 즉시 반영합니다.
            </p>
          </div>
          <div className="p-6 border rounded-2xl bg-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">빠른 조회</h3>
            <p className="text-muted-foreground">
              고유한 견적서 ID만으로 복잡한 절차 없이 상세 내용을 빠르게 확인할 수 있습니다.
            </p>
          </div>
          <div className="p-6 border rounded-2xl bg-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">전문적인 뷰</h3>
            <p className="text-muted-foreground">
              클라이언트에게 최적화된 웹 인터페이스와 깔끔한 PDF 다운로드 기능을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="flex flex-col items-center px-6 py-20 bg-muted/30">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">견적서 확인하기</h2>
          <p className="text-muted-foreground">
            전달받은 견적서 ID를 입력하여 상세 내용을 확인하세요.
          </p>
        </div>
        <InvoiceSearch />
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} Notion Invoice System. All rights reserved.
      </footer>
    </div>
  );
}
