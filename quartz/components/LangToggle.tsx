import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const LangToggle: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="lang-toggle">
      <button id="lang-kr" class="lang-btn active">KR</button>
      <span class="lang-divider">/</span>
      <button id="lang-en" class="lang-btn">EN</button>
    </div>
  )
}

LangToggle.css = `
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
}

.lang-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--darkgray);
  padding: 2px 4px;
  border-radius: 4px;
  transition: color 0.2s ease;
}

.lang-btn.active {
  color: var(--secondary);
}

.lang-btn:hover {
  color: var(--secondary);
}

.lang-divider {
  color: var(--lightgray);
  font-size: 0.85rem;
}

.lang-kr-content,
.lang-en-content {
  display: block;
}
`

LangToggle.afterDOMLoaded = `
function initLangToggle() {
  const krBtn = document.getElementById("lang-kr")
  const enBtn = document.getElementById("lang-en")
  if (!krBtn || !enBtn) return

  const krContents = document.querySelectorAll(".lang-kr-content")
  const enContents = document.querySelectorAll(".lang-en-content")

  function applyLang(lang) {
    if (lang === "kr") {
      krContents.forEach(el => el.style.display = "block")
      enContents.forEach(el => el.style.display = "none")
      krBtn.classList.add("active")
      enBtn.classList.remove("active")
    } else {
      krContents.forEach(el => el.style.display = "none")
      enContents.forEach(el => el.style.display = "block")
      enBtn.classList.add("active")
      krBtn.classList.remove("active")
    }
  }

  const onKr = () => { localStorage.setItem("preferred-lang", "kr"); applyLang("kr") }
  const onEn = () => { localStorage.setItem("preferred-lang", "en"); applyLang("en") }

  krBtn.addEventListener("click", onKr)
  enBtn.addEventListener("click", onEn)
  window.addCleanup(() => krBtn.removeEventListener("click", onKr))
  window.addCleanup(() => enBtn.removeEventListener("click", onEn))

  applyLang(localStorage.getItem("preferred-lang") || "kr")
}

document.addEventListener("nav", initLangToggle)
initLangToggle()
`

export default (() => LangToggle) satisfies QuartzComponentConstructor
