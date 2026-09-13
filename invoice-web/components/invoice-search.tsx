'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function InvoiceSearch() {
  const [id, setId] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (id.trim()) {
      router.push(`/invoice/${id.trim()}`);
    }
  };

  return (
    <div className="w-full max-w-md p-6 mx-auto bg-card border rounded-xl shadow-sm">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="invoice-id" className="text-base font-medium">
            견적서 ID 입력
          </Label>
          <div className="flex gap-2">
            <Input
              id="invoice-id"
              placeholder="예: abc123def456"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={!id.trim()}>
              조회하기
            </Button>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          발행자로부터 전달받은 고유 ID를 입력해 주세요.
        </p>
      </form>
    </div>
  );
}
