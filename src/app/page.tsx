import React from 'react';
import {Container} from "@/lib/Container";

class Database {
    username = "Aung Myat Moe"
}

class Controller {
    constructor(private database: Database) {
    }

    getUserName() {
        return this.database.username;
    }
}

const Page = () => {
    const container = new Container();
    container.register(Database.name, () => new Database());
    container.register(Controller.name, () => new Controller(container.get(Database.name) as Database));
    const controller = container.get(Controller.name) as Controller;
    console.log(controller.getUserName());


    return (
        <div>
            Hello from container
        </div>
    );
};

export default Page;
