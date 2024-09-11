import { CampoTexto } from "./componenentes/CampoTexto/CampoTexto";
import { Card } from "./componenentes/Card/Card";
import { Estilos } from "./componenentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componenentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componenentes/Tipografia/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo" />
      </Card>
    </ProvedorTema>
  );
}

export default App;
