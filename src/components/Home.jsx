import React, { useEffect, useState } from 'react'
import { MdManageSearch, MdOutlineReadMore } from 'react-icons/md'
import { AiOutlineLine } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import Category from './Category';
import Branchs from './Branchs';
import Popular from './Popular';
const information = [
    {
        title: "Tyres",
        more:"& Alloys",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquam id illum vitae. Quibusdam quaerat hic sequi facilis porro libero quam earum ratione, dolorem repellendus laborum, praesentium in totam et magnam animi quisquam maiores officiis exercitationem nam debitis. Dolor, provident.",
        image:"https://spareparts-workdo.myshopify.com/cdn/shop/files/image_49.png?v=1697092625",
    },
    {
        title: "Mantenance",
        more:" Service Parts",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquam id illum vitae. Quibusdam quaerat hic sequi facilis porro libero quam earum ratione, dolorem repellendus laborum, praesentium in totam et magnam animi quisquam maiores officiis exercitationem nam debitis. Dolor, provident.",
        image:"https://spareparts-workdo.myshopify.com/cdn/shop/files/image_48.png?v=1697105909",
    },
    {
        title: "Sensor Relays",
        more:"and Control units",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquam id illum vitae. Quibusdam quaerat hic sequi facilis porro libero quam earum ratione, dolorem repellendus laborum, praesentium in totam et magnam animi quisquam maiores officiis exercitationem nam debitis. Dolor, provident.",
        image:"https://spareparts-workdo.myshopify.com/cdn/shop/files/image_47.png?v=1697106195",
    },
]
const Home = () => {
    const [posters, setPoster] = useState([information[0]]);
    const [bar, setBar] = useState(0);
    let [indexs, setIndex] = useState(1);
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            easing: 'ease-in-out', // Easing type
            once: false, // Whether animation should happen only once
            mirror: true, // Whether elements should animate out while scrolling past them
        });
        if (information.length <= 1) return; // No need to rotate if only one poster
        const interval = setInterval(() => {
            if (indexs > information.length-1) {
                indexs = 0;
                setPoster([information[indexs]]);
                console.log(indexs);
                setBar(indexs);
                indexs++;
            } else {
                setPoster([information[indexs]]);
                console.log(indexs);
                setBar(indexs);
                indexs++;
            }
        }, 10000); // 60,000ms = 1 minute

        return () => clearInterval(interval); // Cleanup on unmount
    },[indexs])
  return (
    <section>
        
          <article className='text-gray-200 grid grid-cols-1 px-20 h-[calc(100vh-122px)] gap-3 items-center border-b border-prime'>
              {posters?.map(({title,more,discription,image},index)=><div data-aos="fade-left" key={index} className='grid grid-cols-2 transition-all duration-700'>
                  <nav className='flex flex-col gap-5'>
                      <h6 className='prime-text'>TechXzone</h6>
                      <h1 className='font-bold text-5xl'>{title} <br /><span className=' font-normal'>{ more }</span></h1>
                      <p className=' font-normal'>{discription}</p>
                      <div className='flex items-center gap-5'>
                          <a href="/products"><button type="button" className='text-black bg-gray-100 p-2 flex transition-all duration-300 hover:bg-transparent hover:border hover:border-white hover:text-gray-100 cursor-pointer gap-2 items-center px-5'><MdOutlineReadMore className='text-3xl' />Show More</button></a>
                          <a href="/products"><button type="button" className='text-black prime-bg transition-all duration-300 cursor-pointerh py-2 px-5 flex items-center gap-2'><MdManageSearch className='text-3xl'/>Find Product</button></a>
                      </div>
                  </nav>
                  <nav className=''>
                      <img className=' mask-l-from-70% mask-l-to-90% brightness-70' src={image} alt="" />
                  </nav>
              </div>)}
              <nav className='col-span-2 flex justify-center text-3xl'>
                  {information?.map((item, index) => <AiOutlineLine onClick={() => {
                      setBar(index);
                      setPoster([information[index]]);
                      setIndex(index);
                  }} className={` transition-all cursor-pointer duration-300 ${bar==index?'text-[#fe0000]':""}`}/>)}
              </nav>
          </article>
          <article>
              <Category/>
          </article>
          <article>
              <Branchs/>
          </article>
          <article>
              <Popular/>
          </article>
    </section>
  )
}

export default Home