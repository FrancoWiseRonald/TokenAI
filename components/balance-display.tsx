"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BalanceDisplay() {
  const [balance, setBalance] = useState({ USD: 0, EUR: 0, GBP: 0 })

  useEffect(() => {
    // Simulating an API call to fetch balance
    const fetchBalance = async () => {
      // In a real application, you would fetch this data from your backend
      setBalance({
        USD: 10000,
        EUR: 8500,
        GBP: 7500,
      })
    }

    fetchBalance()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-2xl font-bold">${balance.USD.toFixed(2)} USD</p>
          <p className="text-lg">€{balance.EUR.toFixed(2)} EUR</p>
          <p className="text-lg">£{balance.GBP.toFixed(2)} GBP</p>
        </div>
      </CardContent>
    </Card>
  )
}

