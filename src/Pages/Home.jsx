import React from 'react'
import { Header,Footer } from '../Components'

const Home = () => {
  return (
   <>
<Header/>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/2000x600/?Burgers" alt="..." />
    </div>
    <div className="carousel-item"> 
    <img src="https://source.unsplash.com/random/2000x600/?Coffee" alt="..." />    </div>
    <div className="carousel-item">
    <img src="https://source.unsplash.com/random/2000x600/?Cake" alt="..." />    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div class="container">
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div class="col">
                <div class="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg bgimg1" lc-helper="background">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <div class="lc-block pt-5 mt-5 mb-4">
                            <div editable="rich">
                                <h2 class="display-6 lh-1 fw-bold">Short title, long jacket</h2>
                                <p>Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
                            </div>
                        </div>
                        <ul class="lc-block d-flex list-unstyled mt-auto ms-auto"><a class="btn btn-link btn-sm text-white " href="#" role="button">Read more</a></ul>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg bgimg2" lc-helper="background" >
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <div class="lc-block pt-5 mt-5 mb-4">
                            <div editable="rich">
                                <h2 class="display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                                <p>Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
                            </div>
                        </div>
                        <ul class="lc-block d-flex list-unstyled mt-auto ms-auto"><a class="btn btn-link btn-sm text-white " href="#" role="button">Read more</a></ul>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg bgimg3" lc-helper="background" >
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <div class="lc-block pt-5 mt-5 mb-4">
                            <div editable="rich">
                                <h2 class="display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                                <p>Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
                            </div>
                        </div>
                        <ul class="lc-block d-flex list-unstyled mt-auto ms-auto"><a class="btn btn-link btn-sm text-white " href="#" role="button">Read more</a></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

<Footer/>
   </>
  )
}

export default Home