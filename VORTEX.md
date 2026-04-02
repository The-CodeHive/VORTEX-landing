# VORTEX

VORTEX is a local terminal coding agent built around an OpenAI-compatible chat API, a Rich-based TUI, and a small tool system for reading files, editing code, running shell commands, and managing sessions.

## What VORTEX Does

- Runs in interactive mode or single-prompt mode
- Streams VORTEX agent output and tool execution in a custom terminal UI
- Lets the model call local tools such as file read/write/edit, search, shell, and memory
- Builds a compact workspace snapshot so the agent starts with project context
- Builds a lightweight symbol index so the agent can reason about functions, classes, structs, and types
- Supports approval policies for risky or mutating actions
- Saves sessions and checkpoints
- Loads extra tools from `.ai-agent/tools`
- Can connect to MCP servers and register their tools
- Supports custom model/provider profiles with different API keys and base URLs

## Quick Start

### Installation

**Recommended (CLI app):**
```bash
pipx install vortex-agent-cli
```

**Local development:**
```bash
python3 -m pip install . --no-build-isolation
```

**One-command install:**
```bash
./scripts/install.sh
```

### Basic Usage

**Interactive mode:**
```bash
vortex
```

**Single prompt:**
```bash
vortex "write a hello world program in c"
```

**Specify working directory:**
```bash
vortex --cwd /path/to/project
```

## Environment Setup

### API Configuration

**Legacy single-provider setup:**
```bash
export API_KEY=your_key_here
export BASE_URL=https://api.openai.com/v1
```

Or create a `.env` file:
```bash
API_KEY=your_key_here
BASE_URL=https://api.openai.com/v1
```

### Model Profiles

VORTEX supports multiple model profiles in `.ai-agent/config.toml`:

```toml
active_model_profile = "openai"

[models.openai]
base_url = "https://api.openai.com/v1"
api_key_env = "OPENAI_API_KEY"

[models.openai.model]
name = "gpt-4"
temperature = 0.2
max_output_tokens = 8192

[models.openrouter]
base_url = "https://openrouter.ai/api/v1"
api_key_env = "OPENROUTER_API_KEY"

[models.openrouter.model]
name = "anthropic/claude-3-haiku"
temperature = 0
max_output_tokens = 8192
```

## Interactive Commands

- `/help` - Show available commands
- `/exit` or `/quit` - Exit the application
- `/clear` - Clear the terminal
- `/scan` - Refresh workspace snapshot
- `/index` - Show symbol index
- `/cwd [path|index]` - Change working directory
- `/recent` - Show recent working directories
- `/config` - Show current configuration
- `/models [refresh]` - List/switch model profiles
- `/model <name|number>` - Switch to specific model
- `/approval <mode>` - Set approval policy
- `/stats` - Show session statistics
- `/tools` - List available tools
- `/mcp` - Show MCP server status
- `/save` - Save current session
- `/checkpoint [name]` - Create checkpoint
- `/sessions` - List saved sessions
- `/resume <session_id>` - Resume session
- `/restore <checkpoint_id>` - Restore checkpoint

## Built-in Tools

VORTEX includes these built-in tools:

- `read_file` - Read file contents
- `write_file` - Create new files
- `edit` - Edit existing files
- `find_symbol` - Search for code symbols
- `shell` - Execute shell commands
- `list_dir` - List directory contents
- `grep` - Search text in files
- `glob` - Find files by pattern
- `web_search` - Search the web
- `web_fetch` - Fetch web content
- `todos` - Manage task lists
- `memory` - Access persistent memory

## Custom Tools

Add custom tools by creating Python files in:
- `<working_directory>/.ai-agent/tools/*.py`
- `~/.config/ai-agent/tools/*.py`

Each file should define `Tool` subclasses that VORTEX will automatically discover and register.

## MCP Support

VORTEX can connect to Model Context Protocol (MCP) servers. Configure them in `.ai-agent/config.toml`:

```toml
[mcp.servers.example]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-everything", "--port", "3000"]
```

## Approval Policies

Control when VORTEX asks for permission:

- `on-request` - Ask before any tool use
- `on-failure` - Ask only after failures
- `auto` - Automatic execution
- `auto-edit` - Auto for edits, ask for others
- `never` - Never ask (dangerous)
- `yolo` - Never ask, maximum automation

## Docker Usage

**Build:**
```bash
docker build -t vortex .
```

**Run:**
```bash
docker run --rm -it \
  --env-file .env \
  -v "$PWD":/workspace \
  -v vortex-data:/data \
  vortex
```

**Compose:**
```bash
docker compose run --rm vortex
```

## Project Structure

```
main.py              # CLI entrypoint
agent/               # Agent loop, events, session management
client/              # OpenAI-compatible API client
config/              # Configuration loading
context/             # Message history and compression
hooks/               # Hook system
prompts/             # System prompt construction
safety/              # Approval policies
tools/               # Built-in and custom tools
ui/                  # Terminal user interface
utils/               # Helper utilities
workspace/           # Default working directory
```

## Requirements

- Python 3.8+
- OpenAI-compatible API access
- Optional: `ddgs` for web search, `fastmcp` for MCP support

## Contributing

VORTEX is open source. Contributions welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

See LICENSE file for details.

## Links

- [GitHub Repository](https://github.com/jagdep-singh/VORTEX)
- [PyPI Package](https://pypi.org/project/vortex-agent-cli/)
- [Documentation](https://github.com/jagdep-singh/VORTEX/wiki)
- [Issues](https://github.com/jagdep-singh/VORTEX/issues)
