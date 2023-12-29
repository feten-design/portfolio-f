import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Skills of a Web Developer</p>  </div>

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">ANGULAR <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Express <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">REACT <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">MongoDB & NoSql <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* <div className="progress">
              <span className="skill">APIs <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
              </div>
            </div> */}

             <div className="progress">
              <span className="skill">SPRINGBOOT <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">GOLANG <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: '55%' }}></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
