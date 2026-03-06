import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Img,
} from "remotion";
import { BRAND } from "../brand";

type Props = {
  statement: string;
  context?: string;
  category: string;
};

export const OpinionVideo: React.FC<Props> = ({ statement, context, category }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeProgress = spring({ fps, frame, from: 0, to: 1, delay: 5, config: { damping: 20 } });
  const statementProgress = spring({ fps, frame, from: 0, to: 1, delay: 15, config: { damping: 18 } });
  const contextProgress = spring({ fps, frame, from: 0, to: 1, delay: 30, config: { damping: 20 } });
  const ctaProgress = spring({ fps, frame, from: 0, to: 1, delay: 45, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.navy, fontFamily: BRAND.fontFamily }}>
      {/* Top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 160,
        backgroundColor: BRAND.terracotta,
        display: "flex", alignItems: "center",
        paddingLeft: 60,
        gap: 24,
      }}>
        <Img
          src={staticFile("logo.png")}
          style={{ height: 72, width: 72, objectFit: "contain", borderRadius: 8 }}
        />
        <span style={{ color: BRAND.cream, fontSize: 36, fontWeight: 700, letterSpacing: 1 }}>
          Dutch Survival Hacks
        </span>
      </div>

      {/* Category badge */}
      <div style={{
        position: "absolute",
        top: 200,
        left: 60,
        opacity: badgeProgress,
        transform: `translateY(${interpolate(badgeProgress, [0, 1], [20, 0])}px)`,
      }}>
        <div style={{
          display: "inline-block",
          backgroundColor: BRAND.cream,
          color: BRAND.navy,
          fontSize: 30,
          fontWeight: 700,
          padding: "10px 28px",
          borderRadius: 40,
        }}>
          {category}
        </div>
      </div>

      {/* Main statement */}
      <div style={{
        position: "absolute",
        top: 300,
        left: 60,
        right: 60,
        fontSize: 82,
        fontWeight: 900,
        color: BRAND.cream,
        lineHeight: 1.1,
        opacity: statementProgress,
        transform: `translateY(${interpolate(statementProgress, [0, 1], [50, 0])}px)`,
      }}>
        "{statement}"
      </div>

      {/* Context / nuance */}
      {context && (
        <div style={{
          position: "absolute",
          top: 900,
          left: 60,
          right: 60,
          fontSize: 46,
          color: BRAND.cream,
          opacity: interpolate(contextProgress, [0, 1], [0, 0.7]),
          lineHeight: 1.4,
          fontWeight: 400,
          fontStyle: "italic",
          transform: `translateY(${interpolate(contextProgress, [0, 1], [30, 0])}px)`,
        }}>
          {context}
        </div>
      )}

      {/* Agree or not CTA */}
      <div style={{
        position: "absolute",
        bottom: 140,
        left: 60,
        right: 60,
        opacity: ctaProgress,
        transform: `translateY(${interpolate(ctaProgress, [0, 1], [40, 0])}px)`,
      }}>
        <div style={{
          backgroundColor: BRAND.cream,
          borderRadius: 24,
          padding: "36px 50px",
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 52,
            fontWeight: 900,
            color: BRAND.navy,
          }}>
            Agree or not?
          </div>
          <div style={{
            fontSize: 38,
            color: BRAND.terracotta,
            fontWeight: 600,
            marginTop: 8,
          }}>
            Tell me in the comments
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: 120,
        backgroundColor: BRAND.terracotta,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ color: BRAND.cream, fontSize: 34, fontWeight: 600 }}>
          @dutchsurvivalhacks
        </span>
      </div>
    </AbsoluteFill>
  );
};
