(self["webpackChunkgenerators"] = self["webpackChunkgenerators"] || []).push([["main"],{

/***/ 377:
/*!********************************!*\
  !*** ./src/components/flag.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var _carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carwin/flag-generator */ 830);
/* harmony import */ var _carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var startSeed = _carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1___default().Utilities.generateSeed();
var startColor = _carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1___default().Utilities.generateColor(startSeed);
console.log('start', startSeed);
var startFlag = new (_carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1___default().Flag)({
  id: "flag__canvas-container",
  aspectRatio: "3:5",
  divisionCount: 2,
  color: startColor.color,
  seed: startSeed
});
var initialState = {
  seed: +startFlag.seed,
  flag: startFlag
}; // @todo: modify flagGenerator() to accept an element or an ID to hook it's canvas on.

var Flag = /*#__PURE__*/function (_React$Component) {
  _inherits(Flag, _React$Component);

  var _super = _createSuper(Flag);

  function Flag(props) {
    var _this;

    _classCallCheck(this, Flag);

    _this = _super.call(this, props);
    _this.state = initialState;
    return _this;
  }

  _createClass(Flag, [{
    key: "getDivisionInfo",
    value: function getDivisionInfo(divisionIndex) {
      var _this2 = this;

      var getSubDivisionInfo = function getSubDivisionInfo(subDivisionIndex) {
        var subDivisionInfo = Object.keys(_this2.state.flag.divisions[divisionIndex][subDivisionIndex]).map(function (val, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            key: index + '_' + val
          }, "".concat(val, ": ").concat(_this2.state.flag.divisions[divisionIndex][subDivisionIndex][val]));
        });
        return subDivisionInfo;
      };

      var divisionInfo = Object.keys(this.state.flag.divisions[divisionIndex]).map(function (val, index) {
        if (_typeof(_this2.state.flag.divisions[divisionIndex][val]) === 'object') {
          var subDivisionInfo = getSubDivisionInfo(val);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            key: index + '_' + val
          }, val, ":", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, subDivisionInfo));
        } else {
          if (val !== 'seed' && val !== 'seedMultiplier') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
              key: index + '_' + val
            }, "".concat(val, ": ").concat(_this2.state.flag.divisions[divisionIndex][val]));
          }
        }
      });
      return divisionInfo;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // Draw the flag after the component has mounted.
      this.state.flag.drawFlag();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.state.flag.destroyFlag(prevProps.seed);
      this.state.flag.drawFlag();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var self = this;
      var divisionParams = this.state.flag.divisions.map(function (val, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: index + '_' + val
        }, _this3.state.flag.divisions[index].constructor.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, self.getDivisionInfo(index)));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "flag"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "flag__seed"
      }, "Seed string ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "\"", this.props.seedString, "\""), " generated seed: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, this.state.seed)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "flag__canvas-container"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "flag__attributes"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Color sucks"), ": ", this.state.flag.color.color), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Seed string"), ": ", this.props.seedString || 'none'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Generated seed"), ": ", this.state.seed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Aspect ratio"), ": ", this.state.flag.aspect.h, ":", this.state.flag.aspect.w), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Dimensions"), ": ", this.state.flag.dimensions.h, "x", this.state.flag.dimensions.w), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "# of Divisions"), ": ", this.state.flag.divisionCount, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, divisionParams)))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.seed !== prevState.seed) {
        var newState = {
          seed: nextProps.seed,
          flag: new (_carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1___default().Flag)({
            id: "flag__canvas-container",
            aspectRatio: "3:5",
            divisionCount: 2,
            seed: nextProps.seed
          })
        };
        return newState;
      }

      return null;
    }
  }]);

  return Flag;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flag);

/***/ }),

/***/ 896:
/*!************************************!*\
  !*** ./src/components/flagForm.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var _carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carwin/flag-generator */ 830);
