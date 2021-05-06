export default function StudentIDCard2(){
  return(
    <section>
      <Personal /><br/>
      <College />  
      <hr/>
    </section>
  );
} 

const Personal = () => {
    const sid=2001;
    const fname="John";
    const lname="Wick";
    const dob="10-10-1997";
    return (
        <div>
        <Image style={{float:'left'}}/>
        <ul style={{float:'left'}}>
            <li>{sid}</li>
            <li>{fname}</li>
            <li>{lname}</li>
            <li>{dob}</li>
        </ul>
        </div>
    );
}

const Image = () => <img src="https://static.vecteezy.com/system/resources/thumbnails/000/350/111/small/Education__28193_29.jpg" width="100" alt=""/>

const College = () =>{
    let clg="Gujarat Technological University";
    let clgadd="Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424";
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