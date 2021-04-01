import React from 'react'

import { Chip, IconButton, makeStyles } from '@material-ui/core'
import { DescriptionOutlined, MoreVert } from '@material-ui/icons'

interface Props {
    status: string,
    student: string,
    sponsor: string,
    school: string,
    degree: string,
    created: string,
    employee: string,
    lastUpdate: string
}

const useStyle = makeStyles({
    card: {
        background: '#fff',
        padding: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '5px'
    },
    left: {
        display: 'flex',
        alignItems: 'center'
    },
    chip: {
        color: '#fff',
        width: '100px',
        backgroundColor: (props: Props) => {
            switch (props.status) {
                case 'ACTIVO':
                    return '#28C64B'
                case 'EN ESPERA':
                    return '#1890FF'
                case 'SUSPENDIDO':
                    return '#DE5428'
                case 'FINALIZADO':
                    return '#EBB220'
            }
        }
    },
    leftItem: {
        marginRight: '50px',
        display: 'flex',
        flexDirection: 'column'
    },
    iconMain: {
        fontSize: '60px',
        color: '#CFCECE'
    },
    textMain: {
        fontSize: '15px',
        fontWeight: 500
    },
    textInf: {
        display: 'flex',
        flexDirection: 'column',
    },
    subtitle: {
        fontSize: '12px',
        fontWeight: 400,
        color: '#778185'
    },
    textNormal: {
        fontSize: '15px',
        fontWeight: 400,
        color: '#11181C'
    },
    right: {}
})

const CardScholarship = (props: Props) => {

    const classes = useStyle(props)

    return (
        <div className={classes.card}>
            <div className={classes.left}>
                <div className={classes.leftItem} style={{ alignItems: 'center' }}>
                    <DescriptionOutlined className={classes.iconMain} />
                    <Chip label={props.status} size="small" className={classes.chip} />
                </div>
                <div className={classes.leftItem}>
                    <div className={classes.textInf}>
                        <span className={classes.subtitle}>Estudiante:</span>
                        <span className={classes.textMain}>{props.student}</span>
                    </div>
                    <div className={classes.textInf} style={{ marginTop: '15px' }}>
                        <span className={classes.subtitle}>Patrocinador:</span>
                        <span className={classes.textNormal}>{props.sponsor}</span>
                    </div>
                </div>
                <div className={classes.leftItem}>
                    <div className={classes.textInf}>
                        <span className={classes.subtitle}>Institución:</span>
                        <span className={classes.textNormal}>{props.school}</span>
                    </div>
                    <div className={classes.textInf} style={{ marginTop: '15px' }}>
                        <span className={classes.subtitle}>Carrera:</span>
                        <span className={classes.textNormal}>{props.degree}</span>
                    </div>
                </div>
                <div className={classes.leftItem}>
                    <div className={classes.textInf}>
                        <span className={classes.subtitle}>Creado</span>
                        <span className={classes.textNormal}>{props.created}</span>
                    </div>
                    <div className={classes.textInf} style={{ marginTop: '15px' }}>
                        <span className={classes.subtitle}>Encargado:</span>
                        <span className={classes.textNormal}>{props.employee}</span>
                    </div>
                </div>
                <div className={classes.leftItem}>
                    <div className={classes.textInf}>
                        <span className={classes.subtitle}>Última Actualización:</span>
                        <span className={classes.textNormal}>{props.lastUpdate}</span>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <IconButton color="primary">
                    <MoreVert />
                </IconButton>
            </div>
        </div>
    )
}

export default CardScholarship
