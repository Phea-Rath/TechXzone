import React from 'react'
import Header from './header'
import { Outlet } from 'react-router'

const Management = () => {
  return (
    <section className='background-image w-[98.88vw] max-h-[300vh] overflow-hidden'>
      <Header />
      <div class="prime-text border-y border-y-gray-500 px-20">
          <div class="container">
              <div class="flex justify-between text-xs py-2">
                  <div class="annoucebar-left col-6 d-flex">
                      <p><b>Get a jacket for free </b>  with 100.00 $ order.
                          <b><a href="/products/air-frame-d1-lady-tex-jacket" className=' underline'>Get more</a></b>
                      </p>
                  </div>
                  <div>
                      <ul className='flex gap-5 underline'><li><a href="/pages/privacy-policy">Policy Privacy</a></li>
                          <li><a href="/pages/contact">Contact</a></li>
                          <li><a href="/pages/faqs">FAQ</a></li>
                      </ul> 
                  </div>
              </div>
          </div>
      </div>
      <main>
        <Outlet/>
      </main>
    </section>
  )
}

export default Management