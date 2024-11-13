
import "./index.css"
import About from './about'
import Experiences from './experiences'
import Educations from './education'
import Testimonals from './testimonals'
import Contact from './contact'

const MainContent = () => {
  return (
    <div className="main-content pull-right">
        <About/>
        <Experiences/>
        <Educations/>
        <Testimonals/>
        <Contact/>
    </div>
  )
}

export default MainContent