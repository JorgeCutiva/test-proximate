import PropTypes from 'prop-types'

const LoadingList = ({ numberOfItems }) => {
  return Array.from({ length: numberOfItems }).map((_, index) => (
    <div key={index} className=" animate-pulse w-full min-h-80 bg-gray-200 lg:h-80">
      <div className="flex space-x-4">
        <div className="w-full min-h-80 lg:h-80"></div>
      </div>
    </div>
  ))
}

LoadingList.propTypes = {
  numberOfItems: PropTypes.number
}

LoadingList.defaultProps = {
  numberOfItems: 1
}

export default LoadingList
