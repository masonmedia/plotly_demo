import Image from 'next/image'
import colgate from '../public/img/logos/colgate.png'
import nvidia from '../public/img/logos/nvidia.png'
import kc from '../public/img/logos/kc.png'
import jazz from '../public/img/logos/jazz.png'
import tmobile from '../public/img/logos/tmobile.png'
import tva from '../public/img/logos/tva.png'

export default function LogosComponent() {
    return (
        // <div>
            <div className="col-lg-6 d-flex flex-column justify-content-end align-items-center pt-4 pt-lg-5 pb-3">
                <div className="row w-100">
                  <div className="col d-flex justify-content-center align-items-center px-2 py-4">
                    {/* <img src="/img/logos/colgate.png" alt=""/> */}
                    <Image src={colgate} />
                  </div>
                  <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                    {/* <img src="/img/logos/nvidia.png" alt=""/> */}
                    <Image src={nvidia} />
                  </div>
                  <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                    {/* <img src="/img/logos/kc.png" alt="" width="75px"/> */}
                    <Image src={kc} width='75px' />
                  </div>
                </div>

                <div className="row w-100">
                  <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                    <img src="/img/logos/jazz.png" alt=""/>
                    <Image src={jazz} />
                  </div>
                  <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                    {/* <img src="/img/logos/tmobile.png" alt=""/> */}
                    <Image src={tmobile} />
                  </div>
                  <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                    {/* <img src="/img/logos/tva.png" alt="" width="75px"/> */}
                    <Image src={tva} width='75px' />
                  </div>
                </div>
            </div>
        // </div>
    )
}