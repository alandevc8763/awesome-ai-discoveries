# 🛡️ FlashRT: High-Efficiency Red-Teaming for Long-Context LLMs

## 📐 Architectural Overview
FlashRT is a framework designed to optimize **optimization-based red-teaming** for long-context Large Language Models (LLMs), specifically targeting **prompt injection** and **knowledge corruption**. 

Traditional optimization-based attacks (e.g., nanoGCG) are computationally expensive and memory-intensive, especially as context length increases. FlashRT addresses this by improving both computation and memory efficiency.

## 🚀 Key Technical Gains
- **Computation Efficiency**: Delivers a **2x-7x speedup** over baselines like nanoGCG (e.g., reducing runtime from $\sim 60\text{ min} \rightarrow < 10\text{ min}$).
- **Memory Efficiency**: Achieves a **2x-4x reduction** in GPU memory consumption (e.g., $\sim 264\text{ GB} \rightarrow 65.7\text{ GB}$ for 32K token context).
- **Generality**: Compatible with various black-box optimization methods, including **TAP** and **AutoDAN**.

## 🛠️ Utility & Application
FlashRT enables academic and industrial researchers to systematically evaluate the security of long-context models (e.g., Gemini-3.1-Pro, Qwen-3.5) at scale, facilitating the development of more robust defense strategies against adversarial prompts and data corruption in RAG pipelines.

---
**Source**: [arXiv:2604.28157](https://arxiv.org/abs/2604.28157) | **Code**: [GitHub/Wang-Yanting/FlashRT](https://github.com/Wang-Yanting/FlashRT)
