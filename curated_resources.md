| Resource | URL | Category | Description |
| :--- | :--- | :--- | :--- |
| History LLMs | https://github.com/DGoettlich/history-llms | Research | Time-locked LLMs trained on pre-1913 texts to study historical thought without hindsight contamination. |
| llms.txt Proposal | https://annas-archive.li/blog/llms-txt.html | Infrastructure | A standardized file format (`llms.txt`) for websites to provide LLM-optimized summaries and data. |
| OpenAI o1 | https://openai.com/index/learning-to-reason-with-llms/ | Models | First major public shift toward reinforcement-learned chain-of-thought reasoning in LLMs. |
| Scepsy | https://arxiv.org/abs/2604.15186 | Infrastructure | Framework for serving agentic workflows using aggregate LLM pipelines to reduce latency and improve throughput. |
| Blue Data Intelligence Layer | https://arxiv.org/abs/2604.15233 | Knowledge | Architecture for streaming multi-source multi-modal data integration for data-centric AI agents. |
| Autogenesis (AGP) | https://arxiv.org/abs/2604.15034 | Protocol | A self-evolution protocol that decouples resource evolution from the evolution mechanism via RSPL and SEPL. |
| Layered Mutability | https://arxiv.org/abs/2604.14717 | Governance | Framework for reasoning about persistent agent drift across five mutability layers. |
| KAIJU | https://arxiv.org/abs/2604.02375 | Infrastructure | Executive Kernel for intent-gated LLM agent execution; reduces latency and context growth. |
| AgentSPEX | https://arxiv.org/abs/2604.13346 | Protocol | Formal specification and execution language for agents; moves beyond reactive prompting. |
| Time is Not a Label | https://arxiv.org/abs/2604.11544 | Memory | Geometric shadowing for temporal KG; solves the entrenchment problem in persistent agent memory. |
| Memory as Metabolism | https://arxiv.org/abs/2604.12034 | Governance | Direct governance framework for LLM Wiki pattern; prevents Kuhnian ossification via metabolic operations. |
| Blue's Data Intelligence Layer | https://arxiv.org/abs/2604.15233v1 | Knowledge | Framework for multi-source, multi-modal data orchestration for agents. |
| RadAgent | https://arxiv.org/abs/2604.15231v1 | Research | Demonstrates high-faithfulness via explicit, tool-augmented iterative reasoning traces. |
| Autonomous Tool Evolution | https://arxiv.org/abs/2604.15082 | Evolution | Framework for the self-improvement of complex software tools via LLM agents; evolves million-line codebases. |
| Scepsy: Serving Agentic Workflows Using Aggregate LLM Pipelines | 2604.15186v1 | Directly relevant to the infrastructure needed to run autonomous agents at scale. The concept of 'Aggregate LLM Pipelines' laids the groundwork for optimizing the deployment of agentic toolsets. | 2026-04-19 |
| IG-Search: Step-Level Information Gain Rewards for Search-Augmented Reasoning | 2604.15148v1 | This is a huge power-up for search-augmented agents. Instead of just rewarding the final answer, we can optimize the *quality of the search queries* themselves using IG, reducing redundant searches and improving reasoning paths. | 2026-04-19 |
| SRMU: Relevance-Gated Updates for Streaming Hyperdimensional Memories | 2604.15121v1 | Crucial for long-term agent memory. The idea of 'relevance-gated updates' to prevent stale information from persisting in a hyperdimensional memory space is a direct blueprint for improving our 'Second Brain' update logic. | 2026-04-19 |
| Prt a Data Intelligence Layer: Streaming Data and Agents for Multi-source Multi-modal Data-Centric Applications | 2604.15233v1 | Extends the 'Agentic Workflow' concept to data orchestration. Treating the user and the web as first-class databases with a unified query planner is a sophisticated architecture for knowledge management agents. | 2026-04-19 |
| LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking | 2604.15149v1 | A critical warning for self-evolution. As we implement self-improvement loops, we laids the groundwork for ensures our verifiers are isomorphic and not just extensional to avoid 'reward hacking' our own capabilities. | 2026-04-19 |
| browser-use | https://github.com/browser-use/browser-use | High-fidelity browser automation for agents, critical for web-based workflows. |
| mem0 | https://github.com/mem0ai/mem0 | Universal memory layer for AI agents, solves long-term context and personalization. |
| OpenHands | https://github.com/OpenHands/OpenHands | State-of-the-art open source SWE agent, transformative for autonomous coding. |
| Claude Design | https://samhenri.gold/blog/20260418-claude-design/ | Agentic UI | Discussion on the transition from canvas-based design (Figma) to agentic, code-based UI generation. |
| Opus 4.7 System Prompt Analysis | https://simonwillison.net/2026/Apr/18/opus-system-prompt/ | LLM Steering | Detailed breakdown of the massive system prompt shift and the introduction of dynamic tool search. |
| $\text{ES-RSI}$ | /home/alan/hermes-projects/research-flywheel/artifacts/Epistemic-Stability-RSI.md | Evolution | Epistemic stability framework for RSI to prevent validation drift via anchor-based auditing. |
| LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking | https://arxiv.org/abs/2604.15149v1 | Verification & Alignment | Proposes Isomorphic Perturbation Testing (IPT) to detect and prevent reward hacking in reasoning models. Critical for reliable self-correction. |
| CoopEval: Benchmarking Cooperation-Sustaining Mechanisms | https://arxiv.org/abs/2604.15267v1 | Multi-Agent Coordination | Benchmarks contractual and mediated interactions between agents to sustain cooperation. Essential for complex multi-agent orchestration. |
| Blue Data Intelligence Layer (DIL) | https://arxiv.org/abs/2604.15233v1 | Knowledge Architecture | Unifies structured data, world knowledge, and personal context into a data registry. A blueprint for advanced agent memory systems. |

### 🌀 [LACP (Layered Agentic Control Plane)](https://github.com/alan/lacp)
**$	ext{Taxonomy}$**: $	ext{Agent Orchestration}$ | **$	ext{Signal}$**: Gold $	ext{💎}$
- **$	ext{Core Insight}}$**: A unified control plane that decouples the cognitive engine (LLM) from state management and tool execution through a 5-layer memory routing system and a standardized CLI gateway.
- **$	ext{Geek Note}}$**: Implements a $	ext{L1} 
ightarrow 	ext{L5}$ memory hierarchy and WISC-based context engineering to eliminate prompt drift and enable 'Perspective-Driven Execution'.
- **$	ext{Synergy}}$**: Acts as the operational substrate for the Research Flywheel, providing the memory routing used for Gap Detection and the distillation patterns used by the Wiki Compiler.

| Autogenesis Protocol | Paper | Formal framework for self-evolving agent resources (prompts, tools, memory) | https://arxiv.org/abs/2604.15034 |
| AgentSPEX | Paper | DSL for explicit agentic workflow specification and execution | https://arxiv.org/abs/2604.13346 |
| Tri-Spirit Architecture | Paper | Three-layer cognitive decomposition (Super/Agent/Reflex) for efficiency | https://arxiv.org/abs/2604.13757 |
