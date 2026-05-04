# SCISENSE: Sensemaking-Grounded Framework for Scientific Discovery

## 🛠️ Architectural Overview
$\text{SCISENSE}$ is a framework designed to operationalize the "upstream" phase of scientific research—ideation and planning—by treating it as a structured sensemaking process rather than a brief preamble. It transforms the process of moving from a citation neighborhood to a research contribution into a verifiable, staged trajectory.

### 🧠 The Sensemaking Protocol
The framework operationalizes ideation into eight discrete cognitive stages (derived from Pirolli & Card, 2005):

| Stage | Objective | Key Activity |
| :--- | :--- | :--- |
| **Foraging** | Gap Identification | Retrieve prior work and identify epistemic voids. |
| **Shoebox** | Evidence Organization | Organize extracted evidence into a workable corpus. |
| **Schema** | Problem Framing | Form the initial conceptual structure of the problem. |
| **Hypothesis** | Formalization | Define testable, falsifiable hypotheses. |
| **Elaboration** | Methodological Design | Develop the detailed implementation blueprint. |
| **Questioning** | Critical Audit | Assess feasibility, novelty, and potential failure modes. |
| **Reframe** | Iterative Refinement | Revise the formulation based on the audit. |
| **Presentation** | Synthesis | Synthesize the final research trajectory. |

---

## 🚀 Key Technical Contributions

### 1. $\text{SciSense-Traj}$ Dataset
A 100K-scale dataset of citation-conditioned research trajectories. It employs two distinct supervision regimes:
- **$\text{Target Mode}$ (Reconstructive)**: The model reconstructs the ideation path leading to a *known* target paper from its citations.
- **$\text{Infer Mode}$ (Generative)**: The model proposes *novel* directions grounded in the same citation neighborhood without a target anchor.

### 2. $\text{SciSense-LM}$
A family of sensemaking-specialized LLMs (3B to 70B parameters) distilled from $\text{SciSense-Traj}$. 

### 3. The "Structure Liberates" Paradox
Contrary to the intuition that looser supervision encourages exploration, SCISENSE demonstrates that **Target-trained models** (stronger constraints) achieve:
- $\Delta \text{Quality} \approx +2.0\%$ over Infer-trained models.
- **Higher Diversity**: Reconstructive trajectories are more semantically diverse than open-ended ones.
- **Downstream Gains**: Coding agents conditioned on Target trajectories produce artifacts with significantly higher executability and scientific grounding.

---

## 📈 Utility & Implementation
$\text{SCISENSE}$ serves as a primitive for augmenting research agents by replacing shallow planning with a high-fidelity sensemaking trajectory $S$.

$$\text{Pipeline}: \mathcal{C}_{\text{cited}} \xrightarrow{\mathcal{P}_{\text{sense}}} S \xrightarrow{\mathcal{P}_{\text{expr}}} E \xrightarrow{\mathcal{P}_{\text{analysis}}} A \xrightarrow{\mathcal{P}_{\text{write}}} O$$

Where $S$ (the sensemaking trajectory) acts as the cognitive substrate that eliminates myopic decision-making in the downstream implementation phase.

**Source**: [arXiv:2605.00557](https://arxiv.org/abs/2605.00557)
**Tags**: #Sensemaking #ScientificDiscovery #LLM-Distillation #AgenticPlanning
