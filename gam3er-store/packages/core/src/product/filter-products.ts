import Product from "./product"

export default class FilterProducts {
    execute(search: string, product: Product[]): Product[] {
        const sanitizedSearch = search.toLowerCase().split(' ')
        return product.filter((product) => {
            const text = `
                ${product.name}
                ${product.description}
                ${Object.values(product.specs).join(' ')}
                ${product.brand}
            `.toLowerCase()
            return sanitizedSearch.every((search) => text.includes(search))
        })
    }
}
