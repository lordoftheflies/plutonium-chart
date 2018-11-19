// Create my namespace, if it doesn't exist
if (!window.Plutonium) {
    window.Plutonium = {};
}

Plutonium.ChartResizeMixin = Polymer.dedupingMixin((superClass) => class extends superClass {
    static get properties() {
        return {
            type: {
                type: String,
                readOnly: true,
                value: 'bar',
            },
            chart: {
                notify: true
            },
            data: {
                type: Object,
                value: function () {
                    return {};
                }
            },
            options: {
                type: Object,
                value: function () {
                    return {};
                }
            },
        };
    }

    static get observers() {
        return [
            '_configurationChanged(data.*, options.*)'
        ];
    }

    ready() {
        super.ready();
        this.addEventListener('iron-resize', this._onIronResize)
    }

    // If an iron-resizer changes our size and notifies us
    // check to see if we have a height and if so, recreate
    // the chart
    _onIronResize() {
        this._queue();
    }

    // This is a public method the user can call if they've
    // changed our dimensions with CSS.
    resize() {
        if (this.chart) {
            this.chart.resize();
            this.chart.render(true);
        }
    }

});