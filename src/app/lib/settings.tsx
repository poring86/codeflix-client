export const getAppSettings = async (): Promise<{ theme: string, language: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {

      resolve({
        theme: 'dark',
        language: 'en'
      })
    }, 5000)
  })
}

export const getUserInfo = (): Promise<{ name: string; email: string; age: string; }> => {
  return new Promise((resolve) => {
    setTimeout(() => {

      resolve({
        name: 'John Doe',
        email: 'john@doe',
        age: '25'
      })
    }, 5000)
  })
}