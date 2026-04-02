import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Try to read VORTEX.md first, fallback to README.md if it doesn't exist
    let filePath;
    let content;

    try {
      filePath = join(process.cwd(), 'VORTEX.md');
      content = readFileSync(filePath, 'utf8');
    } catch {
      // Fallback to README.md
      filePath = join(process.cwd(), 'README.md');
      content = readFileSync(filePath, 'utf8');
    }

    return Response.json({ content });
  } catch (error) {
    // Return a basic error message with some placeholder content
    const fallbackContent = `# VORTEX Documentation

## Getting Started

VORTEX is a local terminal coding agent built around an OpenAI-compatible chat API.

### Installation

\`\`\`bash
pipx install vortex-agent-cli
\`\`\`

### Quick Start

\`\`\`bash
vortex "write a hello world program in c"
\`\`\`

For more information, visit the [main VORTEX repository](https://github.com/jagdep-singh/VORTEX).

---

*Note: Full documentation is available in the main repository.*
`;

    return Response.json({ content: fallbackContent });
  }
}
