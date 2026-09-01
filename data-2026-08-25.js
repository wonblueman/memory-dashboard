/* 2026-08-25 · AI 사용성 갱신 — Anthropic ARR $65B(블룸버그 8/17) · OpenAI $40B(8/13)
   ⚠️ ai_usage.trend / ai_usage.tokens / ai_usage.ret_note 는 건드리지 않음(이전 스냅샷에서 이월).
      snapshot · arr_note · src 만 교체. */
window.SNAPSHOTS = window.SNAPSHOTS || {};
window.SNAPSHOTS["2026-08-25"] = {
  meta: {
    week: "2026-08-25",
    label: "AI 사용성 갱신 (8/25) — 앤트로픽·오픈AI 매출 대폭 상향",
    note: "★ <b>Anthropic ARR $47B → $65B</b>(블룸버그 8/17, 7월 말 기준·작년말 $9B의 7배). <b>2Q26 매출 $11.5B</b>(전년 $787M의 14배·1Q $4.73B 대비 +140%)·조정 영업이익 흑자 전환·IPO 비밀신청(모건스탠리/골드만/JPM). <b>OpenAI ARR $25B → $40B</b>(블룸버그 8/13, 코딩·구독·광고)·<b>ChatGPT WAU 10억 공식 확정</b>(7/31)·기업 매출이 소비자 첫 추월. 두 회사 모두 IPO 준비 — AI 자금조달 사이클의 핵심 지표.",
    source_version: "AI=블룸버그/Axios/TechCrunch/FT · 나머지=08-24 이월"
  },

  ai_usage: {
    src: "블룸버그(8/13 OpenAI·8/17 Anthropic) · Axios · TechCrunch · FT · 멘로벤처스 · 센서타워 (8/25 갱신)",
    snapshot: [
      { svc: "ChatGPT (OpenAI)", cls: "measured", hl: true,
        users: "WAU <b>10억 확정</b>(7/31 공식)·유료 5천만+",
        mrr: "~$3.3B", arr: "<b>$40B</b>(8월·↑$25B)", ret: 71 },
      { svc: "Claude (Anthropic)", cls: "measured", hl: true,
        users: "앱 MAU ~56M(센서타워 2Q·+640%)·기업 30만+·$1M+ 고객 1,000곳",
        mrr: "~$5.4B", arr: "<b>$65B</b>(7월말·↑$47B)", ret: 62 },
      { svc: "Gemini (Google)", cls: "measured",
        users: "앱 MAU 950M(2Q26 실적)·AIO 2.5B",
        mrr: "번들", arr: "구독 ~$1.2B", ret: 60 },
      { svc: "Meta AI", cls: "measured", users: "MAU ~10억", mrr: "광고", arr: "N/A", ret: null },
      { svc: "Copilot (MS)", cls: "measured", users: "MAU ~420M·유료 2천만석", mrr: "M365 번들", arr: "N/A", ret: null },
      { svc: "Perplexity", cls: "estimated", users: "점유율 ~5%대·#3", mrr: "비공개", arr: "비공개", ret: 49 }
    ],
    arr_note: "★ <b>앤트로픽 ARR $65B</b>(블룸버그 8/17, 7월 말) — 2025년 말 $9B에서 <b>7배</b>. 경로: $9B(25년말)→$30B(4월)→$47B(5월·Series H)→<b>$65B(7월말)</b>. <b>2Q26 매출 $11.5B</b>(전년동기 $787M의 14배, 1Q $4.73B 대비 +140%)로 <b>조정 영업이익 흑자</b> 전환. 투자자 전망 연말 $100~120B(FT). 트래커(Yipit·TickerTrends)는 7월말 이미 $69~74B 추정.<br><br>★ <b>오픈AI ARR $40B</b>(블룸버그 8/13) — 2~5월 $25B 정체 후 코딩(Codex)·구독·광고로 재가속, <b>7월 기업 매출이 소비자를 첫 추월</b>. 격차는 여전히 <b>앤트로픽이 $25B 우위</b>지만 4월 첫 역전 당시보다 좁혀짐.<br><br>★ <b>양사 모두 IPO 비밀신청</b> — 앤트로픽은 이르면 올가을 상장(모건스탠리·골드만·JPM), 밸류 $965B(5월 Series H). 주관사는 2028년 매출 $190~200B 기준으로 언더라이팅(로이터). 기업 LLM 점유율은 <b>Anthropic 40% > OpenAI 27% > Google 21%</b>(멘로), 코딩 특화 지출은 앤트로픽 54%.<br><br>⚠️ <b>ARR은 최근 월 실적×12의 런레이트</b>로 확정 연매출이 아닙니다. 양사 산정 방식도 달라 단순 비교에 주의(앤트로픽 2026 실제 연매출은 $20~26B 추정). <b>메모리 수요와의 연결</b>: 이 매출 급증이 추론 토큰 수요→HBM·DDR5 수요의 선행 지표입니다."
  },

  facts: {
    krus_ai: {
      label: "앤트로픽 ARR (런레이트)",
      value: "$65B",
      star: true, dir: "up",
      sub: "블룸버그 8/17 · 7월 말 기준, 2025년 말 $9B의 <b>7배</b> · 2Q26 매출 $11.5B(+140% QoQ)·조정 영업익 흑자 · IPO 비밀신청(가을 상장 목표·밸류 $965B) · OpenAI $40B 대비 $25B 우위",
      as_of: "2026-08-25", class: "measured",
      src: "Bloomberg 8/17 · Axios · TechCrunch (3소스 교차)"
    }
  },

  ops: {
    changelog: [
      "2026-08-25 AI 사용성 갱신 — 앤트로픽 ARR $47B→$65B, 오픈AI $25B→$40B, ChatGPT WAU 10억 확정 반영. 순서를 ARR 상위 2사(ChatGPT·Claude) 우선으로 재배치",
      "⚠️ ai_usage.trend·tokens·ret_note는 <b>의도적으로 미포함</b> — 병합이 하위키 단위 교체라 포함하지 않아야 이전 값이 그대로 이월됨(8/23 headline.body 소실 사고 재발 방지)",
      "ARR은 런레이트(최근월×12)이지 확정 연매출이 아님을 arr_note에 명시 — 역산·추정치를 서사로 승격하지 않는 규율 적용"
    ]
  }
};
