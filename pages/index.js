import Head from 'next/head'
import Image from 'next/image'
import { DocumentIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const research = [
  {
    name: 'The Market Is A Solvable Puzzle.',
    link: "https://www.hobble.ca/posts/the-market-is-a-solvable-puzzle",
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Atlas Research</title>
      </Head>
      <div className = "p-8 flex sm:justify-center">
        <div className = "sm:w-1/3">
          <div className = "flex mb-4 justify-center">
            <Image 
              src="/atlas.png"
              alt="Atlas Research Logo"
              width={32}
              height={32}
            />
          </div>
          <div className = "mb-4">
            <h1 className = "text-lg font-medium mb-2">We're Atlas.</h1>
            <p className = "text-sm font-medium mb-2">We invest using models build to understand fundamentals.</p>
            <Link href="mailto:hobbleabbas@gmail.com">
              <a className = "text-sm font-medium text-blue-600">Contact</a>
            </Link>
          </div>
          <h2 className = "text-md font-medium mb-2">Our Research</h2>
          <div className = "grid grid-cols-2">
            {research.map((item) => (
              <ResearchItem item = {item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const ResearchItem = ({ item }) => {
  return (
    <Link href = {item.link}>
      <a href = {item.link} className = "hover:opacity-50">
        <div className = "text-sm text-gray-700 font-medium flex">
          <DocumentIcon className = "w-5 h-5 text-blue-600 mr-2" />
          {item.name}
        </div>
      </a>
    </Link>
  )
}