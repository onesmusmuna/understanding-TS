# Initialize project to use typescript

```sh
$ tsc --init
```

# Compile typescript files

compilel all files

```sh
$ tsc
```

watch mode

```sh
$ --watch
$ -w
```

# excluding files and directories

`"exclude": ["node_modules"]` exclude node_modules dir

`"exclude": ["abc.ts"]` exclude a file

`"exclude": ["*.dev.ts"]` exclude any file with extention of .dev.ts

`"exclude": ["**/*.dev.ts"]` exclude any file with this pattern in any folder

# including files and directories

Specifies an array of filenames or patterns to include in the program.

`"include": ["app.ts"]` including a file.

`"include": [""]`

# sourceMap

Enables the generation of sourcemap files.

These files allow debuggers and other tools to display the original TypeScript source code when actually working with the emitted JavaScript files.

Source map files are emitted as .js.map (or .jsx.map) files next to the corresponding .js output file.

# directory

`src/` source files to build and develop the project.
This is where the original source files are located, before being compiled into fewer files.

`dist/` distribution, the compiled code/library, also named `public/`, or `build/`.
The files meant for production or public use are usually located here.

`assets/` static content like images, video, audio, fonts etc.

`lib/` external dependencies (when included directly).

`test/` the project's tests scripts, mocks, etc.

`node_modules/` includes libraries and dependencies for JS packages, used by Npm.

`vendor/` includes libraries and dependencies for PHP packages, used by Composer.

`bin/` files that get added to your PATH when installed.
