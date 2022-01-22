import React from 'react'

const GalleryHome = () => {
    return (
        <>
        <h1 align="center" className="py-3" style={{backgroundColor: '#C5C5C5'}}>Photo Gallery</h1>
        <div className="container">
          <div className="row my-3">
            <div className="col-lg-4">
              <div className="card">
                <img src="temple1.jpg" style={{height: '14rem'}} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Temple</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img src="temple2.jpg" style={{height: '14rem'}} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Jatra</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img src="temple3.jpg" style={{height: '14rem'}} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Aarti</h5>
                </div>
              </div>
            </div>
          </div>
    
          <div className="row my-2">
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <div className="card">
                <img src="temple4.jpg" style={{height: '14rem'}} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Something</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img src="temple5.jpg" style={{height: '14rem'}} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Something</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
          </div>
        </>
      );
}

export default GalleryHome
