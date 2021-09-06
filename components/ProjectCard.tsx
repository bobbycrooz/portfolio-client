import styled from "styled-components"

export default function Card(){
    return(
        
        <Main className=" bg-gradient-to-r from-grad-one to-grad-two ">
        <span className="one w-full border h-full "></span>
      <span className="two w-full h-full"></span>
            <div className="main_componenst flex flex-col bg-primary">
           <div className="cover">
           <button className="star absolute w-auto px-1 flex flex justify-center items-center bg-grad-two right-0 ">
           👋 240
           </button >
            cover photo here
           </div>
           <div className="info bg-body  w-full">
            project name here
           </div>
            </div>
        </Main>
    )
}

const Main = styled.div`
    width:100%;
    height:250px;
    
    position:relative;
    
    span{
        position:absolute;
        background:inherit;
    z-index:2;
        
    }
    
    .main_componenst{
        position:absolute;
        top:1.3px;
        left:1.3px;
        right:1.3px;
        bottom:1.3px;
    
    
    z-index:7;
    
    &:hover{
    
         .cover{
        height: 35%;
    transition: all 0.2s linear;
        
    }
    .info{
    height:65%;
    transition: all 0.2s linear;
    
    }
    }
    
    .cover{
        height: 60%;
    transition: all 0.2s linear;
    position:relative;
    
    &::before{
        content: "";
        position:absolute;  
        background:#090909;
        opacity:0.5;
        width:100%;
        height:100%;
      
    }
    
    
        
    }
    .info{
    height:40%;
    transition: all 0.2s linear;
    
    }
     
    }
    

`