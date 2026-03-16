# Fichiers entiers — HUB2gether

Ce document contient les versions **complètes** des fichiers demandés.

---

## index.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hub2gether — Le sport qui connecte votre entreprise</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Three.js pour la balle 3D procédurale -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<style>
/* ══════════════════════════════════════════
   RESET & BASE
══════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Poppins', sans-serif;
  background: #F7F8F4;
  color: #0F2E22;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
:root {
  --dark:   #0F2E22;
  --mint:   #7FE3B3;
  --yellow: #FFEC6D;
  --cream:  #F7F8F4;
  --white:  #FFFFFF;
  --border: rgba(15,46,34,0.09);
  --muted:  rgba(15,46,34,0.45);
}
img { max-width: 100%; display: block; }
a  { text-decoration: none; color: inherit; }

/* ══════════════════════════════════════════
   NAV
══════════════════════════════════════════ */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6vw;
  background: rgba(247,248,244,0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
}
nav.scrolled {
  border-color: var(--border);
  box-shadow: 0 2px 30px rgba(15,46,34,0.06);
}
.nav-logo {
  display: flex; align-items: center; gap: 9px;
  font-weight: 800; font-size: 1.25rem; letter-spacing: -0.02em;
}
.nav-logo-dot {
  width: 9px; height: 9px; border-radius: 50%;
  background: var(--mint);
  animation: pulse-dot 2.2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(127,227,179,0.6); }
  50%      { transform: scale(1.2); box-shadow: 0 0 0 7px rgba(127,227,179,0); }
}
.nav-links {
  display: flex; gap: 36px; list-style: none;
}
.nav-links a {
  font-size: 0.85rem; font-weight: 500;
  color: var(--muted);
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--dark); }
.nav-cta {
  background: var(--dark); color: var(--mint);
  border: none; border-radius: 99px;
  padding: 11px 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.82rem; font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
  white-space: nowrap;
}
.nav-cta:hover {
  background: #1e5c3a;
  transform: translateY(-1px);
  box-shadow: 0 4px 18px rgba(15,46,34,0.2);
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 110px 6vw 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* dot grid */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(15,46,34,0.07) 1.5px, transparent 1.5px);
  background-size: 30px 30px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
}

/* orbs */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(127,227,179,0.22) 0%, transparent 70%);
  top: -120px; left: -120px;
  animation: orb-float 14s ease-in-out infinite;
}
.hero-orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,236,109,0.18) 0%, transparent 70%);
  bottom: -80px; right: -80px;
  animation: orb-float 11s ease-in-out infinite reverse;
}
@keyframes orb-float {
  0%,100% { transform: translate(0,0); }
  33%      { transform: translate(25px,-25px); }
  66%      { transform: translate(-18px,18px); }
}

.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(127,227,179,0.15);
  border: 1px solid rgba(127,227,179,0.4);
  border-radius: 99px;
  padding: 6px 18px;
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: #0a6640;
  margin-bottom: 28px;
  animation: fadeUp 0.8s ease both;
}
.hero-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--mint);
}

.hero h1 {
  font-size: clamp(2.8rem, 6vw, 5.8rem);
  font-weight: 900;
  line-height: 1.06;
  letter-spacing: -0.04em;
  max-width: 860px;
  margin: 0 auto;
  animation: fadeUp 0.8s ease 0.1s both;
}
.hero h1 .hl {
  position: relative; display: inline-block; z-index: 0;
}
.hero h1 .hl::after {
  content: '';
  position: absolute;
  left: -3px; right: -3px; bottom: 6px;
  height: 14px;
  background: var(--yellow);
  z-index: -1; border-radius: 5px;
}

.hero-sub {
  font-size: 1.05rem; font-weight: 400;
  color: var(--muted); line-height: 1.85;
  max-width: 540px; margin: 26px auto 44px;
  animation: fadeUp 0.8s ease 0.2s both;
}

.hero-btns {
  display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
  animation: fadeUp 0.8s ease 0.3s both;
}
.btn-primary {
  background: var(--dark); color: var(--mint);
  border: none; border-radius: 99px;
  padding: 16px 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem; font-weight: 600;
  cursor: pointer; display: inline-flex; align-items: center; gap: 9px;
  transition: all 0.25s;
  box-shadow: 0 4px 20px rgba(15,46,34,0.18);
}
.btn-primary:hover {
  background: #1e5c3a;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(15,46,34,0.25);
}
.btn-secondary {
  background: transparent; color: var(--dark);
  border: 1.5px solid rgba(15,46,34,0.2);
  border-radius: 99px;
  padding: 15px 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem; font-weight: 500;
  cursor: pointer; display: inline-flex; align-items: center; gap: 9px;
  transition: all 0.25s;
}
.btn-secondary:hover {
  border-color: var(--dark);
  background: rgba(15,46,34,0.04);
}

/* mockup hero */
.hero-mockup {
  margin-top: 72px;
  width: 100%; max-width: 820px;
  background: var(--white);
  border-radius: 24px;
  border: 1px solid var(--border);
  padding: 24px;
  box-shadow: 0 4px 12px rgba(15,46,34,0.05), 0 24px 80px rgba(15,46,34,0.08);
  animation: fadeUp 0.8s ease 0.5s both;
  position: relative;
  z-index: 1;
}
.mockup-bar {
  display: flex; gap: 8px; margin-bottom: 20px;
}
.mockup-circle {
  width: 11px; height: 11px; border-radius: 50%;
}
.mockup-circle:nth-child(1) { background: #FF5F57; }
.mockup-circle:nth-child(2) { background: #FFBD2E; }
.mockup-circle:nth-child(3) { background: #28CA41; }

.mockup-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.mockup-card {
  background: var(--cream);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid var(--border);
  transition: transform 0.3s, box-shadow 0.3s;
  animation: fadeUp 0.6s ease both;
}
.mockup-card:nth-child(1) { animation-delay: 0.7s; }
.mockup-card:nth-child(2) { animation-delay: 0.85s; }
.mockup-card:nth-child(3) { animation-delay: 1.0s; }
.mockup-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(15,46,34,0.08);
}
.mc-icon {
  width: 40px; height: 40px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; margin-bottom: 12px;
}
.mc-icon.mint   { background: rgba(127,227,179,0.2); }
.mc-icon.yellow { background: rgba(255,236,109,0.3); }
.mc-icon.dark   { background: rgba(15,46,34,0.1); }
.mc-title { font-size: 0.8rem; font-weight: 700; margin-bottom: 4px; }
.mc-sub   { font-size: 0.72rem; color: var(--muted); }
.mc-num   { font-size: 1.6rem; font-weight: 800; color: var(--dark); margin-top: 8px; }

/* floating tags */
.hero-tag {
  position: absolute;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 0.78rem; font-weight: 600;
  box-shadow: 0 4px 20px rgba(15,46,34,0.08);
  display: flex; align-items: center; gap: 8px;
  white-space: nowrap;
  z-index: 2;
}
.hero-tag:nth-of-type(1) {
  top: 30%; left: -1%;
  animation: tag-float 4s ease-in-out infinite;
}
.hero-tag:nth-of-type(2) {
  top: 18%; right: -1%;
  animation: tag-float 4s ease-in-out infinite 1.4s;
}
.hero-tag:nth-of-type(3) {
  bottom: 22%; right: 0%;
  animation: tag-float 4s ease-in-out infinite 2.8s;
}
@keyframes tag-float {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}

/* logo band */
.logo-band {
  background: var(--white);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 40px 6vw;
  text-align: center;
}
.logo-band p {
  font-size: 0.7rem; font-weight: 700;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 28px;
}
.logo-band-row {
  display: flex; align-items: center; justify-content: center;
  gap: 52px; flex-wrap: wrap;
}
.logo-item {
  font-size: 1rem; font-weight: 800;
  color: var(--muted); opacity: 0.38;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
}
.logo-item:hover { opacity: 0.65; }

/* connector hub */
.connectors {
  padding: 92px 6vw;
  background: var(--white);
  border-bottom: 1px solid var(--border);
}
.connectors-grid {
  margin-top: 42px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.connector-card {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.25s;
}
.connector-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(15,46,34,0.08);
  border-color: rgba(15,46,34,0.2);
}
.connector-name {
  font-size: 0.95rem;
  font-weight: 700;
}
.connector-desc {
  font-size: 0.83rem;
  color: var(--muted);
  line-height: 1.7;
}
.connector-link {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #0a6640;
}


.module-showcase {
  padding: 110px 6vw;
  background: var(--cream);
}
.module-showcase + .module-showcase {
  padding-top: 0;
}
.module-head {
  max-width: 660px;
}
.module-head .section-sub { max-width: 620px; }
.module-shell {
  margin-top: 34px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(15,46,34,0.08);
}
.module-topbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg,#fff,#f9faf7);
}
.module-title {
  font-size: 0.86rem;
  font-weight: 700;
}
.module-note {
  font-size: 0.76rem;
  color: var(--muted);
}
.module-link {
  font-size: 0.75rem;
  font-weight: 700;
  color: #0a6640;
}
.module-frame {
  width: 100%;
  border: 0;
  display: block;
  background: #fff;
}

/* agenda split */
.agenda-split {
  margin-top: 42px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: stretch;
}
.agenda-copy {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 34px;
  box-shadow: 0 14px 40px rgba(15,46,34,0.06);
}
.agenda-copy h3 {
  font-size: 1.4rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}
.agenda-copy p {
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 16px;
}
.agenda-points {
  list-style: none;
  display: grid;
  gap: 12px;
}
.agenda-points li {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 14px;
  font-size: 0.82rem;
  font-weight: 500;
}
.agenda-points li strong {
  display: block;
  color: var(--dark);
  margin-bottom: 3px;
}
.agenda-panel .module-frame { height: 520px; }

/* dashboard blended section */
.dashboard-grid {
  margin-top: 42px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.dashboard-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
}
.dashboard-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.dashboard-card p {
  font-size: 0.86rem;
  color: var(--muted);
  line-height: 1.7;
}
.kpi-row {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
}
.kpi {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px;
  text-align: center;
}
.kpi strong { display:block; font-size: 1.25rem; }
.kpi span { font-size: 0.7rem; color: var(--muted); }
.module-frame--dashboard { height: 640px; }

/* ══════════════════════════════════════════
   3D BALL SECTION
══════════════════════════════════════════ */
.ball-section {
  position: relative;
  height: 140vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--dark);
}

.ball-canvas-wrap {
  position: absolute;
  inset: 0;
  z-index: 1;
}
#ballCanvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
}

.ball-text {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  pointer-events: none;
}
.ball-text h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 16px;
}
.ball-text h2 span { color: var(--mint); }
.ball-text p {
  font-size: 1rem; font-weight: 400;
  color: rgba(255,255,255,0.55);
  max-width: 400px; margin: 0 auto;
  line-height: 1.8;
}

/* ══════════════════════════════════════════
   PROBLEMS
══════════════════════════════════════════ */
.problems {
  background: var(--dark);
  padding: 110px 6vw;
}
.section-label {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px;
}
.section-label-bar {
  width: 30px; height: 3px;
  background: var(--mint); border-radius: 99px;
}
.section-label-text {
  font-size: 0.68rem; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--mint);
}
.section-title {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
}
.section-sub {
  font-size: 0.95rem; font-weight: 400;
  color: var(--muted); line-height: 1.85;
  max-width: 480px; margin-top: 16px;
}

.problems .section-title { color: #fff; }
.problems .section-sub   { color: rgba(255,255,255,0.45); }

.problems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 64px;
}
.problem-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 24px;
  padding: 40px 32px;
  transition: all 0.35s;
  opacity: 0; transform: translateY(32px);
}
.problem-card.visible {
  opacity: 1; transform: translateY(0);
}
.problem-card:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(127,227,179,0.3);
  transform: translateY(-5px);
}
.problem-num {
  font-size: 4rem; font-weight: 900;
  color: rgba(255,255,255,0.05);
  line-height: 1; margin-bottom: 16px;
  letter-spacing: -0.04em;
}
.problem-emoji { font-size: 1.8rem; margin-bottom: 14px; }
.problem-card h3 {
  font-size: 1.05rem; font-weight: 700;
  color: #fff; margin-bottom: 10px;
}
.problem-card p {
  font-size: 0.875rem; font-weight: 400;
  color: rgba(255,255,255,0.45);
  line-height: 1.8;
}

/* ══════════════════════════════════════════
   FEATURES
══════════════════════════════════════════ */
.features {
  background: var(--cream);
  padding: 110px 6vw;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 64px;
}
.feature-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 36px 32px;
  transition: all 0.35s;
  opacity: 0; transform: translateY(28px);
  cursor: default;
}
.feature-card.visible {
  opacity: 1; transform: translateY(0);
}
.feature-card:hover {
  box-shadow: 0 8px 40px rgba(15,46,34,0.08);
  border-color: rgba(15,46,34,0.18);
  transform: translateY(-6px);
}
.feature-card:hover .feat-icon {
  transform: scale(1.1) rotate(-6deg);
}
.feat-icon {
  width: 52px; height: 52px;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  background: rgba(127,227,179,0.15);
  border: 1px solid rgba(127,227,179,0.25);
  margin-bottom: 22px;
  transition: transform 0.3s;
  flex-shrink: 0;
}
.feature-card h3 {
  font-size: 1rem; font-weight: 700; margin-bottom: 10px;
}
.feature-card p {
  font-size: 0.855rem; font-weight: 400;
  color: var(--muted); line-height: 1.82;
}
.feat-badge {
  display: inline-block;
  background: rgba(127,227,179,0.15);
  color: #0a6640;
  font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 4px 11px; border-radius: 99px;
  margin-top: 16px;
}

/* stats row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  margin-top: 80px;
}
.stat-block {
  padding: 44px 24px;
  text-align: center;
  border-right: 1px solid var(--border);
  opacity: 0; transform: translateY(20px);
  transition: all 0.5s;
}
.stat-block:last-child { border-right: none; }
.stat-block.visible    { opacity: 1; transform: translateY(0); }
.stat-num {
  font-size: 2.8rem; font-weight: 900;
  letter-spacing: -0.04em; color: var(--dark);
  line-height: 1;
}
.stat-lbl {
  font-size: 0.82rem; font-weight: 500;
  color: var(--muted); margin-top: 8px;
  line-height: 1.4;
}

/* ══════════════════════════════════════════
   PRICING CAROUSEL
══════════════════════════════════════════ */
.pricing-section { background: var(--cream); }
.pricing-scroll-track {
  height: 300vh;
  position: relative;
}
.pricing-sticky {
  position: sticky;
  top: 0; height: 100vh;
  display: flex; flex-direction: row;
  align-items: stretch;
  overflow: hidden;
}

.pricing-left {
  flex: 0 0 45%; max-width: 45%;
  display: flex; flex-direction: column;
  justify-content: center;
  padding: 60px 5vw 60px 7vw;
  position: relative;
}
.pricing-left::before {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(15,46,34,0.06) 1.5px, transparent 1.5px);
  background-size: 26px 26px;
  mask-image: radial-gradient(ellipse 75% 80% at 25% 50%, black 30%, transparent 100%);
  pointer-events: none;
}
.pricing-left .section-label { margin-bottom: 20px; }
.pricing-left .section-label-text { color: var(--muted); }
.pricing-title {
  font-size: clamp(2.2rem, 2.8vw, 3.4rem);
  font-weight: 800; line-height: 1.1;
  letter-spacing: -0.03em; margin-bottom: 20px;
}
.pricing-title .hl {
  position: relative; display: inline; z-index: 0;
}
.pricing-title .hl::after {
  content: '';
  position: absolute; left: -2px; right: -2px; bottom: 4px;
  height: 11px; background: var(--yellow);
  z-index: -1; border-radius: 4px;
}
.pricing-sub {
  font-size: 0.92rem; font-weight: 400;
  color: var(--muted); line-height: 1.88;
  max-width: 300px; margin-bottom: 48px;
}

.price-nav { display: flex; flex-direction: column; gap: 18px; list-style: none; }
.pn-item {
  display: flex; align-items: center; gap: 14px;
  cursor: pointer; padding: 4px 0;
}
.pn-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: transparent;
  border: 2px solid rgba(15,46,34,0.18);
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
}
.pn-item.is-active .pn-dot {
  background: var(--dark); border-color: var(--dark);
  transform: scale(1.45);
}
.pn-name {
  font-size: 0.82rem; font-weight: 600;
  color: rgba(15,46,34,0.28); min-width: 76px;
  transition: color 0.3s;
}
.pn-item.is-active .pn-name { color: var(--dark); }
.pn-track {
  flex: 1; max-width: 80px; height: 2px;
  background: rgba(15,46,34,0.07);
  border-radius: 99px; overflow: hidden;
}
.pn-fill {
  width: 0%; height: 100%;
  background: var(--dark); border-radius: 99px;
  transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
}
.pn-item.is-active .pn-fill { width: 100%; }

.scroll-hint-label {
  display: flex; align-items: center; gap: 10px;
  margin-top: 46px;
  font-size: 0.7rem; font-weight: 500;
  color: rgba(15,46,34,0.3); letter-spacing: 0.05em;
}
.scroll-hint-icon {
  width: 30px; height: 30px; border-radius: 50%;
  border: 1.5px solid rgba(15,46,34,0.14);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  animation: bob 2.2s ease-in-out infinite;
}
@keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }

.pricing-right {
  flex: 1;
  display: flex; align-items: center; justify-content: center;
  padding: 50px 5vw 50px 2vw;
  position: relative; overflow: hidden;
}
.pricing-right::after {
  content: attr(data-n);
  position: absolute; right: -0.03em; bottom: -0.05em;
  font-size: 26vw; font-weight: 900;
  color: rgba(15,46,34,0.028);
  line-height: 1; letter-spacing: -0.05em;
  pointer-events: none; user-select: none;
}
.cards-wrap {
  position: relative;
  width: 100%; max-width: 440px;
  height: min(700px, 88vh);
}

/* cards */
.plan-card {
  position: absolute; inset: 0;
  background: var(--white);
  border-radius: 26px;
  border: 1.5px solid rgba(15,46,34,0.07);
  padding: 52px 48px 44px;
  display: flex; flex-direction: column;
  box-shadow: 0 2px 0 rgba(255,255,255,0.95) inset,
              0 4px 20px rgba(15,46,34,0.05),
              0 24px 60px rgba(15,46,34,0.08);
  opacity: 0; transform: translateY(64px) scale(0.97);
  pointer-events: none;
  transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1),
              transform 0.65s cubic-bezier(0.16,1,0.3,1);
  will-change: transform, opacity;
}
.plan-card.is-active {
  opacity: 1; transform: translateY(0) scale(1);
  pointer-events: auto; z-index: 3;
}
.plan-card.is-past {
  opacity: 0; transform: translateY(-52px) scale(0.97);
}
.card-ghost {
  position: absolute; inset: 0;
  background: var(--white); border-radius: 26px;
  border: 1.5px solid rgba(15,46,34,0.05);
  pointer-events: none; opacity: 0;
  transition: opacity 0.65s;
}
.card-ghost-1 { z-index:2; transform:translate(11px,13px) scale(0.965); }
.card-ghost-2 { z-index:1; transform:translate(22px,26px) scale(0.932); }
.plan-card.is-active ~ .card-ghost-1 { opacity: 0.52; }
.plan-card.is-active ~ .card-ghost-2 { opacity: 0.2; }

