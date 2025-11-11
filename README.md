<p align="center">
  <strong>Naster Paywall Steps</strong><br>
  Learn Astro + Starlight + NestJS by building a real paywall, step by step.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg"/></a>
  <img src="https://img.shields.io/badge/node-22.x-blue?logo=node.js"/>
  <img src="https://img.shields.io/badge/yarn-4.x-2188b6?logo=yarn"/>
  <img src="https://img.shields.io/badge/Astro-FF5D01?logo=astro"/>
  <img src="https://img.shields.io/badge/NestJS-E0234E?logo=nestjs"/>
  <img src="https://img.shields.io/badge/Starlight-000?logo=astro"/>
  <img src="https://img.shields.io/badge/CI-GitHub%20Actions-blue?logo=github-actions"/>
  <img src="https://img.shields.io/badge/SPDX-compliant-success"/>

</p>

A step-by-step educational repository demonstrating how to build a paywalled content platform using **Astro + Starlight + NestJS**.  
The goal is to explore real-world integration patterns — from standalone deployments to a fully working authenticated paywall flow.

> This is an educational Proof-of-Concept — **not** a production-ready solution.

---

## 🎯 Goals

- Connect **Astro + Starlight** with **NestJS**
- Implement progressive **paywall and gated content**
- Follow a clear learning path using isolated steps
- Build the foundation for the future **Naster learning stack**

---

## 🧭 Learning Path

Every directory in `steps/` is a **complete and working snapshot** of the project at a given stage.

- Each step starts from the previous one
- Full code copy — no hidden jumps
- Only necessary changes added per step
- Always runnable and self-contained

> This approach helps you trace the evolution of the architecture and compare changes easily.

---

## 📂 Repository Structure

```markdown
steps/
00-nestjs-astro-standalone/ # Two separate apps, no integration yet
01-nestjs-astro-middleware/ # Astro middleware talks to Nest API
...
```

### 🔁 Step Icons Legend

| Icon | Meaning                          |
| ---- | -------------------------------- |
| ✅   | Completed step                   |
| 🚧   | Work in progress                 |
| ✨   | New feature introduced           |
| 🔐   | Security / auth / paywall change |

Example learning path preview:

| Step                            | Description                        |
| ------------------------------- | ---------------------------------- |
| 🚧 `00-nestjs-astro-standalone` | independent apps, no connection    |
| 🚧 `01-nestjs-astro-middleware` | Astro proxying to Nest             |
| 🚧 `02-paywall-basic`           | protected route, session/user stub |
| 🚧 `03-paywall-advanced`        | gated docs, real auth strategy     |
| 🚧 more coming...               |                                    |

---

## 🧠 Learning Philosophy

> Learn by **building real systems step by step**, not by reading isolated snippets.

This PoC embraces:

- Small, visible, traceable progress
- Full project snapshots (no “magic diffing”)
- Opinionated but practical stack choices
- Focus on **education > production polish**

---

## 🔧 Stack

- **Astro** & **Starlight**
- **NestJS**
- **TailwindCSS**
- **Yarn Workspaces**
- **VS Code**

Future enhancements may include:

- Redis caching/session
- JWT / RBAC / RLS
- CI / Pre-commit automation
- Paraglide i18n
- DX & observability tooling

---

## 🚀 Getting Started

```bash
git clone https://github.com/naster-labs/naster-paywall-steps
cd naster-paywall-steps
yarn install
```

Then explore the `steps/` directory and run each step according to its README.

---

## 📜 License & Compliance

Licensed under the **MIT License**.

```
SPDX-License-Identifier: MIT
```

© 2025 **Luczak Consulting P.S.A.**
with contributions from **Łukasz Piotr Łuczak**

### Additional files

| File                                     | Purpose                      |
| ---------------------------------------- | ---------------------------- |
| `LICENSE`                                | MIT terms                    |
| `NOTICE`                                 | Attribution notices          |
| `NOTICE-3RD-PARTY.txt`                   | External OSS license info    |
| `third_party_licenses/dependencies.json` | Dependency license inventory |

We choose the most permissive license variant when possible (e.g., `MIT OR CC0`).

---

## 🤝 Contributing

Welcome!  
This repo is about learning, not perfection — beginners and experts both invited.

✅ Ask questions  
✅ Suggest improvements  
✅ Submit new learning steps

If you're unsure where to start: open an issue with the label **learning**.

This repository is part of the early **Naster Labs** initiative.
Community contributions and feedback are welcome once the foundation stabilizes.

---

## ⭐️ Support & Vision

This repository is the first milestone toward:

- ✅ a modern educational dev stack
- ✅ real-world examples & patterns
- 🎯 a self-hostable learning platform with paywall, community & gamification

If you find it useful, leave a ⭐️ on GitHub — more steps & guides are coming!

---

## 👥 Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[🏆](#)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST-END -->

🤝 Want to contribute?  
Check out our [CONTRIBUTING guide](./CONTRIBUTING.md) and open your first PR!
