#FROM nginx:alpine
#COPY . /usr/share/nginx/html
#FROM nginx:alpine
#COPY html /usr/share/nginx/html
FROM nginx:latest
COPY . /usr/share/nginx/html

#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY index.html /usr/share/nginx/html/index.html
#COPY img /usr/share/nginx/html/img
