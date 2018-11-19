# \<plutonium-chart\>

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/lordoftheflies/plutonium-chart)

Polymer 3.0 based ChartJS wrapper.

## P

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="plutonium-bar-chart.html">
    <link rel="import" href="plutonium-line-chart.html">
    
    <script>
        let lineChart0 = document.getElementById('lineChart0');
        lineChart0.data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "rgba(220,220,220,0.2)",
                    borderColor: "rgba(220,220,220,1)",
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    backgroundColor: "rgba(151,187,205,0.2)",
                    borderColor: "rgba(151,187,205,1)",
                    borderWidth: 1,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    </script>
  </template>
</custom-element-demo>
```
-->
```html
<plutonium-line-chart id="lineChart0"></plutonium-line-chart>
```

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
