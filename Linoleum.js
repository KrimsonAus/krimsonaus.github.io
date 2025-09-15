const fs = require("fs");
const path = require("path");

module.exports = {
    test: "you are tested 🦑🦑🦑",
    print(out) {
        console.log(out);
    },
    floor: "🐯",
    saveToFile(pth, data, callback) {
        fs.appendFile(path.join(__dirname, pth), data, (err) => {
            if (err) {
                console.error(err);
                if (callback) callback(err);
                return;
            }
            if (callback) callback(null);
        });
    },
    readFile(pth, callback) {
        fs.readFile(path.join(__dirname, pth), (err, out) => {
            if (err) {
                console.error(err);
                callback(err, null);
                return;
            }

            callback(null, out.toString());
        });
    },
    sushi(no){
        let sushi = ["🍙","🍚","🍜","🍢","🍣","🍤","🍥","🥟"]
        return sushi[no];
    }
}