export const getAll = async() => {
    const response = await fetch('https://henri-potier.techx.fr/books') 
    return response.json()
}

export const getOffers = async(isbns: string[]) => {
    if(isbns.length > 0) {
        const url = `https://henri-potier.techx.fr/books/${isbns.join(',')}/commercialOffers`
        const response = await fetch(url) 
        return response.json()
    }
    return []
}