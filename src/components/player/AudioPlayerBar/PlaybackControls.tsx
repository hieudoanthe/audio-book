"use client";
import SpeedControl from "./SpeedControl";
import PlayPauseButton from "./PlayPauseButton";
import { SkipPreviousButton, SkipNextButton } from "./SkipButtons";
import TimerButton from "./TimerButton";

interface PlaybackControlsProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  isMobile?: boolean;
}

export default function PlaybackControls({
  isPlaying,
  setIsPlaying,
  isMobile = false,
}: PlaybackControlsProps) {
  if (isMobile) {
    return (
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <SpeedControl isMobile={isMobile} />
        <SkipPreviousButton />
        <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <SkipNextButton />
        <TimerButton isMobile={isMobile} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <SpeedControl isMobile={isMobile} />
      <SkipPreviousButton />
      <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <SkipNextButton />
      <TimerButton isMobile={isMobile} />
    </div>
  );
}
