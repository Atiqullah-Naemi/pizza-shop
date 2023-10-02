# Pizza shop

This is a simple React JS + typescript ecommerce pizza shop store.

- Store has multiple locations, visting home page, you have to pick up a store location

### How to run locally

To run the project locally, you need to first clone the repo and then do the following steps:

- create a database in mongodb atlas, create a .env file in the root of the project and put your mongodb db url like:
  `DATABASE_URL="url"`
  and then
  in your terminal:

- `npx prisma generate`
- `npx prisma db push`

and then

- `npm install`
- `npm run dev`
