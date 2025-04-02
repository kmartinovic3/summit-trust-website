import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function SummitTrustWebsite() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f6f9" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img
          src="logo.png"
          alt="Summit Trust & Financial Logo"
          style={{ width: "120px", height: "auto", objectFit: "contain", marginBottom: "1rem" }}
        />
        <h1 style={{ color: "#2a3f5f" }}>Summit Trust & Financial</h1>
        <p style={{ color: "#6c7a89" }}>Rooted in Lexington. Reimagined for Tomorrow.</p>
      </header>

      <section
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginBottom: "2rem"
        }}
      >
        <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h2 style={{ color: "#2a3f5f" }}>Our Mission</h2>
          <p>
            Since 1850, Summit Trust & Financial has stood strong through economic challenges. Now, we’re rebuilding with transparency, integrity, and a digital-first mindset to serve our community better.
          </p>
        </div>
        <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h2 style={{ color: "#2a3f5f" }}>New Initiatives</h2>
          <ul>
            <li>Transparent, ethical banking practices</li>
            <li>Revamped customer service experience</li>
            <li>Modern logo and website redesign</li>
            <li>Financial education via social media</li>
          </ul>
        </div>
        <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h2 style={{ color: "#2a3f5f" }}>Upcoming Presentation</h2>
          <p>
            📣 Join us on <strong>April 29th</strong> for our Strategic Reveal. Sign up below to stay informed!
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

      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2 style={{ color: "#2a3f5f", marginBottom: "1rem" }}>Meet Our Team</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem"
          }}
        >
          {["Zachary Dornoff", "Colin Gastright", "Kristian Martinovic", "Jeff Eveland"].map((name, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#ffffff",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                width: "200px"
              }}
            >
              <strong>{name}</strong>
              <br />
              <span>
                {["Marketing & Engagement", "Client Experience", "Chief Financial Officer", "Chief Integrity Officer"][i]}
              </span>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "3rem",
          fontSize: "0.9rem",
          color: "#666",
          paddingTop: "1rem",
          borderTop: "1px solid #ccc"
        }}
      >
        <p>&copy; 2025 Summit Trust & Financial. All rights reserved.</p>
        <p>Email: zdornoff@summittrust.com | Phone: (555) 918-2043</p>
      </footer>
    </div>
  );
}
