<h1 align="center">Random Music API </h1>

<p align="center">
    <img alt="nodejs badge" src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
    <img alt="javascript badge" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black"/>
    <img alt="expressjs badge" src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white"/>
    <img alt="axios badge" src="https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white"/>
    <img alt="prisma badge" src="https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white"/>
    <img alt="postgresql badge" src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white"/>
</p>

## Sobre

A Random music é uma API desenvolvida como parte do miniprojeto do módulo 5 do Programadores do Amanhã. Tem a proposta de selecionar artistas, álbuns e músicas aleatórias com base nos artistas cadastrados no banco de dados. A api busca artistas na base de dados do site LastFM.

## Como executar o projeto

```bash
# Clone este repositório
git clone https://github.com/lucylima/pda-projeto-final-m4.git

# instale as dependências e gere
npm install && npx prisma generate
```

Crie um arquivo .env com as seguintes informações:

```bash
DATABASE_URL='' # link do seu banco de dados postgresql
PORT='' # porta para o servidor rodar
last_fm='' #sua api key do last fm
```

```bash
# Execute a aplicação em modo de desenvolvimento
npm run dev
```

## Endpoints disponíveis

### /album

- Retorna um álbum aleatório de um artista que está no banco de dados

### /artist

- Retorna informações sobre o artista que foi escolhido

### /song

- Retorna uma música aleatória de um artista que está no banco de dados

## Exemplos de resposta:

### /artist
```json
{
  "artist": {
    "name": "cyber5upremacy",
    "url": "https://www.last.fm/music/cyber5upremacy",
    "image": [
      {
        "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
        "size": "small"
      },
      {
        "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
        "size": "medium"
      },
      {
        "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
        "size": "large"
        }
    ]
    "streamable": "0",
    "ontour": "0",
    "stats": {
      "listeners": "3386",
      "playcount": "115443"
    }
```
