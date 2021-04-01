import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

interface Props {
    backgroundColor: string,
    iconColor: string,
    icon: any,
    title: string,
    count: string,
}

const useStyles = makeStyles({
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        border: '.5px solid #0084FF',
        transition: 'all .3s ease-in-out',        
        '&:hover' : { 
            transform: 'translateY(-5px)' 
        }
    },
    icon: {
        backgroundColor: (props: Props) => props.backgroundColor,
        borderRadius: '50%',
        width: '49px',
        height: '49px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: (props: Props) => props.iconColor,
        marginRight: '10px'
    },
    title: {
        fontSize: '15px',
        fontWeight: 400,
        marginBottom: '4px'
    },
    count: {
        fontSize: '18px',
        fontWeight: 800
    },
});


const CardCount = (props: Props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.card}>
            <div className={classes.icon}>
                {props.icon}
            </div>
            <div>
                <h3 className={classes.title}>{props.title}</h3>
                <h4 className={classes.count}>{props.count}</h4>
            </div>
        </div>
    )
}

export default CardCount
