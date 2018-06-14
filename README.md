# atl-interface-webpack4-repro
A repo for reproducing the interface generation bug in wepback 4+

Install packages
`npm i`

To reproduce the issue:
`npx webpack`

The build directory will contain:
```
build
|-index.d.ts
|-index.js
|-index.js.map
```

The declaration file for `SomeInterface.ts` is missing, leading to a ts build error in `index.d.ts`.

Pull the latest from https://github.com/bkrupa-argo/awesome-typescript-loader

In the clone of `bkrupa-argo/awesome-typescript-loader`
`npm link`

From this respository, then 
`npm link awesome-typescript-loader`

Run
`npx webpack`

Notice that now the `SomeInterface.d.ts` exists in the build directory.
