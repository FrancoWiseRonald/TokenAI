"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [maxDailyWithdrawal, setMaxDailyWithdrawal] = useState(10000)

  const handleSaveSettings = () => {
    // Here you would typically save these settings to your backend
    console.log("Settings saved:", { maintenanceMode, maxDailyWithdrawal })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Platform Settings</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="maintenance-mode"
            checked={maintenanceMode}
            onCheckedChange={setMaintenanceMode}
          />
          <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
        </div>
        <div className="space-y-2">
          <Label htmlFor="max-daily-withdrawal">Max Daily Withdrawal (USD)</Label>
          <Input
            id="max-daily-withdrawal"
            type="number"
            value={maxDailyWithdrawal}
            onChange={(e) => setMaxDailyWithdrawal(Number(e.target.value))}
          />
        </div>
        <Button onClick={handleSaveSettings}>Save Settings</Button>
      </div>
    </div>
  )
}

