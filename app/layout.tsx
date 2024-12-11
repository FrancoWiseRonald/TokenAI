import { usePathname } from 'next/navigation'
import { SiteHeader } from "@/components/site-header"
import { TooltipProvider } from '@radix-ui/react-tooltip'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname === '/dashboard'

  return (
    <html lang="en">
      <body>
        {!isDashboard && <SiteHeader />}
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}

