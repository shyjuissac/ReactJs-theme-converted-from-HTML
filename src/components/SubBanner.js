
 function SubBanner(props){

 
  
     return (
         <>
         
            <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/about-header.jpg')"}} >
          <div className="container position-relative d-flex flex-column align-items-center">
          
             
         
            <h2>{props.text}</h2>
            {console.log(props.text)}
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>{props.text}</li>
            </ol>
    
          </div>
        </div> 
 
</>
         
        
    )
}
export default SubBanner