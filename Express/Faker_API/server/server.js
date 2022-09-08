const express = require('express')
const {faker} = require('@faker-js/faker')
const app = express()
const port = 8000;

const createUser = () => {
    const newUser = {
        
        id: faker.database.mongodbObjectId(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number()
    };
    return newUser;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany  = () => {
    const newCompany  = {
        
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
    return newCompany ;
};

const newFakeCompany  = createCompany();
console.log(newFakeCompany );

app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
    res.json( {newFakeUser, newFakeCompany} );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );