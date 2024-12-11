import { DashboardMetrics } from "@/components/dashboard-metrics"
import { HoldingsTable } from "@/components/holdings-table"
import { PortfolioChart } from "@/components/portfolio-chart"
import { TransactionsSidebar } from "@/components/transactions-sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardPage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-[1400px] space-y-8">
          <DashboardHeader />
          <DashboardMetrics />
          <div className="grid gap-8 md:grid-cols-[1fr_300px]">
            <div className="space-y-8">
              <PortfolioChart />
              <HoldingsTable />
            </div>
            <TransactionsSidebar />
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

