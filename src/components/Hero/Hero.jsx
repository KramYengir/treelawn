import "./Hero.css";

const Hero = () => {
  return (
    <section className="container hero">
      <h2>shape your land the right way</h2>
      <div className="cta">
        <p>
          Transforming landscapes, one tree at a time. Whether it&apos;s garden
          renovation, tree maintenance, or pathway clearing, you&apos;ve come to
          the right place!
        </p>
        <div className="cta__buttons">
          <button className="btn">Services</button>
          <button className="btn btn-primary">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
