import React from 'react';

type Props = {};

const Video = (props: Props) => {
  return (
    <div className='bg-black-100 rounded-xl'>
      <video
        src='../../../earth_spin.mp4'
        typeof='video/mp4'
        playsInline
        autoPlay
        loop
        muted
        className=''
        style={{
          position: 'absolute',
          width: '100%',
          height: '90%',
          zIndex: -1,
          top: 0,
          left: 0,
          objectFit:'cover',
        }}
      />
    </div>
  );
};

export default Video;
