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
    },
    scorecard:{
      note:"3사 동일 양식 · 실적 vs 컨센서스 vs 초과율. ⚠️ 단위 상이 — SK·삼성=조원(EPS 원), 마이크론=$B. SK/삼성은 영업이익률(OPM), 마이크론은 매출총이익률(GM). 순이익 컨센은 증권사가 잘 안 내 빈칸 많음. 초과율=실적/컨센−1.",
      order:["sk_hynix","samsung","micron"],
      companies:{
        sk_hynix:{ name:"SK하이닉스", color:"sk", quarters:[
          { q:"2026 2분기", tag:"7/29 확정", cls:"measured", rows:[
              {k:"매출",       a:79.3,   c:83.6,  u:"조", m:"rev"},
              {k:"영업이익",   a:60.5,   c:64.7,  u:"조", hl:true, m:"op"},
              {k:"순이익",     a:93.9,   c:51.6,  u:"조", note:"일회성 평가익 63.3조 포함 → 경상 ~30.6조", m:"net"},
              {k:"EPS",        a:128571, c:68565, u:"원", note:"일회성 포함", m:"eps"},
              {k:"영업이익률", a:76,     c:null,  u:"%", m:"opm"},
              {k:"Gross Margin", a:88,   c:null,  u:"%", est:true, note:"△역산(영업익+판관비 추정)·미공시", m:"gm"}
            ],
            bottom:[
              {k:"가이던스", v:"HBM4 3분기 매출 3배·D램 고정가 30%+ 상승"},
              {k:"Capex",    v:"2026 40조원 후반(연간)·'CapEx Discipline' 유지"},
              {k:"수주/LTA", v:"엔비디아 2년·구글 5년 LTA 협상 진행"}
            ] },
          { q:"2026 1분기", tag:"확정", cls:"measured", rows:[
              {k:"매출",       a:52.6, c:null, u:"조"},
              {k:"영업이익",   a:37.6, c:null, u:"조"},
              {k:"영업이익률", a:72,   c:null, u:"%"}
            ] }
        ]},
        samsung:{ name:"삼성전자", color:"ss", quarters:[
          { q:"2026 2분기", tag:"7/30 확정", cls:"measured", rows:[
              {k:"매출(전사)",     a:171.5, c:null, u:"조", m:"rev"},
              {k:"영업이익(전사)", a:89.5,  c:85.5, u:"조", hl:true, m:"op"},
              {k:"└ DS(반도체)",   a:89.2,  c:null, u:"조", note:"전사의 99.7%"},
              {k:"└ DX",           a:-0.8,  c:null, u:"조", note:"첫 적자 전환"},
              {k:"순이익",         a:71.6,  c:null, u:"조", note:"순이익률 42%(정상)", m:"net"},
              {k:"EPS",            a:10849, c:null, u:"원", m:"eps"},
              {k:"영업이익률",     a:52,    c:null, u:"%", m:"opm"},
              {k:"Gross Margin",   a:71,    c:null, u:"%", est:true, note:"△역산(영업익+판관비 추정·R&D 16조 포함)·미공시", m:"gm"}
            ],
            bottom:[
              {k:"가이던스", v:"'2028까지 공급부족' 자신감·HBM4 3분기 3배"},
              {k:"Capex",    v:"2026E ~52조(연간)·R&D 16조 역대 최대"},
              {k:"수주/LTA", v:"빅테크 장기공급계약(LTA) 정책화"}
            ] },
          { q:"2026 1분기", tag:"확정", cls:"measured", rows:[
              {k:"매출(전사)",     a:133.9, c:null, u:"조"},
              {k:"영업이익(전사)", a:57.2,  c:null, u:"조"},
              {k:"EPS",            a:7138,  c:null, u:"원"},
              {k:"영업이익률",     a:43,    c:null, u:"%"}
            ] }
        ]},
        micron:{ name:"마이크론", color:"mu", unit_hint:"$B (fiscal)", quarters:[
          { q:"FQ3 2026", tag:"6/24 확정 (5/28 종료)", cls:"measured", rows:[
              {k:"매출",              a:41.46, c:35.59, u:"$B", m:"rev"},
              {k:"영업이익(추정)",    a:33.5,  c:null,  u:"$B", note:"△ 역산(GP−opex)·근사", m:"op"},
              {k:"순이익(GAAP)",      a:28.24, c:null,  u:"$B", m:"net"},
              {k:"순이익(Non-GAAP)",  a:28.86, c:null,  u:"$B"},
              {k:"EPS(adj)",          a:25.11, c:20.49, u:"$", m:"eps"},
              {k:"Gross Margin",      a:84.9,  c:81,    u:"%", m:"gm"}
            ],
            bottom:[
              {k:"가이던스", v:"FQ4 매출 $50B±1·EPS $31±1·GM 86% (컨센 대폭 상회)"},
              {k:"Capex",    v:"FQ3 $7.1B·FY26 ~$27B·FY27 $40B+"},
              {k:"수주/LTA", v:"SCA 16건 $100B+·예치금 $22B·DRAM 20%/NAND 1/3 커버"}
            ] },
          { q:"FQ2 2026", tag:"확정", cls:"measured", rows:[
              {k:"매출", a:23.86, c:null, u:"$B"}
            ] }
        ]}
      }
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
