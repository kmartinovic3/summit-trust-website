import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function SummitTrustWebsite() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img
          src="/logo.png"
          alt="Summit Trust & Financial Logo"
          style={{ width: "120px", height: "auto", objectFit: "contain", marginBottom: "1rem" }}
        />
        <h1 style={{ color: "#2d4a73" }}>Summit Trust & Financial</h1>
        <p style={{ color: "#555" }}>Rooted in Lexington. Reimagined for Tomorrow.</p>
      </header>

      <section
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginBottom: "2rem"
        }}
      >
        <div style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h2 style={{ color: "#2d4a73" }}>Our Mission</h2>
          <p>
            Since 1850, Summit Trust & Financial has stood strong through economic challenges. Now, we’re rebuilding with transparency, integrity, and a digital-first mindset to serve our community better.
          </p>
        </div>
        <div style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h2 style={{ color: "#2d4a73" }}>New Initiatives</h2>
          <ul>
            <li>Transparent, ethical banking practices</li>
            <li>Revamped customer service experience</li>
            <li>Modern logo and website redesign</li>
            <li>Financial education via social media</li>
          </ul>
        </div>
        <div style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h2 style={{ color: "#2d4a73" }}>Upcoming Presentation</h2>
          <p>
            📣 Join us on <strong>April 29th</strong> for our Strategic Reveal. More details to come!
            Sign up to stay informed.
          </p>
          <input
            placeholder="Your email"
            style={{ padding: "0.5rem", width: "70%", marginTop: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <button style={{ padding: "0.5rem", marginLeft: "0.5rem", backgroundColor: "#2d4a73", color: "white", border: "none", borderRadius: "4px" }}>
            Notify Me
          </button>
        </div>
      </section>

      <section style={{ marginTop: "3rem", textAlign: "center" }}>
        <h2 style={{ color: "#2d4a73" }}>Meet Our Team</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem"
          }}
        >
          {["Zachary Dornoff", "Colin Gastright", "Kristian Martinovic", "Jeff Eveland"].map((name, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#ffffff",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                width: "220px"
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

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ textAlign: "center", color: "#2d4a73" }}>Our Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginTop: "1rem" }}>
          {["Personal Banking", "Business Loans", "Investment Guidance", "Mobile Banking"].map((service, index) => (
            <div key={index} style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "8px", width: "200px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <h3 style={{ color: "#2d4a73", fontSize: "1.1rem" }}>{service}</h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>Learn more about our {service.toLowerCase()} offerings.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ textAlign: "center", color: "#2d4a73" }}>Financial Tips</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginTop: "1rem" }}>
          {["How to Build a Budget", "Understanding Credit Scores", "Tips for First-Time Investors", "What Are Bank Fees?"]).map((tip, index) => (
            <div key={index} style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "8px", width: "240px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <h3 style={{ color: "#2d4a73", fontSize: "1rem" }}>{tip}</h3>
              <p style={{ fontSize: "0.85rem", color: "#555" }}>Quick insights to help you take control of your money.</p>
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
          borderTop: "1px solid #ddd"
        }}
      >
        <p>&copy; 2025 Summit Trust & Financial. All rights reserved.</p>
        <div style={{ marginTop: "0.5rem" }}>
          <span>Email: zdornoff@summittrust.com | Phone: (555) 918-2043</span>
        </div>
      </footer>
    </div>
  );
}
