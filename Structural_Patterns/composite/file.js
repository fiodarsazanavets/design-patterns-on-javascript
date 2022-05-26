const Component = require('./component.js');

class File extends Component
{

    display(currentPath)
    {
        console.log(currentPath + this.getName());
    }

    constructor(name) {
        super(name);
    }
}

module.exports = File;