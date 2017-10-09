"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DHR = function (_Component) {
    _inherits(DHR, _Component);

    function DHR(props) {
        _classCallCheck(this, DHR);

        var _this = _possibleConstructorReturn(this, (DHR.__proto__ || Object.getPrototypeOf(DHR)).call(this, props));

        _this.loadContent = _this.loadContent.bind(_this);
        _this.success = _this.success.bind(_this);
        _this.state = {
            width: 0,
            isDisplay: false
        };
        return _this;
    }

    _createClass(DHR, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            if (!Boolean(window.adog)) window.adog = {};
            window.adog.dhr = {
                set: this.loadContent,
                done: this.success
            };
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                {
                    style: {
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "5px",
                        backgroundColor: "transparent",
                        zIndex: "10"
                    } },
                _react2.default.createElement("div", {
                    style: {
                        transition: this.props.delay + "s all" || "0.2s all",
                        height: this.state.isDisplay ? "100%" : "0",
                        width: this.state.width + "%",
                        backgroundColor: this.props.color || "lightblue"
                    } })
            );
        }
    }, {
        key: "success",
        value: function success() {
            var _this2 = this;

            clearTimeout(this.stopper);
            this.loadContent(100);
            this.stopper = setTimeout(function () {
                _this2.setState({
                    isDisplay: false
                }, function () {
                    _this2.stopper = setTimeout(function () {
                        _this2.setState({
                            width: 0
                        });
                    }, _this2.props.delay * 1000);
                });
            }, this.props.delay * 2000);
        }
    }, {
        key: "loadContent",
        value: function loadContent(howmuch) {
            var _this3 = this;

            clearTimeout(this.stopper);
            if (this.state.isDisplay) {
                this.setState({
                    width: howmuch < 100 ? howmuch > 0 ? howmuch : 0 : 100
                });
            } else {
                this.setState({
                    isDisplay: true
                }, function () {
                    _this3.stopper = setTimeout(function () {
                        _this3.setState({
                            width: howmuch < 100 ? howmuch > 0 ? howmuch : 0 : 100
                        });
                    }, _this3.props.delay * 1000);
                });
            }
        }
    }]);

    return DHR;
}(_react.Component);

exports.default = DHR;
//# sourceMappingURL=dhr.js.map