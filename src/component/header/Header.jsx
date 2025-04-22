import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery'; 

function Header() {
 
    useEffect(() => {
        $(".navbar").show(1000);
      }, []);
        return<>
    
      
      
         <div className='navbar'>

           <nav className='  md:w-[100%]  md:px-[50px] w-full md:flex  items-center fixed top-0 py-[20px] md:right-5 md:left-5' >
                      <ul className='me-auto'>
                        <Link> <h2 className='text-4xl	'>Eman</h2> </Link>
    
                        
                        </ul> 
                      <ul className=' ms-auto justify-center flex gap-11 '>
                      <a href="#about"className=' hover:underline'><li>About</li></a>
    
                           <a href="#skills "className=' hover:underline'><li>Skills</li></a>
      
                            <a href="#project"className=' hover:underline'><li>Project </li></a>
                 
                             <a href="#contact"className=' hover:underline'><li>Contact</li></a>
    
                       </ul>
    
    
    
    
             
    
    
             </nav>
    
    
     
     
    
    
    </div>
    
    
    
    
    
    
    
    
       
      
      
      
      
      
      
      
      
      
      
      </>  
    }
    
  
export default Header