export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About StarterKit</h1>
      <p className="text-lg text-muted-foreground mb-4">
        StarterKit is a curated collection of the most modern web development tools,
        designed to eliminate boilerplate and let you focus on building your product.
      </p>
      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <span className="font-bold text-primary">Next.js 15:</span>
          <span>The latest framework for React with App Router and Server Components.</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-bold text-primary">Tailwind CSS v4:</span>
          <span>The next generation of utility-first CSS with a CSS-first configuration.</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-bold text-primary">shadcn/ui:</span>
          <span>A collection of reusable components built on Radix UI and Tailwind CSS.</span>
        </div>
      </div>
      <p className="text-muted-foreground">
        Feel free to use this starter kit for your personal or commercial projects.
        Happy coding!
      </p>
    </div>
  );
}
