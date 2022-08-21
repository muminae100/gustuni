const Pricing = () => {
  return (
    <>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mt-5">
              {/* <!-- free plan --> */}
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-success">
                <div className="card-header py-3 border-success bg-white">
                  <h4 className="my-0 fw-normal text-black">Basic</h4>
                </div>
                <div className="card-body">
                  <span className="h5 d-block card-title pricing-card-title text-black">Free </span>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Free Downloads</li>
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Offline Play Mode</li>
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Save Playlist</li>
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Ads</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-md btn-outline-success">Subscribe</button>
                </div>
              </div>
            </div>
            {/* <!-- Premium Plan --> */}
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-success">
                <div className="card-header py-3 border-success bg-white">
                  <h4 className="my-0 fw-normal text-black">Premium</h4>
                </div>
                <div className="card-body">
                <span className="h5 d-block card-title pricing-card-title text-black">Ksh 999<small className="text-muted fw-light"> /mo</small></span>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Free Downloads</li>
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Offline Play Mode</li>
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Save Playlist</li>
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Ads</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-md btn-success">Subscribe</button>
                </div>
              </div>
            </div>
            {/* <!-- Boss Plan --> */}
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-success">
                <div className="card-header py-3 text-white border-success">
                  <h4 className="my-0 fw-normal text-black">Platinum</h4>
                </div>
                <div className="card-body">
                    <span className="h5 d-block card-title pricing-card-title text-black">Ksh 1500<small className="text-muted fw-light"> /mo</small></span>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Free Downloads</li>
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Offline Play Mode</li>
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Save Playlist</li>
                    <li className="text-start"><span className="pp-icon me-1"><i className="fa-solid fa-circle-check"></i></span> Ads</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-md btn-success">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Pricing;