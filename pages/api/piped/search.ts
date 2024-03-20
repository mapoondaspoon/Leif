import type { NextApiRequest, NextApiResponse } from 'next'
import { search } from '../../../components/piped'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    res.status(200).json(await search(req.query))
}
