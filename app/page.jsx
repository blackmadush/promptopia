// Page.jsx

import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Find & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Home Services</span>
    </h1>
    <p className="desc text-center">
      HomeFixer is a platform for finding and sharing home services such as
      plumbing, gardening, and more. Connect with professionals and find the
      services you need.
    </p>

    <Feed />
  </section>
);

export default Home;
