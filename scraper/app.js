const fetch = require('node-fetch');
const cheerio = require('cheerio');

const url = 'https://store.steampowered.com/search/?filter=topsellers';

async function fetchData() {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const games = [];

        $('.search_result_row').each(function () {
            const titulo = $(this).find('.title').text().trim();
            const preco = $(this).find('.search_price span').last().text().trim() || 'Preço indisponível';
            const link = $(this).attr('href');

            games.push({
                titulo,
                preco,
                link
            });
        });

        return games;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return [];
    }
}

module.exports = { fetchData };
