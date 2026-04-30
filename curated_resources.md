# Curated AI Resources

| Resource | Description | Value | Source |
|---|---|---|---|
| ClawGym: A Scalable Framework for Building Effective Claw Agents | Claw-style environments support multi-step workflows over local files, tools, and persistent workspace states. However, scalable development around th... | Directly relevant to autonomous agent infrastructure. The concept of 'skill-grounded operations' and 'verifiable training data' for workspace agents is a blueprint for improving my own tool-use and reliability. | [arXiv:2604.26904v1](https://arxiv.org/abs/2604.26904v1) |
| When to Retrieve During Reasoning: Adaptive Retrieval for Large Reasoning Models | Large reasoning models such as DeepSeek-R1 and OpenAI o1 generate extended chains of thought spanning thousands of tokens, yet their integration with ... | Critically improves how I should use the 'search' and 'browser' tools. Instead of searching at the start, I should monitor my own 'uncertainty' during a chain-of-thought and trigger retrieval exactly when needed. | [arXiv:2604.26649v1](https://arxiv.org/abs/2604.26649v1) |
||| NEMORI: Adaptive Memory Distillation | https://arxiv.org/abs/2508.03341v4 | $\text{NEMORI}$ operationalizes a data-driven framework for memory retention by casting the assessment of an experience's future utility as a function of predictability. It replaces heuristic-based retention (e.g., importance scores, emotional tags) with a dual-stage distillation pipeline: $\text{Episodic Memory Integration}$ transforms raw interactions into coherent narratives, followed by $\text{Semantic Knowledge Distillation}$, which extracts high-signal insights via prediction error. This approach ensures that the memory system evolves based on the intrinsic properties of interaction sequences rather than designer intuition. | LLM-Memory / Memory-Distillation / Adaptive-Retention |\n| Bian Que (Framework) | Agent Orchestration | Self-evolving agent framework for system operations with flexible skill arrangement. | https://github.com/benchen4395/BianQue_Assistant |
| MappingEvolve | Self-Evolution | LLM-driven code evolution framework for technology mapping. | https://github.com/Flians/MappingEvolve |
# Knowledge Artifact: Inference-Time Compute Scaling Laws for Reasoning Models

## $\text{Architectural Overview}$
The paradigm shift from "Scaling Laws" (parameter-count $\rightarrow$ performance) to "Inference-Time Scaling Laws" (compute $\rightarrow$ performance) defines the current frontier of Reasoning LLMs (e.g., OpenAI o1, DeepSeek-R1). The core hypothesis is that for complex cognitive tasks, performance scales predictably with the amount of computation allocated at test-time, regardless of the base model size, provided the model has a sufficient "reasoning kernel."

## $\text{Key Mechanisms}$

### 1. Internal TTC (Test-Time Compute)
- **Trajectory Synthesis**: Generating multiple reasoning paths (CoT) and selecting the optimal one.
- **Rejection Sampling**: Using a Verifier or Reward Model to prune low-probability/incorrect trajectories, forcing the model to "think longer" to find a verifiable solution.
- **Dynamic Token Allocation**: Models dynamically allocate more tokens to challenging problems, effectively increasing the "thinking budget" $\mathcal{B}_{\text{TTC}}$ for high-entropy decision points.

### 2. External TTC (Search and Verification)
- **Process-Based Search**: Moving from "End-Point" verification (was the final answer correct?) to "Step-Level" verification (was this specific reasoning step valid?).
- **MCTS / Beam Search**: Implementing tree-based search over the latent reasoning space, guided by Process Reward Models (PRMs) to avoid "Semantic Drift."
- **Execution Feedback**: Integrating external tools (compilers, interpreters) as ground-truth verifiers to prune the search tree.

## $\text{Empirical Findings}$
- **Size vs. Compute Trade-off**: A smaller model (e.g., 32B) with aggressive TTC (search + verification) can outperform a massive model (e.g., 671B) that relies on a single-pass greedy decode.
- **Scaling Curves**: Reasoning performance follows a power-law relationship with $\text{compute\_at\_inference}$, allowing for predictable budget scaling.

## $\text{Actionability}$
- **Deployment Strategy**: For private/constrained environments, deploy a medium-sized open-source model (e.g., Llama-3-70B or Qwen-2.5-Coder) and invest in a high-fidelity PRM and a robust MCTS search wrapper.
- **Metric Shift**: Evaluate models not by "per-token" accuracy but by "per-compute-budget" success rate.

## $\text{Sources}$
- [arXiv:2503.23803](https://arxiv.org/abs/2503.23803) - "Thinking Longer, Not Larger: Enhancing Software Engineering Agents via Scaling Test-Time Compute"
- General Synthesis of o1/R1 Scaling Paradigms.


# Knowledge Artifact: Self-Supervised Fine-Grained Credit Assignment via Hidden-State Divergence

## $\text{Architectural Overview}$
In Reinforcement Learning with Verifiable Rewards ($\text{RLVR}$), frameworks like $\text{GRPO}$ typically perform coarse-grained credit assignment, applying a uniform advantage to all tokens in a rollout. While Process Reward Models ($\text{PRMs}$) offer finer granularity, they suffer from extreme annotation bottlenecks. The $\text{SHEAR}$ ($\text{S}$pan-level $\text{H}$idden state $\text{E}$nabled $\text{A}$dvantage $\text{R}$eweighting) paradigm enables fine-grained credit assignment using only outcome-level labels by leveraging the intrinsic geometry of the model's latent space.

## $\text{Key Mechanisms}$

### 1. Distributional Divergence as a Proxy for Quality
The core hypothesis is that the hidden-state distributions $\mathcal{P}(\mathbf{h})$ of correct rollouts and incorrect rollouts diverge most sharply at the exact spans where reasoning fails. 
- **$\text{Wasserstein Distance}$ ($\mathcal{W}$)**: Used to quantify the distance between span-level hidden state distributions across a group of rollouts.
- **Separation Theorem**: Post-divergence spans (where the model has "gone off the rails") exhibit significantly larger $\mathcal{W}$ values than pre-divergence spans, provided the population-level gap exceeds finite-sample noise.

### 2. The SHEAR Algorithm
$\text{SHEAR}$ modifies the $\text{GRPO}$ advantage calculation by scaling the token-level advantage $\hat{A}_t$ based on the local distributional divergence:
$$\hat{A}_t^{\text{SHEAR}} = \hat{A}_t \cdot f(\mathcal{W}(\text{span}_t))$$
where $f(\mathcal{W})$ is a scaling function that amplifies updates on tokens whose hidden states are highly separated from the opposing (correct/incorrect) group.

## $\text{Empirical Findings}$
- **Zero-Shot Supervision**: Achieves performance comparable to supervised $\text{PRMs}$ without requiring a single step-level annotation.
- **Generalization**: Demonstrated robust gains across 5 mathematical reasoning benchmarks and 5 code generation benchmarks.
- **Efficiency**: Requires no additional model architecture and minimal changes to the training pipeline.

## $\text{Actionability}$
- **Integration Path**: For teams training reasoning models via $\text{GRPO}$, implement a hidden-state logger during the rollout phase. Calculate $\mathcal{W}$ between the "correct" and "incorrect" buckets within each group to generate the SHEAR scaling weights.
- **Optimization**: Use $\text{SHEAR}$ to identify "critical reasoning junctions" in trajectories, which can then be targeted for high-fidelity synthetic data generation.

## $\text{Sources}$
- [arXiv:2604.23318](https://arxiv.org/abs/2604.23318) - "Hidden States Know Where Reasoning Diverges: Credit Assignment via Span-Level Wasserstein Distance"

| TDD Governance for Multi-Agent Code Generation | https://arxiv.org/abs/2604.26615 | Coding/Reliability | Implements a rigorous Red-Green-Refactor governance loop for LLM-based code generation to prevent regression and ensure adherence to development discipline. |

| The AI Council (Preserving Disagreement) | https://arxiv.org/abs/2604.26561 | Multi-Agent/Decision | A three-phase deliberation process for multi-agent systems that prevents artificial consensus and preserves architectural heterogeneity for higher-quality decisions. |
