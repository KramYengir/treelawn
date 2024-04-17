import "./Hero.css";

const Hero = () => {
  // Function to handle keyboard events
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      // Handle button click action here
      event.target.click();
    }
  };

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
          <a
            href="#services"
            className="btn"
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            My Services
          </a>
          <a
            href="#contact"
            className="btn btn-primary"
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            Get in touch!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
