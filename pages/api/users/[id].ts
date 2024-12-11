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

  const { id } = req.query

  switch (req.method) {
    case 'GET':
      try {
        const user = await prisma.user.findUnique({
          where: { id: String(id) },
          select: { id: true, name: true, email: true, role: true }
        })
        if (user) {
          res.status(200).json(user)
        } else {
          res.status(404).json({ message: "User not found" })
        }
      } catch (error) {
        res.status(500).json({ message: "Error fetching user" })
      }
      break

    case 'PUT':
      try {
        const { name, email, role } = req.body
        const user = await prisma.user.update({
          where: { id: String(id) },
          data: { name, email, role }
        })
        res.status(200).json(user)
      } catch (error) {
        res.status(500).json({ message: "Error updating user" })
      }
      break

    case 'DELETE':
      try {
        await prisma.user.delete({
          where: { id: String(id) }
        })
        res.status(204).end()
      } catch (error) {
        res.status(500).json({ message: "Error deleting user" })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

