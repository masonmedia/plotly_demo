export default function ImageComponent() {
    return (
        <>
            {/* image desktop */}
            <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center">
              <img className="w-100 rounded" src="/img/image.png" />
            </div>

            {/* image mobile */}
            <div className="col-lg-6 d-flex d-lg-none flex-column justify-content-center align-items-center">
              <img className="w-100 rounded position-relative" style={{ marginTop: '-60px', zIndex: '0' }} src="/img/image.png" />
            </div>
        </>
    )
}