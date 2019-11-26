import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Alchlab</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header>
        <img src="assets/cs.png" alt="Coming soon" class="main"></img>
    </Header>

    <style jsx>{`
        .main {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 700px;
        }
    `}</style>
  </div>
)

export default Home
