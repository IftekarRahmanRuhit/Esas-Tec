import BlogPageBanner from '../components/BlogPageComponents/BlogPageBanner'
import LatestArticles from '../components/BlogPageComponents/LatestArticles'

export default function BlogsPage() {
  return (
    <div className='min-h-screen'>
      <BlogPageBanner />
      <LatestArticles />
    </div>
  )
}
