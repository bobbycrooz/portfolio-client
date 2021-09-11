import Hashtag from '../components/Hashtag';
import Card from '../components/ProjectCard';
// import bob from '../bob.png';
import ran from '../public/linkone.jpeg';
import bob from '../public/whatone.jpeg';

// let projectTypes {
//     name: String,
//     discription: String,
// }

const Projects = [
  {
    name: 'bobby',
    discription: 'somthing',
    img: ran
  },
  {
    name: 'bobby',
    discription: 'somthing',
    img: bob
  },
  {
    name: 'bobby',
    discription: 'somthing',
    img: ran
  },
  {
    name: 'bobby',
    discription: 'somthing',
    img: bob
  },
  {
    name: 'bobby',
    discription: 'somthing',
    img: ran
  }
];

export default function Project({ data }) {
  return (
    <div className="main p-2">
      <div className="tag_container  grid gap-y-2 gap-x-1 grid-cols-4 w-full h-auto py-1 text-lg text-textLow">
        <Hashtag selected={true} name="ReactJs" />
        <Hashtag selected={false} name="NodeJs" />
        <Hashtag selected={false} name="NextJs" />
        <Hashtag selected={false} name="CSS" />
        <Hashtag selected={false} name="Js" />
        <Hashtag selected={false} name="Git" />
      </div>
      <div className="grid gap-5 grid-cols-1 mt-6 w-full p">
        {Projects.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      hello
    </div>
  );
}
