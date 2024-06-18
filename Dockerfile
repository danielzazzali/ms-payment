# Etapa 1: Construcción del proyecto TypeScript
FROM node:20 AS build

WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir el proyecto
RUN npm run build

# Etapa 2: Ejecutar el proyecto
FROM node:20

WORKDIR /app

# Copiar las dependencias de producción y los archivos construidos desde la etapa de construcción
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Exponer el puerto en el que la aplicación está escuchando
EXPOSE 50053

# Comando para iniciar la aplicación NestJS en producción
CMD ["npm", "run", "start:prod"]
