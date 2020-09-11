// rectangle.js
export default {
  name: 'rectangles',
  type: 'object',
  title: 'Rectangles',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {

      name: 'rectangles',
      type: 'array',
      title: 'Rectangles',
      of: [
        {
          title: 'Rectangle',
          type: 'rectangle'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
