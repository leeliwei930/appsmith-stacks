# AppSmith Stacks

This repository sets up an external MongoDB replica service on an AppSmith Docker image.

## Setup Instructions

1. Copy the example environment file:
    ```sh
    cp .env.example .env
    ```
	 ```sh
    cp .env.mongo.example .env.mongo
    ```

2. Change the permission to 400 (readonly) for the MongoDB replica key:
    ```sh
    chmod 400 ./storage/mongodb/init/keys/replica.key
    ```

3. Start all the services using Docker Compose:
    ```sh
    docker compose up -d
    ```

## Accessing AppSmith

Visit the AppSmith site hosted at:
- URL: `http://localhost:8880`

## Environment Configuration

Ensure the `.env` file contains the necessary configuration:
```properties
APPSMITH_DB_URL="mongodb://iewileel_dev_mongodb_user:UFY%25pZZ6ZVp8i%26NG@mongo/appsmith_db?authSource=admin"
APPSMITH_REDIS_URL="redis://redis:6379"
APPSMITH_MAIL_ENABLED=false
APPSMITH_ENCRYPTION_PASSWORD="DD8!5WWe^fge*91#JI"
APPSMITH_ENCRYPTION_SALT="&#QH9gPsI1NAF$@hSP"
APPSMITH_HOSTNAME="0.0.0.0"
APPSMITH_SERVER_PORT=80
APPSMITH_DISABLE_TELEMETRY=true
```
