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
  title: string;
  tip: string;
  category: string;
  number: number;
};

export const TipVideo: React.FC<Props> = ({ title, tip, category, number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ fps, frame, from: 0, to: 1, delay: 5, config: { damping: 20 } });
  const tipProgress = spring({ fps, frame, from: 0, to: 1, delay: 20, config: { damping: 20 } });
  const tagProgress = spring({ fps, frame, from: 0, to: 1, delay: 35, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.cream, fontFamily: BRAND.fontFamily }}>
      {/* Navy top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 160,
        backgroundColor: BRAND.navy,
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

      {/* Big number */}
      <div style={{
        position: "absolute",
        top: 200,
        left: 60,
        fontSize: 220,
        fontWeight: 900,
        color: BRAND.terracotta,
        opacity: 0.12,
        lineHeight: 1,
      }}>
        {number}
      </div>

      {/* Main content area */}
      <div style={{
        position: "absolute",
        top: 240,
        left: 60,
        right: 60,
      }}>
        {/* Category badge */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: BRAND.navy,
            color: BRAND.cream,
            fontSize: 30,
            fontWeight: 600,
            padding: "10px 24px",
            borderRadius: 40,
            marginBottom: 40,
            opacity: tagProgress,
            transform: `translateY(${interpolate(tagProgress, [0, 1], [20, 0])}px)`,
          }}
        >
          {category}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: BRAND.navy,
            lineHeight: 1.1,
            marginBottom: 60,
            opacity: titleProgress,
            transform: `translateY(${interpolate(titleProgress, [0, 1], [40, 0])}px)`,
          }}
        >
          {title}
        </div>

        {/* Tip card */}
        <div
          style={{
            backgroundColor: BRAND.navy,
            borderRadius: 24,
            padding: "50px 60px",
            opacity: tipProgress,
            transform: `translateY(${interpolate(tipProgress, [0, 1], [40, 0])}px)`,
          }}
        >
          <div style={{
            fontSize: 52,
            color: BRAND.cream,
            lineHeight: 1.4,
            fontWeight: 500,
          }}>
            {tip}
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
