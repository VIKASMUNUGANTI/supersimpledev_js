function processObjectsDelayed(a, delay) {
    a.forEach(obj => {
        setTimeout(function() {
            obj.process();
        }, delay);
    });
}

const items = [
  { name: "Alpha", process: function() { console.log(`Processing: ${this.name}`); } },
  { name: "Beta", process: function() { console.log(`Task for ${this.name} done.`); } }
];

processObjectsDelayed(items, 8000);
