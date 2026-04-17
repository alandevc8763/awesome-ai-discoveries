File unchanged since last read. The content from the earlier read_file result in this conversation is still current — refer to that instead of re-reading.
---

### 🧠 SRMU: Relevance-Gated Updates for Streaming Hyperdimensional Memories

**Category**: Memory / Knowledge Management  
**Tags**: `hdc`, `vsa`, `streaming-memory`, `srmu`, `associative-memory`, `relevance-gating`  
**Source**: Synthesized Research via Flywheel Cycle (arXiv:2604.15121, 2026)

#### 📌 Executive Summary
The **Sequential Relevance Memory Unit (SRMU)** is a domain- and cleanup-agnostic update rule for Vector Symbolic Architecture (VSA) based Sequential Associative Memories (SAMs). It addresses the failure modes of traditional additive VSA updates—namely, the persistence of stale information and the disproportionate reinforcement of redundant observations in non-stationary streaming environments. By integrating **temporal decay** with a **key-conditioned relevance gate**, SRMU filters out redundant and conflicting information *before* storage, ensuring that memory growth is stable and remains tightly aligned with the ground-truth state.

#### 🛠 Technical Architecture
The SRMU operationalizes a "novelty-aware" integration pipeline:

##### 1. Temporal Decay Layer
To maintain responsiveness to non-stationary dynamics without forgetting too aggressively, the prior memory state $M_{t-1}$ is attenuated by a decay parameter $\gamma \in (0, 1]$:
$$\tilde{M}_{t-1} = \gamma M_{t-1}$$

##### 2. Key-Conditioned Retrieval
The system retrieves the current estimate $\hat{v}_t$ for the observed key $k_t$ through an unbinding operation:
$$\hat{v}_t = \tilde{M}_{t-1} \otimes^{-1} k_t$$

##### 3. Relevance Gating & Novelty Weighting
The magnitude of the update is conditioned on the cosine similarity $s(\hat{v}_t, v_t)$ between the retrieved value and the new observation:
$$w = 1 - s(\hat{v}_t, v_t) = 1 - \frac{|\langle \hat{v}_t, v_t \rangle|}{\|\hat{v}_t\|_2 \|v_t\|_2}$$
This weight $w$ suppresses updates for redundant information ($w \to 0$) and maximizes them for meaningful state changes ($w \to 1$).

##### 4. Final Update Rule
The new memory state $M_t$ is formed by bundling the novelty-weighted observation:
$$M_t = \tilde{M}_{t-1} + w(k_t \otimes v_t)$$

#### 📈 Utility Analysis
- **Actionability**: High. Directly implementable in any VSA framework (e.g., FHRR) for streaming perception, robotic state-tracking, and long-term associative memory.
- **Architectural Depth**: Deep. Shifts the SAM paradigm from passive accumulation to active, relevance-gated integration.
- **Novelty**: Introduces an explicit "novelty-aware" filter that prevents memory saturation and handles imbalanced sampling in real-world streams.

---

### 🧠 Memory as Metabolism: Companion Knowledge Systems
**Category**: Memory / Knowledge Management  
**Tags**: `llm-wiki`, `cognitive-governance`, `companion-memory`, `epistemic-failure`  
**Source**: arXiv:2604.12034 (2026)

#### 📌 Executive Summary
The **Memory as Metabolism** framework proposes a governance profile for single-user knowledge wikis (like the LLM Wiki pattern) to prevent "entrenchment" and "Kuhnian ossification"—where a dominant interpretation of a topic becomes so central that contradictory evidence is suppressed. It treats memory as a metabolic process that must mirror the user's operational context while actively compensating for epistemic failure modes.

#### 🛠 Technical Architecture
The system implements five core metabolic operations:
1. **TRIAGE**: Initial sorting of incoming information by volatility and importance.
2. **DECAY**: Gradual attenuation of low-utility or transient facts.
3. **CONTEXTUALIZE**: Mapping new data to the existing load-bearing structure of the wiki.
4. **CONSOLIDATE**: Synthesis of multiple fragmented notes into stable concept pages.
5. **AUDIT**: Periodic health checks for contradictions and staleness.

The framework introduces **Memory Gravity** (where central nodes attract more context) and **Minority-Hypothesis Retention** (ensuring contradictory evidence is preserved in a buffer until "pressure" forces an update to the dominant interpretation).

