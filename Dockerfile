FROM alpine:3.19

RUN apk --no-cache add nodejs npm

COPY . /solkids
WORKDIR /solkids 
RUN npm install

CMD ["npm", "start"]