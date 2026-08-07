<h1 align="center">Truong Minh Phuoc</h1>
<h3 align="center">DevOps Engineer · Kubernetes & AI-Native Infrastructure</h3>

<p align="center">
  Ho Chi Minh City, Vietnam &nbsp;·&nbsp;
  <a href="mailto:phuoctm0707@gmail.com">phuoctm0707@gmail.com</a> &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/phuoctm0712">LinkedIn</a> &nbsp;·&nbsp;
  <a href="http://minhphuoc.framer.website">Portfolio</a>
</p>

---

### About

I'm a Software Engineering graduate working as a QA Tester at Ekino Vietnam by day, and building Kubernetes / AI-agent infrastructure on my own time by night. My day job is manual QA on a multi-market streaming platform — running 500+ regression tests a sprint and thinking constantly about failure modes, root causes, and what "done" actually means. My side projects are where I turn that instinct into infrastructure: operators, incident-response agents, and CI/CD pipelines built the way I'd want them built if I owned the pager.

I'm working toward a move from manual QA into **DevOps → Platform Engineering / SRE**.

---

### Featured Projects

#### [Kite](https://github.com/phuoctmse/Kite) — AI Ops Agent for Kubernetes Clusters
A self-hosted, in-cluster AI agent written in Go with `controller-runtime` and a custom CRD (`KiteAgent`). Watches Pod/Event/Node state through Kubernetes informers, reasons over incidents through a pluggable LLM provider layer (Anthropic / OpenAI / Ollama), and executes actions through a whitelist-checked, auditable executor.
- Cut LLM context size **~172x** (1.6 KB vs 278 KB raw `kubectl` dump) via a debounced event pipeline and compact snapshot format — measured, not estimated.
- Implemented the Ollama provider's tool-calling client end-to-end, test-first, verified against a live cluster.
- Found and fixed real bugs through live testing, including an RBAC misconfiguration that silently blocked 100% of LLM calls.
- 16 tests across 10 packages covering safety rails: replica bounds, owner-guard, cooldown, idempotency.

#### [RunGuard](https://github.com/phuoctmse/RunGuard) — Kubernetes Incident Remediation Tool
A FastAPI (Python) service that evaluates cluster alerts against a runbook and applies fixes with full audit trails, dry-run mode, and rollback support.
- 160+ tests, 90%+ coverage — because automation that touches production shouldn't be trusted without proof.

#### [FoodFund-Microservices](https://github.com/phuoctmse/FoodFund-Microservices) — Cloud-Native Donation Platform
5-service microservices platform (NestJS, GraphQL Apollo Federation v2) — I led the DevOps/backend side as team lead.
- Containerized with Docker + Helm, deployed to Kubernetes on DigitalOcean at 99.9% uptime.
- GitHub Actions CI/CD with GitOps via ArgoCD — change-detection redeploys cut deploy time to 5–8 minutes.
- Kafka for event-driven service communication; Datadog monitoring cut incident root-cause time by 30%.

#### [AI-Unsafe-Resource-Analyzer (Aura)](https://github.com/phuoctmse/AI-Unsafe-Resource-Analyzer) — Real-Time Content Moderation
Async image moderation pipeline: Next.js frontend, Node.js/Hono/Prisma/Socket.io gateway, Python/FastAPI AI worker, backed by PostgreSQL, Redis, and S3-compatible storage — all containerized with Docker Compose.

---

### Certifications