/* harmony import */ var _carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flag */ 377);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var FlagForm = /*#__PURE__*/function (_React$Component) {
  _inherits(FlagForm, _React$Component);

  var _super = _createSuper(FlagForm);

  function FlagForm(props) {
    var _this;

    _classCallCheck(this, FlagForm);

    _this = _super.call(this, props);
    var starterSeed = _carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1___default().Utilities.generateSeed();
    _this.state = {
      seedString: '',
      lastSeedString: '',
      seed: starterSeed,
      lastSeed: starterSeed
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.generateRandom = _this.generateRandom.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FlagForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      console.log('event', event);

      if (event.target.id === 'form-seed') {
        this.setState({
          lastSeed: this.state.seed,
          seed: +event.target.value
        });
      }

      if (event.target.id === 'form-seedstring') {
        this.setState({
          seedString: event.target.value,
          lastSeed: this.state.seed,
          seed: _carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1___default().Utilities.generateSeed(event.target.value)
        });
      }
    }
  }, {
    key: "generateRandom",
    value: function generateRandom() {
      var newSeed = _carwin_flag_generator__WEBPACK_IMPORTED_MODULE_1___default().Utilities.generateSeed();
      console.log('new seed', newSeed);
      this.setState({
        lastSeed: this.state.seed,
        lastSeedString: this.state.seedString,
        seed: newSeed,
        seedString: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "seed string", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        id: "form-seedstring",
        type: "text",
        onChange: this.handleChange,
        value: this.state.seedString
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "seed", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        id: "form-seed",
        type: "number",
        onChange: this.handleChange,
        value: this.state.seed
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        id: "randomFlag",
        onClick: this.generateRandom
      }, "Random Flag"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_flag__WEBPACK_IMPORTED_MODULE_2__.default, {
        seedString: this.state.seedString,
        seed: this.state.seed
      }));
    }
  }]);

  return FlagForm;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlagForm);

/***/ }),

/***/ 579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 935);
/* harmony import */ var _components_flagForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/flagForm.js */ 896);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import flagGen from 'flag-generator';



function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ClickMe"),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flagForm_js__WEBPACK_IMPORTED_MODULE_2__.default, null);
}

(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById("root"));

