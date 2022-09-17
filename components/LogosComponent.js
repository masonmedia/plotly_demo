import Image from 'next/image'
import colgate from '../public/img/logos/colgate.png'
import nvidia from '../public/img/logos/nvidia.png'
import kc from '../public/img/logos/kc.png'
import jazz from '../public/img/logos/jazz.png'
import tmobile from '../public/img/logos/tmobile.png'
import tva from '../public/img/logos/tva.png'

export default function LogosComponent() {
    return (
          <div className="col-lg-6 d-flex flex-column justify-content-end align-items-center pt-4 pt-lg-5 pb-3">
              <div className="row w-100">
                <div className="col d-flex justify-content-center align-items-center px-2 py-4">
                  <Image src={colgate} alt="Colgate logo" />
                </div>
                <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                  <Image src={nvidia} alt="nvidia logo" />
                </div>
                <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                  <Image src={kc} width='75px' alt="Kansas City Chiefs logo" />
                </div>
              </div>

              <div className="row w-100">
                <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                  <Image src={jazz} alt="Utah Jazz logo" />
                </div>
                <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                  <Image src={tmobile} alt="tmobile logo" />
                </div>
                <div className="col d-flex d-flex justify-content-center align-items-center px20 py-4">
                  <Image src={tva} width='75px' alt="TVA logo" />
                </div>
              </div>
          </div>
    )
}