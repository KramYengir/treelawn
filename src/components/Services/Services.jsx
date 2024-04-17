import "./Services.css";
import { TbTrees } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";
import { BsWater } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services" className="container services">
      <h2>What I Can Do for You</h2>
      <ul className="service-list">
        <li className="service-list__item">
          <TbTrees className="service-list__icon" aria-label="Trees" />
          <p className="service-list__description">
            As a skilled landscaper and arborist, I specialize in tree
            maintenance and management, including expert tree cutting and
            clearance services.
          </p>
        </li>
        <li className="service-list__item">
          <MdElectricBolt
            className="service-list__icon"
            aria-label="Electricity"
          />
          <p className="service-list__description">
            Certified by the ESB, my expertise extends to safely removing trees
            and clearing vegetation around power lines and other sensitive
            areas.
          </p>
        </li>
        <li className="service-list__item">
          <BsWater className="service-list__icon" aria-label="Water" />
          <p className="service-list__description">
            I specialize in tree care services for riverways. From pruning for
            waterway navigation to erosion control along riverbanks.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Services;
