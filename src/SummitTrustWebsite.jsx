import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function SummitTrustWebsite() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img
          src="/logo.png"
          alt="Summit Trust & Financial Logo"
          style={{
            width: "120px",
            height: "auto",
            objectFit: "contain",
            marginBottom: "1rem",
          }}
        />
        <h1>Summit Trust & Financial</h1>
        <p>Rooted in Lexington. Reimagined for Tomorrow.</p>
      </header>

      <section
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <div>
          <h2>Our Mission</h2>
          <p>
            Since 1850, Summit Trust & Financial has stood strong through
            economic challenges. Now, we’re rebuilding with transparency,
            integrity, and a digital-first mindset to serve our community
            better.
          </p>
        </div>
        <div>
          <h2>New Initiatives</h2>
          <ul>
            <li>Transparent, ethical banking practices</li>
            <li>Revamped customer service experience</li>
            <li>Modern logo and website redesign</li>
            <li>Financial education via social media</li>
          </ul>
        </div>
        <div>
          <h2>Upcoming Presentation</h2>
          <p>
            Join us in late April for our final strategic reveal. More details
            to come! Be the first to hear — sign up below.
          </p>
          <input
            placeholder="Your email"
            style={{ padding: "0.5rem", width: "70%" }}
          />
          <button style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
            Notify Me
          </button>
        </div>
      </section>

      <section style={{ marginTop: "3rem", textAlign: "center" }}>
        <h2>Meet Our Team</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {[
            "Zachary Dornoff",
            "Colin Gastright",
            "Kristian Martinovic",
            "Jeff Eveland",
          ].map((name, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <strong>{name}</strong>
              <br />
              <span>
                {
                  [
                    "Marketing & Engagement",
                    "Client Experience",
                    "Chief Financial Officer",
                    "Chief Integrity Officer",
                  ][i]
                }
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
        }}
      >
        <p>&copy; 2025 Summit Trust & Financial. All rights reserved.</p>
        <div style={{ marginTop: "0.5rem" }}>
          <span>
            Email: zdornoff@summittrust.com | Phone: (555) 918-2043
          </span>
        </div>
      </footer>
    </div>
  );
}
