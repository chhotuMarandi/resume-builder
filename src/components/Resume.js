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
     <hr />
     <hr />
     <section className='profile-info'>
       <div className='career'>
         <h3>career objective</h3>
         <ul>
           <li>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
             voluptates vero molestias? Vitae, minus qui assumenda fugiat saepe
             at eveniet.
           </li>
         </ul>
       </div>
       <div className='skills'>
         <h3>skills</h3>
         <ul>
           <li>HTML</li>
           <li>CSS</li>
           <li>JavaScript</li>
         </ul>
       </div>
       <div className='qualification'>
         <h3>qualification</h3>
         <table>
           <tr>
             <th>university</th>
             <th>College</th>
             <th>Percentage</th>
             <th>Passing Year</th>
           </tr>
           <tr>
             <th>school</th>
              <td>BHJP high school bakudi</td>
             <td>86%</td>
             <td>2014</td>
           </tr>
           <tr>
             <th>college</th>
             <td>Ms college Bhagalpur</td>
             <td>59%</td>
             <td>2016</td>
           </tr>
         </table>
       </div>
       <div className='experience'>
         <h3>experience</h3>
         <ul>
           <li>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
             nesciunt.
           </li>
           <li>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
             nesciunt.
           </li>
         </ul>
       </div>
       <div className='personnal-details'>
         <h3>personnal details</h3>
         <label htmlFor=''>Father Name</label>
         <p>ram kumar</p>
         <label htmlFor=''>Father Name</label>
         <p>ram kumar</p>
         <label htmlFor=''>Father Name</label>
         <p>ram kumar</p>
         <label htmlFor=''>Father Name</label>
         <p>ram kumar</p>
         <label htmlFor=''>Father Name</label>
       </div>
     </section>
   </>
 );
}

export default Resume