// rectangle.js
export default {
  name: 'rectangle',
  type: 'object',
  title: 'Rectangle',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    },
    {
      name: 'photo',
      type: 'figure',
      title: 'Photo'
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'photo'
    }
  }
}
