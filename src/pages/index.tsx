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
        <div style={{ width: "35%", paddingRight: "20px", fontSize: "14px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Links</h2>
            <ul style={{ listStyleType: "none" }}>
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
            <ul style={{ listStyleType: "none" }}>
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
            <ul style={{ listStyleType: "none" }}>
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
              Raafay "Raf" Shahid is a passionate and versatile software
              engineer with a deep-rooted love for programming that began at the
              age of 13. Raf is a confident and sociable individual with a
              strong technical foundation and a broad range of interests.
              <br /> <br />
            </p>
            <p>
              Outside of software engineering, Raf has been practicing Muay Thai
              for over a year, enjoys cooking both at home and professionally,
              and has a long-standing passion for painting. He also restores
              vintage and modern technology and is learning motor mechanics from
              his father. Committed to digital minimalism, Raf ensures a
              balanced and focused approach to both his personal and
              professional life.
              <br />
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Notable Projects</h2>
            <ul style={{ listStyleType: "none" }}>
              <b>FRMWRK: reproducible laptop system</b>
              <br />
              September 2024
              <br />
              <b>Doro: pomodoro timer written in rust</b>
              <br />
              July 2023
              <br />
              <b>Socks: multi-threaded socket based chat</b>
              <br />
              January 2023
              <br />
              <b>SHU Bank: small-scale online banking </b>
              <br />
              November 2022
              <br />
              <b>Personal Website: projects & passions showcase</b>
              <br />
              July 2022
              <br />
              <b>SHUber: Uber-inspired taxi application</b>
              <br />
              February 2020
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
