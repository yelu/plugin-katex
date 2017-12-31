var katex = require("katex");

module.exports = {
    book: {
        assets: "./static",
        js: [],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        css: [
            "katex.min.css"
        ]
    },
    blocks: {
        math: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$",
                end: "$"
            },
            process: function(blk) {
                var tex = blk.body;
                var isInline = !(tex[0] == "$");
                var output = "";
                if(isInline){
                    output = katex.renderToString(tex, {
                    displayMode: !isInline
                    });
                }
                else{
                    output = katex.renderToString(tex.substr(1, tex.length - 2), {
                    displayMode: !isInline
                    });
                }

                return output;
            }
        }
    }
};
