export default function TextComponent() {
    return (
        <div className="col-lg-6 d-flex flex-column justify-content-start align-items-start px-0 pe-md-5">
            <h1 className="mb-0">See Dash in action</h1>
            <h5 className="sub-heading pb-3 pt-2 pe-3">Thank you for your interest in Dash Enterprise. We'll be in touch soon to schedule a demo.</h5>
            {/* list */}
            <ul className="list pe-0 pe-lg-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
            </ul>
        </div>
    )
}