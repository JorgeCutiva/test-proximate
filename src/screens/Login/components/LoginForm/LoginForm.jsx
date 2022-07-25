import { useState } from 'react'
import PropTypes from 'prop-types'

import DynamicInput from '../DynamicInput/DynamicInput'
import Spinner from '../../../../components/Spinner/Spinner'

const LoginForm = ({ formConfiguration, onSubmit, isLoading }) => {
  const [values, setValues] = useState({})

  const handleChange = (event = {}) => {
    const value = event.target?.value || ''
    const name = event.target?.name || 'noName'
    setValues((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(values)
  }

  const renderFields = (fields) => {
    return fields.map((field) => {
      const { name, label, type = 'text' } = field
      return (
        <DynamicInput
          key={name}
          label={label}
          name={name}
          onChange={(event) => handleChange(event)}
          type={type}
          value={values[name] || ''}
        />
      )
    })
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
      {renderFields(formConfiguration)}
      </div>
      <div>
        <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
          disabled={isLoading}
        >
          {isLoading && (
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <Spinner />
            </span>
          )}
          Iniciar Sesión
        </button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  formConfiguration: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool
}

LoginForm.defaultProps = {
  formConfiguration: [],
  onSubmit: () => {},
  isLoading: false
}

export default LoginForm
