exports.config = {
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
                "js/app.js": /^app/,
                "js/vendor.js": /^(bower_components|vendor)/,
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
    }
};