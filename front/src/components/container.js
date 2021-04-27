import React from 'react'

export default ({ children }) => (
  <>
  <div className = 'Component-Bg' 
          style = {{ width: '100%',
                      height: 307,
                      backgroundImage: `url('https://cdn.pixabay.com/photo/2017/01/31/17/44/highway-2025863_1280.jpg')`,
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',}}>
        <h1 style={{fontWeight: 'bold', textAlign: 'center', marginBottom: '35px', lineHeight: 6.5, paddingTop: 0, marginTop: 0, color: 'white'}}>Découvrez le projet Carrera, sans plus tarder.</h1>
        </div>
        <br></br>
  <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
  </>
)