/***/ })

},
0,[[579,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vc3JjL2NvbXBvbmVudHMvZmxhZy5qcyIsIndlYnBhY2s6Ly9nZW5lcmF0b3JzLy4vc3JjL2NvbXBvbmVudHMvZmxhZ0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdG9ycy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdGFydFNlZWQiLCJmbGFnR2VuIiwic3RhcnRDb2xvciIsImNvbnNvbGUiLCJsb2ciLCJzdGFydEZsYWciLCJpZCIsImFzcGVjdFJhdGlvIiwiZGl2aXNpb25Db3VudCIsImNvbG9yIiwic2VlZCIsImluaXRpYWxTdGF0ZSIsImZsYWciLCJGbGFnIiwicHJvcHMiLCJzdGF0ZSIsImRpdmlzaW9uSW5kZXgiLCJnZXRTdWJEaXZpc2lvbkluZm8iLCJzdWJEaXZpc2lvbkluZGV4Iiwic3ViRGl2aXNpb25JbmZvIiwiT2JqZWN0Iiwia2V5cyIsImRpdmlzaW9ucyIsIm1hcCIsInZhbCIsImluZGV4IiwiZGl2aXNpb25JbmZvIiwiZHJhd0ZsYWciLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJkZXN0cm95RmxhZyIsInNlbGYiLCJkaXZpc2lvblBhcmFtcyIsImNvbnN0cnVjdG9yIiwibmFtZSIsImdldERpdmlzaW9uSW5mbyIsInNlZWRTdHJpbmciLCJhc3BlY3QiLCJoIiwidyIsImRpbWVuc2lvbnMiLCJuZXh0UHJvcHMiLCJuZXdTdGF0ZSIsIlJlYWN0IiwiRmxhZ0Zvcm0iLCJzdGFydGVyU2VlZCIsImxhc3RTZWVkU3RyaW5nIiwibGFzdFNlZWQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZ2VuZXJhdGVSYW5kb20iLCJldmVudCIsInRhcmdldCIsInNldFN0YXRlIiwidmFsdWUiLCJuZXdTZWVkIiwiaGFuZGxlU3VibWl0IiwiQXBwIiwidXNlU3RhdGUiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TUQ7Ozs2QkFFUTtBQUNQLDBCQUNJLDJFQUNFO0FBQU0sZ0JBQVEsRUFBRSxLQUFLb0I7QUFBckIsc0JBQ0EsNEZBQ0E7QUFBTyxVQUFFLEVBQUMsaUJBQVY7QUFBNEIsWUFBSSxFQUFDLE1BQWpDO0FBQXdDLGdCQUFRLEVBQUUsS0FBS1IsWUFBdkQ7QUFBcUUsYUFBSyxFQUFFLEtBQUtqQyxLQUFMLENBQVdxQjtBQUF2RixRQURBLENBREEsZUFJQSxxRkFDQTtBQUFPLFVBQUUsRUFBQyxXQUFWO0FBQXNCLFlBQUksRUFBQyxRQUEzQjtBQUFvQyxnQkFBUSxFQUFFLEtBQUtZLFlBQW5EO0FBQWlFLGFBQUssRUFBRSxLQUFLakMsS0FBTCxDQUFXTDtBQUFuRixRQURBLENBSkEsQ0FERixlQVNBO0FBQVEsVUFBRSxFQUFDLFlBQVg7QUFBd0IsZUFBTyxFQUFFLEtBQUt3QztBQUF0Qyx1QkFUQSxlQVVFLGlEQUFDLDBDQUFEO0FBQU0sa0JBQVUsRUFBRSxLQUFLbkMsS0FBTCxDQUFXcUIsVUFBN0I7QUFBeUMsWUFBSSxFQUFFLEtBQUtyQixLQUFMLENBQVdMO0FBQTFELFFBVkYsQ0FESjtBQWNEOzs7O0VBMURvQmlDLDRDOztBQThEdkIsaUVBQWVDLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0NBR0E7O0FBQ0E7O0FBRUEsU0FBU2EsR0FBVCxHQUFlO0FBQUEsa0JBQ2FDLCtDQUFRLENBQUMsU0FBRCxDQURyQjtBQUFBO0FBQUEsTUFDTjNDLEtBRE07QUFBQSxNQUNDc0MsUUFERDs7QUFFYixzQkFBTyxpREFBQyw0REFBRCxPQUFQO0FBQ0Q7O0FBRURNLGlEQUFNLGVBQUMsaURBQUMsR0FBRCxPQUFELEVBQVVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFWLENBQU4sQyIsImZpbGUiOiJtYWluLmQxYWU1YThkZjRhODdmZjNjMzlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmbGFnR2VuIGZyb20gJ0BjYXJ3aW4vZmxhZy1nZW5lcmF0b3InO1xuXG5jb25zdCBzdGFydFNlZWQgPSBmbGFnR2VuLlV0aWxpdGllcy5nZW5lcmF0ZVNlZWQoKTtcbmNvbnN0IHN0YXJ0Q29sb3IgPSBmbGFnR2VuLlV0aWxpdGllcy5nZW5lcmF0ZUNvbG9yKHN0YXJ0U2VlZCk7XG5jb25zb2xlLmxvZygnc3RhcnQnLCBzdGFydFNlZWQpO1xuXG5jb25zdCBzdGFydEZsYWcgPSBuZXcgZmxhZ0dlbi5GbGFnKHtcbiAgaWQ6IFwiZmxhZ19fY2FudmFzLWNvbnRhaW5lclwiLFxuICBhc3BlY3RSYXRpbzogXCIzOjVcIixcbiAgZGl2aXNpb25Db3VudDogMixcbiAgY29sb3I6IHN0YXJ0Q29sb3IuY29sb3IsXG4gIHNlZWQ6IHN0YXJ0U2VlZFxufSk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2VlZDogK3N0YXJ0RmxhZy5zZWVkLFxuICBmbGFnOiBzdGFydEZsYWcsXG59XG5cbi8vIEB0b2RvOiBtb2RpZnkgZmxhZ0dlbmVyYXRvcigpIHRvIGFjY2VwdCBhbiBlbGVtZW50IG9yIGFuIElEIHRvIGhvb2sgaXQncyBjYW52YXMgb24uXG5jbGFzcyBGbGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uSW5mbyhkaXZpc2lvbkluZGV4KSB7XG4gICAgY29uc3QgZ2V0U3ViRGl2aXNpb25JbmZvID0gKHN1YkRpdmlzaW9uSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1YkRpdmlzaW9uSW5mbyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZmxhZy5kaXZpc2lvbnNbZGl2aXNpb25JbmRleF1bc3ViRGl2aXNpb25JbmRleF0pLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXgrJ18nK3ZhbH0+e2Ake3ZhbH06ICR7dGhpcy5zdGF0ZS5mbGFnLmRpdmlzaW9uc1tkaXZpc2lvbkluZGV4XVtzdWJEaXZpc2lvbkluZGV4XVt2YWxdfWB9PC9saT5cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN1YkRpdmlzaW9uSW5mbztcbiAgICB9XG4gICAgY29uc3QgZGl2aXNpb25JbmZvID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5mbGFnLmRpdmlzaW9uc1tkaXZpc2lvbkluZGV4XSkubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUuZmxhZy5kaXZpc2lvbnNbZGl2aXNpb25JbmRleF1bdmFsXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25JbmZvID0gZ2V0U3ViRGl2aXNpb25JbmZvKHZhbCk7XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleCsnXycrdmFsfT57dmFsfTo8dWw+e3N1YkRpdmlzaW9uSW5mb308L3VsPjwvbGk+XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsICE9PSAnc2VlZCcgJiYgdmFsICE9PSAnc2VlZE11bHRpcGxpZXInKSB7XG4gICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4KydfJyt2YWx9PntgJHt2YWx9OiAke3RoaXMuc3RhdGUuZmxhZy5kaXZpc2lvbnNbZGl2aXNpb25JbmRleF1bdmFsXX1gfTwvbGk+XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkaXZpc2lvbkluZm87XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBEcmF3IHRoZSBmbGFnIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIG1vdW50ZWQuXG4gICAgdGhpcy5zdGF0ZS5mbGFnLmRyYXdGbGFnKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlLmZsYWcuZGVzdHJveUZsYWcocHJldlByb3BzLnNlZWQpO1xuICAgIHRoaXMuc3RhdGUuZmxhZy5kcmF3RmxhZygpO1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChuZXh0UHJvcHMuc2VlZCAhPT0gcHJldlN0YXRlLnNlZWQpIHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICBzZWVkOiBuZXh0UHJvcHMuc2VlZCxcbiAgICAgICAgZmxhZzogbmV3IGZsYWdHZW4uRmxhZyh7aWQ6IFwiZmxhZ19fY2FudmFzLWNvbnRhaW5lclwiLCBhc3BlY3RSYXRpbzogXCIzOjVcIiwgZGl2aXNpb25Db3VudDogMiwgc2VlZDogbmV4dFByb3BzLnNlZWR9KSxcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZGl2aXNpb25QYXJhbXMgPSB0aGlzLnN0YXRlLmZsYWcuZGl2aXNpb25zLm1hcCgodmFsLCBpbmRleCkgPT5cbiAgICAgICAgPGxpIGtleT17aW5kZXgrJ18nK3ZhbH0+e3RoaXMuc3RhdGUuZmxhZy5kaXZpc2lvbnNbaW5kZXhdLmNvbnN0cnVjdG9yLm5hbWV9XG4gICAgICAgIDx1bD57c2VsZi5nZXREaXZpc2lvbkluZm8oaW5kZXgpfTwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsYWdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGFnX19zZWVkXCI+XG4gICAgICAgICAgU2VlZCBzdHJpbmcgPHN0cm9uZz5cInt0aGlzLnByb3BzLnNlZWRTdHJpbmd9XCI8L3N0cm9uZz4gZ2VuZXJhdGVkIHNlZWQ6IDxzdHJvbmc+e3RoaXMuc3RhdGUuc2VlZH08L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJmbGFnX19jYW52YXMtY29udGFpbmVyXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsYWdfX2F0dHJpYnV0ZXNcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5Db2xvciBzdWNrczwvc3Ryb25nPjoge3RoaXMuc3RhdGUuZmxhZy5jb2xvci5jb2xvcn08L2xpPlxuICAgICAgICAgICAgPGxpPjxzdHJvbmc+U2VlZCBzdHJpbmc8L3N0cm9uZz46IHt0aGlzLnByb3BzLnNlZWRTdHJpbmcgfHwgJ25vbmUnfTwvbGk+XG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5HZW5lcmF0ZWQgc2VlZDwvc3Ryb25nPjoge3RoaXMuc3RhdGUuc2VlZH08L2xpPlxuICAgICAgICAgICAgPGxpPjxzdHJvbmc+QXNwZWN0IHJhdGlvPC9zdHJvbmc+OiB7dGhpcy5zdGF0ZS5mbGFnLmFzcGVjdC5ofTp7dGhpcy5zdGF0ZS5mbGFnLmFzcGVjdC53fTwvbGk+XG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5EaW1lbnNpb25zPC9zdHJvbmc+OiB7dGhpcy5zdGF0ZS5mbGFnLmRpbWVuc2lvbnMuaH14e3RoaXMuc3RhdGUuZmxhZy5kaW1lbnNpb25zLnd9PC9saT5cbiAgICAgICAgICAgIDxsaT48c3Ryb25nPiMgb2YgRGl2aXNpb25zPC9zdHJvbmc+OiB7dGhpcy5zdGF0ZS5mbGFnLmRpdmlzaW9uQ291bnR9XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7ZGl2aXNpb25QYXJhbXN9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRmxhZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmxhZ0dlbiBmcm9tICdAY2Fyd2luL2ZsYWctZ2VuZXJhdG9yJztcbmltcG9ydCBGbGFnIGZyb20gJy4vZmxhZyc7XG5cbmNsYXNzIEZsYWdGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHN0YXJ0ZXJTZWVkID0gZmxhZ0dlbi5VdGlsaXRpZXMuZ2VuZXJhdGVTZWVkKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VlZFN0cmluZzogJycsXG4gICAgICBsYXN0U2VlZFN0cmluZzogJycsXG4gICAgICBzZWVkOiBzdGFydGVyU2VlZCxcbiAgICAgIGxhc3RTZWVkOiBzdGFydGVyU2VlZCxcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2VuZXJhdGVSYW5kb20gPSB0aGlzLmdlbmVyYXRlUmFuZG9tLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2Zvcm0tc2VlZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xhc3RTZWVkOiB0aGlzLnN0YXRlLnNlZWQsIHNlZWQ6ICtldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2Zvcm0tc2VlZHN0cmluZycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWVkU3RyaW5nOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhc3RTZWVkOiB0aGlzLnN0YXRlLnNlZWQsXG4gICAgICAgIHNlZWQ6IGZsYWdHZW4uVXRpbGl0aWVzLmdlbmVyYXRlU2VlZChldmVudC50YXJnZXQudmFsdWUpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb20oKSB7XG4gICAgY29uc3QgbmV3U2VlZCA9IGZsYWdHZW4uVXRpbGl0aWVzLmdlbmVyYXRlU2VlZCgpO1xuICAgIGNvbnNvbGUubG9nKCduZXcgc2VlZCcsIG5ld1NlZWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGFzdFNlZWQ6IHRoaXMuc3RhdGUuc2VlZCxcbiAgICAgIGxhc3RTZWVkU3RyaW5nOiB0aGlzLnN0YXRlLnNlZWRTdHJpbmcsXG4gICAgICBzZWVkOiBuZXdTZWVkLFxuICAgICAgc2VlZFN0cmluZzogJycsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbD5zZWVkIHN0cmluZ1xuICAgICAgICAgIDxpbnB1dCBpZD1cImZvcm0tc2VlZHN0cmluZ1wiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWVkU3RyaW5nfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPnNlZWRcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJmb3JtLXNlZWRcIiB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWVkfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uIGlkPVwicmFuZG9tRmxhZ1wiIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVSYW5kb219PlJhbmRvbSBGbGFnPC9idXR0b24+XG4gICAgICAgICAgPEZsYWcgc2VlZFN0cmluZz17dGhpcy5zdGF0ZS5zZWVkU3RyaW5nfSBzZWVkPXt0aGlzLnN0YXRlLnNlZWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGFnRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vIGltcG9ydCBmbGFnR2VuIGZyb20gJ2ZsYWctZ2VuZXJhdG9yJztcbmltcG9ydCBGbGFnRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvZmxhZ0Zvcm0uanMnO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXCJDbGlja01lXCIpO1xuICByZXR1cm4gPEZsYWdGb3JtIC8+XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==