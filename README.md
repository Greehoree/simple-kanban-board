# Kanban Board

# TODO: 
* Implement better design
## Project Requirements 

*Create simple kanban board*

1. ~~Basic level:~~

* Page with 3 columns: "Open", "In progress", "Done". :ballot_box_with_check:
* "Create New Ticket" button. :ballot_box_with_check:
* Ticket should contain *Title*, *Status*, *next stage* and *prev stage*  buttons. :ballot_box_with_check:

2. Additional features: 

* ~~Typescript support~~
* Edit Ticket Form  :ballot_box_with_check:
* LocalStorage integration :ballot_box_with_check:
* Implement Drag-and-drop
* Add *Description*, *Edit*, *Delete*, buttons. 

3. Extra features: 

* Add Pinia Support. :ballot_box_with_check:
* Add Database using Firebase.io.
* Add Authorization using Firebase.io.
* Add Multiple Kanban boards with multi-user acess. 
* Add Custom Kanban boards.

## Basic structure 

1. Components: 
  * TheHeader (should include button?)
  * Kanban Board Container 
  * Kanban Column 
  * Kanban Ticket

2. Data structure: 
  * Array of taskObjects per each Kanban Column
  * Task Object :

```js
const ticket = {
  id: "uuid4" // or some kind of randomly generated id
  title: "title",
};
```

## Advanced structure 

1. Components 
 * The header should contain burger element with following options:
    * Switch Kanban
    * Create New Kanban
    * Kanban privacy setup (or combine it one Kanban Settings modal)
    * Logout
 * Authorization card 
 * Kanban selection card

2. Data structure: 
  * DB for Kanban Items :
  ```json
  {
    "id": "uuid",
    "kanbanId": "uuid",
    "state": "state",
    "title": "title",
    "description": "description"
  }
  ```
  * DB for Kanban Boards : 

  ```json
  {
    "id": "uuid",
    "name": "name",
    "description": "not sure",
    "rows": ["not sure"]
  }
  ```

  * DB for users: 

  ```json
  {
    "id": "uuid",
    "email": "email@email",
    "password": "password", //unsure
    "kanbanAcess": ["kanbanIds"] 
  }
  ```


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
