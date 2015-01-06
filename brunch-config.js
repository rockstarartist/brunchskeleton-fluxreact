exports.config = {
    "modules": {
        "definition" : false,
        "wrapper" : false
    },
    "files": {
        "stylesheets": {
            "defaultExtension": "css",
            "joinTo": {
                "css/app.css": /^app\/styles/,
                "css/vendor.css": /^(bower_components|vendor)/
            }
        },
        "javascripts": {
            "joinTo": {
                "js/require.js": /^bower_components\/requirejs/,
                "js/app.js": /^app/,
                "js/vendor.js": /^(bower_components|vendor)\/(?!requirejs)/,
                "test/js/test.js": /^test(\/|\\)(?!vendor)/,
                "test/js/test-vendor.js": /^test(\/|\\)(?=vendor)/
            },
            "order": {
                "before": [],
                "after": []
            }
        }
    },
    "plugins": {
        "react": {
            "harmony": true
        }
    },
    "sourceMaps" : false
};