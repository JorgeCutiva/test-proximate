import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const ItemsList = ({ items }) => {
  const navigate = useNavigate()

  console.log(items)

  const renderItems = () => {
    return items.map((product) => {
      const { id, image, title, shortDescription, path } = product
      return (
        <div
          key={id}
          className="group relative cursor-pointer"
          onClick={() => navigate(`/product/${id}`, { replace: false })}
        >
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{shortDescription}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{path}</p>
          </div>
        </div>
      )
    })
  }

  return renderItems()
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

ItemsList.defaultProps = {
  items: []
}

export default ItemsList
