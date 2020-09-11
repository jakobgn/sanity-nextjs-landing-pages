
export default {
  name: 'footerCol',
  type: 'object',
  title: 'Footer Collumn',
  fieldset: 'footerCol',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      name: 'references',
      type: 'array',
      title: 'References',
      of: [
        {
          type: 'reference',
          to: [{type: 'route'}]
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
