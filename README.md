# N4 到 N2 日文升級教室

這是一個 Vue.js 個人教學網站期末專案。目標讀者是已經有 N4 基礎、想往 N2 前進的高中或大學生。

## 網站功能

- 10 週 N4 → N2 學習路線
- N3／N2 容易混淆文法整理
- 互動句型測驗與即時回饋
- 每週讀書時間計算機
- 影片搜尋與官方考試資源連結

## 使用的 Vue 技術

- `v-for`：學習路線、文法清單、影片資源清單
- `v-if`：顯示選取的檢核重點與答題回饋
- `ref`：搜尋關鍵字、篩選條件、測驗答案、每週讀書時間
- `computed`：篩選後資料、測驗分數、建議週數
- `component`：LessonCard、QuizPanel、StudyPlanner
- Vue Router：首頁、學習路線、文法整理、互動練習、影片資源

## 本機執行

```bash
npm install
npm run dev
```

## 測試與建置

```bash
npm test
npm run build
```

## GitHub Pages

發布後網址：{{GITHUB_PAGES_URL}}
