export default function StudentDetails4(){
  return (
    <section style={{height:'330px'}}>
      <StudentIDCard sid="3001" name="John Doe" dob="16-02-1998" clg="Gujarat Technological University" clgadd="Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"/>
      <StudentIDCard sid="3001" name="Jane Doe" dob="29-08-1999" clg="Gujarat Technological University" clgadd="Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"/>
      <StudentIDCard sid="3001" name="Santino Deontonio" dob="05-11-1993" clg="Gujarat Technological University" clgadd="Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"/>
    </section>
  );
}

function StudentIDCard(props){
  return(
    <section style={{width:'400px',float:'left'}}>
      <Personal sid={props.sid} name={props.name} dob={props.dob} /><br/>
      <College clg={props.clg} clgadd={props.clgadd} />
    </section>
  );
} 

const Personal = (props) => {
  return (
    <div>
      <Image style={{float:'left'}}/>
      <ul style={{float:'left'}}>
        <li>{props.sid}</li>
        <li>{props.name.split(' ')[0]}</li>
        <li>{props.name.split(' ')[1]}</li>
        <li>{props.dob}</li>
      </ul>
    </div>
  );
}

const Image = () => <img src="https://static.vecteezy.com/system/resources/thumbnails/000/350/111/small/Education__28193_29.jpg" width="100" alt=""/>

const College = (props) =>{
  return (
    <div style={{height:'80px'}}>
      <img style={{float:'left'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Gujarat-Technological-University-Logo.png/220px-Gujarat-Technological-University-Logo.png" width="60" alt=""/>
      <ul style={{float:'left'}}>
        <li>{props.clg}</li>
        <li>{props.clgadd}</li>
      </ul>
    </div>
  );
}