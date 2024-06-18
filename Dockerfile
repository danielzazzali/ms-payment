# Etapa 1: Construcción del proyecto TypeScript
FROM node:20 AS build

WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY package*.json ./

COPY tsconfig.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación está escuchando
EXPOSE 50053

# Comando para iniciar la aplicación NestJS en producción
CMD ["npm", "run", "start:dev"]
