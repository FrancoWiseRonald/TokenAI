import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import { SiteHeader } from "@/components/site-header"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container flex flex-col items-center justify-center space-y-4 py-12">
          <h1 className="text-3xl font-bold">Login to Your Account</h1>
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium underline">
              Register here
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

