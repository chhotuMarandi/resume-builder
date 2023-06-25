function Resume ({name,email,mobile,address}) {
 return (
   <>
     <div className='profile'>
       <div>
         <h2>resume</h2>
       </div>
       <div className='profile-info'>
         <h1>{name}</h1>
         <p className='email'>Email-id : {email}</p>
         <p className='mobile'>Mobile No : {mobile}</p>
         <p className='address'>Address: {address}</p>
       </div>
     </div>
     <div className='profile-image'>
       <img src='' alt='' />
     </div>
   </>
 );
}

export default Resume