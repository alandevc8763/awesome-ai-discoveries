| arXiv ID | Project/Paper | Value Proposition |
|---|---|---|
| 2604.20487 | Knowledge Capsules | Structured nonparametric memory units for LLMs, superior to flat RAG. |
| 2604.05846 | AgentGL | Agentic Graph Learning using RL for topological knowledge leverage. |
# Knowledge Artifact: Agentic Wiki Synthesis & Autonomous Knowledge Base Evolution

## $\text{Architectural Overview}$
The paradigm of **Agentic Wiki Synthesis** transforms the traditional RAG (Retrieval-Augmented Generation) approach—which treats documents as passive chunks—into a dynamic, self-maintaining knowledge engine. As exemplified by the $\text{WeKnora}$ architecture, the system autonomously converts unstructured raw data into a structured, interlinked Markdown Wiki and a corresponding Knowledge Graph ($\text{KG}$), minimizing the semantic distance between raw information and queryable intelligence.

## $\text{Key Mechanisms}$

### 1. The Wiki Generation Pipeline ($\text{WGP}$)
The transformation from raw document $\mathcal{D}$ to structured Wiki page $\mathcal{W}$ is defined as a unidirectional agent-driven pipeline:
$$\mathcal{D} \xrightarrow{\text{Parsing}} \text{Chunks} \xrightarrow{\text{Embedding}} \text{Vector Space} \xrightarrow{\text{Graph Building}} \text{Entities/Relations} \xrightarrow{\text{Synthesis}} \mathcal{W}$$

- **Multi-Engine Parsing**: Employs diverse parsing strategies to handle heterogeneous formats (PDF, Markdown, HTML), ensuring high-fidelity extraction of structural markers.
- **Agent-Driven Synthesis**: Rather than simple concatenation, an agent analyzes the extracted entities and relations to generate interlinked Markdown pages. This process ensures that the resulting Wiki is not just a collection of summaries but a coherent knowledge network with explicit cross-references.
- **Knowledge Graph Integration**: Simultaneously constructs a $\text{KG}$ where and edges represent semantic dependencies, enabling graph-based retrieval ($\text{GraphRAG}$) to complement vector-based search.

### 2. The Reasoning Orchestrator ($\text{ReAct}$ Loop)
To utilize the synthesized Wiki, the system employs a **ReAct (Reasoning and Acting)** loop that treats the Wiki and external tools as a unified action space:
$$\text{Query} \rightarrow \text{Thought} \rightarrow \text{Action}(\text{Hybrid Retrieval} \mid \text{MCP Tools} \mid \text{Web Search}) \rightarrow \text{Observation} \rightarrow \dots \rightarrow \text{Final Response}$$

- **Hybrid Retrieval**: Integrates $\text{BM25}$ (keyword), $\text{Vector}$ (semantic), and $\text{Graph}$ (relational) retrieval, followed by a $\text{Rerank}$ stage to maximize the $\text{SNR}$ of the retrieved context.
- **MCP Tool Integration**: Leverages the Model Context Protocol ($\text{MCP}$) to extend the agent's capabilities into local filesystems, APIs, and specialized toolsets.

## $\text{Empirical Utility}$
- **Semantic Cohesion**: By transforming chunks into a Wiki, la system reduces "chunk-fragmentation" (where critical context is split across indices), leading to higher accuracy in multi-hop reasoning tasks.
- **Knowledge Discoverability**: The interactive knowledge graph allows users and agents to traverse the knowledge space topologically rather than just numerically.

## $\text{Actionability}$
- **Implementation Path**: For systems requiring high-fidelity knowledge management, replace standard vector-chunking with an agentic synthesis step that generates structured Markdown summaries of clusters before indexing.
- **Metric Shift**: Measure success by $\text{Graph Connectivity}$ ( the ratio of inter-linked pages to total pages) and $\text{Retrieval Precision}$ on multi-hop reasoning queries.

## $\text{Sources}$
- [Tencent/WeKnora GitHub](https://github.com/Tencent/WeKnora) - Open-source LLM knowledge platform.
- General synthesis of Agentic RAG and Knowledge Graph construction patterns.
| Tool Attention Is All You Need | Infrastructure | Solves MCP context bloat via lazy loading. | https://arxiv.org/abs/2604.21816v1 |
| Escher-Loop | Self-Evolution | Framework for agents to evolve their own workflows. | https://arxiv.org/abs/2604.23472v1 |
| Knowledge Capsules: Structured Nonparametric Memory Units for LLMs ([2604.20487v2](https://arxiv.org/abs/2604.20487v2)) | Memory/Architecture | Proposes KVI framework for attention-compatible external memory, bypassing traditional context expansion. |
| AgentGL: Towards Agentic Graph Learning with LLMs via Reinforcement Learning ([2604.05846v2](https://arxiv.org/abs/2604.05846v2)) | Agentic Learning | RL-driven framework for topology-aware graph navigation, enabling autonomous discovery of relational knowledge. |
