exports.config = {
    "files": {
        "stylesheets": {
            "defaultExtension": "css",
            "joinTo": {
                "css/app.css": "/^app/",
                "css/vendor.css": "/^vendor/"
            },
            "order": {
                "before": ["vendor/styles/bootstrap.css"]
            }
        },
        "javascripts": {
            "joinTo":{
                "js/app.js": "^app\/actions|app\/components|app\/constants|app\/dispatcher|app\/stores|app",
                "js/vendor.js": "^vendor",
                "test/js/test.js": "^test(\/|\\)(?!vendor)",
                "test/js/test-vendor.js": "^test(\/|\\)(?=vendor)"
            },
            "order": {
                "before": [],
                "after": []
            }
        }
    }
};