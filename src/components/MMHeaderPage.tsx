import React, { MouseEventHandler } from 'react'

import { Button, makeStyles } from '@material-ui/core'

interface Props {
    title: string,
    description?: string,
    nameButton: string,
    onClick: MouseEventHandler
}

const useStyle = makeStyles({
    header: {
        width: '100%',
        borderRadius: '5px',
        background: '#E2F1FF',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: '20px',
        fontWeight: 500,
        margin: 0
    },
    description: {
        fontSize: '15px'
    }
})

const MMHeaderPage = (props: Props) => {

    const classes = useStyle()

    return (
        <div className={classes.header}>
            <h2 className={classes.title}>{props.title}</h2>
            <p className={classes.description}>{props.description}</p>
            <Button onClick={props.onClick} variant="contained" color="primary" disableElevation>
                {props.nameButton}
            </Button>
        </div>
    )
}

export default MMHeaderPage
