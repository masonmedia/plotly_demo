import Head from 'next/head'
import { useState } from 'react';
import FormComponent from '../components/FormComponent'
import LogosComponent from '../components/LogosComponent'
import NavComponent from '../components/NavComponent'
import ImageComponent from '../components/ImageComponent';

export default function Home() {
  const [theme, setTheme] = useState('light');
  console.log(theme)
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div>
      <Head>
        <title>Plotly Landing Page</title>
        <meta name="description" content="See Dash in action! Sign up for your free demo today." />
        <link rel="icon" href="/plotly_favicon.png" />
      </Head>

      <main className={theme}>
        {/* nav */}
        <NavComponent setMode={switchTheme} btnClass={'btn-purple'}
        one={theme === 'light' ?
          <img src="/logo_light.png" alt="" width="100" height="auto" />
          :
          <img src="/logo_dark.png" alt="" width="100" height="auto" />
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
            <div className="col-lg-6 d-flex flex-column justify-content-start align-items-start pe-5">
              <h1 className="mb-0">See Dash in action</h1>
              <h5 className="sub-heading pb-3 pt-2 pe-3">Thank you for your interest in Dash Enterprise. We'll be in touch soon to schedule a demo.</h5>
              {/* list */}
              <ul className="list pe-0 pe-lg-4">
                <li>Culpa ullamco ipsum consequat nisi qui non veniam quis deserunt sit aute cillum ullamco.</li>
                <li>Culpa ullamco ipsum consequat nisi qui non veniam quis deserunt sit aute cillum ullamco.</li>
                <li>Culpa ullamco ipsum consequat nisi qui non veniam quis deserunt sit aute cillum ullamco.</li>
              </ul>
            </div>

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
