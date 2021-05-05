import Link from 'next/link'
import Image from 'next/image'


function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/../public/images/profile.jpg"
        alt="Profile pic"
        width={150}
        height={150}
      />
      <p>Welcome to my homepage!</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  )
}

export default Home