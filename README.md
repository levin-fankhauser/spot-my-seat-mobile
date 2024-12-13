# SpotMySeat Mobile Application

## Initialize project

```
git clone https://github.com/levin-fankhauser/spot-my-seat-mobile.git
```

Install dependencies:

```
npm install
```

Create environments folder

```
src/environments
```

Create environments files

```
environment.ts
environment.prod.ts
```

Write your files like this:

```
export const environment = {
  production: true, //only for environment.prod.ts
  supabaseUrl: '<yourSupabaseUrl>',
  supabaseKey: '<yourSupabaseKey>',
};
```

## Start your app

```
ng serve
```

## Run on Android studio

```
ionic build
```

```
ionic cap copy
```

```
ionic cap sync
```

```
ionic cap open android
```

Run your project directly in android studio
