This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

This project is a replica of Dropbox. It uses Next.js, TypeScript, Tailwind CSS, and Firebase.
For authentication, it uses Clerk because its easy to use and its secure and fast.
We have 2 pages, front page and dashboard page.
Front page is the page where everyone can see whats the content of the site it also has Try for free button which will redirect you to the dashboard page.

Dashboard is the place were you can see your files. You can upload files via drag&drop input field,delete files or rename files.

For styling we use Tailwind CSS via Shadcn.
For global state management we use Zustand.
For authentication we use Clerk.
For file storage we use Firebase Storage.
For database we use Firebase Firestore.
For deployment we use Vercel.


## Deploy on Vercel
    This project is deployed on Vercel with domain name [https://dropboxreplica.online/](https://dropboxreplica.online/)
