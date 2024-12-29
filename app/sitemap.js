 
export default function sitemap() {
  return [
    {
      url: 'https://www.sahajnyay.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.sahajnyay.in/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.sahajnyay.in/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
        url: 'https://www.sahajnyay.in/team',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: 'https://www.sahajnyay.in/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
  ]
}