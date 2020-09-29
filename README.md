# compras-api-rest

# Config .env
    INSTANCE_URL=
    INSTANCE_USERNAME=
    INSTANCE_PASSWORD=
    INSTANCE_SCHEMA=

# Start server
    npm run start

# Rest API
    findAll
        GET /compras fetch data compras
    findByEmail    
        POST /email fetch data compras by email
            body: email
    create
        POST /compras create data compras
    delete
        POST /delete delete data compras
            body: id