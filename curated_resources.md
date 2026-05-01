| Resource | Description | Category | Link |
|---|---|---|---|
| Crab: A Semantics-Aware Checkpoint/Restore Runtime for Agent Sandboxes | Introduces state management (C/R) for agent sandboxes, essential for fault tolerance and long-running tasks. | Agent Evolution | https://arxiv.org/abs/2604.28138v1 |
| FAMA: Failure-Aware Meta-Agentic Framework for Open-Source LLMs in Interactive Tool Use Environments | Implements failure-aware meta-frameworks, improving robustness in interactive tool-use environments. | Agent Evolution | https://arxiv.org/abs/2604.25135v1 |
# Knowledge Artifact: Failure-Aware Meta-Agentic Framework ($\text{FAMA}$)

## $\text{Architectural Overview}$
$\text{FAMA}$ addresses the **Cascading Error Problem** in open-source LLM agents operating in interactive tool-use environments. Standard agents often suffer from error accumulation where a single incorrect tool call leads to a divergent trajectory. $\text{FAMA}$ mitigates this by transforming the decision-making process from a monolithic call into a **Meta-Agentic Orchestration** loop.

## $\text{Key Mechanisms}$

### 1. Failure Trajectory Mining ($\text{FTM}$)
The system first performs an a-posteriori analysis of baseline agent failures:
$$\mathcal{F} = \{ \tau_{fail} \mid \text{Outcome}(\tau) = \text{Error} \}$$
By clustering these trajectories, $\text{FAMA}$ identifies the most prevalent "Failure Modes" ($\mathcal{M}_{fail}$), creating a library of known pitfalls.

### 2. Targeted Context Injection ($\text{TCI}$)
Instead of expanding the global context window (which degrades $\text{SNR}$ for smaller models), $\text{FAMA}$ employs a just-in-time orchestration mechanism:
$$\text{Decision} = \text{LLM}(\text{Query}, \text{Context}_{global} + \text{Context}_{targeted}(\mathcal{M}_{fail}))$$
A minimal subset of **Specialized Recovery Agents** is activated based on the current state's proximity to a known failure mode, injecting high-precision guidance immediately before the tool-use step.

## $\text{Empirical Utility}$
- **Reliability**: $\Delta\text{Accuracy} \approx +27\%$ over standard baselines for open-source LLMs.
- **Efficiency**: Avoids the overhead of exhaustive prompting by using a minimal agent subset.

## $\text{Actionability}$
- **Implementation Path**: Integrate a "Failure Monitor" that maps the current agent state to a library of common failure modes, triggering a context-injection step from a specialized "Corrector" agent.
- **Metric Shift**: Measure the **Recovery Rate** (percentage of identified failure-prone states that are successfully corrected).

## $\text{Sources}$
- [arXiv:2604.25135](https://arxiv.org/abs/2604.25135) - FAMA: Failure-Aware Meta-Agentic Framework.
# Knowledge Artifact: Crab (Checkpoint-and-Restore for Agent SandBoxes)

## $\text{Architectural Overview}$
$\text{Crab}$ addresses the **Agent-OS Semantic Gap**: the discrepancy between an agent's high-level tool calls and the actual state changes (filesystems, processes) occurring within the underlying sandbox/microVM. This gap leads to inefficient checkpointing (either too coarse/incorrect or too dense/expensive). $\text{Crab}$ implements a **Semantics-Aware Checkpoint/Restore ($\text{C/R}$)** runtime that optimizes state persistence based on the actual OS-visible effects of each turn.

## $\text{Key Mechanisms}$

### 1. eBPF-Based Effect Inspection ($\text{EEI}$)
$\text{Crab}$ uses eBPF to monitor OS-level events in real-time. It classifies the "Effect Density" of a turn $\tau$:
$$\text{Density}(\tau) = \sum \text{Syscalls}(\text{Write}, \text{Exec}, \text{Network})$$
If a turn produces no recovery-relevant state (which occurs in $>75\%$ of turns), the system skips the checkpoint entirely.

### 2. Turn-Aligned Coordination ($\text{TAC}$)
The runtime aligns the asynchronous C/R process with the agent's turn boundaries, overlapping the expensive I/O of state persistence with the LLM's inference wait time:
$$\text{Latency}_{\text{total}} = \max(\text{Latency}_{\text{Inference}}, \text{Latency}_{\text{C/R}})$$

### 3. Host-Scoped Traffic Scheduling
To prevent I/O storms in dense co-location scenarios, $\text{Crab}$ schedules checkpoint traffic across multiple sandboxes, ensuring that the aggregate throughput does not saturate the host's storage bandwidth.

## $\text{Empirical Utility}$
- **Correctness**: Raises recovery correctness from $8\%$ (chat-only) to $100\%$.
- **Overhead**: Cuts checkpoint traffic by up to $87\%$ while staying within $1.9\%$ of fault-free execution time.

## $\text{Actionability}$
- **Implementation Path**: Implement an eBPF-based monitor to track filesystem and process changes per agent turn. Trigger a full C/R only when "significant" state changes are detected.
- **Metric Shift**: Track **Checkpoint Efficiency** ($\frac{\text{Recovery Correctness}}{\text{Traffic Volume}}$).

## $\text{Sources}$
- [arXiv:2604.28138](https://arxiv.org/abs/2604.28138) - Crab: A Semantics-Aware Checkpoint/Restore Runtime for Agent Sandboxes.
| Synthetic Computers at Scale | 2604.28181 | High-fidelity synthetic data generation for agent RL in OS environments. |
| Intern-Atlas | 2604.28158 | Methodological evolution graph for tracking research lineage. |
| LLM+ASP | 2604.27960 | Nonmonotonic reasoning loop via Answer Set Programming (ASP). |
