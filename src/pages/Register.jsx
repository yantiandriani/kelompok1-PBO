
import React from "react";
import Footer from "../components/Footer/Footer";

const Register = () => {
  return (
    <>
      <section className="register" style={{ marginTop: "5rem" }}>
        <div className="container-2">
          <div className="flex ai-center jc-sb">
            <img src="/logo.png" alt="" />
            <div className="regis">
              <form action="" className="form">
                <h1 className="logo" style={{ color: "var(--main-color-4)" }}>
                  One Store
                </h1>
                <input type="text" placeholder="Username or email" />
                <input type="password" placeholder="Password" />
                <input
                  type="submit"
                  className="btn-1"
                  value={"Register"}
                  style={{ marginTop: "10px" }}
                />
                <a href="" style={{ fontSize: ".9rem" }}>
                  Lupa password?
                </a>
              </form>
              <form action="" style={{ marginTop: "1rem" }} className="form">
                <p style={{ fontSize: ".9rem" }}>
                  Sudah punya akun?{" "}
                  <a href="" style={{ color: "var(--main-color-2)" }}>
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
