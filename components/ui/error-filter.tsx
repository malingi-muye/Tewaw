"use client"

import { useEffect } from "react"

export default function ErrorFilter() {
  useEffect(() => {
    function isFullStoryError(err: any) {
      try {
        const msg = (err && (err.message || err.toString())) || ''
        const stack = (err && err.stack) || ''
        return (
          /fullstory/i.test(msg) ||
          /edge\.fullstory\.com/i.test(msg) ||
          /edge\.fullstory\.com/i.test(stack) ||
          /fs\.js/i.test(msg) ||
          /fs\.js/i.test(stack) ||
          /Failed to fetch/i.test(msg) && /fullstory/i.test(stack)
        )
      } catch (e) {
        return false
      }
    }

    const onError = (event: ErrorEvent) => {
      try {
        if (event && event.filename && /edge\.fullstory\.com/i.test(event.filename)) {
          event.stopImmediatePropagation()
          event.preventDefault()
          return
        }
        if (isFullStoryError(event.error || event.message)) {
          event.stopImmediatePropagation()
          event.preventDefault()
        }
      } catch (e) {
        // ignore
      }
    }

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      try {
        const reason = (event && (event.reason || event.detail)) || undefined
        if (!reason) return
        if (isFullStoryError(reason)) {
          event.preventDefault()
        }
      } catch (e) {
        // ignore
      }
    }

    window.addEventListener("error", onError, true)
    window.addEventListener("unhandledrejection", onUnhandledRejection)

    return () => {
      window.removeEventListener("error", onError, true)
      window.removeEventListener("unhandledrejection", onUnhandledRejection)
    }
  }, [])

  return null
}
