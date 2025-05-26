
# 📦 Email + Scraper - Steam Promo Bot

Este projeto consiste em um scraper que coleta as principais promoções da Steam e envia um relatório por e-mail utilizando Node.js, Cheerio, Node-Fetch e Nodemailer.

---

## 🚀 **Como rodar o projeto localmente**

### ✅ **Pré-requisitos**

- Node.js (v14 ou superior)
- npm (ou yarn)
- Conta de e-mail (para configurar o envio via SMTP)

---

## ⚙️ **Passos para executar:**

### 1. **Clone o repositório**

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

### 2. **Acesse a pasta do projeto**

```bash
cd email+scrap
```

### 3. **Instale as dependências**

```bash
npm install
```

ou, se estiver dentro de cada módulo (caso necessário):

```bash
cd email
npm install

cd ../scraper
npm install
```

### 4. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
EMAIL_HOST=smtp.seuprovedor.com
EMAIL_PORT=587
EMAIL_USER=seu_email@exemplo.com
EMAIL_PASS=sua_senha
```

Substitua pelos seus dados reais.

⚠️ **Importante:** Nunca versionar este arquivo.

---

## 🏃‍♂️ **Como executar**

Você pode criar um arquivo `main.js` ou rodar diretamente os módulos.

Exemplo de `main.js` já existente:

```javascript
const { fetchData } = require('./scraper/app');
const { sendEmail } = require('./email/app');

async function main() {
    const games = await fetchData();
    const conteudo = games.map(game => `${game.titulo} - ${game.preco}\n${game.link}\n`).join('\n');

    await sendEmail(conteudo);
}

main();
```

Depois, no terminal:

```bash
node main.js
```

---

## ✅ **O que o script faz:**

- Faz o scraping das promoções da Steam (topsellers).
- Formata os dados com título, preço e link.
- Envia um e-mail com o relatório.

---

## ✅ **Para testar o disparo de email, basta substituir o email contido nesse trecho de codigo, para um de sua escolha**
    ```javascript 
async function sendEmail(conteudo) {
  try {
    const info = await transporter.sendMail({
      from: `"Steam Promo Bot" <${process.env.EMAIL_USER}>`,
      to: 'seuemail@gmail.com',
      subject: 'Relatório das melhores ofertas da Steam',
      text: conteudo,  // Conteúdo em texto
      html: `<div style="font-family: Arial; line-height: 1.5;"><pre>${conteudo}</pre></div>`,  
    });

    console.log('E-mail enviado: %s', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
}
```
## 🛠️ **Tecnologias utilizadas**

- [Node.js](https://nodejs.org/)
- [Cheerio](https://cheerio.js.org/)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [nodemailer](https://nodemailer.com/about/)

---

## 🤝 **Contribuições**

Sinta-se à vontade para abrir issues ou PRs.

---

## ⚠️ **Avisos importantes**

- Não abuse do scraping — respeite os termos de uso da Steam.
- Cuidado ao expor dados sensíveis (e-mail e senha).


