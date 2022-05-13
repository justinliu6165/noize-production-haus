import React, {useState} from 'react'
import styles from './Background.module.css'
import ParticleVideo from '../../assets/videos/Particles_Wave_Background_Loop.mp4';

export default function Background() {
  const [isLoading, setIsLoading] = useState(false);

  return (
      <div className={styles['hero-background']}>
        <video 
          autoPlay 
          loop 
          muted
          // onLoadStart={() => {
          //   console.log('...I am loading...')
          //   setIsLoading(true);
          // }}
          // onLoadedData={() => {
          //   console.log('Data is loaded!')
          //   setIsLoading(false);
          // }}
          src={ ParticleVideo }
          type="video/mp4"
        />
      </div>
    )
}
