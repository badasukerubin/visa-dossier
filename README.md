## VISA Dossier

This repository contains a basic VISA Dossier management feature using Laravel(API only) and React Router (previously Remix).

## Installation

#### Prerequisites

-   PHP 8.3 or higher
-   Composer
-   Node.js and npm
-   SQLite

1. Clone the Repository

```bash
git clone https://github.com/badasukerubin/visa-dossier
```

2. Navigate to the repository:

    ```bash
    cd visa-dossier
    ```

3. Install Composer dependencies:

    ```bash
    composer install
    ```

4. Create environment file:

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

5. Configure the database in `.env`:

    ```
    DB_CONNECTION=sqlite

    # Create an sqlite database file
    touch database/database.sqlite
    ```

6. Run migrations and seeding:

    ```bash
    php artisan migrate
    php artisan db:seed
    ```

7. Install Node.js dependencies:

    ```bash
    npm install
    ```

8. Dev/Build the frontend assets:

    ```bash
    npm run build
    ```

    or

    ```bash
    npm run dev
    ```

9. Open the app in [herd] (https://herd.laravel.com/)

## Test the Application

```bash
./vendor/bin/pest
```

### Laravel (Backend API)

-   [x] Upload a file
-   [x] List uploaded files, grouped by type
-   [x] Delete a file
-   [x] Files should be saved using Laravel’s filesystem (local disk is fine).
-   [x] Data must be persisted in a database.
-   [x] Apply proper file validation:
-   [x] Allowed types: PDF, PNG, JPG
-   [x] Max size: 4MB
-   [x] Follow good API and error handling practices.

### Remix (Frontend)

-   [x] Build a minimal UI that allows a user to:
-   [x] Select and upload a file (no drag and drop)
-   [x] View a list of uploaded files, grouped by 3 categories of your choosing
-   [x] Delete a file
-   [ ] Show a basic file preview if possible (e.g. image thumbnail or file na
