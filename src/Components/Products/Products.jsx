import React from 'react';

function BasicExample() {
  const cardData = [
    { title: 'Blue Scarab Pyramids View', location: 'Dahab', duration: '4 days 3 nights', date: '25 Dec 2023 to 29 Dec 2023', discountedPrice: 'EGP 900', currentPrice: 'EGP 700', rating: 4.5, imageSrc: './hotel.jpg' },
    { title: 'Blue Scarab Pyramids View', location: 'Dahab', duration: '4 days 3 nights', date: '25 Dec 2023 to 29 Dec 2023', discountedPrice: 'EGP 800', currentPrice: 'EGP 650', rating: 4.2, imageSrc: './hotel.jpg' },
    { title: 'Blue Scarab Pyramids View', location: 'Dahab', duration: '4 days 3 nights', date: '25 Dec 2023 to 29 Dec 2023', discountedPrice: 'EGP 700', currentPrice: 'EGP 600', rating: 3.5, imageSrc: './hotel.jpg' },
    { title: 'Blue Scarab Pyramids View', location: 'Dahab', duration: '4 days 3 nights', date: '25 Dec 2023 to 29 Dec 2023', discountedPrice: 'EGP 600', currentPrice: 'EGP 500', rating: 4.8, imageSrc: './hotel.jpg' },
  ];

  

 

  return (
    <section id='prod'>
      <div className='prod-header'>
        <h1 className='text-center'>Our Products</h1>
      </div>
      <div className="container">
        <div className="row" style={{margin:'70px'}}>
          {cardData.map((card, index) => (
            <div key={index} className="col-3" >
              <div  style={{ position: 'relative', borderRadius: '60px', width:'230px',height:'320px' }}>
                <button style={{ position: 'absolute', top: '5px', left: '7px', background: 'transparent', border: 'none', fontSize: '1.2rem'}} >   &#10084;  </button>
                <div className="rating-badge text-center" style={{ position: 'absolute', top: '8px', right: '20px', background: 'orange', color: 'white', padding: '0px', borderRadius: '5px', width:'35px' }}>
                  {card.rating}
                </div>
                <div className="card-img-wrapper" style={{ overflow: 'hidden', borderRadius: '40px 40px 0 0' }}>
                  <img src={card.imageSrc} className="card-img-top rounded" alt={`Image for ${card.title}`} />
                </div>
                <div className="card-body d-flex flex-column justify-content-between text-left">
                <div className="vertical-line left-line"></div>
                  <div className="vertical-line right-line"></div>
                  <div>
                    <h5 className="card-title" style={{ color: 'orange', fontWeight: 'bold', fontSize: '0.8rem', lineHeight: '2.2',marginLeft:'9px' }}>{card.title}</h5>
                    <p className="card-text" style={{ fontWeight: 'bold', fontSize: '0.7rem', lineHeight: '0',marginLeft:'9px' }}>{card.location}</p>
                    <p className="card-text" style={{ fontWeight: 'bold', fontSize: '0.7rem', lineHeight: '0',marginLeft:'9px' }}>{card.duration}</p>
                    <p className="card-text" style={{ fontWeight: 'bold', fontSize: '0.7rem', lineHeight: '0',marginLeft:'9px' }}>{card.date}</p>
                    <div style={{ background: 'transparent', marginBottom: '5px' }}>
                    </div>
                  
                  </div>
                  <div style={{ background: 'orange', padding: '10px', borderRadius: '0 0 40px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <div style={{ background: 'transparent', marginBottom: '5px' }}>
                      <p className="card-text" style={{ fontWeight: 'bold', fontSize: '0.7rem', lineHeight: '2' }}>
                        <del>{card.discountedPrice}</del> {card.currentPrice}
                      </p>
                    </div>
                    <a href="#" className="btn text-white" style={{ fontSize: '0.7rem' }}>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BasicExample;