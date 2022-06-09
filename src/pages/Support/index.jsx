import { useParams } from "react-router-dom";

const Support = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Soporte para Usuarios</h1>
      <p>Como lo podemos ayudar {name}</p>
    </div>
  );
};

export default Support;
