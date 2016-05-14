# Garden Planner

## Intro

Planting and Harvesting Calendar: Displays a list of vegetables with the best times to plant (indoors and outdoors) and when to harvest.

Fork the repo and improve the app, or add your own vegetables via the console:

```javascript
Crops.insert({
	name: 'New veg',
	type: 'veg',
	calendar: {
		indoors: [1, 2, 3], // jan, feb, mar
		outdoors: [4, 5, 6], // apr, may, jun
		harvest: [8, 9] // aug, sep
	},
	favourite: false
});
```

## Running

Install meteorjs then...

```bash
git clone https://github.com/bobbigmac/garden-planner.git
cd garden-planner
meteor
```

## TODO

* Log your own planting times, and derive estimated growth-phase dates.
* Garden design/layout, maybe