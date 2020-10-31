import React, { Fragment } from 'react'
import { Button, Form, Input, Title } from './styles'
import { useInput } from '../../hooks/useInput'

export const UserForm = ({ onSubmit, title = "" }) => {
    const email = useInput('')
    const password = useInput('')

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit({ email: email.value, password: password.value })
    }

    return (
        <Fragment>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="email" {...email} />
                <Input placeholder="password" {...password} />
                <Button type="submit">{title}</Button>
            </Form>
        </Fragment>
    )
}
