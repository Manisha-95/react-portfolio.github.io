import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

const Main= () => {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQF-D1MRQ2iezQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701323908711?e=1735776000&v=beta&t=kQupCOfaEzkjZVDopSyutA3ljduoc998dwwdbOYAGmY" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Manisha-95" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/madhavi-sappa-022915ab" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Madhavi Rao</h1>
          <p>Senior Front-End Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Manisha-95" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/madhavi-sappa-022915ab" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;