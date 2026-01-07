// Import React and ReactDOM
import React from "react"
import { createRoot } from "react-dom/client"

// Import ZMP Styles
import "zmp-ui/zaui.css"

// Import App Custom Styles
import "./styles/icons.css"
import "./styles/app.scss"
import "./styles/tailwind.css"

// Import App Component
import App from "./components/app.jsx"
import appConfig from "../app-config.json"
import { RecoilRoot } from "recoil"

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig
}

if (!window.__APP_INITIALIZED__) {
  window.__APP_INITIALIZED__ = true

  const initApp = () => {
    // Mount React App
    const container = document.getElementById("app")
    if (container) {
      const root = createRoot(container)
      root.render(
        <RecoilRoot>
          <App />
        </RecoilRoot>
      )
    } else {
      console.error("Root element #app not found")
    }
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    initApp()
  } else {
    document.addEventListener("DOMContentLoaded", initApp)
  }
}
