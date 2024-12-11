"use client"

import Image from "next/image"
import { ChevronDown, ChevronUp } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Holding {
  asset: string
  symbol: string
  balance: number
  cost: number
  marketValue: number
  roi: number
}

const holdings: Holding[] = [
  {
    asset: "Bitcoin",
    symbol: "BTC",
    balance: 2.5008,
    cost: 5823,
    marketValue: 42459,
    roi: 629.22,
  },
  {
    asset: "Bitcoin Cash",
    symbol: "BCH",
    balance: 81.82,
    cost: 9901,
    marketValue: 8641,
    roi: -12.72,
  },
  {
    asset: "Ethereum",
    symbol: "ETH",
    balance: 3.3499,
    cost: 10480,
    marketValue: 4194,
    roi: -59.98,
  },
]

export function HoldingsTable() {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead className="text-right">Balance</TableHead>
            <TableHead className="text-right">Cost (USD)</TableHead>
            <TableHead className="text-right">Market Value</TableHead>
            <TableHead className="text-right">ROI</TableHead>
            <TableHead className="text-right">24h</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holdings.map((holding) => (
            <TableRow key={holding.symbol}>
              <TableCell className="flex items-center gap-2">
                <Image
                  src={`/placeholder.svg?text=${holding.symbol}`}
                  alt={holding.asset}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-medium">{holding.asset}</span>
                <span className="text-muted-foreground">({holding.symbol})</span>
              </TableCell>
              <TableCell className="text-right">{holding.balance.toFixed(4)}</TableCell>
              <TableCell className="text-right">${holding.cost.toLocaleString()}</TableCell>
              <TableCell className="text-right">${holding.marketValue.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <span className={holding.roi > 0 ? "text-green-500" : "text-red-500"}>
                  {holding.roi > 0 ? <ChevronUp className="inline h-4 w-4" /> : <ChevronDown className="inline h-4 w-4" />}
                  {Math.abs(holding.roi)}%
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="h-[30px] w-[60px] rounded bg-muted" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

