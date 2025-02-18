

function Registration() {
  return (
    <div>
            <div className="registration-container p-4 rounded mt-5 shadow-sm" style={{ width: "100%", maxWidth: "400px", background: "white" }}>
                <h2 className="text-center">Register</h2>
                <form>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                        <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="bi bi-person-circle"></i></span>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                        <input type="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="bi bi-file-earmark-image"></i></span>
                        <input type="file" className="form-control" />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="bi bi-lock"></i></span>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                        <input type="password" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn w-100" style={{ background: "linear-gradient(135deg, #4A00E0, #FF00FF)", color: "white", border: "none" }}>
                        Register
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Registration