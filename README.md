# My Food 2 App

A React Native application configured with AWS Amplify Gen 2 and email-based authentication.

## AWS Amplify Configuration

### Authentication

The app uses AWS Amplify Gen 2's authentication system with email-based login. This is configured in `amplify/auth/resource.ts`:

```typescript
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
```

This setup provides:
- Email and password authentication
- User registration with email verification
- Password recovery functionality
- Built-in security features like password policies and account lockout

### Data Layer

The backend uses AWS Amplify's Data features, configured in `amplify/data/resource.ts`. The schema includes:

```typescript
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [
      allow.guest().to(['create', 'read', 'update', 'delete'])
    ]),
});
```

Key configurations:
- Identity Pool authentication mode
- Guest access enabled for CRUD operations
- Schema-based data modeling

### Backend Configuration

The backend resources are defined in `amplify/backend.ts`:

```typescript
defineBackend({
  auth,
  data,
});
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Required package versions:
- @react-native-async-storage/async-storage: 1.23.1
- react-native-safe-area-context: 4.12.0

3. Start the development server:
```bash
npm start
```

## Architecture

- Built with React Native
- Uses AWS Amplify Gen 2 for backend services
- Implements email-based authentication
- Includes data persistence with AWS AppSync