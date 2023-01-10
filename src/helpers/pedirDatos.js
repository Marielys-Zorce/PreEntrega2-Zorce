import dataBase from '../data/dataBase.json'

  export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataBase)
        }, 2000)
    })
}


export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const item = dataBase.find((el) => el.id === id)

            if (item) {
                resolve(item)

            }else {
                reject({
                    error: 'No se encontró ese producto'
                })
            }           
        }, 2000)
    })
}