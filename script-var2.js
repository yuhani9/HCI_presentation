const legacyCourses = [
  ["コンピュータアーキテクチャ", "2026-26-04001", "3年次 前期"],
  ["デジタル信号処理 II", "2026-26-35280", "3年次 前期"],
  ["DSPアドバンスド実習", "2026-26-07506", "3年次 前期"],
  ["半導体実験 I", "2026-26-07301", "3年次 前期"],
  ["デジタル電子回路", "2026-26-05016", "3年次 前期"],
  ["半導体工学", "2026-26-05003", "3年次 前期"],
  ["コンピュータネットワーク", "2026-26-04007", "3年次 前期"],
  ["データベース I", "2026-26-04003", "3年次 前期"],
  ["ビジュアライゼーション", "2026-26-04002", "3年次 前期"],
  ["HCI設計論", "2026-26-04001", "3年次 前期"],
  ["人工知能応用", "2026-26-03007", "3年次 前期"],
  ["実用英語 III", "2026-26-01003", "3年次 前期"],
  ["最適化理論", "2026-25-25370", "過去年度"],
  ["アントレプレナーシップ", "2026-26-07503", "3年次 前期"],
  ["半導体実験 II", "2026-26-07401", "3年次 後期"],
  ["電気電子材料", "2026-26-05017", "3年次 後期"],
  ["半導体製造技術", "2026-26-05005", "3年次 後期"],
  ["EDA概論", "2026-26-05004", "3年次 後期"],
  ["人工知能理論", "2026-26-03009", "3年次 後期"],
  ["人工知能演習", "2026-26-03008", "3年次 後期"],
  ["実用英語 IV", "2026-26-01004", "3年次 後期"],
  ["統計 I", "2025", "2年次 前期"],
  ["情報理論", "2025-1T", "2年次 前期"],
  ["DSゼミナール I", "2025-26-07002", "2年次 前期"],
  ["制御工学 I", "2025-26-05010", "2年次 前期"],
  ["半導体基礎", "2025-26-05001", "2年次 前期"],
  ["プログラミング演習 I", "2025-26-03005", "2年次 前期"],
  ["アルゴリズム論 I", "2025-26-03003", "2年次 前期"],
  ["データ分析 I", "2025-26-02012", "2年次 前期"],
  ["統計学演習 I", "2025-26-02010", "2年次 前期"],
  ["離散数学 I", "2025-26-02006", "2年次 前期"],
  ["実用英語 I", "2025-26-01001", "2年次 前期"],
  ["データ分析", "2025-26-02014", "2年次 後期"],
  ["統計 II", "2025", "2年次 後期"],
  ["論理回路", "2025-25-34030", "2年次 後期"],
  ["DSゼミナール II", "2025-26-07003", "2年次 後期"],
  ["アプリビジネス論", "2025-26-06018", "2年次 後期"],
  ["グローバル企業家論", "2025-26-06016", "2年次 後期"],
  ["電磁気学概論", "2025-26-05002", "2年次 後期"],
  ["ウェブプログラミング基礎", "2025-26-04008", "2年次 後期"],
  ["プログラミング演習 II", "2025-26-03006", "2年次 後期"],
  ["アルゴリズム論 II", "2025-26-03004", "2年次 後期"],
  ["データ分析 II", "2025-26-02013", "2年次 後期"],
  ["統計学演習 II", "2025-26-02011", "2年次 後期"],
  ["実用英語 II", "2025-26-01002", "2年次 後期"],
  ["ディジタル信号処理 I", "2025-26-04011", "過去年度"],
  ["集合と論理", "2024-25-24050", "1年次"],
  ["DS倫理", "2024-26-03001", "1年次"],
  ["DS基礎数学演習 I", "2024-26-02001", "1年次"],
  ["ICTリテラシー", "2024", "1年次"],
  ["現代医療と生命科学", "2024-58-B5275", "1年次"],
  ["暮らしと情報・通信技術", "2024-58-B4875", "1年次"]
];

const courses = [
  { title: "HCI設計論", code: "2026-26-04001", category: "3年次 前期", status: "current", favorite: true, todo: 1, recent: 1 },
  { title: "データベース I", code: "2026-26-04003", category: "3年次 前期", status: "current", favorite: true, todo: 0, recent: 2 },
  { title: "データ可視化演習", code: "2025-26-02014", category: "2年次 後期", status: "past", favorite: true, todo: 2, recent: 3 },
  { title: "コンピュータネットワーク", code: "2026-26-04007", category: "3年次 前期", status: "current", favorite: false, todo: 1, recent: 4 },
  { title: "ビジュアライゼーション", code: "2026-26-04002", category: "3年次 前期", status: "current", favorite: true, todo: 0, recent: 5 },
  { title: "人工知能応用", code: "2026-26-03007", category: "3年次 前期", status: "current", favorite: false, todo: 0, recent: 6 },
  { title: "半導体実験 I", code: "2026-26-07301", category: "3年次 前期", status: "current", favorite: false, todo: 3, recent: 7 },
  { title: "実用英語 III", code: "2026-26-01003", category: "3年次 前期", status: "current", favorite: false, todo: 0, recent: 8 },
  { title: "半導体実験 II", code: "2026-26-07401", category: "3年次 後期", status: "current", favorite: false, todo: 0, recent: 9 },
  { title: "プログラミング演習 II", code: "2025-26-03006", category: "2年次 後期", status: "past", favorite: false, todo: 0, recent: 10 },
  { title: "アルゴリズム論 I", code: "2025-26-03003", category: "2年次 前期", status: "past", favorite: false, todo: 0, recent: 11 },
  { title: "統計学演習 I", code: "2025-26-02010", category: "2年次 前期", status: "past", favorite: false, todo: 0, recent: 12 },
  { title: "ICTリテラシー", code: "2024", category: "1年次", status: "past", favorite: false, todo: 0, recent: 13 }
];

