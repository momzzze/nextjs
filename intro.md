## What is Next.js?
    The react Framework for Production.

React is library for building user interfaces. Responsible only for only view layer of the app.
Next is react framework to build  with server side rendering and static site generation.

Provide FIle based routing.
Pre-rendering.
API routes.
Authentication and Authorization.
Dev and Prod build system.



public - static files


// next-auth
- what I need:
  - in the folder structure of api I need  api/auth/[...nextauth] and then in this folder I should create route.ts file to handle the request.
  - in the file I need to import bcrypt if I use it
  - to create Credentials type which is normally email or password
  - auth function which receive 2 parameters req and res from NextApiRequest and NextApiResponse types
  - and i need to return NextAuth(req, res, options) function
  - in this function I can have session strategy which is object with property session and inside I can have jwt property which is object with property secret and signingKey which is string
  - I can have providers normally CredentialProvider which is function with object in it authorize there I need to implement connection to the db take email and pass from credentials and then check if user is in the db and if its not there to throw error also after this need to check if the password match thats why I need bcrypt with the function compare and then return user.
- - after this I have callbacks object with properties like jwt or session they receive token(or session) and user and they return token or session . 