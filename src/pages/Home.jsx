import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer2 from "../components/Footer2/Footer2";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="container-2">
          <div className="showcase-top">
            <div className="showcase-desc">
              <h1>Mau Mencari Tas Gendong Dan Hijab Fashion</h1>
              <h1>Disini...</h1>
              <a href="" class="btn-2">
                Explore Now
              </a>
              <a href="" class="btn-1">
                <i class="fa fa-arrow-right"></i>
              </a>
            </div>
            <img src="/balenciaga1.jpg" alt="" />
          </div>
          <div className="container-3">
            <div className="cat-wrap flex">
              <div className="cat-card">
                <img src="/tas.png" alt="" />
              </div>
              <div className="cat-card">
                <img src="/tiung1.png" alt="" />
              </div>
              <div className="cat-card">
                <img src="/tas3.png" alt="" />
              </div>
              <div className="cat-card">
                <img src="/tiung3.png" alt="" />
              </div>
              <div className="cat-card">
                <img src="/tas5.png" alt="" />
              </div>
            </div>
          </div>
          <div className="kategori">
            <h1 className="heading">Tas Branded</h1>
            <div className="carousel flex">
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tas.png" alt="" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2"> Tas Gucci </h1>
                  <p className="text">Rp. 9.000.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tas2.png" alt="" className="cut" style={{height:"15.5rem"}}/>
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Coach</h1>
                  <p className="text">Rp. 1.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tas3.png" alt="" className="cut" style={{height:"15.5rem"}} />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Tas Jinjing</h1>
                  <p className="text">Rp. 3.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tas4.png" alt="" className="cut" style={{height:"15.5rem"}} />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Tas Ks</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tas5.png" alt="" className="cut" style={{height:"15.5rem"}}/>
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Balenciagaa</h1>
                  <p className="text">Rp. 1.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tas6.png" alt="" className="cut" style={{height:"15.5rem"}}/>
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Tassssssss</h1>
                  <p className="text">Rp. 900.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="kategori">
            <h1 className="heading">Kerudung</h1>
            <div className="carousel flex">
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tiung1.png" alt="" className="cut" style={{height:"15.5rem"}} />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Hijab 1</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tiung2.png" alt="" className="cut" style={{height:"15.5rem"}}/>
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Hijab 2</h1>
                  <p className="text">Rp. 3.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tiung3.png" alt="" className="cut" style={{height:"15.5rem"}}/>
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Hijab 3</h1>
                  <p className="text">Rp. 4.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tiung4.png" alt="" className="cut" style={{height:"15.5rem"}}/>
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Hijab 4</h1>
                  <p className="text">Rp. 1.900.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tiung5.png" alt="" className="cut" style={{height:"15.5rem"}}/>
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Hijab 5</h1>
                  <p className="text">Rp. 1.000.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/tiung6.png" alt="" className="cut" style={{height:"15.5rem"}} />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Hijab 6</h1>
                  <p className="text">Rp. 3.500.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}
