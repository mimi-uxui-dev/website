import '../App.css'
import AboveTheFold from './AboveTheFold'
import CaseStudy1 from './CaseStudy1'
import Project from './Project'
import tb from './assets/tb.jpg'
import ca from './assets/ca.jpg'
import maquette from './assets/maquette.jpg'

function Home() {

     return (
          <div >
               <AboveTheFold />

               <div className='projectContainer' id='ViewMyWorkBTN'>
                    <Project imgURL={tb} eyeHref="http://www.transbelimour.com/" ghHref="https://github.com/mimi-uxui-dev/TransportB" />
                    <Project imgURL={ca} eyeHref="https://mimi-uxui-dev.github.io/mychatapp1/" ghHref="https://github.com/mimi-uxui-dev/mychatapp1/tree/master" />
                    <Project imgURL={maquette} eyeHref="https://www.figma.com/proto/qjWVqOSaBsFIFqX12F2ZxG/Untitled?node-id=1%3A3&viewport=443%2C407%2C0.47126826643943787&scaling=min-zoom&page-id=0%3A1" ghHref='https://www.figma.com/proto/qjWVqOSaBsFIFqX12F2ZxG/Untitled?node-id=1%3A3&viewport=443%2C407%2C0.47126826643943787&scaling=min-zoom&page-id=0%3A1' />

               </div>


          </div>
     )
}

export default Home
