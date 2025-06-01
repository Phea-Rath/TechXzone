import React from 'react'
import { IoStarOutline } from 'react-icons/io5'
import { MdAddShoppingCart } from 'react-icons/md'

const Products = () => {
  return (
    <section className='text-white pb-5'>
      <article>
        <section className="background p-20"><div class="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="flex flex-col gap-5">
                <a href="/" className="flex items-center gap-5">
                  <div className="border rounded-full w-5 h-5 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
                    </svg>
                  </div> Back to home
                </a>
                <div className="section-title">
                  <h2 className='text-4xl font-extrabold'>Jacket&nbsp;<span>(12)</span></h2>
                </div>
                <p> This men's nappa leather biker jacket is a stylish and versatile piece that will add a touch of edge to any outfit. Made from 100% nappa leather, this jacket is soft, durable, and weather-resistant. It features a slim fit, quilted detailing, and gunmetal fastenings for an authentic biker look. </p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </article>
      <article className='px-20 py-5'>
        <div className='flex justify-between gap-5'>
                   <div className='border w-50 p-2 flex items-center'>
                      <div>
                            <h4>Filters</h4>
                      </div> 
                   </div>
                   <div className='flex-1'>
                      <div className='flex border justify-between p-2 items-center'>
                            <ul className='flex'>
                               <li><a href="#">Home /</a></li>
                               <li><a href="#">Jacket</a></li>
                            </ul>
                            <div>
                               
          <nav>
            <form id="FacetFiltersForm"><div >
                        <div className='flex gap-2 items-center'>
                      <span><label for="SortBy">Sort by:</label></span>
                      <select className='border p-1'><option value="manual">Featured</option><option value="best-selling" selected="selected">Best selling</option><option value="title-ascending">Alphabetically, A-Z</option><option value="title-descending">Alphabetically, Z-A</option><option value="price-ascending">Price, low to high</option><option value="price-descending">Price, high to low</option><option value="created-ascending">Date, old to new</option><option value="created-descending">Date, new to old</option></select>
                        </div>
                        <noscript>
                            <button type="submit">Sort</button>
                        </noscript>
                    </div></form>
          </nav>
                            </div> 
                      </div>
                   </div>
                </div>
      </article>
      <article className='grid grid-cols-3 gap-2 px-20'>
              <div data-aos="fade-right">
                <div className="product-card-slider-main text-white background flex border">
                    <div className="flex">
                    <div className="product-card-inner flex">
                      <div className=" flex items-center">
                        <img loading="lazy" className="" srcset="https://www.pngarts.com/files/3/Engine-Oil-PNG-Photo.png" alt=""/>
                    </div>
                      <div className="pro-content flex items-center p-3">
                 <div className="flex flex-col gap-2">
                  <div className='flex flex-col gap-2'>
                      <div className="subtitle">
                          <span className='prime-text'>Steel Gloves</span>                                
                      </div>
                     <div className="wish-lbl-wrp">
                      </div>
                      <h4><a href="/products/steel-pro-gloves" tabindex="0">STEEL-PRO GLOVES</a></h4>
                          <div className="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-widget-name="preview_badge" data-impressions-tracked="true" data-views-tracked="true">
                            
                              <div className='flex gap-2 text-red-600'>
                                <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                              </div>
                      </div>
                      
                      
                            <variant-selects className="order-select no-js-hidden" data-section="template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7" data-product="8475698069799" data-url="" data-update-url="false" data-layout="card">
                              <select className="border w-50 px-2 rounded-full py-2" name="options[Color]" form="product-form-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" tabindex="0">
                                <option data-val="White" value="White" selected="selected">
                                                  White
                                              </option><option data-val="Red" value="Red">
                                                  Red
                                              </option><option data-val="Black" value="Black">
                                                  Black
                                              </option></select><script type="application/json">
                                  </script>
                              </variant-selects>
                      
                      <div className="no-js-hidden price" id="price-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" role="status">
                          
                  <ins className="price-item--regular mr-4">$149.00</ins>
                  <del className="text-gray-300">
                    
                      $199.00
                    
                    </del>
                  </div>
                  </div>
                  <nav className="flex items-center">
                    <div className="wbquicksuccess hidden" hidden="">Translation missing: en.wbcustomlabel.wballtext.quicksuccessmsg</div>
                      
                        
                        <button className='flex items-center prime-bg1 px-5 py-2'>
                          
                        <div>
                          <MdAddShoppingCart />
                        </div>
                              <span>Add to Cart</span>
                            </button>
                   </nav>
              </div>
          </div>
      </div>
                    </div>
                </div></div>
              <div data-aos="zoom-in">
                <div className="product-card-slider-main text-white background flex border">
                    <div className="flex">
                    <div className="product-card-inner flex">
                      <div className=" flex items-center">
                        <img loading="lazy" className="" srcset="https://www.pngall.com/wp-content/uploads/5/Motor-Oil-Bottle-PNG-Download-Image.png" alt=""/>
                    </div>
                      <div className="pro-content flex items-center p-3">
                 <div className="flex flex-col gap-2">
                  <div className='flex flex-col gap-2'>
                      <div className="subtitle">
                          <span className='prime-text'>Steel Gloves</span>                                
                      </div>
                     <div className="wish-lbl-wrp">
                      </div>
                      <h4><a href="/products/steel-pro-gloves" tabindex="0">STEEL-PRO GLOVES</a></h4>
                          <div className="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-widget-name="preview_badge" data-impressions-tracked="true" data-views-tracked="true">
                            
                              <div className='flex gap-2 text-red-600'>
                                <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                              </div>
                      </div>
                      
                      
                            <variant-selects className="order-select no-js-hidden" data-section="template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7" data-product="8475698069799" data-url="" data-update-url="false" data-layout="card">
                              <select className="border w-50 px-2 rounded-full py-2" name="options[Color]" form="product-form-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" tabindex="0">
                                <option data-val="White" value="White" selected="selected">
                                                  White
                                              </option><option data-val="Red" value="Red">
                                                  Red
                                              </option><option data-val="Black" value="Black">
                                                  Black
                                              </option></select><script type="application/json">
                                  </script>
                              </variant-selects>
                      
                      <div className="no-js-hidden price" id="price-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" role="status">
                          
                  <ins className="price-item--regular mr-4">$149.00</ins>
                  <del className="text-gray-300">
                    
                      $199.00
                    
                    </del>
                  </div>
                  </div>
                  <nav className="flex items-center">
                    <div className="wbquicksuccess hidden" hidden="">Translation missing: en.wbcustomlabel.wballtext.quicksuccessmsg</div>
                      
                        
                        <button className='flex items-center prime-bg1 px-5 py-2'>
                          
                        <div>
                          <MdAddShoppingCart />
                        </div>
                              <span>Add to Cart</span>
                            </button>
                   </nav>
              </div>
          </div>
      </div>
                    </div>
                </div></div>
              <div data-aos="fade-left">
                <div className="product-card-slider-main text-white background flex border">
                    <div className="flex">
                    <div className="product-card-inner flex">
                      <div className=" flex items-center">
                        <img loading="lazy" className="" srcset="https://www.pngall.com/wp-content/uploads/5/Motor-Oil-Bottle-PNG-HD-Image.png" alt=""/>
                    </div>
                      <div className="pro-content flex items-center p-3">
                 <div className="flex flex-col gap-2">
                  <div className='flex flex-col gap-2'>
                      <div className="subtitle">
                          <span className='prime-text'>Steel Gloves</span>                                
                      </div>
                     <div className="wish-lbl-wrp">
                      </div>
                      <h4><a href="/products/steel-pro-gloves" tabindex="0">STEEL-PRO GLOVES</a></h4>
                          <div className="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-widget-name="preview_badge" data-impressions-tracked="true" data-views-tracked="true">
                            
                              <div className='flex gap-2 text-red-600'>
                                <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                              </div>
                      </div>
                      
                      
                            <variant-selects className="order-select no-js-hidden" data-section="template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7" data-product="8475698069799" data-url="" data-update-url="false" data-layout="card">
                              <select className="border w-50 px-2 rounded-full py-2" name="options[Color]" form="product-form-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" tabindex="0">
                                <option data-val="White" value="White" selected="selected">
                                                  White
                                              </option><option data-val="Red" value="Red">
                                                  Red
                                              </option><option data-val="Black" value="Black">
                                                  Black
                                              </option></select><script type="application/json">
                                  </script>
                              </variant-selects>
                      
                      <div className="no-js-hidden price" id="price-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" role="status">
                          
                  <ins className="price-item--regular mr-4">$149.00</ins>
                  <del className="text-gray-300">
                    
                      $199.00
                    
                    </del>
                  </div>
                  </div>
                  <nav className="flex items-center">
                    <div className="wbquicksuccess hidden" hidden="">Translation missing: en.wbcustomlabel.wballtext.quicksuccessmsg</div>
                      
                        
                        <button className='flex items-center prime-bg1 px-5 py-2'>
                          
                        <div>
                          <MdAddShoppingCart />
                        </div>
                              <span>Add to Cart</span>
                            </button>
                   </nav>
              </div>
          </div>
      </div>
                    </div>
                </div></div>
              <div data-aos="fade-right">
                <div className="product-card-slider-main text-white background flex border">
                    <div className="flex">
                    <div className="product-card-inner flex">
                      <div className=" flex items-center">
                        <img loading="lazy" className="" srcset="https://www.pngplay.com/wp-content/uploads/7/Motor-Oil-PNG-Clipart-Background.png" alt=""/>
                    </div>
                      <div className="pro-content flex items-center p-3">
                 <div className="flex flex-col gap-2">
                  <div className='flex flex-col gap-2'>
                      <div className="subtitle">
                          <span className='prime-text'>Steel Gloves</span>                                
                      </div>
                     <div className="wish-lbl-wrp">
                      </div>
                      <h4><a href="/products/steel-pro-gloves" tabindex="0">STEEL-PRO GLOVES</a></h4>
                          <div className="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-widget-name="preview_badge" data-impressions-tracked="true" data-views-tracked="true">
                            
                              <div className='flex gap-2 text-red-600'>
                                <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                              </div>
                      </div>
                      
                      
                            <variant-selects className="order-select no-js-hidden" data-section="template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7" data-product="8475698069799" data-url="" data-update-url="false" data-layout="card">
                              <select className="border w-50 px-2 rounded-full py-2" name="options[Color]" form="product-form-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" tabindex="0">
                                <option data-val="White" value="White" selected="selected">
                                                  White
                                              </option><option data-val="Red" value="Red">
                                                  Red
                                              </option><option data-val="Black" value="Black">
                                                  Black
                                              </option></select><script type="application/json">
                                  </script>
                              </variant-selects>
                      
                      <div className="no-js-hidden price" id="price-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" role="status">
                          
                  <ins className="price-item--regular mr-4">$149.00</ins>
                  <del className="text-gray-300">
                    
                      $199.00
                    
                    </del>
                  </div>
                  </div>
                  <nav className="flex items-center">
                    <div className="wbquicksuccess hidden" hidden="">Translation missing: en.wbcustomlabel.wballtext.quicksuccessmsg</div>
                      
                        
                        <button className='flex items-center prime-bg1 px-5 py-2'>
                          
                        <div>
                          <MdAddShoppingCart />
                        </div>
                              <span>Add to Cart</span>
                            </button>
                   </nav>
              </div>
          </div>
      </div>
                    </div>
                </div></div>
              <div data-aos="zoom-in">
                <div className="product-card-slider-main text-white background flex border">
                    <div className="flex">
                    <div className="product-card-inner flex">
                      <div className=" flex items-center">
                        <img loading="lazy" className="" srcset="https://cms.hondaph.com/images/products/647d52e7d0d60.png" alt=""/>
                    </div>
                      <div className="pro-content flex items-center p-3">
                 <div className="flex flex-col gap-2">
                  <div className='flex flex-col gap-2'>
                      <div className="subtitle">
                          <span className='prime-text'>Steel Gloves</span>                                
                      </div>
                     <div className="wish-lbl-wrp">
                      </div>
                      <h4><a href="/products/steel-pro-gloves" tabindex="0">STEEL-PRO GLOVES</a></h4>
                          <div className="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-widget-name="preview_badge" data-impressions-tracked="true" data-views-tracked="true">
                            
                              <div className='flex gap-2 text-red-600'>
                                <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                              </div>
                      </div>
                      
                      
                            <variant-selects className="order-select no-js-hidden" data-section="template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7" data-product="8475698069799" data-url="" data-update-url="false" data-layout="card">
                              <select className="border w-50 px-2 rounded-full py-2" name="options[Color]" form="product-form-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" tabindex="0">
                                <option data-val="White" value="White" selected="selected">
                                                  White
                                              </option><option data-val="Red" value="Red">
                                                  Red
                                              </option><option data-val="Black" value="Black">
                                                  Black
                                              </option></select><script type="application/json">
                                  </script>
                              </variant-selects>
                      
                      <div className="no-js-hidden price" id="price-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" role="status">
                          
                  <ins className="price-item--regular mr-4">$149.00</ins>
                  <del className="text-gray-300">
                    
                      $199.00
                    
                    </del>
                  </div>
                  </div>
                  <nav className="flex items-center">
                    <div className="wbquicksuccess hidden" hidden="">Translation missing: en.wbcustomlabel.wballtext.quicksuccessmsg</div>
                      
                        
                        <button className='flex items-center prime-bg1 px-5 py-2'>
                          
                        <div>
                          <MdAddShoppingCart />
                        </div>
                              <span>Add to Cart</span>
                            </button>
                   </nav>
              </div>
          </div>
      </div>
                    </div>
                </div></div>
              <div data-aos="fade-left">
                <div className="product-card-slider-main text-white background flex border">
                    <div className="flex">
                    <div className="product-card-inner flex">
                      <div className=" flex items-center">
                        <img loading="lazy" className="" srcset="https://nplubricants.com/assets/public/products/19-motocycle-oil-2t-812.png?width=500&height=500&mode=crop" alt=""/>
                    </div>
                      <div className="pro-content flex items-center p-3">
                 <div className="flex flex-col gap-2">
                  <div className='flex flex-col gap-2'>
                      <div className="subtitle">
                          <span className='prime-text'>Steel Gloves</span>                                
                      </div>
                     <div className="wish-lbl-wrp">
                      </div>
                      <h4><a href="/products/steel-pro-gloves" tabindex="0">STEEL-PRO GLOVES</a></h4>
                          <div className="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-widget-name="preview_badge" data-impressions-tracked="true" data-views-tracked="true">
                            
                              <div className='flex gap-2 text-red-600'>
                                <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                              </div>
                      </div>
                      
                      
                            <variant-selects className="order-select no-js-hidden" data-section="template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7" data-product="8475698069799" data-url="" data-update-url="false" data-layout="card">
                              <select className="border w-50 px-2 rounded-full py-2" name="options[Color]" form="product-form-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" tabindex="0">
                                <option data-val="White" value="White" selected="selected">
                                                  White
                                              </option><option data-val="Red" value="Red">
                                                  Red
                                              </option><option data-val="Black" value="Black">
                                                  Black
                                              </option></select><script type="application/json">
                                  </script>
                              </variant-selects>
                      
                      <div className="no-js-hidden price" id="price-template--23977523249447__aac32ea0-b92c-48d0-a145-0485c3e55ad7-8475698069799" role="status">
                          
                  <ins className="price-item--regular mr-4">$149.00</ins>
                  <del className="text-gray-300">
                    
                      $199.00
                    
                    </del>
                  </div>
                  </div>
                  <nav className="flex items-center">
                    <div className="wbquicksuccess hidden" hidden="">Translation missing: en.wbcustomlabel.wballtext.quicksuccessmsg</div>
                      
                        
                        <button className='flex items-center prime-bg1 px-5 py-2'>
                          
                        <div>
                          <MdAddShoppingCart />
                        </div>
                              <span>Add to Cart</span>
                            </button>
                   </nav>
              </div>
          </div>
      </div>
                    </div>
                </div></div>
            </article>
    </section>
  )
}

export default Products