import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hey people, I'm an enthusiastic web developper, always in search for some challenge, because there's no better way to learn...]</p>
        <p>visit <a href="https://nextjs.org/learn">this link</a> to learn !</p>
      </section>
    </Layout>
  )
}
