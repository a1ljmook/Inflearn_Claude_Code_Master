import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getInvoiceById(id: string) {
  // TODO: Replace with Notion API query logic.
  return null;
}
