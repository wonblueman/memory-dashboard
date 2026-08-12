/* 2026-08-12 · 분기 갱신 미니 스냅샷 — 2Q26 확정 실적 + AI 사용성 새로고침
   나머지(주가·가격·수출·capex 등)는 이전 스냅샷에서 병합 이월 */
window.SNAPSHOTS = window.SNAPSHOTS || {};
window.SNAPSHOTS["2026-08-12"] = {
  meta:{
    week:"2026-08-12",
    label:"분기 갱신 (8/12 화 — 2Q26 확정 실적 반영 + AI 사용성 새로고침) · 주가·수출은 이전 이월",
    note:"★ 분기 영업이익 추이를 2Q26 확정치로 갱신 — SK 60.5조(사상최대·OPM 76%, 컨센 64.7조 하회+가이던스 미제시로 발표일 −9.6%)·삼성 89.5조(DS 89.2조=전사의 99.7%·DX 첫 적자). AI 사용성 새로고침: Gemini 앱 MAU 950M(알파벳 2Q 실적)·Claude 56M(센서타워 2Q·+640%)·기업 LLM 점유율 Anthropic 40%>OpenAI 27%>Google 21%(멘로).",
    source_version:"분기·AI=확정실적·각사공시 · 나머지=08-11/08-09 이월"
  },
  quarterly:{
    op_trend:{
      class:"mixed",
      src:"확정실적(1Q·2Q) · 3Q~4Q 컨센(에프앤가이드·KB·한투)",
      series:[
        {q:"1Q26",sk:37.6,ss:57.2,sk_cls:"measured",ss_cls:"measured",note:"확정"},
        {q:"2Q26",sk:60.5,ss:89.5,sk_cls:"measured",ss_cls:"measured",
         note:"✅ 확정 — SK 60.5조(컨센 64.7조 하회, 순이익 93.9조 중 63.3조 일회성)·삼성 전사 89.5조(DS 89.2조=99.7%·메모리 120.8조 사상최대·DX 첫 적자)"},
        {q:"3Q26",sk:85,ss:110,sk_cls:"estimated",ss_cls:"estimated",
         note:"삼성 콘콜: 3Q 매출 209조·영업익 110조 전망(KB 김동원). SK HBM4 3분기 매출 3배·D램 고정가 30%+ 상승 전망"},
        {q:"4Q26",sk:98,ss:120,sk_cls:"estimated",ss_cls:"estimated",
         note:"하반기 공급부족 심화 전망(삼성 '2028까지 공급부족' 자신감)"}
      ],
      note:"✅ <b>2Q26 확정 반영</b> — SK 60.5조·삼성(전사) 89.5조. 1Q·2Q measured(●확정), 3Q~4Q estimated(추정). SK는 사상 최대 영업익에도 컨센 하회+주주환원 미제시로 발표일 급락 / 삼성은 DS 89.2조로 사실상 전사 이익 전부가 반도체."
    }
  },
  ai_usage:{
    src:"각사 2Q26 어닝 · 센서타워 · 멘로벤처스 · Reuters (8/12 새로고침)",
    snapshot:[
      {svc:"ChatGPT (OpenAI)",cls:"measured",users:"WAU 900M(1B 근접) / MAU 10억",mrr:"~$2.1B",arr:"~$25B",ret:71,hl:true},
      {svc:"Gemini (Google)",cls:"measured",users:"앱 MAU 950M(2Q26 실적)·AIO 2.5B",mrr:"번들",arr:"구독 ~$1.2B",ret:60},
      {svc:"Claude (Anthropic)",cls:"estimated",users:"앱 MAU ~56M(센서타워 2Q·+640%)·기업 30만+",mrr:"~$3.9B",arr:"~$47B(gross)·기업 40%",ret:62,hl:true},
      {svc:"Meta AI",cls:"measured",users:"MAU ~10억",mrr:"광고",arr:"N/A",ret:null},
      {svc:"Copilot (MS)",cls:"measured",users:"MAU ~420M·유료 2천만석",mrr:"M365 번들",arr:"N/A",ret:null},
      {svc:"Perplexity",cls:"estimated",users:"점유율 ~5%대·#3",mrr:"비공개",arr:"비공개",ret:49}
    ],
    arr_note:"★ 기업 LLM API 점유율(멘로벤처스): <b>Anthropic 40% > OpenAI 27% > Google 21%</b>(3사 합 88%). Anthropic ARR $47B로 OpenAI $25B 상회(4월 첫 역전)·기업 ARPU ~$192 vs ChatGPT ~$23. Anthropic 밸류 $965B(5월 Series H)로 OpenAI $852B 상회. 소비자 트래픽은 ChatGPT 우위(~80%)·기업은 Claude 우위 — 상반된 구조."
  }
};
