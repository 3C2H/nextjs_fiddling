import Link from 'next/link'
import ImgProfile from '../home'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Nextjs Post</title>
        </Head>

        <h1>First Post</h1>
          <p>{ImgProfile}</p>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
      </Layout>
    </>
  )
}