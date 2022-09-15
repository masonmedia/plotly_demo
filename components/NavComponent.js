import { useEffect, useState } from 'react';

export default function NavComponent(props) {
    const [theme] = useState('');

    useEffect(() => {
        console.log('useEffect ran. The theme is: ', theme);
      }, [theme]); // 👈️ add state variables you want to track
    

    // const switchTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme);
    // }
    return (
        <div>
            <nav className="navbar">
                <div className="container p-3">
                    <a className="navbar-brand d-flex me-auto" href="#">
                    {theme === 'light' ?
                        <img src="/logo_light.png" alt="" width="100" height="auto" />
                        :
                        <img src="/logo_dark.png" alt="" width="100" height="auto" />
                    }
                    </a>
                    <div onClick={props.setMode} className="btn btn-outline-secondary rounded-0">
                        {theme === 'light' ? 
                        <div className="d-flex justify-content-center align-items-center">
                        <img src="/img/icons/mooon.svg" width="20px" className="me-2" />
                        <p className="m-0">dark</p>
                        </div> : 
                        <div className="d-flex justify-content-center align-items-center">
                        <img src="/img/icons/sun.svg" width="20px" className="me-2" />
                        <p className="m-0">light</p>
                        </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
  }