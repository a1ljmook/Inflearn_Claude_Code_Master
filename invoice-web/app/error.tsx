"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-destructive/10 rounded-full">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">문제가 발생했습니다</h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            서비스 이용 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
          </p>
        </div>
        <Button onClick={() => reset()} variant="outline">
          다시 시도하기
        </Button>
      </div>
    </div>
  );
}
