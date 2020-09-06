export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f54d3649282d6a20ab07f12',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q6181u9b',
                  apiId: '6c43f11b-2bc7-4b8b-b8d6-4ed256c0bef8'
                },
                {
                  buildHookId: '5f54d3641e2b2ff5fcb6757a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5hj533wo',
                  apiId: 'ba0d09d3-f2a7-4e0a-8b61-0439e1498e0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jakobgn/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5hj533wo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
