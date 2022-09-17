import Image from 'next/image'
import image from '../public/img/image.png'

export default function ImageComponent() {
    return (
        <>
            {/* image desktop */}
            <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center position-relative">
                <Image src={image} priority alt="Plotly Dash Club 2022" />
            </div>

            {/* image mobile */}
            <div className="col-lg-6 d-flex d-lg-none flex-column justify-content-center align-items-center px-0 px-md-2">
              {/* <img className="w-100 rounded position-relative" style={{ marginTop: '-60px', zIndex: '0' }} src="/img/image.png" /> */}
                <div style={{ marginTop: '-60px', zIndex: '0' }}>
                    <Image src={image} alt="Plotly Dash Club 2022" />
                </div> 
            </div>
        </>
    )
}