FROM node:20

# 1. Встановлюємо робочу директорію
WORKDIR /usr/src/app

# 2. Копіюємо кореневі package.json та yarn.lock
COPY package.json yarn.lock ./

# 3. Копіюємо всі package.json файли з workspace'ів, щоб правильно встановити залежності
COPY packages/server/package.json ./packages/server/

# 4. Встановлюємо лише production-залежності, щоб зменшити розмір
#yarn install --frozen-lockfile --production=false
RUN yarn install

# 5. Копіюємо весь код після встановлення залежностей
COPY packages/server ./packages/server/

# 6. Генеруємо Prisma клієнт
RUN yarn workspace server prisma generate

# 7. Білдимо бекенд
RUN yarn workspace server build

# 8. Відкриваємо порт
EXPOSE 3030

# 9. Запускаємо у production режимі
CMD ["yarn", "workspace", "server", "start:prod"]
