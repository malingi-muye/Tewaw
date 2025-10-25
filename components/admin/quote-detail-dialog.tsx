"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import type { Quote } from "@/lib/types/database"
import { Loader2, Mail, Phone, Building, Calendar, DollarSign } from "lucide-react"

interface QuoteDetailDialogProps {
  quote: Quote
  onClose: () => void
}

export function QuoteDetailDialog({ quote, onClose }: QuoteDetailDialogProps) {
  const [status, setStatus] = useState(quote.status)
  const [notes, setNotes] = useState(quote.notes || "")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  const handleUpdate = async () => {
    setLoading(true)
    try {
      const { error } = await supabase
        .from("quotes")
        .update({
          status,
          notes,
          updated_at: new Date().toISOString(),
        })
        .eq("id", quote.id)

      if (error) throw error

      router.refresh()
      onClose()
    } catch (error) {
      console.error("Error updating quote:", error)
      alert("Failed to update quote")
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Quote Request Details</DialogTitle>
          <DialogDescription>Review and manage this quote request</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Customer Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{quote.name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </p>
                <a href={`mailto:${quote.email}`} className="font-medium text-primary hover:underline">
                  {quote.email}
                </a>
              </div>
              {quote.phone && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone
                  </p>
                  <a href={`tel:${quote.phone}`} className="font-medium text-primary hover:underline">
                    {quote.phone}
                  </a>
                </div>
              )}
              {quote.company && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Company
                  </p>
                  <p className="font-medium">{quote.company}</p>
                </div>
              )}
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Order Details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Product Type</p>
                <p className="font-medium">{quote.product_type}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Quantity</p>
                <p className="font-medium">{quote.quantity} units</p>
              </div>
              {quote.timeline && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Timeline
                  </p>
                  <p className="font-medium">{quote.timeline}</p>
                </div>
              )}
              {quote.budget_range && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Budget Range
                  </p>
                  <p className="font-medium">{quote.budget_range}</p>
                </div>
              )}
            </div>
          </div>

          {/* Customization */}
          {quote.customization && (
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Customization Requirements</h3>
              <p className="text-muted-foreground">{quote.customization}</p>
            </div>
          )}

          {/* Message */}
          {quote.message && (
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Additional Message</h3>
              <p className="text-muted-foreground">{quote.message}</p>
            </div>
          )}

          {/* Request Date */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Request Date</p>
            <p className="font-medium">{formatDate(quote.created_at)}</p>
          </div>

          {/* Status Update */}
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger id="status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="quoted">Quoted</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Internal Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Internal Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add internal notes about this quote..."
              rows={4}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleUpdate} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Quote"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
