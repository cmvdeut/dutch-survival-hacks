import { Composition } from "remotion";
import { TipVideo } from "./compositions/TipVideo";
import { ListVideo } from "./compositions/ListVideo";
import { OpinionVideo } from "./compositions/OpinionVideo";
import { VIDEOS } from "./videos";

// TikTok format: 1080x1920, 30fps
const TIKTOK_WIDTH = 1080;
const TIKTOK_HEIGHT = 1920;
const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {VIDEOS.map((video) => {
        if (video.type === "tip") {
          return (
            <Composition
              key={video.id}
              id={video.id}
              component={TipVideo}
              durationInFrames={FPS * 10}
              fps={FPS}
              width={TIKTOK_WIDTH}
              height={TIKTOK_HEIGHT}
              defaultProps={{
                title: video.title,
                tip: video.tip,
                category: video.category,
                number: video.number,
              }}
            />
          );
        }

        if (video.type === "opinion") {
          return (
            <Composition
              key={video.id}
              id={video.id}
              component={OpinionVideo}
              durationInFrames={FPS * 12}
              fps={FPS}
              width={TIKTOK_WIDTH}
              height={TIKTOK_HEIGHT}
              defaultProps={{
                statement: video.statement,
                context: video.context,
                category: video.category,
              }}
            />
          );
        }

        return (
          <Composition
            key={video.id}
            id={video.id}
            component={ListVideo}
            durationInFrames={FPS * 15}
            fps={FPS}
            width={TIKTOK_WIDTH}
            height={TIKTOK_HEIGHT}
            defaultProps={{
              title: video.title,
              items: video.items,
            }}
          />
        );
      })}
    </>
  );
};
