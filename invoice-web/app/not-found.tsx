import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-muted rounded-full">
            <FileQuestion className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">페이지를 찾을 수 없습니다</h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            죄송합니다. 요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
        </div>
        <Link href="/">
          <Button>홈으로 돌아가기</Button>
        </Link>
      </div>
    </div>
  );
}
