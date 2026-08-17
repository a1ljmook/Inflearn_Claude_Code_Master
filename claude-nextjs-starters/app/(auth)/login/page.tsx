import { LoginForm } from "@/components/features/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">로그인</h1>
      <p className="text-muted-foreground mb-8">계정에 로그인하여 서비스를 계속 이용하세요.</p>
      <LoginForm />
      <p className="mt-6 text-center text-sm text-muted-foreground">
        계정이 없으신가요?{" "}
        <Link href="/signup" className="text-primary hover:underline font-medium">
          회원가입 하기
        </Link>
      </p>
    </div>
  );
}