#### 📈 Utility Analysis
- **Actionability**: High. Directly applicable to the maintenance of the Second Brain wiki via the implementation of the five metabolic operations.
- **Architectural Depth**: Medium. Provides a normative layer over raw markdown storage.
- **Novelty**: Shifts the focus from "how to store" to "how to govern" personal LLM memory to ensure it remains an epistemic tool rather than a static echo chamber.

---

### 🧠 RoMem: Continuous Phase Rotation for Agentic Memory
**Category**: Memory / Temporal Reasoning  
**Tags**: `temporal-kg`, `phase-rotation`, `agentic-memory`, `geometric-shadowing`  
**Source**: arXiv:2604.11544 (2026)

#### 📌 Executive Summary
**RoMem** is a temporal knowledge graph module that solves the problem of evolving facts (e.g., "The current CEO is X") without needing to destructively delete old information or rely on expensive LLM calls for every ingestion. It treats time as a continuous phase rotation in complex vector space, allowing newer, correct facts to naturally outrank obsolete ones through "geometric shadowing."

#### 🛠 Technical Architecture
1. **Semantic Speed Gate**: A pretrained module that maps a relation's embedding (e.g., "born in" vs "president of") to a **volatility score**. Stable relations rotate slowly; volatile relations rotate fast.
2. **Continuous Phase Rotation**: Facts are stored as vectors that rotate over time according to their volatility score.
3. **Geometric Shadowing**: When querying, the current time-phase is used. Facts that have rotated "out of phase" are naturally suppressed in the retrieval process, while temporally aligned (current) facts emerge as the top results.

#### 📈 Utility Analysis
- **Actionability**: Medium. Requires integration of a complex-vector retrieval layer or a simulation of phase-rotation in the memory index.
- **Architectural Depth**: Deep. Replaces discrete time-stamping with a geometric representation of temporal decay.
- **Novelty**: Eliminates the "delete vs. keep" dilemma in agentic memory by making obsolescence a natural property of the representation.

---

### 🧠 Scepsy: Aggregate LLM Pipelines for Agentic Scaling
**Category**: Agent Infrastructure / Scaling  
**Tags**: `gpu-scheduling`, `agentic-workflows`, `throughput-optimization`, `multi-llm`  
**Source**: arXiv:2604.15186 (2026)

#### 📌 Executive Summary
**Scepsy** is an agentic serving system that optimizes the deployment of multi-LLM agentic workflows on GPU clusters. It recognizes that while end-to-end latencies of agentic workflows are unpredictable, the relative execution time shares of individual LLMs remain stable. Scepsy uses an "Aggregate LLM Pipeline" to predict the best GPU allocations (fractional shares, tensor parallelism, and replicas) to minimize latency while hitting target throughput.

#### 🛠 Technical Architecture
1. **Profiling Phase**: Profiles LLMs under various parallelism degrees to build a latency/throughput map.
2. **Aggregate LLM Pipeline**: A lightweight predictor that explores the search space of GPU allocations based on aggregate execution shares.
3. **Hierarchical Heuristic Placement**: Maps the optimal allocation onto the cluster while minimizing fragmentation and respecting network topology.

#### 📈 Utility Analysis
- **Actionability**: High for infrastructure providers. Provides a concrete method to optimize the serving of complex, branching agentic workflows.
- **Architectural Depth**: Deep. Moves from independent LLM optimization to workflow-aware cluster scheduling.
- **Novelty**: Uses aggregate stability of LLM shares to solve the unpredictability of agentic execution paths.

---

### 🧠 Dr. RTL: Group-Relative Skill Learning for Self-Improvement
**Category**: Agentic Evolution / Self-Improvement  
**Tags**: `skill-induction`, `closed-loop-optimization`, `self-evolving-agents`, `group-relative-learning`  
**Source**: arXiv:2604.14989 (2026)

#### 📌 Executive Summary
**Dr. RTL** is a framework for autonomous optimization (originally for RTL timing) that implements a closed-loop self-improvement cycle. Its core innovation is **group-relative skill learning**, where the agent performs parallel attempts at a task, compares the outcomes, and distills the winning strategies into a structured, interpretable skill library that can be reused across different designs.

#### 🛠 Technical Architecture
1. **Multi-Agent Loop**: Specialized agents for critical-path analysis, parallel rewriting, and tool-based evaluation.
2. **Parallel Trajectories**: Generates multiple candidate solutions for the same problem.
3. **Relative Distillation**: Compares parallel rewrites to identify the most effective pattern, distilling this experience into a "pattern-strategy" entry in the skill library.
4. **Cross-Design Reuse**: The evolved skill library is applied to new, unseen tasks to accelerate convergence.

