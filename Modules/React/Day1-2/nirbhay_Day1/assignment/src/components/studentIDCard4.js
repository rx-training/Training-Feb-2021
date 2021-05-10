export default function StudentDetails4(){
  return (
    <section className="row">
      <StudentIDCard sid="3001" name="John Doe" dob="16-02-1998" clg="Gujarat Technological University" clgadd="Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"/>
      <StudentIDCard sid="3001" name="Jane Doe" dob="29-08-1999" clg="Gujarat Technological University" clgadd="Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"/>
      <StudentIDCard sid="3001" name="Santino Deontonio" dob="05-11-1993" clg="Gujarat Technological University" clgadd="Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"/>
    </section>
  );
}

function StudentIDCard(props){
  return(
      <div class="col-md-4" style={{padding:"2.5rem"}}>
        <div class="card">
          <Image/>
          <Personal sid={props.sid} name={props.name} dob={props.dob} />
          <College clg={props.clg} clgadd={props.clgadd} />
        </div>
      </div>
  );
} 

const Personal = (props) => {
  return (
    <div className="card-body">
      <h4 class="card-title">{props.name}</h4>
      <h6 class="card-subtitle text-muted">{props.dob}</h6>
    </div>
  );
}

const Image = () => <img className="card-img-top" src="https://static.vecteezy.com/system/resources/thumbnails/000/350/111/small/Education__28193_29.jpg" alt=""/>

const College = (props) =>{
  return (
    <div className="row card-body">
      <h5 className="card-text" style={{textAlign:"center"}}>{props.clg}</h5>
      <div className="col-md-6" style={{textAlign:"center"}}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Gujarat-Technological-University-Logo.png/220px-Gujarat-Technological-University-Logo.png" width="80" alt=""/>
      </div>
      <div className="col-md-6">
        <p className="card-text">{props.clgadd}</p>
      </div>
    </div>
  );
}