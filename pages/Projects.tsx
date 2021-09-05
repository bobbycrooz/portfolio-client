import Card from "../components/ProjectCard"

export default function Project(){
    return(
    <div className="main">
        <p className="text-2xl text-grad-one">
        here is a lists of what i can do, you can browse through or filtr them all
        </p>
        
       <div className="grid gap-3 grid-cols-1 w-full ">
        <Card/>
        <Card/>
        <Card/>
       </div>
    hello</div>
    )
}