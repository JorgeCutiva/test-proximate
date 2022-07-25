import PropTypes from 'prop-types'

const DynamicInput = ({ label, name, onChange, type, value }) => {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        className='"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      '
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  )
}

DynamicInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
}

DynamicInput.defaultProps = {
  label: 'Campo',
  name: 'field',
  onChange: () => {},
  type: 'text',
  value: ''
}

export default DynamicInput
