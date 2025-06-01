import logo from '../assets/Artboard 2 copy@4x.png'
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing type
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);
  const [language, setLanguage] = useState(false);
  const [account, setAccount] = useState(false);
  return (
    <section className='background font-semibold'>
      <section className='flex flex-row w-[100vw] px-20'>
        <article className='flex items-center flex-1 basis-full'>
          <div>
            <img
              width="100px"
              src={logo}
              class="img-fluid rounded-top"
              alt=""
            />
          </div>
          <ul className='prime-text flex justify-around basis-full'>
            <li className='flex items-center gap-2 group cursor-pointer h-[88px] '>All Product<IoIosArrowDown className='transition-all duration-500 group-hover:rotate-180' />
              <article class=" absolute transition-all -z-5 overflow-hidden h-0 duration-300 opacity-100 group-hover:opacity-100 group-hover:h-[200px] group-hover:z-1 bg-gray-100 left-0 text-black top-[88px] w-full px-20">
            <div>
                <ul class="flex justify-between py-3" id="menu_ec360094-25b9-4097-b7d6-2a601c7a2249">
                  <li class=" flex-basic">
                    <ul class="megamenu-list arrow-list" id="">
                      <li class="font-bold"><span>Motorbike's Accessories</span></li>
                      <li>
                      <a href="/collections/motor-wear">Motor Wear</a>
                      </li>
                      <li>
                      <a href="/collections/electric">Electric</a>
                      </li>
                      <li>
                      <a href="/collections/helmets">Helmets</a>
                      </li>
                      <li>
                      <a href="/collections/jacket">Jacket</a>
                      </li>
                      <li>
                      <a href="/collections/leather-suits">Leather Suits</a>
                      </li>
                      <li>
                      <a href="/collections/motorcycles">Motorcycles</a>
                      </li>
                    </ul>
                </li>
                <li class=" flex-basic">
                  <ul class="megamenu-list arrow-list" id="menu_ec360094-25b9-4097-b7d6-2a601c7a2249-2">
                      <li class="font-bold"><span>Bike Accessories</span></li>
                          <li>
                          <a href="/products/atipica-air-shoes"> ATIPICA AIR SHOES</a>
                          </li>
                          <li>
                          <a href="/products/blacl-box-electic">Blacl box electic</a>
                          </li>
                          <li>
                          <a href="/products/eclipse-jacket">Eclipse Jacket</a>
                          </li>
                          <li>
                          <a href="/products/leather-jacket-tall">Leather Jacket - Tall</a>
                          </li>
                          <li>
                          <a href="/products/gyper-limpop">Gyper limpop</a>
                          </li>
                        </ul>
                      </li>
                      <li class=" flex-basic">
                        <ul class="megamenu-list arrow-list" id="menu_ec360094-25b9-4097-b7d6-2a601c7a2249-3">
                            <li class="font-bold"><span>All Categories</span></li>
                                <li>
                                <a href="/collections/motor-wear">Motor Wear</a>
                                </li>
                                <li>
                                <a href="/collections/electric">Electric</a>
                                </li>
                                <li>
                                <a href="/collections/helmets">Helmets</a>
                                </li>
                                <li>
                                <a href="/collections/jacket">Jacket</a>
                                </li>
                                <li>
                                <a href="/collections/leather-suits">Leather Suits</a>
                                </li>
                                <li>
                                <a href="/collections/motorcycles">Motorcycles</a>
                                </li>
                        </ul>
                    </li>
                    <li class=" flex-basic">
                        <a href="/collections/all">
                            <img  src="https://spareparts-workdo.myshopify.com/cdn/shop/files/mordern-accessories.jpg?v=1697091446" alt="" width="200"/>
                        </a>
                    </li>
            </ul>
        </div>
      </article>
            </li>
            <li className='flex items-center gap-2 group cursor-pointer h-[88px] '>Collections<IoIosArrowDown className='transition-all duration-500 group-hover:rotate-180' />
              <div class=" absolute top-[88px] left-0 -translate-y-4 h-0 transition-all duration-300 opacity-0 -z-40 overflow-hidden  group-hover:translate-0 group-hover:opacity-100 group-hover:h-[240px] group-hover:z-30 text-black bg-gray-100 w-full px-20 py-2">
                                            <div>
                                              <div class="flex justify-between">
                                                    <div class="col-md-3 col-12">
                                                        <div class="megamenu-card">
                                                            <div class="megamenu-card-inner">
                                                                <div class="megamenu-image">
                                                                    <a href="/collections/best-seller" class="img-ratio" tabindex="0">
                                                                        <img width="200" src="//spareparts-workdo.myshopify.com/cdn/shop/files/blue-mountain-bike-isolated-white-background-3d-rendering.jpg?v=1740479781" alt="megamenu-image" loading="lazy"/>
                                                                    </a>
                                                                </div>
                                                                <div class="text-center">
                                                                    <a tabindex="0">Best seller</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  
                                                 
                                                    <div class="col-md-3 col-12">
                                                        <div class="megamenu-card">
                                                            <div class="megamenu-card-inner">
                                                                <div class="megamenu-image">
                                                                    <a href="/collections/motor-wear" class="img-ratio" tabindex="0">
                                                                        <img width="200" src="//spareparts-workdo.myshopify.com/cdn/shop/files/portrait-stylish-motorcycle-rider-with-helmet.jpg?v=1740479818" alt="megamenu-image" loading="lazy"/>
                                                                    </a>
                                                                </div>
                                                                <div class="text-center">
                                                                    <a tabindex="0">Motor Wear</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  
                                                 
                                                    <div class="col-md-3 col-12">
                                                        <div class="megamenu-card">
                                                            <div class="megamenu-card-inner">
                                                                <div class="megamenu-image">
                                                                    <a href="/collections/electric" class="img-ratio" tabindex="0">
                                                                        <img width="200" src="//spareparts-workdo.myshopify.com/cdn/shop/files/illustration-by-mojograph.jpg?v=1740479891" alt="megamenu-image" loading="lazy"/>
                                                                    </a>
                                                                </div>
                                                                <div class="text-center">
                                                                    <a tabindex="0">Electric</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  
                                                 
                                                    <div class="col-md-3 col-12">
                                                        <div class="megamenu-card">
                                                            <div class="megamenu-card-inner">
                                                                <div class="megamenu-image">
                                                                    <a href="/collections/motorcycles" class="img-ratio" tabindex="0">
                                                                        <img width="200" src="//spareparts-workdo.myshopify.com/cdn/shop/files/sportster-iron-883-genarated-by-ai.jpg?v=1740479910" alt="megamenu-image"/>
                                                                    </a>
                                                                </div>
                                                                <div class="text-center">
                                                                    <a tabindex="0">Motorcycles</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  
                                                
                                              </div>
                                            </div>
                                        </div>
            </li>
            <li className='flex items-center gap-2 group cursor-pointer h-[88px] '>Page<IoIosArrowDown className='transition-all duration-500 group-hover:rotate-180' />
              <div class=" absolute top-[88px] bg-gray-100 -translate-y-2 text-black p-5 w-50 h-0 transition-all duration-300 opacity-0 -z-40 overflow-hidden group-hover:opacity-100 group-hover:translate-0 group-hover:h-[200px] group-hover:z-30">
                <ul className="flex flex-col gap-2">
                                                <li class="">
                                                    <a href="/pages/about-us">About us</a>
                                                    
                                                </li>
                                                <li class="">
                                                    <a href="/pages/contact">Contact us</a>
                                                    
                                                </li>
                                                <li class="">
                                                    <a href="/pages/faqs">FAQs</a>
                                                    
                                                </li>
                                                <li class="">
                                                    <a href="/blogs/spareparts">Blogs</a>
                                                    
                                                </li>
                                                <li class="">
                                                    <a href="/collections">Category</a>
                                                    
                                                </li>
                                        </ul>
                                    </div>
            </li>
          </ul>
        </article>
        <article className='flex items-center flex-1 basis-full justify-between'>
          <div className='prime-text p-2 border-l-2 border-prime flex items-center pl-10'><AiOutlineSearch /><input type="text" name="search" placeholder='Search Products. . .' className=' prime-text outline-none p-2' /></div>
          <ul className='prime-text flex items-center gap-3'>
            <li onClick={() => { setAccount(!account); setLanguage(false); }}><VscAccount className='text-xl' />
              <div class={`absolute top-[88px] bg-gray-100 text-black transition-all duration-500 ${account?'group-hover:opacity-100 group-hover:translate-0 group-hover:h-[120px] group-hover:z-40':'-translate-y-2 h-0 opacity-0 -z-40 overflow-hidden '}`}>
                              <ul>
                                    <li class="p-2 hover:bg-gray-200"><a href="/account/login">Log in</a></li>
                                    <li class="p-2 hover:bg-gray-200"><a href="/account/register" title="Create Account">Create Account</a></li>
                                  <li class="p-2 hover:bg-gray-200">
                                        <a href="/pages/wishlist">Wishlist</a>
                                  </li>
                                  <li class="p-2 hover:bg-gray-200">
                                      <a href="/pages/compare" class="compare">
                                          Compare
                                      </a>
                                  </li>
                            </ul>
                        </div>
            </li>
            <li className='flex items-center gap-2 cursor-pointer' onClick={() => { setLanguage(!language); setAccount(false); }}>English <IoIosArrowDown />
              <div class={`absolute top-[88px] bg-gray-100 text-black transition-all duration-500 ${language?'group-hover:opacity-100 group-hover:translate-0 group-hover:h-[120px] group-hover:z-40':'-translate-y-2 h-0 opacity-0 -z-40 overflow-hidden '}`}>
                <ul id="FooterLanguageList" role="list" class="disclosure__list list-unstyled">
                  <li class="p-2 hover:bg-gray-200" tabindex="-1">
                                    <a class="flex gap-2" href="#" hreflang="en" lang="en" aria-current="true" data-value="en">
                                          <img src="//spareparts-workdo.myshopify.com/cdn/shop/files/en.svg?v=1124470684023176590" class="mr5" width="18" height="14" alt="English"/>
                                      
                                      English
                                    </a>
                                  </li><li class="p-2 hover:bg-gray-200"tabindex="-1">
                                    <a class="flex gap-2" href="#" hreflang="ar" lang="ar" data-value="ar">
                                          <img src="//spareparts-workdo.myshopify.com/cdn/shop/files/ar.svg?v=3666672789038200558" class="mr5" width="18" height="14" alt="العربية"/>
                                      
                                      العربية
                                    </a>
                                  </li><li class="p-2 hover:bg-gray-200" tabindex="-1">
                                    <a class="flex gap-2" href="#" hreflang="de" lang="de" data-value="de">
                                          <img src="//spareparts-workdo.myshopify.com/cdn/shop/files/de.svg?v=4026187038083143168" class="mr5" width="18" height="14" alt="Deutsch"/>
                                      
                                      Deutsch
                                    </a>
                                  </li></ul>
                            </div>
            </li>
          </ul>
          <div className=' bg-gray-300 p-2 flex items-center gap-2 h-full'>
            <ul>
              <li>My Card</li>
              <li>$0.00</li>
            </ul>
            <div className=' relative'>
              <div className=' bg-red-700 text-white text-center rounded-full p-[1px] text-[10px] absolute right-0 -top-2'>+99</div>
              <HiOutlineShoppingCart className='text-3xl' />
            </div>
          </div>
        </article>
      </section>
      
    </section>
  )
}

export default Header