import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-4 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/WhatsApp-Image-2026-03-12-at-12.24.57-PM-_1_.jpg"
            alt="team"
            style={{ width: "50%", borderRadius: "100%" }}
          />
          <h4 className="mt-5">Rahul Das</h4>
          <h6>Founder,CEO</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            Rahul bootstrapped and founded Zerodha in 2026 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing Cricket is his zen.</p>

          <p>
            Connect on{" "}
            <a href="https://www.linkedin.com/in/rahuldas24/"style={{textDecoration:"none"}}>linkedin</a> /{" "}
            <a href="https://x.com/RahulDas242007" style={{textDecoration:"none"}}>Twitter</a> /
            <a href="https://github.com/rahul24629" style={{textDecoration:"none"}}>github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
