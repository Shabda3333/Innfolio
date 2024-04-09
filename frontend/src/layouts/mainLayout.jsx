// import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='px-[120px] py-[40px] bg-[url("./src/assets/welcomepagebg.svg")] h-[100vh] bg-cover bg-center  '>{children}</div>
  )
}

export default MainLayout