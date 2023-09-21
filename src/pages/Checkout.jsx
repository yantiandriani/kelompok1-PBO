import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer2 from "../components/Footer2/Footer2";


export default function Checkout() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container-2">
          <div className="check-heading flex ai-center jc-sb">
            <h1 className="heading">Keranjang</h1>
            <i className="fa fa-bag-shopping"></i>
          </div>
        </div>
        <div className="container-3">
          <div className="flex jc-sb">
            <div className="l-check">
              <div className="check-card">
                <div className="check-img">
                  <img src="/tas.png" alt="" />
                </div>
                <div className="check-desc">
                  <div className="check-desc-heading flex ai-center jc-sb">
                    <h1 className="heading">Tas channel</h1>
                    <h1 className="heading">1x</h1>
                  </div>
                  <p className="text">
                    <span>No : </span>00123
                  </p>
                  <p className="text">
                    <span>IdBarang : </span>427889
                  </p>
                  <p className="text">
                    <span>Price : </span>Rp. 1.500.000
                  </p>
                  <div className="action flex ai-center">
                    <button className="btn-1">Cancel</button>
                    <button className="btn-2 fa fa-plus"></button>
                  </div>
                </div>
              </div>
              <div className="check-card">
                <div className="check-img">
                  <img src="/tiung3.png" alt="" />
                </div>
                <div className="check-desc">
                  <div className="check-desc-heading flex ai-center jc-sb">
                    <h1 className="heading">Hijab Dior</h1>
                    <h1 className="heading">1x</h1>
                  </div>
                  <p className="text">
                    <span>No : </span>00124
                  </p>
                  <p className="text">
                    <span>IdBarang : </span>6987875
                  </p>
                  <p className="text">
                    <span>Price : </span>Rp. 350.000
                  </p>
                  <div className="action flex ai-center">
                    <button className="btn-1">Cancel</button>
                    <button className="btn-2 fa fa-plus"></button>
                  </div>
                </div>
              </div>
              <div className="check-card">
                <div className="check-img">
                  <img src="/tas2.png" alt="" />
                </div>
                <div className="check-desc">
                  <div className="check-desc-heading flex ai-center jc-sb">
                    <h1 className="heading">Tas Choach</h1>
                    <h1 className="heading">1x</h1>
                  </div>
                  <p className="text">
                    <span>No : </span>00125
                  </p>
                  <p className="text">
                    <span>IdBarang : </span>423445645
                  </p>
                  <p className="text">
                    <span>Price : </span>Rp. 3.000.000
                  </p>
                  <div className="action flex ai-center">
                    <button className="btn-1">Cancel</button>
                    <button className="btn-2 fa fa-plus"></button>
                  </div>
                </div>
              </div>
              <div className="check-card">
                <div className="check-img">
                  <img src="/tas3.png" alt="" />
                </div>
                <div className="check-desc">
                  <div className="check-desc-heading flex ai-center jc-sb">
                    <h1 className="heading">Tas Balenciaga</h1>
                    <h1 className="heading">1x</h1>
                  </div>
                  <p className="text">
                    <span>No : </span>00126
                  </p>
                  <p className="text">
                    <span>IdBarang : </span>8756542
                  </p>
                  <p className="text">
                    <span>Price : </span>Rp. 2.000.000
                  </p>
                  <div className="action flex ai-center">
                    <button className="btn-1">Cancel</button>
                    <button className="btn-2 fa fa-plus"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="r-check">
              <div className="detail-card">
                <h1 className="heading">Detail Pesanan</h1>
                <form action="">
                  <div className='opsi-card'>
                    <label className="prod-check flex ai-center">
                      <input type="checkbox" name="" id="" />
                      <div className="prod flex ai-center jc-sb">
                        <div>
                          <h1 className="heading">Tas Channel</h1>
                          <p className="text">IdBarang 427889 | 1 pcs</p>
                        </div>
                        <h1 className="heading">Rp. 1.500.000</h1>
                      </div>
                    </label>
                    <label className="prod-check flex ai-center">
                      <input type="checkbox" name="" id="" />
                      <div className="prod flex ai-center jc-sb">
                        <div>
                          <h1 className="heading">Hijab Dior</h1>
                          <p className="text">IdBarang 6987875 | 1 pcs</p>
                        </div>
                        <h1 className="heading">Rp. 350.000</h1>
                      </div>
                    </label>
                    <label className="prod-check flex ai-center">
                      <input type="checkbox" name="" id="" />
                      <div className="prod flex ai-center jc-sb">
                        <div>
                          <h1 className="heading">Tas Choach</h1>
                          <p className="text">IdBarang 423445645 | 1 pcs</p>
                        </div>
                        <h1 className="heading">Rp. 3.000.000</h1>
                      </div>
                    </label>
                  </div>
                  <div className="total-pesanan flex ai-center jc-sb">
                    <p className="text">Total Pesanan :</p>
                    <h1 className="heading">Rp. 4.850.000</h1>
                  </div>
                  <input type="submit" name="" id="" className='submit' value={'Checkout'}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}
