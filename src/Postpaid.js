import React from 'react'
import './postpaid.css';
import movie from './movie.png'
import tv from './tv.png'


function Postpaid() {
    const  data = [
        {
            name:'Most Popular',
            cash:'₹399',
            days:'Bill Cycle',
            data:'50GB'
        },
        
        {
            name:'FAMILY PLAN - 1 ADDITIONAL SIM CARD',
            cash:'₹599',
            days:'Bill Cycle',
            data:'75GB'
        },
        {
            name:'FAMILY PLAN - 2 ADDITIONAL SIM CARDS',
            cash:'₹799',
            days:'Bill Cycle',
            data:'100GB'
         
        },
        
    ]
  return (
    <div>
      <section class="pricing py-5">
  <div class="container">
    <div class="row">
      <h1 class='text-center mb-4'>Postpaid plans</h1>
            {
                data.map((item) => {
                return (
                <div class="col-lg-4 ">
                 <div class="card mb-5 mb-lg-0">
                    <div class="card-body border border-danger">

                       <h6 class="card-title  text-uppercase text-black  " ><b>{item.name}</b></h6>
                       <h1 class="card-price mt-4 " ><b>{item.cash}</b></h1>
                       <div class='row mt-4 '>
                          <img src={tv} className='movie' />
                          <img src={movie} className='movie' /> + 3 more
                       </div>
                       <div class='row mt-5 '>
                         <div class='col-6'>
                           <h4>Validity</h4>
                           <p class='text-danger'><b> {item.days}</b></p> 
                         </div>
                         <div class='col-6'>
                           <h4>Data</h4>
                           <p class='text-danger'><b> {item.data}</b></p> 
                         </div>
                         <div class='text-center mt-5'>
                         <button type="button" class="btn btn-dark text-black"><b>Getnow</b></button>
                         </div>
                       </div>
                       
                    </div>
                 </div>
                </div>
                )
            })
            }
       
           
         
       
    </div>
  </div>
</section>
    </div>
  )
}

export default Postpaid
