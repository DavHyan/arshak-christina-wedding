import { useEffect, useState } from "react";
import { Howl } from "howler";
import "./Sound.css";

const sound = new Howl({
  src: ["/wedding-music.mp3"],
  volume: 1.0,
  loop: false,
});

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    togglePlay();
  }, []);

  return (
    <>
      {/* <button className="sound_div" onClick={togglePlay}></button>
      <span style={{fontSize: '12px', marginBottom:'28px', textTransform: 'uppercase'}}>միացնել երաժշտությունը</span> */}
    </>
  );
};

export default Sound;
