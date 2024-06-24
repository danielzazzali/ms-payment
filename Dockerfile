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

# Copiar el archivo payment.proto
COPY src/payment.proto ./src/

# Construir el proyecto
RUN npm run build

COPY --from=build /app/src/payment.proto ./src/

# Exponer el puerto en el que la aplicación está escuchando
EXPOSE 50053

# Comando para iniciar la aplicación NestJS en producción
CMD ["npm", "run", "start:prod"]
