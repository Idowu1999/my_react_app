

function contact() {
  return (
    <div className="w-75 d-flex justify-content-between" style={{height:"50vh"}}>
      <div className="left">
      <div className="control">
        <div className="inside">
        <h1 className="fs-5">CONTACT ME</h1>
        <h3><span></span>owolabiidowu99@gmai.com</h3>
        <h3><span></span>07086292944</h3>
        <div className="d-flex justify-content-between  w-75 align-item-center">
            <i className="bi bi-facebook" aria-hidden="true"></i>
            <i className="bi bi-twitch" aria-hidden="true"></i>
            <i className="bi bi-telegram" aria-hidden="true"></i>
            <i className="bi bi-linkedin" aria-hidden="true"></i>
        </div>
        </div>
      </div>
      </div>

      <div className="right">
     
<div className="mb-3">
  <label for="" class="form-label">Email</label>
  <input
    type="email"
    className="form-control"
    name=""
    id=""
    aria-describedby="emailHelpId"
    placeholder="abc@mail.com"
  />
  <small id="emailHelpId" className="form-text text-muted"
    ></small>
</div>


<textarea name="" id="" cols="30" placeholder="message"></textarea>
        

  <div className="d-flex justify-content-center align-items-center">
    <button type="button">submit</button>
    </div>      
      </div>
    </div>
  )
}

export default contact