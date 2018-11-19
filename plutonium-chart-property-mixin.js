// Create my namespace, if it doesn't exist
if (!window.Plutonium) {
    window.Plutonium = {};
}

Fmeter.ChartPropertyMixin = Polymer.dedupingMixin((superClass) => class extends superClass {
    static get properties() {
        return {
            type: {
                type: String,
                readOnly: true,
                notify: true,
                value: 'bar',
            },
            chart: {
                type: Object,
                notify: true
            },
            data: {
                type: Object,
                notify: true,
                value: () => {
                    return {
                        // datasets: [{
                        //     label: 'dBuV/m',
                        //     title: 'Hz',
                        //     fill: false,
                        //     lineTension: 0,
                        //     pointRadius: 0,
                        //     pointBorderWidth: 0,
                        //     borderWidth: 1,
                        //     pointBorderColor: 'transparent',
                        //     pointBackgroundColor: 'transparent',
                        //     borderColor: 'rgba(0, 76, 153, 0.9)',
                        //     data: [70, 80],
                        // }]
                    }
                }
            },
            options: {
                type: Object,
                notify: true,
                value: () => {
                    return {
                        tooltips: {
                            intersect: false,
                            enabled: true,
                            mode: 'nearest',
                            callbacks: {

                                title: function (tooltipItems, data) {
                                    return tooltipItems[0].xLabel;

                                },
                                label: function (tooltipItem, data) {
                                    return tooltipItem.yLabel + ' dBuV/m';
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: ''
                        },
                        legend: {display: false},
                        animation: {
                            duration: 0
                        },
                        plugins: {
                            datalabels: {
                                formatter: function (data) {
                                    return (null);
                                }
                            }
                        },
                        // scales: {
                        //     yAxes: [{
                        //         scaleLabel: {
                        //             display: true,
                        //             labelString: 'dBuV/m'
                        //         },
                        //     }],
                        //     xAxes: [{
                        //         type: 'linear',
                        //         ticks: {
                        //             autoSkip: true,
                        //             maxTicksLimit: 20,
                        //             callback: function (value, index, values) {
                        //                 return formatHertz(value);
                        //             }
                        //         }
                        //     }]
                        // }
                    };
                }
            },
        };
    }

    static get observers() {
        return [
            '_configurationChanged(data.*, options.*)'
        ];
    }

    _configurationChanged(dataRecord, optionsRecord) {
        if (dataRecord.base.labels && dataRecord.base.datasets) {
            this.hasData = true;
        } else {
            this.hasData = false;
        }
        if (this.hasData && this.isAttached) {
            this._queue();
        }
    }
});