import { Card } from "./componenentes/Card/Card";
import { Estilos } from "./componenentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componenentes/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
        <h1>Freelando</h1>
      </Card> 
    </ProvedorTema>
  );
}

export default App;
