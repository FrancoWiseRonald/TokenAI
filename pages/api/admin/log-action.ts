import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    return res.status(403).json({ message: "Not authorized" })
  }

  if (req.method === 'POST') {
    const { action, details } = req.body

    try {
      const logEntry = await prisma.adminAction.create({
        data: {
          userId: session.user.id,
          action,
          details,
        },
      })

      res.status(200).json(logEntry)
    } catch (error) {
      res.status(500).json({ message: "Error logging action" })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

