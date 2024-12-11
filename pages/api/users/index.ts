import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { PrismaClient } from '@prisma/client'
import { authOptions } from "../auth/[...nextauth]"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    return res.status(403).json({ message: "Not authorized" })
  }

  switch (req.method) {
    case 'GET':
      try {
        const users = await prisma.user.findMany({
          select: { id: true, name: true, email: true, role: true }
        })
        res.status(200).json(users)
      } catch (error) {
        res.status(500).json({ message: "Error fetching users" })
      }
      break

    case 'POST':
      try {
        const { name, email, password, role } = req.body
        const user = await prisma.user.create({
          data: { name, email, password, role }
        })
        res.status(201).json(user)
      } catch (error) {
        res.status(500).json({ message: "Error creating user" })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

