import React from 'react'

export default ({ children }) => (
  <>
  <div className = 'Component-Bg' 
          style = {{ width: '100%',
                      height: 307,
                      backgroundImage: `url('https://res.cloudinary.com/dswcrbbwu/image/upload/v1619695454/projetcarrera.fr/images/IMG_2495_t8ks5k_jwqt1t.jpg')`,
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat', position: 'relative'}}>
        <h1 style={{fontWeight: 'bold', textAlign: 'center', marginBottom: '35px', lineHeight: 6.5, paddingTop: 0, marginTop: 0, color: 'white'}}>Découvrez le projet Carrera, sans plus tarder.</h1>
        </div>
        <br></br>
  <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
  </>
)
