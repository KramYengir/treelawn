import "./About.css";
import img1 from "../../assets/images/guy-clipping.jpg";
import img2 from "../../assets/images/tree-cutting.jpg";
import img3 from "../../assets/images/guy-rope.jpeg";
import img4 from "../../assets/images/woodcutter.jpg";
import treelawnLogo from "../../assets/images/Treelawn_2.png";

const About = () => {
  return (
    <section id="about" className="container about">
      <div className="about__images">
        <div className="logo">
          <img src={treelawnLogo} role="presentation" alt="treelawn logo" />
        </div>
        <div className="img-wrapper">
          <img
            src={img1}
            role="presentation"
            alt="a man using hedge clippers"
          />
        </div>
        <div className="img-wrapper">
          <img
            src={img2}
            role="presentation"
            alt="a man cutting a tree with a chainsaw"
          />
        </div>
        <div className="img-wrapper">
          <img
            src={img3}
            role="presentation"
            alt="a man climbing a tree using rope tools"
          />
        </div>
        <div className="img-wrapper">
          <img src={img4} role="presentation" alt="a woodchipper in use" />
        </div>
      </div>
      <div className="about__info">
        <h2>What Treelawn represents</h2>
        <p>
          At Treelawn, we pride ourselves on over 20 years of dedicated
          experience in the arboriculture and landscaping industry. As a solo
          operator, I bring a personal touch to every project, ensuring
          attention to detail and a focus on customer satisfaction.
          <br />
          <br />
          With a passion for preserving the natural beauty of outdoor spaces,
          Treelawn combines expertise, professional-grade equipment, and
          industry certification to deliver exceptional results. Whether
          it&apos;s tree maintenance, garden renovation, or pathway clearing,
          you can trust Treelawn for expert service and lasting quality.
        </p>
        <a href="#contact" className="btn btn-primary">
          Get In Touch!
        </a>
      </div>
    </section>
  );
};

export default About;
