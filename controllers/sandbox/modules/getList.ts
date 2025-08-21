import Sandbox from '../../../models/Sandbox/Sandbox'

interface IOptions {
  userId: string
  filter?: string
  page: number
  pageCount: number
}

interface IData {
  _id: string
  title: string
  updatedAt: number
  stack: 'javaScript' | 'typeScript' | 'react'
}

interface IOutput {
  total: number
  data: IData[]
}

export async function getList(options: IOptions): Promise<IOutput> {
  try {
    const { page, pageCount, userId, filter = '' } = options
    const data = await Sandbox.aggregate([
      { $match: { userId, title: { $regex: filter, $options: 'i' } } },
      {
        $facet: {
          data: [
            { $skip: pageCount * (page - 1) },
            { $limit: pageCount },
            {
              $project: {
                title: 1,
                updatedAt: 1,
                stack: {
                  $cond: {
                    if: { $eq: ['$settings.useReact', true] },
                    then: 'react',
                    else: {
                      $cond: {
                        if: { $eq: ['$settings.useTypeScript', true] },
                        then: 'typeScript',
                        else: 'javaScript',
                      },
                    },
                  },
                },
              },
            },
          ],
          total: [{ $count: 'count' }],
        },
      },
      { $project: { total: { $arrayElemAt: ['$total.count', 0] }, data: 1 } },
    ])
    return {
      data: data[0].data,
      total: data[0].total || 0,
    }
  } catch (e: any) {
    throw new Error(e)
  }
}
