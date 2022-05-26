const File = require('./file.js');
const Folder = require('./folder.js');

var rootFolder = new Folder('Root');
rootFolder.add(new Folder('Folder1'));
rootFolder.add(new Folder('Folder2'));

var complexFolder = new Folder('Folder3');
complexFolder.add(new Folder('Folder4'));
complexFolder.add(new File('NewFile.xml'));
complexFolder.add(new File('NewFile2.xml'));

rootFolder.add(complexFolder);

rootFolder.displayChildren('');