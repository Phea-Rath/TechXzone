import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const Category = () => {
  return (
    <section className='px-20 py-5'>
      <article className='grid grid-cols-2 gap-y-10 gap-x-20 text-gray-100'>
        <nav className=' col-span-2 text-center background py-5'>
          <h1 className='text-3xl font-bold'>CATEGORY</h1>
        </nav>
        <nav data-aos="fade-right" className='border border-prime grid grid-cols-3 p-5'>
          <div className=' col-span-2'>
            <img width={400} src="https://www.freeiconspng.com/uploads/red-sports-car-ferrari-png-23.png" alt="" />
          </div>
          <div>
            <h1 className='text-5xl'>Car</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, impedit.</p>
          </div>
          <button className='prime-bg py-1 px-5 flex items-center gap-2 justify-center'>See more <MdOutlineArrowRightAlt className="text-2xl animate-head-shake"/></button>
        </nav>
        <nav data-aos="fade-left" className='border border-prime grid grid-cols-2 gap-2 p-5'>
          <div className=''>
            <img width={200} src="https://th.bing.com/th/id/R.134a24a122139b953fcab7a4f4d7d1a7?rik=qKTI%2fbFpfRpBnw&pid=ImgRaw&r=0" alt="" />
          </div>
          <div>
            <h1 className='text-4xl'>Motocycle</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, impedit.</p>
          </div>
          <button className='prime-bg py-1 px-5 flex items-center gap-2 justify-center'>See more <MdOutlineArrowRightAlt className="text-2xl animate-head-shake"/></button>
        </nav>
        
      </article>
    </section>
  )
}

export default Category