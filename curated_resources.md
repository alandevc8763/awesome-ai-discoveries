### 🌀 [LACP: Local Agent Control Plane](https://github.com/hermes-projects/lacp)
**$\text{Taxonomy}$**: $\text{Agentic Architecture}$ | **$\text{Signal}$**: Gold $\text{💎}$
||- **$\text{Core Insight}$**: LACP is a unified orchestration harness that decouples agentic reasoning from execution. It functions as the "Cerebral Cortex" of an autonomous system, providing a standardized interface for memory persistence, context injection, and tool orchestration.
||- **$\text{Geek Note}$**: Integrates distributed state-machines (Agent-Native OS), WISC-based context engineering, and hierarchical $\text{Thread} \rightarrow \text{Trace} \rightarrow \text{Span}$ observability for high-fidelity reasoning audits.
||- **$\text{Synergy}$**: Serves as the primary target for Flywheel integration, providing the infrastructure required to implement the 'Critique Loop' and 'Skill Auto-Synthesis'.

### 🌀 [Agent-Native OS (LLM-OS)](https://memgpt.ai)
**$\text{Taxonomy}$**: $\text{Agentic Architecture}$ | **$\text{Signal}$**: Gold $\text{💎}$
||- **$\text{Core Insight}$**: The Agent-Native OS paradigm treats the LLM as a central processing unit (CPU) rather than a static function. By implementing **Virtual Context Management**, the system decouples the *available* context window from the *total* memory, utilizing hierarchical tiers (L1: Context, L2: RAM, L3: Disk) to simulate infinite memory via a page-swapping mechanism.
||- **$\text{Geek Note}$**: Employs an **Interrupt-Driven Architecture** to manage control flow. Instead of a linear request-response loop, the OS can trigger "self-interrupts" to perform memory maintenance, reflection, or state-updates before returning control to the user, mirroring the hardware-level interrupt handling of traditional kernels.
||- **$\text{Synergy}$**: Directly informs the design of LACP's memory persistence layer. Implementing an "Agent-Native OS" kernel within LACP would enable the system to autonomously manage its own cognitive load and long-term state evolution without manual prompt engineering.


### 🌀 [Test-Time Compute Scaling: From Raw Tokenism to Structural Orchestration](https://arxiv.org/abs/2604.10739)
**$\text{Taxonomy}$**: $\text{Agentic Reasoning}$ | $\text{Inference-Time Compute}$ | **$\text{Signal}$**: Gold $\text{💎}$

- **$\text{Core Insight}$**: Increasing the budget for reasoning tokens (e.g., extended Chain-of-Thought) follows a law of diminishing marginal returns and eventually hits an **$\text{Overthinking Threshold}$**. Beyond this point, additional compute leads to "reasoning regression," where models abandon correct initial hypotheses for incorrect complex ones. To bypass this, intelligence must scale **structurally** rather than linearly.
- **$\text{Geek Note}$**: 
  - **$\text{The Overthinking Limit}$**: $\text{Accuracy} \approx f(\text{Compute})$ is non-monotonic. Optimal thinking length is a function of problem complexity $\mathcal{C}$; uniform allocation $\implies$ inefficiency.
  - **$\text{Structural Scaling (Role Orchestration)}$**: Scaling via $\text{Inference-Time Scaffolding}$. Deploying the same model in specialized roles—$\text{Summarizer} \rightarrow \text{Main Agent} \rightarrow \text{Corrector}$—can double goal completion rates (e.g., Qwen3-8B) by decoupling the reasoning process from the context-management and verification processes.
  - **$\text{The Paradox}$**: A small model with high-fidelity structural scaffolding can outperform a model $4\times$ its size running raw inference.
- **$\text{Synergy}$**: Provides the operational limit for the **Sensing $\rightarrow$ Hunting $\text{Alchemy}$** cycle: prevents "over-researching" a gap once the $\text{SNR}$ peaks, and suggests a Role-Orchestrated approach for the Flywheel's own internal agent deployment.
