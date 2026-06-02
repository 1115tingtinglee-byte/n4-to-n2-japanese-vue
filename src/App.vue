<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/" aria-label="回到首頁">
        <span class="brand-mark">日</span>
        <span>
          <strong>N4 → N2 日文升級教室</strong>
          <small>Vue.js 個人教學網站</small>
        </span>
      </RouterLink>
      <nav class="nav-links" aria-label="主要導覽">
        <RouterLink to="/roadmap">學習路線</RouterLink>
        <RouterLink to="/grammar">文法整理</RouterLink>
        <RouterLink to="/practice">互動練習</RouterLink>
        <RouterLink to="/resources">影片資源</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="site-footer">
      <p>給 N4 程度學習者的 N2 準備網站：先補 N3 橋接，再練 N2 長文、聽力與文法辨析。</p>
      <p>本網站使用 Vue Router、component、v-for、v-if、ref、computed 製作。</p>
    </footer>
  </div>
</template>
