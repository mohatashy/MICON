"use client";

import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/reveal";

export default function FooterCTA() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#020617",
        paddingTop: "128px",
        paddingBottom: "128px",
        color: "#ffffff",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          width: "520px",
          height: "520px",
          transform: "translateX(-50%)",
          borderRadius: "9999px",
          background: "rgba(249, 115, 22, 0.10)",
          filter: "blur(150px)",
          pointerEvents: "none",
        }}
      />

      {/* Architectural Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <Reveal>
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "92%",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#f97316",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            LET&apos;S BUILD TOGETHER
          </p>

          <h2
            style={{
              marginTop: "32px",
              marginBottom: 0,
              color: "#ffffff",
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Ready to Build
            <br />
            Something Exceptional?
          </h2>

          <p
            style={{
              width: "100%",
              maxWidth: "680px",
              marginTop: "32px",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Whether you&apos;re planning a corporate office,
            commercial space or complete renovation,
            MICON delivers premium construction and
            interior solutions with exceptional quality.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "48px",
            }}
          >
            <Button href="#contact">
              Start Your Project
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}