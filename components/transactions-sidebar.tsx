import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface TransactionMetric {
  label: string
  value: string
}

const metrics: TransactionMetric[] = [
  { label: "Received", value: "$3,537" },
  { label: "Sent", value: "$22,552" },
  { label: "Income", value: "$2,042" },
  { label: "Expenses", value: "$832" },
  { label: "Trading fees", value: "$769" },
  { label: "Realized gains", value: "$23,543" },
]

export function TransactionsSidebar() {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">transactions</span>
          <span className="text-xl font-bold">128</span>
        </div>
        <div className="h-[100px] rounded-lg bg-muted" />
      </Card>
      <Card className="p-4">
        <h3 className="mb-4 font-medium uppercase text-muted-foreground">Breakdown</h3>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={metric.label}>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">{metric.label}</span>
                <span className="font-medium">{metric.value}</span>
              </div>
              {index < metrics.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </Card>
      <Card className="p-4">
        <h3 className="mb-2 font-medium uppercase text-muted-foreground">
          FIAT on exchanges
        </h3>
        <span className="text-2xl font-bold">$0</span>
      </Card>
    </div>
  )
}

