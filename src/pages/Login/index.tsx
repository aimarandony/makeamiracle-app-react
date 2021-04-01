import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Button, TextField, IconButton, InputLabel, InputAdornment, FormControl, FormHelperText, FilledInput } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';

import LogoMake from '../../images/makeamiracle-logo.svg'
import './Login.css'

interface IFormValues {
    username: string,
    password: string
}

const Login = () => {
    const validationForm = Yup.object({
        username: Yup.string().email('El formato no es válido.').required('Usuario es requerido.'),
        password: Yup.string().required('Contraseña es requerida.'),
    })

    const { register, handleSubmit, errors, reset } = useForm<IFormValues>({ resolver: yupResolver(validationForm) })
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const { setAuthenticated } = useContext(AuthContext)

    const onSubmit = (data: IFormValues) => {
        console.info('Login Data', data);
        reset();
        setAuthenticated(true)
    }

    const handleClickShowPassword = (state: boolean) => {
        setShowPassword(!state);
    };

    return (
        <div className="Login">
            <div className="left login-content">
                <img src={LogoMake} alt="Logo Make a Miracle" width="50%" />
            </div>
            <div className="center login-content">
                <div>
                    <span>bienvenido ...</span>
                    <p>Inicie Sesión para ingresar al sistema.</p>
                </div>
            </div>
            <div className="right login-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="title-form">Iniciar Sesión</h2>
                    <TextField
                        variant="filled"
                        label="Usuario"
                        name="username"
                        inputRef={register}
                        placeholder="Ingrese su Usuario"
                        error={!!errors.username}
                        helperText={errors.username ? errors.username.message : ''}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl error={!!errors.password} fullWidth variant="filled">
                        <InputLabel htmlFor="filled-adornment-password" shrink={true}>Contraseña</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            name="password"
                            inputRef={register}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Ingrese su Contraseña"
                            endAdornment={
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleClickShowPassword(showPassword)}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText>{errors.password ? errors.password.message : ''}</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" disableElevation>Ingresar</Button>
                </form>
            </div>
        </div>
    )
}

export default Login
