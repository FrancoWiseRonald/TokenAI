"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Simulated data for top 10 cryptocurrencies
const cryptoData = [
  { name: 'Bitcoin', price: 50000 },
  { name: 'Ethereum', price: 3000 },
  { name: 'Binance Coin', price: 400 },
  { name: 'Cardano', price: 2 },
  { name: 'Tether', price: 1 },
  { name: 'XRP', price: 1.5 },
  { name: 'Solana', price: 150 },
  { name: 'Polkadot', price: 30 },
  { name: 'Dogecoin', price: 0.3 },
  { name: 'USD Coin', price: 1 },
]

export function CryptoChart() {
  const [data, setData] = useState(cryptoData)

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // For example: CoinMarketCap API
    // This is just a simulation of data changing over time
    const interval = setInterval(() => {
      setData(prevData =>
        prevData.map(coin => ({
          ...coin,
          price: coin.price * (1 + (Math.random() - 0.5) * 0.02)
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="h-[500px]">
      <CardHeader>
        <CardTitle>Top 10 Cryptocurrencies</CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-5rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

