YUI.add('rectnostroke-benchmark', function (Y) {
    Y.BenchmarkSuite = new Benchmark.Suite();
    var suite = Y.BenchmarkSuite,
        graphic,
        container = document.createElement('div');
    container.style.left = "10px";
    container.style.top = "10px";
    container.style.width = "600px";
    container.style.height = "300px";
    container.id = "container";
    document.body.appendChild(container);

    suite.add("RectNoStroke", function() {
        var rect = graphic.addShape({
                type: "rect",
                width: 16,
                height: 8,
                fill: {
                    color: "#9aa"
                },
                stroke: null
            });
    }, {
        onStart: function() {
            graphic = new Y.Graphic({
                render: container
            });
        },

        onComplete: function() {
            graphic.destroy();
        }
    });

}, '@VERSION@', {requires: ['graphics']});
