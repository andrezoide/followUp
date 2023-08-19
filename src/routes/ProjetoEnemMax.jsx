import CustomBarChart from '../components/CustomBarChart';
import NavBar from '../components/Navbar';
import GoHome from '../components/GoHome';

function ProjetoEnemMax() {
  const labels = ['Matemática', 'Português', 'Ciências', 'História', 'Geografia'];
  const datasets = [
    {
      label: 'Vídeos Prontos',
      data: [0, 0, 0, 0, 0],
      borderColor: 'rgba(42,12,192,1)',
      backgroundColor: 'rgba(42,12,192,1)'
    },
    {
      label: 'Total de Vídeos',
      data: [0, 0, 0, 0, 0],
      borderColor: 'rgba(150,20,189,1)',
      backgroundColor: 'rgba(150,20,189,1)'
    }
  ];

  return (
    <div>
      <NavBar />
      <button><GoHome /></button>
      <CustomBarChart
        title="Projeto Enem Max"
        labels={labels}
        datasets={datasets}
        localStorageKey="enemMaxChartData"
      />
    </div>
  );
}

export default ProjetoEnemMax;
