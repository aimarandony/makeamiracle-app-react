import React, { useEffect, useState } from 'react'

import CardCount from '../../components/Home/CardCount'
import MMAvatar from '../../components/MMAvatar'

import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts'

import { Container, Grid } from '@material-ui/core'
import { Book, AccountBox, SupervisedUserCircle } from '@material-ui/icons'

import LogoMakeDecoration from '../../images/makeamiracle-logo-decoration.svg'
import './Home.css'

const data = [
  {
    name: "ENE",
    Becas: 15
  },
  {
    name: "FEB",
    Becas: 20
  },
  {
    name: "MAR",
    Becas: 15
  },
  {
    name: "ABR",
    Becas: 32
  },
  {
    name: "MAY",
    Becas: 10
  },
  {
    name: "JUN",
    Becas: 15
  },
  {
    name: "JUL",
    Becas: 10
  },
  {
    name: "AGO",
    Becas: 5
  },
  {
    name: "SEP",
    Becas: 25
  },
  {
    name: "OCT",
    Becas: 22
  },
  {
    name: "NOV",
    Becas: 14
  },
  {
    name: "DIC",
    Becas: 12
  }
];

const Home = () => {

  const [lastStudents, setLastStudents] = useState<string[]>([])

  useEffect(() => {
    setLastStudents(["", "", "", ""])
  }, [])

  return (
    <div className="Home">
      <div className="bg-top">
        <img src={LogoMakeDecoration} alt="Logo Make Decoration" className="decoration" />
      </div>
      <div className="content-home">
        <Container maxWidth="lg">
          <h2 style={{ marginBottom: '30px' }}>Bienvenida, <span>Andrea !! 😁</span></h2>
          <Grid container spacing={3} style={{ position: 'relative' }}>
            <Grid item xs={3}>
              <CardCount backgroundColor='#E7CAFF' iconColor="#A634FF" icon={<AccountBox />} title="Estudiantes" count="72" />
            </Grid>
            <Grid item xs={3} >
              <CardCount backgroundColor='#FFC2CD' iconColor="#FF3257" icon={<SupervisedUserCircle />} title="Patrocinadores" count="65" />
            </Grid>
            <Grid item xs={3}>
              <CardCount backgroundColor='#FFECBC' iconColor="#FEC73A" icon={<Book />} title="Becas" count="68" />
            </Grid>
            <Grid item xs={3}>
              <div className="card card-last-students">
                <h3>Últimos Estudiantes</h3>
                {
                  lastStudents.map((data, idx) => (
                    <div key={idx}>
                      <div className="student-information">
                        <MMAvatar image="https://randomuser.me/api/portraits/men/89.jpg" border={true} size={35} />
                        <div className="information">
                          <p>Aimar Berrocal Coaquira</p>
                          <p>5 de Agosto del 2020</p>
                        </div>
                      </div>
                      <div className="student-information">
                        <MMAvatar letterUser="C" border={true} size={35} />
                        <div className="information">
                          <p>Carla Casas Torrez</p>
                          <p>22 de Enero del 2021</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </Grid>
            <Grid item xs={9}>
              <div className="card card-scholarships">
                <h3>Becas Otorgadas</h3>
                <AreaChart width={850} height={238} data={data} className="AreaChart">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="Becas" stroke="#1890FF" fill="#c4e3ff" />
                </AreaChart>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Home
