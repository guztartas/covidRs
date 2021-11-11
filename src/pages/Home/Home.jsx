import React, {useState, useEffect} from 'react';
import './Home.css';
import Block from '../../components/General/Block';
import { Typography } from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";
import { format } from 'date-fns';
import PizzaChart from '../../components/Covid/Graphics/VaccinePizzaChart/index';

const GeneralCity = {
  labels: ['Não contraíram', 'Casos confirmados'],
  datasets: [
    {
      label: 'Casos em erechim',
      data: [92539, 14892],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DeathsCity = {
  labels: ['Mortos', 'Casos confirmados'],
  datasets: [
    {
      label: '# of Votes',
      data: [200, 14892],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Hospitals = {
  labels: ['Capacidade total', 'Usada'],
  datasets: [
    {
      label: '# of Votes',
      data: [80, 6],
      backgroundColor: [
        '#07bc0ca6',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'green',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Actives = {
  labels: ['Casos ativos', 'Novos'],
  datasets: [
    {
      label: '# of Votes',
      data: [51, 11],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PagesHome = () => {
  const [newestEpidemicData, setNewestEpidemicData] = useState();

  useEffect(() => {
    const getNewestEpidemicData = async () => {
      const response = await (await fetch('https://api.clicrbs.com.br/covidapi/v1/timeline')).json();
      const todayEpidemicInfo = response.length - 1;
      setNewestEpidemicData(response[todayEpidemicInfo]);
    };

    getNewestEpidemicData();
  }, []);

  console.log(newestEpidemicData);
  
  return (
    <>
      { newestEpidemicData && 
        <div className="pages-home">
          <div className="pages-home-update">
            <UpdateIcon />
            <Typography variant="h6" component="h" gutterBottom>
              Atualizado em: {format(new Date(newestEpidemicData?.data), 'dd/MM/yyyy')}
            </Typography>
          </div>
          <div className="pages-home-first-data">
              <Block title={'Vacinômetro Rio Grande do Sul'} subTitle={'Total de doses aplicadas: 312.826'}> 
                <PizzaChart data={Hospitals} title={'1 dose:'} subTitleTotal={'100.000'}/>
                <PizzaChart data={Hospitals} title={'1 dose:'} subTitleTotal={'100.000'}/>
                <PizzaChart data={Hospitals} title={'1 dose:'} subTitleTotal={'100.000'}/>
                <PizzaChart data={Hospitals} title={'1 dose:'} subTitleTotal={'100.000'}/>
              </Block>
          </div>
         
        </div>
      }
    </>
  );
};
  
export default PagesHome;
