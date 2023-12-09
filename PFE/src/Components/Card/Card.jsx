import { useNavigate } from 'react-router-dom';

export function Card(props) {
  const navigate = useNavigate();

  const handleClick = () => {
   
    if (props.name === "Devoir") {
      navigate('/Devoir');
    } else if (props.name === "Cours") {
      navigate('/Cours');
    } else {
      navigate('/Exercices');

    }
  };

  return (
    <div className="cardList" onClick={handleClick}>
      <div key={props.id} className="MatiereCard">
        <img src={props.image} alt="Matiere-img" className="MatiereImage"></img>
        <div className="MatiereCard__content">
          <h3 className="MatiereName">{props.name}</h3>
          <div className="displayStack__1"></div>
        </div>
      </div>
    </div>
  );
}


