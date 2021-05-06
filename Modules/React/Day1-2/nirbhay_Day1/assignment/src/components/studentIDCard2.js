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
  return (
    <div>
      <Image style={{float:'left'}}/>
      <ul style={{float:'left'}}>
        <li>1001</li>
        <li>Vishal </li>
        <li>Sagar</li>
        <li>14-10-1996</li>
      </ul>
    </div>
  );
}

const Image = () => <img src="https://static.vecteezy.com/system/resources/thumbnails/000/350/111/small/Education__28193_29.jpg" width="100" alt=""/>

const College = () =>{
  return (
    <div style={{height:'80px'}}>
      <img style={{float:'left'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Gujarat-Technological-University-Logo.png/220px-Gujarat-Technological-University-Logo.png" width="60" alt=""/>
      <ul style={{float:'left'}}>
        <li>Gujarat Technological University</li>
        <li>Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424</li>
      </ul>
    </div>
  );
}