# landing-vortex

A modern, responsive Next.js landing page for **[VORTEX](https://github.com/jagdep-singh/VORTEX)** — a local terminal coding agent that streams live output, manages files, runs shell commands, and integrates with OpenAI-compatible APIs.

This is the public-facing marketing/informational site for the VORTEX project. It showcases key features, installation steps, and provides a smooth entry point to the main repository.

## 🎯 What This Landing Page Does

- **Hero Section**: High-impact introduction to VORTEX and its core value proposition
- **Features**: Highlights key capabilities (streaming output, tool integration, session management, MCP support, etc.)
- **Tools & Integrations**: Showcases VORTEX's tooling ecosystem
- **Install Instructions**: One-click copy snippets for getting VORTEX running (`pipx`, pip, Docker, local checkout)
- **Terminal Demo**: Live or static mockup of VORTEX in action
- **Docs Page**: Links to fuller documentation (can connect to the main VORTEX repo wiki or docs)
- **Navbar & Footer**: Professional navigation and social/contact links

## 🚀 Quick Start

### 1. Clone

```bash
git clone https://github.com/jagdep-singh/landing-vortex.git
cd landing-vortex
```

### 2. Install dependencies

```bash
npm install
# or yarn, pnpm, etc.
```

### 3. Run development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## 📦 Project Structure

```
app/
  layout.tsx              - shared layout, metadata (SEO, title, favicon, etc.)
  page.tsx                - home page (renders all hero/feature/footer sections)
  docs/page.tsx           - documentation page (gateway to main docs)
  api/docs/route.ts       - example API route (can serve docs or metadata)

components/
  Navbar.tsx              - top navigation bar
  Hero.tsx                - hero/intro section with value prop
  Features.tsx            - feature cards (streaming, tools, sessions, profiles, etc.)
  Tools.tsx               - integrated tools & ecosystem
  Install.tsx             - install snippets & quick-start commands
  TerminalDemo.tsx        - mockup or iframe of VORTEX terminal UI
  Footer.tsx              - footer with links, copyright

public/                   - static assets (images, icons, etc.)

next.config.ts            - Next.js config
tailwind.config.ts        - Tailwind CSS theming
tsconfig.json             - TypeScript config
```

## ✨ Key Components

| Component | Purpose |
|-----------|---------|
| `Hero` | Main value proposition, call-to-action |
| `Features` | Core features of VORTEX (AI agent, TUI, tools, MCP, etc.) |
| `Tools` | Built-in tools, custom tool discovery, MCP support |
| `Install` | Copy-paste install commands for different platforms |
| `TerminalDemo` | Visual demo of VORTEX in action (terminal mockup) |
| `Navbar` | Home, Docs, GitHub links, theme toggle |
| `Footer` | License, contact, social links |

## 🛠️ NPM Scripts

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Build for production
npm run start     # Run production build
npm run lint      # Run ESLint (if configured)
npm run format    # Format code (if configured)
```

## ✍️ Customizing for VORTEX

### Update Hero copy
Edit `components/Hero.tsx` to refine the headline, subheading, and CTA button text.

### Feature cards
Modify `components/Features.tsx` to highlight VORTEX capabilities:
- AI coding agent
- Streaming TUI output
- File read/write/edit tools
- Shell command execution
- Session management & checkpoints
- Custom model profiles
- MCP server integration
- Memory and approval policies

### Install section
Keep `components/Install.tsx` synced with the latest install methods:
- `pipx install vortex-agent-cli`
- `pip install vortex-agent-cli`
- Docker
- Local development checkout

### Terminal demo
Replace or update `components/TerminalDemo.tsx` with a real recording or mockup showing:
- Interactive prompt (`╰─ you ›`)
- Streaming agent output
- Tool call cards
- Command results

### Docs page
`app/docs/page.tsx` can:
- Link to the main VORTEX repo docs
- Embed markdown from the main README
- Show API reference snippets
- Link to GitHub issues/discussions

### Metadata & SEO
Edit `app/layout.tsx` for:
- Page title: "VORTEX — AI Terminal Coding Agent"
- Meta description
- Open Graph tags (image, social preview)
- Favicon

## 🎨 Styling

- **Tailwind CSS**: Pre-configured in `tailwind.config.ts`
- **Dark/light mode**: Can add theme toggle in `Navbar.tsx`
- **Custom colors**: Update Tailwind color palette as needed
- **Typography**: Use Geist font or override in `app/layout.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically on push

```bash
npm run build   # Test build locally first
```

### Other platforms
- **Netlify**: similar GitHub integration
- **AWS Amplify**: supports Next.js SSG/SSR
- **Docker**: included `Dockerfile` for containerized deploys

### Environment variables
If the landing page calls backend APIs or tracks analytics, add to `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=...
```

## 📚 Linking to VORTEX

Key links to embed in the landing page:

- **Main repo**: https://github.com/jagdep-singh/VORTEX
- **PyPI**: https://pypi.org/project/vortex-agent-cli/
- **Docs** (if separate): https://github.com/jagdep-singh/VORTEX/wiki (or similar)
- **Issues**: https://github.com/jagdep-singh/VORTEX/issues
- **Discussions**: https://github.com/jagdep-singh/VORTEX/discussions

## 📝 Notes

- This landing page is a **static or lightly dynamic** site; it does not require a backend
- Consider adding analytics (Vercel Analytics, Plausible, etc.) to track interest
- The `api/docs/route.ts` example can serve API metadata or sync docs from the main repo
- Keep landing page content in sync with the main VORTEX repo README & release notes
- Consider a "Changelog" or "What's New" section linked to GitHub Releases

## 🤝 Contributing

This landing page is part of the VORTEX project. Contributions welcome:

1. Fork & clone
2. Create a feature branch
3. Make changes (copy, components, styling)
4. Test locally (`npm run dev`)
5. Submit a PR to the main VORTEX repo

---

**Made with ❤️ for [VORTEX](https://github.com/jagdep-singh/VORTEX) — an AI terminal coding agent.**
