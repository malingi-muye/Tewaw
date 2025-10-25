import { LoginForm } from "@/components/admin/login-form"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Admin Login | Tewaw Enterprises",
  description: "Login to Tewaw Enterprises admin dashboard",
}

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary/5 flex-col justify-between p-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg" />
          <span className="font-serif text-2xl text-foreground">Tewaw Enterprises</span>
        </Link>

        <div className="space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Manage Your
            <br />
            Apparel Business
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Access your dashboard to manage products, view quote requests, and grow your business.
          </p>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image src="/luxury-apparel-manufacturing-workspace.jpg" alt="Tewaw workspace" fill className="object-cover" />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="font-serif text-3xl text-foreground mb-2">Welcome Back</h2>
            <p className="text-muted-foreground">Sign in to access your admin dashboard</p>
          </div>

          <LoginForm />

          <div className="text-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
