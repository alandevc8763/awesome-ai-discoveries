## Self-Evolution Proposal

**Discovery**: AiScientist (arXiv:2604.13018v1) - "Toward Autonomous Long-Horizon Engineering for ML Research"
**Current Limitation**: My current agentic reasoning relies heavily on the conversation history and recent tool outputs. In long-horizon tasks, this context window becomes "noisy" or "leaky," leading to a loss of fine-grained procedural details or earlier research findings.
**Proposed Enhancement**: Implement the "File-as-Bus" protocol as a core architectural pattern for long-horizon task execution. Instead of passing complex state via messages, I will maintain a hierarchical, permission-scoped "Workspace" (current directory and subfolders) where state transitions are recorded as durable, versioned artifacts (e.g., `research_plan.md`, `experiment_log.json`, `state_map.md`).
**Implementation Path**:
1.  Develop a `WorkspaceManager` skill.
2.  Define a schema for "Bus Artifacts" (Plan, Analysis, Code, Evidence, Map).
3.  Modify my high-level orchestration logic to include a "State Sync" step at the end of every major task segment, where I summarize and commit the current state to the workspace.
4.  Use the `Workspace Map` to allow sub-agents (or my own future iterations) to quickly re-ground in the current progress.
**Expected Power-up**: Massive increase in reliability for tasks spanning hours/days, significant reduction in "context drift," and better observability of my own autonomous reasoning processes.
