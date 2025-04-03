import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import Footer from "../components/Footer";

export default async function Home() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const exploreData2 = [
    {
      img: "/banner.png",
      distance: "45-minute drive",
      location: "London"
    },
    {
      img: "/banner.png",
      distance: "4.5-hour drive",
      location: "Manchester"
    },
    {
      img: "/banner.png",
      distance: "4-hour drive",
      location: "Liverpool"
    },
    {
      img: "/banner.png",
      distance: "2-hour drive",
      location: "York"
    },
    {
      img: "/banner.png",
      distance: "3-hour drive",
      location: "Cardiff"
    },
    {
      img: "/banner.png",
      distance: "4.5-hour drive",
      location: "Birkenhead"
    },  
    {
      img: "/banner.png",
      distance: "6-hour drive",
      location: "Newquay"
    },
    {
      img: "/banner.png",
      distance: "2-hour drive",
      location: "Hove"
    }  
  ]

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return (
    <div>
      <Head>
        <title>airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto px-8 sm:px-16 max-w-7xl">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 text-black">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(
              ({
                img,
                distance,
                location,
              }: {
                img: string;
                distance: string;
                location: string;
              }) => (
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              )
            )}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8 text-black">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ img, title }: { img: string; title: string }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}