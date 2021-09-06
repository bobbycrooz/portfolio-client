import Hashtag from '../components/Hashtag';
import Card from '../components/ProjectCard';
import bob from '../bob.png';

// let projectTypes {
//     name: String,
//     discription: String,
// }

const Projects = [
  {
    name: 'bobby',
    discription: 'somthing',
    img: bob
  },
  {
    name: 'bobby',
    discription: 'somthing',
    img: bob
  },
  {
    name: 'bobby',
    discription: 'somthing',
    img: bob
  },
  {
    name: 'bobby',
    discription: 'somthing',
    img: bob
  },
  {
    name: 'bobby',
    discription: 'somthing',
    img: bob
  }
];

export default function Project({ data }) {
  return (
    <div className="main p-2">
      <div className="tag_container  grid gap-1 grid-cols-4 w-full h-auto py-1 text-lg text-textLow">
        <Hashtag selected={true} name="ReactJs" />
        <Hashtag selected={false} name="NodeJs" />
        <Hashtag selected={false} name="NextJs" />
        <Hashtag selected={false} name="CSS" />
        <Hashtag selected={false} name="Js" />
        <Hashtag selected={false} name="Git" />
      </div>
      <div className="grid gap-4 grid-cols-1 mt-3 w-full p">
        {Projects.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      hello
    </div>
  );
}
