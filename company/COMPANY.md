# Minh Phuoc Solution — Company Information

> Dùng cho hồ sơ đăng ký Claude for Startups. Các mục `[TODO]` cần bạn tự điền bằng thông tin thật trước khi nộp.

## Tổng quan

| Mục | Thông tin |
|---|---|
| Tên công ty | **Minh Phuoc Solution** |
| Website | https://truongminhphuoc.id.vn |
| Domain | truongminhphuoc.id.vn |
| Người sáng lập | Truong Minh Phuoc |
| Vai trò | Founder / Solo Engineer |
| Email liên hệ | phuoctm0707@gmail.com |
| Địa điểm | Ho Chi Minh City, Vietnam |
| LinkedIn | https://www.linkedin.com/in/phuoctm0712 |
| GitHub | https://github.com/phuoctmse |
| Năm thành lập | 2026 |
| Giai đoạn | Pre-seed / Bootstrapped |
| Số nhân sự | 1 (founder) |
| Mã số thuế / ĐKKD | Chưa có |

## One-liner

Minh Phuoc Solution builds AI-native infrastructure tooling that helps engineering teams detect, diagnose and remediate Kubernetes incidents safely.

## Vấn đề

Đội ngũ nhỏ chạy Kubernetes thường không có SRE trực 24/7. Sự cố production tốn nhiều thời gian tìm root cause, và việc giao cho AI agent xử lý thường bị chặn vì thiếu kiểm soát an toàn, audit và khả năng rollback.

## Giải pháp

Hệ thống AI Ops agent tự host trong cluster, với các lớp bảo vệ bắt buộc:

- Pipeline sự kiện có debounce và snapshot gọn, giảm ngữ cảnh gửi LLM khoảng **172x** (1.6 KB so với 278 KB `kubectl` dump thô).
- Lớp LLM provider cắm rời được (Anthropic / OpenAI / Ollama).
- Executor có whitelist, owner-guard, giới hạn replica, cooldown, idempotency.
- Audit trail đầy đủ, dry-run và rollback.

## Sản phẩm / Dự án

| Sản phẩm | Mô tả | Link |
|---|---|---|
| Kite | AI Ops agent cho Kubernetes (Go, controller-runtime, CRD `KiteAgent`) | https://github.com/phuoctmse/Kite |
| RunGuard | Công cụ xử lý sự cố Kubernetes theo runbook (FastAPI, 160+ tests, 90%+ coverage) | https://github.com/phuoctmse/RunGuard |
| Aura | Pipeline kiểm duyệt nội dung ảnh thời gian thực | https://github.com/phuoctmse/AI-Unsafe-Resource-Analyzer |

## Dịch vụ

1. **Kubernetes & Cloud Infrastructure** — thiết kế, triển khai, tối ưu trên AWS / DigitalOcean.
2. **CI/CD & GitOps** — GitHub Actions, ArgoCD, Helm.
3. **AI-native Ops** — tích hợp LLM agent vào quy trình vận hành có kiểm soát.
4. **Observability** — Datadog, giám sát và cảnh báo.

## Cách dùng Claude

- Claude là LLM provider chính của Kite để phân tích sự cố và đề xuất hành động.
- Claude Code được dùng để phát triển, viết test và review code.
- Dự kiến: mở rộng agent đa bước (diagnose → propose → approve → execute) với tool use.

## Năng lực của founder

- DevOps / Platform Engineering: Kubernetes, Docker, Helm, ArgoCD, GitHub Actions, Kafka.
- Chứng chỉ AWS: Solutions Architect Associate, Cloud Practitioner, Serverless.
- Từng dẫn dắt mảng DevOps/backend cho nền tảng microservices 5 service, uptime 99.9%.

## Traction

- 3 sản phẩm open-source/portfolio đã public.
- [TODO] Số người dùng / khách hàng / pilot nếu có.
- [TODO] Doanh thu hoặc LOI nếu có.

## Kế hoạch 12 tháng

- Phát hành Kite v1 (GA) với tài liệu và Helm chart.
- Có 3–5 đội pilot dùng thử.
- Hoàn thiện pháp nhân và quy trình thương mại hoá.
