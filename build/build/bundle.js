var fs = require('fs'),
    path = require('path');

module.exports = {
    bundle: function () {
        var fs = require('fs'),
            crypto = require('crypto'),
            shasum = crypto.createHash('md5'),
            files = [
                "lib/js/cards.js",
                "lib/js/cardSelector.js"
            ],
            include = function (files, transform) {
                files = files.map ? files : [files];
                return files.map(function (file) {
                    var str = fs.readFileSync(file, "utf-8") + "\n";
                    return transform ? transform(str, file) : str;
                }).join('\n');
            },
            transformCallback = function (file, path) {
                return "define('" + path.replace(/lib\/js\//, "").replace(/\.js$/, "") +
                       "', function (require, exports, module) {\n" + file + "});\n";
            },

            output = "",//webworks.js output
            clientFilesPath,
            wwHash,
            wwInfoModule,

            //output sections
            pre_injection,
            post_injection;


        //include LICENSE
        pre_injection = "";

        //Open closure
        pre_injection += "(function () { \n";

        //include require
        pre_injection += include("dependencies/almond/almond.js");

        //include modules
        pre_injection += include(files, transformCallback);

        //include window.webworks
        post_injection = include("lib/js/main.js");

        //Close closure
        post_injection += "\n}());";

        //output
        output = pre_injection + post_injection;

        //create output folder if it doesn't exist
        clientFilesPath = __dirname.replace(/\\/g, '/') + "/../../html/js";
        if (!path.existsSync(clientFilesPath)) {
            fs.mkdirSync(clientFilesPath, "0777"); //full permissions
        }

        //Create main.js file
        fs.writeFileSync(clientFilesPath + "/main.js", output);
    }
};
