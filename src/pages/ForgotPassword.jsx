const ForgotPassword = () => {
  return (
    //  Reset psw form begins here 
    <div className="body">
    <div class="container bg-light">
        <div class="row px-3">
            <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                 {/* Reset psw card starts here  */}
                <div class="card-body">
                    <h4 class="title text-center mt-3">Reset Password</h4>
                    <h6 class="text-center">Enter your email to reset your password</h6>
                    {/* Reset psw form  */}
                    <form action="#" method="post" class="form-box px-3">
                         {/* Email input */}
                        <div class="form-input">
                            <span><i class="fas fa-envelope"></i></span>
                            <label for="email"></label>
                            <input type="email" name="email" placeholder="Enter your e-mail" required />
                        </div>

                        {/* Reset psw btn  */}
                        <div class="mb-3">
                            <button class="btn btn-success btn-block" type="submit">Submit</button>
                        </div>

                        <hr class="my-4" />

                        {/* Don't have an account link  */}
                        <div class="text-center mb-2">
                            Your data is safe and secure thanks to our
                            <a href="#" class="register-link">Privacy & policy</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>

    // email authentication form ends here 

  )
}

export default ForgotPassword