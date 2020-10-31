import React from 'react'
import { useMutation } from '@apollo/client'
import { UserForm } from '../components/UserForm'
import { useAuth } from '../context/AuthContext'
import { REGISTER, LOGIN } from '../gql/mutations/auth'

export const NotRegisteredUser = () => {
    const { activateAuth } = useAuth()
    const [mutate_register] = useMutation(REGISTER, {
        errorPolicy: 'all',
        onCompleted: (data) => {

        }
    })
    const [mutate_login] = useMutation(LOGIN, {
        errorPolicy: 'all',
        onCompleted: (data) => {

        },
        onError: (err) => {
            console.log(err)
        }
    })

    function register(input) {
        mutate_register({
            variables: {
                input
            }
        })
    }

    function login(input) {
        mutate_login({
            variables: {
                input
            }
        })
    }

    return (
        <div>
            <UserForm onSubmit={register} title='Registrarse' />
            <UserForm onSubmit={login} title='Iniciar sesión' />
        </div>
    )
}
