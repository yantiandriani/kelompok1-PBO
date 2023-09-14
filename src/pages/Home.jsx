import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer2 from '../components/Footer2/Footer2';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="container-2">
          <div className="showcase-top">
            <div className="showcase-desc">
              <h1>What Kind Of Shoes Are</h1>
              <h1>You Looking For?</h1>
              <a href="" class="btn-2">
                Explore Now
              </a>
              <a href="" class="btn-1">
                <i class="fa fa-arrow-right"></i>
              </a>
            </div>
            <svg
              width="60"
              height="59"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 -1L19.1601 12.8399L33 15.5L19.1601 18.1601L16.5 32L13.8399 18.1601L0 15.5L13.8399 12.8399L16.5 -1Z"
                fill="#FF8036"
              />
              <circle cx="16.5" cy="15.5" r="4.95" fill="#FF8036" />
            </svg>
            <svg
              width="50"
              height="49"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 -1L19.1601 12.8399L33 15.5L19.1601 18.1601L16.5 32L13.8399 18.1601L0 15.5L13.8399 12.8399L16.5 -1Z"
                fill="#FF8036"
              />
              <circle cx="16.5" cy="15.5" r="4.95" fill="#FF8036" />
            </svg>
            <svg
              width="50"
              height="49"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 -1L19.1601 12.8399L33 15.5L19.1601 18.1601L16.5 32L13.8399 18.1601L0 15.5L13.8399 12.8399L16.5 -1Z"
                fill="#FF8036"
              />
              <circle cx="16.5" cy="15.5" r="4.95" fill="#FF8036" />
            </svg>
            <img src="/pngegg.png" alt="" />
          </div>
          <div className="container-3">
            <div className="cat-wrap flex">
              <div className="cat-card">
                <img src="/converse.png" alt="" />
              </div>
              <div className="cat-card">
                <img src="/nike.png" alt="" />
              </div>
              <div className="cat-card">
                <img src="/rebook.png" alt="" />
              </div>
              <div className="cat-card">
                <img src="/ventela.png" alt="" />
              </div>
              <div className="cat-card">
                <img src="/adidas.png" alt="" />
              </div>
            </div>
          </div>
          <div className="kategori">
            <h1 className="heading">Nike</h1>
            <div className="carousel flex">
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/pngegg.png" alt="" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Nike Air Flyknit</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/NikeMercurialVapor.png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Nike Vapor</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/pngegg (1).png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Nike Air Olympic</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/NikeSchuh.png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Nike Schuh</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/NikeAirMax97.png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Nike Air Flyknit</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/NikeHuarache.png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Nike Huarache</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="kategori">
            <h1 className="heading">Adidas</h1>
            <div className="carousel flex">
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/AdidasPoligon.png" alt="" className='cut'/>
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Adidas Poligon</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/adidasMasterton.png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Adidas Masterton</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/AdidasStan.png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Adidas Stan</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/AdidasR1.png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Adidas R1</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/AdidasYezy.png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Adidas Yeezy</h1>
                  <p className="text">Rp. 2.500.000</p>
                </div>
              </div>
              <div className="prod-card">
                <div className="prod-img">
                  <img src="/AdidasNavy.png" alt="" className="cut" />
                </div>
                <div className="prod-desc">
                  <div className="bar"></div>
                  <h1 class="heading-2">Adidas Huricane</h1>
                  <p className="text">Rp. 2.500.000</p>
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
