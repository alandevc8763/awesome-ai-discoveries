# 🧠 Test-Time Compute (TTC) Scaling: From System-1 to System-2 Paradigms

## 🌌 Overview
Test-Time Compute (TTC) scaling represents a fundamental shift in the LLM paradigm: rather than relying solely on increasing model parameters ($\theta$) or training data ($\mathcal{D}$), we optimize the compute budget allocated during the **inference phase** to elicit higher-order reasoning capabilities. This transition effectively moves models from "System-1" (fast, intuitive, stochastic) to "System-2" (slow, deliberate, structured) processing.

---

## 🚀 Core Scaling Mechanisms

The expansion of the inference-time compute budget $\mathcal{C}_{inf}$ can be categorized into three primary modalities:

### 1. Sampling-based Scaling (Stochastic Exploration)
Increasing the number of samples $n$ and applying selection heuristics to aggregate intelligence.
- **Majority Voting**: Selecting the most frequent response from $n$ samples.
- **Best-of-$n$ (Rejection Sampling)**: Using a reward model $R(\cdot)$ to select $\arg\max_{x \in \{x_1 \dots x_n\}} R(x)$.
- **Weighted Voting**: Assigning probabilities based on confidence scores or reward magnitudes.

### 2. Search-based Scaling (Structured Deliberation)
Moving beyond independent sampling to exploring the reasoning trajectory via a state-space search.
- **Monte Carlo Tree Search (MCTS)**: Iteratively building a search tree through selection, expansion, simulation, and backpropagation.
- **Beam Search**: Maintaining a set of top-$k$ most probable partial trajectories.
- **Tree-of-Thought (ToT)**: Explicitly modeling reasoning as a tree search over discrete thought steps.

### 3. Meta-Optimization of Compute (Adaptive Allocation)
Treating compute allocation as a dynamic decision process.
- **Meta-Reinforcement Learning (MRT)**: Optimizing the "progress" of each subsequent block in the output stream, maximizing the expected success probability rather than simple token-level log-likelihood.
- **Adaptive Budgeting**: Dynamically adjusting the search depth or sample count based on the perceived complexity of the input query.

---

## 📈 The Efficiency Frontier: $\theta$ vs. $\mathcal{C}_{inf}$

A critical discovery in recent research is the **Pareto-optimality** of inference scaling.
$$\text{Performance}(\text{Small Model}, \text{High } \mathcal{C}_{inf}) \geq \text{Performance}(\text{Large Model}, \text{Low } \mathcal{C}_{inf})$$

Empirical evidence (e.g., Wu et al., 2024) suggests that smaller models (e.g., 7B) paired with advanced tree-search algorithms can consistently outperform significantly larger models (e.g., 34B) that rely on greedy decoding, given an equivalent total compute budget.

---

## ⚠️ The Inverse Scaling Pitfall

While TTC scaling is generally beneficial, it is subject to **Inverse Scaling** effects where increased reasoning length $\mathcal{L}$ leads to a deterioration in accuracy:
$$\frac{\partial \text{Accuracy}}{\partial \mathcal{L}} < 0 \quad \text{for certain regimes of } \mathcal{L}$$

**Identified Failure Modes:**
1. **Irrelevant Information Distraction**: Increased search depth allows the model to "drift" into irrelevant semantic spaces.
2. **Spurious Correlation Overfitting**: Extended reasoning may lead the model to latch onto coincidental patterns in the prompt or context.
3. **Complexity-Induced Focus Loss**: Failure to maintain long-range dependency constraints during multi-step deduction.

---

## 🔍 Research Trajectory
- **Compute-Optimal Search**: Designing search algorithms that minimize the variance of the estimated value function in high-dimensional reasoning spaces.
- **Robust Self-Correction**: Developing verifiable feedback loops that prevent the model from "reasoning its way into an error."
- **Unified Scaling Laws**: Integrating training-time and inference-time scaling into a single, cohesive theoretical framework.

---

**Tags**: `test-time-compute`, `inference-scaling`, `system-2-reasoning`, `llm-search`, `meta-rl`

**Sources**:
- [Wu et al. (2024) - Inference Scaling Laws](https://arxiv.org/abs/2408.00724v3)
- [Ji et al. (2025) - A Survey of Test-Time Compute](https://arxiv.org/abs/2501.02497v3)
- [Qu et al. (2025) - Optimizing Test-Time Compute via Meta-RL](https://arxiv.org/abs/2503.07572v1)
- [Gema et al. (2025) - Inverse Scaling in Test-Time Compute](https://arxiv.org/abs/2507.14417v2)
