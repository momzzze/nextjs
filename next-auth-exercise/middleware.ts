//without a defined matcher, this middleware will be executed for every request
export { default } from "next-auth/middleware";

export const config = { matcher: ["/extra", "/dashboard"] }