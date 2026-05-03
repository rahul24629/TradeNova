import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2 className="fs-3">The Zerodha Universe</h2>
        <p className="fs-5 mt-3 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "60%" }}
          />
          <p className="text-small text-muted fs-6 p-3">
            Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
 </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\sensibullLogo (1).svg"
            style={{ width: "70%" }}
          />
          <p className="text-small text-muted p-4">Options trading platform that lets you<br/>
create strategies, analyze positions, and examine<br/>
data points like open interest, FII/DII, and more.<br/>
</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\goldenpiLogo (1).png"
            style={{ width: "60%" }}
          />
          <p className="text-small text-muted p-3">Investment research platform<br/>
that offers detailed insights on stocks,<br/>
sectors, supply chains, and more.<br/>
</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\streakLogo.png" style={{ width: "60%" }} />
          <p className="text-small text-muted p-3">Systematic trading platform <br/>
that allows you to create and backtest <br/>
strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\smallcaseLogo.png" style={{ width: "70%" }} />
          <p className="text-small text-muted p-3">
            Thematic investing platform<br/>
that helps you invest in diversified<br/>
baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\dittoLogo.png" style={{ width: "45%" }} />
          <p className="text-small text-muted p-3">
            Personalized advice on life <br/>and health insurance. No spam <br/>and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
