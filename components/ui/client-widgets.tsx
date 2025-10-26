"use client"

import React from "react"
import { WhatsAppButton as WhatsApp } from "@/components/whatsapp-button"
import ClipboardPatch from "@/components/ui/clipboard-patch"
import ErrorFilter from "@/components/ui/error-filter"

export default function ClientWidgets() {
  return (
    <>
      <ClipboardPatch />
      <ErrorFilter />
      <WhatsApp />
    </>
  )
}
