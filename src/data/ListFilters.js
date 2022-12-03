export function ListFilters(catalog) {
    switch(catalog) {
        case "moletons":
            return {
                Types: {
                    title:"Todos Moletons",
                    data:["Moletons Fosforescentes ✨","Moletons Multicor ⭐", "Moletons Básico", "Moletons Canguru","Moletinhos de Verão","Ultimos Lançamentos"]
                },
                Colors: {
                    title:"Cores",
                    data:[
                        {key:"branco", value:"#FFF"},
                        {key:"Cinza", value:"#A0A0A0"},
                        {key:"Preto", value:"#000"},
                        {key:"Amarelo", value:"#FFFF00"},
                        {key:"Verde", value:"#00D039"},
                        {key:"Azul", value:"#0000FF"},
                        {key:"Roxo", value:"#C100FF"},
                        {key:"Rosa", value:"#FF70F9"},
                        {key:"Vermelho", value:"#FF0000"},
                        {key:"Bordô", value:"#A10000"},
                        {key:"Marrom", value:"#995A00"}
                    ]
                },
                Sizes: {
                    title:"Tamanhos",
                    data:["P","M","G","GG","XG","XGG"]
                }
            }
        case "todos":
            return {
                Types: {
                    title:"Todos",
                    data:["Camisas Manga Curta","Camisas Manga Longa","Bermudas", "Camisetas SUPERMEGA", "Calças"]
                },
                Colors: {
                    title:"Cores",
                    data:[
                        {key:"branco", value:"#FFF"},
                        {key:"Cinza", value:"#A0A0A0"},
                        {key:"Preto", value:"#000"},
                        {key:"Rosa", value:"#FF70F9"},
                        {key:"Vermelho", value:"#FF0000"},
                        {key:"Bordô", value:"#A10000"},
                        {key:"Amarelo", value:"#FFFF00"},
                        {key:"Azul", value:"#0000FF"}]
                },
                Sizes: {
                    title:"Tamanhos",
                    data:["P","M","G","GG","XG"]
                }
            }
        case "bermudas":
            return {
                Colors: {
                    title: "Cores",
                    data:[
                        {key:"branco", value:"#FFF"},
                        {key:"Cinza", value:"#A0A0A0"},
                        {key:"Preto", value:"#000"},
                        {key:"Amarelo", value:"#FFFF00"},
                        {key:"Verde", value:"#00D039"},
                        {key:"Azul", value:"#0000FF"},
                        {key:"Roxo", value:"#C100FF"},
                        {key:"Rosa", value:"#FF70F9"},
                        {key:"Vermelho", value:"#FF0000"},
                        {key:"Bordô", value:"#A10000"},
                        {key:"Marrom", value:"#995A00"}
                    ]
                },
                Sizes: {
                    title:"Tamanhos",
                    data:["P","M","G","GG","XG","XGG"]
                }
            }

        default:
            return {}
    }
}