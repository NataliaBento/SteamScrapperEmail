const { fetchData } = require('./scraper/app');
const { sendEmail } = require('./email/app');

async function main() {
    console.log('Iniciando scraping...');
    const dados = await fetchData();

    if (dados.length === 0) {
        console.log('Nenhum dado encontrado. E-mail não será enviado.');
        return;
    }

    const conteudoTexto = dados.map(item => 
        `Título: ${item.titulo}, Preço: ${item.preco}, Disponibilidade: ${item.link}`
    ).join('\n');

    console.log('Dados coletados:');
    console.log(conteudoTexto);

    console.log('Enviando e-mail...');
    await sendEmail(conteudoTexto);
}

main();
