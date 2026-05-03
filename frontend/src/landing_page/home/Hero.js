import React from 'react';


function Hero({user}) {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center' >
                <img src='media/images/homeHero.png' alt="Hero banner" className='mb-5'/>
                <h1 mt-5>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                {
                    !user?<button className='p-3 btn btn-primary fs-5'style={{width:"20%",margin: "0 auto"}}>Signup Now</button>:<p>All your investments. One powerful platform</p>
                }
                
            </div>
        </div>
     );
}

export default Hero;