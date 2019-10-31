export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5dbaeec2b929cd019c4272dd',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7hq9d9py',
                  apiId: 'e24a6172-1502-4ace-b782-4cacb60f5025'
                },
                {
                  buildHookId: '5dbaeec2f59f25018dff0e93',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-e3sn4umr',
                  apiId: '34b7c786-40f2-4ea2-be73-f0b46fba72a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mackrp/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-e3sn4umr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
