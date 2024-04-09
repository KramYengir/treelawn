import "./About.css";
import img1 from "../../assets/images/guy-clipping.jpg";
import img2 from "../../assets/images/guy-in-tree.jpg";
import img3 from "../../assets/images/guy-rope.jpeg";
import img4 from "../../assets/images/woodcutter.jpg";

const About = () => {
  return (
    <section className="container about">
      <div className="about__images">
        <div className="img-wrapper">
          <img src={img1} alt="" />
        </div>
        <div className="img-wrapper">
          <img src={img2} alt="" />
        </div>
        <div className="img-wrapper">
          <img src={img3} alt="" />
        </div>
        <div className="img-wrapper">
          <img src={img4} alt="" />
        </div>
      </div>
      <div className="about__info">
        <h2>How I got started in this business</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Feugiat sed amet diam nisi id.
          Tellus quis neque eu aliquet. Duis ut faucibus non etiam eget felis
          vestibulum.
          <br />
          <br />
          Amet pretium fringilla morbi tincidunt sit semper. Accumsan purus et
          turpis purus ultrices nisi maecenas. A adipiscing enim.
        </p>
        <a href="#" className="btn btn-primary">
          Get In Touch!
        </a>
      </div>
    </section>
  );
};

export default About;
