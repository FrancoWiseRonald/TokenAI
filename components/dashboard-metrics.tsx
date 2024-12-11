import { InfoIcon } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface MetricProps {
  label: string
  value: string
  subValue?: string
  info?: string
}

function Metric({ label, value, subValue, info }: MetricProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1">
        <span className="text-sm text-muted-foreground">{label}</span>
        {info && (
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>{info}</TooltipContent>
          </Tooltip>
        )}
      </div>
      <div>
        <span className="text-2xl font-bold text-primary">{value}</span>
        {subValue && (
          <span className="ml-2 text-sm text-green-500">{subValue}</span>
        )}
      </div>
    </div>
  )
}

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-4">
        <Metric
          label="Total Value"
          value="$55,314"
          subValue="+105.98%"
          info="Current value of your portfolio"
        />
      </Card>
      <Card className="p-4">
        <Metric
          label="Cost basis"
          value="$26,854"
          info="Total amount invested"
        />
      </Card>
      <Card className="p-4">
        <Metric
          label="Unrealized gains"
          value="$28,459"
          info="Potential profit if sold now"
        />
      </Card>
    </div>
  )
}

