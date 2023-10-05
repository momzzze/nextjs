## What is Next.js?

    The react Framework for Production.

React is library for building user interfaces. Responsible only for only view layer of the app.
Next is react framework to build with server side rendering and static site generation.

Provide FIle based routing.
Pre-rendering.
API routes.
Authentication and Authorization.
Dev and Prod build system.

public - static files

2 routers :

- App router
  so App router comes with 13.4 and will be future router for Next.js
  so we will use it from now on.

- app->

# current work on review app:

/page.jsx
/reviews/page.jsx
/reviews/stardew-valley/page.jsx for example folder automatically will map the url
/about/page.jsx
/reviews/hollow-knight/page.jsx

why we have to do folder structure :
we can put multiple files for each root which means:
we can add layout for each root and add different specific options for this root for example mini bar for reviews in that case

- Pages Router
  pages router wont be used from now on but its still maintained and will be supported for a long time.

- what I need:
  - in the folder structure of api I need api/auth/[...nextauth] and then in this folder I should create route.ts file to handle the request.
  - in the file I need to import bcrypt if I use it
  - to create Credentials type which is normally email or password
  - auth function which receive 2 parameters req and res from NextApiRequest and NextApiResponse types
  - and i need to return NextAuth(req, res, options) function
  - in this function I can have session strategy which is object with property session and inside I can have jwt property which is object with property secret and signingKey which is string
  - I can have providers normally CredentialProvider which is function with object in it authorize there I need to implement connection to the db take email and pass from credentials and then check if user is in the db and if its not there to throw error also after this need to check if the password match thats why I need bcrypt with the function compare and then return user.
- - after this I have callbacks object with properties like jwt or session they receive token(or session) and user and they return token or session .

## Pre rendering

    sends HTTP request to the server and the server return us response .
    SO the main concept is if we use something like create react app for example we can see that return of the response is in the client side so we have div with id root and thats it but with the server side rendering like in the next js we can see that the response is from all the elements
    -  main advantages for pre rendering are more fast return faster load,
    -  help in search engine optimization because the content is not dynamic
    -  support non-JS clients because when you remove javascript from the engine if you run the app it wont work but in the next js server because its pre rendered will work.

## react-server-component:

we need to use "use client" to apply it client side functionality.

**pages router** always router them on server and on js client browser. the limitation is always

so when we use **use client** we change our server client component from default to **client component** and now it render on both server and client same as page router from before main difference is that server components does not put unnecessary JS on the browser and its more faster than **client/server** one which is **"page router"**

## difference between dev and prod:

    if we use build command we can use prod.
    static pages are with circles and we can see it when we use npm run build
    all those pages are generated in the .next folder

## link component:

- so we use it to make client-side component routing because if we use a tag will be multi page app and we will render the things each time when we click on the link
  so we use link component to make it single page app and to render only the things that we need to render.

- so if we use build and production run after this we load the files and after that *Links* are instant without any load thats call **prefetching** if we want to disable it we have to add ot the link **prefetch={false}**

by default in prod next pre fetch all the links to make the navigation faster.

## css files:

  - you can add one **global.css** and set it in **layer.js** but the power of folder structure is that for each route element you can add css file and separate the look and you can specific different styles for navs for example on 2 places.
  - 