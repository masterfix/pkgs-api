FROM archlinux AS build
RUN pacman -Sy --noconfirm nodejs npm

WORKDIR /app
COPY ./package*.json /app/
RUN npm install --prod && mv node_modules /deps-prod && npm install
COPY . /app
RUN npm run build


FROM archlinux
RUN pacman -Sy --noconfirm nodejs
WORKDIR /app
COPY --from=build /app/dist /app
COPY --from=build /deps-prod /app/node_modules

ENV API_PREFIX /api
EXPOSE 80

ENTRYPOINT [ "node", "main.js" ]