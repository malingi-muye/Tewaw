"use client"

import { useEffect } from "react"

export default function ClipboardPatch() {
  useEffect(() => {
    try {
      if (typeof window === "undefined") return
      const nav: any = (navigator as any)
      if (!nav || !nav.clipboard || typeof nav.clipboard.writeText !== "function") return

      const original = nav.clipboard.writeText.bind(nav.clipboard)

      nav.clipboard.writeText = async (text: string) => {
        try {
          return await original(text)
        } catch (err) {
          try {
            const textarea = document.createElement("textarea")
            textarea.className = "clipboard-hidden"
            textarea.value = String(text)
            document.body.appendChild(textarea)
            textarea.select()
            document.execCommand && document.execCommand("copy")
            document.body.removeChild(textarea)
          } catch (e) {
            // swallow errors to avoid uncaught exceptions from third-party code
          }
          return Promise.resolve()
        }
      }
    } catch (e) {
      // ignore
    }
  }, [])

  return null
}
