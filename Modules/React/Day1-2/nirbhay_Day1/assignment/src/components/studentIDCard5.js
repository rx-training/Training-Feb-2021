let StudentDetails = ({students}) => {
  return (
    <section>
      <StudentIDCard student={students[0]} />
      <StudentIDCard student={students[1]} />
      <StudentIDCard student={students[2]} />
    </section>
  );
}

let StudentIDCard = ({student:{sid,name,dob,clg,clgadd}}) => {
  console.log(sid);
  return(
    <section>
      <Personal sid={sid} name={name} dob={dob} /><br/>
      <College clg={clg} clgadd={clgadd} />
      <hr/>
    </section>
  );
} 

const Personal = ({sid,name,dob}) => {
  return (
    <div>
      <Image style={{float:'left'}}/>
      <ul style={{float:'left'}}>
        <li>{sid}</li>
        <li>{name}</li>
        <li>{name}</li>
        <li>{dob}</li>
      </ul>
    </div>
  );
}

const Image = () => <img src="https://static.vecteezy.com/system/resources/thumbnails/000/350/111/small/Education__28193_29.jpg" width="100" alt=""/>

const College = ({clg,clgadd}) =>{
  return (
    <div style={{height:'80px'}}>
      <img style={{float:'left'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Gujarat-Technological-University-Logo.png/220px-Gujarat-Technological-University-Logo.png" width="60" alt=""/>
      <ul style={{float:'left'}}>
        <li>{clg}</li>
        <li>{clgadd}</li>
      </ul>
    </div>
  );
}

export default StudentDetails;