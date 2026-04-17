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
