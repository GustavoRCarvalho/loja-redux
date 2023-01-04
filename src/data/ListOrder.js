export function ListOrder(catalog) {
  return {
    data: [
      { value: "LowerHigher", label: "Preço: Menor ao Maior" },
      { value: "HigherLower", label: "Preço: Maior ao Menor" },
      { value: "AZ", label: "A - Z" },
      { value: "ZA", label: "Z - A" },
      { value: "NewOld", label: "Mais Novo ao mais Antigo" },
      { value: "OldNew", label: "Mais Antigo ao mais Novo" },
      { value: "MoreSolds", label: "Mais Vendidos" },
    ],
  };
}
