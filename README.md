
## Description

Simple API with CRUD operations on an array.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# Available Routes for NestJS API

## Authentication Routes
| Method | Route         | Description           |
|--------|---------------|-----------------------|
| POST   | `/auth/login` | Authenticate user     |

---

## User Management Routes
| Method | Route         | Description               |
|--------|---------------|---------------------------|
| GET    | `/users`      | Get all users             |
| GET    | `/users/:id`  | Get a single user         |
| POST   | `/users`      | Create a new user         |
| PUT    | `/users/:id`  | Update an existing user   |
| DELETE | `/users/:id`  | Delete a user             |

---

### Notes:
- **Authentication**: Use the `/auth/login` route to generate a JWT token. Include the token in the `Authorization` header for protected routes, e.g., `Authorization: Bearer <your-token>`.
- **Protected Routes**: All `/users` routes require a valid JWT token.
- **Request Body Examples**:
  - **Login**:
    ```json
    {
      "email": "example@example.com",
      "password": "password123"
    }
    ```
  - **Create/Update User**:
    ```json
    {
      "email": "newuser@example.com",
      "name": "New User"
    }
    ```

