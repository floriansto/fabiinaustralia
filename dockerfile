FROM httpd:2.4

COPY ./src/index.html /usr/local/apache2/htdocs/
COPY ./src/style.css /usr/local/apache2/htdocs/
COPY ./src/script.js /usr/local/apache2/htdocs/

