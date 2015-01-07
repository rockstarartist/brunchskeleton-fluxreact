/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
/**
*    var React = require('react');
*
*    var TodoApp = require('./components/TodoApp.react');
*
*    React.render(
*      <TodoApp />,
*      document.getElementById('todoapp')
*    );
**/

//the require library is configuring paths 
require.config({
    paths: {
        "jquery": "bower_components/jquery/dist/jquery",
        "react": "bower_components/react/react-with-addons",
        "flux": "bower_components/flux/dist/Flux",
        "todoapp" : "./components/TodoApp.react"
    },
        //how long the it tries to load a script before giving up, the default is 7
    waitSeconds: 10
});
//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery', 'react', 'flux', 'todoapp'], function(jquery, React, Flux, TodoApp){
    new TodoApp;
    
    React.render(
        <TodoApp />,
        document.getElementById('todoapp')
    );
});