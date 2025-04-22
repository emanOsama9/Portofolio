import React, { useEffect } from 'react'
import $ from 'jquery'; 

function Contact() {
useEffect(function(){
    $(".h1-contact").show(2000,function(){

        $(".p-contact").show(2000)
})

},[])
  return<>
  
  <section className="contact text-center">
      <div className="container border shadow-2xl shadow-purple-400 py-5">
        <h2 className='h1-contact'>Contact with Me</h2>
        <p className='p-contact'>Email: eo9538985@gmail.com </p>
         <i class="fa-solid fa-phone text-center my-5">
            <span className='px-4'> : 0 1 0 1 8 4 7 6 2 2 5</span>
         </i> 
         <br/>
        
         
       </div>
    </section>
  
  
  
  
  
  </>  
}

export default Contact