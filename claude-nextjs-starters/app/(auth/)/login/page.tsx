import Link from "next/link";
import { LoginForm } from "@/components/features/auth/login-form";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">로그인</h2>
        <p className="text-sm text-muted-foreground">서비스 이용을 위해 로그인 해주세요.</p>
      </div>
      <LoginForm />
      <div className="text-center text-sm">
        계정이 없으신가요? <Link href="/register" className="text-primary hover:underline font-medium">회원가입 하러가기</Link>
      </div>
    </div>
  );
}
