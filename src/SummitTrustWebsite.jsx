import React from "react";
import { Mail, Phone } from "lucide-react";
import logo from "./logo.png";

export default function SummitTrustWebsite() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img src={logo} alt="Summit Trust & Financial Logo" style={{ width: "120px", marginBottom: "1rem" }} />
        <h1 style={{ color: "#2d4a73" }}>Summit Trust & Financial</h1>
        <p style={{ color: "#555" }}>Rooted in Lexington. Reimagined for Tomorrow.</p>
      </header>

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
            📣 Join us on <strong>April 29th</strong> for our Strategic Reveal.
            Sign up to stay informed!
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

      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={h2Style}>Our Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          {[
            ["Personal Banking", "Checking, savings, and financial planning"],
            ["Business Loans", "Support for local startups & growth"],
            ["Investment Guidance", "Tailored advice for every goal"],
            ["Mobile Banking", "24/7 access from any device"]
          ].map(([title, desc], i) => (
            <div key={i} style={cardStyle}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={h2Style}>Financial Tips</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          {[
            "Build a budget and stick to it",
            "Check your credit score regularly",
            "Avoid overdraft fees with alerts",

