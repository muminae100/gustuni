import { Banner, Trends, NoteWorthy, CuratedPlaylist, LicenseBeats, ConclusionSection, Footer, Pricing, ArtistsProducts, UpcomingEvents } from "../components";
import "../assets/css/carousel.css";

const HomePage = () => {
  return (
    <>
    <main>
    <Banner />
    <div className="container marketing">
    <Trends />
    <hr className="divider" />
    <NoteWorthy />
    <CuratedPlaylist />
    <LicenseBeats />
    {/* <hr className="divider" /> */}
    </div>
    <ArtistsProducts />
    <UpcomingEvents />
    <Pricing />
    <ConclusionSection />
    </main>
    <Footer />
    </>
  )
}

export default HomePage