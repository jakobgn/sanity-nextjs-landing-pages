// rectangle.js
export default {
  name: 'testimonials',
  type: 'object',
  title: 'Testimonials',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {

      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [
        {
          title: 'Testimonial',
          type: 'testimonial'
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
