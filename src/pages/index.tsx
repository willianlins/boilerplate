import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'React Avançado!' }: Props) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">{title}</a>
      </h1>
    </div>
  )
}
