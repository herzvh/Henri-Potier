export const getAll = async() => {
    const response = await fetch('https://henri-potier.techx.fr/books') 
    return response.json()
}