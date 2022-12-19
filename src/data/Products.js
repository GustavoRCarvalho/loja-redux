import { shirts, shirtsInverse } from './images'

export function productsGet({catalog, filter, order, currentPage}) {
    switch(catalog){
            case "moletons":
                return {
                    data:
                        [
                            {"id" : 0, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[0], "imageHover": shirtsInverse[0]},
                            {"id" : 1, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[1], "imageHover": shirtsInverse[1]},
                            {"id" : 2, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[2], "imageHover": shirtsInverse[2]},
                            {"id" : 3, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[3], "imageHover": shirtsInverse[3]},
                            {"id" : 4, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[4], "imageHover": shirtsInverse[4]},
                            {"id" : 5, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[5], "imageHover": shirtsInverse[5]},
                            {"id" : 6, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[6], "imageHover": shirtsInverse[6]},
                            {"id" : 7, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[7], "imageHover": shirtsInverse[7]},
                            {"id" : 8, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[8], "imageHover": shirtsInverse[8]},
                            {"id" : 9, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[9], "imageHover": shirtsInverse[9]},
                            {"id" : 10, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[10], "imageHover": shirtsInverse[10]},
                            {"id" : 11, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[11], "imageHover": shirtsInverse[11]},
                            {"id" : 12, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[12], "imageHover": shirtsInverse[12]},
                            {"id" : 13, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[13], "imageHover": shirtsInverse[13]},
                            {"id" : 14, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[14], "imageHover": shirtsInverse[14]},
                            {"id" : 15, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[15], "imageHover": shirtsInverse[15]},
                            {"id" : 16, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[16], "imageHover": shirtsInverse[16]},
                            {"id" : 17, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[17], "imageHover": shirtsInverse[17]},
                            {"id" : 18, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[18], "imageHover": shirtsInverse[18]},
                            {"id" : 19, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[19], "imageHover": shirtsInverse[19]}
                        ],
                        pagination: {
                            pageCount: filter.length === 0 ? 3 : 1,
                        }
                    }
            case "todos":
                return {
                    data: [
                        {"id" : 0, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[0], "imageHover": shirtsInverse[0]},
                        {"id" : 1, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[1], "imageHover": shirtsInverse[1]},
                        {"id" : 2, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[2], "imageHover": shirtsInverse[2]},
                        {"id" : 3, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[3], "imageHover": shirtsInverse[3]},
                        {"id" : 4, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[4], "imageHover": shirtsInverse[4]},
                        {"id" : 5, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[5], "imageHover": shirtsInverse[5]},
                        {"id" : 6, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[6], "imageHover": shirtsInverse[6]},
                        {"id" : 7, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[7], "imageHover": shirtsInverse[7]},
                        {"id" : 8, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[8], "imageHover": shirtsInverse[8]},
                        {"id" : 9, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[9], "imageHover": shirtsInverse[9]},
                        {"id" : 10, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[10], "imageHover": shirtsInverse[10]},
                        {"id" : 11, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[11], "imageHover": shirtsInverse[11]},
                        {"id" : 12, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[12], "imageHover": shirtsInverse[12]},
                        {"id" : 13, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[13], "imageHover": shirtsInverse[13]},
                        {"id" : 14, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[14], "imageHover": shirtsInverse[14]},
                        {"id" : 15, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[15], "imageHover": shirtsInverse[15]},
                        {"id" : 16, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[16], "imageHover": shirtsInverse[16]},
                        {"id" : 17, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[17], "imageHover": shirtsInverse[17]},
                        {"id" : 18, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[18], "imageHover": shirtsInverse[18]},
                        {"id" : 19, "title": "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex", "price": 289.90, "oldPrice": 339.90, "installment": 12, "priceInstallment": 29.38, "image": shirts[19], "imageHover": shirtsInverse[19]}
                    ],
                    pagination: {
                        pageCount: filter.length === 0 ? 12 : 4,
                    }
                    }
            default:
                return {
                    data: []
                }
        }
}