[![AWS SAA](https://img.shields.io/badge/AWS-Solutions%20Architect%20Associate-FF9900?style=flat&logo=amazonaws&logoColor=white)](https://www.credly.com/badges/fb19c96f-ef24-488e-ac50-ca1cd3467d6d)
[![AWS Cloud Practitioner](https://img.shields.io/badge/AWS-Cloud%20Practitioner-FF9900?style=flat&logo=amazonaws&logoColor=white)](https://www.credly.com/badges/70a25449-95d5-4db5-8d7d-95e9b600e080/public)
[![AWS Serverless](https://img.shields.io/badge/AWS-Serverless-FF9900?style=flat&logo=amazonaws&logoColor=white)](https://www.credly.com/badges/766e9775-8fc3-4376-a303-6d4d4247d28a)

Currently studying for **CKA** and **CKAD**.

---

### Tech Stack

**Languages**
![Go](https://img.shields.io/badge/-Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bash](https://img.shields.io/badge/-Bash-4EAA25?style=flat-square&logo=gnubash&logoColor=white)
![SQL](https://img.shields.io/badge/-SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white)

**Infrastructure & DevOps**
![Kubernetes](https://img.shields.io/badge/-Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Helm](https://img.shields.io/badge/-Helm-0F1689?style=flat-square&logo=helm&logoColor=white)
![ArgoCD](https://img.shields.io/badge/-ArgoCD-EF7B4D?style=flat-square&logo=argo&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![Terraform](https://img.shields.io/badge/-Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white)
![Nginx](https://img.shields.io/badge/-Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![Datadog](https://img.shields.io/badge/-Datadog-632CA6?style=flat-square&logo=datadog&logoColor=white)
![Linux](https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=linux&logoColor=black)

**Cloud (AWS)**
![EC2](https://img.shields.io/badge/-EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white)
![S3](https://img.shields.io/badge/-S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
![RDS](https://img.shields.io/badge/-RDS-527FFF?style=flat-square&logo=amazonrds&logoColor=white)
![Cognito](https://img.shields.io/badge/-Cognito-DD344C?style=flat-square&logo=amazoncognito&logoColor=white)
![OpenSearch](https://img.shields.io/badge/-OpenSearch-005EB8?style=flat-square&logo=opensearch&logoColor=white)
![IAM](https://img.shields.io/badge/-IAM-232F3E?style=flat-square&logo=amazoniam&logoColor=white)

**Data, Messaging & Search**
![Kafka](https://img.shields.io/badge/-Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![MongoDB Atlas Vector Search](https://img.shields.io/badge/-Vector%20Search-47A248?style=flat-square&logo=mongodb&logoColor=white)

**Backend & Frameworks**
![FastAPI](https://img.shields.io/badge/-FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![NestJS](https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL%20Federation-E10098?style=flat-square&logo=graphql&logoColor=white)
![Socket.io](https://img.shields.io/badge/-Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white)

**AI / LLM Tooling**
![Anthropic](https://img.shields.io/badge/-Anthropic%20API-191919?style=flat-square&logo=anthropic&logoColor=white)
![OpenAI](https://img.shields.io/badge/-OpenAI%20API-412991?style=flat-square&logo=openai&logoColor=white)
![Ollama](https://img.shields.io/badge/-Ollama-000000?style=flat-square&logo=ollama&logoColor=white)
![controller-runtime](https://img.shields.io/badge/-controller--runtime-326CE5?style=flat-square&logo=kubernetes&logoColor=white)

---

### GitHub Stats

<p align="left">
  <img src="https://github-readme-stats.vercel.app/api?username=phuoctmse&show_icons=true&count_private=true&text_color=151515&title_color=2E5E4E&icon_color=151515&hide_border=true" alt="phuoctmse's GitHub stats" height="165"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=phuoctmse&langs_count=8&text_color=151515&title_color=2E5E4E&icon_color=151515&hide_border=true&layout=compact" alt="Top Languages" height="165"/>
</p>

<a href="https://wakatime.com/@ttrece">
  <img src="https://github-readme-stats.vercel.app/api/wakatime?username=ttrece&custom_title=Dev%20Metrics&text_color=151515&title_color=2E5E4E&icon_color=151515&langs_count=8&hide_border=true" alt="WakaTime Dev Metrics">
</a>

---

<p align="center"><i>Currently reading Kubernetes source, writing Go, and looking for maintainers willing to tell me when my architecture is wrong.</i></p>
