import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import '/node_modules/chart.js/dist/Chart.min.js';
import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import {ChartContextMixin} from './plutonium-chart-context-mixin.js';
import {ChartPropertyMixin} from './plutonium-chart-property-mixin.js';
import {ChartResizeMixin} from "./plutonium-chart-resize-mixin";
import './plutonium-chart-styles.js';

/**
 * `plutonium-chart`
 * Chart visualization wrapper in Polymer for D3
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PlutoniumChart extends ChartContextMixin(ChartPropertyMixin(ChartResizeMixin(mixinBehaviors([
        IronResizableBehavior
    ], PolymerElement)))
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

window.customElements.define('plutonium-chart', PlutoniumChart);
