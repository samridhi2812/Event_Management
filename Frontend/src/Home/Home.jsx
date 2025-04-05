import React from 'react'
import Navbar from '../components/Navbar'
import Findevents from '../components/Findevents'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Findevents />
      </main>
      <Footer />
    </div>
  )
}

export default Home
