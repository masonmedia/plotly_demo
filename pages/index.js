import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import FormComponent from '../components/FormComponent'
import LogosComponent from '../components/LogosComponent'
import NavComponent from '../components/NavComponent'
import ImageComponent from '../components/ImageComponent'
import TextComponent from '../components/TextComponent'
import logoLight from '../public/img/logo_light.png'
import logoDark from '../public/img/logo_dark.png'

export default function Home() {
  const [theme, setTheme] = useState('light');
  console.log(theme)
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="fade-in">
      <Head>
        <title>Plotly Landing Page</title>
        <meta name="description" content="See Dash in action! Sign up for your free demo today." />
        <link rel="icon" href="/plotly_favicon.png" />
      </Head>

      <main className={theme}>
        {/* nav */}
        <NavComponent setMode={switchTheme} btnClass={'btn-purple'}
        one={theme === 'light' ?
          // <img src="/logo_light.png" alt="" width="100" height="auto" />
          <Image src={logoLight} width="100" height="30" className="w-100" />
          :
          // <img src="/logo_dark.png" alt="" width="100" height="auto" />
          <Image src={logoDark} className="w-100" width="100" height="30" />
        }
        two={theme === 'light' ? 
          <div className="d-flex justify-content-center align-items-center">
          <img src="/img/icons/mooon.svg" width="20px" className="me-2" />
          <span className="m-0">Dark</span>
          </div> : 
          <div className="d-flex justify-content-center align-items-center">
          <img src="/img/icons/sun.svg" width="20px" className="me-2" />
          <span className="m-0">Light</span>
          </div>
          }
        />
       
        <div className="container-fluid">
          <div className="row min-vh-100 p-5">
            <TextComponent />
            {/* ghost spacer for desktop */}
            <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-start align-items-start p-5 my-4 my-lg-0">
            </div>
            <FormComponent formClass={ theme === 'light' ? 'bg-white border-light' : 'bg-dark border-dark'} />
            <ImageComponent />
            <LogosComponent />
          </div>
        </div>
      </main>
    </div>
    )
  }
