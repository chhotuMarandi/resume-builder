import './Resume.css'

function Resume({
  name,
  email,
  mobile,
  address,
  school,
  college,
  personnalDetails,
}) {
  return (
    <div className='resume'>
      <h2 className='resume-heading'>resume</h2>
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
          <ul className='skills-grid'>
            <li>HTML</li>
            <li>Node Js</li>
            <li>CSS</li>
            <li>Express</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>React Js</li>
            <li>Git Command</li>
          </ul>
        </div>
        <div className='qualification'>
          <h3>qualification</h3>
          <table>
            <tr>
              <th>university</th>
              <th>Name</th>
              <th>Percentage</th>
              <th>Passing Year</th>
            </tr>
            <tr>
              <th>School</th>
              <td>{school.name}</td>
              <td>{school.percentage}</td>
              <td>{school.passingYear}</td>
            </tr>
            <tr>
              <th>College</th>
              <td>{college.name}</td>
              <td>{college.percentage}</td>
              <td>{college.passingYear}</td>
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
          <div className='details'>
            <p>Father Name</p>
            <span>:</span>
            <p>{personnalDetails.fatherName}</p>
          </div>
          <div className='details'>
            <p>Date of Birth</p>
            <span>:</span>
            <p>{personnalDetails.dob}</p>
          </div>
          <div className='details'>
            <p>Gender</p>
            <span>:</span>
            <p>{personnalDetails.gender}</p>
          </div>
          <div className='details'>
            <p>Nationality</p>
            <span>:</span>
            <p>{personnalDetails.nationality}</p>
          </div>
          <div className='details'>
            <p>Martial status</p>
            <span>:</span>
            <p>{personnalDetails.martialStatus}</p>
          </div>
          <div className='details'>
            <p>Language known</p>
            <span>:</span>
            <p>{personnalDetails.language}</p>
          </div>
          <div className='details'>
            <p>Hobbies</p>
            <span>:</span>
            <p>{personnalDetails.hobbies}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume