import React, { useEffect } from "react";
import "./solution.css"; // Reuse the same CSS file

import phot from "../assets/solution/ph1.jpg";
import { Link, Navigate } from "react-router-dom";

export const AutomationSector1 = () => {
  useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  return (
    <section className="sector1">
      <div className="sector1-text">
        <h2>Automation Solutions</h2>
        <p>
          Revolutionize industrial operations with cutting-edge automation
          solutions. Boost productivity, reduce costs, and drive innovation
          across diverse industries.
        </p>
        <ul>
          <li>✓ Automate repetitive tasks to enhance efficiency</li>
          <li>✓ Minimize downtime with predictive maintenance</li>
          <li>✓ Optimize processes with AI and IoT integration</li>
        </ul>
        <Link to={"/AutomationSolutions"}>
          <button className="btn-primary">Learn More</button>
        </Link>
      </div>
      <div className="sector1-image">
        <img src={phot} alt="Factory floor with automated machinery" />
      </div>
    </section>
  );
};

const AutomationSector2 = () => {
  const benefits = [
    {
      title: "Operational Efficiency",
      percentage: "50",
      description:
        "Automate workflows and processes to improve operational efficiency.",
    },
    {
      title: "Downtime Reduction",
      percentage: "40",
      description: "Reduce equipment downtime with predictive maintenance.",
    },
    {
      title: "Cost Savings",
      percentage: "30",
      description: "Lower operational costs with intelligent automation.",
    },
  ];

  return (
    <section className="sector-two">
      <h2 className="section-title">Transforming Industries with Automation</h2>
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

const AutomationAiSolutions = () => {
  return (
    <section className="ai-solutions">
      <h1 className="ai-title">AI-Powered Automation Solutions</h1>
      <div className="ai-sections">
        {/* Manufacturing Section */}
        <div className="ai-column">
          <h2>Manufacturing Automation</h2>
          <p>
            Deploy smart factories with IoT and robotics to streamline
            production and ensure quality control.
          </p>
          <ul>
            <li>Robotics in assembly lines</li>
            <li>Quality control with AI</li>
            <li>Predictive maintenance for equipment</li>
          </ul>
        </div>

        {/* Retail Section */}
        <div className="ai-column">
          <h2>Retail Automation</h2>
          <p>
            Use AI and IoT to automate inventory management, enable cashier-less
            stores, and personalize customer experiences.
          </p>
          <ul>
            <li>Smart inventory systems</li>
            <li>Personalized marketing</li>
            <li>Automated checkout</li>
          </ul>
        </div>

        {/* Healthcare Section */}
        <div className="ai-column">
          <h2>Healthcare Automation</h2>
          <p>
            Enhance patient care with automated diagnostics, optimized
            scheduling, and AI-powered assistance for medical professionals.
          </p>
          <ul>
            <li>Automated patient scheduling</li>
            <li>AI diagnostics</li>
            <li>Medical record digitization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const AutomationPreviousSolutions = () => {
  const solutions = [
    {
      challenge: "High operational costs in manufacturing",
      solution:
        "Deployed robotic automation, reducing manual errors and costs by 40%.",
    },
    {
      challenge: "Frequent equipment failures causing downtime",
      solution:
        "Implemented IoT-based predictive maintenance, lowering downtime by 50%.",
    },
    {
      challenge: "Slow customer service in retail",
      solution:
        "Introduced AI chatbots and automated inventory systems, enhancing service speed by 30%.",
    },
  ];

  return (
    <section className="previous-solutions">
      <h2 className="section-title">Success Stories in Automation</h2>
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

// Add the AutomationSolutions component
const AutomationSolutions = () => {
  return (
    <>
      <AutomationSector1 />
      <AutomationSector2 />
      <AutomationAiSolutions />
      <AutomationPreviousSolutions />
    </>
  );
};

export default AutomationSolutions;
