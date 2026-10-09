// ==========================================
// CONFIGURAÇÃO TECNOPISOS — CURITIBA/PR
// ==========================================

const CONFIG = {
    // 1. DADOS DA EMPRESA E ATENDIMENTO
    empresa: {
        nome1: "TECNO",
        nome2: "PISOS", // Aparece em destaque (com a cor primária)
        whatsapp: "554192191524" // +55 41 9219-1524 (Karina)
    },

    // 2. OPÇÕES DE PISOS E PREÇOS (ALTO PADRÃO)
    // ⚠️ Valores base configurados por m² com todos os itens especificados
    pisos: [
        {
            categoria: "Piso Vinílico de Alto Padrão",
            nome: "Vinílico Ruffino Sofisticato",
            preco: 189.90,
            // Incluso: piso + massa de nivelamento + cola especial + mão de obra especializada
            // NÃO inclui rodapé | NÃO se aplica a térreo
            descricao: "Pacote Completo: Piso Ruffino Sofisticato + Nivelamento + Cola + Mão de Obra Própria Especializada. (Sem rodapé | Não aplicável em pavimento térreo)."
        },
        {
            categoria: "Piso Laminado Premium",
            nome: "Laminado Eucafloor Prime",
            preco: 139.90,
            // Incluso: piso + mão de obra especializada
            descricao: "Pacote Completo: Piso Eucafloor Prime + Manta + Acabamentos + Mão de Obra Própria Especializada."
        }
    ],

    // 3. OPÇÕES DE PISO ATUAL (Select 1)
    opcoesPisoAtual: [
        { valor: "Contrapiso", texto: "Contrapiso (Cimento)" },
        { valor: "Ceramica", texto: "Cerâmica / Porcelanato" },
        { valor: "Madeira", texto: "Madeira / Assoalho / Taco" },
        { valor: "Vinilico", texto: "Vinílico (existente)" },
        { valor: "Outro", texto: "Outro / Não sei informar" }
    ],

    // 4. BÔNUS E INCLUSÕES NO ORÇAMENTO (Modal de Resultado)
    bonus: [
        { titulo: "Mão de Obra Própria (Sem Terceirização)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Massa de Nivelamento (Pacote Vinílico)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Cola Especial de Fixação (Pacote Vinílico)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Garantia de Instalação de 1 Ano", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Visita Técnica e Medição (até 30km)", subtitulo: "CORTESIA*", strike: "R$ 150", gratis: true },
        { titulo: "Facilidades: até 20x no Cartão / 48x Santander", subtitulo: "DISPONÍVEL", strike: "", gratis: true },
        { titulo: "Rodapé", subtitulo: "Opcional / Sob Consulta", strike: "", gratis: false }
    ]
};
