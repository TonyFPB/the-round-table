FROM node:18.15

WORKDIR /src/usr/

COPY . .

EXPOSE 5000

RUN npm i
RUN npm run build

CMD ["npm", "start"]
