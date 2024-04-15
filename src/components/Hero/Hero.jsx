import "./Hero.css";

const Hero = () => {
  return (
    <section className="container hero">
      <h2>
        shape your land the <span>right</span> way
      </h2>
      <div className="cta">
        <p>
          With over two decades of hands-on experience specializing in tree
          work, Treelawn stands as a trusted one-man operation committed to
          excellence in outdoor services.
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
