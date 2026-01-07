// Import React and ReactDOM
import React from "react"
import { createRoot } from "react-dom/client"

// Import ZMP
import ZMP from "zmp-framework/core/lite-bundle"

// Import ZMP-React Plugin
import ZMPReact from "zmp-framework/react"

// Import ZMP Styles
import "zmp-framework/zmp-bundle.min.css"

// Import Icons and App Custom Styles
import "./styles/icons.css"
import "./styles/app.scss"
import "./styles/tailwind.css"

// Import App Component
import App from "./components/app.jsx"
import appConfig from "../app-config.json"

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig
}

if (!window.__APP_INITIALIZED__) {
  window.__APP_INITIALIZED__ = true

  const initApp = () => {
    // Init ZMP React Plugin
    if (ZMP && ZMP.use) {
      ZMP.use(ZMPReact)
    }

    // Mount React App
    const container = document.getElementById("app")
    if (container) {
      const root = createRoot(container)
      root.render(React.createElement(App))
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
