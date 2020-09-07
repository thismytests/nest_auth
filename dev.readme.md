# **Installed dependencies**

###### For windows

* Installed [node.js](https://nodejs.org/uk/download/)

* Installed [docker](https://docs.docker.com/compose/install/)

* Installed [docker-compose](https://docs.docker.com/compose/install/)

###### **For ubuntu**

* Installed [node.js and npm](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)

* Installed [docker](https://docs.docker.com/engine/install/ubuntu/)

* Installed [docker-compose](https://docs.docker.com/compose/install/)

# Run 
* ###### For develop
    * cd docker-compose
     
        `docker-compose -f docker-compose.dev.yml up`

    * in root folder
        ```bash
        
        npm run db:plan:dev
        npm run db:apply:dev
        npm run db:pull:dev
      
        npm run start:dev
* ###### For production

