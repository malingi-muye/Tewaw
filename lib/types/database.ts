export interface Product {
  id: string
  category: string
  name: string
  description: string | null
  features: string[] | null
  price_range: string | null
  image_url: string | null
  slug: string
  is_featured: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface Quote {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  product_type: string
  quantity: number
  customization: string | null
  timeline: string | null
  budget_range: string | null
  message: string | null
  status: "pending" | "reviewed" | "quoted" | "accepted" | "rejected" | "completed"
  notes: string | null
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  email: string
  full_name: string
  role: string
  created_at: string
  updated_at: string
}
