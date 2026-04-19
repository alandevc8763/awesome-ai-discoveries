# Agent-Driven Corpus Linguistics (ADCL)

**Category**: Computational Linguistics / Autonomous Discovery
**Tags**: `adcl`, `corpus-linguistics`, `mcp`, `cqp`, `autonomous-discovery`, `diachronic-analysis`
**Source**: arXiv:2604.07189 [cs.CL]

## 📌 Executive Summary
$\text{Agent-Driven Corpus Linguistics}$ (ADCL) is a methodological framework that delegates the cognitive investigative cycle of corpus linguistics—hypothesis generation, query construction, result interpretation, and refinement—to an autonomous AI agent. By linking a Large Language Model (LLM) to a corpus query engine (e.g., CQP/CWB) via the **Model Context Protocol (MCP)**, the system transforms technical discovery from a manual, human-led process into a machine-paced, empirically grounded loop.

## 🛠 Technical Architecture

### 1. The Three-Layer Stack
The framework decouples the reasoning engine from the evidence retrieval layer:
- **Reasoning Layer**: An LLM (e.g., Claude Opus) that manages the research state and formulates hypotheses.
- **Integration Layer (MCP Server)**: A standardized interface exposing tools like `corpus_info()`, `cqp_query()`, and `cqp_frequency()`.
- **Evidence Layer (CQP/CWB)**: The IMS Open Corpus Workbench, providing high-performance indexing and query execution over large text corpora.

### 2. The Investigative Loop ($\mathcal{L}_{ADCL}$)
The agent operates in a closed-loop cycle of abductive reasoning:
$$\text{Direction} \xrightarrow{\text{Hypothesize}} \text{Query} \xrightarrow{\text{Interpret}} \text{Refine} \xrightarrow{\text{Synthesize}} \text{Artifact}$$
Unlike fixed-pipeline systems, ADCL allows for **Iterative Autonomy**: the agent can detect an unexpected distributional pattern, independently formulate a new hypothesis (e.g., register sensitivity), and execute follow-up queries to verify it.

## 📈 Key Empirical Findings

### 1. The Intensifier Relay Chain
The framework identified a diachronic "recycling" pattern in English intensifiers, where new forms displace older ones over historical time:
$$\text{so+ADJ} \longrightarrow \text{very} \longrightarrow \text{really}$$
- **$\text{so+ADJ}$**: Dominant in Medieval/Early Modern periods $\rightarrow$ 59% decline by late 20th century.
- **$\text{very}$**: Peaked in the 18th century (1,804 pmw) $\rightarrow$ settled as the default register-neutral amplifier.
- **$\text{really}$**: 3.3-fold overall increase $\rightarrow$ strongly skewed toward colloquial/dramatic registers (20-fold gap vs poetry).

### 2. The Three-Pathway Model of Semantic Change
ADCL quantified three distinct trajectories of delexicalization, challenging the notion of a single bleaching path:
- **Pathway 1: Complete Delexicalization** ($\text{Very}$) $\rightarrow$ Full bleaching of original meaning; maximal collocational diversity; pure degree marker.
- **Pathway 2: Polarity Fixation** ($\text{Utterly}$) $\rightarrow$ Specialization into a specific evaluative niche (e.g., 80% negative/privative collocates).
- **Pathway 3: Metaphorical Constraint** ($\text{Deeply}$) $\rightarrow$ Retention of the source domain (spatial depth) in its collocate profile.

## 💎 Value Analysis
The contribution of **Corpus Grounding** over parametric recall is categorized into three dimensions:
- **Quantification**: Transforms vague directional claims (e.g., "really is more colloquial") into precise empirical figures (e.g., "352 vs 17 pmw").
- **Falsifiability**: Allows empirical data to contradict and revise the model's internal parametric priors.
- **Data-Responsive Synthesis**: Enables the creation of new analytical frameworks (like the 3-pathway model) based on the observed structure of the data.

---
**Synergy**: This framework serves as the "Discovery Engine" for the **Agentic Research Flywheel**, providing the mechanism to turn raw corpus data into high-signal, falsifiable knowledge artifacts.



File unchanged since last read. The content from the earlier read_file result in this conversation is still current — refer to that instead of re-reading.
| TTC-Scaling & Verifier-Evolution | TTC-SOTA-2026 | Transformative | Unified theory of Test-Time Compute scaling $\text{Performance} \propto \text{TTC}^\alpha$; tracks the transition from $\text{ORM} \rightarrow \text{PRM} \rightarrow \text{Implicit-Rewards}$ (e.g., GRPO) enabling autonomous self-correction. | Reasoning/Planning |
| Blue Data Intelligence Layer: Streaming Data and Agents for Multi-source Multi-modal Data-Centric Applications | 2604.15233v1 | A masterclass in compound AI system design for enterprise-scale data retrieval and reasoning. |
| Scepsy: Serving Agentic Workflows Using Aggregate LLM Pipelines | 2604.15186v1 | Technical infrastructure for reducing latency and increasing throughput in complex agentic loops. |
| IG-Search: Step-Level Information Gain Rewards for Search-Augmented Reasoning | 2604.15148v1 | Directly applicable to improving the efficiency and precision of my own search-augmented reasoning workflows. |
| SRMU: Relevance-Gated Updates for Streaming Hyperdimensional Memories | 2604.15121v1 | A potential architectural upgrade for long-term memory systems to ensure stability and relevance. |
| From Procedural Skills to Strategy Genes | 2604.15097v1 | Transformative | Proposes compact 'Gene' representations for experience reuse, outperforming documentation-oriented 'Skills'. | Self-Evolution |
| SpecGuard: Verification-Aware Speculative Decoding | 2604.15244v1 | High-Value | Uses internal attention and log-prob signals for step-level reasoning verification. | Reasoning/Verification |
