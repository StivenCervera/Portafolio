
import {
  Switch,
  Route
} from "react-router-dom";


import Home from '../components/HomeP'
import Perfil from '../components/Perfil'
import Estudios from '../components/Estudios'
import Experiencia from '../components/Experiencia'
import Error404 from '../components/Error404'

const Router = () => {
  
    return (
        
        <Switch>

        <Route exact path="/Portafolio" component={Home} />

        <Route exact path="Portafolio/perfil" component={Perfil} />

        <Route exact path="Portafolio/estudios" component={Estudios} />

        <Route exact path="Portafolio/experiencia" component={Experiencia} />

        <Route>
            <Error404 />
        </Route>
        
        </Switch>

    )
}

export default Router
