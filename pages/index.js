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
import sun from '../public/img/icons/sun.svg'
import moon from '../public/img/icons/moon.svg'

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
          <Image src={logoLight} alt="Plotly light mode logo" width="100" height="30" className="w-100" priority />
          :
          <Image src={logoDark} alt="Plotly dark mode logo" className="w-100" width="100" height="30" />
        }
        two={theme === 'light' ? 
          <div className="d-flex justify-content-center align-items-center">
            <Image src={moon} alt="Plotly dark mode moon logo" className="w-100" width="20" height="20" />
          <span className="ms-1">Dark</span>
          </div> : 
          <div className="d-flex justify-content-center align-items-center">
            <Image src={sun} alt="Plotly light mode sun logo" className="w-100" width="22" height="22" />
          <span className="ms-1">Light</span>
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
