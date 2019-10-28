# Setup

## Requirements

This project requires Node.js v4.0+ to be installed locally.

## Installation

To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: <https://nodejs.org/>
2. Clone this repo: `git clone https://github.com/Alchlabsac/alchlab-nextjs-site.git` (HTTPS)
3. Install project dependencies: `npm install`
4. Start the development environment: `npm run dev`
5. Open your browser and visit <http://localhost:3000>

## Development

When developing components, you may want assets automatically compiled and the browser to refresh automatically. To do this, run the following task:

- `npm run dev`

## Creating a static build

To create a static instance of this project, run the following task:

- `npm run build`

This will create a folder called `www`, into which the required files will be created.

## Deployment

To make this project publicly accessible, you can deploy a static instance by running the following task:

- `npm run publish`

This will publish the contents of `public` to your `gh-pages` branch.

## Repo structure

Sometimes it’s helpful to know what all these different files are for…

```
.
├── components
│   └── # Component (or name of Components related)
│   └── UI
│       └── Layout # ( Example of component related to UI)
│       └── NavBar # ( Another example )
├── http.js # Here it is the api master endpoint if an api is needed
├── next.config.js # Nextjs Configuration for external packages to work with webpack
├── package.json # List of all the packages needed and scripts to run the project
├── pages # The pages that will be available through the browser index.js = '/'
│   └── index.js # This is the root relative url for the website, if you add about.js then you can access through '/about'
├── public # Here you can access all the static files as images, manifest.js, favico.ico, and so on
│   └── favicon.ico
├── README.md
└── yarn.lock

```
