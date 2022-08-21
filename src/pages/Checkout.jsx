import "../assets/css/bootstrap.min.css";

const Checkout = () => {
  return (
    <div className="super_container">
      {/* <!-- main section --> */}
      <main className="pt-5">
        {/* <!-- Logo to gon here --> */}
        <a href="#" className="d-block text-center pt-5">
          LOGO HERE
        </a>
        <span className="d-block h5 text-center">Check Out Form</span>
        <span className="d-block h6 text-center">
          Your order is ready, fill in the required details ti complete it.
        </span>

        {/* <!-- checkout section begins here --> */}
        <div className="container-fluid checkout-page-container">
          {/* <!-- coupon form link --> */}
          <div className="container-fluid coupon-container m-0 p-0 my-3 w-100">
            <form action="#" method="post">
              <label htmlFor="coupon"></label>
              <input
                type="text"
                name="coupon"
                placeholder="Have a coupon? Enter yoyr cide here"
                required
                tabIndex="1"
              />
              <button className="btn btn-primary btn-sm" type="submit">
                Claim
              </button>
            </form>
          </div>

          {/* <!-- billing details and cart items plus payment --> */}
          <div className="row checkout-billo-details mt-4">
            {/* <!-- billing details form --> */}
            <div className="col-md-7 col-12">
              <span className="h6 d-block text-start bheda my-2 mt-3">
                Billing details
              </span>
              <form action="#" method="post" className="w-100 bill-form">
                <div className="col-12">
                  {/* <!-- USERNAME & EMAIL --> */}
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="uname" className="d-block">
                        Username
                      </label>
                      <input
                        type="text"
                        className="w-100"
                        name="uname"
                        placeholder="@username"
                        required
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="email" className="d-block">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-100"
                        name="email"
                        placeholder="useremail@xyz.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  {/* <!-- phone Number --> */}
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="pnumber" className="d-block">
                        Primary Number
                      </label>
                      <input
                        type="text"
                        className="w-100"
                        name="pnumber"
                        placeholder="+254712345678"
                        required
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="snumber" className="d-block">
                        Secondary Number
                      </label>
                      <input
                        type="text"
                        className="w-100"
                        name="snumber"
                        placeholder="eg. +254712345678"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  {/* <!-- County & Town --> */}
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="ucounty" className="d-block">
                        County
                      </label>
                      <input
                        type="text"
                        className="w-100"
                        name="ucounty"
                        placeholder="e.g Nairobi"
                        required
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="town" className="d-block">
                        Town
                      </label>
                      <input
                        type="text"
                        className="w-100"
                        name="town"
                        placeholder="e.g Nairobi"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- Note span --> */}
                <div className="col-12">
                  <span className="h6 d-block text-start">
                    <strong>Note:</strong> We will contact you on your order
                    based on the above information. Ensure the information is
                    accurate to your current situation. <br />
                    Need help <a href="#">placing order?</a>
                  </span>
                </div>

                <div className="col-12 text-center my-4">
                  <button type="submit" className="btn btn-success w-50">
                    Confirm
                  </button>
                </div>
              </form>
            </div>

            {/* <!-- cart items list here --> */}
            <div className="col-md-5 col-12">
              <div className="container-fluid">
                {/* <!-- header --> */}
                <div className="container header-cartch-container">
                  <span className="h6 d-block text-start">Your Order</span>
                  <hr />
                </div>

                {/* <!-- table --> */}
                <div className="container">
                  <table className="table table-hover">
                    <thead className="#">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="cart-itam">Keyboard</span>
                        </td>
                        <td>
                          <span className="cart-item-cost">Ksh 17000</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="cart-itam">Keyboard</span>
                        </td>
                        <td>
                          <span className="cart-item-cost">Ksh 17000</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="cart-itam">Keyboard</span>
                        </td>
                        <td>
                          <span className="cart-item-cost">Ksh 17000</span>
                        </td>
                      </tr>

                      {/* <!-- Total --> */}
                      <tr>
                        <td>
                          <span className="h6">Total</span>
                        </td>
                        <td>
                          <span className="total h6">Ksh 51000</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* <!-- Payment medium --> */}
                  <div className="container-fluid mt-3 ms-1 ps-1">
                    <span className="h6 d-block text-start">
                      Choose Payment Option
                    </span>
                    <form action="#" method="#">
                      <div className="col-12">
                        <input type="checkbox" name="mpesa" required />
                        <label htmlFor="mpesa">Pay with M-Pesa</label>
                      </div>
                      <div className="col-12">
                        <input type="checkbox" name="paypal" required />
                        <label htmlFor="paypal">Pay with Paypal</label>
                      </div>
                      <div className="col-12">
                        <input type="checkbox" name="stripe" required />
                        <label htmlFor="stripe">
                          Pay with Credit Card (Stripe)
                        </label>
                      </div>
                      <div className="col-12 text-center mt-4">
                        <button className="btn btn-outline-success d-block w-100">
                          Place Order
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Checkout section ends here --> */}
      </main>
      {/* <!-- main section ends here --> */}
    </div>
  );
};

export default Checkout;
