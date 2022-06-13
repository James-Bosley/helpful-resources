import "./home.scss";

const Home = () => {
  return (
    <section className="homepage">
      <h2 className="homepage__title">Welcome to Helpful Resources</h2>
      <p className="homepage__info">
        Congratualtions on making it this far on your web dev journey, we're sure it wasnt easy!
      </p>
      <p className="homepage__info">
        Here we have put together a carefully curated selection of resources to help you understand
        the topics you have covered in your lectures and labs. Some of the resources you will find
        here are intended as deeper dives, so don't worry if you don't understand all of them at
        this point - but come back in a few weeks and you might find you are already an expert.
        Also, this means Joe doesn't have to worry about sending anthing out after the lectures
        anymore. Win - win.
      </p>
      <p className="homepage__info">
        To get started, click a topic on the left, or search for a topic.
      </p>
    </section>
  );
};
export default Home;
