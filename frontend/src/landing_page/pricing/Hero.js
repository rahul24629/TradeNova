import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h2>Pricing</h2>
                <p className="fs-5 mt-3 text-muted">Free equity investments and flat ₹20 traday and F&O trades</p>
            </div>

            <div className='row p-5 mt-5 text-center'> 
                <div className="col-4">
                    <img src="media\images\pricing0.svg"/>
                    <h2>Free equity delivery</h2>
                    <p className="fs-5 text-muted mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                    <img src="media\images\intradayTrades.svg"/>
                    <h2>Intraday and F&O trades</h2>
                    <p className="fs-5 text-muted mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                    <img src="media\images\pricing0.svg"/>
                    <h2>Free direct MF</h2>
                    <p className="fs-5 text-muted mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;