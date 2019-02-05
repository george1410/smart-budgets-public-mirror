# Smart Budgets

- [Smart Budgets](#smart-budgets)
    - [Getting Started](#getting-started)
    - [Development](#development)
      - [Git workflow](#git-workflow)
      - [Developing components independent from the app](#developing-components-independent-from-the-app)
    - [Documentation](#documentation)

Smart Budgets is a progressive web application that learns about the users' spending habits in order to offer them guidance on making better purchasing decisions.

This project is built by:

- George McCarron - psygm1@nottingham.ac.uk

- Raigo Jerva - psyrj3@nottingham.ac.uk

- Nicole Simms - psyns6@nottingham.ac.uk

- Tom Price - psytmp@nottingham.ac.uk

- Sarah Al Zadjali - psyska@nottingham.ac.uk

- Julian Kubelec - psyjk4@nottingham.ac.uk

Supervised by:

- Peer-Olaf Siebers - pszps@nottingham.ac.uk

Sponsored by:

- Chris Matthews - christopher.matthews@capitalone.com

### Getting Started

In the project directory, you can run:

`npm start`

This command runs concurrently `npm server` and `npm client` in order to start both ends of the application.

Open [http://localhost:3000](http://localhost:3000) to view the front end in the browser.
The server runs on [http://localhost:8080](http://localhost:8080) followed by some endpoint

The page will reload if you make edits to the React code.

### Development

#### Git workflow

Starting from the very beginning, the order of your commands should look something like this:

- `git clone https://github.com/rudotriton/smart-budgets.git`
  - If you use ssh then: `git clone git@github.com:rudotriton/smart-budgets.git`
- `git checkout -b <issue number>-<descriptive name>`
  - for example `git checkout -b 45-authentication`
- At this point you are free to commit however many times you want.
- `git push --set-upstream origin <my-branch-name>`
  - for example: `git push --set-upstream origin 45-authentication`
- Navigate to the project [repository](https://github.com/rudotriton/smart-budgets) on GitHub and open a pull request.
  - the link for this would look similar to `https://github.com/rudotriton/smart-budgets/pull/new/<name-of-your-branch>`

#### Developing components independent from the app

You can run `npm run storybook` to launch Storybook instance (by default on [http://localhost:9009](http://localhost:9009)). Storybook shows the components that are attached to it in `src/stories/index.js`. This allows you to develop components without having to place them somewhere in the actual application.

The template for adding a new component to storybook looks something like this:

```js
storiesOf("Component name", module).add("variation of the component", () => (
  <MyComponent />
));
```

### Documentation

- [Documents Repository](https://github.com/rudotriton/group-10-docs)

- [Smart-budgets Trello](https://trello.com/b/tnETGBJV/smart-budgets) - Everyone involved has access to this board. Log in first if it shows as private board.

- [Invite Link](https://trello.com/invite/b/tnETGBJV/a8a06cc916a30ee4777d6a98b5137a53/smart-budgets) - This is here just in case.
