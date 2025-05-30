import React, { useEffect } from 'react'
import $ from 'jquery'; 

function Project() {
   useEffect(function(){
    $(".menue").show(2000,function(){
      $(".ecommerce").show(2000,function(){
        $(".quran").show(2000,function(){
          $(".todolist").show(2000)

        })
      })
    })
   },[])
  return<>
  <section className="projects">
      <div className="container bg-transparent">
        <h2 className='underline'>My Projects</h2>
      <div className='menue my-10'>

      <div className='grid md:grid-cols-2  items-center grid-cols-1'>
          
          <div className='px-[30px]'>
          <img src="/Portofolio/Screenshot (159).png" className='w-[400px] rounded-2xl hover:scale-105 -100 my-[30px]  transition-transform duration-300'/>

          </div>
          
            <div>
            <h3 className='text-center'>Menue Restaurant App</h3>

            <p>Displays a restaurant menu with categories and a search feature. 
          </p>
          <br/>
          <br/>
          <a href="https://emanosama9.github.io/menue/ " className='text-white ' target="_blank" ><h3 className='border text-center border-purple-600 w-[280px] md:px-2 py-2'>GitHub: https://emanosama9.github.io/menue/</h3> </a>

             </div>
        </div>

      </div>
<hr/>
        <br/>
       <br/>
       <br/>








 <div className='ecommerce'>
  
 <div className= 'grid md:grid-cols-2  items-center  grid-cols-1 '>

 
<div>
<h3 className='text-center'>  E-commerce-App</h3>

        <p> A platform that displays products and allows users to add them to the cart and filter products.</p>
           <br/>
                  <br/>

       <a href="https://emanosama9.github.io/e-commerce/ " className='text-white ' target="_blank" ><h3 className='border text-center  border-purple-600 px-2 py-2'>GitHub: https://emanosama9.github.io/e-commerce/</h3> </a>
</div>
    <div className='px-[30px]'>
      
           <img src="/Portofolio/Screenshot (70).png" className='w-[400px] rounded-2xl hover:scale-105  my-[30px] transition-transform duration-300'/>

   </div> 


</div>

 </div>
<hr/>

      <br/>
     <br/>
        <br/>
        
    <div className='quran'>



    <div  className='grid md:grid-cols-2  items-center  grid-cols-1'>
          
          <div className='gap-11 px-[30px]'>
              <img src="/Portofolio/Screenshot (120).png" className='w-[400px] rounded-2xl hover:scale-105  my-[30px] transition-transform duration-300'/>

            </div> 

             <div>
              <h3 className='text-center'>Quran App</h3>
        <p > An app that displays the Quran's surahs and verses in an elegant as well as the supplications.  manner  using an API . </p>
                  <br/>
                  <br/>
                  <a href="https://emanosama9.github.io/quran/" className='text-white ' target="_blank" ><h3 className='border border-purple-600  text-center px-2 py-2'>GitHub: https://emanosama9.github.io/quran/</h3> </a>

              </div>
    </div>



    </div>
        <br/>
 <br/>
<br/>
  

<hr/>
 <div className='todolist'>


 <div className= 'grid md:grid-cols-2 text-center grid-cols-1 items-center '>

 
<div>
<h3>TodoList</h3>
        <p>An interactive task management app where can add, delete, and update tasks. users  </p>
           <br/>
         <br/>
         <a href="https://emanosama9.github.io/todolist/" className='text-white ' target="_blank" ><h3 className='border border-purple-600 px-5 md:px-2 md:py-2'>GitHub: https://emanosama9.github.io/todolist/</h3> </a>

</div >
<div className='px-[30px]'>
    <img src="/Portofolio/Screenshot (64).png" className='w-[400px] rounded-2xl hover:scale-105   my-[30px] transition-transform duration-300'/>

   </div> 

</div>




 </div>



       </div>

    </section>
  
  </>  
}

export default Project