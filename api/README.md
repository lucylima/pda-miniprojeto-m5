<h1 align="center">Random Music API </h1>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,javascript,express,prisma,postgres" />
  </a>
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
