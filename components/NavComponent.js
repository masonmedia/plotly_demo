export default function NavComponent(props) {
    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid d-flex py-3 px-5">
                    <a className="navbar-brand d-flex me-auto" href="#">
                        { props.one }
                    </a>
                    <div onClick={props.setMode} className={'btn ' + props.btnClass}>
                        {props.two}
                    </div>
                </div>
            </nav>
        </div>
    )
  }