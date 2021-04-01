import React from 'react'

import { Button, makeStyles, TextField } from '@material-ui/core'
import { Clear, FilterList } from '@material-ui/icons'

const useStyle = makeStyles({
    card: {
        background: '#fff',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '5px'
    }
})

const FilterScholarship = () => {

    const classes = useStyle()

    return (
        <div className={classes.card}>
            <TextField label="Fechas:" variant="outlined" />
            <TextField label="Nombre:" variant="outlined" />
            <TextField label="Documento:" variant="outlined" />
            <TextField label="Estado:" variant="outlined" />
            <Button variant="outlined" color="primary" size="medium" disableElevation startIcon={<FilterList />}>
                Filtrar
            </Button>
            <Button variant="outlined" color="primary" size="medium">
                <Clear/>
            </Button>
        </div>
    )
}

export default FilterScholarship