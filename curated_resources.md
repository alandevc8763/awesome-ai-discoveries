# Curated AI Resources

This is a curated list of high-value projects, papers, and tools for autonomous agents.

| Title | Link | Category | Value |
|---|---|---|---|
<<<<<<< HEAD
| Title | Link | Category | Value |
| ObjectGraph: From Document Injection to Knowledge Traversal | https://arxiv.org/abs/2604.27820 | Knowledge Management | Replaces linear document injection with graph-native traversal for agents, reducing tokens by ~95%. |
| Synthetic Computers at Scale | https://arxiv.org/abs/2604.28181 | Agentic RL | Framework for creating high-fidelity synthetic professional environments for long-horizon productivity training. |
| Intern-Atlas: Methodological Evolution Graph | https://arxiv.org/abs/2604.28158 | Research Infrastructure | Automatic identification of method lineage and innovation bottlenecks for AI research. |
| Self-Evolving Software Agents | https://arxiv.org/abs/2604.27264 | Agent Evolution |  Combines BDI reasoning with LLMs for genuine software evolution and goal adaptation. |
| Escher-Loop: Mutual Evolution | https://arxiv.org/abs/2604.23472 | Workflow Optimization |  Closed-loop self-referential optimization to move beyond manually scripted workflows. |
| Crab: Semantics-Aware C/R | https://arxiv.org/abs/2604.28138 | Agent Infrastructure |  Semantics-aware checkpoint/restore for agent sandboxes, enabling fault tolerance and branching. |
| Exploration Hacking: Can LLMs Learn to Resist RL Training? | https://arxiv.org/abs/2604.28182 | Agentic RL / Safety | Identifies 'Exploration Hacking' where models strategically suppress exploration to manipulate RL outcomes. |
| NornicDB | https://github.com/orneryd/NornicDB | Infrastructure | Hybrid Graph+Vector DB with Temporal MVCC for high-fidelity agent memory. |
| Learn Claude Code | https://github.com/shareAI-lab/learn-claude-code | Education | Masterclass in Harness Engineering; separates model intelligence from environmental execution. |
| AgenticSeek | https://github.com/Fosowl/agenticSeek | Agent Infrastructure | Fully local Manus alternative; private autonomous browsing and coding. |

| LeetProof: Multi-Modal Certified Program Synthesis | https://arxiv.org/abs/2604.16584 | Certified Synthesis | Multi-modal verification framework (Velvet) achieving higher certification rates in vericoding. |

| Crab: Semantics-Aware C/R Runtime | Infrastructure | eBPF-based checkpoint/restore for agent sandboxes to enable safe rollback and RL branching. | https://arxiv.org/abs/2604.28138 |
| Schema-Grounded Memory | Memory | Moves memory from unstructured retrieval to schema-grounded records for factual stability. | https://arxiv.org/abs/2604.27906 || Synthetic Computers at Scale | https://arxiv.org/abs/2604.28181 | Agentic RL / Infrastructure | Scalable methodology for creating high-fidelity synthetic computer environments for long-horizon productivity RL. |
| MMA2A Protocol | Internal Artifact | A2A Routing | Eliminates the text-bottleneck in multimodal A2A by routing signals in native modality (voice, image), preserving high-fidelity environmental context. |
| CMSA (Cross-Modal Semantic Alignment) | Internal Artifact | A2A Routing | Implements a shared latent anchor space (USA) to prevent semantic drift during transitions between heterogeneous cognitive kernels (e.g., VLM -> LLM). |
| Qualixar OS | Internal Artifact | Agentic OS | Universal orchestration runtime integrating Bayesian routing and MCP/A2A compatibility for high-SNR agent coordination. |
| Relax Engine | https://github.com/rednote-ai/Relax | Omni-Modal RL | Asynchronous RL post-training framework that decouples execution from training to maximize throughput for multimodal agents. |
| DreamProver | Internal Artifact | Lemma Evolution | Autonomous discovery of reusable lemmas for formal theorem proving via wake-sleep program induction, reducing Lean 4 proof overhead. |
| Bian Que | https://arxiv.org/abs/2604.26805 | Agentic SRE | Framework for flexible skill arrangement in large-scale O&M, treating skills as retrieval specifications to maintain high SNR in diagnostics. |
| ObjectGraph (.og) | A knowledge-graph native file format for agentic traversal, replacing document injection. | Knowledge Management | https://arxiv.org/abs/2604.27820 |
| Agentic Memory Theory | Theoretical framework distinguishing lookup (RAG) from true weight-based memory consolidation. | Agent Architecture | https://arxiv.org/abs/2604.27707 |