const state = {
  tab: "current",
  term: "all",
  search: ""
};

const legacyList = document.querySelector("#legacy-list");
const courseCards = document.querySelector("#course-cards");
const favoriteCards = document.querySelector("#favorite-cards");
const pastCards = document.querySelector("#past-cards");
const resultTitle = document.querySelector("#result-title");
const resultCount = document.querySelector("#result-count");

function renderLegacyCourses() {
  legacyList.innerHTML = legacyCourses.map(([title, code, category]) => `
    <a class="legacy-course" href="#">
      <span aria-hidden="true">◒</span>
      <span>${title} <small>(${code}) ${category}</small></span>
    </a>
  `).join("");
}

function makeCard(course) {
  const statusLabel = course.status === "current" ? "今学期" : "過去履修";
  const todoBadge = course.todo > 0 ? `<span class="badge todo">未提出 ${course.todo}</span>` : "";
  const recentBadge = course.recent <= 4 ? `<span class="badge recent">最近開いた</span>` : "";

  return `
    <article class="card ${course.favorite ? "favorite" : ""} ${course.status === "past" ? "past" : ""}">
      <div class="card-header">
        <div>
          <h4>${course.title}</h4>
          <p class="meta">${course.code}<br>${course.category}</p>
        </div>
        <span class="star" aria-label="${course.favorite ? "お気に入り" : "通常"}">${course.favorite ? "★" : "☆"}</span>
      </div>
      <div class="badges">
        <span class="badge">${statusLabel}</span>
        ${todoBadge}
        ${recentBadge}
      </div>
    </article>
  `;
}

function filterCourseList(list) {
  return list
    .filter(course => state.term === "all" || course.category === state.term)
    .filter(course => {
      const haystack = `${course.title} ${course.code} ${course.category}`.toLowerCase();
      return haystack.includes(state.search.toLowerCase());
    })
    .sort((a, b) => a.recent - b.recent);
}

function activeCourses() {
  if (state.tab === "favorite") return courses.filter(course => course.favorite);
  if (state.tab === "todo") return courses.filter(course => course.todo > 0);
  if (state.tab === "past") return courses.filter(course => course.status === "past");
  return courses.filter(course => course.status === "current");
}

function renderImprovedCourses() {
  const titleByTab = {
    current: "今学期の科目",
    favorite: "お気に入り科目",
    todo: "未提出あり",
    past: "過去履修科目"
  };

  const results = filterCourseList(activeCourses());
  const favorites = filterCourseList(courses.filter(course => course.favorite));
  const past = filterCourseList(courses.filter(course => course.status === "past"));

  resultTitle.textContent = titleByTab[state.tab];
  resultCount.textContent = `${results.length}件`;
  courseCards.innerHTML = results.length ? results.map(makeCard).join("") : `<p class="empty">条件に合う科目がありません。</p>`;
  favoriteCards.innerHTML = favorites.length ? favorites.map(makeCard).join("") : `<p class="empty">お気に入り科目がありません。</p>`;
  pastCards.innerHTML = past.length ? past.map(makeCard).join("") : `<p class="empty">過去履修科目がありません。</p>`;
}

document.querySelectorAll(".mode-button").forEach(button => {
  button.addEventListener("click", () => {
    const mode = button.dataset.mode;
    document.querySelectorAll(".mode-button").forEach(item => item.classList.toggle("active", item.dataset.mode === mode));
    document.querySelector("#before-panel").classList.toggle("active", mode === "before");
    document.querySelector("#after-panel").classList.toggle("active", mode === "after");
  });
});

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    state.tab = button.dataset.tab;
    document.querySelectorAll(".tab").forEach(item => item.classList.toggle("active", item.dataset.tab === state.tab));
    renderImprovedCourses();
  });
});

document.querySelector("#search-input").addEventListener("input", event => {
  state.search = event.target.value;
  renderImprovedCourses();
});

document.querySelector("#term-select").addEventListener("change", event => {
  state.term = event.target.value;
  renderImprovedCourses();
});

renderLegacyCourses();
renderImprovedCourses();
