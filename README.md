<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://avatars.githubusercontent.com/u/122791452?s=200&v=4" width="200" alt="Nest Logo" /></a>
</p>

<h3 align="center">BookStore Service</h3>

## Description
This is a service API that is being developed as part of an interview test at Hyperhire. The API is being built using nodejs, express, typescript, postgreesql and it provided functionality for login, register, create book, list book, order and list orders include filtering and search schema.

more detail about project
https://hyperhire.notion.site/Fullstack-assignment_27-july-503a2bafa09c4b14bf9cf4bfd1329393


## Deployment
Host: https://bookstore-service.vercel.app/api
Swagger Documentation: https://bookstore-service.vercel.app/docs

## Database Schema
<a href="https://ibb.co/mJnhLBh"><img src="https://i.ibb.co/K6tVMGV/Screen-Shot-2024-04-04-at-01-10-54.png" alt="Screen-Shot-2024-04-04-at-01-10-54" border="0"></a>

## How to run

Steps to run this project:

1. Run `npm i` command
2. Setup migration and seeder
3. Run `npm start` command


## How to run migration
1. generate migration file with run `npx drizzle-kit generate:pg`
2. execute function to run migration `npx src/migrate.ts`
3. observe on vercel dashboard

## Seeder Book
1. create dummy book 100
2. run script `npm run drizzle:seed`


## Authors

<table>
  <tr>
    <td align="center"><a href="https://github.com/tomibudis"><img src="https://github.com/tomibudis.png?size=100" width="100px;" alt="Tomi Budi"/><br /><sub><b>Tomi Budi</b></sub></a><br /></td>
  </tr>
</table>