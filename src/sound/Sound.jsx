import { useEffect, useState, useCallback } from "react"; // UPDATED: added useCallback
import { Howl } from "howler";
import "./Sound.css";

const sound = new Howl({
  src: ["/wedding-music.mp3"],
  volume: 1.0,
  loop: false,
});

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => { // UPDATED: wrapped in useCallback
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying((prev) => !prev); // UPDATED: use functional update (safer)
  }, [isPlaying]); // ADDED: dependency

  useEffect(() => {
    togglePlay();
  }, [togglePlay]); // UPDATED: add dependency

  return (
    <>
      {/* <button className="sound_div" onClick={togglePlay}></button>
      <span style={{fontSize: '12px', marginBottom:'28px', textTransform: 'uppercase'}}>միացնել երաժշտությունը</span> */}
    </>
  );
};

export default Sound;
