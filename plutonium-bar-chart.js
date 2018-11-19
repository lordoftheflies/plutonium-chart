import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import 'chart.js/dist/Chart.min.js';
import 'plutonium-chart-context-mixin.js';
import 'plutonium-chart-property-mixin.js';
import 'plutonium-chart-resize-mixin.js';
import 'plutonium-chart-styles.js';

/**
 * `plutonium-chart`
 * Chart visualization wrapper in Polymer for D3
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PlutoniumBarChart extends window.Plutonium.ChartContextMixin(
    window.Plutonium.ChartPropertyMixin(
        window.Plutonium.ChartResizeMixin(
            Polymer.mixinBehaviors([
                window.Polymer.IronResizableBehavior
            ], PolymerElement)
        )
    )
) {
    static get template() {
        return html`
       <style include="plutonium-chart-styles"></style>

        <div>
          <canvas id="canvas"></canvas>
        </div>
    `;
    }

    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'plutonium-chart',
            },
        };
    }
}

window.customElements.define('plutonium-bar-chart', PlutoniumBarChart);
