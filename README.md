[![Tests](https://github.com/yandex-praktikum/react-mesto-api-full-gha/actions/workflows/tests.yml/badge.svg)](https://github.com/yandex-praktikum/react-mesto-api-full-gha/actions/workflows/tests.yml)
# react-mesto-api-full
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями

Адрес репозитория: https://github.com/advatunes/react-mesto-api-full-gha

## Ссылки на проект

IP-адрес 51.250.98.198

Frontend https://advatunes.mesto.nomoredomains.monster

Backend https://api.advatunes.mesto.nomoredomains.monster


server {

        server_name api.advatunes.mesto.nomoredomains.monster;


        location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
            listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/advatunes.mesto.nomoredomains.monster/fullchain.pem; >
    ssl_certificate_key /etc/letsencrypt/live/advatunes.mesto.nomoredomains.monster/privkey.pem>
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
 server_name advatunes.mesto.nomoredomains.monster;
    root /home/adva/home/react-mesto-api-full-gha/frontend;

        location / {
                   }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/advatunes.mesto.nomoredomains.monster/fullchain.pem; >    ssl_certificate_key /etc/letsencrypt/live/advatunes.mesto.nomoredomains.monster/privkey.pem>    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}


server {
    if ($host = advatunes.mesto.nomoredomains.monster) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        listen 80;
 server_name advatunes.mesto.nomoredomains.monster;
    return 404; # managed by Certbot


}server {
    if ($host = api.advatunes.mesto.nomoredomains.monster) {
        return 301 https://$host$request_uri;
    } # managed by Certbot
            listen 80;

        server_name api.advatunes.mesto.nomoredomains.monster;
    return 404; # managed by Certbot


}
