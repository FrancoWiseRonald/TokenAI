import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Transaction {
  id: string
  userId: string
  type: "deposit" | "withdrawal" | "trade"
  amount: number
  currency: string
  timestamp: string
}

const transactions: Transaction[] = [
  { id: "1", userId: "1", type: "deposit", amount: 1000, currency: "USD", timestamp: "2023-06-01T10:00:00Z" },
  { id: "2", userId: "2", type: "withdrawal", amount: 500, currency: "USD", timestamp: "2023-06-02T11:30:00Z" },
  { id: "3", userId: "1", type: "trade", amount: 0.5, currency: "BTC", timestamp: "2023-06-03T09:15:00Z" },
]

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.userId}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.currency}</TableCell>
              <TableCell>{new Date(transaction.timestamp).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

