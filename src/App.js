import { useEffect } from "react";
import { Navbar } from "./components";
import {
  HomePage,
  Login,
  MemberAdministration,
  Register,
  ProfilePage,
  SingleGenre,
  SingleSong,
  ForgotPassword,
  Store,
  Events,
  BookingPage,
  Category,
  News,
  NewsItem,
  SoundPacks,
  SinglePacks,
  Cart,
  Checkout,
  ContactUs,
  Artist,
  ArtistAdmin,
  ArtistAdminEdit,
  PersonalizedVideos,
  BookCreator,
  EditMerchandise,
  Merchandise,
  Product,
  Messages,
  Notifications,
  FeaturedPlaylistPage,
  Blog,
  TopCharts,
  Albums,
  Playlists,
  Instrumentals,
  BeatContest,
  EnterContest,
  BcontestPage,
  AllEntries,
  Entry,
  Personalizedvids,
  BookPersonalizedVideo,
  LivePersonalizedVideo,
  BusinessVideo,
  Bundles,
  Others,
  Creator,
  User,
  RecentlyViewed,
  Commerce,
  WishList,
  Upload,
  Tracks,
  BlogItem,
  BlogPage,
  MyPlaylist,
  NewUpload,
  TracksEdit,
  SongsEdit
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";

//css
import "./assets/css/bootstrap.css";
import "./assets/css/mdb.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/all.css";
import "./assets/css/style.css";
import "./assets/css/additional.css";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/genres/:genreId" element={<SingleGenre />} />
        <Route exact path="/songs/:songId" element={<SingleSong />} />
        <Route exact path="/passwordreset" element={<ForgotPassword />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/events/:id" element={<BookingPage />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/news/:id" element={<NewsItem />} />
        <Route exact path="/soundpacks" element={<SoundPacks />} />
        <Route exact path="/pack" element={<SinglePacks />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/memberAdmin" element={<MemberAdministration />} />
        <Route exact path="/artist" element={<Artist />} />
        <Route exact path="/artistAdmin" element={<ArtistAdmin />} />
        <Route exact path="/artistAdmin/edit" element={<ArtistAdminEdit />} />
        <Route exact path="/personalizedvideos" element={<PersonalizedVideos />} />
        <Route exact path="/bookcreator" element={<BookCreator />} />
        <Route exact path="/editMerchandise" element={<EditMerchandise />} />
        <Route exact path="/merchandise" element={<Merchandise />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/notifications" element={<Notifications />} /> 
        <Route exact path="/playlists" element={<Playlists />} />
        <Route exact path="/playlist/:playlistName" element={<FeaturedPlaylistPage />} />
        <Route exact path="/blog2" element={<Blog />} />
        <Route exact path="/topcharts" element={<TopCharts />} />
        <Route exact path="/albums" element={<Albums />} />
        <Route exact path="/instrumentals" element={<Instrumentals />} />
        <Route exact path="/beatcontest" element={<BeatContest />} />
        <Route exact path="/entercontest" element={<EnterContest />} />
        <Route exact path="/bcontestpage" element={<BcontestPage />} />
        <Route exact path="/allentries" element={<AllEntries />} />
        <Route exact path="/entry" element={<Entry />} />
        <Route exact path="/personalizedvids" element={<Personalizedvids />} />
        <Route exact path="/bookpersonalizedvideo" element={<BookPersonalizedVideo />} />
        <Route exact path="/livepersonalizedvideo" element={<LivePersonalizedVideo />} />
        <Route exact path="/businessvideo" element={<BusinessVideo />} />
        <Route exact path="/bundles" element={<Bundles />} />
        <Route exact path="/others" element={<Others />} />
        <Route exact path="/creator" element={<Creator />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/recents" element={<RecentlyViewed />} />
        <Route exact path="/commerce" element={<Commerce />} />
        <Route exact path="/wishlist" element={<WishList />} />
        <Route exact path="/audio/upload" element={<Upload />} />
        <Route exact path="/tracks" element={<Tracks />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog/:title" element={<BlogItem />} />
        <Route exact path="/myplaylist" element={<MyPlaylist />} />
        <Route exact path="/newupload" element={<NewUpload />} />
        <Route exact path="/tracks/edit/:id" element={<TracksEdit />} />
        <Route exact path="/songs/edit/:id" element={<SongsEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
