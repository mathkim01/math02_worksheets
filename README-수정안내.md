# 수학 활동지 모음 - 수정 안내

## 먼저 알아둘 파일

- `index.html` : 홈 화면입니다. 보통 수정할 필요가 없습니다.
- `menu.js` : 왼쪽 대단원과 하위 활동지 목록을 적는 곳입니다.
- `activities` 폴더 : 학생에게 보여 줄 각각의 활동지 HTML 파일을 넣는 곳입니다.

## 새 활동지 1개 추가하기

예를 들어 `activities` 폴더에 `05-decimals.html` 파일을 새로 만들었다고 가정합니다.

1. `menu.js` 파일을 메모장이나 VS Code로 엽니다.
2. 새 활동지를 넣을 대단원의 `items` 안에 아래 한 줄을 추가합니다. 앞 항목 뒤에는 쉼표(`,`)가 있어야 합니다.

```js
{ title: "소수의 덧셈", file: "activities/05-decimals.html" }
```

3. 저장한 뒤 `index.html`을 새로고침합니다. 왼쪽 목록에 **소수의 덧셈**이 나타납니다.

## 새 대단원(하위 탭 묶음) 추가하기

`menu.js`의 `worksheetMenu` 배열에서 마지막 `}` 뒤에 쉼표를 넣고, 아래 구조를 추가합니다.

```js
{
  title: "4. 자료와 가능성",
  items: [
    { title: "막대그래프 읽기", file: "activities/05-bar-chart.html" },
    { title: "가능성 비교", file: "activities/06-probability.html" }
  ]
}
```

`title`은 왼쪽에서 보이는 이름이고, `file`은 실제 HTML 파일의 위치입니다. 파일명은 영문, 숫자, 하이픈(`-`)만 사용하면 오류를 줄일 수 있습니다.

## 활동지 HTML 복사해서 만들기

가장 쉬운 방법은 `activities/01-number-line.html`을 복사한 뒤 새 이름으로 바꾸는 것입니다. 파일 안의 `<title>`, `<h1>`, 문제 내용을 새 활동지에 맞게 수정하세요. 활동지의 공통 글꼴과 여백은 `activities/worksheet.css`가 맡고 있으므로 그대로 두면 홈 화면과 자연스럽게 보입니다.

## 열기

`index.html`을 더블 클릭하면 브라우저에서 열립니다. 전체 `math-worksheet-home` 폴더를 그대로 보관해야 하며, `activities` 폴더를 따로 옮기면 오른쪽 활동지가 열리지 않습니다.
