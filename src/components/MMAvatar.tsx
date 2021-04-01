import React from 'react'

import { makeStyles } from '@material-ui/core'

type Props = {
    image?: string,
    letterUser?: string,
    border?: boolean,
    size?: number
}

const useStyles = makeStyles({
    avatar: {
        border: (props: Props) => props.border ? '1px solid #FFB800' : 'none',
        width: (props: Props) => props.size ? `${props.size}px` : '32px',
        height: (props: Props) => props.size ? `${props.size}px` : '32px',
        borderRadius: '50%'
    },
    avatarLetter: {
        background: '#FBD165',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        fontWeight: 'bold',
        fontSize: (props: Props) => props.size && props.size !== undefined ? `${props.size - 17}px` : '12px',
        color: '#2B2B2B'
    },
    image: {
        width: '100%',
        borderRadius: '50%'
    }
})

const MMAvatar = (props: Props) => {
    const classes = useStyles(props)

    return (
        <div className={`${!props.image && classes.avatarLetter} ${classes.avatar}`}>
            {props.image ? <img src={props.image} alt="Avatar" className={classes.image} /> : props.letterUser}
        </div>
    )
}

export default MMAvatar
