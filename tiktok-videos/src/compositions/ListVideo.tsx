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
  items: string[];
};

export const ListVideo: React.FC<Props> = ({ title, items }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ fps, frame, from: 0, to: 1, delay: 5, config: { damping: 20 } });

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

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: 60,
          right: 60,
          fontSize: 66,
          fontWeight: 800,
          color: BRAND.navy,
          lineHeight: 1.15,
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [30, 0])}px)`,
        }}
      >
        {title}
      </div>

      {/* Items */}
      <div style={{
        position: "absolute",
        top: 480,
        left: 60,
        right: 60,
      }}>
        {items.map((item, index) => {
          const itemProgress = spring({
            fps,
            frame,
            from: 0,
            to: 1,
            delay: 20 + index * 12,
            config: { damping: 20 },
          });

          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 28,
                marginBottom: 38,
                opacity: itemProgress,
                transform: `translateX(${interpolate(itemProgress, [0, 1], [-40, 0])}px)`,
              }}
            >
              <div style={{
                minWidth: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: BRAND.terracotta,
                color: BRAND.cream,
                fontSize: 30,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 4,
              }}>
                {index + 1}
              </div>
              <div style={{
                fontSize: 46,
                color: BRAND.navy,
                lineHeight: 1.3,
                fontWeight: 500,
              }}>
                {item}
              </div>
            </div>
          );
        })}
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
