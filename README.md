# Unative Example Expo

This project is a template for building React Native applications using the **Unative** UI library, **Expo**, and **Expo Router**. It provides a fully configured environment with tools like TypeScript, ESLint, Prettier, Jest, and Nativewind for styling.

![Demo of Unative Example Expo](./screenshot.gif)

## Features

- **Expo Router**: Simplified routing for React Native applications.
- **Unative UI**: A modern, cross-platform UI library for web and React Native.
- **Nativewind**: Tailwind CSS for React Native.
- **Prettier & ESLint**: Pre-configured linting and formatting.
- **Jest**: Unit testing setup using Jest and `jest-expo`.

## Installation

1. Clone the template using `degit`:

   ```
   npx degit farhadeidi/unative-expo-example my-app
   ```

2. Navigate to your project directory:

   ```
   cd my-app
   ```

3. Install dependencies using `pnpm` (or your preferred package manager):

   ```
   pnpm install
   ```

4. Start the project:
   ```
   pnpm start
   ```

## Scripts

- **`pnpm start`**: Starts the Expo development server.
- **`pnpm reset-project`**: Resets the project configuration.
- **`pnpm android`**: Runs the app on an Android device or emulator.
- **`pnpm ios`**: Runs the app on an iOS device or simulator.
- **`pnpm web`**: Runs the app in a web browser.
- **`pnpm test`**: Runs Jest tests in watch mode.
- **`pnpm lint`**: Runs ESLint to check for linting errors.
- **`pnpm lint-fix`**: Automatically fixes linting errors.

## Project Structure

- **`expo-router/entry`**: Entry point for the Expo Router.
- **`scripts/reset-project.js`**: A script to reset the project configuration.
- **`src/`**: The main source directory for your application.

## Dependencies

### Main Dependencies

- `expo` for React Native development.
- `react` and `react-native` for building cross-platform applications.
- `expo-router` for routing.
- `nativewind` for Tailwind-style utility classes in React Native.
- `unative` for cross-platform UI components.

### Dev Dependencies

- `eslint` and `prettier` for linting and formatting.
- `jest` and `jest-expo` for testing.
- `typescript` for static typing.

## Customization

### Tailwind CSS

Tailwind CSS is configured via `nativewind`. You can update the configuration in the `tailwind.config.js` file.

### ESLint and Prettier

The project includes a pre-configured `.eslintrc` and `.prettierrc`. Adjust rules as needed for your coding standards.

## License

This project is licensed under the MIT License.
