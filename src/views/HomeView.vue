<script setup>
const kinkakujiHeroSrc = `${import.meta.env.BASE_URL}kinkakuji-bg.svg`
</script>

<template>
  <section class="hero-section">
    <div class="hero-copy">
      <p class="eyebrow">給 N4 程度學習者</p>
      <h1>從「看得懂一點」到「能挑戰 N2」的日文升級網站</h1>
      <p>
        這個網站把 N4 到 N2 的路線拆成四個階段：N4 盤點、N3 橋接、N2 文法閱讀、考前整合。
        目標不是叫你硬背更多，而是學會整理錯題、比較句型、讀懂段落和抓聽力最後決定。
      </p>
      <div class="hero-actions">
        <RouterLink class="primary-link" to="/roadmap">開始看學習路線</RouterLink>
        <RouterLink class="secondary-link" to="/practice">先做互動測驗</RouterLink>
      </div>
    </div>
    <figure class="hero-visual kinkakuji-hero-visual" aria-label="金閣寺風格主視覺">
      <div class="kinkakuji-hero-card">
        <img :src="kinkakujiHeroSrc" alt="金閣寺風格的日式建築插畫" />
        <div class="hero-route-card">
          <span>京都金色學習路線</span>
          <strong>N4 → N3 → N2</strong>
          <small>每週複習、練習題、錯題整理一起前進</small>
        </div>
        <ol class="level-path" aria-label="日文升級階段">
          <li>N4 基礎盤點</li>
          <li>N3 橋接整理</li>
          <li>N2 文法閱讀</li>
        </ol>
      </div>
      <figcaption>用金閣寺風格主視覺，把學習路線做成更有日本感的目標卡。</figcaption>
    </figure>
  </section>

  <section class="stats-grid" aria-label="網站重點">
    <article>
      <strong>10</strong>
      <span>週學習路線</span>
    </article>
    <article>
      <strong>8</strong>
      <span>組核心文法比較</span>
    </article>
    <article>
      <strong>5</strong>
      <span>題互動句型測驗</span>
    </article>
    <article>
      <strong>5</strong>
      <span>影片與考試資源連結</span>
    </article>
  </section>

  <section class="panel two-column">
    <div>
      <p class="eyebrow">網站使用方式</p>
      <h2>不要從 N2 題目硬衝，先把升級順序排好</h2>
      <p>
        很多人從 N4 到 N2 會卡住，是因為中間少了 N3 橋接。
        本網站用清楚的週次安排，讓讀者知道每一週要練什麼、怎麼檢查自己是否真的進步。
      </p>
    </div>
    <ul class="check-list">
      <li>先用學習路線找到目前階段。</li>
      <li>再到文法整理頁比較容易混淆的句型。</li>
      <li>最後用互動練習檢查自己是否能判斷語氣。</li>
    </ul>
  </section>
</template>
