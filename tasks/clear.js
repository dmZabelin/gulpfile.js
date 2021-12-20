const del = require('del');
const clear = () => {
    return del($.path.root);
}
module.exports = clear;