import "./App.css";

import Header from "./components/Header/Header";

import FirstBanner from "./components/FirstBanner/FirstBanner";

import StoryTitle from "./components/StoryTitle/StoryTitle";

import FeaturedMugs from "./components/FeaturedMugs/FeaturedMugs";

import MoreProducts from "./components/MoreProducts/MoreProducts";

import PremiumOffer from "./components/PremiumOffer/PremiumOffer";

import LifeStories from "./components/LifeStories/LifeStories";

import LastBanner from "./components/LastBanner/LastBanner";

import Footer from "./components/Footer/Footer";

function App() {
  const headerLinks = [
    { title: "Home" },
    { title: "Our Products" },
    { title: "Blog" },
    { title: "About" },
    { title: "Contact" },
    { title: "Styleguide" },
  ];

  const footerLinks = [
    { title: "Home" },
    { title: "Our Products" },
    { title: "Blog" },
    { title: "About" },
    { title: "Contact" },
    { title: "Styleguide" },
  ];

  return (
    <div className="app">
      <Header links={headerLinks} />
      <FirstBanner />
      <StoryTitle />
      <div className="string">Featured Mugs</div>
      <FeaturedMugs />
      <div className="string">More products</div>
      <MoreProducts />
      <div className="string2">Buy 2 mugs and get a coffee magazine free</div>
      <PremiumOffer />
      <div className="block6"></div>
      <div className="string2">Behind the mugs, lifestyle stories</div>
      <LifeStories />
      <LastBanner />
      <Footer links={footerLinks} />
    </div>
  );
}

export default App;
