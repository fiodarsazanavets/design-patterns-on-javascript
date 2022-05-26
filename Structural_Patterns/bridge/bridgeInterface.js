class BridgeInterface {

    implementation;

    getData() {
        if (this.implementation === null) {
            console.log('No data.');
            return;
        }

        var data = this.implementation.getData();

        for (var i; i < data.length; i++) {
            console.log(data[i] + '\n');
        }
    }

    insertData(item) {
        this.implementation.insertData(item);
    }

}

module.exports = BridgeInterface;