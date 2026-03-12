import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>CTTC – Govt. of India</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built machine learning models using TensorFlow and Scikit-learn.
              Developed data pipelines and neural network models for real-world applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>METABRIQ</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed responsive user interfaces using React.js and CSS.
              Integrated RESTful APIs to create dynamic, data-driven dashboards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Student Ambassador</h4>
                <h5>Google</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Organized Google Cloud, Firebase, and AI learning events for students.
              Increased campus developer engagement through workshops and mentorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
