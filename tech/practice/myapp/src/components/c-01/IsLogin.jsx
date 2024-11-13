import React from 'react'

const IsLogin = () => {
    const isLogin=false;
    const isim="Ahmet";
    const soyIsim="Yılmaz";
  return (
    <div>
        {isLogin ? <h1>Hoşgeldiniz {isim} {soyIsim}</h1> : <h1>Lütfen giriş bilgilerini kontrol ediniz...</h1>}
    </div>
  )
}

export default IsLogin