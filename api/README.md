#  API de Músicas aleatórias

## Descrição


## Como executar o projeto

primeiro clone o projeto
```bash
git clone https://github.com/lucylima/pda-projeto-final-m4.git
```
instale as dependências
```bash
npm install && npx prisma generate
```
Depois crie um arquivo .env com as seguintes informações:
```bash
DATABASE_URL='' # link do seu banco de dados postgresql
PORT='' # porta para o servidor rodar
last_fm='' #sua api key do last fm
```
Depois disso você pode rodar o servidor com
```bash
npm run dev
```

## Endpoints disponíveis

### /album
- Retorna um álbum aleatório de um artista que está no banco de dados
### /artist
- Retorna informações sobre o artista que foi escolhido 
### /song
- retorna uma música aleatória de um artista que está no banco de dados