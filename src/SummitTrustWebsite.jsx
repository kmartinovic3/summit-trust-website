import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import logo from "./assets/logo.png"; // ✅ Correct path if logo is in src/assets

export default function SummitTrustWebsite() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={logo}
          alt="Summit Trust & Financial Logo"
          style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '1rem' }}
        />
        <h1>Summit Trust & Financial</h1>
        <p>Rooted in Lexington. Reimagined for Tomorrow.</p>
      </header>

      <section style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div>
          <h2>Our Mission</h2>
          <p>Since 1850, Summit Trust & Financial has stood strong through economic challenges. Now, we’re rebuilding with transparency, integrity, and a digital-first mindset to serve our community better.</p>
        </div>
        <div>
          <h2>New Initiatives</h2>
          <ul>
            <li>Transparent, ethical banking practices</li>
            <li>Revamped customer service experience</
