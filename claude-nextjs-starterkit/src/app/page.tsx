import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Rocket, Layout, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Build faster with <span className="text-primary">StarterKit</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The ultimate foundation for your next project. Next.js 15, Tailwind CSS v4,
          and shadcn/ui combined into one seamless experience.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">View Documentation</Button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <FeatureCard
          icon={<Zap className="w-6 h-6" />}
          title="Blazing Fast"
          description="Powered by Next.js 15 and Tailwind v4 for optimal performance."
        />
        <FeatureCard
          icon={<Layout className="w-6 h-6" />}
          title="Beautiful UI"
          description="Accessible and customizable components from shadcn/ui."
        />
        <FeatureCard
          icon={<Shield className="w-6 h-6" />}
          title="Type Safe"
          description="Full TypeScript integration for a robust development experience."
        />
        <FeatureCard
          icon={<Rocket className="w-6 h-6" />}
          title="Ready to Deploy"
          description="Optimized for Vercel and other modern hosting platforms."
        />
      </section>

      {/* Demo Section */}
      <section className="bg-muted rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Try a shadcn/ui component</h2>
        <div className="max-w-md mx-auto flex gap-2">
          <Input placeholder="Enter your email..." />
          <Button>Join Waitlist</Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