#### 📈 Utility Analysis
- **Actionability**: Extremely High. This "group-relative" approach can be integrated into any agent's skill-induction loop to move from "recording success" to "distilling strategy."
- **Architectural Depth**: Deep. Implements a formal mechanism for the transition from experience $	o$ skill $	o$ generalized capability.
- **Novelty**: Shifts self-improvement from single-trajectory RL to comparative, multi-trajectory distillation.

---

### 🧠 SWE-TRACE: Rubric Process Reward Models (PRM)
**Category**: Software Engineering / Reinforcement Learning  
**Tags**: `prm`, `test-time-scaling`, `long-horizon-agents`, `swe-bench`  
**Source**: arXiv:2604.14820 (2026)

#### 📌 Executive Summary
**SWE-TRACE** optimizes long-horizon software engineering agents by replacing sparse outcome rewards with a **Rubric-Based Process Reward Model (PRM)**. It uses a separate "Rubric-Agent" to provide dense, fine-grained heuristic feedback on intermediate steps, which is then used both for RL training and for heuristic-guided Test-Time Scaling (TTS) during inference.

#### 🛠 Technical Architecture
1. **Stepwise Oracle Verification**: Distills a token-efficient SFT corpus biased toward shortest-path trajectories.
2. **Rubric-Agent Feedback**: An auxiliary agent evaluates intermediate steps against a predefined rubric, providing a dense reward signal.
3. **Heuristic TTS**: During inference, the PRM dynamically evaluates and prunes action candidates, focusing compute on the most promising paths without the overhead of massive parallel sampling.

#### 📈 Utility Analysis
- **Actionability**: High. Implementing a rubric-based evaluator for intermediate agent steps is a powerful way to reduce "token bloat" and reward hacking.
- **Architectural Depth**: Medium. Integrates PRMs into the SWE agent lifecycle.
- **Novelty**: Bridges the gap between training-time reward modeling and inference-time search efficiency via heuristics.

---

### 🧠 Parallax: Cognitive-Executive Separation for Agent Safety
**Category**: Agent Security / Architecture  
**Tags**: `cognitive-separation`, `adversarial-validation`, `safe-execution`, `agent-guardrails`  
**Source**: arXiv:2604.12986 (2026)

#### 📌 Executive Summary
**Parallax** introduces a fundamental architectural boundary for autonomous agents: **Cognitive-Executive Separation**. It argues that the reasoning system (the LLM) should never have direct execution capability. Instead, all actions must pass through an independent, multi-tiered validator that enforces safety invariants and information flow controls, ensuring that even a fully compromised reasoning system cannot execute destructive actions.

#### 🛠 Technical Architecture
1. **Structural Separation**: Reasoning (Cognitive) and Execution (Executive) are isolated into different processes/environments.
2. **Adversarial Validation**: An independent validator checks the proposed action against a set of deterministic and probabilistic guardrails.
3. **Information Flow Control**: Propagates sensitivity labels to detect context-dependent threats (e.g., "do not send this specific file to an external API").
4. **Reversible Execution**: Captures pre-state to enable immediate rollback upon validation failure.

#### 📈 Utility Analysis
- **Actionability**: High. Essential for any agent with filesystem or network access.
- **Architectural Depth**: Deep. Shifts safety from "prompt-level" (soft) to "architectural-level" (hard).
- **Novelty**: Defines a "Zero Trust" model for agentic execution.

---

### 🧠 CodaRAG: Associative Navigation for Knowledge Discovery
**Category**: RAG / Knowledge Management  
**Tags**: `associative-rag`, `graph-rag`, `evidence-chains`, `complementary-learning`  
**Source**: arXiv:2604.10426 (2026)

#### 📌 Executive Summary
**CodaRAG** evolves RAG from passive lookup to **active associative discovery**. Inspired by Complementary Learning Systems (CLS), it reconstructs logical chains that connect fragmented pieces of evidence across a corpus, allowing the agent to "connect the dots" rather than just retrieving isolated chunks.

