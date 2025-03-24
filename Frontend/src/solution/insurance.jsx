import React, { useEffect } from "react";
import "./solution.css"; // Reuse the same CSS file
import { useTranslation } from "react-i18next";
import phot from "../assets/solution/ph3.jpg";

const InsuranceSector1 = () => {
  useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  const { t } = useTranslation();

  return (
    <section className="sector1">
      <div className="sector1-text">
        <h2>Insurance Solutions</h2>
        <p>
          Modernize insurance processes with AI-powered technologies. Enhance
          efficiency, streamline claims management, and deliver exceptional
          customer service with tailored solutions.
        </p>
        <ul>
          <li>✓ Automate claims processing and reduce manual errors</li>
          <li>✓ Detect fraud in real-time</li>
          <li>✓ Personalize policy offerings for customer needs</li>
        </ul>
        <button className="btn-primary">Learn More</button>
      </div>
      <div className="sector1-imae">
        <div className="ins_photo">
          <img src={phot} alt="Insurance professional analyzing data" />
        </div>
      </div>
    </section>
  );
};

const InsuranceSector2 = () => {
  const benefits = [
    {
      title: "Claims Automation",
      percentage: "80",
      description: "Streamline claims processing with AI-driven automation.",
    },
    {
      title: "Fraud Detection",
      percentage: "85",
      description:
        "Detect fraudulent activities in real-time, reducing losses.",
    },
    {
      title: "Customer Retention",
      percentage: "30",
      description: "Improve customer retention through personalized policies.",
    },
  ];

  return (
    <section className="sector-two">
      <h2 className="section-title">Revolutionizing Insurance with AI</h2>
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

const InsuranceAiSolutions = () => {
  return (
    <section className="ai-solutions">
      <h1 className="ai-title">AI Across Insurance Operations</h1>
      <div className="ai-sections">
        {/* Claims Management Section */}
        <div className="ai-column">
          <h2>Optimize Claims Management</h2>
          <p>
            Use AI-powered tools to automate claims processing, ensuring faster
            settlements and improved accuracy in payout decisions.
          </p>
          <ul>
            <li>Automated claim assessments</li>
            <li>Document analysis with OCR</li>
            <li>Real-time fraud detection</li>
          </ul>
        </div>

        {/* Underwriting Section */}
        <div className="ai-column">
          <h2>Enhance Underwriting Processes</h2>
          <p>
            Leverage predictive analytics to assess risks accurately, tailor
            policies, and provide dynamic pricing options to customers.
          </p>
          <ul>
            <li>Risk profiling and segmentation</li>
            <li>Dynamic policy pricing</li>
            <li>Enhanced data-driven decision-making</li>
          </ul>
        </div>

        {/* Customer Engagement Section */}
        <div className="ai-column">
          <h2>Transform Customer Engagement</h2>
          <p>
            Deliver a seamless customer experience by using AI to personalize
            recommendations, improve response times, and resolve queries
            efficiently.
          </p>
          <ul>
            <li>Chatbots for 24/7 support</li>
            <li>Personalized policy recommendations</li>
            <li>Behavioral analysis for targeted offerings</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const InsurancePreviousSolutions = () => {
  const solutions = [
    {
      challenge: "Slow and inefficient claims processing",
      solution:
        "Implemented AI-driven automation, reducing claims settlement time by 70%.",
    },
    {
      challenge: "Rising fraudulent insurance claims",
      solution:
        "Deployed fraud detection models, identifying 85% of fraudulent claims in real-time.",
    },
    {
      challenge: "Low customer satisfaction",
      solution:
        "Introduced personalized policy suggestions and AI chatbots for instant support.",
    },
  ];

  return (
    <section className="previous-solutions">
      <h2 className="section-title">Past AI Solutions in Insurance</h2>
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

const InsuranceSolutions = () => {
  return (
    <>
      <InsuranceSector1 />
      <InsuranceSector2 />
      <InsuranceAiSolutions />
      <InsurancePreviousSolutions />
    </>
  );
};

export default InsuranceSolutions;
