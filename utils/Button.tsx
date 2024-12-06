import React from 'react'

export default function Button({variant,children}: Readonly<{variant:string,children: React.ReactNode}>) {

  return <button className={variant}>
   
    {children}

  </button>
}