#### 🛠 Technical Architecture
1. **Knowledge Consolidation**: Unifies fragmented extractions into a stable memory substrate.
2. **Associative Navigation**: Traverses the knowledge graph via multi-dimensional pathways (semantic, contextual, and functional) to explicitly recover dispersed evidence chains.
3. **Interference Elimination**: Prunes hyper-associative noise to maintain a high-precision reasoning context.

#### 📈 Utility Analysis
- **Actionability**: Medium. Requires a graph-based index and a multi-step navigation strategy during retrieval.
- **Architectural Depth**: Deep. Models the retrieval process as an associative walk rather than a vector search.
- **Novelty**: Solves the "fragmentation" problem in standard RAG by prioritizing the *relationship* between pieces of evidence.

---

### 🧠 AgentSPEX: Specification and Execution Language
**Category**: Agent Orchestration / Formal Methods  
**Tags**: `agent-dsl`, `workflow-spec`, `interpretability`, `state-management`  
**Source**: arXiv:2604.13346 (2026)

#### 📌 Executive Summary
**AgentSPEX** is a domain-specific language (DSL) for specifying LLM-agent workflows. It decouples the workflow logic (control flow, branching, loops, state management) from the underlying Python implementation, making agentic systems more modular, interpretable, and easier to modify without changing the core harness.

#### 🛠 Technical Architecture
1. **Typed Steps**: Defines agents and tools as typed entities with clear input/output schemas.
2. **Explicit Control Flow**: Supports native branching, loops, and parallel execution within the specification.
3. **State Management**: Explicitly defines the agent's state and how it evolves across steps.
4. **Visual Synchronization**: Includes a graph-based editor that synchronizes the visual workflow with the SPEX code.

