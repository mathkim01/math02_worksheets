/*
  ===== 활동지 추가/수정은 여기서 합니다 =====
  - 새 대단원: worksheetMenu 배열에 { title: "대단원 이름", items: [...] }를 추가합니다.
  - 하위 활동지: 해당 items 배열에 { title: "표시 이름", file: "activities/파일명.html" }를 추가합니다.
  - 파일 경로는 이 index.html을 기준으로 작성합니다.
*/
const worksheetMenu = [
  {
    title: "1. 집합",
    items: [
      { title: "집합과 원소", file: "activities/set-element-listing-worksheet.html" },
      { title: "합집합과 교집합", file: "activities/hapjiphab_gyojiphab_activity.html" },
      { title: "벤다이어그램", file: "activities/vendiagram_interactive_worksheet.html" }
    ]
  },
  {
    title: "2. 도형과 측정",
    items: [
      { title: "삼각형의 내각의 합", file: "activities/03-triangle-angles.html" }
    ]
  }
];

const nav = document.querySelector("#worksheet-nav");
const viewer = document.querySelector("#worksheet-viewer");
const currentTitle = document.querySelector("#current-title");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menu-button");

function showWorksheet(item, button) {
  viewer.src = item.file;
  viewer.title = item.title;
  currentTitle.textContent = item.title;
  document.querySelectorAll(".worksheet-link").forEach(link => link.classList.remove("is-active"));
  button.classList.add("is-active");
  sidebar.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function buildMenu() {
  worksheetMenu.forEach((group, index) => {
    const groupElement = document.createElement("section");
    groupElement.className = "group";
    const groupButton = document.createElement("button");
    groupButton.className = "group-toggle";
    groupButton.type = "button";
    groupButton.setAttribute("aria-expanded", "true");
    groupButton.innerHTML = `<span class="chevron" aria-hidden="true">⌄</span><span>${group.title}</span>`;
    const itemsElement = document.createElement("div");
    itemsElement.className = "group-items";

    group.items.forEach((item, itemIndex) => {
      const link = document.createElement("button");
      link.className = "worksheet-link";
      link.type = "button";
      link.textContent = item.title;
      link.addEventListener("click", () => showWorksheet(item, link));
      if (index === 0 && itemIndex === 0) showWorksheet(item, link);
      itemsElement.append(link);
    });

    groupButton.addEventListener("click", () => {
      const collapsed = groupElement.classList.toggle("is-collapsed");
      groupButton.setAttribute("aria-expanded", String(!collapsed));
    });
    groupElement.append(groupButton, itemsElement);
    nav.append(groupElement);
  });
}

menuButton.addEventListener("click", () => {
  const open = sidebar.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

buildMenu();
