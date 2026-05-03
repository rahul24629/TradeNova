import { useClerk, useUser } from "@clerk/clerk-react";
import React from "react";

function Signup() {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="container">
      <h1 className="text-center pt-5">
        Open a free demat and trading account online
      </h1>
      <h2 className="text-muted fs-3 pt-3 pb-5 text-center">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </h2>

      <div className="row">
        <div className="col">
          <img src="media\images\account_open.svg" alt="signup" />
        </div>
        {!user ? (
          <div className="col">
            <h3 className="fs-3">Signup now</h3>

            <button
              onClick={openSignIn}
              className="btn btn-primary mt-3"
              style={{ width: "320px", height: "44px" }}
            >
              LogIn now
            </button>

            <br></br>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Signup;
