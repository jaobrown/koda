[![Netlify Status](https://api.netlify.com/api/v1/badges/0293ac4c-37a9-4d43-a836-9f0d0b5e7923/deploy-status)](https://app.netlify.com/sites/kodastudio/deploys)

# Koda Studio

Website for [kodastudio.co](http://kodastudio.co/) – currently a WIP, with a live coming soon page.

## Getting Started

This project is scaffolding using Gatsby, Styled-Components, and a couple of other cool libraries. Checkout package.json for more information.

### Prerequisites

What things you need to install the software and how to install them

    Nodejs! (I think that's all)

### Installing

To get up and running:

    git clone https://github.com/jaobrown/koda.git
    cd koda
    npm install

After packages are installed:

    git checkout develop
    gatsby develop

That should be it! You are up and running with the Koda dev environment.

## Running the tests

WIP - Jest to be implemented

### Break down into end to end tests

Explain what these tests test and why

    Give an example

### And coding style tests

Explain what these tests test and why

    Give an example

## Deployment

To build & deploy changes:

    git add .
    git commit -m "Your commit message here"
    git push origin develop

After the build deploys successfully, perform QA on [https://develop.kodastudio.co/](https://develop.kodastudio.co/) 

If QA passes, run the following commands:

    git checkout staging
    git merge develop
    git push origin staging

After the build deploys successfully, perform QA on [https://staging.kodastudio.co/](https://staging.kodastudio.co/)

If QA passes, run the following commands:

    git checkout master
    git merge staging
    git push origin master

After the build deploys successfully, perform QA on [https://kodastudio.co/](https://kodastudio.co/)

## Built With

- [Netlify](https://www.netlify.com/)

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

- **Jared Brown - Development**
- **Alex Brown - Designer**

## License

Need to figure this out, tbh.

## Acknowledgments

- Gatsby.js for building such a wonderful product!