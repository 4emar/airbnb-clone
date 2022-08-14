import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useState } from 'react';
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { GetStaticProps } from 'next';

interface ExploreData {
  img: string;
  location: string;
  distance: string;
}

interface CardsData {
  img: string;
  title: string;
}

interface Props {
  exploreData: ExploreData[];
  cardsData: CardsData[];
}

const Home: NextPage<Props> = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
        <Header placeholder=''/>

      {/* Banner */}
        <Banner />

      {/* Main */}

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore nearby</h2>

          {/* Pull data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item) => (
              <SmallCard 
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
              <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

        <section>
            <div className='flex space-x-3 overflow-scroll
              scrollbar-hide p-3 -ml-3'>
              {cardsData?.map((item) => (
                <MediumCard 
                  key={item.img}
                  img={item.img}
                  title={item.title}
                />
              ))}
            </div>
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title='The Greatest Outdoors'
          description='Wishilists curated by Airbnb'
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then((res) => res.json()) as ExploreData;

  const cardsData = await fetch('https://links.papareact.com/zp1').
  then((res) => res.json()) as CardsData;

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}