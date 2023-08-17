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
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Espanhol", "Ens.Religioso", "Matemática", "Matemática", "Matemática", "Matemática"],
      datasets: [
        {
          label: "Videos prontos!",
          data: [35, 54, 73],
          borderColor: "rgb(53, 162, 87)",
          backgroundColor: "rgba(45, 132, 235, 0.4",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Projeto EJA"
        }
      }
    })
  }, [])

  const [selectedSubject, setSelectedSubject] = useState("");
  const [videoCount, setVideoCount] = useState("");

  const handleUpdate = () => {
    // Encontra o índice da matéria selecionada
    const subjectIndex = chartData.labels.findIndex(subject => subject === selectedSubject);

    // Se a matéria foi encontrada, atualiza a quantidade
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
        ],
      }));
    }
  };


  return (
    <>
      <NavBar />
      <div>
        <Bar options={chartOptions} data={chartData} />
      </div>
      <div>
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
          placeholder="Quantidade de vídeos"
        />

        <button onClick={handleUpdate}>Atualizar</button>
      </div>
      <GoHome />
    </>
  )
}