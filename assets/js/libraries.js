
/*
    Possible traits:
    -----------------------------------------------
    server-side, abstracted-dispatcher, framework,
    actions, stores, dispatcher, constants
    -----------------------------------------------
*/

module.exports = [
    {
        name: 'DeLorean.js',
        repo: 'https://github.com/deloreanjs/delorean',
        site: 'http://deloreanjs.com/',
        description: 'A completely agnostic JavaScript framework to apply Flux concepts into your interfaces easily.',
        traits: [ 'actions', 'stores', 'dispatcher' ]
    },
    {
        name: 'Fluxible',
        repo: 'https://github.com/yahoo/fluxible',
        description: 'Pluggable container for isomorphic flux applications that provides interfaces that are common throughout the Flux architecture and restricts usage of these APIs to only the parts that need them to enforce the unidirectional flow.',
        traits: [ 'actions', 'stores', 'abstracted-dispatcher', 'server-side' ]
    },
    {
        name: 'Fluxxor',
        repo: 'https://github.com/BinaryMuse/fluxxor',
        site: 'http://fluxxor.com/',
        description: 'Fluxxor is a set of tools to facilitate building JavaScript data layers using the Flux architecture by reifying many of the core Flux concepts.',
        traits: [ 'actions', 'stores', 'abstracted-dispatcher' ]
    },
    {
        name: 'Fluxy',
        repo: 'https://github.com/jmreidy/fluxy',
        site: 'http://deloreanjs.com/',
        description: 'An implementation of Facebook\'s Flux architecture',
        traits: [ 'actions', 'stores', 'dispatcher', 'constants', 'server-side' ]
    },
    {
        name: 'Marty',
        repo: 'https://github.com/jhollingworth/marty',
        site: 'http://martyjs.org/',
        description: 'A Javascript library for state management in React applications.',
        traits: [ 'actions', 'stores', 'dispatcher', 'constants' ]
    },
    {
        name: 'McFly',
        repo: 'https://github.com/kenwheeler/mcfly',
        site: 'http://kenwheeler.github.io/mcfly/',
        description: 'Flux architecture made easy.',
        traits: [ 'actions', 'stores', 'dispatcher' ]
    },
    {
        name: 'Reflux',
        repo: 'https://github.com/spoike/refluxjs',
        site: 'http://deloreanjs.com/',
        description: 'A simple library for unidirectional dataflow architecture inspired by ReactJS Flux.',
        traits: [ 'actions', 'stores', 'abstracted-dispatcher' ]
    },
    {
        name: 'Tuxx',
        repo: 'https://github.com/TuxedoJS/TuxedoJS',
        site: 'https://tuxedojs.org/',
        description: 'Tuxx is a feature complete framework built on the React view layer, Flux Architecture, and CommonJS modules.',
        traits: [ 'actions', 'stores', 'abstracted-dispatcher', 'framework' ]
    }
];