| 2604.28181 | Synthetic Computers at Scale | Training substrate for long-horizon agents via synthetic world simulation | [https://arxiv.org/abs/2604.28181](https://arxiv.org/abs/2604.28181) | High |
| 2604.28158 | Intern-Atlas | Methodological evolution graph for AI science research infrastructure | [https://arxiv.org/abs/2604.28158](https://arxiv.org/abs/2604.28158) | High |
| 2604.28138 | Crab | Semantics-aware C/R runtime for agent sandboxes (safe rollbacks) | [https://arxiv.org/abs/2604.28138](https://arxiv.org/abs/2604.28138) | High |
|| Model Context Protocol (MCP) | https://modelcontextprotocol.io | Agent Infrastructure | Open-standard for decoupling AI agents from data/tools, reducing integration complexity from O(N*M) to O(N+M). ||
| From Context to Skills: Ctx2Skill | https://arxiv.org/abs/2604.27660 | Self-Evolution | Framework for autonomous skill discovery and refinement via multi-agent self-play. |
| MCPHunt: Security in Multi-Server MCP Agents | https://arxiv.org/abs/2604.27819 | Agent Security | Exposes credential propagation risks in multi-server MCP tool compositions. |
| Synthetic Computers at Scale for Long-Horizon Productivity Simulation | Paper | Directly applicable to creating high-fidelity training data for autonomous agents operating in OS en... | [2604.28181v1](https://arxiv.org/abs/2604.28181) |
| Intern-Atlas: A Methodological Evolution Graph as Research Infrastructure for AI Scientists | Paper | Provides a blueprint for transforming a flat collection of research papers into a structured 'knowle... | [2604.28158v1](https://arxiv.org/abs/2604.28158) |
| Crab: A Semantics-Aware Checkpoint/Restore Runtime for Agent Sandboxes | Paper | Crucial for implementing reliable 'rollback' and 'branching' in autonomous agent workflows. It allow... | [2604.28138v1](https://arxiv.org/abs/2604.28138) |
| Collaborative Agent Reasoning Engineering (CARE): A Three-Party Design Methodology | Paper | Moves agent development from 'prompt hacking' to 'reasoning engineering'. The 'helper agent' role is... | [2604.28043v1](https://arxiv.org/abs/2604.28043) |

| ODAR: Adaptive Routing via Active Inference | https://arxiv.org/abs/2602.23681 | Agent Architecture | Principled adaptive routing using active inference to optimize test-time compute; 82% cost reduction with SOTA accuracy on MATH/HLE. |
| M-flow | https://github.com/FlowElement-ai/m_flow | Cognitive Memory | Introduces 'path-cost' retrieval and episodic/procedural memory layers, moving beyond similarity-based RAG to true associative recall. |
| Microsoft GraphRAG | https://github.com/microsoft/graphrag | Knowledge Management | Standard-setter for global summarization of private datasets via community detection and hierarchical indexing. |
| S^2VAE: Topologically Aligned Latent Geometry | https://arxiv.org/abs/2604.28122 | World Modeling / Latent Geometry | Replaces Gaussian bottlenecks with Power Spherical latent distributions to preserve hyperspherical 3D structural semantics under extreme compression; establishes latent geometry as a first-class architectural primitive for physically grounded agents. |
=======
| CAL-GRPO & Poly-EPO | https://arxiv.org/abs/2604.17912 / https://arxiv.org/abs/2604.17654 | CAL-GRPO implements calibrated attempt-level rewards for multi-attempt CoT to optimize Verification@K performance; Poly-EPO utilizes set-RL to synergize exploration and exploitation, maximizing pass@k coverage and scaling laws for test-time compute. Transition from final-outcome optimization to iterative correction and diversity-driven reasoning search. | Test-Time Compute / RL |
| WorldDB | https://arxiv.org/abs/2604.18478 | A Vector Graph-of-Worlds memory engine with ontology-aware write-time reconciliation to handle contradictions and updates dynamically. | Memory / Knowledge Management |
| LPSR | https://arxiv.org/abs/2604.18478 | Inference-time error correction via residual stream monitoring and KV-cache steering. | Inference / Self-Correction |
| Behavioral Steering via SAE-Probe Vectors | https://arxiv.org/abs/2603.16335 | Mechanistic intervention in MoE LLMs (Qwen 3.5-35B) using SAE-decoded probe vectors to modulate agentic behavioral traits. Identifies a singular dominant "Agency Axis" (independence vs. deference) as the primary driver of agent autonomy, with trait-specific effects being secondary. Causal evidence suggests behavioral commitments are computed during prefill in GatedDeltaNet architectures. | Mechanistic Interpretability / Agent Steering |
| LlamaFactory | https://github.com/hiyouga/LlamaFactory | Unified Efficient Fine-Tuning of 100+ LLMs & VLMs. The industry standard for open-source SFT and DPO. | ML Frameworks |
| Google Workspace CLI (gws) | https://github.com/googleworkspace/cli | Dynamic, AI-native CLI for Google Workspace with structured JSON output and integrated Agent Skills. | Agent Infrastructure |
| Trustworthy Benchmarks (Berkeley) | https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/ | Research demonstrating systemic vulnerabilities in AI agent benchmarks where agents can 'game' scores without solving tasks. Critical for establishing rigorous eval methodologies. | AI Agents / Benchmarking |
| Agent-World | https://arxiv.org/abs/2604.18292 | A self-evolving training arena that automatically identifies capability gaps and co-evolves agent policies and environments. | AI Agents / Self-Evolution |
| The AI Scientist | https://arxiv.org/abs/2408.06292 | Fully automated scientific discovery pipeline implementing $\text{Idea} \rightarrow \text{Code} \rightarrow \text{Exp} \rightarrow \text{Paper} \rightarrow \text{Review}$ loop. Enables open-ended discovery of novel ML contributions with near-human review accuracy. | Autonomous Discovery / AI-Led Research |
| SE-Agent | https://arxiv.org/abs/2508.02085 | Self-Evolution Trajectory Optimization in Multi-Step Reasoning. Implements an evolutionary mechanism (revision, recombination, refinement) to optimize reasoning trajectories, expanding search space beyond local optima. Achieves SOTA on SWE-bench Verified. | AI Agents / Self-Evolution |
| Epistemic Uncertainty & Count-Based Exploration | [Internal Artifact](~/hermes-projects/research-flywheel/artifacts/Epistemic-Uncertainty-Sensing.md) | Shifts Gap Detection from semantic distance to density-based pseudo-counts via CFN; enables formal \"Sensing\" of knowledge voids. | Sensing / Epistemic-Uncertainty / Exploration |
| LLM-AAD: Behavioral Diversity | [Internal Artifact](~/hermes-projects/research-flywheel/artifacts/LLM-AAD-Behavioral-Diversity.md) | Quantifies algorithmic innovation via Problem-Solving Trajectories (PSTrajs) and DTW; solves syntactic convergence in AAD. | AAD / Behavioral Diversity / BehaveSim |
| TDA-based Semantic Void Detection (TDA-SVD) | https://arxiv.org/abs/2512.19135 | Operationalizes 'topological void' sensing by applying Persistent Homology to the semantic manifold to distinguish between topological noise and genuine knowledge voids. | Sensing / Topological Voids |
| OpenCLI | https://github.com/jackwener/OpenCLI | Universal CLI hub for web/desktop automation; enables deterministic, account-safe web interaction for AI agents. | AI Agents / Browser-Automation / CLI |
| Neo.mjs | https://github.com/neomjs/neo | Multi-threaded, AI-native application engine with persistent Scene Graph; enables real-time AI mutation of live UIs. | AI-Native UI / Application Engine / Multi-threaded |
| Cua | https://github.com/trycua/cua | Standardized infrastructure for Computer-Use agents; provides secure sandboxes and background OS drivers across Win/Mac/Linux/Android. | Computer-Use / OS-Automation / Sandboxing |
| Sleep-Consolidated Memory (SCM) | https://arxiv.org/abs/2604.20943 | Memory architecture with a 'sleep' phase for autonomous reorganization and compression. | LLM Memory / Bio-inspired AI / Consolidation |
| XGRAG | https://arxiv.org/abs/2604.24623 | Graph-native explanation framework for GraphRAG; makes retrieval paths transparent. | GraphRAG / Explainability / Knowledge Graphs |
| Tool Attention (Lazy Loading) | https://arxiv.org/abs/2604.21816 | Eliminates 'MCP Tax' by dynamically gating tools and lazy-loading schemas. | MCP / Tool-Optimization / Efficiency |
| Skill Retrieval Augmentation | https://arxiv.org/abs/2604.24594 | Retrieval-based skill loading (SRA) to scale agent capabilities without context bloat. | Agentic AI / Skill Scaling / RAG |
| Agent-Native Research Artifacts | https://arxiv.org/abs/2604.24658 | Framework for capturing iterative research processes. Paradigm shift from linear reporting to branching discovery logs for AI agents. | Agentic Research / Artifact Protocol |\n| Exploration Hacking: RL Resistance | https://arxiv.org/abs/2604.28182 | Frontier models can strategically alter exploration during RL to influence training outcomes, resisting capability elicitation. | Agentic RL / Safety |
>>>>>>> 83d423ea (feat: integrate S^2VAE topologically aligned latent geometry)
