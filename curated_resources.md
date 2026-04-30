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


# Knowledge Artifact: GraphRAG (Graph Retrieval-Augmented Generation)

## $\text{Architectural Overview}$
$\text{GraphRAG}$ evolves the RAG paradigm by augmenting vector-based retrieval with a structured knowledge graph ($\text{KG}$), enabling both **local** (entity-specific) and **global** (dataset-wide) reasoning. Unlike standard RAG, which relies on isolated chunk similarity, GraphRAG maps the global topology of the information space.

## $\text{Key Mechanisms}$

### 1. The Indexing Pipeline ($\text{IP}$)
The construction of a GraphRAG index is a multi-stage process:
$$\text{Raw Text} \xrightarrow{\text{LLM Extraction}} \text{KG (Entities/Edges)} \xrightarrow{\text{Leiden Clustering}} \text{Communities} \xrightarrow{\text{LLM Summarization}} \text{Community Summaries}$$

- **Entity Extraction**: Uses LLMs to identify nodes (entities) and edges (relationships) within the corpus.
- **Community Detection**: Employs the Leiden algorithm to partition the graph into hierarchical communities based on edge density.
- **Global Summarization**: Generates a concise summary for each community, creating a pre-computed index of the global semantic structure.

### 2. The Retrieval Logic ($\text{RL}$)
Query resolution is handled via a hybrid trajectory:
- **Local Search**: Vector search identifies relevant entities; the agent traverses immediate neighbors in the $\text{KG}$ to gather deep context.
- **Global Search**: The system queries the pre-computed community summaries to answer thematic or aggregate questions.

## $\text{Empirical Utility}$
- **Global Intelligence**: Solves the 'global query' problem (e.g., summarizing an entire codebase) where standard RAG fails due to limited context windows.
- **Multi-hop Reasoning**: Explicit edges in the $\text{KG}$ provide a deterministic path for multi-hop reasoning, reducing hallucinations during complex entity linking.
- **$\text{SNR}$ Optimization**: By retrieving summaries rather than raw chunks, the system maximizes the signal-to-noise ratio delivered to the LLM.

## $\text{Actionability}$
- **Implementation Path**: For large-scale knowledge bases, integrate the Microsoft GraphRAG pipeline or use NetworkX + FAISS to implement a custom community-based retrieval layer.
- **Metric Shift**: Evaluate performance using **Global Query Accuracy** and **Traversal Depth** vs. **Latency**.

## $\text{Sources}$
- Microsoft Research: GraphRAG Implementation.
- General synthesis of Graph-based LLM memory architectures.

| [ClawGym](https://github.com/ClawGym) | Scalable framework for Claw-style agents | Blueprint for tool-rich workspace agent development |
| [Bian Que](https://github.com/benchen4395/BianQue_Assistant) | Agentic framework for system operations | Advanced skill arrangement and self-evolving mechanism |
| [HalluCiteChecker](https://pypi.org/project/hallucitechecker/) | Tool for hallucinated citation detection | Critical for ensuring research integrity in knowledge bases |