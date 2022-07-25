const getDataInLocalStorage = (key) => {
  const dataInJSON = localStorage.getItem(key)
  const data = JSON.parse(dataInJSON)
  return data
}

export default getDataInLocalStorage
