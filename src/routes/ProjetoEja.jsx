import CustomBarChart from '../components/CustomBarChart';
import NavBar from '../components/Navbar';
import GoHome from '../components/GoHome';

function ProjetoEja() {

  const labels = [
    "Português", "Ciências", "Geografia",
    "História", "Arte", "Ed.Física",
    "Inglês", "Biologia", "Física",
    "Química", "Sociologia", "Filosofia",
    "Espanhol", "Ens.Religioso", "Matemática",
  ];
  const datasets = [
    {
      label: 'Vídeos Prontos',
      data: [0, 0, 0, 0, 0],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192)'
    },
    {
      label: 'Total de Vídeos questões',
      data: [0, 0, 0, 0, 0],
      borderColor: 'rgba(192,75,75,1)',
      backgroundColor: 'rgba(192,75,75)'
    },
    {
      label: 'Total de Vídeos Capitulos',
      data: [0, 0, 0, 0, 0],
      borderColor: 'rgba(55,12,192,1)',
      backgroundColor: 'rgba(55,12,192,1)'
    },
  ];


  return (
    <div>
      <NavBar />
      <button><GoHome /></button>
      <CustomBarChart
        title="Projeto Eja"
        labels={labels}
        datasets={datasets}
        localStorageKey="ejaChartData"
      />
    </div>
  );
}

export default ProjetoEja;
