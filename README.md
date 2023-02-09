## cypress-telnyx.com
Several automatic tests on Cypress(JavaScript) for the site: [telnyx.com](https://telnyx.com/). It check ability to log in, and few another pages.
### Contents
- [Technology](#Technology)
- [Usage](#Usage)
- [Requirements](#Requirements)
- [Testing](#Testing)
- [Result](#Result)
- [To do](#to-do)

### Technology
- [Cypress](https://docs.cypress.io/)

### Usage
- Download project
- Go to root folder
- Install the npm package with the command:

```
$ npm install
```

### Requirements
 :exclamation: To install and run the project, you need [NodeJS](https://nodejs.org/) v14+.

### File structure
- cypress   
    - downloads   
    - e2e 
        - main.cy.js
    - fixtures  
    - integration  
        - pages
            - main.js
            - page.js
    - screenshots  
    - support  
    - videos

`e2e` folder contains spec files
`pages` folder contains Page Object Model files

### Testing
To run tests in the headless mod in the root directory,with creating HTML reports execute
```
npm run test:report
```
To open the cypress graphic interface
```
npm run cypress
```
To remove old reports
```
npm run report:clear
```
