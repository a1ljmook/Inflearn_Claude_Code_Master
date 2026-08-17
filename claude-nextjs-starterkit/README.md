# 🚀 Next.js 15 + Tailwind v4 + shadcn/ui Starter Kit

This is a modern, production-ready starter kit for web development, leveraging the latest ecosystem updates.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first architecture)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### 1. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Run the development server
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

### Tailwind v4 Theme
Since this project uses Tailwind CSS v4, you can customize your design tokens directly in `src/app/globals.css` using the `@theme` block:

\`\`\`css
@theme {
  --color-primary: #your-color;
  /* Add your custom tokens here */
}
\`\`\`

### Adding shadcn/ui Components
You can add more components using the shadcn CLI:
\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`

## 📁 Project Structure
- \`src/app\`: App Router pages and layouts.
- \`src/components/ui\`: Low-level UI components (shadcn).
- \`src/components/layout\`: High-level layout components (Navbar, Footer).
- \`src/lib\`: Utility functions.
