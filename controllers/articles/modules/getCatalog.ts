import Articles from '../../../models/Articles/Articles'

interface IOptions {
  page: number
  pageCount: number
  filter?: string
}

interface IOutputData {
  data: any
  total: number
}

export const getCatalog = async (options: IOptions): Promise<IOutputData> => {
  try {
    const { page, pageCount, filter = '' } = options

    const data = await Articles.aggregate([
      {
        $match: {
          title: { $regex: filter, $options: 'i' },
        },
      },
      {
        $facet: {
          data: [
            { $skip: pageCount * (page - 1) },
            { $limit: pageCount },
            {
              $project: {
                id: '$_id',
                _id: 0,
                category: 1,
                description: 1,
                title: 1,
                updatedAt: 1,
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
