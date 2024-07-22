### STAGE 1: Build ###
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /app/dist/archtechuiangular/browser /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf


# Expose port 80
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]