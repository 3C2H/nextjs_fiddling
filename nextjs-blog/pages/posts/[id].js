import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'


export default function Post({ postData }) {
  return (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <br />
    {postData.id}
    <br />
    <Date dateString={postData.date} />
    <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
)}

//  dynamic paths
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

//  posts data
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
