import React from 'react'
import { useFormik } from 'formik'
import { createUser } from './scripts/createUser' 
import { IUserCreate } from './types/IUserCreate'

const UserCreateForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            secretWord: '',
        },
        onSubmit: (values: IUserCreate) => {  
            createUser(values)
        },
    })

    return <>
        <h2>Create user</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName || ''}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName || ''}
            />
            <label htmlFor="secretWord">Secret word for access</label>
            <input
                id="secretWord"
                name="secretWord"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.secretWord || ''}
            />
            <button type="submit">Create</button>
        </form>
    </>
}

export default UserCreateForm