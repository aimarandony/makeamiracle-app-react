import React from 'react'

import MMHeaderPage from '../../components/MMHeaderPage'

import { Container, Divider } from '@material-ui/core'
import CardScholarship from '../../components/Scholarship/CardScholarship'
import FilterScholarship from '../../components/Scholarship/FilterScholarship'

const Scholarship = () => {

    const handleNewScholarship = () => {
        alert("Nueva Beca")
    }

    return (
        <div style={{ background: '#EEF3F6' }}>
            <Container maxWidth="lg" style={{ padding: '20px' }}>
                <MMHeaderPage
                    title="Becas"
                    description="Asignar becas a los estudiantes."
                    nameButton="Nueva Beca"
                    onClick={handleNewScholarship}
                />
                <Divider light style={{ margin: '20px 0' }} />
                <FilterScholarship />
                <Divider light style={{ margin: '20px 0' }} />
                <CardScholarship
                    status="ACTIVO"
                    student="Aimar Andony Berrocal Coaquira"
                    sponsor="Carlos Antonio Ramos Montes"
                    school="IDAT"
                    degree="Desarrollo de Sistemas e Información"
                    created="21 Feb 2020"
                    employee="Sara Campos Torrez"
                    lastUpdate="21 Feb 2020" />
                <CardScholarship
                    status="EN ESPERA"
                    student="Aimar Andony Berrocal Coaquira"
                    sponsor="Carlos Antonio Ramos Montes"
                    school="IDAT"
                    degree="Desarrollo de Sistemas e Información"
                    created="21 Feb 2020"
                    employee="Sara Campos Torrez"
                    lastUpdate="21 Feb 2020" />
                <CardScholarship
                    status="FINALIZADO"
                    student="Aimar Andony Berrocal Coaquira"
                    sponsor="Carlos Antonio Ramos Montes"
                    school="IDAT"
                    degree="Desarrollo de Sistemas e Información"
                    created="21 Feb 2020"
                    employee="Sara Campos Torrez"
                    lastUpdate="21 Feb 2020" />
                <CardScholarship
                    status="SUSPENDIDO"
                    student="Aimar Andony Berrocal Coaquira"
                    sponsor="Carlos Antonio Ramos Montes"
                    school="IDAT"
                    degree="Desarrollo de Sistemas e Información"
                    created="21 Feb 2020"
                    employee="Sara Campos Torrez"
                    lastUpdate="21 Feb 2020" />
            </Container>
        </div>
    )
}

export default Scholarship
