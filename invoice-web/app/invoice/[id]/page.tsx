import { notFound } from 'next/navigation';
import { getInvoiceById } from '@/lib/notion';
import { Button } from '@/components/ui/button';

export default async function InvoicePage({ params }: { params: { id: string } }) {
  const invoice = await getInvoiceById(params.id);

  if (!invoice) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">견적서 #{invoice?.invoice_number ?? '#'}</h1>
      <p>고객명: {invoice?.client_name}</p>
      <Button className="mt-6">PDF 다운로드</Button>
    </div>
  );
}
