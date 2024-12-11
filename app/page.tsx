import Link from "next/link"
import { Star } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { FeaturesSection } from "@/components/features-section"
import { SiteHeader } from "@/components/site-header"
import { WarningBanner } from "@/components/warning-banner"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <WarningBanner />
      <SiteHeader />
      <main>
        <section className="container grid gap-8 py-12 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tokenizer360 - Crypto Trading Bot and Copy Trading
            </h1>
            <p className="text-muted-foreground">
              Ready to transform your approach to crypto trading? Tokenizer360 is here to catapult your portfolio with
              AI-driven strategies that ensure you&apos;re always ahead of the market. Join a thriving community of
              successful traders and leverage our advanced tools to maximize your returns with up to 50% profit each month.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="h-5 w-5 fill-yellow-400/40 text-yellow-400" />
              </div>
              <span className="text-sm font-medium">Trustpilot 4.8 | 392 reviews</span>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/placeholder.svg" alt="Trade Crypto Logo" width={100} height={40} className="rounded-lg" />
              <Image src="/placeholder.svg" alt="BBC Logo" width={60} height={40} />
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Get Started</h2>
            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/register">Register</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </section>
        <FeaturesSection />
      </main>
    </div>
  )
}

