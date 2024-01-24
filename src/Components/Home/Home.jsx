import React from 'react'


export default function Home() {



  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/bcc.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px', // Adjust padding as needed
    borderRadius: '10px'
  };



  return <>
    <div style={backgroundImageStyle}>
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className='text-white'>Hello I'm Giovanni</h1>
          <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum.</p>
          <button className="btn rounded p-2" style={{ backgroundColor: '#ff7f50', color: '#fff' }} >Check It</button>
        </div>
      </div>
    </div>
  </>
}
