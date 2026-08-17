export default function Footer() {
  return (
    <footer className="border-t py-6 bg-background">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} StarterKit. Built with Next.js 15, Tailwind v4, and shadcn/ui.</p>
      </div>
    </footer>
  );
}