#### 📈 Utility Analysis
- **Actionability**: Medium. Useful for teams building complex multi-agent systems that need a shared specification.
- **Architectural Depth**: Medium. Adds a layer of abstraction between the "what" (workflow) and the "how" (execution).
- **Novelty**: Moves agent orchestration from "code-as-config" (like LangGraph) to "spec-as-source."
| Autogenesis: A Self-Evolving Agent Protocol | Paper | Framework for agents that evolve their own protocols and memory. | [https://arxiv.org/abs/2604.15034](https://arxiv.org/abs/2604.15034) |
| Dr. RTL: Tool-Grounded Self-Improvement | Paper | Agentic self-improvement through tool-grounded optimization. | [https://arxiv.org/abs/2604.14989](https://arxiv.org/abs/2604.14989) |
| SRMU: Streaming Hyperdimensional Memories | Paper | Relevance-gated updates for more efficient long-term memory. | [https://arxiv.org/abs/2604.15121](https://arxiv.org/abs/2604.15121) |
| IG-Search: Information Gain Rewards | Paper | Step-level rewards for search-augmented reasoning. | [https://arxiv.org/abs/2604.15148](https://arxiv.org/abs/2604.15148) |
| Scepsy: Serving Agentic Workflows | Paper | Efficient serving of aggregate LLM pipelines for agent workflows. | [https://arxiv.org/abs/2604.15186](https://arxiv.org/abs/2604.15186) |

### 🧠 NornicDB: High-Performance Graph+Vector Temporal Store
**Category**: Infrastructure / Database  
**Tags**: `graph-db`, `vector-db`, `mvcc`, `temporal-memory`, `neo4j-compatible`, `mcp`  
**Source**: GitHub (orneryd/NornicDB, 2026)

#### 📌 Executive Summary
NornicDB is a distributed database that unifies graph traversal, vector retrieval, and historical truth in a single engine. It eliminates the need for separate vector sidecars (like Qdrant/Milvus) alongside graph databases (like Neo4j), providing a single execution path for hybrid retrieval. Its most distinctive feature is the use of MVCC for tritemporal fact modeling, allowing agents to perform "as-of" reads to reconstruct past states.

#### 🛠 Technical Architecture
1. **Hybrid Execution Engine**: Implements shape-specialized streaming executors for common graph patterns while maintaining a general Cypher path for correctness.
2. **Temporal MVCC Layer**: Every mutation is versioned, enabling snapshot isolation and the ability to query the graph at any historical point in time.
3. **Cognitive Memory Tiers**: Built-in memory decay logic categorized by half-life: Episodic (7 days), Semantic (69 days), and Procedural (693 days).
4. **Hardware-Accelerated Paths**: Native integration with Metal, CUDA, and Vulkan for high-throughput embedding and traversal workloads.

#### 📈 Utility Analysis
- **Actionability**: Extremely High. Provides a drop-in Neo4j replacement with added vector and temporal capabilities.
- **Architectural Depth**: Deep. Integrates MVCC and vector search into the core storage engine rather than as plugins.
- **Novelty**: Solves the "state drift" problem in agent memory by making historical state a first-class citizen.

---

### 🧠 Ruflo: Multi-Agent Swarm Orchestration
**Category**: Agent Infrastructure / Orchestration  
**Tags**: `multi-agent`, `swarm-intelligence`, `consensus-protocols`, `self-learning`, `ruvector`  
**Source**: GitHub (ruvnet/ruflo, 2026)

#### 📌 Executive Summary
Ruflo is an orchestration platform that transforms single-agent systems into coordinated swarms. It moves beyond simple sequential chains to use sophisticated swarm topologies (mesh, hierarchical) and consensus algorithms (Raft, BFT) to ensure agent alignment and fault tolerance. It features a "RuVector" intelligence layer that enables agents to learn optimal routing and patterns from their own successful trajectories.

#### 🛠 Technical Architecture
1. **RuVector Intelligence**: Implements SONA (Self-Optimizing Pattern Learning) and EWC++ (Elastic Weight Consolidation) to prevent catastrophic forgetting during agent adaptation.
2. **Consensus-Driven Coordination**: Uses BFT (Byzantine Fault Tolerance) to reach decisions among agent teams, ensuring correctness even if a minority of agents diverge.
3. **ReasoningBank**: A pattern store that captures successful reasoning trajectories, which are then distilled and reused to optimize future task routing.
4. **WASM-Based Agent Booster**: Routes simple code transforms to WebAssembly kernels, bypassing the LLM entirely for <1ms latency.

#### 📈 Utility Analysis
- **Actionability**: High. Provides a comprehensive framework for deploying production-grade multi-agent swarms.
- **Architectural Depth**: Deep. Integrates formal consensus protocols and neural pattern learning into agent orchestration.
- **Novelty**: Introduces "Swarm Intelligence" to the LLM agent space, shifting focus from individual agent prompts to collective swarm behavior.

---

### 🧠 Hyper-RAG: Hypergraph-Driven Retrieval
**Category**: RAG / Knowledge Representation  
**Tags**: `hypergraph`, `high-order-correlations`, `hallucination-reduction`, `medical-ai`  
**Source**: arXiv:2504.08758 (2026)

#### 📌 Executive Summary
Hyper-RAG evolves RAG by replacing traditional pairwise graphs with hypergraphs, where an edge (hyperedge) can connect any number of entities. This allows the system to capture "beyond-pairwise" correlations—complex relationships involving three or more entities—which are often the source of critical insights in specialized domains like medicine. This structural richness significantly reduces hallucinations by providing more complete and accurate context.

#### 🛠 Technical Architecture
1. **Hypergraph Modeling**: Instead of  \to B$ and  \to C$, it models $\{A, B, C\}$ as a single hyperedge, preserving the atomic nature of the relationship.
2. **Hypergraph-DB Integration**: Utilizes a native hypergraph database for rapid retrieval of these higher-order associations.
3. **Information Diffusion**: Employs a diffusion process across the hypergraph to retrieve a wider but more relevant context than standard vector search.
4. **Lightweight Variant (Hyper-RAG-Lite)**: Optimizes the retrieval pipeline for \times$ speedup while maintaining high precision.

#### 📈 Utility Analysis
- **Actionability**: Medium. Requires a specialized hypergraph database and an extraction pipeline for high-order correlations.
- **Architectural Depth**: Deep. Fundamentally changes the representation of knowledge from a graph to a hypergraph.
- **Novelty**: Addresses the "information loss" inherent in decomposing complex relationships into multiple pairwise edges.

---
| NornicDB | Infrastructure | Distributed Graph+Vector DB with Temporal MVCC and native Graph-RAG support. | [https://github.com/orneryd/NornicDB](https://github.com/orneryd/NornicDB) |
| Ruflo | Orchestration | Multi-agent swarm platform with BFT consensus and RuVector self-learning. | [https://github.com/ruvnet/ruflo](https://github.com/ruvnet/ruflo) |
| Hyper-RAG | RAG | Hypergraph-driven retrieval that captures high-order correlations to reduce hallucinations. | [https://github.com/iMoonLab/Hyper-RAG](https://github.com/iMoonLab/Hyper-RAG) |
