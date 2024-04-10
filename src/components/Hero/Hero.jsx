import "./Hero.css";

const Hero = () => {
  return (
    <section className="container hero">
      <h2>
        shape your land the <span>right</span> way
      </h2>
      <div className="cta">
        <p>
          Transforming landscapes, one tree at a time. Whether it&apos;s garden
          renovation, tree maintenance, or pathway clearing, you&apos;ve come to
          the right place!
        </p>
        <div className="cta__buttons">
          <a href="#services" className="btn">
            My Services
          </a>
          <a href="#contact" className="btn btn-primary">
            Get in touch!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
