     1|| Resource | Description | Key Insight | Link |
     2||---|---|---|---|
     3|| LightRAG | Fast GraphRAG framework. | Dual-level retrieval (local/global) significantly outperforms NaiveRAG/GraphRAG. | https://github.com/HKUDS/LightRAG |
     4|| Integuru | AI agent for reverse-engineering internal APIs. | Transforms HAR files into runnable Python integration code via dependency graphing. | https://github.com/Integuru-AI/Integuru |
     5|| LocalAI | Open-source AI engine for running LLMs/Vision/Audio locally. | Drop-in API compatibility with OpenAI/Anthropic; hardware agnostic (CPU/GPU). | https://github.com/mudler/LocalAI |
     6|| Resource Name | Link | Description | Tags |
     7|| :--- | :--- | :--- | :--- |
     8|| Epistemic Uncertainty & Count-Based Exploration | [Internal Artifact](~/hermes-projects/research-flywheel/artifacts/Epistemic-Uncertainty-Sensing.md) | Shifts Gap Detection from semantic distance to density-based pseudo-counts via CFN; enables formal "Sensing" of knowledge voids. | Sensing / Epistemic-Uncertainty / Exploration |
     9|| LLM-AAD: Behavioral Diversity | [Internal Artifact](~/hermes-projects/research-flywheel/artifacts/LLM-AAD-Behavioral-Diversity.md) | Quantifies algorithmic innovation via Problem-Solving Trajectories (PSTrajs) and DTW; solves syntactic convergence in AAD. | AAD / Behavioral Diversity / BehaveSim |
    10|| GRPO: Group Relative Policy Optimization | https://arxiv.org/abs/2501.12948 | Eliminates the critic network in RL by estimating baselines from group-sampled output means, reducing VRAM usage by ~50%. | RL & Reasoning |
    11|| SSL-R1 | [Internal Artifact](~/hermes-projects/research-flywheel/artifacts但不), [Internal Artifact](~/heres-projects/research-flywheel/artifacts/SSL-R1-Visual-RLVR.md) | Operationalizes scalable multimodal reasoning via self-supervised verifiable rewards, bypassing human annotation bottlenecks. | Multimodal-RL / RLVR / Self-Supervised-Learning |
    12|| Schema-Grounded Memory | https://arxiv.org/abs/2604.27906 | Shifts AI memory from simple RAG retrieval to a 'system of record' and iterative, schema-aware extraction, ensuring reliability for facts and state. | Memory / Reliability / Schema |
    13|| ObjectGraph | https://arxiv.org/abs/2604.27820 | Proposes a native agentic file format that replaces linear documents with a knowledge graph for efficient traversal and token-saving retrieval. | Knowledge-Representation / Graph-Native / Tokens |
    14|| Crab Runtime | https://arxiv.org/abs/2604.28138 | A semantics-aware checkpoint/restore Fluorescence-based checkpoint/restore runtime for agent sandboxes, enabling fault tolerance and safe rollback for RL rollout branching. | Infrastructure / Sandbox / RL-Safety |
    15|| Neuro-Symbolic Compositional Generalization | [Internal Artifact](~/hermes-projects/research-flywheel/artifacts/Compositional-Generalization-AGEL.md) | Implements Structural Isomorphism to decouple procedural logic from surface-level lexical features, enabling OOD generalization via topological mapping. | Generalization / Neuro-Symbolic / AGEL-Comp |
    16|# Knowledge Artifact: Causal-Driven Agentic Self-Evolution ($\text{CD-ASE}$)
    17|
    18|## $\text{Architectural Overview}$
    19|$\text{CD-ASE}$ is a framework for transforming agentic self-improvement from heuristic-based reflection to **causal-driven evolution**. Instead of treating the agent's behavior as a black-box sequence of tokens, $\text{CD-ASE}$ models the agent's operational logic as a **Causal Program Graph ($\text{CPG}$)**—a directed hypergraph where nodes are procedural primitives and edges represent causal dependencies.
    20|
    21|The core objective is to transition from $\text{Correlation-based Learning}$ (SFT/PPO) to $\text{Causal-based Discovery}$, allowing the agent to understand *why* a specific trajectory succeeded or failed via counterfactual interventions.
    22|
    23|## $\text{Key Mechanisms}$
    24|
    25|### 1. Counterfactual Probing for Causal Discovery ($\text{CAMO}$)
    26|To avoid the "spurious correlation" trap in self-reflection, the system employs **Counterfactual Probing**.
    27|- **Mechanism**: The agent generates multiple trajectories for a task. It then applies targeted perturbations (micro-behaviors) to the state or action sequence.
    28|- **Causal Attribution**: If a perturbation $\Delta a$ in action $a$ leads to a change in outcome $\Delta o$, the system assigns a causal weight to $a \rightarrow o$.
    29|- **Result**: The agent identifies the "Causal Drivers" of its emergent behavior, distinguishing between necessary steps and coincidental noise.
    30|
    31|### 2. World Modeling via Causal Program Graphs ($\text{CPG}$)
    32|The discovered causal drivers are integrated into a $\text{CPG}$.
    33|- **Structure**: A directed hypergraph where nodes are **SGA Atoms** (State-Goal-Action primitives).
    34|- **Compositional Generalization**: By representing logic as a graph of causal programs, the agent can perform **Structural Analogies**. If a Causal Program $\mathcal{P}_1$ solved Task $A$, and Task $B$ shares the same causal topology, the agent can transplant $\mathcal{P}_1$ to Task $B$ regardless of the surface-level lexical difference.
    35|- **Deduction-Abduction Cycle**: The agent *deduces* plans from the $\text{CPG}$ and *abductively* expands the graph when a failure occurs that cannot be explained by the current causal model.
    36|
    37|### 3. Amortized Causal Reasoning ($\text{SGA-MCTS}$)
    38|To reduce the computational cost of causal discovery at runtime, the system uses **SGA Distillation**.
    39|- **Offline Search**: Use MCTS to find high-fidelity causal trajectories.
    40|- **De-lexicalization**: Transform trajectories into "SGA Atoms"—symbolic slots that capture the underlying causal logic.
    41|- **Execution**: At inference time, the agent performs a fast look-up of the relevant SGA Atom rather than re-running the full causal search.
    42|
    43|## $\text{The Evolutionary Loop}$
    44|$$\text{Experience} \xrightarrow{\text{Counterfactual Probing}} \text{Causal Drivers} \xrightarrow{\text{CPG Integration}} \text{Refined World Model} \xrightarrow{\text{SGA Distillation}} \text{Amortized Policy}$$
    45|
    46|## $\text{Actionability}$
    47|- **Implementation**: Integrate a `CausalProbe` module that automatically perturbs successful trajectories to verify causal necessity.
    48|- **Storage**: Replace flat memory buffers with a `GraphRAG` backed Causal Program Graph.
    49|- **Metric**: Track **Causal Fidelity** ($\text{CF}$) — the percentage of predicted outcome changes that occur when the CPG-suggested perturbations are applied.
    50|
    51|## $\text{Sources}$
    52|- [arXiv:2604.14691v1](https://arxiv.org/abs/2604.14691v1) - CAMO: Automated Causal Discovery from Micro Behaviors.
    53|- [arXiv:2604.26522v1](https://arxiv.org/abs/2604.26522v1) - AGEL-Comp: Neuro-Symbolic Framework for Compositional Generalization.
    54|- [Internal Artifact](~/ai-second-brain/wiki/articles/sga-mcts.md) - SGA-MCTS: Amortized Causal Logic.
    55|
    56|| Intern-Atlas | https://arxiv.org/abs/2604.28158 | Methodological evolution graph for AI research. Blueprint for mapping the lineage of AI techniques. |
    57|| Synthetic Computers | https://arxiv.org/abs/2604.28181 | Methodological framework for scaling synthetic productivity environments for agent self-improvement. |
    58|| Dynamic Memory Topology Optimization ($\text{DMTO}$) | [Internal Artifact](~/hermes-projects/research-flywheel/artifacts/Dynamic-Memory-Topology-Optimization.md) | Meta-cognitive framework for autonomous memory manifold evolution; maximizes $\text{SNR}$ via $\text{T-Collapse}$ and $\text{T-Fission}$. | Memory / Topology / SNR-Optimization || Intern-Atlas | https://arxiv.org/abs/2604.28158v1 | Methodological Evolution Graph for AI Scientists - turns research into a structured graph of technique lineage. |
    59|| Crab | https://arxiv.org/abs/2604.28138v1 | Semantics-Aware Checkpoint/Restore for Agent Sandboxes - enables branching and stateful rollback for agents. |
    60|| Active Inference & Curiosity-Driven Evolution ($\text{AI-CDE}$) | [Internal Artifact](/home/alan/hermes-projects/research-flywheel/artifacts/Active-Inference-CDE.md) | Transforms agents from passive responders to active epistemic seekers via $\text{VFE}$ minimization and active inference; enables autonomous sensing of knowledge voids. | Active-Inference / FEP / Epistemic-Foraging |
    61|| Collaborative Agent Reasoning Engineering (CARE) | Agent Engineering Methodology | Shifts agent design from ad-hoc to stage-gated engineering | [arXiv:2604.28043](https://arxiv.org/abs/2604.28043) |
    62|| Resource Name | Link | Description | Tags |
    63|| :--- | :--- | :--- | :--- |
    64|| MemAPO: Generalizable Self-Evolving Prompt Optimization | [Internal Artifact](~/hermes-projects/research-flywheel/artifacts/MemAPO.md) | Reconceptualizes prompt optimization as a dual-memory system of strategy templates and error patterns, enabling generalizable experience accumulation. | Prompt-Optimization / Memory / Self-Evolution |
    65|
    66|| LLM+ASP Framework | Combines LLMs with Answer Set Programming for nonmonotonic reasoning and iterative self-correction. | Reasoning | https://arxiv.org/abs/2604.27960 |
    67|
| Intrinsic Rewards & Calibration for TTS | [Internal Artifact](~/hermes-projects/research-flywheel/artifacts/Intrinsic-Rewards-TTS.md) | Shifts TTS from external RMs to intrinsic uncertainty (Entropy Centroids) and calibrated margins (RLCM). | TTS / Intrinsic-Rewards / Calibration |
| Knowledge Capsules | Structured nonparametric memory units for LLMs, offering a high-fidelity alternative to flat RAG. | Memory Systems | https://arxiv.org/abs/2604.20487 |
| XGRAG | Graph-native framework for explaining KG-based RAG, improving transparency and reducing hallucinations. | Knowledge Management | https://arxiv.org/abs/2604.24623 |