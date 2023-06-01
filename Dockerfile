FROM node:14
WORKDIR /sit725-2023-t1-inventory-management-system
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]