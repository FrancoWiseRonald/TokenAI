"use client"

import { useState } from "react"
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegistrationForm() {
  const [phonePrefix, setPhonePrefix] = useState("+1")

  return (
    <form className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="First Name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Last Name" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Mobile Phone</Label>
        <div className="flex gap-2">
          <div className="relative w-20">
            <select
              className="w-full appearance-none rounded-md border bg-background px-3 py-2 pr-8"
              value={phonePrefix}
              onChange={(e) => setPhonePrefix(e.target.value)}
            >
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+33">+33</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2" />
          </div>
          <Input id="phone" type="tel" className="flex-1" placeholder="Mobile Phone" required />
        </div>
      </div>
      <Button type="submit" className="w-full">
        Join Now
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        *By entering your personal details here and clicking the Join Now button you agree and accept the Privacy Policy and
        Terms & Conditions
      </p>
    </form>
  )
}

