This website should show moonwalkertech services and allow client to request a quote.

## About the project

We used pnpm as the package manager due to it being faster. This package was installed globally.

- use npm i to install the project's packages.
- followed by pnpm dev to start the development server.
- npm dev starts your development server on port 3000.

## Tech Stack
- React
- React-DOM
- Tailwind CSS
- Tailwind Prettier plugin
- ESlint
- TypeScript
- NextJS
- Vercel



## Project Structure

Top-level folders
Top-level folders are used to organize your application's code and static assets.

Route segments to path segments
app	App Router
pages	Pages Router
public	Static assets to be served
src	Optional application source folder
Top-level files
Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables.

Next.js	
next.config.js	Configuration file for Next.js
package.json	Project dependencies and scripts
instrumentation.ts	OpenTelemetry and Instrumentation file
middleware.ts	Next.js request middleware
.env	Environment variables
.env.local	Local environment variables
.env.production	Production environment variables
.env.development	Development environment variables
.eslintrc.json	Configuration file for ESLint
.gitignore	Git files and folders to ignore
next-env.d.ts	TypeScript declaration file for Next.js
tsconfig.json	Configuration file for TypeScript
jsconfig.json	Configuration file for JavaScript
app Routing Conventions
The following file conventions are used to define routes and handle metadata in the app router.

Routing Files
layout	.js .jsx .tsx	Layout
page	.js .jsx .tsx	Page
loading	.js .jsx .tsx	Loading UI
not-found	.js .jsx .tsx	Not found UI
error	.js .jsx .tsx	Error UI
global-error	.js .jsx .tsx	Global error UI
route	.js .ts	API endpoint
template	.js .jsx .tsx	Re-rendered layout
default	.js .jsx .tsx	Parallel route fallback page
Nested Routes
folder	Route segment
folder/folder	Nested route segment
Dynamic Routes
[folder]	Dynamic route segment
[...folder]	Catch-all route segment
[[...folder]]	Optional catch-all route segment
Route Groups and Private Folders
(folder)	Group routes without affecting routing
_folder	Opt folder and all child segments out of routing
Parallel and Intercepted Routes
@folder	Named slot
(.)folder	Intercept same level
(..)folder	Intercept one level above
(..)(..)folder	Intercept two levels above
(...)folder	Intercept from root
Metadata File Conventions
App Icons
favicon	.ico	Favicon file
icon	.ico .jpg .jpeg .png .svg	App Icon file
icon	.js .ts .tsx	Generated App Icon
apple-icon	.jpg .jpeg, .png	Apple App Icon file
apple-icon	.js .ts .tsx	Generated Apple App Icon
Open Graph and Twitter Images
opengraph-image	.jpg .jpeg .png .gif	Open Graph image file
opengraph-image	.js .ts .tsx	Generated Open Graph image
twitter-image	.jpg .jpeg .png .gif	Twitter image file
twitter-image	.js .ts .tsx	Generated Twitter image
SEO
sitemap	.xml	Sitemap file
sitemap	.js .ts	Generated Sitemap
robots	.txt	Robots file
robots	.js .ts	Generated Robots file
pages Routing Conventions
The following file conventions are used to define routes in the pages router.

Special Files
_app	.js .jsx .tsx	Custom App
_document	.js .jsx .tsx	Custom Document
_error	.js .jsx .tsx	Custom Error Page
404	.js .jsx .tsx	404 Error Page
500	.js .jsx .tsx	500 Error Page
Routes
Folder convention		
index	.js .jsx .tsx	Home page
folder/index	.js .jsx .tsx	Nested page
File convention		
index	.js .jsx .tsx	Home page
file	.js .jsx .tsx	Nested page
Dynamic Routes
Folder convention		
[folder]/index	.js .jsx .tsx	Dynamic route segment
[...folder]/index	.js .jsx .tsx	Catch-all route segment
[[...folder]]/index	.js .jsx .tsx	Optional catch-all route segment
File convention		
[file]	.js .jsx .tsx	Dynamic route segment
[...file]	.js .jsx .tsx	Catch-all route segment
[[...file]]	.js .jsx .tsx	Optional catch-all route segment


author: Rachael Bradford