import NavBar from "../components/Navbar";

import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import GoHome from "../components/GoHome";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function ProjetoEja() {
  const defaultData = {
    labels: ["Português", "Espanhol", "Inglês", "Matemática", "Ens.Religioso", "Física", "Ciência"],
    datasets: [
      {
        label: "Videos prontos",
        data: new Array(7).fill(0),
        borderColor: "rgb(100, 600, 787)",
        backgroundColor: "rgb(100, 600, 787)",
      },
      {
        label: "Meta de videos",
        data: new Array(7).fill(0),
        borderColor: "rgb(60, 40, 307)",
        backgroundColor: "rgb(60, 40, 307)",
      },
    ],
  };

  const [chartData, setChartData] = useState(JSON.parse(localStorage.getItem('chartData')) || defaultData);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Projeto EJA",
        }
      }
    });
  }, [])

  useEffect(() => {
    localStorage.setItem('chartData', JSON.stringify(chartData));
  }, [chartData]);

  const [selectedSubject, setSelectedSubject] = useState("");
  const [videoCount, setVideoCount] = useState("");
  const [selectedMetaSubject, setSelectedMetaSubject] = useState("");

  const handleUpdate = () => {
    const subjectIndex = chartData.labels.findIndex(subject => subject === selectedSubject);
    if (subjectIndex !== -1) {
      const updatedData = [...chartData.datasets[0].data];
      updatedData[subjectIndex] = videoCount;

      setChartData(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: updatedData,
          },
          {
            ...prevData.datasets[1],
          }
        ],
      }));
    }
  };

  const handleMetaUpdate = () => {
    const subjectIndex = chartData.labels.findIndex(subject => subject === selectedMetaSubject);
    if (subjectIndex !== -1) {
      const updatedData = [...chartData.datasets[1].data];
      updatedData[subjectIndex] = metaVideoCount;

      setChartData(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
          },
          {
            ...prevData.datasets[1],
            data: updatedData,
          }
        ],
      }));
    }
  };


  const [metaVideoCount, setMetaVideoCount] = useState("");
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);

  const openClearConfirmation = () => {
    setShowClearConfirmation(true);
  };

  const clearNumber = () => {
    // Limpe o localStorage
    localStorage.removeItem('chartData');

    // Atualize o estado do gráfico para o valor padrão
    setChartData(defaultData);

    // Limpe os campos de entrada
    setVideoCount("");
    setMetaVideoCount("");

    // Feche o modal de confirmação
    closeClearConfirmation();
  };


  const closeClearConfirmation = () => {
    setShowClearConfirmation(false);
  };

  const getTotalVideosProntos = () => {
    if (chartData.datasets && chartData.datasets[0]) {
      return chartData.datasets[0].data.reduce((acc, val) => acc + Number(val), 0);
    }
    return 0;
  };

  const getTotalVideosMeta = () => {
    if (chartData.datasets && chartData.datasets[1]) {
      return chartData.datasets[1].data.reduce((acc, val) => acc + Number(val), 0);
    }
    return 0;
  };

  return (
    <>
      <NavBar />
      <button><GoHome /></button>
      <div className="container">
        <div className="content">
          <div className="chart-container">
            <Bar options={chartOptions} data={chartData} />
          </div>
          <div className="update-sections">

            {showClearConfirmation && (
              <div className="confirmation-modal">
                <p>Tem certeza de que deseja limpar o número no gráfico?</p>
                <button onClick={clearNumber}>Sim</button>
                <button onClick={closeClearConfirmation}>Não</button>
              </div>
            )}
            <div className="selection">
              <h3>Atualizar Vídeos Prontos</h3>
              <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}>
                {chartData.labels && chartData.labels.map(subject => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={videoCount}
                onChange={e => setVideoCount(e.target.value)}
                placeholder="Quantidade de vídeos prontos"
              />
              <button onClick={handleUpdate}>Atualizar</button>
              <h4>Total de Vídeos Prontos: {getTotalVideosProntos()}</h4>
            </div>
            <div className="selection-meta">
              <h3>Atualizar TOTAL de Vídeos</h3>
              <select value={selectedMetaSubject} onChange={e => setSelectedMetaSubject(e.target.value)}>
                {chartData.labels && chartData.labels.map(subject => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={metaVideoCount}
                onChange={e => setMetaVideoCount(e.target.value)}
                placeholder="Quantidade total de vídeos"
              />
              <button onClick={handleMetaUpdate}>Atualizar</button>
              <h4>Total de Vídeos: {getTotalVideosMeta()}</h4>
              <button onClick={openClearConfirmation}>Limpar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
