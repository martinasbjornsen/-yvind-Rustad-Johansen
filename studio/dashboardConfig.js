export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d89e2c65ae8edf6bd07d4a4',
                  title: 'Sanity Studio',
                  name: '-yvind-Rustad-Johansen-studio',
                  apiId: 'fa77fa1a-3c41-4772-97fb-7a3a70dcb5ee'
                },
                {
                  buildHookId: '5d89e2c621895533811960a9',
                  title: 'Portfolio Website',
                  name: '-yvind-Rustad-Johansen',
                  apiId: 'fc740d6f-3dbc-4917-8978-babcb8e1d15a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/martinasbjornsen/-yvind-Rustad-Johansen',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://-yvind-Rustad-Johansen.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
