import React, { useState, useEffect } from 'react';

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(0);


  const backgroundImages = [
    `${process.env.PUBLIC_URL}/img1.jpg`,
    `${process.env.PUBLIC_URL}/img2.jpg`,
    `${process.env.PUBLIC_URL}/img3.jpg`,
    `${process.env.PUBLIC_URL}/img4.jpg`,
  ];

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImages[backgroundImage]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '10px',
    
    
  };

  const handleNextImage = () => {
    setBackgroundImage((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const handlePrevImage = () => {
    setBackgroundImage((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change to the next background image
      setBackgroundImage((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [backgroundImage, backgroundImages]);

  return (
    <>
      <div style={backgroundImageStyle}>
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="text-white">Hello I'm Giovanni</h1>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum.
            </p>
            <button
              className="btn rounded p-2"
              style={{ backgroundColor: '#ff7f50', color: '#fff' }}
            >
              Check It
            </button>
          </div>
        </div>
      </div>
      <div
        className="position-absolute"
        style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      >
        <button
          className="btn rounded p-2"
          style={{ backgroundColor: '#123', color: '#fff' }}
          onClick={handlePrevImage}
        >
          &lt; 
        </button>
      </div>
      <div
        className="position-absolute"
        style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}
      >
        <button
          className="btn rounded p-2"
          style={{ backgroundColor: '#123', color: '#fff' }}
          onClick={handleNextImage}
        >
        
           &gt;
        </button>
      </div>
    </>
  );
}
