import './Resume.css'

function Resume ({name,email,mobile,address}) {
 return (
   <>
   <h2 className='resume'>resume</h2>
     <section className='profile-section'>
       <div className='profile'>
         <div className='profile-info'>
           <h1>{name}</h1>
           <p className='email'>Email-id : {email}</p>
           <p className='mobile'>Mobile No : {mobile}</p>
           <p className='address'>Address: {address}</p>
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