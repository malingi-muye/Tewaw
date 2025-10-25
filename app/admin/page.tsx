import { getSupabaseServerClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, FileText, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Admin Dashboard | Tewaw Enterprises",
  description: "Manage your products and quotes",
}

export default async function AdminDashboard() {
  const supabase = await getSupabaseServerClient()

  // Fetch statistics
  const { count: totalProducts } = await supabase.from("products").select("*", { count: "exact", head: true })

  const { count: totalQuotes } = await supabase.from("quotes").select("*", { count: "exact", head: true })

  const { count: pendingQuotes } = await supabase
    .from("quotes")
    .select("*", { count: "exact", head: true })
    .eq("status", "pending")

  const { count: completedQuotes } = await supabase
    .from("quotes")
    .select("*", { count: "exact", head: true })
    .eq("status", "completed")

  // Fetch recent quotes
  const { data: recentQuotes } = await supabase
    .from("quotes")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your business.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalProducts || 0}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Quotes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalQuotes || 0}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Quotes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{pendingQuotes || 0}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{completedQuotes || 0}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Quotes */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Quote Requests</CardTitle>
            <Button asChild variant="outline" size="sm">
              <Link href="/admin/quotes">View All</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {recentQuotes && recentQuotes.length > 0 ? (
            <div className="space-y-4">
              {recentQuotes.map((quote) => (
                <div key={quote.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{quote.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {quote.product_type} • {quote.quantity} units
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={cn(
                        "inline-block px-2 py-1 rounded-full text-xs font-medium",
                        quote.status === "pending" && "bg-yellow-100 text-yellow-800",
                        quote.status === "reviewed" && "bg-blue-100 text-blue-800",
                        quote.status === "completed" && "bg-green-100 text-green-800",
                      )}
                    >
                      {quote.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">No quote requests yet</p>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Manage Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Add, edit, or remove products from your catalog</p>
            <Button asChild>
              <Link href="/admin/products">Go to Products</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Review Quotes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">View and respond to customer quote requests</p>
            <Button asChild>
              <Link href="/admin/quotes">Go to Quotes</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
