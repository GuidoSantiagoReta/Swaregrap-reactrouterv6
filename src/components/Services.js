import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import react1 from'../images/react1.jpg'
import repair from'../images/reparacion.jpg';
import server from '../images/server2.jpg';

const Services = () =>{ 
    return(
      <div className='animate__animated animate__bounce container-group'>
        <CardGroup variant="separated"className='group-card g-3'>
      <Card>
        <Card.Img variant="top" src={react1}/>
        <Card.Body>
          <Card.Title>Desarrollo web SPA</Card.Title>
          <Card.Text>
          Todas las pantallas se muestran en un misma página, sin recargar el navegador, 
          que aportan una agradable experiencia de usuario.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" class='img-fluid' src={server} />
        <Card.Body>
          <Card.Title>Hosting, Dominio y certificado SSL</Card.Title>
          <Card.Text>
            Nos encargamos de alojar tu sitio web en un hosting con dominio personalizado con certificado SSL incluido 
            Esto te protegerá de las violaciones de datos.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={repair}/>
        <Card.Body>
          <Card.Title>Mantenimiento y Formateo de PC</Card.Title>
          <Card.Text>
            Otorgamos servicios de mantenimiento y reparación.
            Ya sea que necesites asistencia remota, formateo e instalación de aplicativos para diferentes usuarios.
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>
    </div> 
        
    )
 
}

export default Services;




