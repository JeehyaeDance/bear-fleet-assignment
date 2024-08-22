# FE interview take-home challenge 1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Implementation

(Please write about your implementation)

## Setup

- The project didn't compile correctly after downloading due to some seemingly out of date packages related to create-react-app (properties in webpack config not existing and throwing errors [see this issue](https://github.com/facebook/create-react-app/issues/13618)). I didn't want to spend too much time caught up here, so downgrading to eslint8 solved the issue for now.

- Decided to use Material UI with a custom theme (see src/utils/material-theme.ts) to match the figma designs.

## Mocking

- Updated the type on Location.Robot to support undefined because the instructions suggests that a robot might not be assigned to a location.

- Updated the PUT to use a new constructor because trying to return `HttpResponse.json(null, { status: 204 }) was throwing errors about trying to pass null for body
