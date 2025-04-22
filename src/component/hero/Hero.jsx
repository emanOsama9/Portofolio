import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Project from '../project/Project'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import $ from 'jquery'; 
import Header from '../header/Header';

function Hero() {
    useEffect(() => {
        $(".heroo").animate({"width":"100%"},1500).animate({"height":"100%"},1500,function(){

         $(".header").show(1000,function(){
            $(".hero-h4").show(1000,function(){

                $(".hero-h2").show(1000,function(){
    
                    $(".hero-h1").show(1000,function(){
                        $(".hero-h3").show(1000 ,function(){
                            $(".hero-links").show(1000,function(){
                                $(".hero-skills").show(1000,function(){
                                    $(".hero-project").show(1000,function(){
                                        $(".contact").show(1000)
                                    })
                                })
                            })
    
                        });
    
                    });
    
                });
    
            });

         })

        })
       
 
      }, []);
  return<>
 
  <section className='heroo'>
  <div className='header'>
         <Header/>
       </div>

        
        <div className="min-h-screen hero flex items-center justify-center  text-white text-center px-4 fade-les "id="about">
            <div > 
             <h4 className="text-5xl md:text-6xl font-extrabold mb-6 hero-h4"></h4>
                <h2 className='text-4xl my-3 hero-h2'>Hi , i'm</h2>     
                <h1 className='text-purple-500 text-4xl my-5 hero-h1'>Eman Osama Mohamed Kamal</h1>   
                <h3 className='text-5xl my-8 hero-h3'>I'm Junior Frontend  Developer ( React.js)</h3> 
                <div className=' flex   items-center justify-center hero-links'>
                  <a href='https://github.com/emanOsama9' target='_blank'><i class="fa-brands fa-github py-3 px-5 fa-2x text-purple-500"> </i> </a>
                     <a href='Eman-Osama-Mohamed..- (1) (1).pdf' target='_blank' className='px-5 border py-2 mx-5 border-purple-400' >Download cv </a>
     
                </div>
             </div>
             
         </div>
       <div className='hero-skills'id="skills">
         <Skills/>
       </div>
       <div className='hero-project'id="project">
         <Project/>
       </div>
       <div className='contact'id="contact">
         <Contact/>
       </div>
     
        </section>

   
    
  
  </>  
}

export default Hero