const projects = [
	{ id: 1, name: 'Option 1', probability: 0.3 },
	{ id: 2, name: 'Option 2', probability: 0.5 },
	{ id: 3, name: 'Option 3', probability: 0.15 },
	{ id: 4, name: 'Option 4', probability: 0.05 }
];

const randomItem = input =>
	projects.find((item, i) => {
    	const sum = projects.slice(0, i + 1).reduce((acc, item) => {
            return acc + item.probability;
        }, 0);
      return input < sum;
    });

const [item1, item2, item3, item4] = [[], [], [], []];

const itemMapping = {
  [projects[0]['id']]: item1,
  [projects[1]['id']]: item2,
  [projects[2]['id']]: item3,
  [projects[3]['id']]: item4,
};

let times = 0;

while (times < 500) { 
  times++;
  const item = randomItem(Math.random());
  itemMapping[item.id].push(item);
}

for (const [key, value] of Object.entries(itemMapping)) {
  console.log(`ID ${key} - was called ${value.length} times`);
}
