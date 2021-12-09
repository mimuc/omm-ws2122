/**
 * The model holds all data plus accessors and mutators
 */
var Model = /** @class */ (function () {
    function Model() {
        this.c = 0;
    }
    // TODO: Trigger View update via Controller
    Model.prototype.notify = function () {
    };
    Object.defineProperty(Model.prototype, "count", {
        /** Current counter value */
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    /** Increment the counter */
    Model.prototype.inc = function () {
        this.c++;
        this.notify();
    };
    /** Decrement the counter */
    Model.prototype.dec = function () {
        this.c--;
        this.notify();
    };
    return Model;
}());
/**
 * The view manages all interaction with the DOM:
 * - Attaching event listeners
 * - Updating outputs
 */
var View = /** @class */ (function () {
    function View(initalModel) {
        this.output = document.getElementById('output');
        document.getElementById('incBtn').addEventListener('click', function () {
            // TODO: Trigger Model update via Controller
        });
        document.getElementById('decBtn').addEventListener('click', function () {
            // TODO: Trigger Model update via Controller
        });
    }
    View.prototype.update = function (model) {
        this.output.innerText = model.count.toString(10);
    };
    return View;
}());
/**
 * The controller is the bridge between model and view,
 * passing around updates and events.
 */
var Controller = /** @class */ (function () {
    function Controller() {
        var model = new Model();
        var view = new View(model);
        // TODO: Link Model notify to View update
        // TODO: Link View events to Model method calls
    }
    return Controller;
}());
