let StudentIDCard = ({children,student:{sid,name,dob,clg,clgadd,logo}}) => {
  console.log(sid);
  return(
    <section className="card" style={{maxWidth:'40rem',margin:"0 auto"}}>
      <div class="card-header" style={{textAlign:"center",padding:'0.2rem',fontSize:"1.5rem"}}>
        {children}
      </div>
      <div className="row">
        <div className="col-md-7">
          <Personal sid={sid} name={name} dob={dob}/>
        </div>
        <div className="col-md-5">
          <College clg={clg} clgadd={clgadd} logo={logo}/>
        </div>
      </div>
       <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </section>
  );
}

const Personal = ({sid,name,dob}) => {
  return (
    <div className="row card-body">
      <div className="col-md-5" style={{justifyContent:"right"}}>
        <Image/>
      </div>
      <div className="col-md-7">
        <h4 className="card-title">{name}</h4>
        <h6 className="card-subtitle text-muted">{dob}</h6>
        <p className="card-text"><b>Student-Id :</b>{sid}</p>
      </div>
    </div>
  );
}

const Image = () => <img src="https://static.vecteezy.com/system/resources/thumbnails/000/350/111/small/Education__28193_29.jpg" width="100" alt=""/>

const College = ({clg,clgadd,logo}) =>{
  return (
    <div style={{textAlign:"center"}}>
      <div className="row" style={{justifyContent:"center",padding:"1rem"}}>
        <h5 className="card-text">{clg}</h5>
        <img src={logo} style={{width:"100px"}} alt=""/>
        <p className="card-text">{clgadd}</p>
      </div>
    </div>
  );
}

export default StudentIDCard;