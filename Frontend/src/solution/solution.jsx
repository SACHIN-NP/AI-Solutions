import React, { useEffect } from "react";
import "./solution.css"; // Updated CSS file name for better organization
import { useTranslation } from "react-i18next";
import farmer from "../assets/farmer.jpg";

export const Sector1 = () => {
  useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  const { t } = useTranslation();

  return (
    <section className="sector1">
      <div className="sector1-text">
        <h2>{t("welcome")}</h2>
        <p>
          Transition to clean, renewable energy and enhance your farm's
          efficiency. Achieve sustainability and cost savings while ensuring
          energy reliability.
        </p>
        <ul>
          <li>✓ Save up to 70% on energy costs</li>
          <li>✓ Tailored solar energy solutions</li>
          <li>✓ Dependable, long-lasting systems</li>
        </ul>
        <button className="btn-primary">Learn More</button>
      </div>
      <div className="sector1-image">
        <img src={farmer} alt="Farmer working in the field" />
      </div>
    </section>
  );
};

const Sector2 = () => {
  const benefits = [
    {
      title: "Leverage AI",
      percentage: "70",
      description: "Reduce claims processing costs with advanced AI solutions.",
    },
    {
      title: "Lower Costs",
      percentage: "22",
      description: "Significant reduction in operational costs by 2025.",
    },
    {
      title: "Increase Revenue",
      percentage: "16",
      description:
        "Drive growth through enhanced customer engagement and innovative offerings.",
    },
  ];

  return (
    <section className="sector-two">
      <h2 className="section-title">Transforming Insurance with Technology</h2>
      <div className="sector-two-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="percentage-container">
              <h1 className="percentage">{benefit.percentage}</h1>
              <span>%</span>
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const AiSolutions = () => {
  return (
    <section className="ai-solutions">
      <h1 className="ai-title">Embed AI across the oil and gas lifecycle</h1>
      <div className="ai-sections">
        {/* Upstream Section */}
        <div className="ai-column">
          <h2>Enhance upstream exploration and production</h2>
          <p>
            Guide informed long-term capital decisions and reduce geological
            risk with AI models that analyze complex reservoir data and market
            trends to provide accurate forecasts of product flow, demand, and
            pricing.
          </p>
          <ul>
            <li>Drill sites selection</li>
            <li>Drill bit failure forecasting</li>
            <li>Automated predictions using geologic data</li>
            {/* Add more items as needed */}
          </ul>
        </div>

        {/* Midstream Section */}
        <div className="ai-column">
          <h2>Improve midstream operations, maintenance, and safety</h2>
          <p>
            Use DataRobot to create a portfolio of predictive and generative
            applications that improve well design, drilling, and completion
            efficiency.
          </p>
          <ul>
            <li>Equipment and component failure prediction</li>
            <li>Service cost prediction</li>
            <li>Personnel demand forecasting</li>
            {/* Add more items as needed */}
          </ul>
        </div>

        {/* Downstream Section */}
        <div className="ai-column">
          <h2>Optimize downstream operations</h2>
          <p>
            Quickly deliver AI insights that optimize for maximum lifetime well
            production, forecast commodity prices, and anticipate potential
            health and safety risks throughout the energy lifecycle.
          </p>
          <ul>
            <li>Vehicle and outlet location planning</li>
            <li>Flow rate optimization</li>
            <li>Pressure optimization</li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

const PreviousSolutions = () => {
  const solutions = [
    {
      challenge: "Manual data processing inefficiencies in banking",
      solution:
        "Implemented AI to automate loan approvals, reducing processing time by 70%.",
    },
    {
      challenge: "High operational costs in energy production",
      solution:
        "Optimized upstream and downstream operations with predictive analytics.",
    },
    {
      challenge: "Low customer engagement in insurance services",
      solution:
        "Introduced personalized recommendations using AI-driven insights.",
    },
  ];

  return (
    <section className="previous-solutions">
      <h2 className="section-title">Previous AI Solutions</h2>
      <div className="solutions-container">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card">
            <h3 className="solution-challenge">{solution.challenge}</h3>
            <p className="solution-description">{solution.solution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Solution = () => {
  return (
    <>
      <Sector1 />
      <Sector2 />
      <AiSolutions />
      <PreviousSolutions />
    </>
  );
};

export default Solution;
