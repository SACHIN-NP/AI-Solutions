import React, { useEffect } from "react";
import "./solution.css"; // Reuse the same CSS file
import { useTranslation } from "react-i18next";
import pht from "../assets/solution/ph2.jpg";

const FinanceSector1 = () => {
  useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  const { t } = useTranslation();

  return (
    <section className="sector1">
      <div className="sector1-text">
        <h2>Finanical Solutions</h2>
        <p>
          Revolutionize financial operations with advanced AI solutions. Drive
          precision, enhance decision-making, and unlock unparalleled
          efficiencies in the financial industry.
        </p>
        <ul>
          <li>✓ Automate risk assessment with AI</li>
          <li>✓ Reduce fraud and ensure compliance</li>
          <li>✓ Deliver personalized customer experiences</li>
        </ul>
        <button className="btn-primary">Learn More</button>
      </div>
      <div className="sector1-image">
        <img src={pht} alt="Finance professionals analyzing data" />
      </div>
    </section>
  );
};

const FinanceSector2 = () => {
  const benefits = [
    {
      title: "Fraud Detection",
      percentage: "85",
      description: "Detect fraudulent activities in real-time using AI.",
    },
    {
      title: "Operational Efficiency",
      percentage: "40",
      description:
        "Enhance operational efficiency with intelligent automation.",
    },
    {
      title: "Customer Retention",
      percentage: "25",
      description:
        "Boost customer retention with personalized financial services.",
    },
  ];

  return (
    <section className="sector-two">
      <h2 className="section-title">Transforming Finance with AI</h2>
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

const FinanceAiSolutions = () => {
  return (
    <section className="ai-solutions">
      <h1 className="ai-title">AI Across Financial Operations</h1>
      <div className="ai-sections">
        {/* Risk Management Section */}
        <div className="ai-column">
          <h2>Enhance Risk Management</h2>
          <p>
            Leverage predictive analytics to assess creditworthiness, detect
            potential risks, and forecast market trends with high precision.
          </p>
          <ul>
            <li>Credit risk prediction</li>
            <li>Market trend analysis</li>
            <li>Fraud detection models</li>
          </ul>
        </div>

        {/* Customer Insights Section */}
        <div className="ai-column">
          <h2>Enhance Customer Insights</h2>
          <p>
            Use AI to analyze customer data, deliver personalized financial
            advice, and optimize product offerings to meet client needs.
          </p>
          <ul>
            <li>Personalized investment plans</li>
            <li>Customer segmentation</li>
            <li>Behavioral analysis</li>
          </ul>
        </div>

        {/* Compliance and Operations Section */}
        <div className="ai-column">
          <h2>Streamline Compliance and Operations</h2>
          <p>
            Ensure regulatory compliance, minimize risks, and automate routine
            processes for seamless operations across financial services.
          </p>
          <ul>
            <li>Regulatory compliance automation</li>
            <li>Document digitization</li>
            <li>Predictive maintenance for systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const FinancePreviousSolutions = () => {
  const solutions = [
    {
      challenge: "Slow credit risk assessment processes",
      solution:
        "Integrated AI models to automate credit scoring, reducing approval time by 60%.",
    },
    {
      challenge: "High levels of fraudulent transactions",
      solution:
        "Implemented AI-powered fraud detection systems, identifying 85% of fraudulent activities in real-time.",
    },
    {
      challenge: "Low customer satisfaction in financial services",
      solution:
        "Enhanced customer experience through personalized recommendations and chatbots.",
    },
  ];

  return (
    <section className="previous-solutions">
      <h2 className="section-title">Past AI Solutions in Finance</h2>
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

const FinanceSolutions = () => {
  return (
    <>
      <FinanceSector1 />
      <FinanceSector2 />
      <FinanceAiSolutions />
      <FinancePreviousSolutions />
    </>
  );
};

export default FinanceSolutions;
