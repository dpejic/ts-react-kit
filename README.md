# ts-react-kit

**ts-react-kit** is a starter project for building React applications with TypeScript. It includes some common tools for development and testing, including:

-  **React.js with TypeScript**: Build robust, scalable, and maintainable UIs with the React.js framework, enhanced with TypeScript for type safety and improved development experience.
-  **Tailwind CSS**: Rapidly prototype and design beautiful, responsive UIs with the highly customizable CSS framework.
-  **ESLint and Prettier**: Enforce consistent code style and catch errors early with the help of the popular code linters and formatters.
-  **lint-staged**: Automatically check and format code before committing it to version control, ensuring that your codebase is always clean and consistent.
-  **Jest and React Testing Library**: Write automated tests for your React components with the popular testing frameworks, ensuring that your UI works as expected.

## Getting Started

To get started with **ts-react-kit**, you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. Once you have those installed, you can follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/dpejic/ts-react-kit.git
```

2. Install the dependencies:

```bash
cd ts-react-kit
npm install
```

3. Start the development server:

```bash
npm start
```

This will start a development server at **`http://localhost:3000/`** where you can view your app in the browser.

## Running Tests

To run the tests for this project, you can use the following command:

```bash
npm test
```

This will run all of the tests in the **`src`** directory using Jest and the React Testing Library.

## Linting and Formatting

This project uses ESLint and Prettier to help maintain code quality and consistency. You can run the linter and formatter manually using the following commands:

```bash
npm run lint:(eslint|prettier)
npm run format:(eslint|prettier)
```

However, it's recommended to use **`lint-staged`** to automatically run these tools on files that are staged for a commit.

## Deployment

To deploy your app, you can use the **`npm run build`** command to create a production-ready build of your app. This will create a **`build`** directory with optimized static assets that you can then deploy to a hosting provider of your choice.

## Contributing

Contributions to ts-react-kit are welcome! To contribute, please fork the repository, create a new branch with your changes, and submit a pull request.
