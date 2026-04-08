import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const LangToggle: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="lang-toggle">
      <button id="lang-kr" class="lang-btn">KR</button>
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
`

LangToggle.afterDOMLoaded = `
function initLangToggle() {
  const krBtn = document.getElementById("lang-kr")
  const enBtn = document.getElementById("lang-en")
  if (!krBtn || !enBtn) return

  const path = window.location.pathname

  // highlight active lang based on current path
  if (path.includes("/en/")) {
    enBtn.classList.add("active")
  } else {
    krBtn.classList.add("active")
  }

  krBtn.addEventListener("click", () => {
    if (path.includes("/en/")) {
      window.location.pathname = path.replace("/en/", "/ko/")
    }
  })

  enBtn.addEventListener("click", () => {
    if (path.includes("/ko/")) {
      window.location.pathname = path.replace("/ko/", "/en/")
    }
  })
}

document.addEventListener("nav", initLangToggle)
initLangToggle()
`

export default (() => LangToggle) satisfies QuartzComponentConstructor
