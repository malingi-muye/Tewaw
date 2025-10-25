import { ProductForm } from "@/components/admin/product-form"

export const metadata = {
  title: "Add Product | Tewaw Admin",
  description: "Add a new product to your catalog",
}

export default function NewProductPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-serif text-3xl text-foreground mb-2">Add Product</h1>
        <p className="text-muted-foreground">Create a new product in your catalog</p>
      </div>

      <ProductForm />
    </div>
  )
}
