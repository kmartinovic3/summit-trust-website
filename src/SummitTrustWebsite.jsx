import React from "react";
import { Mail, Phone } from "lucide-react";

export default function SummitTrustWebsite() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f6f9" }}>
      {/* HEADER */}
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img
          src="/logo.png"
          alt="Summit Trust & Financial Logo"
          style={{ width: "120px", height: "auto", marginBottom: "1rem" }}
        />
        <h1 style={{ color: "#2d4a73" }}>Summit Trust & Financial</h1>
        <p style={{ color: "#6c7a89" }}>Rooted in Lexington. Reimagined for Tomorrow.</p>
      </header>

      {/* MISSION / INITIATIVES / PRESENTATION */}
      <section style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        marginBottom: "2rem"
      }}>
        <div style={cardStyle}>
          <h2 style={h2Style}>Our Mission</h2>
          <p>
            Since 1850, Summit Trust & Financial has stood strong through economic challenges.
            Now, we’re rebuilding with transparency, integrity, and a digital-first mindset to serve our community better.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={h2Style}>New Initiatives</h2>
          <ul>
            <li>Transparent, ethical banking practices</li>
            <li>Revamped customer service experience</li>
            <li>Modern logo and website redesign</li>
            <li>Financial education via social media</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={h2Style}>Upcoming Presentation</h2>
          <p>
            📣 Join us on <strong>April 29th</strong> for our Strategic Reveal. Sign up to stay informed!
          </p>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <input
              type="email"
              placeholder="Your email"
              style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            <button
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#2a3f5f",
                color: "#fff",
                border: "none",
                borderRadius: "4px"
              }}
            >
              Notify Me
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={h2Style}>Our Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginTop: "1rem" }}>
          {[
            ["Checking & Savings", "Simple, secure everyday banking"],
            ["Business Loans", "Flexible funding for growth"],
            ["Investment Advice", "Smart planning for your future"],
            ["Mobile App", "Your money at your fingertips"]
          ].map(([title, desc], i) => (
            <div key={i} style={cardStyle}>
              <h3 style={{ color: "#2a3f5f" }}>{title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section style={{ marginTop: "3rem", textAlign: "center" }}>
        <h2 style={h2Style}>Meet Our Team</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
          {[
            ["Zachary Dornoff", "Marketing & Engagement"],
            ["Colin Gastright", "Client Experience"],
            ["Kristian Martinovic", "Chief Financial Officer"],
            ["Jeff Eveland", "Chief Integrity Officer"]
          ].map(([name, title], i) => (
            <div key={i} style={cardStyle}>
              <strong>{name}</strong><br />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        marginTop: "3rem",
        fontSize: "0.9rem",
        color: "#666",
        paddingTop: "1rem",
        borderTop: "1px solid #ccc"
      }}>
        <p>&copy; 2025 Summit Trust & Financial. All rights reserved.</p>
        <p>
          <Mail size={16} style={{ verticalAlign: "middle" }} /> zdornoff@summittrust.com {" | "}
          <Phone size={16} style={{ verticalAlign: "middle" }} /> (555) 918-2043 {" | "}
          <a
            href="https://www.instagram.com/summittrustlex?igsh=NGZmZGNkYzdtd3Vm"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2d4a73", textDecoration: "none", marginLeft: "6px" }}
          >
            📸 Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "1.25rem",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  width: "280px",
  textAlign: "left"
};

const h2Style = {
  color: "#2d4a73",
  marginBottom: "0.75rem"
};
