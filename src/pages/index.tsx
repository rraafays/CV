import React from "react";

const App: React.FC = () => {
  return (
    <div style={{ margin: "40px" }}>
      <div>
        <h1>Abdul Raafay Shahid</h1>
        <p>
          14 Carr Manor Walk | Leeds, LS17 5DN | (+44) 07802805827 |
          rraf@tuta.io
        </p>
      </div>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          margin: "20px",
          display: "flex",
        }}
      >
        {/* Left Column */}
        <div style={{ width: "35%", paddingRight: "20px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2>Links</h2>
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
            <h2>Proficiency</h2>
            <ul>
              <li>Python 1000</li>
              <li>C# 0100</li>
              <li>Java 0100</li>
              <li>NextJS 0010</li>
              <li>React Native 0010</li>
              <li>C 0100</li>
              <li>C 0001</li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Languages</h2>
            <ul>
              <li>English: Fluent</li>
              <li>Spanish: Intermediate</li>
              <li>Urdu: Beginner</li>
              <li>Punjabi: Beginner</li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Passions</h2>
            <p>
              Cooking, Cars, Device Restoration, Painting, Drawing, Motor
              Mechanics, Electrical Engineering.
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Education</h2>
            <p>
              <b>BEng Software Engineering</b>
              <br />
              Sheffield Hallam University
              <br />
              <b>2020 - present</b>
              <br /> <br />
            </p>
            <p>
              <b>A-Level Computer Science (C), Maths (C), Economics (D)</b>
              <br />
              Notre Dame Catholic Sixth Form College
              <br />
              <b>2018 - 2020</b>
              <br /> <br />
            </p>
            <p>
              <b>
                GCSE Computer Science (A*), Maths (7), English (6 5), Combined
                Science (6 5), Geography (6), Spanish (5), IT (B)
              </b>
              <br />
              Allerton High School
              <br />
              <b>2013 - 2018</b>
              <br /> <br />
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div style={{ width: "65%" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2>About</h2>
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
            <h2>Notable Projects</h2>
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
            <h2>Work Experience</h2>
            <p>Pizza Chef, Ecco Pizzeria, August 2022 - February 2023</p>
            <p>Voluntary Technician, AALFY, August 2021 - December 2022</p>
            <p>Front of House, Friesday, August 2021 - July 2022</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
