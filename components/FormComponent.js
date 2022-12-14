export default function FormComponent(props) {
    return (
        <>
          {/* form desktop */}
          <div className={'col-lg-6 d-none d-lg-flex flex-column justify-content-start align-items-start p-5 mt-lg-4 border rounded-xl shadow position-absolute ' + (props.formClass)}
          style={{top: '100px', right: '40px', zIndex: '100' }}>

          <form action="#" method="POST" className="w-100">
          {/* radios */}
            <div className="row pb-4">
              <div className="col">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label fw-bold pr-3 pr-lg-5" htmlFor="inlineRadio1">Professional</label>
                </div>
              </div>
              <div className="col">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label fw-bold" htmlFor="inlineRadio2">Student</label>
                </div>
              </div>
            </div>
            
            {/* fields */}
            <div className="row w-100 pb-3">
              <div className="col">
                <label htmlFor="input1" className="form-label">First name*</label>
                <input type="text" className="form-control" placeholder="" aria-label="First name*" required />
              </div>
              <div className="col">
                <label htmlFor="input2" className="form-label">Last name*</label>
                <input type="text" className="form-control" placeholder="" aria-label="Last name*" required />
              </div>
            </div>
            
            <div className="row w-100 pb-3">
              <div className="col">
                <label htmlFor="input3" className="form-label">Business email*</label>
                <input type="text" className="form-control" placeholder="" aria-label="Business email*" />
              </div>
              <div className="col">
                <label htmlFor="input4" className="form-label">Phone*</label>
                <input type="text" className="form-control" placeholder="" aria-label="Phone*" />
              </div>
            </div>
            
            <div className="row w-100 pb-3">
              <div className="col">
                <label htmlFor="input5" className="form-label">Company name*</label>
                <input type="text" className="form-control" placeholder="" aria-label="Company name" />
              </div>
              <div className="col">
                <label htmlFor="input1" className="form-label">Title*</label>
                <input type="text" className="form-control" placeholder="" aria-label="Title" />
              </div>
            </div>
            
            <div className="row w-100">
              <div className="col">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Tell us about your project*</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>

            <input className="btn btn-purple text-uppercase mt-4 px-4" role="button" type="submit" value="submit" />
            </form>
          </div>
          {/* end form desktop */}

            {/* form mobile */}
          <div className="px-2 px-md-4 d-block d-lg-none">
            <div className={'col-sm-12 d-flex d-lg-none flex-column justify-content-start align-items-start p-4 p-md-5 mt-0 border rounded-xl shadow position-relative ' + (props.formClass)}
            style={{ zIndex: '2' }}>

            <form action="#" method="POST" className="w-100">
            {/* radios */}
              <div className="row pb-4 px-0 px-2">
                <div className="col px-0 px-md-2">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label fw-bold pr-3 pr-lg-5" htmlFor="inlineRadio1">Professional</label>
                  </div>
                </div>
                <div className="col px-0 px-md-2">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label fw-bold" htmlFor="inlineRadio2">Student</label>
                  </div>
                </div>
              </div>
              
              {/* fields */}
              <div className="row w-100 mx-0">
                <div className="col-md-6 pb-3 px-0 px-md-2">
                  <label htmlFor="input1" className="form-label">First name*</label>
                  <input type="text" className="form-control" placeholder="" aria-label="First name*" required />
                </div>
                <div className="col-md-6 pb-3 px-0 px-md-2">
                  <label htmlFor="input2" className="form-label">Last name*</label>
                  <input type="text" className="form-control" placeholder="" aria-label="Last name*" required />
                </div>
              </div>
              
              <div className="row w-100 mx-0">
                <div className="col-md-6 pb-3 px-0 px-md-2">
                  <label htmlFor="input3" className="form-label">Business email*</label>
                  <input type="text" className="form-control" placeholder="" aria-label="Business email*" />
                </div>
                <div className="col-md-6 pb-3 px-0 px-md-2">
                  <label htmlFor="input4" className="form-label">Phone*</label>
                  <input type="text" className="form-control" placeholder="" aria-label="Phone*" />
                </div>
              </div>
              
              <div className="row w-100 mx-0">
                <div className="col-md-6 pb-3 px-0 px-md-2">
                  <label htmlFor="input5" className="form-label">Company name*</label>
                  <input type="text" className="form-control" placeholder="" aria-label="Company name" />
                </div>
                <div className="col-md-6 pb-3 px-0 px-md-2">
                  <label htmlFor="input1" className="form-label">Title*</label>
                  <input type="text" className="form-control" placeholder="" aria-label="Title" />
                </div>
              </div>
              
              <div className="row w-100 mx-0">
                <div className="col-md-12 pb-3 px-0 px-md-2">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Tell us about your project*</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>

              {/* standard button */}
              <input className="d-none d-sm-block btn btn-purple text-uppercase mt-3 px-4" role="button" type="submit" value="submit" />
              {/* mobile full width button */}
              <input className="d-block d-sm-none w-100 btn btn-purple text-uppercase mt-3 px-4" role="button" type="submit" value="submit" />
              </form>
            </div>

          </div>
            {/* end form mobile */}
        </>

    )
}