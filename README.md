# galactic-bounty-board

# 🚀 Galactic Bounty Board — Backend

This is the **backend** part of the Galactic Bounty Board project, built using:

- **Node.js / TypeScript**
- **GraphQL**
- **Express.js**
- **Prisma ORM**
- **PostgreSQL**

---

## ⚙️ Requirements

- Node.js >= 18
- PostgreSQL instance
- Recommended: pnpm / yarn / npm

---

## 📦 Technologies

- **Apollo Server v4** – GraphQL server
- **Prisma ORM** – database client & migrations
- **PostgreSQL** – relational database
- **Zod** – schema validation
- **jsonwebtoken** – JWT auth
- **bcrypt** – password hashing
- **dotenv** – environment configuration
- **TypeScript** – typed codebase

---

## 🚀 Getting Started

### 1️⃣ Clone repository

```bash
    git clone <your-repo-url>
    cd galactic-bounty-board/server 
```

### 2️⃣ Install dependencies

```bash
    npm install
```

### 3️⃣ Setup environment variables

Create a .env file by copy .env.example file in the root of server/ and fill the environments

### 4️⃣ Setup database with Prisma

Run migrations:

```bash
    npx prisma migrate dev --name init
```

Generate Prisma client:

```bash
    npx prisma generate
```

### 5️⃣ Run the server

Run in dev mode:

```bash
    npm run dev
```

(Optional) Open Prisma Studio (DB GUI):

```bash
    npx prisma studio
```

💡 You can test GraphQL req/res by using: http://localhost:8000/galactic-bounty

Build production:

```bash
    npm run build
```

Run production:

```bash
    npm run start
```

### 6️⃣ Run GraphQL Codegen

```bash
    npm run codegen
```

💡 Generates TypeScript types & hooks from GraphQL schema.