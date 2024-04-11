import "./Services.css";
import { TbTrees } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";
import { BsWater } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services" className="container services">
      <h2>What I can Do for you</h2>
      <div className="service-list">
        <div className="service-list__card">
          <div className="card__icon">
            <TbTrees />
          </div>
          <p>
            As a skilled landscaper and arborist, I specialize in tree
            maintenance and management, including expert tree cutting and
            clearance services.
          </p>
        </div>
        <div className="service-list__card">
          <div className="card__icon">
            <MdElectricBolt />
          </div>
          <p>
            Certified by the ESB, my expertise extends to safely removing trees
            and clearing vegetation around power lines and other sensitive
            areas.
          </p>
        </div>
        <div className="service-list__card">
          <div className="card__icon">
            <BsWater />
          </div>
          <p>
            I specialize in tree care services for riverways. From pruning for
            waterway navigation to erosion control along riverbanks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
