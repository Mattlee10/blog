---
date: 2026-04-08
tags: [system, automation, obsidian, briefing]
publish: false
---

# ⚙️ 정보 수집 시스템 세팅 완료

## 무엇을 만들었나

매일 아침 8시, Claude가 자동으로 4개 토픽의 최신 정보를 수집해 이 inbox에 저장.

## 흐름

```
오전 8시 (자동)
  → Claude + 웹 검색
  → 브리핑 노트 생성
  → inbox/YYYY-MM-DD-briefing.md
  → 내가 읽고 → 블로그 노트 작성 → Obsidian Publish
```

## 목적

- 타겟 대상, 특히 VC, Founder 커뮤니티에 이 영역을 내가 깊게 보고 있음을 알리기
- **학습** — 정보 수집 → 이해 → 블로그 정리를 통한 도메인 깊이 축적
- **적용** — 배운 내용을 나/제품에 실제 반영

## 수집 토픽

- **AI / Agent / Embed / Security**
- **Causality / Context**
- **Kinesiology / Sport Science / Biometric Data**
- **Biohacking / Quantified Self**

## 내 할 일

1. 매일 아침 `inbox/` 열기
2. 브리핑 읽고 흥미로운 항목 1-3개 선택
3. 새 노트 작성 (단문, 내 인사이트 추가)
4. `publish: true` 로 변경 → Obsidian Publish

## 파일 위치

- 스크립트: `~/p360/scripts/collect-news.py`
- 로그: `/tmp/p360-briefing.log`
- 설정: `~/.config/p360/env`


---

- Obsidian Publish
- Quartz: Obsidian md -> GitHub Pages
- Bechmark: Stratechery by Ben Thompson
