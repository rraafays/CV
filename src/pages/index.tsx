import React from "react";
import "@fontsource/iosevka-curly";

const App: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Iosevka Term Curly",
        margin: "40px",
      }}
    >
      <div>
        <h1>Abdul Raafay Shahid</h1>
        <p>
          14 Carr Manor Walk | Leeds, LS17 5DN | (+44) 07802805827 |
          rraf@tuta.io
        </p>
      </div>
      <div
        style={{
          margin: "20px",
          display: "flex",
        }}
      >
        {/* Left Column */}
        <div style={{ width: "35%", paddingRight: "20px", fontSize: "16px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Links</h2>
            <ul>
              <li>
                <a href="https://raafay.world/projects">
                  raafay.world/projects
                </a>
              </li>
              <li>
                <a href="https://github.com/rraafays">github.com/rraafays</a>
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Technologies</h2>
            <ul>
              <li>Rust</li>
              <li>Java</li>
              <li>C#</li>
              <li>Typescript</li>
              <li>Javasript</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Languages</h2>
            <ul>
              <li>English: Native</li>
              <li>Spanish: Intermediate</li>
              <li>Urdu: Beginner</li>
              <li>Punjabi: Beginner</li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Passions</h2>
            <p>
              Martial Arts, Muay Thai, Cooking, Painting, Technology
              Restoration, Motor Mechanics, Digital Minimalism
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Education</h2>
            <p>
              BEng Software Engineering
              <br />
              <b>Sheffield Hallam University</b>
              <br />
              2020 - present
              <br /> <br />
            </p>
            <p>
              A-Level Computer Science (C), Maths (C), Economics (D)
              <br />
              <b>Notre Dame Catholic Sixth Form College</b>
              <br />
              2018 - 2020
              <br /> <br />
            </p>
            <p>
              GCSE Computer Science (A*), Maths (7), English (6 5), Combined
              Science (6 5), Geography (6), Spanish (5), IT (B)
              <br />
              <b>Allerton High School</b>
              <br />
              2013 - 2018
              <br /> <br />
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div style={{ width: "65%", fontSize: "16px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>About</h2>
            <p>
              Raafay is currently studying Software Engineering at Sheffield
              Hallam University. He is currently looking for a year in industry
              to supplement his university education.
              <br /> <br />
            </p>
            <p>
              He has been studying software-based subjects for over 5 years;
              initially pursuing Computer Science as an extracurricular interest
              which eventually led on to formal education having studied
              Computer Science at both GCSE and A-Level prior to starting his
              Software Engineering degree.
              <br /> <br />
            </p>
            <p>
              Being naturally gifted when it comes to learning programming
              languages, he taught himself C. This allowed him to apply his
              skills and knowledge to develop, optimise and maintain his
              personal Gentoo Linux system which heavily relies on knowledge of
              core computing and the C programming language amongst other
              compiled languages.
              <br /> <br />
            </p>
            <p>
              Raafay has an avid interest in free open-source software since he
              started using UNIX operating systems.
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Notable Projects</h2>
            <ul>
              <li>Intel 8080 Emulator | April 2017</li>
              <li>Uber-Inspired Taxi Application | February 2020</li>
              <li>Personal Website | June 2022</li>
              <li>Pomodoro Timer | July 2022</li>
              <li>Banking System | November 2022</li>
              <li>Multi-Threaded Client-Server Chat | January 2023</li>
              <li>Pomo | July 2023</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "16px" }}>Work Experience</h2>
            <b>Placement Software Engineer: Cognitran Limited</b>
            <br />
            August 2023 - August 2024
            <br />
            <b>Pizza Chef: Ecco Pizzeria</b>
            <br />
            August 2022 - February 2023
            <br />
            <b>Voluntary Technician: AALFY</b>
            <br />
            August 2021 - December 2022
            <br />
            <b>Front of House: Friesday</b>
            <br />
            August 2021 - July 2022
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