.hc-bar { height: 5px; border-radius: 99px; margin-bottom: 36px; flex-shrink: 0; }
.hc-bar--mint   { background: linear-gradient(90deg,#7FE3B3,#b4f2d6); }
.hc-bar--yellow { background: linear-gradient(90deg,#FFEC6D,#fff59b); }
.hc-bar--dark   { background: linear-gradient(90deg,#0F2E22,#1e5c3a); }

.hc-badge {
  align-self: flex-start; display: inline-flex; align-items: center; gap: 7px;
  font-size: 0.62rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  padding: 6px 14px; border-radius: 99px; margin-bottom: 18px; flex-shrink: 0;
}
.hc-badge--mint   { background: rgba(127,227,179,0.18); color: #0a6640; }
.hc-badge--yellow { background: rgba(255,236,109,0.28); color: #7a5f00; }
.hc-badge--dark   { background: var(--dark); color: var(--mint); }

.hc-name { font-size: 1.7rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 10px; flex-shrink:0; }
.hc-desc { font-size: 0.855rem; color: var(--muted); line-height: 1.85; margin-bottom: 26px; flex-shrink:0; }
.hc-price { display: flex; align-items: baseline; gap: 3px; margin-bottom: 6px; flex-shrink:0; }
.hc-currency { font-size: 1.3rem; font-weight: 600; opacity: 0.5; margin-top: 9px; align-self: flex-start; }
.hc-amount   { font-size: 3.8rem; font-weight: 800; letter-spacing: -0.05em; line-height: 1; }
.hc-period   { font-size: 0.75rem; color: var(--muted); margin-bottom: 26px; flex-shrink:0; }
.hc-sep      { height: 1px; background: rgba(15,46,34,0.07); margin-bottom: 22px; flex-shrink:0; }
.hc-features { list-style: none; display: flex; flex-direction: column; gap: 13px; flex: 1; overflow: hidden; }
.hc-features li { display: flex; align-items: flex-start; gap: 12px; font-size: 0.845rem; line-height: 1.5; }
.hc-check { width: 21px; height: 21px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
.hc-check--mint   { background: rgba(127,227,179,0.22); }
.hc-check--yellow { background: rgba(255,236,109,0.32); }
.hc-check--dark   { background: rgba(15,46,34,0.09); }
.hc-check svg { width: 11px; height: 11px; display: block; }
.hc-cta {
  display: flex; align-items: center; justify-content: center; gap: 9px;
  margin-top: 26px; padding: 18px 24px; border-radius: 99px;
  font-family: 'Poppins',sans-serif; font-size: 0.85rem; font-weight: 600;
  text-decoration: none; border: none; cursor: pointer; flex-shrink: 0;
  transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
}
.hc-cta--mint   { background: var(--dark); color: var(--mint); }
.hc-cta--mint:hover   { background: #1e5c3a; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(15,46,34,0.22); }
.hc-cta--yellow { background: var(--yellow); color: var(--dark); }
.hc-cta--yellow:hover { background: #ffe94a; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(255,236,109,0.42); }
.hc-cta--dark   { background: var(--dark); color: #fff; }
.hc-cta--dark:hover   { background: #1e5c3a; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(15,46,34,0.28); }

/* ══════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════ */
.testimonials { background: var(--white); padding: 110px 6vw; }
.testi-grid {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 24px; margin-top: 64px;
}
.testi-card {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 24px; padding: 36px 32px;
  transition: all 0.3s;
  opacity: 0; transform: translateY(22px);
}
.testi-card.visible { opacity: 1; transform: translateY(0); }
.testi-card:hover { box-shadow: 0 8px 36px rgba(15,46,34,0.07); transform: translateY(-4px); }
.testi-stars { color: #F59E0B; letter-spacing: 2px; font-size: 0.85rem; margin-bottom: 16px; }
.testi-text  { font-size: 0.875rem; color: var(--muted); line-height: 1.8; font-style: italic; margin-bottom: 26px; }
.testi-author { display: flex; align-items: center; gap: 12px; }
.testi-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.88rem; flex-shrink: 0;
}
.testi-name  { font-size: 0.85rem; font-weight: 600; }
.testi-role  { font-size: 0.75rem; color: var(--muted); }
.testi-co {
  margin-left: auto;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 8px; padding: 4px 10px;
  font-size: 0.68rem; font-weight: 700; color: var(--muted);
}

/* ══════════════════════════════════════════
   CTA SECTION
══════════════════════════════════════════ */
.cta-section {
  background: var(--dark);
  padding: 120px 6vw;
  text-align: center;
  position: relative; overflow: hidden;
}
.cta-orb {
  position: absolute; border-radius: 50%; filter: blur(100px);
  pointer-events: none;
}
.cta-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(127,227,179,0.15) 0%, transparent 70%);
  top: -150px; left: -100px;
  animation: orb-float 12s ease-in-out infinite;
}
.cta-orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,236,109,0.1) 0%, transparent 70%);
  bottom: -100px; right: -80px;
  animation: orb-float 9s ease-in-out infinite reverse;
}
.cta-section h2 {
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 900; line-height: 1.08;
  letter-spacing: -0.03em; color: #fff;
  max-width: 620px; margin: 0 auto 20px;
  position: relative; z-index: 1;
}
.cta-section h2 span { color: var(--mint); }
.cta-section p {
  font-size: 1rem; color: rgba(255,255,255,0.5);
  max-width: 440px; margin: 0 auto 44px;
  line-height: 1.85; position: relative; z-index: 1;
}
.cta-glow-btn {
  position: relative; z-index: 1;
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--mint); color: var(--dark);
  border: none; border-radius: 99px;
  padding: 20px 44px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem; font-weight: 700;
  cursor: pointer; text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 0 40px rgba(127,227,179,0.35);
}
.cta-glow-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 0 70px rgba(127,227,179,0.55);
  background: #9ef5cc;
}
.cta-note {
  font-size: 0.75rem; color: rgba(255,255,255,0.28);
  margin-top: 20px; position: relative; z-index: 1;
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
footer {
  background: #0a2019;
  padding: 72px 6vw 40px;
}
.footer-top {
  display: flex; justify-content: space-between;
  gap: 48px; flex-wrap: wrap; margin-bottom: 56px;
}
.footer-brand p {
  font-size: 0.85rem; color: rgba(255,255,255,0.38);
  max-width: 230px; line-height: 1.75; margin-top: 12px;
}
.footer-col h6 {
  font-size: 0.68rem; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(255,255,255,0.38); margin-bottom: 18px;
}
.footer-col a {
  display: block; font-size: 0.85rem;
  color: rgba(255,255,255,0.42); margin-bottom: 11px;
  transition: color 0.2s;
}
.footer-col a:hover { color: #fff; }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 28px;
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: 12px;
}
.footer-bottom p { font-size: 0.78rem; color: rgba(255,255,255,0.25); }

/* ══════════════════════════════════════════
   SCROLL ANIMATIONS
══════════════════════════════════════════ */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ══════════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════════ */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .problems-grid, .features-grid, .testi-grid { grid-template-columns: 1fr; }
  .connectors-grid { grid-template-columns: 1fr; }
  .agenda-split, .dashboard-grid { grid-template-columns: 1fr; }
  .agenda-copy { padding: 24px; }
  .agenda-panel .module-frame { height: 460px; }
  .module-frame--dashboard { height: 520px; }
  .stats-row { grid-template-columns: 1fr 1fr; }
  .mockup-grid { grid-template-columns: 1fr 1fr; }
  .mockup-card:nth-child(3) { display: none; }
  .hero-tag { display: none; }
  .pricing-sticky { flex-direction: column; height: auto; min-height: 100vh; }
  .pricing-left { flex: none; max-width: 100%; padding: 60px 6vw 40px; }
  .pricing-right { padding: 20px 6vw 60px; }
  .cards-wrap { max-width: 100%; height: 680px; }
}
@media (max-width: 600px) {
  .stats-row { grid-template-columns: 1fr; }
  .plan-card { padding: 36px 28px 30px; }
  .hc-amount { font-size: 3rem; }
}
</style>
</head>
<body>

<!-- ══════ NAV ══════ -->
<nav id="navbar">
  <div class="nav-logo">
    <div class="nav-logo-dot"></div>
    Hub2gether
  </div>
  <ul class="nav-links">
    <li><a href="#features">Produit</a></li>
    <li><a href="#agenda-module">Agenda</a></li>
    <li><a href="#dashboard-module">Dashboard</a></li>
    <li><a href="#pricing">Tarifs</a></li>
    <li><a href="#testi">Témoignages</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="nav-cta" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
    Demander une démo
  </button>
</nav>

<!-- ══════ HERO ══════ -->
<section class="hero">
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>

  <div class="hero-badge">
    <div class="hero-badge-dot"></div>
    Nouveau — Plateforme sport B2B
  </div>

  <h1>Le sport qui <span class="hl">connecte</span><br>votre entreprise</h1>

  <p class="hero-sub">Hub2gether permet aux collaborateurs de se retrouver autour du sport, d'organiser des matchs et de créer une vraie communauté sportive au sein de leur entreprise.</p>

  <div class="hero-btns">
    <button class="btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
      Demander une démo
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <button class="btn-secondary" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">
      Découvrir la plateforme
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 9l5 4 5-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  </div>

  <!-- floating tags -->
  <div class="hero-tag">⚽ Match organisé · 14h30</div>
  <div class="hero-tag">🏓 +12 joueurs actifs</div>
  <div class="hero-tag">🏆 Classement mis à jour</div>

  <!-- mockup -->
  <div class="hero-mockup">
    <div class="mockup-bar">
      <div class="mockup-circle"></div>
      <div class="mockup-circle"></div>
      <div class="mockup-circle"></div>
    </div>
    <div class="mockup-grid">
      <div class="mockup-card">
        <div class="mc-icon mint">⚽</div>
        <div class="mc-title">Matchs à venir</div>
        <div class="mc-sub">Foot 5v5 · Mardi 18h</div>
        <div class="mc-num">3</div>
      </div>
      <div class="mockup-card">
        <div class="mc-icon yellow">👥</div>
        <div class="mc-title">Groupes actifs</div>
        <div class="mc-sub">Tennis · Padel · Running</div>
        <div class="mc-num">8</div>
      </div>
      <div class="mockup-card">
        <div class="mc-icon dark">🏆</div>
        <div class="mc-title">Votre rang</div>
        <div class="mc-sub">Classement foot</div>
        <div class="mc-num">#4</div>
      </div>
    </div>
  </div>
</section>

<!-- ══════ LOGO BAND ══════ -->
<div class="logo-band">
  <p>Déjà adopté par des équipes ambitieuses</p>
  <div class="logo-band-row">
    <div class="logo-item">ACCENTURE</div>
    <div class="logo-item">DECATHLON</div>
    <div class="logo-item">VEOLIA</div>
    <div class="logo-item">SANOFI</div>
    <div class="logo-item">CAPGEMINI</div>
    <div class="logo-item">ENGIE</div>
  </div>
</div>

<!-- ══════ CONNECTORS ══════ -->
<section class="connectors" id="connectors">
  <div class="section-label">
    <div class="section-label-bar"></div>
    <span class="section-label-text" style="color:var(--muted)">Connecteurs</span>
  </div>
  <h2 class="section-title">Un index central pour lancer<br>vos autres connecteurs</h2>
  <p class="section-sub">Depuis cette page, vous pouvez accéder rapidement à vos modules Hub2gether et les brancher à vos usages internes.</p>

  <div class="connectors-grid">
    <article class="connector-card">
      <h3 class="connector-name">Connecteur Agenda Sportif</h3>
      <p class="connector-desc">Planifiez vos créneaux, filtrez par sport et visualisez les disponibilités d'équipe dans une interface dédiée.</p>
      <a class="connector-link" href="#agenda-module">Voir l'agenda sur cette page ↓</a>
    </article>

    <article class="connector-card">
      <h3 class="connector-name">Connecteur Hero Zoom</h3>
      <p class="connector-desc">Utilisez le mode Hero Zoom pour vos démonstrations visuelles, animations d'entrée et mises en avant produit.</p>
      <a class="connector-link" href="#dashboard-module">Voir le dashboard sur cette page ↓</a>
    </article>

    <article class="connector-card">
      <h3 class="connector-name">Point d'entrée principal</h3>
      <p class="connector-desc">Conservez cet index comme hub : il référence les modules disponibles et facilite la navigation inter-connecteurs.</p>
      <a class="connector-link" href="#agenda-module">Scroller vers les modules intégrés ↓</a>
    </article>
  </div>
</section>



<!-- ══════ MODULE AGENDA INTÉGRÉ ══════ -->
<section class="module-showcase" id="agenda-module">
  <div class="module-head">
    <div class="section-label">
      <div class="section-label-bar"></div>
      <span class="section-label-text" style="color:var(--muted)">Agenda intégré</span>
    </div>
    <h2 class="section-title">Un agenda fondu dans la page, compact et lisible</h2>
    <p class="section-sub">La section agenda est désormais pensée comme un bloc éditorial : explication à gauche, aperçu produit à droite. Vous gardez le contexte de lecture et l'accès rapide à la planification.</p>
  </div>

  <div class="agenda-split">
    <article class="agenda-copy">
      <h3>Comment ça fonctionne</h3>
      <p>L'agenda agrège les matchs, les créneaux disponibles et les inscriptions des équipes. Les collaborateurs peuvent identifier rapidement les plages libres et rejoindre une session en quelques clics.</p>
      <ul class="agenda-points">
        <li><strong>1. Filtrer par sport</strong>Tennis, padel, running ou foot selon les équipes actives.</li>
        <li><strong>2. Visualiser les créneaux</strong>Les disponibilités sont visibles en un coup d'œil sur la semaine.</li>
        <li><strong>3. Confirmer sa présence</strong>Un RSVP rapide pour augmenter le taux de participation.</li>
      </ul>
    </article>

    <div class="module-shell agenda-panel">
      <div class="module-topbar">
        <div>
          <div class="module-title">Hub2gether · Agenda Sportif</div>
          <div class="module-note">Aperçu embarqué compact</div>
        </div>
        
      </div>
      <iframe class="module-frame module-frame--agenda" src="./hub2gether-agenda.html?embed=1" title="Agenda Hub2gether"></iframe>
    </div>
  </div>
</section>

<!-- ══════ MODULE DASHBOARD INTÉGRÉ ══════ -->
<section class="module-showcase" id="dashboard-module">
  <div class="module-head">
    <div class="section-label">
      <div class="section-label-bar"></div>
      <span class="section-label-text" style="color:var(--muted)">Dashboard intégré</span>
    </div>
    <h2 class="section-title">Le dashboard RH s'intègre comme une section produit</h2>
    <p class="section-sub">Cette section mélange storytelling + KPI opérationnels avant d'afficher le dashboard complet, pour un enchaînement naturel avec le reste de la landing.</p>
  </div>

  <div class="dashboard-grid">
    <article class="dashboard-card">
      <h3>Pilotage RH en continu</h3>
      <p>Suivez l'engagement sportif, la rétention des groupes et la fréquence des événements depuis une vue unique exploitable en comité RH.</p>
      <div class="kpi-row">
        <div class="kpi"><strong>+37%</strong><span>Participation</span></div>
        <div class="kpi"><strong>82%</strong><span>Profils actifs</span></div>
        <div class="kpi"><strong>5,4</strong><span>Evts / sem.</span></div>
      </div>
    </article>
    <article class="dashboard-card">
      <h3>Actions recommandées</h3>
      <p>Le module met en avant les équipes peu actives, les sports en croissance et les créneaux à fort potentiel pour booster l'adoption.</p>
      
    </article>
  </div>

  <div class="module-shell">
    <div class="module-topbar">
      <div>
        <div class="module-title">Hub2gether · Dashboard</div>
        <div class="module-note">Vue embarquée dans la landing</div>
      </div>
      
    </div>
    <iframe class="module-frame module-frame--dashboard" src="./hub2gether-hero-zoom.html?embed=1" title="Dashboard Hub2gether"></iframe>
  </div>
</section>

<!-- ══════ 3D BALL SECTION ══════ -->
<!--
  ⚽ BALLE 3D — Pour activer :
  1. Upload ton fichier ball.glb dans ce même dossier GitHub
  2. Remplace BALL_URL ci-dessous par : './ball.glb'
     ou par l'URL raw GitHub : 'https://raw.githubusercontent.com/TON_USER/HUB2gether/main/ball.glb'
-->
<section class="ball-section" id="ballSection">
  <div class="ball-canvas-wrap">
    <canvas id="ballCanvas"></canvas>
  </div>
  <div class="ball-text">
    <h2>Bouge.<br><span>Joue ensemble.</span></h2>
    <p>Le sport comme lien naturel entre collègues, à portée de clic.</p>
  </div>
</section>

<!-- ══════ PROBLEMS ══════ -->
<section class="problems" id="problems">
  <div class="section-label">
    <div class="section-label-bar"></div>
    <span class="section-label-text">Le problème</span>
  </div>
  <h2 class="section-title" style="color:#fff">Le sport en entreprise reste<br>difficile à organiser</h2>
  <p class="section-sub">Sans outil dédié, les initiatives sportives se perdent dans les chats d'équipe et le bouche-à-oreille.</p>

  <div class="problems-grid">
    <div class="problem-card">
      <div class="problem-num">01</div>
      <div class="problem-emoji">🔍</div>
      <h3>Trouver des partenaires, un défi quotidien</h3>
      <p>Difficile de savoir qui pratique quel sport ou qui cherche un partenaire pour jouer après le travail.</p>
    </div>
    <div class="problem-card">
      <div class="problem-num">02</div>
      <div class="problem-emoji">👁️</div>
      <h3>Aucune visibilité sur les activités</h3>
      <p>Les initiatives restent fragmentées, invisibles. Pas de lieu central pour voir ce qui se passe sportivement.</p>
    </div>
    <div class="problem-card">
      <div class="problem-num">03</div>
      <div class="problem-emoji">📉</div>
      <h3>Un engagement qui s'effondre</h3>
      <p>Sans gamification ni suivi, la motivation s'estompe. Les groupes se créent puis disparaissent faute de structure.</p>
    </div>
  </div>
</section>

<!-- ══════ FEATURES ══════ -->
<section class="features" id="features">
  <div class="section-label">
    <div class="section-label-bar"></div>
    <span class="section-label-text" style="color:var(--muted)">La solution</span>
  </div>
  <h2 class="section-title">Une plateforme pour structurer<br>le sport en entreprise</h2>
  <p class="section-sub">Hub2gether centralise toute la vie sportive de votre entreprise en un seul endroit, simple et engageant.</p>

  <div class="features-grid">
    <div class="feature-card">
      <div class="feat-icon">⚡</div>
      <h3>Matchmaking sportif</h3>
      <p>L'algorithme connecte automatiquement les collaborateurs selon leur sport, niveau et disponibilités.</p>
      <span class="feat-badge">IA intégrée</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">👥</div>
      <h3>Groupes sportifs</h3>
      <p>Créez ou rejoignez des groupes dédiés par sport. Chaque groupe a son propre espace d'organisation.</p>
      <span class="feat-badge">Communauté</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">📅</div>
      <h3>Organisation de matchs</h3>
      <p>Planifiez, gérez les inscriptions et confirmez la participation en quelques secondes.</p>
      <span class="feat-badge">Automatisé</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">📊</div>
      <h3>Statistiques & classements</h3>
      <p>Suivez vos performances, matchs joués et progression dans les classements internes.</p>
      <span class="feat-badge">Suivi personnel</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">🎮</div>
      <h3>Gamification</h3>
      <p>Badges, défis hebdomadaires et récompenses pour maintenir l'engagement sur la durée.</p>
      <span class="feat-badge">Engagement +</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">🏢</div>
      <h3>Dashboard entreprise</h3>
      <p>Vue RH complète pour piloter la pratique sportive, l'engagement et le bien-être des équipes.</p>
      <span class="feat-badge">B2B</span>
    </div>
  </div>

  <div class="stats-row">
    <div class="stat-block">
      <div class="stat-num" data-target="87" data-suffix="%">0%</div>
      <div class="stat-lbl">d'engagement en plus</div>
    </div>
    <div class="stat-block">
      <div class="stat-num" data-target="3" data-suffix="×">0×</div>
      <div class="stat-lbl">plus de matchs organisés</div>
    </div>
    <div class="stat-block">
      <div class="stat-num" data-target="92" data-suffix="%">0%</div>
      <div class="stat-lbl">de satisfaction RH</div>
    </div>
    <div class="stat-block">
      <div class="stat-num" data-target="500" data-suffix="+">0+</div>
      <div class="stat-lbl">entreprises pilotes</div>
    </div>
  </div>
</section>

<!-- ══════ PRICING CAROUSEL ══════ -->
<section class="pricing-section" id="pricing">
  <div class="pricing-scroll-track" id="pricingTrack">
    <div class="pricing-sticky">

      <div class="pricing-left">
        <div class="section-label">
          <div class="section-label-bar"></div>
          <span class="section-label-text" style="color:var(--muted)">Nos formules</span>
        </div>
        <h2 class="pricing-title">Choisissez<br>votre <span class="hl">formule</span></h2>
        <p class="pricing-sub">Des offres pensées pour chaque taille d'entreprise. Aucun frais caché.</p>

        <ul class="price-nav" id="priceNav">
          <li class="pn-item is-active" data-s="0">
            <div class="pn-dot"></div>
            <span class="pn-name">Starter</span>
            <div class="pn-track"><div class="pn-fill"></div></div>
          </li>
          <li class="pn-item" data-s="1">
            <div class="pn-dot"></div>
            <span class="pn-name">Business</span>
            <div class="pn-track"><div class="pn-fill"></div></div>
          </li>
          <li class="pn-item" data-s="2">
            <div class="pn-dot"></div>
            <span class="pn-name">Enterprise</span>
            <div class="pn-track"><div class="pn-fill"></div></div>
          </li>
        </ul>

        <div class="scroll-hint-label">
          <div class="scroll-hint-icon">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 2v9M2.5 8l4 4 4-4" stroke="#0F2E22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          Scrollez pour explorer
        </div>
      </div>

      <div class="pricing-right" id="pricingRight" data-n="1">
        <div class="cards-wrap">

          <!-- Starter -->
          <div class="plan-card is-active" data-card="0">
            <div class="hc-bar hc-bar--mint"></div>
            <span class="hc-badge hc-badge--mint">
              <svg width="7" height="7" viewBox="0 0 7 7"><circle cx="3.5" cy="3.5" r="3.5" fill="currentColor"/></svg>
              Idéal pour démarrer
            </span>
            <div class="hc-name">Starter</div>
            <div class="hc-desc">Pour les petites équipes qui veulent lancer leur communauté sportive simplement.</div>
            <div class="hc-price"><span class="hc-currency">€</span><span class="hc-amount">3</span></div>
            <div class="hc-period">par collaborateur / mois · jusqu'à 100 personnes</div>
            <div class="hc-sep"></div>
            <ul class="hc-features">
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Matchmaking sportif automatique</li>
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Jusqu'à 5 groupes sportifs</li>
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Organisation de matchs &amp; événements</li>
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Statistiques individuelles</li>
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Support email 5j/7</li>
            </ul>
            <a href="#contact" class="hc-cta hc-cta--mint">Commencer gratuitement <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>

          <!-- Business -->
          <div class="plan-card" data-card="1">
            <div class="hc-bar hc-bar--yellow"></div>
            <span class="hc-badge hc-badge--yellow">
              <svg width="9" height="9" viewBox="0 0 9 9"><path d="M4.5 0l1.3 2.7 3 .4-2.2 2.1.5 3L4.5 6.8 1.9 8.2l.5-3L.2 3.1l3-.4L4.5 0z" fill="currentColor"/></svg>
              Le plus populaire
            </span>
            <div class="hc-name">Business</div>
            <div class="hc-desc">Pour les équipes en croissance qui veulent une dynamique sportive et un suivi RH complet.</div>
            <div class="hc-price"><span class="hc-currency">€</span><span class="hc-amount">6</span></div>
            <div class="hc-period">par collaborateur / mois · jusqu'à 500 personnes</div>
            <div class="hc-sep"></div>
            <ul class="hc-features">
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Tout Starter, plus…</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Groupes sportifs illimités</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Dashboard RH avancé avec export</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Défis &amp; tournois inter-équipes</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Intégration Slack &amp; Teams</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Support prioritaire 7j/7</li>
            </ul>
            <a href="#contact" class="hc-cta hc-cta--yellow">Demander une démo <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>

          <!-- Enterprise -->
          <div class="plan-card" data-card="2">
            <div class="hc-bar hc-bar--dark"></div>
            <span class="hc-badge hc-badge--dark">
              <svg width="8" height="8" viewBox="0 0 8 8"><rect width="8" height="8" rx="2" fill="currentColor"/></svg>
              Sur mesure
            </span>
            <div class="hc-name">Enterprise</div>
            <div class="hc-desc">Pour les grandes organisations avec des besoins d'intégration, sécurité et déploiement à l'échelle.</div>
            <div class="hc-price"><span class="hc-amount" style="font-size:2.5rem;letter-spacing:-0.03em">Sur devis</span></div>
            <div class="hc-period">Tarif personnalisé · collaborateurs illimités</div>
            <div class="hc-sep"></div>
            <ul class="hc-features">
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Tout Business, plus…</li>
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>SSO &amp; intégration SIRH</li>
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Hébergement dédié &amp; SLA garanti</li>
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>White-label &amp; branding personnalisé</li>
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>CSM dédié &amp; onboarding sur site</li>
            </ul>
            <a href="#contact" class="hc-cta hc-cta--dark">Contacter l'équipe commerciale <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>

          <div class="card-ghost card-ghost-1"></div>
          <div class="card-ghost card-ghost-2"></div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══════ TESTIMONIALS ══════ -->
<section class="testimonials" id="testi">
  <div class="section-label">
    <div class="section-label-bar"></div>
    <span class="section-label-text" style="color:var(--muted)">Témoignages</span>
  </div>
  <h2 class="section-title">Ils ont activé leur<br>communauté sportive</h2>

  <div class="testi-grid">
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"Hub2gether a radicalement changé nos déjeuners. On organise des matchs de padel en moins de 5 minutes. La cohésion entre les équipes est vraiment visible."</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background:linear-gradient(135deg,#0F2E22,#1e5c3a)">SL</div>
        <div>
          <div class="testi-name">Sophie Laurent</div>
          <div class="testi-role">DRH · 1 400 collaborateurs</div>
        </div>
        <div class="testi-co">TechCorp</div>
      </div>
    </div>
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"En 3 semaines, 60% de nos 800 salariés avaient créé leur profil. Les premiers matchs s'organisaient seuls. Le dashboard RH est une vraie mine d'or."</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background:linear-gradient(135deg,#0a6640,#7FE3B3)">AM</div>
        <div>
          <div class="testi-name">Antoine Moreau</div>
          <div class="testi-role">People Manager · Scale-up</div>
        </div>
        <div class="testi-co">Scaleway</div>
      </div>
    </div>
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"On a réduit l'absentéisme de 12% depuis le déploiement. L'outil s'est intégré naturellement. Nos collaborateurs adorent le classement et les défis."</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background:linear-gradient(135deg,#7a5f00,#FFEC6D);color:#0F2E22">CB</div>
        <div>
          <div class="testi-name">Claire Bernard</div>
          <div class="testi-role">Chief People Officer</div>
        </div>
        <div class="testi-co">InnoGroup</div>
      </div>
    </div>
  </div>
</section>

<!-- ══════ CTA ══════ -->
<section class="cta-section" id="contact">
  <div class="cta-orb cta-orb-1"></div>
  <div class="cta-orb cta-orb-2"></div>

  <h2>Activez la communauté sportive<br>de votre <span>entreprise</span></h2>
  <p>Demandez une démo personnalisée. Nos équipes vous montrent Hub2gether en live en 30 minutes.</p>
  <a href="mailto:demo@hub2gether.com" class="cta-glow-btn">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M17 3.5H3A1.5 1.5 0 0 0 1.5 5v10A1.5 1.5 0 0 0 3 16.5h14a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 17 3.5z" stroke="currentColor" stroke-width="1.5"/><path d="m1.5 5.5 8.5 6 8.5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    Demander une démo gratuite
  </a>
  <p class="cta-note">Réponse sous 24h · Aucun engagement · Setup en 48h</p>
</section>

<!-- ══════ FOOTER ══════ -->
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="nav-logo" style="color:#fff">
        <div class="nav-logo-dot"></div>
        Hub2gether
      </div>
      <p>Le hub sportif interne qui connecte vos collaborateurs et transforme votre culture d'entreprise.</p>
    </div>
    <div class="footer-col">
      <h6>Produit</h6>
      <a href="#">Fonctionnalités</a>
      <a href="#">Dashboard RH</a>
      <a href="#">Tarifs</a>
      <a href="#">Intégrations</a>
    </div>
    <div class="footer-col">
      <h6>Entreprise</h6>
      <a href="#">À propos</a>
      <a href="#">Blog</a>
      <a href="#">Carrières</a>
      <a href="#">Presse</a>
    </div>
    <div class="footer-col">
      <h6>Légal</h6>
      <a href="#">Confidentialité</a>
      <a href="#">CGU</a>
      <a href="#">Mentions légales</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Hub2gether. Tous droits réservés.</p>
    <p>Made with 🏃 in France</p>
  </div>
</footer>

<!-- ══════════════════════════════════════════
     SCRIPTS
══════════════════════════════════════════ -->
<script>
// ─── NAV scroll ───
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ─── Scroll reveal ───
var revealEls = document.querySelectorAll('.problem-card, .feature-card, .testi-card, .stat-block');
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      var el = entry.target;
      var delay = parseInt(el.getAttribute('data-delay') || 0);
      setTimeout(function() { el.classList.add('visible'); }, delay);
      // counter animation for stat blocks
      if (el.classList.contains('stat-block')) {
        var numEl = el.querySelector('[data-target]');
        if (numEl) animateCounter(numEl);
      }
      revealObs.unobserve(el);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.problem-card').forEach(function(el, i) {
  el.setAttribute('data-delay', i * 100);
  revealObs.observe(el);
});
document.querySelectorAll('.feature-card').forEach(function(el, i) {
  el.setAttribute('data-delay', i * 80);
  revealObs.observe(el);
});
document.querySelectorAll('.testi-card').forEach(function(el, i) {
  el.setAttribute('data-delay', i * 100);
  revealObs.observe(el);
});
document.querySelectorAll('.stat-block').forEach(function(el, i) {
  el.setAttribute('data-delay', i * 80);
  revealObs.observe(el);
});

// ─── Counter animation ───
function animateCounter(el) {
  var target  = parseInt(el.getAttribute('data-target'));
  var suffix  = el.getAttribute('data-suffix') || '';
  var start   = null;
  var dur     = 1600;
  function step(ts) {
    if (!start) start = ts;
    var progress = Math.min((ts - start) / dur, 1);
    var eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

// ─── Pricing carousel ───
(function() {
  var track    = document.getElementById('pricingTrack');
  var cards    = document.querySelectorAll('.plan-card');
  var navItems = document.querySelectorAll('.pn-item');
  var right    = document.getElementById('pricingRight');
  var TOTAL    = cards.length;
  var current  = -1;

  function setSlide(idx) {
    if (idx === current) return;
    current = idx;
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('is-active', 'is-past');
      if (i === idx)      cards[i].classList.add('is-active');
      else if (i < idx)   cards[i].classList.add('is-past');
    }
    for (var j = 0; j < navItems.length; j++) {
      navItems[j].classList.toggle('is-active', j === idx);
    }
    right.setAttribute('data-n', idx + 1);
  }

  function onScroll() {
    if (!track) return;
    var rect     = track.getBoundingClientRect();
    var scrolled = Math.max(0, -rect.top);
    var total    = track.offsetHeight - window.innerHeight;
    if (total <= 0) { setSlide(0); return; }
    var ratio = Math.min(1, scrolled / total);
    var idx   = Math.min(TOTAL - 1, Math.floor(ratio * TOTAL));
    setSlide(idx);
  }

  for (var k = 0; k < navItems.length; k++) {
    (function(i) {
      navItems[i].addEventListener('click', function() {
        var total   = track.offsetHeight - window.innerHeight;
        var target  = track.offsetTop + (total / TOTAL) * i + 4;
        window.scrollTo({ top: target, behavior: 'smooth' });
      });
    })(k);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  setSlide(0);
})();

// ─── Mouse parallax orbs ───
document.addEventListener('mousemove', function(e) {
  var x = (e.clientX / window.innerWidth  - 0.5) * 28;
  var y = (e.clientY / window.innerHeight - 0.5) * 28;
  document.querySelectorAll('.hero-orb-1').forEach(function(o) {
    o.style.transform = 'translate(' + x * 0.5 + 'px,' + y * 0.5 + 'px)';
  });
});

// ─── 3D TENNIS BALL — 100% procédural, zéro fichier externe ───
(function () {
  var canvas  = document.getElementById('ballCanvas');
  var section = document.getElementById('ballSection');
  if (!canvas || !window.THREE) return;

  var W = section.offsetWidth;
  var H = section.offsetHeight;

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type    = THREE.PCFSoftShadowMap;

  var scene  = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
  camera.position.set(0, 0.3, 5.5);

  /* ── LUMIÈRES ── */
  scene.add(new THREE.AmbientLight(0xfff8e8, 0.7));

  var keyLight = new THREE.DirectionalLight(0xffffff, 1.65);
  keyLight.position.set(4, 6, 5);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width  = 1024;
  keyLight.shadow.mapSize.height = 1024;
  scene.add(keyLight);

  var rimLight = new THREE.DirectionalLight(0x7FE3B3, 1.05);
  rimLight.position.set(-5, 2, -3);
  scene.add(rimLight);

  var fillLight = new THREE.DirectionalLight(0xFFEC6D, 0.35);
  fillLight.position.set(2, -4, 3);
  scene.add(fillLight);

  /* ── TEXTURE PROCÉDURALE (canvas 2D → Three.js texture) ── */
  function makeBallTexture() {
    var size = 1024;
    var tc   = document.createElement('canvas');
    tc.width = tc.height = size;
    var ctx  = tc.getContext('2d');

    // Fond vert tennis (jaune-vert authentique)
    var baseGrad = ctx.createRadialGradient(size*0.38, size*0.35, 0, size*0.5, size*0.5, size*0.55);
    baseGrad.addColorStop(0,   '#d4e84a');
    baseGrad.addColorStop(0.5, '#c8dc38');
    baseGrad.addColorStop(1,   '#a8c020');
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, size, size);

    // Texture feutrée : bruit de petits points
    ctx.globalAlpha = 0.22;
    for (var i = 0; i < 18000; i++) {
      var fx = Math.random() * size;
      var fy = Math.random() * size;
      var fr = Math.random() * 1.8 + 0.4;
      ctx.beginPath();
      ctx.arc(fx, fy, fr, 0, Math.PI * 2);
      ctx.fillStyle = Math.random() > 0.5 ? '#ffffff' : '#7a9c00';
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Légère vignette sphérique
    var vig = ctx.createRadialGradient(size*0.5, size*0.5, size*0.25, size*0.5, size*0.5, size*0.72);
    vig.addColorStop(0,   'rgba(0,0,0,0)');
    vig.addColorStop(1,   'rgba(0,0,0,0.28)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, size, size);

    return new THREE.CanvasTexture(tc);
  }

  /* ── TEXTURE COUTURES (canvas séparé) ── */
  function makeSeamTexture() {
    var size = 1024;
    var tc   = document.createElement('canvas');
    tc.width = tc.height = size;
    var ctx  = tc.getContext('2d');

    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.clearRect(0, 0, size, size);

    // Coutures en coordonnées UV sphériques
    // Une balle de tennis a deux coutures en S symétriques
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth   = 10;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';

    function drawSeam(offsetX, offsetY, flip) {
      ctx.beginPath();
      var steps = 200;
      for (var i = 0; i <= steps; i++) {
        var t  = i / steps;
        var u  = t * size;
        // courbe en S caractéristique d'une balle de tennis
        var v  = size * 0.5 + Math.sin(t * Math.PI * 2) * size * 0.18 * (flip ? -1 : 1);
        v += offsetY;
        u += offsetX;
        if (i === 0) ctx.moveTo(u % size, v);
        else         ctx.lineTo(u % size, v);
      }
      ctx.stroke();
    }

    drawSeam(0, 0, false);
    drawSeam(0, size * 0.5, true);

    // ombre portée fine
    ctx.strokeStyle = 'rgba(80,120,0,0.55)';
    ctx.lineWidth   = 14;
    drawSeam(3, 4, false);
    drawSeam(3, size * 0.5 + 4, true);

    // trait blanc final par-dessus
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth   = 7;
    drawSeam(0, 0, false);
    drawSeam(0, size * 0.5, true);

    return new THREE.CanvasTexture(tc);
  }

  /* ── GROUPE BALLE ── */
  var ballGroup = new THREE.Group();
  scene.add(ballGroup);

  // Corps principal
  var ballGeo = new THREE.SphereGeometry(1.3, 128, 128);
  var ballMat = new THREE.MeshStandardMaterial({
    map:          makeBallTexture(),
    roughness:    0.82,
    metalness:    0.0,
    envMapIntensity: 0.3
  });
  var ballMesh = new THREE.Mesh(ballGeo, ballMat);
  ballMesh.castShadow    = true;
  ballMesh.receiveShadow = false;
  ballGroup.add(ballMesh);

  // Coutures par-dessus (mesh légèrement plus grand)
  var seamGeo = new THREE.SphereGeometry(1.305, 128, 128);
  var seamMat = new THREE.MeshStandardMaterial({
    map:         makeSeamTexture(),
    transparent: true,
    roughness:   0.6,
    metalness:   0.0,
    depthWrite:  false
  });
  var seamMesh = new THREE.Mesh(seamGeo, seamMat);
  ballGroup.add(seamMesh);

  // Reflet spéculaire (petite sphère intérieure semi-transparente)
  var specGeo = new THREE.SphereGeometry(1.31, 64, 64);
  var specMat = new THREE.MeshPhongMaterial({
    color:       0xffffff,
    transparent: true,
    opacity:     0.07,
    shininess:   180,
    specular:    0xffffff,
    side:        THREE.FrontSide,
    depthWrite:  false
  });
  ballGroup.add(new THREE.Mesh(specGeo, specMat));



  // Micro-fibres (poils) pour un rendu plus réaliste
  var furCount = 1800;
  var furPos = new Float32Array(furCount * 3);
  var furCol = new Float32Array(furCount * 3);
  var furGeo = new THREE.BufferGeometry();
  for (var fi = 0; fi < furCount; fi++) {
    var u = Math.random() * Math.PI * 2;
    var v = Math.acos(2 * Math.random() - 1);
    var r = 1.31 + Math.random() * 0.1;
    var x = Math.sin(v) * Math.cos(u) * r;
    var y = Math.cos(v) * r;
    var z = Math.sin(v) * Math.sin(u) * r;
    furPos[fi*3] = x;
    furPos[fi*3+1] = y;
    furPos[fi*3+2] = z;
    var tint = 0.72 + Math.random() * 0.28;
    furCol[fi*3] = 0.78 * tint;
    furCol[fi*3+1] = 0.9 * tint;
    furCol[fi*3+2] = 0.34 * tint;
  }
  furGeo.setAttribute('position', new THREE.BufferAttribute(furPos, 3));
  furGeo.setAttribute('color', new THREE.BufferAttribute(furCol, 3));
  var furMat = new THREE.PointsMaterial({ size: 0.026, transparent: true, opacity: 0.75, vertexColors: true, depthWrite: false });
  var furPoints = new THREE.Points(furGeo, furMat);
  ballGroup.add(furPoints);

  /* ── OMBRE AU SOL ── */
  var shadowGeo = new THREE.CircleGeometry(1.1, 64);
  var shadowMat = new THREE.MeshBasicMaterial({
    color:       0x000000,
    transparent: true,
    opacity:     0.18,
    depthWrite:  false
  });
  var shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = -2.1;
  scene.add(shadowMesh);

  /* ── PARTICULES flottantes (poussière de terrain) ── */
  var partCount  = 60;
  var partGeo    = new THREE.BufferGeometry();
  var partPos    = new Float32Array(partCount * 3);
  var partPhase  = new Float32Array(partCount);
  for (var p = 0; p < partCount; p++) {
    partPos[p*3]   = (Math.random() - 0.5) * 8;
    partPos[p*3+1] = (Math.random() - 0.5) * 5;
    partPos[p*3+2] = (Math.random() - 0.5) * 3 - 1;
    partPhase[p]   = Math.random() * Math.PI * 2;
  }
  partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
  var partMat  = new THREE.PointsMaterial({ color: 0x7FE3B3, size: 0.04, transparent: true, opacity: 0.5 });
  var particles = new THREE.Points(partGeo, partMat);
  scene.add(particles);

  /* ── ANIMATION ── */
  var clock  = new THREE.Clock();
  var baseY  = 0.5;   // position Y de départ (visible au centre)
  var scrollY = 0;

  function updateScroll() {
    var rect   = section.getBoundingClientRect();
    var ratio  = Math.max(0, Math.min(1, -rect.top / (rect.height + window.innerHeight * 0.45)));
    scrollY    = ratio;
  }
  window.addEventListener('scroll', updateScroll, { passive: true });

  function animate() {
    requestAnimationFrame(animate);
    var t = clock.getElapsedTime();

    // Rotation continue + légère oscillation
    ballGroup.rotation.y = t * 0.55;
    ballGroup.rotation.z = Math.sin(t * 0.8) * 0.11;

    // Descente au scroll + rebond sinusoïdal léger
    var targetY = baseY - scrollY * 4.8 + Math.sin(t * 1.6) * 0.08;
    ballGroup.position.y += (targetY - ballGroup.position.y) * 0.08;

    // Légère dérive X
    ballGroup.position.x = Math.sin(t * 0.9) * 0.22;

    // Scale ombre selon hauteur
    var dist = ballGroup.position.y + 2.1;
    var sc   = Math.max(0.1, 1 - dist * 0.18);
    shadowMesh.scale.set(sc, sc, sc);
    shadowMat.opacity = Math.max(0, 0.22 * sc);

    // Particules
    var pp = particles.geometry.attributes.position.array;
    for (var i = 0; i < partCount; i++) {
      pp[i*3+1] += 0.004;
      if (pp[i*3+1] > 3) pp[i*3+1] = -3;
    }
    particles.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  animate();

  /* ── RESIZE ── */
  window.addEventListener('resize', function () {
    W = section.offsetWidth;
    H = section.offsetHeight;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  });
})();
</script>

</body>
</html>
```

---

## index-copy-paste.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hub2gether — Le sport qui connecte votre entreprise</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Three.js pour la balle 3D procédurale -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<style>
/* ══════════════════════════════════════════
   RESET & BASE
══════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Poppins', sans-serif;
  background: #F7F8F4;
  color: #0F2E22;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
:root {
  --dark:   #0F2E22;
  --mint:   #7FE3B3;
  --yellow: #FFEC6D;
  --cream:  #F7F8F4;
  --white:  #FFFFFF;
  --border: rgba(15,46,34,0.09);
  --muted:  rgba(15,46,34,0.45);
}
img { max-width: 100%; display: block; }
a  { text-decoration: none; color: inherit; }

/* ══════════════════════════════════════════
   NAV
══════════════════════════════════════════ */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6vw;
  background: rgba(247,248,244,0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
}
nav.scrolled {
  border-color: var(--border);
  box-shadow: 0 2px 30px rgba(15,46,34,0.06);
}
.nav-logo {
  display: flex; align-items: center; gap: 9px;
  font-weight: 800; font-size: 1.25rem; letter-spacing: -0.02em;
}
.nav-logo-dot {
  width: 9px; height: 9px; border-radius: 50%;
  background: var(--mint);
  animation: pulse-dot 2.2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(127,227,179,0.6); }
  50%      { transform: scale(1.2); box-shadow: 0 0 0 7px rgba(127,227,179,0); }
}
.nav-links {
  display: flex; gap: 36px; list-style: none;
}
.nav-links a {
  font-size: 0.85rem; font-weight: 500;
  color: var(--muted);
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--dark); }
.nav-cta {
  background: var(--dark); color: var(--mint);
  border: none; border-radius: 99px;
  padding: 11px 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.82rem; font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
  white-space: nowrap;
}
.nav-cta:hover {
  background: #1e5c3a;
  transform: translateY(-1px);
  box-shadow: 0 4px 18px rgba(15,46,34,0.2);
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 110px 6vw 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* dot grid */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(15,46,34,0.07) 1.5px, transparent 1.5px);
  background-size: 30px 30px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
}

/* orbs */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(127,227,179,0.22) 0%, transparent 70%);
  top: -120px; left: -120px;
  animation: orb-float 14s ease-in-out infinite;
}
.hero-orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,236,109,0.18) 0%, transparent 70%);
  bottom: -80px; right: -80px;
  animation: orb-float 11s ease-in-out infinite reverse;
}
@keyframes orb-float {
  0%,100% { transform: translate(0,0); }
  33%      { transform: translate(25px,-25px); }
  66%      { transform: translate(-18px,18px); }
}

.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(127,227,179,0.15);
  border: 1px solid rgba(127,227,179,0.4);
  border-radius: 99px;
  padding: 6px 18px;
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: #0a6640;
  margin-bottom: 28px;
  animation: fadeUp 0.8s ease both;
}
.hero-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--mint);
}

.hero h1 {
  font-size: clamp(2.8rem, 6vw, 5.8rem);
  font-weight: 900;
  line-height: 1.06;
  letter-spacing: -0.04em;
  max-width: 860px;
  margin: 0 auto;
  animation: fadeUp 0.8s ease 0.1s both;
}
.hero h1 .hl {
  position: relative; display: inline-block; z-index: 0;
}
.hero h1 .hl::after {
  content: '';
  position: absolute;
  left: -3px; right: -3px; bottom: 6px;
  height: 14px;
  background: var(--yellow);
  z-index: -1; border-radius: 5px;
}

.hero-sub {
  font-size: 1.05rem; font-weight: 400;
  color: var(--muted); line-height: 1.85;
  max-width: 540px; margin: 26px auto 44px;
  animation: fadeUp 0.8s ease 0.2s both;
}

.hero-btns {
  display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
  animation: fadeUp 0.8s ease 0.3s both;
}
.btn-primary {
  background: var(--dark); color: var(--mint);
  border: none; border-radius: 99px;
  padding: 16px 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem; font-weight: 600;
  cursor: pointer; display: inline-flex; align-items: center; gap: 9px;
  transition: all 0.25s;
  box-shadow: 0 4px 20px rgba(15,46,34,0.18);
}
.btn-primary:hover {
  background: #1e5c3a;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(15,46,34,0.25);
}
.btn-secondary {
  background: transparent; color: var(--dark);
  border: 1.5px solid rgba(15,46,34,0.2);
  border-radius: 99px;
  padding: 15px 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem; font-weight: 500;
  cursor: pointer; display: inline-flex; align-items: center; gap: 9px;
  transition: all 0.25s;
}
.btn-secondary:hover {
  border-color: var(--dark);
  background: rgba(15,46,34,0.04);
}

/* mockup hero */
.hero-mockup {
  margin-top: 72px;
  width: 100%; max-width: 820px;
  background: var(--white);
  border-radius: 24px;
  border: 1px solid var(--border);
  padding: 24px;
  box-shadow: 0 4px 12px rgba(15,46,34,0.05), 0 24px 80px rgba(15,46,34,0.08);
  animation: fadeUp 0.8s ease 0.5s both;
  position: relative;
  z-index: 1;
}
.mockup-bar {
  display: flex; gap: 8px; margin-bottom: 20px;
}
.mockup-circle {
  width: 11px; height: 11px; border-radius: 50%;
}
.mockup-circle:nth-child(1) { background: #FF5F57; }
.mockup-circle:nth-child(2) { background: #FFBD2E; }
.mockup-circle:nth-child(3) { background: #28CA41; }

.mockup-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.mockup-card {
  background: var(--cream);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid var(--border);
  transition: transform 0.3s, box-shadow 0.3s;
  animation: fadeUp 0.6s ease both;
}
.mockup-card:nth-child(1) { animation-delay: 0.7s; }
.mockup-card:nth-child(2) { animation-delay: 0.85s; }
.mockup-card:nth-child(3) { animation-delay: 1.0s; }
.mockup-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(15,46,34,0.08);
}
.mc-icon {
  width: 40px; height: 40px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; margin-bottom: 12px;
}
.mc-icon.mint   { background: rgba(127,227,179,0.2); }
.mc-icon.yellow { background: rgba(255,236,109,0.3); }
.mc-icon.dark   { background: rgba(15,46,34,0.1); }
.mc-title { font-size: 0.8rem; font-weight: 700; margin-bottom: 4px; }
.mc-sub   { font-size: 0.72rem; color: var(--muted); }
.mc-num   { font-size: 1.6rem; font-weight: 800; color: var(--dark); margin-top: 8px; }

/* floating tags */
.hero-tag {
  position: absolute;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 0.78rem; font-weight: 600;
  box-shadow: 0 4px 20px rgba(15,46,34,0.08);
  display: flex; align-items: center; gap: 8px;
  white-space: nowrap;
  z-index: 2;
}
.hero-tag:nth-of-type(1) {
  top: 30%; left: -1%;
  animation: tag-float 4s ease-in-out infinite;
}
.hero-tag:nth-of-type(2) {
  top: 18%; right: -1%;
  animation: tag-float 4s ease-in-out infinite 1.4s;
}
.hero-tag:nth-of-type(3) {
  bottom: 22%; right: 0%;
  animation: tag-float 4s ease-in-out infinite 2.8s;
}
@keyframes tag-float {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}

/* logo band */
.logo-band {
  background: var(--white);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 40px 6vw;
  text-align: center;
}
.logo-band p {
  font-size: 0.7rem; font-weight: 700;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 28px;
}
.logo-band-row {
  display: flex; align-items: center; justify-content: center;
  gap: 52px; flex-wrap: wrap;
}
.logo-item {
  font-size: 1rem; font-weight: 800;
  color: var(--muted); opacity: 0.38;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
}
.logo-item:hover { opacity: 0.65; }

/* connector hub */
.connectors {
  padding: 92px 6vw;
  background: var(--white);
  border-bottom: 1px solid var(--border);
}
.connectors-grid {
  margin-top: 42px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.connector-card {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.25s;
}
.connector-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(15,46,34,0.08);
  border-color: rgba(15,46,34,0.2);
}
.connector-name {
  font-size: 0.95rem;
  font-weight: 700;
}
.connector-desc {
  font-size: 0.83rem;
  color: var(--muted);
  line-height: 1.7;
}
.connector-link {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #0a6640;
}


.module-showcase {
  padding: 110px 6vw;
  background: var(--cream);
}
.module-showcase + .module-showcase {
  padding-top: 0;
}
.module-head {
  max-width: 660px;
}
.module-head .section-sub { max-width: 620px; }
.module-shell {
  margin-top: 34px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(15,46,34,0.08);
}
.module-topbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg,#fff,#f9faf7);
}
.module-title {
  font-size: 0.86rem;
  font-weight: 700;
}
.module-note {
  font-size: 0.76rem;
  color: var(--muted);
}
.module-link {
  font-size: 0.75rem;
  font-weight: 700;
  color: #0a6640;
}
.module-frame {
  width: 100%;
  border: 0;
  display: block;
  background: #fff;
}

/* agenda split */
.agenda-split {
  margin-top: 42px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: stretch;
}
.agenda-copy {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 34px;
  box-shadow: 0 14px 40px rgba(15,46,34,0.06);
}
.agenda-copy h3 {
  font-size: 1.4rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}
.agenda-copy p {
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 16px;
}
.agenda-points {
  list-style: none;
  display: grid;
  gap: 12px;
}
.agenda-points li {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 14px;
  font-size: 0.82rem;
  font-weight: 500;
}
.agenda-points li strong {
  display: block;
  color: var(--dark);
  margin-bottom: 3px;
}
.agenda-panel .module-frame { height: 520px; }

/* dashboard blended section */
.dashboard-grid {
  margin-top: 42px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.dashboard-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
}
.dashboard-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.dashboard-card p {
  font-size: 0.86rem;
  color: var(--muted);
  line-height: 1.7;
}
.kpi-row {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
}
.kpi {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px;
  text-align: center;
}
.kpi strong { display:block; font-size: 1.25rem; }
.kpi span { font-size: 0.7rem; color: var(--muted); }
.module-frame--dashboard { height: 640px; }

/* ══════════════════════════════════════════
   3D BALL SECTION
══════════════════════════════════════════ */
.ball-section {
  position: relative;
  height: 140vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--dark);
}

.ball-canvas-wrap {
  position: absolute;
  inset: 0;
  z-index: 1;
}
#ballCanvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
}

.ball-text {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  pointer-events: none;
}
.ball-text h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 16px;
}
.ball-text h2 span { color: var(--mint); }
.ball-text p {
  font-size: 1rem; font-weight: 400;
  color: rgba(255,255,255,0.55);
  max-width: 400px; margin: 0 auto;
  line-height: 1.8;
}

/* ══════════════════════════════════════════
   PROBLEMS
══════════════════════════════════════════ */
.problems {
  background: var(--dark);
  padding: 110px 6vw;
}
.section-label {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px;
}
.section-label-bar {
  width: 30px; height: 3px;
  background: var(--mint); border-radius: 99px;
}
.section-label-text {
  font-size: 0.68rem; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--mint);
}
.section-title {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
}
.section-sub {
  font-size: 0.95rem; font-weight: 400;
  color: var(--muted); line-height: 1.85;
  max-width: 480px; margin-top: 16px;
}

.problems .section-title { color: #fff; }
.problems .section-sub   { color: rgba(255,255,255,0.45); }

.problems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 64px;
}
.problem-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 24px;
  padding: 40px 32px;
  transition: all 0.35s;
  opacity: 0; transform: translateY(32px);
}
.problem-card.visible {
  opacity: 1; transform: translateY(0);
}
.problem-card:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(127,227,179,0.3);
  transform: translateY(-5px);
}
.problem-num {
  font-size: 4rem; font-weight: 900;
  color: rgba(255,255,255,0.05);
  line-height: 1; margin-bottom: 16px;
  letter-spacing: -0.04em;
}
.problem-emoji { font-size: 1.8rem; margin-bottom: 14px; }
.problem-card h3 {
  font-size: 1.05rem; font-weight: 700;
  color: #fff; margin-bottom: 10px;
}
.problem-card p {
  font-size: 0.875rem; font-weight: 400;
  color: rgba(255,255,255,0.45);
  line-height: 1.8;
}

/* ══════════════════════════════════════════
   FEATURES
══════════════════════════════════════════ */
.features {
  background: var(--cream);
  padding: 110px 6vw;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 64px;
}
.feature-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 36px 32px;
  transition: all 0.35s;
  opacity: 0; transform: translateY(28px);
  cursor: default;
}
.feature-card.visible {
  opacity: 1; transform: translateY(0);
}
.feature-card:hover {
  box-shadow: 0 8px 40px rgba(15,46,34,0.08);
  border-color: rgba(15,46,34,0.18);
  transform: translateY(-6px);
}
.feature-card:hover .feat-icon {
  transform: scale(1.1) rotate(-6deg);
}
.feat-icon {
  width: 52px; height: 52px;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  background: rgba(127,227,179,0.15);
  border: 1px solid rgba(127,227,179,0.25);
  margin-bottom: 22px;
  transition: transform 0.3s;
  flex-shrink: 0;
}
.feature-card h3 {
  font-size: 1rem; font-weight: 700; margin-bottom: 10px;
}
.feature-card p {
  font-size: 0.855rem; font-weight: 400;
  color: var(--muted); line-height: 1.82;
}
.feat-badge {
  display: inline-block;
  background: rgba(127,227,179,0.15);
  color: #0a6640;
  font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 4px 11px; border-radius: 99px;
  margin-top: 16px;
}

/* stats row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  margin-top: 80px;
}
.stat-block {
  padding: 44px 24px;
  text-align: center;
  border-right: 1px solid var(--border);
  opacity: 0; transform: translateY(20px);
  transition: all 0.5s;
}
.stat-block:last-child { border-right: none; }
.stat-block.visible    { opacity: 1; transform: translateY(0); }
.stat-num {
  font-size: 2.8rem; font-weight: 900;
  letter-spacing: -0.04em; color: var(--dark);
  line-height: 1;
}
.stat-lbl {
  font-size: 0.82rem; font-weight: 500;
  color: var(--muted); margin-top: 8px;
  line-height: 1.4;
}

/* ══════════════════════════════════════════
   PRICING CAROUSEL
══════════════════════════════════════════ */
.pricing-section { background: var(--cream); }
.pricing-scroll-track {
  height: 300vh;
  position: relative;
}
.pricing-sticky {
  position: sticky;
  top: 0; height: 100vh;
  display: flex; flex-direction: row;
  align-items: stretch;
  overflow: hidden;
}

.pricing-left {
  flex: 0 0 45%; max-width: 45%;
  display: flex; flex-direction: column;
  justify-content: center;
  padding: 60px 5vw 60px 7vw;
  position: relative;
}
.pricing-left::before {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(15,46,34,0.06) 1.5px, transparent 1.5px);
  background-size: 26px 26px;
  mask-image: radial-gradient(ellipse 75% 80% at 25% 50%, black 30%, transparent 100%);
  pointer-events: none;
}
.pricing-left .section-label { margin-bottom: 20px; }
.pricing-left .section-label-text { color: var(--muted); }
.pricing-title {
  font-size: clamp(2.2rem, 2.8vw, 3.4rem);
  font-weight: 800; line-height: 1.1;
  letter-spacing: -0.03em; margin-bottom: 20px;
}
.pricing-title .hl {
  position: relative; display: inline; z-index: 0;
}
.pricing-title .hl::after {
  content: '';
  position: absolute; left: -2px; right: -2px; bottom: 4px;
  height: 11px; background: var(--yellow);
  z-index: -1; border-radius: 4px;
}
.pricing-sub {
  font-size: 0.92rem; font-weight: 400;
  color: var(--muted); line-height: 1.88;
  max-width: 300px; margin-bottom: 48px;
}

.price-nav { display: flex; flex-direction: column; gap: 18px; list-style: none; }
.pn-item {
  display: flex; align-items: center; gap: 14px;
  cursor: pointer; padding: 4px 0;
}
.pn-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: transparent;
  border: 2px solid rgba(15,46,34,0.18);
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
}
.pn-item.is-active .pn-dot {
  background: var(--dark); border-color: var(--dark);
  transform: scale(1.45);
}
.pn-name {
  font-size: 0.82rem; font-weight: 600;
  color: rgba(15,46,34,0.28); min-width: 76px;
  transition: color 0.3s;
}
.pn-item.is-active .pn-name { color: var(--dark); }
.pn-track {
  flex: 1; max-width: 80px; height: 2px;
  background: rgba(15,46,34,0.07);
  border-radius: 99px; overflow: hidden;
}
.pn-fill {
  width: 0%; height: 100%;
  background: var(--dark); border-radius: 99px;
  transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
}
.pn-item.is-active .pn-fill { width: 100%; }

.scroll-hint-label {
  display: flex; align-items: center; gap: 10px;
  margin-top: 46px;
  font-size: 0.7rem; font-weight: 500;
  color: rgba(15,46,34,0.3); letter-spacing: 0.05em;
}
.scroll-hint-icon {
  width: 30px; height: 30px; border-radius: 50%;
  border: 1.5px solid rgba(15,46,34,0.14);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  animation: bob 2.2s ease-in-out infinite;
}
@keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }

.pricing-right {
  flex: 1;
  display: flex; align-items: center; justify-content: center;
  padding: 50px 5vw 50px 2vw;
  position: relative; overflow: hidden;
}
.pricing-right::after {
  content: attr(data-n);
  position: absolute; right: -0.03em; bottom: -0.05em;
  font-size: 26vw; font-weight: 900;
  color: rgba(15,46,34,0.028);
  line-height: 1; letter-spacing: -0.05em;
  pointer-events: none; user-select: none;
}
.cards-wrap {
  position: relative;
  width: 100%; max-width: 440px;
  height: min(700px, 88vh);
}

/* cards */
.plan-card {
  position: absolute; inset: 0;
  background: var(--white);
  border-radius: 26px;
  border: 1.5px solid rgba(15,46,34,0.07);
  padding: 52px 48px 44px;
  display: flex; flex-direction: column;
  box-shadow: 0 2px 0 rgba(255,255,255,0.95) inset,
              0 4px 20px rgba(15,46,34,0.05),
              0 24px 60px rgba(15,46,34,0.08);
  opacity: 0; transform: translateY(64px) scale(0.97);
  pointer-events: none;
  transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1),
              transform 0.65s cubic-bezier(0.16,1,0.3,1);
  will-change: transform, opacity;
}
.plan-card.is-active {
  opacity: 1; transform: translateY(0) scale(1);
  pointer-events: auto; z-index: 3;
}
.plan-card.is-past {
  opacity: 0; transform: translateY(-52px) scale(0.97);
}
.card-ghost {
  position: absolute; inset: 0;
  background: var(--white); border-radius: 26px;
  border: 1.5px solid rgba(15,46,34,0.05);
  pointer-events: none; opacity: 0;
  transition: opacity 0.65s;
}
.card-ghost-1 { z-index:2; transform:translate(11px,13px) scale(0.965); }
.card-ghost-2 { z-index:1; transform:translate(22px,26px) scale(0.932); }
.plan-card.is-active ~ .card-ghost-1 { opacity: 0.52; }
.plan-card.is-active ~ .card-ghost-2 { opacity: 0.2; }

.hc-bar { height: 5px; border-radius: 99px; margin-bottom: 36px; flex-shrink: 0; }
.hc-bar--mint   { background: linear-gradient(90deg,#7FE3B3,#b4f2d6); }
.hc-bar--yellow { background: linear-gradient(90deg,#FFEC6D,#fff59b); }
.hc-bar--dark   { background: linear-gradient(90deg,#0F2E22,#1e5c3a); }

.hc-badge {
  align-self: flex-start; display: inline-flex; align-items: center; gap: 7px;
  font-size: 0.62rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  padding: 6px 14px; border-radius: 99px; margin-bottom: 18px; flex-shrink: 0;
}
.hc-badge--mint   { background: rgba(127,227,179,0.18); color: #0a6640; }
.hc-badge--yellow { background: rgba(255,236,109,0.28); color: #7a5f00; }
.hc-badge--dark   { background: var(--dark); color: var(--mint); }

.hc-name { font-size: 1.7rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 10px; flex-shrink:0; }
.hc-desc { font-size: 0.855rem; color: var(--muted); line-height: 1.85; margin-bottom: 26px; flex-shrink:0; }
.hc-price { display: flex; align-items: baseline; gap: 3px; margin-bottom: 6px; flex-shrink:0; }
.hc-currency { font-size: 1.3rem; font-weight: 600; opacity: 0.5; margin-top: 9px; align-self: flex-start; }
.hc-amount   { font-size: 3.8rem; font-weight: 800; letter-spacing: -0.05em; line-height: 1; }
.hc-period   { font-size: 0.75rem; color: var(--muted); margin-bottom: 26px; flex-shrink:0; }
.hc-sep      { height: 1px; background: rgba(15,46,34,0.07); margin-bottom: 22px; flex-shrink:0; }
.hc-features { list-style: none; display: flex; flex-direction: column; gap: 13px; flex: 1; overflow: hidden; }
.hc-features li { display: flex; align-items: flex-start; gap: 12px; font-size: 0.845rem; line-height: 1.5; }
.hc-check { width: 21px; height: 21px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
.hc-check--mint   { background: rgba(127,227,179,0.22); }
.hc-check--yellow { background: rgba(255,236,109,0.32); }
.hc-check--dark   { background: rgba(15,46,34,0.09); }
.hc-check svg { width: 11px; height: 11px; display: block; }
.hc-cta {
  display: flex; align-items: center; justify-content: center; gap: 9px;
  margin-top: 26px; padding: 18px 24px; border-radius: 99px;
  font-family: 'Poppins',sans-serif; font-size: 0.85rem; font-weight: 600;
  text-decoration: none; border: none; cursor: pointer; flex-shrink: 0;
  transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
}
.hc-cta--mint   { background: var(--dark); color: var(--mint); }
.hc-cta--mint:hover   { background: #1e5c3a; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(15,46,34,0.22); }
.hc-cta--yellow { background: var(--yellow); color: var(--dark); }
.hc-cta--yellow:hover { background: #ffe94a; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(255,236,109,0.42); }
.hc-cta--dark   { background: var(--dark); color: #fff; }
.hc-cta--dark:hover   { background: #1e5c3a; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(15,46,34,0.28); }

/* ══════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════ */
.testimonials { background: var(--white); padding: 110px 6vw; }
.testi-grid {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 24px; margin-top: 64px;
}
.testi-card {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 24px; padding: 36px 32px;
  transition: all 0.3s;
  opacity: 0; transform: translateY(22px);
}
.testi-card.visible { opacity: 1; transform: translateY(0); }
.testi-card:hover { box-shadow: 0 8px 36px rgba(15,46,34,0.07); transform: translateY(-4px); }
.testi-stars { color: #F59E0B; letter-spacing: 2px; font-size: 0.85rem; margin-bottom: 16px; }
.testi-text  { font-size: 0.875rem; color: var(--muted); line-height: 1.8; font-style: italic; margin-bottom: 26px; }
.testi-author { display: flex; align-items: center; gap: 12px; }
.testi-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.88rem; flex-shrink: 0;
}
.testi-name  { font-size: 0.85rem; font-weight: 600; }
.testi-role  { font-size: 0.75rem; color: var(--muted); }
.testi-co {
  margin-left: auto;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 8px; padding: 4px 10px;
  font-size: 0.68rem; font-weight: 700; color: var(--muted);
}

/* ══════════════════════════════════════════
   CTA SECTION
══════════════════════════════════════════ */
.cta-section {
  background: var(--dark);
  padding: 120px 6vw;
  text-align: center;
  position: relative; overflow: hidden;
}
.cta-orb {
  position: absolute; border-radius: 50%; filter: blur(100px);
  pointer-events: none;
}
.cta-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(127,227,179,0.15) 0%, transparent 70%);
  top: -150px; left: -100px;
  animation: orb-float 12s ease-in-out infinite;
}
.cta-orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,236,109,0.1) 0%, transparent 70%);
  bottom: -100px; right: -80px;
  animation: orb-float 9s ease-in-out infinite reverse;
}
.cta-section h2 {
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 900; line-height: 1.08;
  letter-spacing: -0.03em; color: #fff;
  max-width: 620px; margin: 0 auto 20px;
  position: relative; z-index: 1;
}
.cta-section h2 span { color: var(--mint); }
.cta-section p {
  font-size: 1rem; color: rgba(255,255,255,0.5);
  max-width: 440px; margin: 0 auto 44px;
  line-height: 1.85; position: relative; z-index: 1;
}
.cta-glow-btn {
  position: relative; z-index: 1;
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--mint); color: var(--dark);
  border: none; border-radius: 99px;
  padding: 20px 44px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem; font-weight: 700;
  cursor: pointer; text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 0 40px rgba(127,227,179,0.35);
}
.cta-glow-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 0 70px rgba(127,227,179,0.55);
  background: #9ef5cc;
}
.cta-note {
  font-size: 0.75rem; color: rgba(255,255,255,0.28);
  margin-top: 20px; position: relative; z-index: 1;
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
footer {
  background: #0a2019;
  padding: 72px 6vw 40px;
}
.footer-top {
  display: flex; justify-content: space-between;
  gap: 48px; flex-wrap: wrap; margin-bottom: 56px;
}
.footer-brand p {
  font-size: 0.85rem; color: rgba(255,255,255,0.38);
  max-width: 230px; line-height: 1.75; margin-top: 12px;
}
.footer-col h6 {
  font-size: 0.68rem; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(255,255,255,0.38); margin-bottom: 18px;
}
.footer-col a {
  display: block; font-size: 0.85rem;
  color: rgba(255,255,255,0.42); margin-bottom: 11px;
  transition: color 0.2s;
}
.footer-col a:hover { color: #fff; }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 28px;
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: 12px;
}
.footer-bottom p { font-size: 0.78rem; color: rgba(255,255,255,0.25); }

/* ══════════════════════════════════════════
   SCROLL ANIMATIONS
══════════════════════════════════════════ */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ══════════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════════ */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .problems-grid, .features-grid, .testi-grid { grid-template-columns: 1fr; }
  .connectors-grid { grid-template-columns: 1fr; }
  .agenda-split, .dashboard-grid { grid-template-columns: 1fr; }
  .agenda-copy { padding: 24px; }
  .agenda-panel .module-frame { height: 460px; }
  .module-frame--dashboard { height: 520px; }
  .stats-row { grid-template-columns: 1fr 1fr; }
  .mockup-grid { grid-template-columns: 1fr 1fr; }
  .mockup-card:nth-child(3) { display: none; }
  .hero-tag { display: none; }
  .pricing-sticky { flex-direction: column; height: auto; min-height: 100vh; }
  .pricing-left { flex: none; max-width: 100%; padding: 60px 6vw 40px; }
  .pricing-right { padding: 20px 6vw 60px; }
  .cards-wrap { max-width: 100%; height: 680px; }
}
@media (max-width: 600px) {
  .stats-row { grid-template-columns: 1fr; }
  .plan-card { padding: 36px 28px 30px; }
  .hc-amount { font-size: 3rem; }
}
</style>
</head>
<body>

<!-- ══════ NAV ══════ -->
<nav id="navbar">
  <div class="nav-logo">
    <div class="nav-logo-dot"></div>
    Hub2gether
  </div>
  <ul class="nav-links">
    <li><a href="#features">Produit</a></li>
    <li><a href="#agenda-module">Agenda</a></li>
    <li><a href="#dashboard-module">Dashboard</a></li>
    <li><a href="#pricing">Tarifs</a></li>
    <li><a href="#testi">Témoignages</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="nav-cta" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
    Demander une démo
  </button>
</nav>

<!-- ══════ HERO ══════ -->
<section class="hero">
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>

  <div class="hero-badge">
    <div class="hero-badge-dot"></div>
    Nouveau — Plateforme sport B2B
  </div>

  <h1>Le sport qui <span class="hl">connecte</span><br>votre entreprise</h1>

  <p class="hero-sub">Hub2gether permet aux collaborateurs de se retrouver autour du sport, d'organiser des matchs et de créer une vraie communauté sportive au sein de leur entreprise.</p>

  <div class="hero-btns">
    <button class="btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
      Demander une démo
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <button class="btn-secondary" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">
      Découvrir la plateforme
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 9l5 4 5-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  </div>

  <!-- floating tags -->
  <div class="hero-tag">⚽ Match organisé · 14h30</div>
  <div class="hero-tag">🏓 +12 joueurs actifs</div>
  <div class="hero-tag">🏆 Classement mis à jour</div>

  <!-- mockup -->
  <div class="hero-mockup">
    <div class="mockup-bar">
      <div class="mockup-circle"></div>
      <div class="mockup-circle"></div>
      <div class="mockup-circle"></div>
    </div>
    <div class="mockup-grid">
      <div class="mockup-card">
        <div class="mc-icon mint">⚽</div>
        <div class="mc-title">Matchs à venir</div>
        <div class="mc-sub">Foot 5v5 · Mardi 18h</div>
        <div class="mc-num">3</div>
      </div>
      <div class="mockup-card">
        <div class="mc-icon yellow">👥</div>
        <div class="mc-title">Groupes actifs</div>
        <div class="mc-sub">Tennis · Padel · Running</div>
        <div class="mc-num">8</div>
      </div>
      <div class="mockup-card">
        <div class="mc-icon dark">🏆</div>
        <div class="mc-title">Votre rang</div>
        <div class="mc-sub">Classement foot</div>
        <div class="mc-num">#4</div>
      </div>
    </div>
  </div>
</section>

<!-- ══════ LOGO BAND ══════ -->
<div class="logo-band">
  <p>Déjà adopté par des équipes ambitieuses</p>
  <div class="logo-band-row">
    <div class="logo-item">ACCENTURE</div>
    <div class="logo-item">DECATHLON</div>
    <div class="logo-item">VEOLIA</div>
    <div class="logo-item">SANOFI</div>
    <div class="logo-item">CAPGEMINI</div>
    <div class="logo-item">ENGIE</div>
  </div>
</div>

<!-- ══════ CONNECTORS ══════ -->
<section class="connectors" id="connectors">
  <div class="section-label">
    <div class="section-label-bar"></div>
    <span class="section-label-text" style="color:var(--muted)">Connecteurs</span>
  </div>
  <h2 class="section-title">Un index central pour lancer<br>vos autres connecteurs</h2>
  <p class="section-sub">Depuis cette page, vous pouvez accéder rapidement à vos modules Hub2gether et les brancher à vos usages internes.</p>

  <div class="connectors-grid">
    <article class="connector-card">
      <h3 class="connector-name">Connecteur Agenda Sportif</h3>
      <p class="connector-desc">Planifiez vos créneaux, filtrez par sport et visualisez les disponibilités d'équipe dans une interface dédiée.</p>
      <a class="connector-link" href="#agenda-module">Voir l'agenda sur cette page ↓</a>
    </article>

    <article class="connector-card">
      <h3 class="connector-name">Connecteur Hero Zoom</h3>
      <p class="connector-desc">Utilisez le mode Hero Zoom pour vos démonstrations visuelles, animations d'entrée et mises en avant produit.</p>
      <a class="connector-link" href="#dashboard-module">Voir le dashboard sur cette page ↓</a>
    </article>

    <article class="connector-card">
      <h3 class="connector-name">Point d'entrée principal</h3>
      <p class="connector-desc">Conservez cet index comme hub : il référence les modules disponibles et facilite la navigation inter-connecteurs.</p>
      <a class="connector-link" href="#agenda-module">Scroller vers les modules intégrés ↓</a>
    </article>
  </div>
</section>



<!-- ══════ MODULE AGENDA INTÉGRÉ ══════ -->
<section class="module-showcase" id="agenda-module">
  <div class="module-head">
    <div class="section-label">
      <div class="section-label-bar"></div>
      <span class="section-label-text" style="color:var(--muted)">Agenda intégré</span>
    </div>
    <h2 class="section-title">Un agenda fondu dans la page, compact et lisible</h2>
    <p class="section-sub">La section agenda est désormais pensée comme un bloc éditorial : explication à gauche, aperçu produit à droite. Vous gardez le contexte de lecture et l'accès rapide à la planification.</p>
  </div>

  <div class="agenda-split">
    <article class="agenda-copy">
      <h3>Comment ça fonctionne</h3>
      <p>L'agenda agrège les matchs, les créneaux disponibles et les inscriptions des équipes. Les collaborateurs peuvent identifier rapidement les plages libres et rejoindre une session en quelques clics.</p>
      <ul class="agenda-points">
        <li><strong>1. Filtrer par sport</strong>Tennis, padel, running ou foot selon les équipes actives.</li>
        <li><strong>2. Visualiser les créneaux</strong>Les disponibilités sont visibles en un coup d'œil sur la semaine.</li>
        <li><strong>3. Confirmer sa présence</strong>Un RSVP rapide pour augmenter le taux de participation.</li>
      </ul>
    </article>

    <div class="module-shell agenda-panel">
      <div class="module-topbar">
        <div>
          <div class="module-title">Hub2gether · Agenda Sportif</div>
          <div class="module-note">Aperçu embarqué compact</div>
        </div>
        
      </div>
      <iframe class="module-frame module-frame--agenda" src="./hub2gether-agenda.html?embed=1" title="Agenda Hub2gether"></iframe>
    </div>
  </div>
</section>

<!-- ══════ MODULE DASHBOARD INTÉGRÉ ══════ -->
<section class="module-showcase" id="dashboard-module">
  <div class="module-head">
    <div class="section-label">
      <div class="section-label-bar"></div>
      <span class="section-label-text" style="color:var(--muted)">Dashboard intégré</span>
    </div>
    <h2 class="section-title">Le dashboard RH s'intègre comme une section produit</h2>
    <p class="section-sub">Cette section mélange storytelling + KPI opérationnels avant d'afficher le dashboard complet, pour un enchaînement naturel avec le reste de la landing.</p>
  </div>

  <div class="dashboard-grid">
    <article class="dashboard-card">
      <h3>Pilotage RH en continu</h3>
      <p>Suivez l'engagement sportif, la rétention des groupes et la fréquence des événements depuis une vue unique exploitable en comité RH.</p>
      <div class="kpi-row">
        <div class="kpi"><strong>+37%</strong><span>Participation</span></div>
        <div class="kpi"><strong>82%</strong><span>Profils actifs</span></div>
        <div class="kpi"><strong>5,4</strong><span>Evts / sem.</span></div>
      </div>
    </article>
    <article class="dashboard-card">
      <h3>Actions recommandées</h3>
      <p>Le module met en avant les équipes peu actives, les sports en croissance et les créneaux à fort potentiel pour booster l'adoption.</p>
      
    </article>
  </div>

  <div class="module-shell">
    <div class="module-topbar">
      <div>
        <div class="module-title">Hub2gether · Dashboard</div>
        <div class="module-note">Vue embarquée dans la landing</div>
      </div>
      
    </div>
    <iframe class="module-frame module-frame--dashboard" src="./hub2gether-hero-zoom.html?embed=1" title="Dashboard Hub2gether"></iframe>
  </div>
</section>

<!-- ══════ 3D BALL SECTION ══════ -->
<!--
  ⚽ BALLE 3D — Pour activer :
  1. Upload ton fichier ball.glb dans ce même dossier GitHub
  2. Remplace BALL_URL ci-dessous par : './ball.glb'
     ou par l'URL raw GitHub : 'https://raw.githubusercontent.com/TON_USER/HUB2gether/main/ball.glb'
-->
<section class="ball-section" id="ballSection">
  <div class="ball-canvas-wrap">
    <canvas id="ballCanvas"></canvas>
  </div>
  <div class="ball-text">
    <h2>Bouge.<br><span>Joue ensemble.</span></h2>
    <p>Le sport comme lien naturel entre collègues, à portée de clic.</p>
  </div>
</section>

<!-- ══════ PROBLEMS ══════ -->
<section class="problems" id="problems">
  <div class="section-label">
    <div class="section-label-bar"></div>
    <span class="section-label-text">Le problème</span>
  </div>
  <h2 class="section-title" style="color:#fff">Le sport en entreprise reste<br>difficile à organiser</h2>
  <p class="section-sub">Sans outil dédié, les initiatives sportives se perdent dans les chats d'équipe et le bouche-à-oreille.</p>

  <div class="problems-grid">
    <div class="problem-card">
      <div class="problem-num">01</div>
      <div class="problem-emoji">🔍</div>
      <h3>Trouver des partenaires, un défi quotidien</h3>
      <p>Difficile de savoir qui pratique quel sport ou qui cherche un partenaire pour jouer après le travail.</p>
    </div>
    <div class="problem-card">
      <div class="problem-num">02</div>
      <div class="problem-emoji">👁️</div>
      <h3>Aucune visibilité sur les activités</h3>
      <p>Les initiatives restent fragmentées, invisibles. Pas de lieu central pour voir ce qui se passe sportivement.</p>
    </div>
    <div class="problem-card">
      <div class="problem-num">03</div>
      <div class="problem-emoji">📉</div>
      <h3>Un engagement qui s'effondre</h3>
      <p>Sans gamification ni suivi, la motivation s'estompe. Les groupes se créent puis disparaissent faute de structure.</p>
    </div>
  </div>
</section>

<!-- ══════ FEATURES ══════ -->
<section class="features" id="features">
  <div class="section-label">
    <div class="section-label-bar"></div>
    <span class="section-label-text" style="color:var(--muted)">La solution</span>
  </div>
  <h2 class="section-title">Une plateforme pour structurer<br>le sport en entreprise</h2>
  <p class="section-sub">Hub2gether centralise toute la vie sportive de votre entreprise en un seul endroit, simple et engageant.</p>

  <div class="features-grid">
    <div class="feature-card">
      <div class="feat-icon">⚡</div>
      <h3>Matchmaking sportif</h3>
      <p>L'algorithme connecte automatiquement les collaborateurs selon leur sport, niveau et disponibilités.</p>
      <span class="feat-badge">IA intégrée</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">👥</div>
      <h3>Groupes sportifs</h3>
      <p>Créez ou rejoignez des groupes dédiés par sport. Chaque groupe a son propre espace d'organisation.</p>
      <span class="feat-badge">Communauté</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">📅</div>
      <h3>Organisation de matchs</h3>
      <p>Planifiez, gérez les inscriptions et confirmez la participation en quelques secondes.</p>
      <span class="feat-badge">Automatisé</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">📊</div>
      <h3>Statistiques & classements</h3>
      <p>Suivez vos performances, matchs joués et progression dans les classements internes.</p>
      <span class="feat-badge">Suivi personnel</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">🎮</div>
      <h3>Gamification</h3>
      <p>Badges, défis hebdomadaires et récompenses pour maintenir l'engagement sur la durée.</p>
      <span class="feat-badge">Engagement +</span>
    </div>
    <div class="feature-card">
      <div class="feat-icon">🏢</div>
      <h3>Dashboard entreprise</h3>
      <p>Vue RH complète pour piloter la pratique sportive, l'engagement et le bien-être des équipes.</p>
      <span class="feat-badge">B2B</span>
    </div>
  </div>

  <div class="stats-row">
    <div class="stat-block">
      <div class="stat-num" data-target="87" data-suffix="%">0%</div>
      <div class="stat-lbl">d'engagement en plus</div>
    </div>
    <div class="stat-block">
      <div class="stat-num" data-target="3" data-suffix="×">0×</div>
      <div class="stat-lbl">plus de matchs organisés</div>
    </div>
    <div class="stat-block">
      <div class="stat-num" data-target="92" data-suffix="%">0%</div>
      <div class="stat-lbl">de satisfaction RH</div>
    </div>
    <div class="stat-block">
      <div class="stat-num" data-target="500" data-suffix="+">0+</div>
      <div class="stat-lbl">entreprises pilotes</div>
    </div>
  </div>
</section>

<!-- ══════ PRICING CAROUSEL ══════ -->
<section class="pricing-section" id="pricing">
  <div class="pricing-scroll-track" id="pricingTrack">
    <div class="pricing-sticky">

      <div class="pricing-left">
        <div class="section-label">
          <div class="section-label-bar"></div>
          <span class="section-label-text" style="color:var(--muted)">Nos formules</span>
        </div>
        <h2 class="pricing-title">Choisissez<br>votre <span class="hl">formule</span></h2>
        <p class="pricing-sub">Des offres pensées pour chaque taille d'entreprise. Aucun frais caché.</p>

        <ul class="price-nav" id="priceNav">
          <li class="pn-item is-active" data-s="0">
            <div class="pn-dot"></div>
            <span class="pn-name">Starter</span>
            <div class="pn-track"><div class="pn-fill"></div></div>
          </li>
          <li class="pn-item" data-s="1">
            <div class="pn-dot"></div>
            <span class="pn-name">Business</span>
            <div class="pn-track"><div class="pn-fill"></div></div>
          </li>
          <li class="pn-item" data-s="2">
            <div class="pn-dot"></div>
            <span class="pn-name">Enterprise</span>
            <div class="pn-track"><div class="pn-fill"></div></div>
          </li>
        </ul>

        <div class="scroll-hint-label">
          <div class="scroll-hint-icon">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 2v9M2.5 8l4 4 4-4" stroke="#0F2E22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          Scrollez pour explorer
        </div>
      </div>

      <div class="pricing-right" id="pricingRight" data-n="1">
        <div class="cards-wrap">

          <!-- Starter -->
          <div class="plan-card is-active" data-card="0">
            <div class="hc-bar hc-bar--mint"></div>
            <span class="hc-badge hc-badge--mint">
              <svg width="7" height="7" viewBox="0 0 7 7"><circle cx="3.5" cy="3.5" r="3.5" fill="currentColor"/></svg>
              Idéal pour démarrer
            </span>
            <div class="hc-name">Starter</div>
            <div class="hc-desc">Pour les petites équipes qui veulent lancer leur communauté sportive simplement.</div>
            <div class="hc-price"><span class="hc-currency">€</span><span class="hc-amount">3</span></div>
            <div class="hc-period">par collaborateur / mois · jusqu'à 100 personnes</div>
            <div class="hc-sep"></div>
            <ul class="hc-features">
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Matchmaking sportif automatique</li>
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Jusqu'à 5 groupes sportifs</li>
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Organisation de matchs &amp; événements</li>
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Statistiques individuelles</li>
              <li><span class="hc-check hc-check--mint"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0a6640" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Support email 5j/7</li>
            </ul>
            <a href="#contact" class="hc-cta hc-cta--mint">Commencer gratuitement <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>

          <!-- Business -->
          <div class="plan-card" data-card="1">
            <div class="hc-bar hc-bar--yellow"></div>
            <span class="hc-badge hc-badge--yellow">
              <svg width="9" height="9" viewBox="0 0 9 9"><path d="M4.5 0l1.3 2.7 3 .4-2.2 2.1.5 3L4.5 6.8 1.9 8.2l.5-3L.2 3.1l3-.4L4.5 0z" fill="currentColor"/></svg>
              Le plus populaire
            </span>
            <div class="hc-name">Business</div>
            <div class="hc-desc">Pour les équipes en croissance qui veulent une dynamique sportive et un suivi RH complet.</div>
            <div class="hc-price"><span class="hc-currency">€</span><span class="hc-amount">6</span></div>
            <div class="hc-period">par collaborateur / mois · jusqu'à 500 personnes</div>
            <div class="hc-sep"></div>
            <ul class="hc-features">
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Tout Starter, plus…</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Groupes sportifs illimités</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Dashboard RH avancé avec export</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Défis &amp; tournois inter-équipes</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Intégration Slack &amp; Teams</li>
              <li><span class="hc-check hc-check--yellow"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#7a5f00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Support prioritaire 7j/7</li>
            </ul>
            <a href="#contact" class="hc-cta hc-cta--yellow">Demander une démo <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>

          <!-- Enterprise -->
          <div class="plan-card" data-card="2">
            <div class="hc-bar hc-bar--dark"></div>
            <span class="hc-badge hc-badge--dark">
              <svg width="8" height="8" viewBox="0 0 8 8"><rect width="8" height="8" rx="2" fill="currentColor"/></svg>
              Sur mesure
            </span>
            <div class="hc-name">Enterprise</div>
            <div class="hc-desc">Pour les grandes organisations avec des besoins d'intégration, sécurité et déploiement à l'échelle.</div>
            <div class="hc-price"><span class="hc-amount" style="font-size:2.5rem;letter-spacing:-0.03em">Sur devis</span></div>
            <div class="hc-period">Tarif personnalisé · collaborateurs illimités</div>
            <div class="hc-sep"></div>
            <ul class="hc-features">
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Tout Business, plus…</li>
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>SSO &amp; intégration SIRH</li>
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Hébergement dédié &amp; SLA garanti</li>
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>White-label &amp; branding personnalisé</li>
              <li><span class="hc-check hc-check--dark"><svg viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="#0F2E22" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>CSM dédié &amp; onboarding sur site</li>
            </ul>
            <a href="#contact" class="hc-cta hc-cta--dark">Contacter l'équipe commerciale <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>

          <div class="card-ghost card-ghost-1"></div>
          <div class="card-ghost card-ghost-2"></div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══════ TESTIMONIALS ══════ -->
<section class="testimonials" id="testi">
  <div class="section-label">
    <div class="section-label-bar"></div>
    <span class="section-label-text" style="color:var(--muted)">Témoignages</span>
  </div>
  <h2 class="section-title">Ils ont activé leur<br>communauté sportive</h2>

  <div class="testi-grid">
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"Hub2gether a radicalement changé nos déjeuners. On organise des matchs de padel en moins de 5 minutes. La cohésion entre les équipes est vraiment visible."</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background:linear-gradient(135deg,#0F2E22,#1e5c3a)">SL</div>
        <div>
          <div class="testi-name">Sophie Laurent</div>
          <div class="testi-role">DRH · 1 400 collaborateurs</div>
        </div>
        <div class="testi-co">TechCorp</div>
      </div>
    </div>
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"En 3 semaines, 60% de nos 800 salariés avaient créé leur profil. Les premiers matchs s'organisaient seuls. Le dashboard RH est une vraie mine d'or."</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background:linear-gradient(135deg,#0a6640,#7FE3B3)">AM</div>
        <div>
          <div class="testi-name">Antoine Moreau</div>
          <div class="testi-role">People Manager · Scale-up</div>
        </div>
        <div class="testi-co">Scaleway</div>
      </div>
    </div>
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"On a réduit l'absentéisme de 12% depuis le déploiement. L'outil s'est intégré naturellement. Nos collaborateurs adorent le classement et les défis."</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background:linear-gradient(135deg,#7a5f00,#FFEC6D);color:#0F2E22">CB</div>
        <div>
          <div class="testi-name">Claire Bernard</div>
          <div class="testi-role">Chief People Officer</div>
        </div>
        <div class="testi-co">InnoGroup</div>
      </div>
    </div>
  </div>
</section>

<!-- ══════ CTA ══════ -->
<section class="cta-section" id="contact">
  <div class="cta-orb cta-orb-1"></div>
  <div class="cta-orb cta-orb-2"></div>

  <h2>Activez la communauté sportive<br>de votre <span>entreprise</span></h2>
  <p>Demandez une démo personnalisée. Nos équipes vous montrent Hub2gether en live en 30 minutes.</p>
  <a href="mailto:demo@hub2gether.com" class="cta-glow-btn">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M17 3.5H3A1.5 1.5 0 0 0 1.5 5v10A1.5 1.5 0 0 0 3 16.5h14a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 17 3.5z" stroke="currentColor" stroke-width="1.5"/><path d="m1.5 5.5 8.5 6 8.5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    Demander une démo gratuite
  </a>
  <p class="cta-note">Réponse sous 24h · Aucun engagement · Setup en 48h</p>
</section>

<!-- ══════ FOOTER ══════ -->
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="nav-logo" style="color:#fff">
        <div class="nav-logo-dot"></div>
        Hub2gether
      </div>
      <p>Le hub sportif interne qui connecte vos collaborateurs et transforme votre culture d'entreprise.</p>
    </div>
    <div class="footer-col">
      <h6>Produit</h6>
      <a href="#">Fonctionnalités</a>
      <a href="#">Dashboard RH</a>
      <a href="#">Tarifs</a>
      <a href="#">Intégrations</a>
    </div>
    <div class="footer-col">
      <h6>Entreprise</h6>
      <a href="#">À propos</a>
      <a href="#">Blog</a>
      <a href="#">Carrières</a>
      <a href="#">Presse</a>
    </div>
    <div class="footer-col">
      <h6>Légal</h6>
      <a href="#">Confidentialité</a>
      <a href="#">CGU</a>
      <a href="#">Mentions légales</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Hub2gether. Tous droits réservés.</p>
    <p>Made with 🏃 in France</p>
  </div>
</footer>

<!-- ══════════════════════════════════════════
     SCRIPTS
══════════════════════════════════════════ -->
<script>
// ─── NAV scroll ───
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ─── Scroll reveal ───
var revealEls = document.querySelectorAll('.problem-card, .feature-card, .testi-card, .stat-block');
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      var el = entry.target;
      var delay = parseInt(el.getAttribute('data-delay') || 0);
      setTimeout(function() { el.classList.add('visible'); }, delay);
      // counter animation for stat blocks
      if (el.classList.contains('stat-block')) {
        var numEl = el.querySelector('[data-target]');
        if (numEl) animateCounter(numEl);
      }
      revealObs.unobserve(el);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.problem-card').forEach(function(el, i) {
  el.setAttribute('data-delay', i * 100);
  revealObs.observe(el);
});
document.querySelectorAll('.feature-card').forEach(function(el, i) {
  el.setAttribute('data-delay', i * 80);
  revealObs.observe(el);
});
document.querySelectorAll('.testi-card').forEach(function(el, i) {
  el.setAttribute('data-delay', i * 100);
  revealObs.observe(el);
});
document.querySelectorAll('.stat-block').forEach(function(el, i) {
  el.setAttribute('data-delay', i * 80);
  revealObs.observe(el);
});

// ─── Counter animation ───
function animateCounter(el) {
  var target  = parseInt(el.getAttribute('data-target'));
  var suffix  = el.getAttribute('data-suffix') || '';
  var start   = null;
  var dur     = 1600;
  function step(ts) {
    if (!start) start = ts;
    var progress = Math.min((ts - start) / dur, 1);
    var eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

// ─── Pricing carousel ───
(function() {
  var track    = document.getElementById('pricingTrack');
  var cards    = document.querySelectorAll('.plan-card');
  var navItems = document.querySelectorAll('.pn-item');
  var right    = document.getElementById('pricingRight');
  var TOTAL    = cards.length;
  var current  = -1;

  function setSlide(idx) {
    if (idx === current) return;
    current = idx;
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('is-active', 'is-past');
      if (i === idx)      cards[i].classList.add('is-active');
      else if (i < idx)   cards[i].classList.add('is-past');
    }
    for (var j = 0; j < navItems.length; j++) {
      navItems[j].classList.toggle('is-active', j === idx);
    }
    right.setAttribute('data-n', idx + 1);
  }

  function onScroll() {
    if (!track) return;
    var rect     = track.getBoundingClientRect();
    var scrolled = Math.max(0, -rect.top);
    var total    = track.offsetHeight - window.innerHeight;
    if (total <= 0) { setSlide(0); return; }
    var ratio = Math.min(1, scrolled / total);
    var idx   = Math.min(TOTAL - 1, Math.floor(ratio * TOTAL));
    setSlide(idx);
  }

  for (var k = 0; k < navItems.length; k++) {
    (function(i) {
      navItems[i].addEventListener('click', function() {
        var total   = track.offsetHeight - window.innerHeight;
        var target  = track.offsetTop + (total / TOTAL) * i + 4;
        window.scrollTo({ top: target, behavior: 'smooth' });
      });
    })(k);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  setSlide(0);
})();

// ─── Mouse parallax orbs ───
document.addEventListener('mousemove', function(e) {
  var x = (e.clientX / window.innerWidth  - 0.5) * 28;
  var y = (e.clientY / window.innerHeight - 0.5) * 28;
  document.querySelectorAll('.hero-orb-1').forEach(function(o) {
    o.style.transform = 'translate(' + x * 0.5 + 'px,' + y * 0.5 + 'px)';
  });
});

// ─── 3D TENNIS BALL — 100% procédural, zéro fichier externe ───
(function () {
  var canvas  = document.getElementById('ballCanvas');
  var section = document.getElementById('ballSection');
  if (!canvas || !window.THREE) return;

  var W = section.offsetWidth;
  var H = section.offsetHeight;

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type    = THREE.PCFSoftShadowMap;

  var scene  = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
  camera.position.set(0, 0.3, 5.5);

  /* ── LUMIÈRES ── */
  scene.add(new THREE.AmbientLight(0xfff8e8, 0.7));

  var keyLight = new THREE.DirectionalLight(0xffffff, 1.65);
  keyLight.position.set(4, 6, 5);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width  = 1024;
  keyLight.shadow.mapSize.height = 1024;
  scene.add(keyLight);

  var rimLight = new THREE.DirectionalLight(0x7FE3B3, 1.05);
  rimLight.position.set(-5, 2, -3);
  scene.add(rimLight);

  var fillLight = new THREE.DirectionalLight(0xFFEC6D, 0.35);
  fillLight.position.set(2, -4, 3);
  scene.add(fillLight);

  /* ── TEXTURE PROCÉDURALE (canvas 2D → Three.js texture) ── */
  function makeBallTexture() {
    var size = 1024;
    var tc   = document.createElement('canvas');
    tc.width = tc.height = size;
    var ctx  = tc.getContext('2d');

    // Fond vert tennis (jaune-vert authentique)
    var baseGrad = ctx.createRadialGradient(size*0.38, size*0.35, 0, size*0.5, size*0.5, size*0.55);
    baseGrad.addColorStop(0,   '#d4e84a');
    baseGrad.addColorStop(0.5, '#c8dc38');
    baseGrad.addColorStop(1,   '#a8c020');
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, size, size);

    // Texture feutrée : bruit de petits points
    ctx.globalAlpha = 0.22;
    for (var i = 0; i < 18000; i++) {
      var fx = Math.random() * size;
      var fy = Math.random() * size;
      var fr = Math.random() * 1.8 + 0.4;
      ctx.beginPath();
      ctx.arc(fx, fy, fr, 0, Math.PI * 2);
      ctx.fillStyle = Math.random() > 0.5 ? '#ffffff' : '#7a9c00';
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Légère vignette sphérique
    var vig = ctx.createRadialGradient(size*0.5, size*0.5, size*0.25, size*0.5, size*0.5, size*0.72);
    vig.addColorStop(0,   'rgba(0,0,0,0)');
    vig.addColorStop(1,   'rgba(0,0,0,0.28)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, size, size);

    return new THREE.CanvasTexture(tc);
  }

  /* ── TEXTURE COUTURES (canvas séparé) ── */
  function makeSeamTexture() {
    var size = 1024;
    var tc   = document.createElement('canvas');
    tc.width = tc.height = size;
    var ctx  = tc.getContext('2d');

    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.clearRect(0, 0, size, size);

    // Coutures en coordonnées UV sphériques
    // Une balle de tennis a deux coutures en S symétriques
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth   = 10;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';

    function drawSeam(offsetX, offsetY, flip) {
      ctx.beginPath();
      var steps = 200;
      for (var i = 0; i <= steps; i++) {
        var t  = i / steps;
        var u  = t * size;
        // courbe en S caractéristique d'une balle de tennis
        var v  = size * 0.5 + Math.sin(t * Math.PI * 2) * size * 0.18 * (flip ? -1 : 1);
        v += offsetY;
        u += offsetX;
        if (i === 0) ctx.moveTo(u % size, v);
        else         ctx.lineTo(u % size, v);
      }
      ctx.stroke();
    }

    drawSeam(0, 0, false);
    drawSeam(0, size * 0.5, true);

    // ombre portée fine
    ctx.strokeStyle = 'rgba(80,120,0,0.55)';
    ctx.lineWidth   = 14;
    drawSeam(3, 4, false);
    drawSeam(3, size * 0.5 + 4, true);

    // trait blanc final par-dessus
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth   = 7;
    drawSeam(0, 0, false);
    drawSeam(0, size * 0.5, true);

    return new THREE.CanvasTexture(tc);
  }

  /* ── GROUPE BALLE ── */
  var ballGroup = new THREE.Group();
  scene.add(ballGroup);

  // Corps principal
  var ballGeo = new THREE.SphereGeometry(1.3, 128, 128);
  var ballMat = new THREE.MeshStandardMaterial({
    map:          makeBallTexture(),
    roughness:    0.82,
    metalness:    0.0,
    envMapIntensity: 0.3
  });
  var ballMesh = new THREE.Mesh(ballGeo, ballMat);
  ballMesh.castShadow    = true;
  ballMesh.receiveShadow = false;
  ballGroup.add(ballMesh);

  // Coutures par-dessus (mesh légèrement plus grand)
  var seamGeo = new THREE.SphereGeometry(1.305, 128, 128);
  var seamMat = new THREE.MeshStandardMaterial({
    map:         makeSeamTexture(),
    transparent: true,
    roughness:   0.6,
    metalness:   0.0,
    depthWrite:  false
  });
  var seamMesh = new THREE.Mesh(seamGeo, seamMat);
  ballGroup.add(seamMesh);

  // Reflet spéculaire (petite sphère intérieure semi-transparente)
  var specGeo = new THREE.SphereGeometry(1.31, 64, 64);
  var specMat = new THREE.MeshPhongMaterial({
    color:       0xffffff,
    transparent: true,
    opacity:     0.07,
    shininess:   180,
    specular:    0xffffff,
    side:        THREE.FrontSide,
    depthWrite:  false
  });
  ballGroup.add(new THREE.Mesh(specGeo, specMat));



  // Micro-fibres (poils) pour un rendu plus réaliste
  var furCount = 1800;
  var furPos = new Float32Array(furCount * 3);
  var furCol = new Float32Array(furCount * 3);
  var furGeo = new THREE.BufferGeometry();
  for (var fi = 0; fi < furCount; fi++) {
    var u = Math.random() * Math.PI * 2;
    var v = Math.acos(2 * Math.random() - 1);
    var r = 1.31 + Math.random() * 0.1;
    var x = Math.sin(v) * Math.cos(u) * r;
    var y = Math.cos(v) * r;
    var z = Math.sin(v) * Math.sin(u) * r;
    furPos[fi*3] = x;
    furPos[fi*3+1] = y;
    furPos[fi*3+2] = z;
    var tint = 0.72 + Math.random() * 0.28;
    furCol[fi*3] = 0.78 * tint;
    furCol[fi*3+1] = 0.9 * tint;
    furCol[fi*3+2] = 0.34 * tint;
  }
  furGeo.setAttribute('position', new THREE.BufferAttribute(furPos, 3));
  furGeo.setAttribute('color', new THREE.BufferAttribute(furCol, 3));
  var furMat = new THREE.PointsMaterial({ size: 0.026, transparent: true, opacity: 0.75, vertexColors: true, depthWrite: false });
  var furPoints = new THREE.Points(furGeo, furMat);
  ballGroup.add(furPoints);

  /* ── OMBRE AU SOL ── */
  var shadowGeo = new THREE.CircleGeometry(1.1, 64);
  var shadowMat = new THREE.MeshBasicMaterial({
    color:       0x000000,
    transparent: true,
    opacity:     0.18,
    depthWrite:  false
  });
  var shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = -2.1;
  scene.add(shadowMesh);

  /* ── PARTICULES flottantes (poussière de terrain) ── */
  var partCount  = 60;
  var partGeo    = new THREE.BufferGeometry();
  var partPos    = new Float32Array(partCount * 3);
  var partPhase  = new Float32Array(partCount);
  for (var p = 0; p < partCount; p++) {
    partPos[p*3]   = (Math.random() - 0.5) * 8;
    partPos[p*3+1] = (Math.random() - 0.5) * 5;
    partPos[p*3+2] = (Math.random() - 0.5) * 3 - 1;
    partPhase[p]   = Math.random() * Math.PI * 2;
  }
  partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
  var partMat  = new THREE.PointsMaterial({ color: 0x7FE3B3, size: 0.04, transparent: true, opacity: 0.5 });
  var particles = new THREE.Points(partGeo, partMat);
  scene.add(particles);

  /* ── ANIMATION ── */
  var clock  = new THREE.Clock();
  var baseY  = 0.5;   // position Y de départ (visible au centre)
  var scrollY = 0;

  function updateScroll() {
    var rect   = section.getBoundingClientRect();
    var ratio  = Math.max(0, Math.min(1, -rect.top / (rect.height + window.innerHeight * 0.45)));
    scrollY    = ratio;
  }
  window.addEventListener('scroll', updateScroll, { passive: true });

  function animate() {
    requestAnimationFrame(animate);
    var t = clock.getElapsedTime();

    // Rotation continue + légère oscillation
    ballGroup.rotation.y = t * 0.55;
    ballGroup.rotation.z = Math.sin(t * 0.8) * 0.11;

    // Descente au scroll + rebond sinusoïdal léger
    var targetY = baseY - scrollY * 4.8 + Math.sin(t * 1.6) * 0.08;
    ballGroup.position.y += (targetY - ballGroup.position.y) * 0.08;

    // Légère dérive X
    ballGroup.position.x = Math.sin(t * 0.9) * 0.22;

    // Scale ombre selon hauteur
    var dist = ballGroup.position.y + 2.1;
    var sc   = Math.max(0.1, 1 - dist * 0.18);
    shadowMesh.scale.set(sc, sc, sc);
    shadowMat.opacity = Math.max(0, 0.22 * sc);

    // Particules
    var pp = particles.geometry.attributes.position.array;
    for (var i = 0; i < partCount; i++) {
      pp[i*3+1] += 0.004;
      if (pp[i*3+1] > 3) pp[i*3+1] = -3;
    }
    particles.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  animate();

  /* ── RESIZE ── */
  window.addEventListener('resize', function () {
    W = section.offsetWidth;
    H = section.offsetHeight;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  });
})();
</script>

</body>
</html>
```

---

## hub2gether-agenda.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hub2gether — Agenda Sportif</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Poppins', sans-serif;
  background: #F7F8F4;
  color: #0F2E22;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}
:root {
  --dark:   #0F2E22;
  --mint:   #7FE3B3;
  --yellow: #FFEC6D;
  --cream:  #F7F8F4;
  --white:  #FFFFFF;
  --border: rgba(15,46,34,0.09);
  --muted:  rgba(15,46,34,0.42);
  /* sport colors */
  --padel:    #7FE3B3;
  --football: #FFEC6D;
  --running:  #FF8C69;
  --tennis:   #A78BFA;
  --basket:   #60A5FA;
}

/* ══ LAYOUT ══ */
.app-shell {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* ══ SIDEBAR ══ */
.sidebar {
  width: 260px;
  flex-shrink: 0;
  background: var(--white);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  overflow-y: auto;
}

.sidebar-logo {
  display: flex; align-items: center; gap: 10px;
  padding: 0 20px 24px;
  font-size: 1.1rem; font-weight: 800;
  letter-spacing: -0.02em;
  border-bottom: 1px solid var(--border);
}
.logo-dot {
  width: 9px; height: 9px; border-radius: 50%;
  background: var(--mint);
  animation: pulse-dot 2s infinite;
}
@keyframes pulse-dot {
  0%,100% { box-shadow: 0 0 0 0 rgba(127,227,179,0.5); }
  50%      { box-shadow: 0 0 0 6px rgba(127,227,179,0); }
}

.sidebar-new-btn {
  margin: 20px 20px 0;
  display: flex; align-items: center; gap: 10px;
  background: var(--dark); color: var(--mint);
  border: none; border-radius: 14px;
  padding: 14px 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem; font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
  width: calc(100% - 40px);
}
.sidebar-new-btn:hover { background: #1e5c3a; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(15,46,34,0.2); }
.sidebar-new-btn svg { flex-shrink: 0; }

/* mini calendar */
.mini-cal {
  padding: 20px;
}
.mini-cal-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 12px;
}
.mini-cal-title { font-size: 0.82rem; font-weight: 700; }
.mini-cal-nav {
  display: flex; gap: 4px;
}
.mini-cal-nav button {
  width: 24px; height: 24px;
  border: none; background: none;
  border-radius: 50%; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; color: var(--muted);
  transition: background 0.2s;
}
.mini-cal-nav button:hover { background: var(--cream); }

.mini-cal-days {
  display: grid; grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}
.mini-day-head {
  text-align: center;
  font-size: 0.6rem; font-weight: 700;
  color: var(--muted);
  padding: 4px 0;
  text-transform: uppercase;
}
.mini-day {
  text-align: center;
  font-size: 0.72rem; font-weight: 500;
  padding: 5px 2px;
  border-radius: 50%;
  cursor: pointer;
  color: var(--muted);
  transition: all 0.15s;
  aspect-ratio: 1;
  display: flex; align-items: center; justify-content: center;
}
.mini-day:hover { background: var(--cream); color: var(--dark); }
.mini-day.today {
  background: var(--dark); color: var(--mint);
  font-weight: 700;
}
.mini-day.selected { background: var(--mint); color: var(--dark); font-weight: 700; }
.mini-day.other-month { opacity: 0.3; }
.mini-day.has-event::after {
  content: '';
  display: block;
  width: 4px; height: 4px; border-radius: 50%;
  background: var(--mint);
  margin: 1px auto 0;
}

/* sport filters */
.sidebar-section {
  padding: 16px 20px 8px;
}
.sidebar-section-title {
  font-size: 0.62rem; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 10px;
}
.sport-filter {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px;
  cursor: pointer; margin-bottom: 2px;
  transition: background 0.15s;
}
.sport-filter:hover { background: var(--cream); }
.sport-filter input[type=checkbox] { display: none; }
.sf-dot {
  width: 12px; height: 12px; border-radius: 50%;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.sport-filter:hover .sf-dot { transform: scale(1.2); }
.sf-label { font-size: 0.8rem; font-weight: 500; flex: 1; }
.sf-count {
  font-size: 0.65rem; font-weight: 700;
  color: var(--muted);
  background: var(--cream);
  padding: 2px 8px; border-radius: 99px;
}

/* members availability */
.member-avail {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px;
  cursor: pointer; margin-bottom: 4px;
  transition: background 0.15s;
}
.member-avail:hover { background: var(--cream); }
.ma-avatar {
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.65rem; font-weight: 700; color: #fff;
  flex-shrink: 0;
}
.ma-name { font-size: 0.78rem; font-weight: 500; flex: 1; }
.ma-status {
  width: 8px; height: 8px; border-radius: 50%;
  flex-shrink: 0;
}
.ma-status.online  { background: #22c55e; }
.ma-status.busy    { background: #f59e0b; }
.ma-status.offline { background: #d1d5db; }

/* ══ MAIN CALENDAR ══ */
.cal-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--white);
}

/* top bar */
.cal-topbar {
  display: flex; align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border);
  gap: 16px;
  flex-shrink: 0;
}
.cal-nav-group {
  display: flex; align-items: center; gap: 8px;
}
.cal-nav-btn {
  width: 34px; height: 34px;
  border: 1px solid var(--border);
  background: none; border-radius: 50%;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: var(--muted); font-size: 0.9rem;
  transition: all 0.2s;
}
.cal-nav-btn:hover { background: var(--cream); color: var(--dark); border-color: rgba(15,46,34,0.2); }

.cal-today-btn {
  padding: 7px 16px;
  border: 1px solid var(--border);
  background: none; border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem; font-weight: 500;
  cursor: pointer; color: var(--dark);
  transition: all 0.2s;
}
.cal-today-btn:hover { background: var(--cream); }

.cal-period-title {
  font-size: 1.05rem; font-weight: 700;
  letter-spacing: -0.01em;
  flex: 1;
}

.cal-view-tabs {
  display: flex;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}
.cal-view-tab {
  padding: 7px 14px;
  border: none; background: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem; font-weight: 500;
  cursor: pointer; color: var(--muted);
  transition: all 0.2s;
}
.cal-view-tab.active {
  background: var(--dark); color: var(--mint);
}

/* day headers */
.cal-day-headers {
  display: grid;
  grid-template-columns: 56px repeat(7, 1fr);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.cal-day-header {
  padding: 10px 8px;
  text-align: center;
  border-right: 1px solid var(--border);
}
.cal-day-header:last-child { border-right: none; }
.cdh-day-name {
  font-size: 0.68rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--muted);
}
.cdh-day-num {
  font-size: 1.3rem; font-weight: 800;
  letter-spacing: -0.02em;
  margin-top: 2px;
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 2px auto 0;
  transition: background 0.2s;
}
.cdh-day-num.today {
  background: var(--dark); color: var(--mint);
}
.cdh-day-num.selected { background: var(--mint); color: var(--dark); }

/* time grid */
.cal-grid-wrap {
  flex: 1;
  overflow-y: auto;
  position: relative;
}
.cal-grid {
  display: grid;
  grid-template-columns: 56px repeat(7, 1fr);
  position: relative;
}

.cal-time-gutter {
  grid-column: 1;
}
.time-label {
  height: 60px;
  display: flex; align-items: flex-start;
  justify-content: flex-end;
  padding: 0 8px;
  font-size: 0.62rem; font-weight: 500;
  color: var(--muted);
  position: relative;
  top: -8px;
}

.cal-day-col {
  border-right: 1px solid var(--border);
  position: relative;
  cursor: pointer;
}
.cal-day-col:last-child { border-right: none; }

.cal-hour-cell {
  height: 60px;
  border-bottom: 1px solid var(--border);
  position: relative;
  transition: background 0.15s;
}
.cal-hour-cell:hover { background: rgba(127,227,179,0.05); }
.cal-hour-cell.half { border-bottom: 1px dashed rgba(15,46,34,0.05); }

/* current time line */
.time-now-line {
  position: absolute;
  left: 0; right: 0;
  height: 2px;
  background: #ef4444;
  z-index: 10;
  pointer-events: none;
}
.time-now-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: #ef4444;
  position: absolute; left: -5px; top: -4px;
}

/* ══ EVENTS ══ */
.cal-event {
  position: absolute;
  left: 3px; right: 3px;
  border-radius: 8px;
  padding: 5px 8px;
  cursor: pointer;
  z-index: 5;
  overflow: hidden;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}
.cal-event:hover { filter: brightness(1.05); transform: scale(1.01); box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
.cal-event-title { font-size: 0.72rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cal-event-sub   { font-size: 0.62rem; opacity: 0.8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cal-event-icon  { font-size: 0.75rem; margin-bottom: 2px; }

/* sport color themes */
.ev-padel    { background: rgba(127,227,179,0.25); border-color: var(--padel);    color: #065f46; }
.ev-football { background: rgba(255,236,109,0.35); border-color: var(--football); color: #713f12; }
.ev-running  { background: rgba(255,140,105,0.25); border-color: var(--running);  color: #7c2d12; }
.ev-tennis   { background: rgba(167,139,250,0.25); border-color: var(--tennis);   color: #4c1d95; }
.ev-basket   { background: rgba(96,165,250,0.25);  border-color: var(--basket);   color: #1e3a5f; }

/* ══ MODAL — nouveau match ══ */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(15,46,34,0.35);
  backdrop-filter: blur(6px);
  z-index: 100;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s;
}
.modal-overlay.open { opacity: 1; pointer-events: auto; }

.modal {
  background: var(--white);
  border-radius: 24px;
  padding: 36px;
  width: 100%; max-width: 460px;
  box-shadow: 0 24px 80px rgba(15,46,34,0.2);
  transform: translateY(20px) scale(0.97);
  transition: transform 0.3s;
}
.modal-overlay.open .modal { transform: translateY(0) scale(1); }

.modal-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 28px;
}
.modal-title { font-size: 1.1rem; font-weight: 800; letter-spacing: -0.02em; }
.modal-close {
  width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid var(--border);
  background: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; color: var(--muted);
  transition: all 0.2s;
}
.modal-close:hover { background: var(--cream); color: var(--dark); }

.form-group { margin-bottom: 18px; }
.form-label {
  display: block;
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 8px;
}
.form-input, .form-select {
  width: 100%; padding: 12px 16px;
  border: 1.5px solid var(--border);
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem; font-weight: 400;
  color: var(--dark);
  background: var(--cream);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}
.form-input:focus, .form-select:focus {
  border-color: var(--mint);
  box-shadow: 0 0 0 3px rgba(127,227,179,0.2);
  background: var(--white);
}

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* sport picker */
.sport-picker {
  display: grid; grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
.sport-pick-btn {
  display: flex; flex-direction: column; align-items: center;
  gap: 5px; padding: 10px 4px;
  border: 1.5px solid var(--border);
  border-radius: 12px; cursor: pointer;
  background: var(--cream);
  transition: all 0.2s;
  font-size: 1.2rem;
}
.sport-pick-btn span {
  font-size: 0.58rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--muted);
}
.sport-pick-btn.active { border-color: var(--dark); background: var(--dark); }
.sport-pick-btn.active span { color: var(--mint); }

/* participants */
.participants-row {
  display: flex; flex-wrap: wrap; gap: 8px;
}
.participant-chip {
  display: flex; align-items: center; gap: 6px;
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 99px;
  padding: 5px 12px 5px 6px;
  font-size: 0.72rem; font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.participant-chip.selected {
  background: rgba(127,227,179,0.2);
  border-color: var(--mint);
}
.pc-avatar {
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.55rem; font-weight: 700; color: #fff;
  flex-shrink: 0;
}

.modal-actions {
  display: flex; gap: 10px; margin-top: 28px;
}
.modal-btn-cancel {
  flex: 1; padding: 13px;
  border: 1.5px solid var(--border);
  border-radius: 12px; background: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem; font-weight: 500;
  cursor: pointer; color: var(--muted);
  transition: all 0.2s;
}
.modal-btn-cancel:hover { border-color: var(--dark); color: var(--dark); }
.modal-btn-save {
  flex: 2; padding: 13px;
  border: none; border-radius: 12px;
  background: var(--dark); color: var(--mint);
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem; font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.modal-btn-save:hover { background: #1e5c3a; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(15,46,34,0.22); }

/* event detail popup */
.event-popup {
  position: fixed;
  background: var(--white);
  border-radius: 18px;
  padding: 20px 22px;
  min-width: 240px; max-width: 300px;
  box-shadow: 0 8px 40px rgba(15,46,34,0.18);
  z-index: 50;
  border: 1px solid var(--border);
  opacity: 0; pointer-events: none;
  transform: scale(0.95) translateY(8px);
  transition: all 0.2s;
}
.event-popup.open { opacity: 1; pointer-events: auto; transform: scale(1) translateY(0); }

.ep-sport-bar { height: 4px; border-radius: 99px; margin-bottom: 14px; }
.ep-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 4px; }
.ep-time  { font-size: 0.75rem; color: var(--muted); margin-bottom: 12px; display: flex; align-items: center; gap: 5px; }
.ep-members {
  display: flex; margin-bottom: 12px;
}
.ep-member-av {
  width: 26px; height: 26px; border-radius: 50%;
  border: 2px solid var(--white);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.6rem; font-weight: 700; color: #fff;
  margin-left: -8px;
}
.ep-member-av:first-child { margin-left: 0; }
.ep-spots {
  font-size: 0.72rem; font-weight: 600;
  color: var(--muted); margin-bottom: 14px;
}
.ep-join-btn {
  width: 100%; padding: 10px;
  background: var(--dark); color: var(--mint);
  border: none; border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
.ep-join-btn:hover { background: #1e5c3a; }
.ep-close {
  position: absolute; top: 12px; right: 12px;
  width: 24px; height: 24px; border-radius: 50%;
  border: none; background: var(--cream);
  cursor: pointer; font-size: 0.8rem; color: var(--muted);
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.ep-close:hover { background: var(--border); }

/* toast notification */
.toast {
  position: fixed;
  bottom: 24px; right: 24px;
  background: var(--dark); color: var(--mint);
  border-radius: 14px;
  padding: 14px 20px;
  font-size: 0.82rem; font-weight: 600;
  display: flex; align-items: center; gap: 10px;
  box-shadow: 0 8px 30px rgba(15,46,34,0.25);
  z-index: 200;
  transform: translateY(80px);
  transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
}
.toast.show { transform: translateY(0); }

/* embed mode for landing integration */
body.embed-mode {
  background: transparent;
  min-height: 0;
}
body.embed-mode .app-shell {
  height: 520px;
  border: 0;
}
body.embed-mode .sidebar,
body.embed-mode .toast,
body.embed-mode .modal-overlay,
body.embed-mode .event-popup { display: none !important; }
body.embed-mode .cal-main {
  border: none;
}
body.embed-mode .cal-topbar {
  padding: 12px 16px;
}
body.embed-mode .time-col { width: 54px; }
body.embed-mode .cal-grid-wrap { padding-right: 8px; }

</style>
</head>
<body>

<div class="app-shell">

  <!-- ══ SIDEBAR ══ -->
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-dot"></div>
      Hub2gether
    </div>

    <button class="sidebar-new-btn" id="newEventBtn">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      Nouveau match
    </button>

    <!-- mini calendrier -->
    <div class="mini-cal">
      <div class="mini-cal-header">
        <span class="mini-cal-title" id="miniCalTitle"></span>
        <div class="mini-cal-nav">
          <button id="miniPrev">‹</button>
          <button id="miniNext">›</button>
        </div>
      </div>
      <div class="mini-cal-days" id="miniCalDays"></div>
    </div>

    <!-- filtres sports -->
    <div class="sidebar-section">
      <div class="sidebar-section-title">Sports</div>
      <label class="sport-filter" data-sport="padel">
        <input type="checkbox" checked>
        <div class="sf-dot" style="background:var(--padel)"></div>
        <span class="sf-label">Padel</span>
        <span class="sf-count">3</span>
      </label>
      <label class="sport-filter" data-sport="football">
        <input type="checkbox" checked>
        <div class="sf-dot" style="background:var(--football)"></div>
        <span class="sf-label">Football</span>
        <span class="sf-count">2</span>
      </label>
      <label class="sport-filter" data-sport="running">
        <input type="checkbox" checked>
        <div class="sf-dot" style="background:var(--running)"></div>
        <span class="sf-label">Running</span>
        <span class="sf-count">2</span>
      </label>
      <label class="sport-filter" data-sport="tennis">
        <input type="checkbox" checked>
        <div class="sf-dot" style="background:var(--tennis)"></div>
        <span class="sf-label">Tennis</span>
        <span class="sf-count">1</span>
      </label>
      <label class="sport-filter" data-sport="basket">
        <input type="checkbox" checked>
        <div class="sf-dot" style="background:var(--basket)"></div>
        <span class="sf-label">Basket</span>
        <span class="sf-count">1</span>
      </label>
    </div>

    <!-- disponibilités collègues -->
    <div class="sidebar-section">
      <div class="sidebar-section-title">Disponibilités collègues</div>
      <div class="member-avail">
        <div class="ma-avatar" style="background:linear-gradient(135deg,#0F2E22,#1e5c3a)">MD</div>
        <span class="ma-name">Marc Dubois</span>
        <div class="ma-status online"></div>
      </div>
      <div class="member-avail">
        <div class="ma-avatar" style="background:linear-gradient(135deg,#7a5f00,#FFEC6D);color:#0F2E22">SL</div>
        <span class="ma-name">Sophie Laurent</span>
        <div class="ma-status busy"></div>
      </div>
      <div class="member-avail">
        <div class="ma-avatar" style="background:linear-gradient(135deg,#1e3a5f,#60A5FA)">AM</div>
        <span class="ma-name">Antoine Moreau</span>
        <div class="ma-status online"></div>
      </div>
      <div class="member-avail">
        <div class="ma-avatar" style="background:linear-gradient(135deg,#4c1d95,#A78BFA)">CB</div>
        <span class="ma-name">Claire Bernard</span>
        <div class="ma-status offline"></div>
      </div>
      <div class="member-avail">
        <div class="ma-avatar" style="background:linear-gradient(135deg,#7c2d12,#FF8C69)">TR</div>
        <span class="ma-name">Thomas Renard</span>
        <div class="ma-status online"></div>
      </div>
    </div>
  </aside>

  <!-- ══ CALENDAR MAIN ══ -->
  <main class="cal-main">
    <!-- topbar -->
    <div class="cal-topbar">
      <div class="cal-nav-group">
        <button class="cal-nav-btn" id="prevWeek">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="cal-nav-btn" id="nextWeek">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <button class="cal-today-btn" id="todayBtn">Aujourd'hui</button>
      <span class="cal-period-title" id="periodTitle"></span>
      <div class="cal-view-tabs">
        <button class="cal-view-tab active">Semaine</button>
        <button class="cal-view-tab">Mois</button>
        <button class="cal-view-tab">Agenda</button>
      </div>
    </div>

    <!-- day headers -->
    <div class="cal-day-headers" id="dayHeaders">
      <div></div>
    </div>

    <!-- time grid -->
    <div class="cal-grid-wrap" id="calGridWrap">
      <div class="cal-grid" id="calGrid"></div>
    </div>
  </main>
</div>

<!-- ══ MODAL nouveau match ══ -->
<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
    <div class="modal-header">
      <span class="modal-title">Organiser un match</span>
      <button class="modal-close" id="modalClose">✕</button>
    </div>

    <div class="form-group">
      <label class="form-label">Nom du match</label>
      <input class="form-input" id="eventTitle" placeholder="Ex: Padel après le boulot" type="text">
    </div>

    <div class="form-group">
      <label class="form-label">Sport</label>
      <div class="sport-picker" id="sportPicker">
        <button class="sport-pick-btn active" data-sport="padel" data-color="padel">🎾<span>Padel</span></button>
        <button class="sport-pick-btn" data-sport="football" data-color="football">⚽<span>Foot</span></button>
        <button class="sport-pick-btn" data-sport="running" data-color="running">🏃<span>Run</span></button>
        <button class="sport-pick-btn" data-sport="tennis" data-color="tennis">🎾<span>Tennis</span></button>
        <button class="sport-pick-btn" data-sport="basket" data-color="basket">🏀<span>Basket</span></button>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Date</label>
        <input class="form-input" id="eventDate" type="date">
      </div>
      <div class="form-group">
        <label class="form-label">Heure</label>
        <input class="form-input" id="eventTime" type="time" value="18:00">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Durée</label>
        <select class="form-select" id="eventDuration">
          <option value="60">1 heure</option>
          <option value="90" selected>1h30</option>
          <option value="120">2 heures</option>
          <option value="30">30 min</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Lieu</label>
        <input class="form-input" id="eventLocation" placeholder="Salle / terrain" type="text">
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Inviter des collègues</label>
      <div class="participants-row" id="participantsRow">
        <div class="participant-chip selected" data-name="Marc Dubois">
          <div class="pc-avatar" style="background:linear-gradient(135deg,#0F2E22,#1e5c3a)">MD</div>
          Marc D.
        </div>
        <div class="participant-chip" data-name="Sophie Laurent">
          <div class="pc-avatar" style="background:linear-gradient(135deg,#7a5f00,#FFEC6D);color:#0F2E22">SL</div>
          Sophie L.
        </div>
        <div class="participant-chip" data-name="Antoine Moreau">
          <div class="pc-avatar" style="background:linear-gradient(135deg,#1e3a5f,#60A5FA)">AM</div>
          Antoine M.
        </div>
        <div class="participant-chip" data-name="Claire Bernard">
          <div class="pc-avatar" style="background:linear-gradient(135deg,#4c1d95,#A78BFA)">CB</div>
          Claire B.
        </div>
        <div class="participant-chip" data-name="Thomas Renard">
          <div class="pc-avatar" style="background:linear-gradient(135deg,#7c2d12,#FF8C69)">TR</div>
          Thomas R.
        </div>
      </div>
    </div>

    <div class="modal-actions">
      <button class="modal-btn-cancel" id="modalCancel">Annuler</button>
      <button class="modal-btn-save" id="modalSave">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Créer le match
      </button>
    </div>
  </div>
</div>

<!-- ══ EVENT DETAIL POPUP ══ -->
<div class="event-popup" id="eventPopup">
  <button class="ep-close" id="epClose">✕</button>
  <div class="ep-sport-bar" id="epBar"></div>
  <div class="ep-title" id="epTitle"></div>
  <div class="ep-time" id="epTime"></div>
  <div class="ep-members" id="epMembers"></div>
  <div class="ep-spots" id="epSpots"></div>
  <button class="ep-join-btn" id="epJoin">Rejoindre le match</button>
</div>

<!-- Toast -->
<div class="toast" id="toast">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <span id="toastMsg"></span>
</div>

<script>
var EMBED_MODE = new URLSearchParams(window.location.search).get('embed') === '1';
if (EMBED_MODE) document.body.classList.add('embed-mode');
</script>

<script>
// ══════════════════════════════════════════
//   DATA
// ══════════════════════════════════════════
var SPORTS = {
  padel:    { icon: '🎾', label: 'Padel',    color: '#7FE3B3', cls: 'ev-padel' },
  football: { icon: '⚽', label: 'Football', color: '#FFEC6D', cls: 'ev-football' },
  running:  { icon: '🏃', label: 'Running',  color: '#FF8C69', cls: 'ev-running' },
  tennis:   { icon: '🎾', label: 'Tennis',   color: '#A78BFA', cls: 'ev-tennis' },
  basket:   { icon: '🏀', label: 'Basket',   color: '#60A5FA', cls: 'ev-basket' }
};

var MEMBERS = [
  { id:'MD', name:'Marc Dubois',    bg:'linear-gradient(135deg,#0F2E22,#1e5c3a)', color:'#fff' },
  { id:'SL', name:'Sophie Laurent', bg:'linear-gradient(135deg,#7a5f00,#FFEC6D)', color:'#0F2E22' },
  { id:'AM', name:'Antoine Moreau', bg:'linear-gradient(135deg,#1e3a5f,#60A5FA)', color:'#fff' },
  { id:'CB', name:'Claire Bernard', bg:'linear-gradient(135deg,#4c1d95,#A78BFA)', color:'#fff' },
  { id:'TR', name:'Thomas Renard',  bg:'linear-gradient(135deg,#7c2d12,#FF8C69)', color:'#fff' }
];

// Offset en jours depuis aujourd'hui
var now = new Date();
function daysFromNow(d) {
  var t = new Date(now); t.setDate(t.getDate() + d);
  return t;
}

var EVENTS = [
  { id:1, title:'Padel Match',         sport:'padel',    day:0, startH:12, startM:0,  dur:90,  loc:'Padel Club XV',   members:['MD','AM','TR'] },
  { id:2, title:'Foot 5v5',            sport:'football', day:1, startH:18, startM:30, dur:60,  loc:'Gymnase Arago',   members:['MD','SL','AM','CB','TR'] },
  { id:3, title:'Morning Run',         sport:'running',  day:2, startH:7,  startM:30, dur:45,  loc:'Bois de Boulogne',members:['SL','CB'] },
  { id:4, title:'Tennis doubles',      sport:'tennis',   day:2, startH:19, startM:0,  dur:90,  loc:'Roland Garros',   members:['MD','CB'] },
  { id:5, title:'Padel tournoi',       sport:'padel',    day:3, startH:14, startM:0,  dur:180, loc:'Padel Factory',   members:['MD','AM','TR','SL'] },
  { id:6, title:'Basket 3v3',          sport:'basket',   day:4, startH:13, startM:0,  dur:60,  loc:'Gymnase Nation',  members:['AM','TR'] },
  { id:7, title:'Foot entraînement',   sport:'football', day:4, startH:18, startM:0,  dur:90,  loc:'Stade Charléty',  members:['MD','AM'] },
  { id:8, title:'Run du jeudi',        sport:'running',  day:3, startH:12, startM:30, dur:30,  loc:'Parc Montsouris', members:['SL','CB','TR'] },
  { id:9, title:'Padel vendredi',      sport:'padel',    day:5, startH:17, startM:30, dur:90,  loc:'Padel Club XV',   members:['MD','TR'] }
];

// ══════════════════════════════════════════
//   STATE
// ══════════════════════════════════════════
var weekOffset   = 0;
var selectedSport = null;  // sport actif dans le modal
var eventsList    = EVENTS.map(function(e) { return Object.assign({}, e); });
var nextId        = 100;

// ══════════════════════════════════════════
//   HELPERS
// ══════════════════════════════════════════
var DAYS_FR  = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
var MONTHS_FR= ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

function getWeekStart(offset) {
  var d = new Date(now);
  var day = d.getDay(); // 0=sun
  var diff = (day === 0) ? -6 : 1 - day; // monday
  d.setDate(d.getDate() + diff + offset * 7);
  d.setHours(0,0,0,0);
  return d;
}

function formatDate(d) {
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

function isSameDay(a, b) {
  return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
}

// ══════════════════════════════════════════
//   MINI CALENDAR
// ══════════════════════════════════════════
var miniOffset = 0;

function renderMiniCal() {
  var d = new Date(now.getFullYear(), now.getMonth() + miniOffset, 1);
  var title = MONTHS_FR[d.getMonth()] + ' ' + d.getFullYear();
  document.getElementById('miniCalTitle').textContent = title;

  var firstDay = d.getDay() === 0 ? 6 : d.getDay() - 1; // Mon=0
  var daysInMonth = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();

  var html = '';
  var heads = ['L','M','M','J','V','S','D'];
  heads.forEach(function(h) { html += '<div class="mini-day-head">' + h + '</div>'; });

  for (var i = 0; i < firstDay; i++) {
    var pd = new Date(d.getFullYear(), d.getMonth(), -firstDay + i + 1);
    html += '<div class="mini-day other-month">' + pd.getDate() + '</div>';
  }

  var todayStr = formatDate(now);
  for (var day = 1; day <= daysInMonth; day++) {
    var dd = new Date(d.getFullYear(), d.getMonth(), day);
    var cls = 'mini-day';
    if (formatDate(dd) === todayStr) cls += ' today';
    // check events on this day
    var weekStart = getWeekStart(weekOffset);
    for (var wi = 0; wi < 7; wi++) {
      var wd = new Date(weekStart); wd.setDate(wd.getDate() + wi);
      if (isSameDay(wd, dd)) { cls += ' selected'; break; }
    }
    html += '<div class="' + cls + '">' + day + '</div>';
  }
  document.getElementById('miniCalDays').innerHTML = html;
}

document.getElementById('miniPrev').addEventListener('click', function() { miniOffset--; renderMiniCal(); });
document.getElementById('miniNext').addEventListener('click', function() { miniOffset++; renderMiniCal(); });

// ══════════════════════════════════════════
//   MAIN CALENDAR RENDER
// ══════════════════════════════════════════
var HOUR_START = 7;
var HOUR_END   = 22;
var HOUR_HEIGHT = 60; // px

function renderCalendar() {
  var weekStart = getWeekStart(weekOffset);
  var weekEnd   = new Date(weekStart); weekEnd.setDate(weekEnd.getDate() + 6);

  // period title
  var s = weekStart, e = weekEnd;
  var title = s.getDate() + ' ' + MONTHS_FR[s.getMonth()].slice(0,4) + ' — ' +
              e.getDate() + ' ' + MONTHS_FR[e.getMonth()].slice(0,4) + ' ' + e.getFullYear();
  document.getElementById('periodTitle').textContent = title;

  // day headers
  var hdHtml = '<div></div>';
  for (var d = 0; d < 7; d++) {
    var dd = new Date(weekStart); dd.setDate(dd.getDate() + d);
    var isToday = isSameDay(dd, now);
    var numCls  = 'cdh-day-num' + (isToday ? ' today' : '');
    hdHtml += '<div class="cal-day-header">' +
              '<div class="cdh-day-name">' + DAYS_FR[dd.getDay()] + '</div>' +
              '<div class="' + numCls + '">' + dd.getDate() + '</div>' +
              '</div>';
  }
  document.getElementById('dayHeaders').innerHTML = hdHtml;

  // grid
  var gridHtml = '';

  // time gutter
  gridHtml += '<div class="cal-time-gutter">';
  for (var h = HOUR_START; h <= HOUR_END; h++) {
    gridHtml += '<div class="time-label">' + String(h).padStart(2,'0') + ':00</div>';
  }
  gridHtml += '</div>';

  // day columns
  for (var di = 0; di < 7; di++) {
    var dayDate = new Date(weekStart); dayDate.setDate(dayDate.getDate() + di);
    var dayStr  = formatDate(dayDate);

    gridHtml += '<div class="cal-day-col" data-day="' + di + '" data-date="' + dayStr + '">';

    // hour cells
    for (var hr = HOUR_START; hr <= HOUR_END; hr++) {
      gridHtml += '<div class="cal-hour-cell" data-hour="' + hr + '"></div>';
    }

    // events
    var dayEvents = eventsList.filter(function(ev) {
      var evDate = new Date(now); evDate.setDate(evDate.getDate() + ev.day - (now.getDay()===0?6:now.getDay()-1) + weekOffset*7);
      evDate.setHours(0,0,0,0);
      return isSameDay(evDate, dayDate);
    });

    dayEvents.forEach(function(ev) {
      var top    = (ev.startH - HOUR_START + ev.startM/60) * HOUR_HEIGHT;
      var height = (ev.dur / 60) * HOUR_HEIGHT;
      var sport  = SPORTS[ev.sport] || SPORTS.padel;
      gridHtml += '<div class="cal-event ' + sport.cls + '" ' +
                  'style="top:' + top + 'px; height:' + Math.max(height,28) + 'px;" ' +
                  'data-evid="' + ev.id + '">' +
                  '<div class="cal-event-icon">' + sport.icon + '</div>' +
                  '<div class="cal-event-title">' + ev.title + '</div>' +
                  (height > 40 ? '<div class="cal-event-sub">' + String(ev.startH).padStart(2,'0') + ':' + String(ev.startM).padStart(2,'0') + ' · ' + ev.loc + '</div>' : '') +
                  '</div>';
    });

    gridHtml += '</div>';
  }

  document.getElementById('calGrid').innerHTML = gridHtml;

  // current time line
  if (weekOffset === 0) {
    var todayCol = now.getDay() === 0 ? 6 : now.getDay() - 1;
    var mins     = now.getHours() * 60 + now.getMinutes();
    var topPx    = (mins - HOUR_START * 60) / 60 * HOUR_HEIGHT;
    if (topPx >= 0) {
      var cols = document.querySelectorAll('.cal-day-col');
      if (cols[todayCol]) {
        var line = document.createElement('div');
        line.className = 'time-now-line';
        line.style.top = topPx + 'px';
        line.innerHTML = '<div class="time-now-dot"></div>';
        cols[todayCol].appendChild(line);
      }
    }
  }

  // scroll to 8am
  var wrap = document.getElementById('calGridWrap');
  wrap.scrollTop = (8 - HOUR_START) * HOUR_HEIGHT;

  // attach event click
  document.querySelectorAll('.cal-event').forEach(function(el) {
    el.addEventListener('click', function(e) { e.stopPropagation(); showEventPopup(this); });
  });

  // click on cell to open modal
  document.querySelectorAll('.cal-day-col').forEach(function(col) {
    col.addEventListener('click', function(e) {
      if (e.target.classList.contains('cal-event') || e.target.closest('.cal-event')) return;
      var date = col.getAttribute('data-date');
      var cellEl = e.target.closest('.cal-hour-cell');
      var hour   = cellEl ? parseInt(cellEl.getAttribute('data-hour')) : 12;
      openModal(date, hour);
    });
  });

  renderMiniCal();
}

// ══════════════════════════════════════════
//   MODAL
// ══════════════════════════════════════════
selectedSport = 'padel';

function openModal(dateStr, hour) {
  var inp = document.getElementById('eventDate');
  if (dateStr) inp.value = dateStr;
  else inp.value = formatDate(now);
  document.getElementById('eventTime').value = String(hour||18).padStart(2,'0') + ':00';
  document.getElementById('eventTitle').value = '';
  document.getElementById('eventLocation').value = '';
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

document.getElementById('newEventBtn').addEventListener('click', function() { openModal(null,18); });
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalCancel').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// sport picker
document.querySelectorAll('.sport-pick-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.sport-pick-btn').forEach(function(b) { b.classList.remove('active'); });
    this.classList.add('active');
    selectedSport = this.getAttribute('data-sport');
  });
});

// participants
document.querySelectorAll('.participant-chip').forEach(function(chip) {
  chip.addEventListener('click', function() { this.classList.toggle('selected'); });
});

// save
document.getElementById('modalSave').addEventListener('click', function() {
  var title    = document.getElementById('eventTitle').value.trim();
  var dateStr  = document.getElementById('eventDate').value;
  var timeStr  = document.getElementById('eventTime').value;
  var duration = parseInt(document.getElementById('eventDuration').value);
  var loc      = document.getElementById('eventLocation').value.trim();

  if (!title) { document.getElementById('eventTitle').focus(); return; }
  if (!dateStr) return;

  var parts  = dateStr.split('-');
  var evDate = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
  evDate.setHours(0,0,0,0);

  var base = new Date(now); base.setHours(0,0,0,0);
  var diffDays = Math.round((evDate - base) / 86400000);
  var curDay   = now.getDay() === 0 ? 6 : now.getDay() - 1;
  var dayIdx   = diffDays + curDay - weekOffset * 7;

  var tParts = timeStr.split(':');
  var sh = parseInt(tParts[0]), sm = parseInt(tParts[1]||0);

  var members = [];
  document.querySelectorAll('.participant-chip.selected').forEach(function(c) {
    var n = c.getAttribute('data-name');
    var m = MEMBERS.find(function(x) { return x.name === n; });
    if (m) members.push(m.id);
  });

  eventsList.push({
    id: nextId++,
    title: title,
    sport: selectedSport || 'padel',
    day: dayIdx,
    startH: sh,
    startM: sm,
    dur: duration,
    loc: loc || 'À définir',
    members: members
  });

  closeModal();
  renderCalendar();
  showToast('✅ Match "' + title + '" créé !');
});

// ══════════════════════════════════════════
//   EVENT POPUP
// ══════════════════════════════════════════
function showEventPopup(el) {
  var evid  = parseInt(el.getAttribute('data-evid'));
  var ev    = eventsList.find(function(e) { return e.id === evid; });
  if (!ev) return;
  var sport = SPORTS[ev.sport] || SPORTS.padel;

  document.getElementById('epBar').style.background = sport.color;
  document.getElementById('epTitle').textContent    = ev.title;
  document.getElementById('epTime').innerHTML =
    '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>' +
    String(ev.startH).padStart(2,'0') + ':' + String(ev.startM).padStart(2,'0') +
    ' · ' + ev.dur + ' min · ' + ev.loc;

  var mhtml = '';
  ev.members.forEach(function(mid) {
    var m = MEMBERS.find(function(x) { return x.id === mid; });
    if (m) mhtml += '<div class="ep-member-av" style="background:' + m.bg + ';color:' + m.color + '">' + m.id + '</div>';
  });
  document.getElementById('epMembers').innerHTML = mhtml;
  document.getElementById('epSpots').textContent = ev.members.length + ' participants · ' + Math.max(0, 6 - ev.members.length) + ' places restantes';

  var rect   = el.getBoundingClientRect();
  var popup  = document.getElementById('eventPopup');
  var left   = rect.right + 8;
  var top    = rect.top;
  if (left + 300 > window.innerWidth) left = rect.left - 300 - 8;
  if (top + 260 > window.innerHeight) top  = window.innerHeight - 270;

  popup.style.left = left + 'px';
  popup.style.top  = top  + 'px';
  popup.classList.add('open');
}

document.getElementById('epClose').addEventListener('click', function() {
  document.getElementById('eventPopup').classList.remove('open');
});
document.getElementById('epJoin').addEventListener('click', function() {
  document.getElementById('eventPopup').classList.remove('open');
  showToast('🎾 Vous avez rejoint le match !');
});
document.addEventListener('click', function(e) {
  var pop = document.getElementById('eventPopup');
  if (pop.classList.contains('open') && !pop.contains(e.target) && !e.target.closest('.cal-event')) {
    pop.classList.remove('open');
  }
});

// ══════════════════════════════════════════
//   NAVIGATION
// ══════════════════════════════════════════
document.getElementById('prevWeek').addEventListener('click', function() { weekOffset--; renderCalendar(); });
document.getElementById('nextWeek').addEventListener('click', function() { weekOffset++; renderCalendar(); });
document.getElementById('todayBtn').addEventListener('click', function() { weekOffset = 0; renderCalendar(); });

// ══════════════════════════════════════════
//   TOAST
// ══════════════════════════════════════════
function showToast(msg) {
  var t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 3200);
}

// ══ INIT ══
renderCalendar();
</script>
</body>
</html>
```

---

## hub2gether-hero-zoom.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hub2gether — Hero + App Preview</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Poppins', sans-serif;
  background: #F7F8F4;
  color: #0F2E22;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
:root {
  --dark:   #0F2E22;
  --mint:   #7FE3B3;
  --yellow: #FFEC6D;
  --cream:  #F7F8F4;
  --white:  #FFFFFF;
}

/* ══════════════════════════════════════════
   HERO NORMAL (intro au-dessus)
══════════════════════════════════════════ */
.hero-intro {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 6vw 60px;
  text-align: center;
  position: relative;
  background: var(--cream);
  overflow: hidden;
}

.hero-intro::before {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(15,46,34,0.06) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
}

.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(127,227,179,0.15);
  border: 1px solid rgba(127,227,179,0.4);
  border-radius: 99px;
  padding: 7px 20px;
  font-size: 0.7rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: #0a6640;
  margin-bottom: 30px;
  animation: fadeUp 0.7s ease both;
}
.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%; background: var(--mint);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(127,227,179,0.5); }
  50%      { box-shadow: 0 0 0 6px rgba(127,227,179,0); }
}

.hero-intro h1 {
  font-size: clamp(3rem, 6.5vw, 6rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.04em;
  max-width: 900px;
  animation: fadeUp 0.7s ease 0.1s both;
}
.hero-intro h1 em {
  font-style: normal;
  position: relative; display: inline-block; z-index: 0;
}
.hero-intro h1 em::after {
  content: '';
  position: absolute; left: -3px; right: -3px; bottom: 8px;
  height: 14px; background: var(--yellow);
  z-index: -1; border-radius: 5px;
}

.hero-sub {
  font-size: 1.05rem; font-weight: 400;
  color: rgba(15,46,34,0.5);
  line-height: 1.85; max-width: 520px;
  margin: 24px auto 44px;
  animation: fadeUp 0.7s ease 0.2s both;
}

.hero-btns {
  display: flex; gap: 14px; justify-content: center;
  flex-wrap: wrap;
  animation: fadeUp 0.7s ease 0.3s both;
}
.btn-p {
  background: var(--dark); color: var(--mint);
  border: none; border-radius: 99px;
  padding: 16px 34px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem; font-weight: 600;
  cursor: pointer;
  display: inline-flex; align-items: center; gap: 9px;
  transition: all 0.25s;
  box-shadow: 0 4px 24px rgba(15,46,34,0.18);
}
.btn-p:hover { background: #1e5c3a; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(15,46,34,0.28); }
.btn-s {
  background: transparent; color: var(--dark);
  border: 1.5px solid rgba(15,46,34,0.2);
  border-radius: 99px;
  padding: 15px 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem; font-weight: 500;
  cursor: pointer;
  display: inline-flex; align-items: center; gap: 9px;
  transition: all 0.25s;
}
.btn-s:hover { border-color: var(--dark); background: rgba(15,46,34,0.04); }

/* scroll cue */
.scroll-cue {
  position: absolute; bottom: 36px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  animation: fadeUp 0.7s ease 0.6s both;
  opacity: 0.4;
}
.scroll-cue span { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; }
.scroll-line {
  width: 1.5px; height: 48px;
  background: linear-gradient(to bottom, var(--dark), transparent);
  animation: scroll-line 1.8s ease-in-out infinite;
}
@keyframes scroll-line {
  0%   { transform: scaleY(0); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: top; }
  51%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ══════════════════════════════════════════
   ZOOM SCROLL SECTION — la carte arrondie
══════════════════════════════════════════ */


/* embed mode for landing integration */
body.embed-mode {
  background: transparent;
}
body.embed-mode .hero-intro,
body.embed-mode .after-zoom { display: none; }
body.embed-mode .zoom-section {
  height: 240vh;
  margin-top: 0;
}
body.embed-mode .zoom-sticky { height: 100vh; }
body.embed-mode .zoom-card {
  width: 84vw;
  min-height: 78vh;
  border-radius: 36px;
}

.zoom-section {
  position: relative;
  /* hauteur de scroll = durée de l'animation */
  height: 300vh;
  background: var(--cream);
}

.zoom-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* La carte qui grandit */
.zoom-card {
  position: absolute;
  width: 72vw;
  min-height: 72vh;
  background: var(--dark);
  border-radius: 48px;
  overflow: hidden;
  transform-origin: center center;
  will-change: transform, border-radius, width, height;
  transition: border-radius 0.05s linear;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* image de fond / texture */
.zoom-card-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 30%, rgba(127,227,179,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 60% 80% at 80% 80%, rgba(255,236,109,0.1) 0%, transparent 60%),
    linear-gradient(160deg, #0F2E22 0%, #0a1e15 100%);
}

/* dot grid sur la carte */
.zoom-card-grid {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(127,227,179,0.12) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%);
}

/* lignes diagonales dynamiques */
.zoom-card-lines {
  position: absolute; inset: 0; overflow: hidden;
  opacity: 0.06;
}
.zoom-card-lines::before,
.zoom-card-lines::after {
  content: '';
  position: absolute;
  width: 200%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--mint), transparent);
  top: 38%;
  left: -50%;
  transform: rotate(-12deg);
  animation: line-sweep 6s ease-in-out infinite;
}
.zoom-card-lines::after {
  top: 62%;
  animation-delay: 3s;
  transform: rotate(-12deg);
}
@keyframes line-sweep {
  0%,100% { opacity: 0.3; transform: rotate(-12deg) translateX(-10%); }
  50%      { opacity: 1;   transform: rotate(-12deg) translateX(10%); }
}

/* Contenu de la carte */
.zoom-card-content {
  position: relative; z-index: 2;
  text-align: center;
  padding: 60px 6vw;
  max-width: 700px;
  /* disparaît quand la carte est en plein écran */
  transition: opacity 0.3s;
}
.zoom-card-content.hidden { opacity: 0; pointer-events: none; }

.zoom-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 0.68rem; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(127,227,179,0.7);
  margin-bottom: 24px;
}
.zoom-eyebrow-bar { width: 28px; height: 2px; background: var(--mint); border-radius: 99px; }

.zoom-card-content h2 {
  font-size: clamp(2rem, 4vw, 3.8rem);
  font-weight: 900;
  line-height: 1.06;
  letter-spacing: -0.04em;
  color: #fff;
  margin-bottom: 20px;
}
.zoom-card-content h2 span { color: var(--mint); }

.zoom-card-content p {
  font-size: 1rem; font-weight: 400;
  color: rgba(255,255,255,0.5);
  line-height: 1.85; max-width: 440px;
  margin: 0 auto 40px;
}

/* app mockup flottant dans la carte */
.zoom-app-preview {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: min(580px, 80%);
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px 20px 0 0;
  backdrop-filter: blur(10px);
  padding: 20px 20px 0;
  z-index: 3;
  transition: opacity 0.3s, transform 0.3s;
}
.zoom-app-preview.hidden { opacity: 0; transform: translateX(-50%) translateY(20px); }

.app-topbar {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 16px;
}
.app-dot { width: 9px; height: 9px; border-radius: 50%; }
.app-dot:nth-child(1) { background: rgba(255,95,87,0.7); }
.app-dot:nth-child(2) { background: rgba(255,189,46,0.7); }
.app-dot:nth-child(3) { background: rgba(40,202,65,0.7); }
.app-url {
  flex: 1; background: rgba(255,255,255,0.07);
  border-radius: 6px; padding: 5px 12px;
  font-size: 0.68rem; color: rgba(255,255,255,0.35);
  display: flex; align-items: center; gap: 6px;
}

.app-content {
  display: grid; grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.app-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 16px;
}
.app-card-icon {
  width: 32px; height: 32px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; margin-bottom: 10px;
}
.app-card-icon.m { background: rgba(127,227,179,0.2); }
.app-card-icon.y { background: rgba(255,236,109,0.2); }
.app-card-icon.w { background: rgba(255,255,255,0.1); }
.app-card-title { font-size: 0.7rem; font-weight: 600; color: rgba(255,255,255,0.7); margin-bottom: 4px; }
.app-card-sub   { font-size: 0.62rem; color: rgba(255,255,255,0.35); }
.app-card-num   { font-size: 1.3rem; font-weight: 800; color: #fff; margin-top: 6px; }

/* Fullscreen state — quand la carte couvre tout */
.zoom-app-full {
  position: absolute; inset: 0; z-index: 4;
  opacity: 0; pointer-events: none;
  transition: opacity 0.4s;
  display: flex; align-items: center; justify-content: center;
  padding: 60px 6vw;
  overflow: hidden;
}
.zoom-app-full.visible { opacity: 1; }

/* Dashboard complet qui apparaît en fullscreen */
.dash-full {
  width: 100%; max-width: 960px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.dash-stat {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px; padding: 24px 20px;
  transition: background 0.3s;
}
.dash-stat:hover { background: rgba(127,227,179,0.1); }
.dash-stat-label { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em; color: rgba(255,255,255,0.4); text-transform: uppercase; margin-bottom: 8px; }
.dash-stat-value { font-size: 2rem; font-weight: 900; color: #fff; letter-spacing: -0.03em; line-height: 1; }
.dash-stat-trend { font-size: 0.7rem; font-weight: 600; color: var(--mint); margin-top: 6px; }

.dash-chart {
  grid-column: span 2;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px; padding: 24px;
}
.dash-chart-title { font-size: 0.78rem; font-weight: 700; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
.dash-bars {
  display: flex; align-items: flex-end; gap: 8px;
  height: 80px;
}
.dash-bar-item {
  flex: 1; border-radius: 6px 6px 0 0;
  background: rgba(127,227,179,0.3);
  transition: background 0.3s;
  position: relative;
}
.dash-bar-item:hover { background: var(--mint); }
.dash-bar-item span {
  position: absolute; bottom: -18px; left: 50%; transform: translateX(-50%);
  font-size: 0.55rem; color: rgba(255,255,255,0.35); white-space: nowrap;
}
.dash-bar-item.accent { background: var(--mint); }

.dash-groups {
  grid-column: span 2;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px; padding: 24px;
}
.dash-group-item {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.dash-group-item:last-child { border-bottom: none; }
.dg-icon {
  width: 32px; height: 32px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; flex-shrink: 0;
  background: rgba(127,227,179,0.15);
}
.dg-name { font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.75); }
.dg-sub  { font-size: 0.65rem; color: rgba(255,255,255,0.35); }
.dg-badge {
  margin-left: auto;
  font-size: 0.62rem; font-weight: 700;
  padding: 3px 10px; border-radius: 99px;
  background: rgba(127,227,179,0.15); color: var(--mint);
}

/* Section après le zoom */
.after-zoom {
  min-height: 50vh;
  display: flex; align-items: center; justify-content: center;
  padding: 80px 6vw;
  text-align: center;
}
.after-zoom h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800; letter-spacing: -0.03em;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
</head>
<body>

<!-- ══ HERO INTRO ══ -->
<section class="hero-intro">
  <div class="hero-badge">
    <div class="badge-dot"></div>
    Nouveau — Sport B2B Platform
  </div>

  <h1>Le sport qui <em>connecte</em><br>votre entreprise</h1>

  <p class="hero-sub">Hub2gether permet aux collaborateurs de se retrouver autour du sport, d'organiser des matchs et de créer une vraie communauté sportive en interne.</p>

  <div class="hero-btns">
    <button class="btn-p">
      Demander une démo
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <button class="btn-s">
      Voir la plateforme
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 9l5 4 5-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  </div>

  <div class="scroll-cue">
    <span>Découvrir</span>
    <div class="scroll-line"></div>
  </div>
</section>

<!-- ══ ZOOM SCROLL SECTION ══ -->
<div class="zoom-section" id="zoomSection">
  <div class="zoom-sticky" id="zoomSticky">

    <div class="zoom-card" id="zoomCard">
      <div class="zoom-card-bg"></div>
      <div class="zoom-card-grid"></div>
      <div class="zoom-card-lines"></div>

      <!-- Contenu initial (visible avant zoom complet) -->
      <div class="zoom-card-content" id="zoomContent">
        <div class="zoom-eyebrow">
          <div class="zoom-eyebrow-bar"></div>
          La plateforme
        </div>
        <h2>Tout le sport de<br>votre <span>entreprise</span><br>en un seul endroit</h2>
        <p>Matchmaking, groupes, statistiques, événements — Hub2gether centralise la vie sportive de vos équipes.</p>
      </div>

      <!-- Mockup app flottant en bas (mi-chemin du zoom) -->
      <div class="zoom-app-preview" id="zoomAppPreview">
        <div class="app-topbar">
          <div class="app-dot"></div>
          <div class="app-dot"></div>
          <div class="app-dot"></div>
          <div class="app-url">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1a4 4 0 1 0 0 8A4 4 0 0 0 5 1z" stroke="currentColor" stroke-width="1"/></svg>
            app.hub2gether.com
          </div>
        </div>
        <div class="app-content">
          <div class="app-card">
            <div class="app-card-icon m">⚽</div>
            <div class="app-card-title">Matchs à venir</div>
            <div class="app-card-sub">Foot 5v5 · Mardi 18h</div>
            <div class="app-card-num">3</div>
          </div>
          <div class="app-card">
            <div class="app-card-icon y">👥</div>
            <div class="app-card-title">Groupes actifs</div>
            <div class="app-card-sub">Tennis · Padel · Run</div>
            <div class="app-card-num">8</div>
          </div>
          <div class="app-card">
            <div class="app-card-icon w">🏆</div>
            <div class="app-card-title">Votre rang</div>
            <div class="app-card-sub">Classement foot</div>
            <div class="app-card-num">#4</div>
          </div>
        </div>
      </div>

      <!-- Dashboard qui apparaît en fullscreen -->
      <div class="zoom-app-full" id="zoomFull">
        <div class="dash-full">
          <div class="dash-stat">
            <div class="dash-stat-label">Collaborateurs actifs</div>
            <div class="dash-stat-value">1 240</div>
            <div class="dash-stat-trend">↑ +12% ce mois</div>
          </div>
          <div class="dash-stat">
            <div class="dash-stat-label">Groupes sportifs</div>
            <div class="dash-stat-value">42</div>
            <div class="dash-stat-trend">↑ +5 nouveaux</div>
          </div>
          <div class="dash-stat">
            <div class="dash-stat-label">Matchs ce mois</div>
            <div class="dash-stat-value">156</div>
            <div class="dash-stat-trend">↑ +31 vs mois passé</div>
          </div>
          <div class="dash-stat">
            <div class="dash-stat-label">Satisfaction</div>
            <div class="dash-stat-value">94%</div>
            <div class="dash-stat-trend">↑ +2pts</div>
          </div>

          <div class="dash-chart">
            <div class="dash-chart-title">Participation hebdomadaire</div>
            <div class="dash-bars" id="dashBars">
              <div class="dash-bar-item" style="height:55%"><span>Lun</span></div>
              <div class="dash-bar-item" style="height:70%"><span>Mar</span></div>
              <div class="dash-bar-item accent" style="height:100%"><span>Mer</span></div>
              <div class="dash-bar-item" style="height:80%"><span>Jeu</span></div>
              <div class="dash-bar-item" style="height:65%"><span>Ven</span></div>
              <div class="dash-bar-item" style="height:28%"><span>Sam</span></div>
              <div class="dash-bar-item" style="height:18%"><span>Dim</span></div>
            </div>
          </div>

          <div class="dash-groups">
            <div class="dash-chart-title">Groupes les plus actifs</div>
            <div class="dash-group-item">
              <div class="dg-icon">🎾</div>
              <div>
                <div class="dg-name">Padel Team Paris</div>
                <div class="dg-sub">342 membres · 12 matchs/mois</div>
              </div>
              <div class="dg-badge">Actif</div>
            </div>
            <div class="dash-group-item">
              <div class="dg-icon">🏃</div>
              <div>
                <div class="dg-name">Morning Runners</div>
                <div class="dg-sub">156 membres · 20 sessions/mois</div>
              </div>
              <div class="dg-badge">Actif</div>
            </div>
            <div class="dash-group-item">
              <div class="dg-icon">⚽</div>
              <div>
                <div class="dg-name">Football Club</div>
                <div class="dg-sub">89 membres · 4 matchs/mois</div>
              </div>
              <div class="dg-badge">Actif</div>
            </div>
          </div>
        </div>
      </div>

    </div><!-- /zoom-card -->
  </div><!-- /zoom-sticky -->
</div><!-- /zoom-section -->

<div class="after-zoom">
  <h2>↓ Suite du site ici</h2>
</div>

<script>
var EMBED_MODE = new URLSearchParams(window.location.search).get('embed') === '1';
if (EMBED_MODE) document.body.classList.add('embed-mode');
</script>

<script>
(function() {
  var section  = document.getElementById('zoomSection');
  var card     = document.getElementById('zoomCard');
  var content  = document.getElementById('zoomContent');
  var preview  = document.getElementById('zoomAppPreview');
  var full     = document.getElementById('zoomFull');

  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function easeInOut(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var scrolled = Math.max(0, -rect.top);
    var total    = section.offsetHeight - window.innerHeight;
    if (total <= 0) return;

    var raw      = clamp(scrolled / total, 0, 1);
    var progress = easeInOut(raw);

    /* ── Phase 1 (0→0.5) : la carte grandit et prend tout l'écran ── */
    var phase1 = clamp(progress / 0.5, 0, 1);

    // largeur : 72vw → 100vw
    var vw   = window.innerWidth;
    var vh   = window.innerHeight;
    var startW = vw * 0.72;
    var startH = vh * 0.72;
    var curW  = lerp(startW, vw, phase1);
    var curH  = lerp(startH, vh, phase1);

    // border-radius : 48px → 0
    var radius = lerp(48, 0, phase1);

    card.style.width        = curW + 'px';
    card.style.height       = curH + 'px';
    card.style.borderRadius = radius + 'px';

    // texte central disparaît après 40%
    var contentOpacity = clamp(1 - phase1 * 2.5, 0, 1);
    content.style.opacity = contentOpacity;

    // mockup app apparaît entre 20% et 50%
    var previewOpacity = clamp((phase1 - 0.2) / 0.3, 0, 1) * clamp(1 - (phase1 - 0.7) / 0.3, 0, 1);
    preview.style.opacity  = previewOpacity;
    preview.style.transform = 'translateX(-50%) translateY(' + lerp(30, 0, clamp((phase1 - 0.2) / 0.3, 0, 1)) + 'px)';

    /* ── Phase 2 (0.5→1) : dashboard appear ── */
    var phase2 = clamp((progress - 0.5) / 0.5, 0, 1);
    full.style.opacity = phase2 > 0.1 ? clamp((phase2 - 0.1) / 0.4, 0, 1) : 0;
    if (phase2 > 0.1) full.classList.add('visible');
    else full.classList.remove('visible');
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
</script>
</body>
</html>
```
