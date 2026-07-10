import { Response } from 'express'

export function handleError(res: Response, error: unknown) {
  console.log(error)

  if (error instanceof Error) {
    return res.status(500).json({
      error: error.message
    })
  }

  return res.status(500).json({
    error: 'Unknown error'
  })
}