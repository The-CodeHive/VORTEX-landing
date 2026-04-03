const STEPS = [
  {
    num: "01",
    title: "Install",
    code: `# Best: pipx for isolated CLI
pipx install vortex-agent-cli

# Local checkout
python3 -m pip install . --no-build-isolation

# One-shot dev env
./scripts/install.sh`,
  },
  {
    num: "02",
    title: "Run",
    code: `# Interactive
vortex

# Single prompt
vortex "write a hello world program in c"

# Choose project up front
vortex --cwd /path/to/project`,
  },
  {
    num: "03",
    title: "Configure",
    code: `# .ai-agent/config.toml
active_model_profile = "openrouter"

[models.openrouter]
base_url = "https://openrouter.ai/api/v1"
api_key_env = "OPENROUTER_API_KEY"

[models.openrouter.model]
name = "openrouter/free"
temperature = 0
max_output_tokens = 8192`,
  },
  {
    num: "04",
    title: "Docker",
    code: `docker run --rm -it \\
  --env-file .env \\
  -v "$PWD":/workspace \\
  -v vortex-data:/data \\
  vortex

# With custom project
docker run --rm -it \\
  -v /path/project:/workspace \\
  vortex --cwd /workspace/subdir`,
  },
];

const COMMANDS = [
  { cmd: "/models [refresh]", desc: "List or probe models for all profiles" },
  { cmd: "/model <name|number>", desc: "Switch profile or pick discovered model" },
  { cmd: "/config", desc: "Show resolved settings" },
  { cmd: "/api-change", desc: "Re-enter provider URL and API key" },
  { cmd: "/scan and /index", desc: "Refresh workspace snapshot and symbol index" },
  { cmd: "/save", desc: "Save current session" },
  { cmd: "/sessions", desc: "List saved sessions" },
  { cmd: "/resume <id>", desc: "Resume a saved session" },
  { cmd: "/checkpoint", desc: "Create named checkpoint" },
  { cmd: "/restore <id>", desc: "Restore from checkpoint" },
  { cmd: "/tools", desc: "Inspect registered tools" },
  { cmd: "/mcp", desc: "Inspect MCP servers" },
  { cmd: "/help", desc: "Full command reference" },
];

export default function Install() {
  return (
    <section id="install" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-cyan/40" />
          <span className="font-mono text-xs text-cyan tracking-widest">
            GET STARTED
          </span>
        </div>
        <h2 className="font-display font-black text-5xl text-text-primary mb-16 max-w-xl leading-tight">
          Install, configure, run.{" "}
          <span style={{ color: "#00e5ff" }}>Four simple steps.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Steps */}
          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: "#00e5ff" }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-text-primary mb-3">
                    {step.title}
                  </div>
                  <div className="panel rounded-lg overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-void-2">
                      <span className="w-2 h-2 rounded-full bg-cyan/40" />
                      <span className="font-mono text-xs text-text-muted">bash</span>
                    </div>
                    <pre className="px-4 py-4 font-mono text-sm text-green-term overflow-x-auto leading-relaxed">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Commands reference */}
          <div>
            <div className="font-display font-bold text-xl text-text-primary mb-6">
              Core Commands
            </div>
            <div className="panel rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-void-2">
                <span className="w-2 h-2 rounded-full bg-cyan/40" />
                <span className="font-mono text-xs text-text-muted">
                  vortex · commands
                </span>
              </div>
              <div className="divide-y divide-border max-h-96 overflow-y-auto">
                {COMMANDS.map((c) => (
                  <div
                    key={c.cmd}
                    className="flex items-start justify-between px-4 py-3 hover:bg-cyan/5 transition-colors duration-150 gap-4"
                  >
                    <code className="font-mono text-xs text-cyan flex-shrink-0 whitespace-nowrap">
                      {c.cmd}
                    </code>
                    <span className="font-body text-xs text-text-muted text-right">
                      {c.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Update & features box */}
            <div className="panel rounded-lg p-6 mt-6">
              <div className="font-display font-semibold text-text-primary mb-4">
                Update & More
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-cyan font-mono text-xs mb-1">Update</div>
                  <p className="text-text-muted">
                    Standard: <code className="text-green-term">vortex --update</code>
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    Local: pull git instead
                  </p>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="text-cyan font-mono text-xs mb-1">Inside App</div>
                  <p className="text-text-muted text-xs">
                    Use <code className="text-green-term">/cwd</code> to switch projects and rebuild context
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
