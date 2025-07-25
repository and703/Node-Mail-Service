const { Service } = require('node-windows');
const path = require('path');

const svc = new Service({
  name: 'Node Mail Service',
  description: 'REST-based mail sending service',
  script: path.join(__dirname, 'src', 'server.js'),
});

const action = process.argv[2];

if (action === 'install') {
  svc.on('install', () => {
    console.log('Service installed');
    svc.start();
  });
  svc.install();
} else if (action === 'uninstall') {
  svc.on('uninstall', () => {
    console.log('Service uninstalled');
  });
  svc.uninstall();
} else {
  console.log('Usage: node service.js install | uninstall');
}
