import "../assets/login.css"

function login() {
  return (
    <div className="login-container m-5 mt-5">
    
    <form className="m-5">
    <h2>Login</h2>
        <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email Address" />
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-custom w-100">Login</button >
        <div className="mt-3">
            <a href="#">Forgot password?</a>
        </div>
        <div className="social-icons mt-3">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-google"></i></a>
        </div>
    </form>
</div>
  )
}

export default login