import './Resume.css'

function Resume ({name,email,mobile,address}) {


 return (
   <>
     <h2 className='resume'>resume</h2>
     <section className='profile-section'>
       <div className='profile-info'>
         <h1>{name}</h1>
         <div className='email'>
           <label>email-id : </label>
           {email}
         </div>
         <div className='mobile'>
           <label>mobile no :</label> {mobile}
         </div>
         <div className='email'>
           <label>address : </label>
           {address}
         </div>
       </div>
       <div className='profile-image'>
         <img
           src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'
           alt=''
         />
       </div>
     </section>
   </>
 );
}

export default Resume