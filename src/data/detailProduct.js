import { shirts } from "./images"

export function detailProduct(id) {
  return {
    id: id,
    title: "Camisa Manga Curta Padrão BRANCO, PRETO e ROSA - Unissex",
    price: 289.9,
    oldPrice: 339.9,
    installment: 12,
    priceInstallment: 29.38,
    imagesList: [shirts[0], shirts[1], shirts[2], shirts[3], shirts[4]],
    colors: {
      title: "Selecione a Cor:",
      data: [
        { key: "branco", value: "#FFF" },
        { key: "Cinza", value: "#A0A0A0" },
        { key: "Preto", value: "#000" },
        { key: "Amarelo", value: "#FFFF00" },
      ],
    },
    sizes: {
      title: "Selecione o Tamanho:",
      data: ["P", "M", "G", "GG", "XG", "XGG"],
    },
  }
}
