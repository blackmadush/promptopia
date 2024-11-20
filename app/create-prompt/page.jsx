import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Connect & Hire
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">Trusted Local Workers</span>
    </h1>
    <p className="desc text-center">
      WorkerConnect is an open-source platform to find and hire skilled
      professionals like gardeners, plumbers, cleaners, and more for your local
      needs. Discover and connect with reliable workers in your area.
    </p>

    <Feed />
  </section>
);

export default Home;
