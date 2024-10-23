# Usa a imagem oficial do Node.js como base
FROM node:14

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o contêiner
COPY . .

# Expõe a porta que o app vai rodar
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
