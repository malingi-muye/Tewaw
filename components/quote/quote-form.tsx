"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Loader2 } from "lucide-react"

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const supabase = getSupabaseBrowserClient()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const name = `${firstName} ${lastName}`

    try {
      const { error: submitError } = await supabase.from("quotes").insert([
        {
          name,
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          company: (formData.get("organization") as string) || null,
          product_type: formData.get("productType") as string,
          quantity: Number.parseInt(formData.get("quantity") as string),
          customization: (formData.get("customization") as string) || null,
          timeline: (formData.get("timeline") as string) || null,
          budget_range: (formData.get("budgetRange") as string) || null,
          message: (formData.get("message") as string) || null,
          status: "pending",
        },
      ])

      if (submitError) throw submitError

      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        ;(e.target as HTMLFormElement).reset()
      }, 3000)
    } catch (err: any) {
      console.error("Error submitting quote:", err)
      setError(err.message || "Failed to submit quote request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Quote Request Form</h2>
        <p className="text-muted-foreground mb-6">
          Please provide as much detail as possible to help us give you an accurate quote.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quoteFirstName">First Name *</Label>
              <Input id="quoteFirstName" name="firstName" required placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quoteLastName">Last Name *</Label>
              <Input id="quoteLastName" name="lastName" required placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quoteEmail">Email *</Label>
            <Input id="quoteEmail" name="email" type="email" required placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quotePhone">Phone Number *</Label>
            <Input id="quotePhone" name="phone" type="tel" required placeholder="+254 700 000 000" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization/Company</Label>
            <Input id="organization" name="organization" placeholder="Your Company Name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productType">Product Type *</Label>
            <Select name="productType" required>
              <SelectTrigger id="productType">
                <SelectValue placeholder="Select product type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sweaters">Sweaters</SelectItem>
                <SelectItem value="Jeans">Jeans</SelectItem>
                <SelectItem value="Hoodies, Sweatpants & Sweatshirts">Hoodies, Sweatpants & Sweatshirts</SelectItem>
                <SelectItem value="Ponchos">Ponchos</SelectItem>
                <SelectItem value="Undergarments">Undergarments</SelectItem>
                <SelectItem value="Tracksuits & Games Kit">Tracksuits & Games Kit</SelectItem>
                <SelectItem value="Shirts & Polo Shirts">Shirts & Polo Shirts</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Estimated Quantity *</Label>
            <Input id="quantity" name="quantity" type="number" required placeholder="100" min="1" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="customization">Customization Requirements</Label>
            <Textarea
              id="customization"
              name="customization"
              placeholder="Describe any branding, colors, embroidery, or special requirements..."
              className="min-h-24"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Desired Timeline</Label>
            <Input id="timeline" name="timeline" placeholder="e.g., Within 2 weeks, By end of month" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
            <Input id="budgetRange" name="budgetRange" placeholder="e.g., KSh 50,000 - 100,000" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quoteMessage">Additional Details</Label>
            <Textarea
              id="quoteMessage"
              name="message"
              placeholder="Any other information that would help us provide an accurate quote..."
              className="min-h-24"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : isSubmitted ? (
              "Quote Request Sent!"
            ) : (
              "Submit Quote Request"
            )}
          </Button>

          {isSubmitted && (
            <p className="text-sm text-center text-green-600">
              Thank you! We'll review your request and get back to you within 24 hours.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
