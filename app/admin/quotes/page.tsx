import { getSupabaseServerClient } from "@/lib/supabase/server"
import { QuotesTable } from "@/components/admin/quotes-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Manage Quotes | Tewaw Admin",
  description: "Manage customer quote requests",
}

export default async function QuotesPage() {
  const supabase = await getSupabaseServerClient()
  const { data: quotes } = await supabase.from("quotes").select("*").order("created_at", { ascending: false })

  const pendingQuotes = quotes?.filter((q) => q.status === "pending") || []
  const reviewedQuotes = quotes?.filter((q) => q.status === "reviewed" || q.status === "quoted") || []
  const completedQuotes = quotes?.filter((q) => q.status === "completed" || q.status === "accepted") || []
  const rejectedQuotes = quotes?.filter((q) => q.status === "rejected") || []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl text-foreground mb-2">Quote Requests</h1>
        <p className="text-muted-foreground">Manage and respond to customer quote requests</p>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All ({quotes?.length || 0})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingQuotes.length})</TabsTrigger>
          <TabsTrigger value="reviewed">In Progress ({reviewedQuotes.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedQuotes.length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({rejectedQuotes.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <QuotesTable quotes={quotes || []} />
        </TabsContent>

        <TabsContent value="pending">
          <QuotesTable quotes={pendingQuotes} />
        </TabsContent>

        <TabsContent value="reviewed">
          <QuotesTable quotes={reviewedQuotes} />
        </TabsContent>

        <TabsContent value="completed">
          <QuotesTable quotes={completedQuotes} />
        </TabsContent>

        <TabsContent value="rejected">
          <QuotesTable quotes={rejectedQuotes} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
