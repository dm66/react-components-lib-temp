// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/wenmq/Documents/myWork/test-dumi-lib/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/wenmq/Documents/myWork/test-dumi-lib/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/wenmq/Documents/myWork/test-dumi-lib/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/button",
        "component": require('/Users/wenmq/Documents/myWork/test-dumi-lib/src/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Button/index.md",
          "updatedTime": 1662618253508,
          "componentName": "Button",
          "slugs": [
            {
              "depth": 2,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 2,
              "value": "Button",
              "heading": "button-1"
            },
            {
              "depth": 2,
              "value": "Button",
              "heading": "button-2"
            }
          ],
          "title": "Button",
          "hasPreviewer": true,
          "group": {
            "path": "/button",
            "title": "Button"
          }
        },
        "title": "Button - test-dumi-lib"
      },
      {
        "path": "/foo",
        "component": require('/Users/wenmq/Documents/myWork/test-dumi-lib/src/Foo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Foo/index.md",
          "updatedTime": 1662606181385,
          "componentName": "Foo",
          "slugs": [
            {
              "depth": 2,
              "value": "Foo",
              "heading": "foo"
            }
          ],
          "title": "Foo",
          "hasPreviewer": true,
          "group": {
            "path": "/foo",
            "title": "Foo"
          }
        },
        "title": "Foo - test-dumi-lib"
      },
      {
        "path": "/",
        "component": require('/Users/wenmq/Documents/myWork/test-dumi-lib/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1662619774564,
          "slugs": [
            {
              "depth": 2,
              "value": "Hello test-dumi-lib!",
              "heading": "hello-test-dumi-lib"
            }
          ],
          "title": "Hello test-dumi-lib!"
        },
        "title": "Hello test-dumi-lib! - test-dumi-lib"
      }
    ],
    "title": "test-dumi-lib",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
