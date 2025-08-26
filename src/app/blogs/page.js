import BlogPageBanner from '../components/BlogPageComponents/BlogPageBanner'
import LatestArticles from '../components/BlogPageComponents/LatestArticles'

export const metadata = {
  title: "Esas Tec | Blogs",
  description: "Stay updated with the latest insights, industry trends, and technology news from Esas Tec's expert team.",
};

export default function BlogsPage() {
  return (
    <div className='min-h-screen'>
      <BlogPageBanner />
      <LatestArticles />
    </div>
  )
}
