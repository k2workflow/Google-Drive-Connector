(function () {
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            reject(error);
            return;
        }

        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }

    function _asyncToGenerator(fn) {
        return function () {
            var self = this,
                args = arguments;
            return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }

                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }

                _next(undefined);
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }

        return keys;
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }

        return target;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        }

        return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
        return function () {
            var Super = _getPrototypeOf(Derived),
                result;

            if (_isNativeReflectConstruct()) {
                var NewTarget = _getPrototypeOf(this).constructor;

                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
        };
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _createForOfIteratorHelper(o) {
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
                var i = 0;

                var F = function () {};

                return {
                    s: F,
                    n: function () {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: F
                };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var it,
            normalCompletion = true,
            didErr = false,
            err;
        return {
            s: function () {
                it = o[Symbol.iterator]();
            },
            n: function () {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function (e) {
                didErr = true;
                err = e;
            },
            f: function () {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally {
                    if (didErr) throw err;
                }
            }
        };
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
        return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var runtime_1 = createCommonjsModule(function (module) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var runtime = function (exports) {

            var Op = Object.prototype;
            var hasOwn = Op.hasOwnProperty;
            var undefined$1; // More compressible than void 0.

            var $Symbol = typeof Symbol === "function" ? Symbol : {};
            var iteratorSymbol = $Symbol.iterator || "@@iterator";
            var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
            var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

            function wrap(innerFn, outerFn, self, tryLocsList) {
                // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                var generator = Object.create(protoGenerator.prototype);
                var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
                // .throw, and .return methods.

                generator._invoke = makeInvokeMethod(innerFn, self, context);
                return generator;
            }

            exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
            // record like context.tryEntries[i].completion. This interface could
            // have been (and was previously) designed to take a closure to be
            // invoked without arguments, but in all the cases we care about we
            // already have an existing method we want to call, so there's no need
            // to create a new function object. We can even get away with assuming
            // the method takes exactly one argument, since that happens to be true
            // in every case, so we don't have to touch the arguments object. The
            // only additional allocation required is the completion record, which
            // has a stable shape and so hopefully should be cheap to allocate.

            function tryCatch(fn, obj, arg) {
                try {
                    return {
                        type: "normal",
                        arg: fn.call(obj, arg)
                    };
                } catch (err) {
                    return {
                        type: "throw",
                        arg: err
                    };
                }
            }

            var GenStateSuspendedStart = "suspendedStart";
            var GenStateSuspendedYield = "suspendedYield";
            var GenStateExecuting = "executing";
            var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
            // breaking out of the dispatch switch statement.

            var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
            // .constructor.prototype properties for functions that return Generator
            // objects. For full spec compliance, you may wish to configure your
            // minifier not to mangle the names of these two functions.

            function Generator() {}

            function GeneratorFunction() {}

            function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
            // don't natively support it.


            var IteratorPrototype = {};

            IteratorPrototype[iteratorSymbol] = function () {
                return this;
            };

            var getProto = Object.getPrototypeOf;
            var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

            if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                // This environment has a native %IteratorPrototype%; use it instead
                // of the polyfill.
                IteratorPrototype = NativeIteratorPrototype;
            }

            var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
            GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
            GeneratorFunctionPrototype.constructor = GeneratorFunction;
            GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
            // Iterator interface in terms of a single ._invoke method.

            function defineIteratorMethods(prototype) {
                ["next", "throw", "return"].forEach(function (method) {
                    prototype[method] = function (arg) {
                        return this._invoke(method, arg);
                    };
                });
            }

            exports.isGeneratorFunction = function (genFun) {
                var ctor = typeof genFun === "function" && genFun.constructor;
                return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                    // do is to check its .name property.
                    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
            };

            exports.mark = function (genFun) {
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                } else {
                    genFun.__proto__ = GeneratorFunctionPrototype;

                    if (!(toStringTagSymbol in genFun)) {
                        genFun[toStringTagSymbol] = "GeneratorFunction";
                    }
                }

                genFun.prototype = Object.create(Gp);
                return genFun;
            }; // Within the body of any async function, `await x` is transformed to
            // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
            // `hasOwn.call(value, "__await")` to determine if the yielded value is
            // meant to be awaited.


            exports.awrap = function (arg) {
                return {
                    __await: arg
                };
            };

            function AsyncIterator(generator, PromiseImpl) {
                function invoke(method, arg, resolve, reject) {
                    var record = tryCatch(generator[method], generator, arg);

                    if (record.type === "throw") {
                        reject(record.arg);
                    } else {
                        var result = record.arg;
                        var value = result.value;

                        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                            return PromiseImpl.resolve(value.__await).then(function (value) {
                                invoke("next", value, resolve, reject);
                            }, function (err) {
                                invoke("throw", err, resolve, reject);
                            });
                        }

                        return PromiseImpl.resolve(value).then(function (unwrapped) {
                            // When a yielded Promise is resolved, its final value becomes
                            // the .value of the Promise<{value,done}> result for the
                            // current iteration.
                            result.value = unwrapped;
                            resolve(result);
                        }, function (error) {
                            // If a rejected Promise was yielded, throw the rejection back
                            // into the async generator function so it can be handled there.
                            return invoke("throw", error, resolve, reject);
                        });
                    }
                }

                var previousPromise;

                function enqueue(method, arg) {
                    function callInvokeWithMethodAndArg() {
                        return new PromiseImpl(function (resolve, reject) {
                            invoke(method, arg, resolve, reject);
                        });
                    }

                    return previousPromise = // If enqueue has been called before, then we want to wait until
                        // all previous Promises have been resolved before calling invoke,
                        // so that results are always delivered in the correct order. If
                        // enqueue has not been called before, then it is important to
                        // call invoke immediately, without waiting on a callback to fire,
                        // so that the async generator function has the opportunity to do
                        // any necessary setup in a predictable way. This predictability
                        // is why the Promise constructor synchronously invokes its
                        // executor callback, and why async functions synchronously
                        // execute code before the first await. Since we implement simple
                        // async functions in terms of async generators, it is especially
                        // important to get this right, even though it requires care.
                        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                            // invocations of the iterator.
                            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                } // Define the unified helper method that is used to implement .next,
                // .throw, and .return (see defineIteratorMethods).


                this._invoke = enqueue;
            }

            defineIteratorMethods(AsyncIterator.prototype);

            AsyncIterator.prototype[asyncIteratorSymbol] = function () {
                return this;
            };

            exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
            // AsyncIterator objects; they just return a Promise for the value of
            // the final result produced by the iterator.

            exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
                if (PromiseImpl === void 0) PromiseImpl = Promise;
                var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
                return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
                    : iter.next().then(function (result) {
                        return result.done ? result.value : iter.next();
                    });
            };

            function makeInvokeMethod(innerFn, self, context) {
                var state = GenStateSuspendedStart;
                return function invoke(method, arg) {
                    if (state === GenStateExecuting) {
                        throw new Error("Generator is already running");
                    }

                    if (state === GenStateCompleted) {
                        if (method === "throw") {
                            throw arg;
                        } // Be forgiving, per 25.3.3.3.3 of the spec:
                        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


                        return doneResult();
                    }

                    context.method = method;
                    context.arg = arg;

                    while (true) {
                        var delegate = context.delegate;

                        if (delegate) {
                            var delegateResult = maybeInvokeDelegate(delegate, context);

                            if (delegateResult) {
                                if (delegateResult === ContinueSentinel) continue;
                                return delegateResult;
                            }
                        }

                        if (context.method === "next") {
                            // Setting context._sent for legacy support of Babel's
                            // function.sent implementation.
                            context.sent = context._sent = context.arg;
                        } else if (context.method === "throw") {
                            if (state === GenStateSuspendedStart) {
                                state = GenStateCompleted;
                                throw context.arg;
                            }

                            context.dispatchException(context.arg);
                        } else if (context.method === "return") {
                            context.abrupt("return", context.arg);
                        }

                        state = GenStateExecuting;
                        var record = tryCatch(innerFn, self, context);

                        if (record.type === "normal") {
                            // If an exception is thrown from innerFn, we leave state ===
                            // GenStateExecuting and loop back for another invocation.
                            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                            if (record.arg === ContinueSentinel) {
                                continue;
                            }

                            return {
                                value: record.arg,
                                done: context.done
                            };
                        } else if (record.type === "throw") {
                            state = GenStateCompleted; // Dispatch the exception by looping back around to the
                            // context.dispatchException(context.arg) call above.

                            context.method = "throw";
                            context.arg = record.arg;
                        }
                    }
                };
            } // Call delegate.iterator[context.method](context.arg) and handle the
            // result, either by returning a { value, done } result from the
            // delegate iterator, or by modifying context.method and context.arg,
            // setting context.delegate to null, and returning the ContinueSentinel.


            function maybeInvokeDelegate(delegate, context) {
                var method = delegate.iterator[context.method];

                if (method === undefined$1) {
                    // A .throw or .return when the delegate iterator has no .throw
                    // method always terminates the yield* loop.
                    context.delegate = null;

                    if (context.method === "throw") {
                        // Note: ["return"] must be used for ES3 parsing compatibility.
                        if (delegate.iterator["return"]) {
                            // If the delegate iterator has a return method, give it a
                            // chance to clean up.
                            context.method = "return";
                            context.arg = undefined$1;
                            maybeInvokeDelegate(delegate, context);

                            if (context.method === "throw") {
                                // If maybeInvokeDelegate(context) changed context.method from
                                // "return" to "throw", let that override the TypeError below.
                                return ContinueSentinel;
                            }
                        }

                        context.method = "throw";
                        context.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }

                    return ContinueSentinel;
                }

                var record = tryCatch(method, delegate.iterator, context.arg);

                if (record.type === "throw") {
                    context.method = "throw";
                    context.arg = record.arg;
                    context.delegate = null;
                    return ContinueSentinel;
                }

                var info = record.arg;

                if (!info) {
                    context.method = "throw";
                    context.arg = new TypeError("iterator result is not an object");
                    context.delegate = null;
                    return ContinueSentinel;
                }

                if (info.done) {
                    // Assign the result of the finished delegate to the temporary
                    // variable specified by delegate.resultName (see delegateYield).
                    context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

                    context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
                    // exception, let the outer generator proceed normally. If
                    // context.method was "next", forget context.arg since it has been
                    // "consumed" by the delegate iterator. If context.method was
                    // "return", allow the original .return call to continue in the
                    // outer generator.

                    if (context.method !== "return") {
                        context.method = "next";
                        context.arg = undefined$1;
                    }
                } else {
                    // Re-yield the result returned by the delegate method.
                    return info;
                } // The delegate iterator is finished, so forget it and continue with
                // the outer generator.


                context.delegate = null;
                return ContinueSentinel;
            } // Define Generator.prototype.{next,throw,return} in terms of the
            // unified ._invoke helper method.


            defineIteratorMethods(Gp);
            Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
            // @@iterator function is called on it. Some browsers' implementations of the
            // iterator prototype chain incorrectly implement this, causing the Generator
            // object to not be returned from this call. This ensures that doesn't happen.
            // See https://github.com/facebook/regenerator/issues/274 for more details.

            Gp[iteratorSymbol] = function () {
                return this;
            };

            Gp.toString = function () {
                return "[object Generator]";
            };

            function pushTryEntry(locs) {
                var entry = {
                    tryLoc: locs[0]
                };

                if (1 in locs) {
                    entry.catchLoc = locs[1];
                }

                if (2 in locs) {
                    entry.finallyLoc = locs[2];
                    entry.afterLoc = locs[3];
                }

                this.tryEntries.push(entry);
            }

            function resetTryEntry(entry) {
                var record = entry.completion || {};
                record.type = "normal";
                delete record.arg;
                entry.completion = record;
            }

            function Context(tryLocsList) {
                // The root entry object (effectively a try statement without a catch
                // or a finally block) gives us a place to store values thrown from
                // locations where there is no enclosing try statement.
                this.tryEntries = [{
                    tryLoc: "root"
                }];
                tryLocsList.forEach(pushTryEntry, this);
                this.reset(true);
            }

            exports.keys = function (object) {
                var keys = [];

                for (var key in object) {
                    keys.push(key);
                }

                keys.reverse(); // Rather than returning an object with a next method, we keep
                // things simple and return the next function itself.

                return function next() {
                    while (keys.length) {
                        var key = keys.pop();

                        if (key in object) {
                            next.value = key;
                            next.done = false;
                            return next;
                        }
                    } // To avoid creating an additional object, we just hang the .value
                    // and .done properties off the next function object itself. This
                    // also ensures that the minifier will not anonymize the function.


                    next.done = true;
                    return next;
                };
            };

            function values(iterable) {
                if (iterable) {
                    var iteratorMethod = iterable[iteratorSymbol];

                    if (iteratorMethod) {
                        return iteratorMethod.call(iterable);
                    }

                    if (typeof iterable.next === "function") {
                        return iterable;
                    }

                    if (!isNaN(iterable.length)) {
                        var i = -1,
                            next = function next() {
                                while (++i < iterable.length) {
                                    if (hasOwn.call(iterable, i)) {
                                        next.value = iterable[i];
                                        next.done = false;
                                        return next;
                                    }
                                }

                                next.value = undefined$1;
                                next.done = true;
                                return next;
                            };

                        return next.next = next;
                    }
                } // Return an iterator with no values.


                return {
                    next: doneResult
                };
            }

            exports.values = values;

            function doneResult() {
                return {
                    value: undefined$1,
                    done: true
                };
            }

            Context.prototype = {
                constructor: Context,
                reset: function (skipTempReset) {
                    this.prev = 0;
                    this.next = 0; // Resetting context._sent for legacy support of Babel's
                    // function.sent implementation.

                    this.sent = this._sent = undefined$1;
                    this.done = false;
                    this.delegate = null;
                    this.method = "next";
                    this.arg = undefined$1;
                    this.tryEntries.forEach(resetTryEntry);

                    if (!skipTempReset) {
                        for (var name in this) {
                            // Not sure about the optimal order of these conditions:
                            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                                this[name] = undefined$1;
                            }
                        }
                    }
                },
                stop: function () {
                    this.done = true;
                    var rootEntry = this.tryEntries[0];
                    var rootRecord = rootEntry.completion;

                    if (rootRecord.type === "throw") {
                        throw rootRecord.arg;
                    }

                    return this.rval;
                },
                dispatchException: function (exception) {
                    if (this.done) {
                        throw exception;
                    }

                    var context = this;

                    function handle(loc, caught) {
                        record.type = "throw";
                        record.arg = exception;
                        context.next = loc;

                        if (caught) {
                            // If the dispatched exception was caught by a catch block,
                            // then let that catch block handle the exception normally.
                            context.method = "next";
                            context.arg = undefined$1;
                        }

                        return !!caught;
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        var record = entry.completion;

                        if (entry.tryLoc === "root") {
                            // Exception thrown outside of any try block that could handle
                            // it, so set the completion value of the entire function to
                            // throw the exception.
                            return handle("end");
                        }

                        if (entry.tryLoc <= this.prev) {
                            var hasCatch = hasOwn.call(entry, "catchLoc");
                            var hasFinally = hasOwn.call(entry, "finallyLoc");

                            if (hasCatch && hasFinally) {
                                if (this.prev < entry.catchLoc) {
                                    return handle(entry.catchLoc, true);
                                } else if (this.prev < entry.finallyLoc) {
                                    return handle(entry.finallyLoc);
                                }
                            } else if (hasCatch) {
                                if (this.prev < entry.catchLoc) {
                                    return handle(entry.catchLoc, true);
                                }
                            } else if (hasFinally) {
                                if (this.prev < entry.finallyLoc) {
                                    return handle(entry.finallyLoc);
                                }
                            } else {
                                throw new Error("try statement without catch or finally");
                            }
                        }
                    }
                },
                abrupt: function (type, arg) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];

                        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                            var finallyEntry = entry;
                            break;
                        }
                    }

                    if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                        // Ignore the finally entry if control is not jumping to a
                        // location outside the try/catch block.
                        finallyEntry = null;
                    }

                    var record = finallyEntry ? finallyEntry.completion : {};
                    record.type = type;
                    record.arg = arg;

                    if (finallyEntry) {
                        this.method = "next";
                        this.next = finallyEntry.finallyLoc;
                        return ContinueSentinel;
                    }

                    return this.complete(record);
                },
                complete: function (record, afterLoc) {
                    if (record.type === "throw") {
                        throw record.arg;
                    }

                    if (record.type === "break" || record.type === "continue") {
                        this.next = record.arg;
                    } else if (record.type === "return") {
                        this.rval = this.arg = record.arg;
                        this.method = "return";
                        this.next = "end";
                    } else if (record.type === "normal" && afterLoc) {
                        this.next = afterLoc;
                    }

                    return ContinueSentinel;
                },
                finish: function (finallyLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];

                        if (entry.finallyLoc === finallyLoc) {
                            this.complete(entry.completion, entry.afterLoc);
                            resetTryEntry(entry);
                            return ContinueSentinel;
                        }
                    }
                },
                "catch": function (tryLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];

                        if (entry.tryLoc === tryLoc) {
                            var record = entry.completion;

                            if (record.type === "throw") {
                                var thrown = record.arg;
                                resetTryEntry(entry);
                            }

                            return thrown;
                        }
                    } // The context.catch method must only be called with a location
                    // argument that corresponds to a known catch block.


                    throw new Error("illegal catch attempt");
                },
                delegateYield: function (iterable, resultName, nextLoc) {
                    this.delegate = {
                        iterator: values(iterable),
                        resultName: resultName,
                        nextLoc: nextLoc
                    };

                    if (this.method === "next") {
                        // Deliberately forget the last sent value so that we don't
                        // accidentally pass it on to the delegate.
                        this.arg = undefined$1;
                    }

                    return ContinueSentinel;
                }
            }; // Regardless of whether this script is executing as a CommonJS module
            // or not, return the runtime object so that we can declare the variable
            // regeneratorRuntime in the outer scope, which allows this module to be
            // injected easily by `bin/regenerator --include-runtime script.js`.

            return exports;
        }( // If this script is executing as a CommonJS module, use module.exports
            // as the regeneratorRuntime namespace. Otherwise create a new empty
            // object. Either way, the resulting object will be used to initialize
            // the regeneratorRuntime variable at the top of this file.
            module.exports );

        try {
            regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
            // This module should not be running in strict mode, so the above
            // assignment should always work unless something is misconfigured. Just
            // in case runtime.js accidentally runs in strict mode, we can escape
            // strict mode using a global Function call. This could conceivably fail
            // if a Content Security Policy forbids using Function, but in that case
            // the proper solution is to fix the accidental strict mode problem. If
            // you've misconfigured your bundler to force strict mode and applied a
            // CSP to forbid Function, and you're not willing to fix either of those
            // problems, please detail your unique predicament in a GitHub issue.
            Function("r", "regeneratorRuntime = r")(runtime);
        }
    });

    var LHBaseClass = /*#__PURE__*/function () {
        function LHBaseClass(params) {
            _classCallCheck(this, LHBaseClass);
        }

        _createClass(LHBaseClass, [{
            key: "getParam",
            value: function getParam(params, strKey, defaultValue) {
                params = params || {};

                if (strKey in params) {
                    return params[strKey];
                } else if (defaultValue === undefined) {
                    this.throwException(strKey + " is a required parameter", "Parameters Error");
                } else {
                    return defaultValue;
                }
            }
        }, {
            key: "throwException",
            value: function throwException(message) {
                var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Error";
                throw new Error(this.constructor.name + " -- " + title + ": " + message);
            }
        }]);

        return LHBaseClass;
    }();

    var LHBaseClass_1 = LHBaseClass;

    var LHDelegate = /*#__PURE__*/function (_LHBaseClass) {
        _inherits(LHDelegate, _LHBaseClass);

        var _super = _createSuper(LHDelegate);

        function LHDelegate(params) {
            var _this;

            _classCallCheck(this, LHDelegate);

            _this = _super.call(this, params);
            _this.delegate = _this.getParam(params, "delegate", null);
            _this.delegateTypes = [];
            return _this;
        }

        _createClass(LHDelegate, [{
            key: "notify",
            value: function () {
                var _notify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegateString) {
                    var object,
                        _args = arguments;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    object = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;

                                    if (!this.delegateTypes.includes(delegateString)) {
                                        this.throwException("delegateString:" + delegateString + " is not defined in delegateTypes");
                                    }

                                    if (this.delegate) {
                                        this.delegate.receive(this, delegateString, object);
                                    }

                                case 3:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function notify(_x) {
                    return _notify.apply(this, arguments);
                }

                return notify;
            }()
        }, {
            key: "receive",
            value: function () {
                var _receive = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(notifier, delegateString) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:

                                case 1:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2);
                }));

                function receive(_x2, _x3) {
                    return _receive.apply(this, arguments);
                }

                return receive;
            }()
        }]);

        return LHDelegate;
    }(LHBaseClass_1);

    var LHDelegate_1 = LHDelegate;

    var propertyTypes = {
        STRING: "string",
        BOOL: "boolean",
        DATETIME: "dateTime",
        FILE: "attachment",
        NUMBER: "number",
        DECIMAL: "decimal",
        DATE: "extendedDateTime",
        // GUID: "guid",
        // AUTOGUID: "guid",
        // HYPERLINK: "object",
        // IMAGE: "image",
        MEMO: "extendedString" // MULTIVALUE: "object",
        // TIME: "extendedDateTime",
        // AUTONUMBER: "extendedNumber",
        // XML: "extendedString"

    };
    var methodTypes = {
        LIST: "list",
        READ: "read",
        CREATE: "create",
        EXECUTE: "execute",
        UPDATE: "update",
        DELETE: "delete"
    };
    var propertyTypes_1 = propertyTypes;
    var methodTypes_1 = methodTypes;
    var k2Types = {
        propertyTypes: propertyTypes_1,
        methodTypes: methodTypes_1
    };

    var propertyTypes$1 = k2Types.propertyTypes,
        methodTypes$1 = k2Types.methodTypes;

    var K2Base = /*#__PURE__*/function (_LHDelegate) {
        _inherits(K2Base, _LHDelegate);

        var _super = _createSuper(K2Base);

        function K2Base(params) {
            var _this;

            _classCallCheck(this, K2Base);

            _this = _super.call(this, params);
            _this.propertyTypes = _objectSpread2({}, propertyTypes$1);
            _this.methodTypes = _objectSpread2({}, methodTypes$1);
            return _this;
        }

        return K2Base;
    }(LHDelegate_1);

    var K2Base_1 = K2Base;

    var K2BaseIntegration = /*#__PURE__*/function (_K2Base) {
        _inherits(K2BaseIntegration, _K2Base);

        var _super = _createSuper(K2BaseIntegration);

        function K2BaseIntegration(params) {
            var _this;

            _classCallCheck(this, K2BaseIntegration);

            _this = _super.call(this, params);
            _this.metaData = {
                systemName: null,
                displayName: null,
                description: null
            };
            _this.smartObjects = [];
            return _this;
        }

        _createClass(K2BaseIntegration, [{
            key: "getSmartObject",
            value: function getSmartObject(name) {
                var _iterator = _createForOfIteratorHelper(this.smartObjects),
                    _step;

                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var obj = _step.value;

                        if (obj.name === name) {
                            return obj;
                        }
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }

                this.throwException("Smart Object does not exist!");
            }
        }, {
            key: "getMetaData",
            value: function getMetaData() {
                return this.metaData;
            }
        }, {
            key: "getSchemas",
            value: function getSchemas() {
                var returnSchema = {};

                var _iterator2 = _createForOfIteratorHelper(this.smartObjects),
                    _step2;

                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var obj = _step2.value;
                        returnSchema[obj.name] = obj.getSchema();
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }

                return {
                    displayName: this.metaData.displayName,
                    description: this.metaData.description,
                    objects: returnSchema
                };
            }
        }, {
            key: "execute",
            value: function () {
                var _execute = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(objectName, methodName, parameters, properties) {
                    var obj;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    obj = this.getSmartObject(objectName);
                                    _context.next = 3;
                                    return obj[methodName](parameters, properties);

                                case 3:
                                    return _context.abrupt("return", _context.sent);

                                case 4:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function execute(_x, _x2, _x3, _x4) {
                    return _execute.apply(this, arguments);
                }

                return execute;
            }()
        }]);

        return K2BaseIntegration;
    }(K2Base_1);

    var K2BaseIntegration_1 = K2BaseIntegration;

    var K2BaseSmartObject = /*#__PURE__*/function (_K2Base) {
        _inherits(K2BaseSmartObject, _K2Base);

        var _super = _createSuper(K2BaseSmartObject);

        function K2BaseSmartObject(params) {
            var _this;

            _classCallCheck(this, K2BaseSmartObject);

            _this = _super.call(this, params);
            _this.name = "K2BaseSmartObject";
            _this.displayName = "K2 BaseSmart Object";
            _this.description = "K2 BaseSmart Object";
            _this.api = _this.getParam(params, "api");
            _this.props = {};
            return _this;
        }

        _createClass(K2BaseSmartObject, [{
            key: "getProperties",
            value: function getProperties() {
                return {};
            }
        }, {
            key: "getMethods",
            value: function getMethods() {
                return {};
            }
        }, {
            key: "getSchema",
            value: function getSchema() {
                return {
                    displayName: this.displayName,
                    description: this.description,
                    properties: this.getProperties(),
                    methods: this.getMethods()
                };
            }
        }]);

        return K2BaseSmartObject;
    }(K2Base_1);

    var K2BaseSmartObject_1 = K2BaseSmartObject;

    var propertyTypes$2 = k2Types.propertyTypes,
        methodTypes$2 = k2Types.methodTypes;
    var fileThings = {
        fileProps: {
            id: "id",
            name: "name",
            path: "path",
            shareUrl: "shareUrl",
            size: "size",
            sourcePath: "sourcePath",
            destinationPath: "destinationPath",
            modifiedDate: "modifiedDate",
            directory: "directory",
            tags: "tags",
            parentFolderId: "parentFolderId",
            file: "File",
            // properties: "properties",
            tagName: "tagName",
            tagValue: "tagValue",
            result: "result"
        },

        get filePropertiesObj() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, this.fileProps.id, {
                displayName: "File Id",
                description: "File Id",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.name, {
                displayName: "File Name",
                description: "File Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.path, {
                displayName: "Path",
                description: "Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.shareUrl, {
                displayName: "Share URL",
                description: "Share URL",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.file, {
                displayName: "File",
                description: "Input File Prop",
                type: propertyTypes$2.FILE
            }), _defineProperty(_ref, this.fileProps.size, {
                displayName: "File Size",
                description: "Size",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref, this.fileProps.sourcePath, {
                displayName: "Source Path",
                description: "Source Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.destinationPath, {
                displayName: "Destination Path",
                description: "Destination Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.modifiedDate, {
                displayName: "Modified Date",
                description: "Modified Date",
                type: propertyTypes$2.DATETIME
            }), _defineProperty(_ref, this.fileProps.directory, {
                displayName: "Directory",
                description: "Directory",
                type: propertyTypes$2.BOOL
            }), _defineProperty(_ref, this.fileProps.parentFolderId, {
                displayName: "Parent Folder ID",
                description: "Parent Folder ID",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.tags, {
                displayName: "Tags",
                description: "Tags",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.tagName, {
                displayName: "Tag Name",
                description: "Tag Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.tagValue, {
                displayName: "Tag Value",
                description: "Tag Value",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref, this.fileProps.result, {
                displayName: "File Upload Results",
                description: "File Upload Results",
                type: propertyTypes$2.STRING
            }), _ref;
        },

        fileMethods: {
            getInfo: "getInfo",
            getInfoById: "getInfoById",
            getShareUrl: "getShareUrl",
            getShareUrlById: "getShareUrlById",
            download: "download",
            copy: "copy",
            "delete": "delete",
            move: "move",
            upload: "upload",
            updateTags: "updateTags",
            updateSingleTag: "updateSingleTag"
        },

        get fileMethodsObj() {
            var _ref2;

            return _ref2 = {}, _defineProperty(_ref2, this.fileMethods.getInfo, {
                displayName: "Get Info",
                description: "Get info for the file by a given path.",
                type: methodTypes$2.READ,
                inputs: [this.fileProps.path],
                requiredInputs: [this.fileProps.path],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods.getInfoById, {
                displayName: "Get Info From Id",
                description: "Get metadata for a given file.",
                type: methodTypes$2.READ,
                inputs: [this.fileProps.id],
                requiredInputs: [this.fileProps.id],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods.getShareUrl, {
                displayName: "Get Folder Share URL",
                description: "Gets a basic share URL for a folder.",
                type: methodTypes$2.CREATE,
                inputs: [this.fileProps.path],
                requiredInputs: [this.fileProps.path],
                outputs: [this.fileProps.shareUrl]
            }), _defineProperty(_ref2, this.fileMethods.getShareUrlById, {
                displayName: "Get Folder Share URL by Id",
                description: "Gets a basic share URL for a folder with an Id.",
                type: methodTypes$2.CREATE,
                inputs: [this.fileProps.id],
                requiredInputs: [this.fileProps.id],
                outputs: [this.fileProps.shareUrl]
            }), _defineProperty(_ref2, this.fileMethods.download, {
                displayName: "Download",
                type: methodTypes$2.READ,
                inputs: [this.fileProps.path],
                requiredInputs: [this.fileProps.path],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate, this.fileProps.file]
            }), _defineProperty(_ref2, this.fileMethods.copy, {
                displayName: "Copy File",
                description: "Copy a file into a given folder.",
                inputs: [this.fileProps.sourcePath, this.fileProps.destinationPath],
                requiredInputs: [this.fileProps.sourcePath, this.fileProps.destinationPath],
                type: methodTypes$2.CREATE,
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods["delete"], {
                displayName: "Delete File",
                description: "Delete File",
                type: methodTypes$2.DELETE,
                inputs: [this.fileProps.path],
                requiredInputs: [this.fileProps.path],
                outputs: []
            }), _defineProperty(_ref2, this.fileMethods.move, {
                displayName: "Move File",
                description: "Move File",
                type: methodTypes$2.EXECUTE,
                inputs: [this.fileProps.sourcePath, this.fileProps.destinationPath],
                requiredInputs: [this.fileProps.sourcePath, this.fileProps.destinationPath],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods.upload, {
                displayName: "Upload File",
                description: "Upload a File",
                type: methodTypes$2.CREATE,
                inputs: [this.fileProps.path, this.fileProps.file],
                requiredInputs: [this.fileProps.path, this.fileProps.file],
                outputs: [this.fileProps.id, this.fileProps.name, // this.fileProps.parentFolderId,
                    // this.fileProps.directory,
                    // // this.fileProps.properties,
                    // this.fileProps.tags,
                    this.fileProps.path, // this.fileProps.size,
                    // this.fileProps.modifiedDate
                    this.fileProps.result]
            }), _defineProperty(_ref2, this.fileMethods.updateTags, {
                displayName: "Update Tags",
                description: "Update tags for a given file.",
                inputs: [this.fileProps.path, this.fileProps.tags],
                requiredInputs: [this.fileProps.path, this.fileProps.tags],
                type: methodTypes$2.UPDATE,
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _defineProperty(_ref2, this.fileMethods.updateSingleTag, {
                displayName: "Update Single File Tag",
                description: "Update an individual metadata Tag of a File",
                // Success or no success
                type: methodTypes$2.UPDATE,
                inputs: [this.fileProps.path, this.fileProps.tagName, this.fileProps.tagValue],
                requiredInputs: [this.fileProps.path, this.fileProps.tagName, this.fileProps.tagValue],
                outputs: [this.fileProps.id, this.fileProps.name, this.fileProps.parentFolderId, this.fileProps.directory, // this.fileProps.properties,
                    this.fileProps.tags, this.fileProps.path, this.fileProps.size, this.fileProps.modifiedDate]
            }), _ref2;
        }

    };
    var folderThings = {
        folderProps: {
            id: "id",
            name: "name",
            path: "path",
            shareUrl: "shareUrl",
            size: "size",
            sourcePath: "sourcePath",
            destinationPath: "destinationPath",
            modifiedDate: "modifiedDate",
            directory: "directory",
            tags: "tags",
            parentFolderId: "parentFolderId",
            // properties: "properties",
            tagName: "tagName",
            tagValue: "tagValue"
        },

        get folderPropertiesObj() {
            var _ref3;

            return _ref3 = {}, _defineProperty(_ref3, this.folderProps.id, {
                displayName: "Folder Id",
                description: "Folder Id",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.name, {
                displayName: "Folder Name",
                description: "Folder Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.path, {
                displayName: "Path",
                description: "Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.shareUrl, {
                displayName: "Share URL",
                description: "Share URL",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.size, {
                displayName: "Size",
                description: "Size",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref3, this.folderProps.sourcePath, {
                displayName: "Source Path",
                description: "Source Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.destinationPath, {
                displayName: "Destination Path",
                description: "Destination Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.modifiedDate, {
                displayName: "Modified Date",
                description: "Modified Date",
                type: propertyTypes$2.DATETIME
            }), _defineProperty(_ref3, this.folderProps.directory, {
                displayName: "Directory",
                description: "Directory",
                type: propertyTypes$2.BOOL
            }), _defineProperty(_ref3, this.folderProps.tags, {
                displayName: "Tags",
                description: "Tags",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.parentFolderId, {
                displayName: "Parent Folder ID",
                description: "Parent Folder ID",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.tagName, {
                displayName: "Tag Name",
                description: "Tag Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref3, this.folderProps.tagValue, {
                displayName: "Tag Value",
                description: "Tag Value",
                type: propertyTypes$2.STRING
            }), _ref3;
        },

        folderMethods: {
            listContents: "listContents",
            getInfoById: "getInfoById",
            getInfo: "getInfo",
            copy: "copy",
            create: "create",
            "delete": "delete",
            getShareUrl: "getShareUrl",
            getShareUrlById: 'getShareUrlById',
            move: "move",
            updateTags: "updateTags",
            updateSingleTag: "updateSingleTag"
        },

        get folderMethodsObj() {
            var _ref4;

            return _ref4 = {}, _defineProperty(_ref4, this.folderMethods.listContents, {
                displayName: "List Contents",
                description: "List all contents in a given folder",
                type: methodTypes$2.LIST,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                outputs: [this.folderProps.id, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.parentFolderId, this.folderProps.name, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods.getInfoById, {
                displayName: "Get Info From Id",
                description: "Get metadata for a given folder.",
                type: methodTypes$2.READ,
                inputs: [this.folderProps.id],
                requiredInputs: [this.folderProps.id],
                // add metadata to outputs
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate, this.folderProps.parentFolderId, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.directory]
            }), _defineProperty(_ref4, this.folderMethods.getInfo, {
                displayName: "Get Info From Path",
                description: "Get metadata for a given folder.",
                type: methodTypes$2.READ,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                // add metadata to outputs
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate, this.folderProps.parentFolderId, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.directory]
            }), _defineProperty(_ref4, this.folderMethods.copy, {
                displayName: "Copy Folder",
                description: "Creates a copy of a folder, including its files.",
                type: methodTypes$2.CREATE,
                inputs: [this.folderProps.sourcePath, this.folderProps.destinationPath],
                requiredInputs: [this.folderProps.sourcePath, this.folderProps.destinationPath],
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods.create, {
                displayName: "Create Folder",
                description: "Create a new folder given a path.",
                type: methodTypes$2.CREATE,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                outputs: [this.folderProps.name, this.folderProps.id, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods["delete"], {
                displayName: "Delete Folder",
                description: "Deletes a folder",
                type: methodTypes$2.DELETE,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                outputs: []
            }), _defineProperty(_ref4, this.folderMethods.getShareUrl, {
                displayName: "Get Folder Share URL",
                description: "Gets a basic share URL for a folder.",
                type: methodTypes$2.CREATE,
                inputs: [this.folderProps.path],
                requiredInputs: [this.folderProps.path],
                outputs: [this.folderProps.shareUrl]
            }), _defineProperty(_ref4, this.folderMethods.getShareUrlById, {
                displayName: "Get Folder Share URL by Id",
                description: "Gets a basic share URL for a folder with an Id.",
                type: methodTypes$2.CREATE,
                inputs: [this.folderProps.id],
                requiredInputs: [this.folderProps.id],
                outputs: [this.folderProps.shareUrl]
            }), _defineProperty(_ref4, this.folderMethods.move, {
                displayName: "Move Folder",
                description: "Moves a folder to a new parent folder.",
                // Success or no success
                type: methodTypes$2.UPDATE,
                inputs: [this.folderProps.sourcePath, this.folderProps.destinationPath],
                requiredInputs: [this.folderProps.sourcePath, this.folderProps.destinationPath],
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods.updateTags, {
                displayName: "Update Folder Tags",
                description: "Update the Tags of a Folder",
                // Success or no success
                type: methodTypes$2.UPDATE,
                inputs: [this.folderProps.path, this.folderProps.tags],
                requiredInputs: [this.folderProps.path, this.folderProps.tags],
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _defineProperty(_ref4, this.folderMethods.updateSingleTag, {
                displayName: "Update Single Folder Tag",
                description: "Update an individual metadata Tag of a Folder",
                // Success or no success
                type: methodTypes$2.UPDATE,
                inputs: [this.folderProps.path, this.folderProps.tagName, this.folderProps.tagValue],
                requiredInputs: [this.folderProps.path, this.folderProps.tagName, this.folderProps.tagValue],
                outputs: [this.folderProps.id, this.folderProps.name, this.folderProps.parentFolderId, this.folderProps.directory, // this.folderProps.properties,
                    this.folderProps.tags, this.folderProps.path, this.folderProps.size, this.folderProps.modifiedDate]
            }), _ref4;
        }

    };
    var serviceThings = {
        serviceProps: {
            id: "id",
            name: "name",
            directory: "directory",
            // properties: "properties",
            tags: "tags",
            path: "path",
            size: "size",
            parentFolderId: "parentFolderId",
            modifiedDate: "modifiedDate",
            used: "used",
            shared: "shared",
            total: "total",
            keyWords: "keyWords"
        },

        get servicePropertiesObj() {
            var _ref5;

            return _ref5 = {}, _defineProperty(_ref5, this.serviceProps.id, {
                displayName: "Id",
                description: "Id",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.name, {
                displayName: "Name",
                description: "Name",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.directory, {
                displayName: "Directory",
                description: "Directory",
                type: propertyTypes$2.BOOL
            }), _defineProperty(_ref5, this.serviceProps.tags, {
                displayName: "Tags",
                description: "Tags",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.path, {
                displayName: "Path",
                description: "Path",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.size, {
                displayName: "Size",
                description: "size",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref5, this.serviceProps.parentFolderId, {
                displayName: "Parent Folder ID",
                description: "Parent Folder ID",
                type: propertyTypes$2.STRING
            }), _defineProperty(_ref5, this.serviceProps.modifiedDate, {
                displayName: "Modified Date",
                description: "Modified Date",
                type: propertyTypes$2.DATETIME
            }), _defineProperty(_ref5, this.serviceProps.used, {
                displayName: "Used",
                description: "Used",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref5, this.serviceProps.shared, {
                displayName: "Shared",
                description: "Shared",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref5, this.serviceProps.total, {
                displayName: "Total",
                description: "Total",
                type: propertyTypes$2.NUMBER
            }), _defineProperty(_ref5, this.serviceProps.keyWords, {
                displayName: "Search Query",
                description: "Search query string according to the service",
                type: propertyTypes$2.STRING
            }), _ref5;
        },

        serviceMethods: {
            search: "search",
            getQuota: "getQuota"
        },

        get serviceMethodsObj() {
            var _ref6;

            return _ref6 = {}, _defineProperty(_ref6, this.serviceMethods.search, {
                displayName: "Search",
                description: "Search for items",
                type: methodTypes$2.LIST,
                inputs: [this.serviceProps.keyWords],
                requiredInputs: [this.serviceProps.keyWords],
                outputs: [this.serviceProps.id, this.serviceProps.name, this.serviceProps.directory, this.serviceProps.path, this.serviceProps.parentFolderId, // this.serviceProps.properties,
                    this.serviceProps.tags, this.serviceProps.size, this.serviceProps.modifiedDate]
            }), _defineProperty(_ref6, this.serviceMethods.getQuota, {
                displayName: "Get Quota",
                description: "Get storage quota",
                inputs: [],
                requiredInputs: [],
                type: methodTypes$2.READ,
                outputs: [this.serviceProps.total, this.serviceProps.used, this.serviceProps.shared]
            }), _ref6;
        }

    };

    var fileStorageSharedPropertiesAndMethods = _objectSpread2({}, fileThings, {}, folderThings, {}, serviceThings);

    var fileProps = fileStorageSharedPropertiesAndMethods.fileProps,
        filePropertiesObj = fileStorageSharedPropertiesAndMethods.filePropertiesObj,
        fileMethods = fileStorageSharedPropertiesAndMethods.fileMethods,
        fileMethodsObj = fileStorageSharedPropertiesAndMethods.fileMethodsObj;

    function isFolder(f) {
        var type = f.mimeType; // console.log("type: ", type);

        return type === "application/vnd.google-apps.folder" ? true : false;
    } // Returns the first id out of the `parents` array

    var File = /*#__PURE__*/function (_K2BaseSmartObject) {
        _inherits(File, _K2BaseSmartObject);

        var _super = _createSuper(File);

        function File(params) {
            var _this;

            _classCallCheck(this, File);

            _this = _super.call(this, params);
            _this.name = "file";
            _this.displayName = "File";
            _this.description = "File";
            _this.props = _objectSpread2({}, fileProps);
            _this.methods = _objectSpread2({}, fileMethods);
            return _this;
        }

        _createClass(File, [{
            key: "getProperties",
            value: function getProperties() {
                return _objectSpread2({}, filePropertiesObj);
            }
        }, {
            key: "getMethods",
            value: function getMethods() {
                return _objectSpread2({}, fileMethodsObj);
            }
        }, {
            key: "getInfo",
            value: function () {
                var _getInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, properties) {
                    var _postResult;

                    var path, data;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context.next = 3;
                                    return this.api.getInfoByPath(path);

                                case 3:
                                    data = _context.sent;
                                    postResult((_postResult = {}, _defineProperty(_postResult, this.props.id, data.id), _defineProperty(_postResult, this.props.name, data.name), _defineProperty(_postResult, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult, this.props.directory, isFolder(data)), _defineProperty(_postResult, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult, this.props.path, data.path), _defineProperty(_postResult, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult));

                                case 5:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function getInfo(_x, _x2) {
                    return _getInfo.apply(this, arguments);
                }

                return getInfo;
            }()
        }, {
            key: "getInfoById",
            value: function () {
                var _getInfoById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params, properties) {
                    var _postResult2;

                    var id, data;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    id = this.getParam(properties, this.props.id);
                                    _context2.next = 3;
                                    return this.api.getInfoById(id);

                                case 3:
                                    data = _context2.sent;
                                    postResult((_postResult2 = {}, _defineProperty(_postResult2, this.props.id, data.id), _defineProperty(_postResult2, this.props.name, data.name), _defineProperty(_postResult2, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult2, this.props.directory, isFolder(data)), _defineProperty(_postResult2, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult2, this.props.path, data.path), _defineProperty(_postResult2, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult2, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult2));

                                case 5:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function getInfoById(_x3, _x4) {
                    return _getInfoById.apply(this, arguments);
                }

                return getInfoById;
            }()
        }, {
            key: "getShareUrl",
            value: function () {
                var _getShareUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params, properties) {
                    var path, id, data;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context3.next = 3;
                                    return this.api.getIdFromPath(path);

                                case 3:
                                    id = _context3.sent;
                                    _context3.next = 6;
                                    return this.api.getShareUrlById(id);

                                case 6:
                                    data = _context3.sent;
                                    postResult(_defineProperty({}, this.props.shareUrl, data.webViewLink));

                                case 8:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function getShareUrl(_x5, _x6) {
                    return _getShareUrl.apply(this, arguments);
                }

                return getShareUrl;
            }()
        }, {
            key: "getShareUrlById",
            value: function () {
                var _getShareUrlById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params, properties) {
                    var id, data;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    id = this.getParam(properties, this.props.id);
                                    _context4.next = 3;
                                    return this.api.getShareUrlById(id);

                                case 3:
                                    data = _context4.sent;
                                    postResult(_defineProperty({}, this.props.shareUrl, data.webViewLink));

                                case 5:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function getShareUrlById(_x7, _x8) {
                    return _getShareUrlById.apply(this, arguments);
                }

                return getShareUrlById;
            }()
        }, {
            key: "download",
            value: function () {
                var _download = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params, properties) {
                    var path, item, downloadUrl, xhr;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path); // Get file ID from the Path, and the File MimeType

                                    _context5.next = 3;
                                    return this.api.getInfoByPath(path);

                                case 3:
                                    item = _context5.sent;
                                    // let mimeType = this.api.mimeTypeMapping(item.mimeType)
                                    downloadUrl = this.api.determineDownloadUrl(item); //TODO re-enable after resolving
                                    // let data = await this.api.downloadFile(item.id, item.mimeType);

                                    xhr = new XMLHttpRequest();
                                    xhr.withCredentials = true;

                                    xhr.onreadystatechange = function () {
                                        if (xhr.readyState !== 4) return;
                                        if (xhr.status !== 200) throw new Error("Failed with status ".concat(xhr.status, " ").concat(xhr.statusText, " and response ").concat(JSON.stringify(xhr.response), " "));
                                        postResult({
                                            "id": item.id,
                                            "name": item.name,
                                            "parentFolderId": item.parents ? JSON.stringify(item.parents) : '',
                                            "directory": isFolder(item),
                                            // [this.props.properties]: JSON.stringify(data)
                                            "tags": item.properties ? JSON.stringify(item.properties) : '',
                                            "path": path,
                                            "size": item.quotaBytesUsed,
                                            "modifiedDate": new Date(item.modifiedTime),
                                            "File": {
                                                filename: item.name,
                                                content: xhr.response
                                            }
                                        });
                                    };

                                    xhr.open("GET", downloadUrl);
                                    xhr.setRequestHeader("Content-Type", "application/json");
                                    xhr.responseType = 'blob';
                                    _context5.next = 13;
                                    return xhr.send();

                                case 13:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function download(_x9, _x10) {
                    return _download.apply(this, arguments);
                }

                return download;
            }()
        }, {
            key: "copy",
            value: function () {
                var _copy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params, properties) {
                    var _postResult5;

                    var sourcePath, destinationPath, file, fileId, targetFolder, targetFolderId, data;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    sourcePath = this.getParam(properties, this.props.sourcePath);
                                    destinationPath = this.getParam(properties, this.props.destinationPath);
                                    _context6.next = 4;
                                    return this.api.getInfoByPath(sourcePath);

                                case 4:
                                    file = _context6.sent;

                                    if (isFolder(file)) {
                                        this.throwException("Folder found at path ".concat(sourcePath, ". Please provide a File instead"));
                                    } else {
                                        fileId = file.id;
                                    }

                                    _context6.next = 8;
                                    return this.api.getInfoByPath(destinationPath);

                                case 8:
                                    targetFolder = _context6.sent;

                                    if (isFolder(targetFolder)) {
                                        targetFolderId = targetFolder.id;
                                    } else {
                                        this.throwException("Folder not found at path ".concat(destinationPath, ". Please provide a Folder for destination."));
                                    }

                                    _context6.next = 12;
                                    return this.api.copyFile(fileId, targetFolderId);

                                case 12:
                                    data = _context6.sent;
                                    postResult((_postResult5 = {}, _defineProperty(_postResult5, this.props.id, data.id), _defineProperty(_postResult5, this.props.name, data.name), _defineProperty(_postResult5, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult5, this.props.directory, isFolder(data)), _defineProperty(_postResult5, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult5, this.props.path, data.path), _defineProperty(_postResult5, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult5, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult5));

                                case 14:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));

                function copy(_x11, _x12) {
                    return _copy.apply(this, arguments);
                }

                return copy;
            }()
        }, {
            key: "delete",
            value: function () {
                var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(params, properties) {
                    var path, file, data;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context7.next = 3;
                                    return this.api.getInfoByPath(path);

                                case 3:
                                    file = _context7.sent;

                                    if (isFolder(file)) {
                                        this.throwException("Attempting to delete a folder. Please provide a valid File.");
                                    }

                                    _context7.next = 7;
                                    return this.api.deleteFileOrFolder(file.id);

                                case 7:
                                    data = _context7.sent;
                                    postResult(_defineProperty({}, this.props.result, "File successfully moved to trash!"));

                                case 9:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));

                function _delete(_x13, _x14) {
                    return _delete2.apply(this, arguments);
                }

                return _delete;
            }()
        }, {
            key: "move",
            value: function () {
                var _move = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(params, properties) {
                    var _postResult7;

                    var sourcePath, destinationPath, item, itemId, pathSections, parentPath, parentId, destinationItem, destinationId, data;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                                case 0:
                                    sourcePath = this.getParam(properties, this.props.sourcePath);
                                    destinationPath = this.getParam(properties, this.props.destinationPath); // Have to "move" via the API

                                    _context8.next = 4;
                                    return this.api.getInfoByPath(sourcePath);

                                case 4:
                                    item = _context8.sent;

                                    if (isFolder(item)) {
                                        this.throwException("Expecting ".concat(sourcePath, " to be a file. Please provide a file."));
                                    }

                                    itemId = item.id;
                                    pathSections = sourcePath.split('/');
                                    parentPath = pathSections.slice(0, pathSections.length - 1).join('/');

                                    if (parentPath == '') {
                                        parentPath = '/';
                                    }

                                    _context8.next = 12;
                                    return this.api.getIdFromPath(parentPath);

                                case 12:
                                    parentId = _context8.sent;
                                    _context8.next = 15;
                                    return this.api.getInfoByPath(destinationPath);

                                case 15:
                                    destinationItem = _context8.sent;

                                    if (isFolder(destinationItem)) {
                                        destinationId = destinationItem.id;
                                    } else {
                                        this.throwException("".concat(destinationPath, " is not a folder. Please provide a valid folder path."));
                                    }

                                    _context8.next = 19;
                                    return this.api.moveFolderOrFile(itemId, parentId, destinationId);

                                case 19:
                                    data = _context8.sent;
                                    postResult((_postResult7 = {}, _defineProperty(_postResult7, this.props.id, data.id), _defineProperty(_postResult7, this.props.name, data.name), _defineProperty(_postResult7, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult7, this.props.directory, isFolder(data)), _defineProperty(_postResult7, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult7, this.props.path, data.path), _defineProperty(_postResult7, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult7, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult7));

                                case 21:
                                case "end":
                                    return _context8.stop();
                            }
                        }
                    }, _callee8, this);
                }));

                function move(_x15, _x16) {
                    return _move.apply(this, arguments);
                }

                return move;
            }() // async getThingsForUpload(id) {
            //     await this.api.getValidPaths(true);
            //     let newData = await this.api.getInfoById(id);
            //     let newPath = await this.api.getPathFromId(id);
            //     newData.path = newPath;
            //
            //     return newData
            //
            // }

        }, {
            key: "upload",
            value: function () {
                var _upload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(params, properties) {
                    var path, destinationFolder, destinationFolderId, file, metadata, xhr;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context9.next = 3;
                                    return this.api.getInfoByPath(path);

                                case 3:
                                    destinationFolder = _context9.sent;

                                    if (isFolder(destinationFolder)) {
                                        destinationFolderId = destinationFolder.id;
                                    } else {
                                        this.throwException("".concat(path, " is not a Folder. Please provide a valid Folder path."));
                                    }

                                    _context9.next = 7;
                                    return this.getParam(properties, this.props.file);

                                case 7:
                                    file = _context9.sent;
                                    // path is going to be the destination folder
                                    // TODO use this whenever we resolve the getAllHeaders weirdness
                                    // let data = await this.api.resumableUpload( file, destinationFolderId );
                                    metadata = {
                                        name: file.filename,
                                        parents: [destinationFolderId]
                                    };
                                    xhr = new XMLHttpRequest();

                                    xhr.onreadystatechange = function () {
                                        if (xhr.readyState !== 4) return;
                                        if (xhr.status !== 200) throw new Error(xhr.response);
                                        var uploadUrl = xhr.getResponseHeader("Location");
                                        var xhr2 = new XMLHttpRequest();

                                        xhr2.onreadystatechange = function () {
                                            if (xhr2.readyState !== 4) return;
                                            if (xhr2.status !== 200) throw new Error(xhr2.response); //TODO remove, this is for troubleshooting
                                            // throw new Error(JSON.stringify(xhr2.response))

                                            postResult({
                                                "id": xhr2.response.id,
                                                "result": 'File Uploaded Successfully',
                                                "name": file.filename,
                                                // "parentFolderId": item.parents? JSON.stringify(item.parents) : '',
                                                // "directory": isFolder(item),
                                                // // [this.props.properties]: JSON.stringify(data)
                                                // "tags": item.properties ? JSON.stringify(item.properties) : '',
                                                "path": "".concat(path).concat(file.filename) // "size": item.quotaBytesUsed,
                                                // "modifiedDate": item.modifiedTime,

                                            });
                                        };

                                        xhr2.open("PUT", uploadUrl);
                                        xhr2.responseType = "json";
                                        xhr2.setRequestHeader("Content-Type", "application/octet-stream");
                                        xhr2.withCredentials = true;
                                        xhr2.send(file);
                                    };

                                    xhr.open("POST", 'https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable');
                                    xhr.responseType = "json";
                                    xhr.setRequestHeader("X-Upload-Content-Type", "application/octet-stream");
                                    xhr.setRequestHeader("Content-Type", "application/json");
                                    xhr.withCredentials = true;
                                    xhr.send(JSON.stringify(metadata));

                                case 17:
                                case "end":
                                    return _context9.stop();
                            }
                        }
                    }, _callee9, this);
                }));

                function upload(_x17, _x18) {
                    return _upload.apply(this, arguments);
                }

                return upload;
            }()
        }, {
            key: "updateTags",
            value: function () {
                var _updateTags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(params, properties) {
                    var _postResult8;

                    var path, tags, propertiesObj, pathSections, parentPathSections, fileName, parentId, foundFiles, fileId, data;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) {
                            switch (_context10.prev = _context10.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    tags = this.getParam(properties, this.props.tags);
                                    propertiesObj = JSON.parse(tags);
                                    pathSections = path.split('/');
                                    parentPathSections = pathSections.slice(0, pathSections.length - 1);
                                    fileName = pathSections[pathSections.length - 1];
                                    _context10.next = 8;
                                    return this.api.getIdFromPath(parentPathSections.length > 1 ? parentPathSections.join('/') : '/');

                                case 8:
                                    parentId = _context10.sent;
                                    _context10.next = 11;
                                    return this.api.searchDrive("name contains '".concat(fileName, "' and '").concat(parentId, "' in parents"));

                                case 11:
                                    foundFiles = _context10.sent;
                                    fileId = foundFiles[0].id;
                                    _context10.next = 15;
                                    return this.api.updatePropertiesById(fileId, propertiesObj);

                                case 15:
                                    data = _context10.sent;
                                    postResult((_postResult8 = {}, _defineProperty(_postResult8, this.props.id, data.id), _defineProperty(_postResult8, this.props.name, data.name), _defineProperty(_postResult8, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult8, this.props.directory, isFolder(data)), _defineProperty(_postResult8, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult8, this.props.path, data.path), _defineProperty(_postResult8, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult8, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult8));

                                case 17:
                                case "end":
                                    return _context10.stop();
                            }
                        }
                    }, _callee10, this);
                }));

                function updateTags(_x19, _x20) {
                    return _updateTags.apply(this, arguments);
                }

                return updateTags;
            }()
        }, {
            key: "updateSingleTag",
            value: function () {
                var _updateSingleTag = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(params, properties) {
                    var _postResult9;

                    var path, tagName, tagValue, propertiesObj, pathSections, parentPathSections, fileName, parentId, foundFiles, fileId, data;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                        while (1) {
                            switch (_context11.prev = _context11.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    tagName = this.getParam(properties, this.props.tagName);
                                    tagValue = this.getParam(properties, this.props.tagValue);
                                    propertiesObj = _defineProperty({}, tagName, tagValue);
                                    pathSections = path.split('/');
                                    parentPathSections = pathSections.slice(0, pathSections.length - 1);
                                    fileName = pathSections[pathSections.length - 1];
                                    _context11.next = 9;
                                    return this.api.getIdFromPath(parentPathSections.length > 1 ? parentPathSections.join('/') : '/');

                                case 9:
                                    parentId = _context11.sent;
                                    _context11.next = 12;
                                    return this.api.searchDrive("name = '".concat(fileName, "' and '").concat(parentId, "' in parents"));

                                case 12:
                                    foundFiles = _context11.sent;
                                    fileId = foundFiles[0].id;
                                    _context11.next = 16;
                                    return this.api.updatePropertiesById(fileId, propertiesObj);

                                case 16:
                                    data = _context11.sent;
                                    postResult((_postResult9 = {}, _defineProperty(_postResult9, this.props.id, data.id), _defineProperty(_postResult9, this.props.name, data.name), _defineProperty(_postResult9, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult9, this.props.directory, isFolder(data)), _defineProperty(_postResult9, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult9, this.props.path, data.path), _defineProperty(_postResult9, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult9, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult9));

                                case 18:
                                case "end":
                                    return _context11.stop();
                            }
                        }
                    }, _callee11, this);
                }));

                function updateSingleTag(_x21, _x22) {
                    return _updateSingleTag.apply(this, arguments);
                }

                return updateSingleTag;
            }()
        }]);

        return File;
    }(K2BaseSmartObject_1);

    var File_1 = File;

    var folderProps = fileStorageSharedPropertiesAndMethods.folderProps,
        folderPropertiesObj = fileStorageSharedPropertiesAndMethods.folderPropertiesObj,
        folderMethods = fileStorageSharedPropertiesAndMethods.folderMethods,
        folderMethodsObj = fileStorageSharedPropertiesAndMethods.folderMethodsObj;

    function isFolder$1(f) {
        var type = f.mimeType; // console.log("type: ", type);

        return type === "application/vnd.google-apps.folder" ? true : false;
    } // Returns the first id out of the `parents` array
    // function getParentId(f) {
    //     if (f.parents){
    //         let p = f.parents;
    //         return p[0];
    //     } else {
    //         return ''
    //     }
    //
    // }


    var Folder = /*#__PURE__*/function (_K2BaseSmartObject) {
        _inherits(Folder, _K2BaseSmartObject);

        var _super = _createSuper(Folder);

        function Folder(params) {
            var _this;

            _classCallCheck(this, Folder);

            _this = _super.call(this, params);
            _this.name = "folder";
            _this.displayName = "Folder";
            _this.description = "Folder";
            _this.props = _objectSpread2({}, folderProps);
            _this.methods = _objectSpread2({}, folderMethods);
            return _this;
        }

        _createClass(Folder, [{
            key: "getProperties",
            value: function getProperties() {
                return _objectSpread2({}, folderPropertiesObj);
            }
        }, {
            key: "getMethods",
            value: function getMethods() {
                return _objectSpread2({}, folderMethodsObj);
            }
        }, {
            key: "listContents",
            value: function () {
                var _listContents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, properties) {
                    var _this2 = this;

                    var path, id, rootFolder, data;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);

                                    if (!(path === '' || path === '/')) {
                                        _context.next = 8;
                                        break;
                                    }

                                    _context.next = 4;
                                    return this.api.getInfoById('root');

                                case 4:
                                    rootFolder = _context.sent;
                                    id = rootFolder.id;
                                    _context.next = 11;
                                    break;

                                case 8:
                                    _context.next = 10;
                                    return this.api.getIdFromPath(path);

                                case 10:
                                    id = _context.sent;

                                case 11:
                                    _context.next = 13;
                                    return this.api.listFolderContents(id);

                                case 13:
                                    data = _context.sent;
                                    postResult(data.map(function (x) {
                                        var _ref;

                                        return _ref = {}, _defineProperty(_ref, _this2.props.id, x.id), _defineProperty(_ref, _this2.props.directory, isFolder$1(x)), _defineProperty(_ref, _this2.props.tags, x.properties ? JSON.stringify(x.properties) : ''), _defineProperty(_ref, _this2.props.path, x.path), _defineProperty(_ref, _this2.props.size, x.quotaBytesUsed), _defineProperty(_ref, _this2.props.parentFolderId, x.parents ? JSON.stringify(x.parents) : ''), _defineProperty(_ref, _this2.props.name, x.name), _defineProperty(_ref, _this2.props.modifiedDate, new Date(x.modifiedTime)), _ref;
                                    }));

                                case 15:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function listContents(_x, _x2) {
                    return _listContents.apply(this, arguments);
                }

                return listContents;
            }()
        }, {
            key: "getInfoById",
            value: function () {
                var _getInfoById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params, properties) {
                    var _postResult;

                    var id, data, path;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    id = this.getParam(properties, this.props.id);
                                    _context2.next = 3;
                                    return this.api.getInfoById(id);

                                case 3:
                                    data = _context2.sent;
                                    _context2.next = 6;
                                    return this.api.getPathFromId(data);

                                case 6:
                                    path = _context2.sent;
                                    postResult((_postResult = {}, _defineProperty(_postResult, this.props.id, data.id), _defineProperty(_postResult, this.props.name, data.name), _defineProperty(_postResult, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult, this.props.directory, true), _defineProperty(_postResult, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult, this.props.path, path), _defineProperty(_postResult, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult));

                                case 8:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function getInfoById(_x3, _x4) {
                    return _getInfoById.apply(this, arguments);
                }

                return getInfoById;
            }()
        }, {
            key: "getInfo",
            value: function () {
                var _getInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params, properties) {
                    var _postResult2;

                    var path, folderId, data, verifiedPath;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context3.next = 3;
                                    return this.api.getIdFromPath(path);

                                case 3:
                                    folderId = _context3.sent;
                                    _context3.next = 6;
                                    return this.api.getInfoById(folderId);

                                case 6:
                                    data = _context3.sent;
                                    _context3.next = 9;
                                    return this.api.getPathFromId(data);

                                case 9:
                                    verifiedPath = _context3.sent;
                                    postResult((_postResult2 = {}, _defineProperty(_postResult2, this.props.id, data.id), _defineProperty(_postResult2, this.props.name, data.name), _defineProperty(_postResult2, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult2, this.props.directory, true), _defineProperty(_postResult2, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult2, this.props.path, verifiedPath), _defineProperty(_postResult2, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult2, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult2));

                                case 11:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function getInfo(_x5, _x6) {
                    return _getInfo.apply(this, arguments);
                }

                return getInfo;
            }()
        }, {
            key: "copy",
            value: function () {
                var _copy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params, properties) {
                    var _postResult3;

                    var sourcePath, destinationPath, sourcePathId, destinationPathId, data;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    sourcePath = this.getParam(properties, this.props.sourcePath);
                                    destinationPath = this.getParam(properties, this.props.destinationPath);
                                    _context4.next = 4;
                                    return this.api.getIdFromPath(sourcePath);

                                case 4:
                                    sourcePathId = _context4.sent;
                                    _context4.next = 7;
                                    return this.api.getIdFromPath(destinationPath);

                                case 7:
                                    destinationPathId = _context4.sent;
                                    _context4.next = 10;
                                    return this.api.copyEntireFolder(sourcePathId, destinationPathId);

                                case 10:
                                    data = _context4.sent;
                                    console.log(data);
                                    postResult((_postResult3 = {}, _defineProperty(_postResult3, this.props.id, data.id), _defineProperty(_postResult3, this.props.name, data.name), _defineProperty(_postResult3, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult3, this.props.directory, true), _defineProperty(_postResult3, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult3, this.props.path, data.path), _defineProperty(_postResult3, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult3, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult3));

                                case 13:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function copy(_x7, _x8) {
                    return _copy.apply(this, arguments);
                }

                return copy;
            }()
        }, {
            key: "create",
            value: function () {
                var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params, properties) {
                    var _postResult4;

                    var path, pathSections, parentPathSections, newFolderName, parentId, data;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);

                                    if (path == '/') {
                                        this.throwException("Attempting to create Root folder at '/', please provide new desired path");
                                    }

                                    pathSections = path.split('/');
                                    parentPathSections = pathSections.slice(0, pathSections.length - 1);
                                    newFolderName = pathSections[pathSections.length - 1];
                                    _context5.next = 7;
                                    return this.api.getIdFromPath(parentPathSections.length > 1 ? parentPathSections.join('/') : '/');

                                case 7:
                                    parentId = _context5.sent;
                                    _context5.next = 10;
                                    return this.api.createFolder(newFolderName, parentId);

                                case 10:
                                    data = _context5.sent;
                                    console.log(data);
                                    postResult((_postResult4 = {}, _defineProperty(_postResult4, this.props.id, data.id), _defineProperty(_postResult4, this.props.name, data.name), _defineProperty(_postResult4, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult4, this.props.directory, true), _defineProperty(_postResult4, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult4, this.props.path, data.path), _defineProperty(_postResult4, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult4, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult4));

                                case 13:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function create(_x9, _x10) {
                    return _create.apply(this, arguments);
                }

                return create;
            }()
        }, {
            key: "delete",
            value: function () {
                var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params, properties) {
                    var path, folder, data;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context6.next = 3;
                                    return this.api.getInfoByPath(path);

                                case 3:
                                    folder = _context6.sent;
                                    _context6.next = 6;
                                    return this.api.deleteFileOrFolder(folder.id);

                                case 6:
                                    data = _context6.sent;
                                    postResult({}); // No outputs

                                case 8:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));

                function _delete(_x11, _x12) {
                    return _delete2.apply(this, arguments);
                }

                return _delete;
            }()
        }, {
            key: "getShareUrl",
            value: function () {
                var _getShareUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(params, properties) {
                    var _postResult5;

                    var path, folderId, data;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    _context7.next = 3;
                                    return this.api.getIdFromPath(path);

                                case 3:
                                    folderId = _context7.sent;
                                    _context7.next = 6;
                                    return this.api.getShareUrlById(folderId);

                                case 6:
                                    data = _context7.sent;
                                    postResult((_postResult5 = {}, _defineProperty(_postResult5, this.props.id, data.id), _defineProperty(_postResult5, this.props.name, data.name), _defineProperty(_postResult5, this.props.shareUrl, data.webViewLink), _postResult5));

                                case 8:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));

                function getShareUrl(_x13, _x14) {
                    return _getShareUrl.apply(this, arguments);
                }

                return getShareUrl;
            }()
        }, {
            key: "getShareUrlById",
            value: function () {
                var _getShareUrlById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(params, properties) {
                    var _postResult6;

                    var id, data;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                                case 0:
                                    id = this.getParam(properties, this.props.id);
                                    _context8.next = 3;
                                    return this.api.getShareUrlById(id);

                                case 3:
                                    data = _context8.sent;
                                    postResult((_postResult6 = {}, _defineProperty(_postResult6, this.props.id, data.id), _defineProperty(_postResult6, this.props.name, data.name), _defineProperty(_postResult6, this.props.shareUrl, data.webViewLink), _postResult6));

                                case 5:
                                case "end":
                                    return _context8.stop();
                            }
                        }
                    }, _callee8, this);
                }));

                function getShareUrlById(_x15, _x16) {
                    return _getShareUrlById.apply(this, arguments);
                }

                return getShareUrlById;
            }()
        }, {
            key: "move",
            value: function () {
                var _move = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(params, properties) {
                    var _postResult7;

                    var sourcePath, destinationPath, item, itemId, pathSections, parentPath, parentId, destinationItem, destinationId, data;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                                case 0:
                                    sourcePath = this.getParam(properties, this.props.sourcePath);
                                    destinationPath = this.getParam(properties, this.props.destinationPath); // Have to "move" via the API

                                    _context9.next = 4;
                                    return this.api.getInfoByPath(sourcePath);

                                case 4:
                                    item = _context9.sent;

                                    if (!isFolder$1(item)) {
                                        this.throwException("".concat(sourcePath, " is note a folder. Please provide a valid Folder."));
                                    }

                                    itemId = item.id;
                                    pathSections = sourcePath.split('/');
                                    parentPath = pathSections.slice(0, pathSections.length - 1).join('/');

                                    if (parentPath == '') {
                                        parentPath = '/';
                                    }

                                    _context9.next = 12;
                                    return this.api.getIdFromPath(parentPath);

                                case 12:
                                    parentId = _context9.sent;
                                    _context9.next = 15;
                                    return this.api.getInfoByPath(destinationPath);

                                case 15:
                                    destinationItem = _context9.sent;

                                    if (isFolder$1(destinationItem)) {
                                        destinationId = destinationItem.id;
                                    } else {
                                        this.throwException("".concat(destinationPath, " is not a folder. Please provide a valid folder path."));
                                    }

                                    _context9.next = 19;
                                    return this.api.moveFolderOrFile(itemId, parentId, destinationId);

                                case 19:
                                    data = _context9.sent;
                                    console.log(data);
                                    postResult((_postResult7 = {}, _defineProperty(_postResult7, this.props.id, data.id), _defineProperty(_postResult7, this.props.name, data.name), _defineProperty(_postResult7, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult7, this.props.directory, true), _defineProperty(_postResult7, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult7, this.props.path, data.path), _defineProperty(_postResult7, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult7, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult7));

                                case 22:
                                case "end":
                                    return _context9.stop();
                            }
                        }
                    }, _callee9, this);
                }));

                function move(_x17, _x18) {
                    return _move.apply(this, arguments);
                }

                return move;
            }()
        }, {
            key: "updateTags",
            value: function () {
                var _updateTags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(params, properties) {
                    var _postResult8;

                    var path, tags, propertiesObj, folderId, data;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) {
                            switch (_context10.prev = _context10.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    tags = this.getParam(properties, this.props.tags);
                                    propertiesObj = JSON.parse(tags);
                                    _context10.next = 5;
                                    return this.api.getIdFromPath(path);

                                case 5:
                                    folderId = _context10.sent;
                                    _context10.next = 8;
                                    return this.api.updatePropertiesById(folderId, propertiesObj);

                                case 8:
                                    data = _context10.sent;
                                    console.log(data);
                                    postResult((_postResult8 = {}, _defineProperty(_postResult8, this.props.id, data.id), _defineProperty(_postResult8, this.props.name, data.name), _defineProperty(_postResult8, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult8, this.props.directory, true), _defineProperty(_postResult8, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult8, this.props.path, data.path), _defineProperty(_postResult8, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult8, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult8));

                                case 11:
                                case "end":
                                    return _context10.stop();
                            }
                        }
                    }, _callee10, this);
                }));

                function updateTags(_x19, _x20) {
                    return _updateTags.apply(this, arguments);
                }

                return updateTags;
            }()
        }, {
            key: "updateSingleTag",
            value: function () {
                var _updateSingleTag = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(params, properties) {
                    var _postResult9;

                    var path, tagName, tagValue, propertiesObj, folderId, data;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                        while (1) {
                            switch (_context11.prev = _context11.next) {
                                case 0:
                                    path = this.getParam(properties, this.props.path);
                                    tagName = this.getParam(properties, this.props.tagName);
                                    tagValue = this.getParam(properties, this.props.tagValue);
                                    propertiesObj = _defineProperty({}, tagName, tagValue);
                                    _context11.next = 6;
                                    return this.api.getIdFromPath(path);

                                case 6:
                                    folderId = _context11.sent;
                                    _context11.next = 9;
                                    return this.api.updatePropertiesById(folderId, propertiesObj);

                                case 9:
                                    data = _context11.sent;
                                    console.log(data);
                                    postResult((_postResult9 = {}, _defineProperty(_postResult9, this.props.id, data.id), _defineProperty(_postResult9, this.props.name, data.name), _defineProperty(_postResult9, this.props.parentFolderId, data.parents ? JSON.stringify(data.parents) : ''), _defineProperty(_postResult9, this.props.directory, true), _defineProperty(_postResult9, this.props.tags, data.properties ? JSON.stringify(data.properties) : ''), _defineProperty(_postResult9, this.props.path, data.path), _defineProperty(_postResult9, this.props.size, data.quotaBytesUsed), _defineProperty(_postResult9, this.props.modifiedDate, new Date(data.modifiedTime)), _postResult9));

                                case 12:
                                case "end":
                                    return _context11.stop();
                            }
                        }
                    }, _callee11, this);
                }));

                function updateSingleTag(_x21, _x22) {
                    return _updateSingleTag.apply(this, arguments);
                }

                return updateSingleTag;
            }()
        }]);

        return Folder;
    }(K2BaseSmartObject_1);

    var Folder_1 = Folder;

    var serviceProps = fileStorageSharedPropertiesAndMethods.serviceProps,
        servicePropertiesObj = fileStorageSharedPropertiesAndMethods.servicePropertiesObj,
        serviceMethods = fileStorageSharedPropertiesAndMethods.serviceMethods,
        serviceMethodsObj = fileStorageSharedPropertiesAndMethods.serviceMethodsObj;

    function isFolder$2(f) {
        var type = f.mimeType; // console.log("type: ", type);

        return type === "application/vnd.google-apps.folder" ? true : false;
    } // Returns the first id out of the `parents` array

    var Service = /*#__PURE__*/function (_K2BaseSmartObject) {
        _inherits(Service, _K2BaseSmartObject);

        var _super = _createSuper(Service);

        function Service(params) {
            var _this;

            _classCallCheck(this, Service);

            _this = _super.call(this, params);
            _this.name = "service";
            _this.displayName = "Service";
            _this.description = "Service";
            _this.props = _objectSpread2({}, serviceProps);
            _this.methods = _objectSpread2({}, serviceMethods);
            return _this;
        }

        _createClass(Service, [{
            key: "getProperties",
            value: function getProperties() {
                return _objectSpread2({}, servicePropertiesObj);
            }
        }, {
            key: "getMethods",
            value: function getMethods() {
                return _objectSpread2({}, serviceMethodsObj);
            }
        }, {
            key: "search",
            value: function () {
                var _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, properties) {
                    var _this2 = this;

                    var data;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.api.searchDrive(properties[this.props.keyWords]);

                                case 2:
                                    data = _context.sent;
                                    // Only returns id, name and directory -- get info by that id for full response
                                    postResult(data.map(function (x) {
                                        var _ref;

                                        return _ref = {}, _defineProperty(_ref, _this2.props.id, x.id), _defineProperty(_ref, _this2.props.name, x.name), _defineProperty(_ref, _this2.props.directory, isFolder$2(x)), _defineProperty(_ref, _this2.props.path, x.path), _defineProperty(_ref, _this2.props.parentFolderId, x.parents ? JSON.stringify(x.parents) : ''), _defineProperty(_ref, _this2.props.tags, x.properties ? JSON.stringify(x.properties) : ''), _defineProperty(_ref, _this2.props.size, x.quotaBytesUsed ? x.quotaBytesUsed : x.size), _defineProperty(_ref, _this2.props.modifiedDate, new Date(x.modifiedTime)), _ref;
                                    }));

                                case 4:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function search(_x, _x2) {
                    return _search.apply(this, arguments);
                }

                return search;
            }()
        }, {
            key: "getQuota",
            value: function () {
                var _getQuota = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params, properties) {
                    var _postResult;

                    var data, quota;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.api.getServiceQuota();

                                case 2:
                                    data = _context2.sent;
                                    quota = data.storageQuota; // let total = data.allocation.allocated;
                                    // TODO: Not sure what total should be

                                    /*
                      "storageQuota": {
                      "limit": "32212254720",
                      "usage": "136896853",
                      "usageInDrive": "126360542",
                      "usageInDriveTrash": "0"
                  }
                  */

                                    postResult((_postResult = {}, _defineProperty(_postResult, this.props.used, quota.usage), _defineProperty(_postResult, this.props.total, quota.limit), _defineProperty(_postResult, this.props.shared, quota.limit), _postResult));

                                case 5:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function getQuota(_x3, _x4) {
                    return _getQuota.apply(this, arguments);
                }

                return getQuota;
            }()
        }]);

        return Service;
    }(K2BaseSmartObject_1);

    var Service_1 = Service;

    var AsyncXHR = /*#__PURE__*/function (_LHBaseClass) {
        _inherits(AsyncXHR, _LHBaseClass);

        var _super = _createSuper(AsyncXHR);

        function AsyncXHR(params) {
            _classCallCheck(this, AsyncXHR);

            return _super.call(this, params);
        }

        _createClass(AsyncXHR, [{
            key: "get",
            value: function () {
                var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, headers, data, options) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this._request("GET", url, headers, data, options);

                                case 2:
                                    return _context.abrupt("return", _context.sent);

                                case 3:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function get(_x, _x2, _x3, _x4) {
                    return _get.apply(this, arguments);
                }

                return get;
            }()
        }, {
            key: "post",
            value: function () {
                var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, headers, data) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this._request("POST", url, headers, data);

                                case 2:
                                    return _context2.abrupt("return", _context2.sent);

                                case 3:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function post(_x5, _x6, _x7) {
                    return _post.apply(this, arguments);
                }

                return post;
            }()
        }, {
            key: "delete",
            value: function () {
                var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, headers, data) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _context3.next = 2;
                                    return this._request("DELETE", url, headers, data);

                                case 2:
                                    return _context3.abrupt("return", _context3.sent);

                                case 3:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function _delete(_x8, _x9, _x10) {
                    return _delete2.apply(this, arguments);
                }

                return _delete;
            }()
        }, {
            key: "patch",
            value: function () {
                var _patch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url, headers, data) {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    _context4.next = 2;
                                    return this._request("PATCH", url, headers, data);

                                case 2:
                                    return _context4.abrupt("return", _context4.sent);

                                case 3:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function patch(_x11, _x12, _x13) {
                    return _patch.apply(this, arguments);
                }

                return patch;
            }()
        }, {
            key: "put",
            value: function () {
                var _put = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url, headers, data) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    _context5.next = 2;
                                    return this._request("PUT", url, headers, data);

                                case 2:
                                    return _context5.abrupt("return", _context5.sent);

                                case 3:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                function put(_x14, _x15, _x16) {
                    return _put.apply(this, arguments);
                }

                return put;
            }()
        }, {
            key: "_request",
            value: function () {
                var _request2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(type, url, headers, data) {

                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    return _context6.abrupt("return", new Promise(function (resolve, reject) {
                                        var xhr = new XMLHttpRequest();

                                        xhr.onreadystatechange = function () {
                                            // makes sure its in the final state
                                            if (xhr.readyState !== 4) return;

                                            if (xhr.status <= 400) {
                                                if (xhr.status == 204) {
                                                    resolve(xhr.responseText);
                                                } else if (xhr.status == 202) {
                                                    resolve(null);
                                                } else {
                                                    try {
                                                        var obj = JSON.parse(xhr.responseText);
                                                        resolve(obj);
                                                    } catch (e) {
                                                        resolve(xhr.responseText); // _this.throwException(`Error on parse JSON: '${xhr.responseText}' with code ${xhr.status}`);
                                                    }
                                                }
                                            } // error
                                            else {
                                                reject("Failed with status " + xhr.status);
                                            }
                                        };

                                        xhr.open(type.toUpperCase(), url);
                                        xhr.withCredentials = true; // xhr.setRequestHeader("Accept", "application/json");
                                        // xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                                        // if (type.toUpperCase() == "PUT" || type.toUpperCase() == "POST" || type.toUpperCase() == "PATCH") {
                                        //     xhr.setRequestHeader("Content-Type", "application/json");
                                        // }

                                        for (var key in headers) {
                                            xhr.setRequestHeader(key, headers[key]);
                                        }

                                        xhr.send(data);
                                    }));

                                case 3:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));

                function _request(_x17, _x18, _x19, _x20) {
                    return _request2.apply(this, arguments);
                }

                return _request;
            }()
        }]);

        return AsyncXHR;
    }(LHBaseClass_1);

    var AsyncXHR_1 = AsyncXHR;

    var URLSearchParamsPartial = /*#__PURE__*/function () {
        function URLSearchParamsPartial(dict) {
            _classCallCheck(this, URLSearchParamsPartial);

            this.dict = dict;
        }

        _createClass(URLSearchParamsPartial, [{
            key: "toString",
            value: function toString() {
                var dict = this.dict;
                var query = [];

                for (var key in dict) {
                    var name = this.encode(key);
                    var value = dict[key];
                    query.push(name + '=' + this.encode(value));
                }

                return query.join('&');
            }
        }, {
            key: "encode",
            value: function encode(str) {
                var replace = {
                    '!': '%21',
                    "'": '%27',
                    '(': '%28',
                    ')': '%29',
                    '~': '%7E',
                    '%20': '+',
                    '%00': '\x00'
                };
                return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function (match) {
                    return replace[match];
                });
            }
        }]);

        return URLSearchParamsPartial;
    }();

    var URLSearchParamsPartial_1 = URLSearchParamsPartial;

    var fetch = createCommonjsModule(function (module) {
        (function (self) {
            // with Ajax.

            if (!self.__disableNativeFetch && self.fetch) {
                return;
            }

            function normalizeName(name) {
                if (typeof name !== 'string') {
                    name = String(name);
                }

                if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
                    throw new TypeError('Invalid character in header field name');
                }

                return name.toLowerCase();
            }

            function normalizeValue(value) {
                if (typeof value !== 'string') {
                    value = String(value);
                }

                return value;
            }

            function Headers(headers) {
                this.map = {};

                if (headers instanceof Headers) {
                    headers.forEach(function (value, name) {
                        this.append(name, value);
                    }, this);
                } else if (headers) {
                    Object.getOwnPropertyNames(headers).forEach(function (name) {
                        this.append(name, headers[name]);
                    }, this);
                }
            }

            Headers.prototype.append = function (name, value) {
                name = normalizeName(name);
                value = normalizeValue(value);
                var list = this.map[name];

                if (!list) {
                    list = [];
                    this.map[name] = list;
                }

                list.push(value);
            };

            Headers.prototype['delete'] = function (name) {
                delete this.map[normalizeName(name)];
            };

            Headers.prototype.get = function (name) {
                var values = this.map[normalizeName(name)];
                return values ? values[0] : null;
            };

            Headers.prototype.getAll = function (name) {
                return this.map[normalizeName(name)] || [];
            };

            Headers.prototype.has = function (name) {
                return this.map.hasOwnProperty(normalizeName(name));
            };

            Headers.prototype.set = function (name, value) {
                this.map[normalizeName(name)] = [normalizeValue(value)];
            };

            Headers.prototype.forEach = function (callback, thisArg) {
                Object.getOwnPropertyNames(this.map).forEach(function (name) {
                    this.map[name].forEach(function (value) {
                        callback.call(thisArg, value, name, this);
                    }, this);
                }, this);
            };

            function consumed(body) {
                if (body.bodyUsed) {
                    return Promise.reject(new TypeError('Already read'));
                }

                body.bodyUsed = true;
            }

            function fileReaderReady(reader) {
                return new Promise(function (resolve, reject) {
                    reader.onload = function () {
                        resolve(reader.result);
                    };

                    reader.onerror = function () {
                        reject(reader.error);
                    };
                });
            }

            function readBlobAsArrayBuffer(blob) {
                var reader = new FileReader();
                reader.readAsArrayBuffer(blob);
                return fileReaderReady(reader);
            }

            function readBlobAsText(blob, options) {
                var reader = new FileReader();
                var contentType = options.headers.map['content-type'] ? options.headers.map['content-type'].toString() : '';
                var regex = /charset\=[0-9a-zA-Z\-\_]*;?/;

                var _charset = blob.type.match(regex) || contentType.match(regex);

                var args = [blob];

                if (_charset) {
                    args.push(_charset[0].replace(/^charset\=/, '').replace(/;$/, ''));
                }

                reader.readAsText.apply(reader, args);
                return fileReaderReady(reader);
            }

            var support = {
                blob: 'FileReader' in self && 'Blob' in self && function () {
                    try {
                        new Blob();
                        return true;
                    } catch (e) {
                        return false;
                    }
                }(),
                formData: 'FormData' in self,
                arrayBuffer: 'ArrayBuffer' in self
            };

            function Body() {
                this.bodyUsed = false;

                this._initBody = function (body, options) {
                    this._bodyInit = body;

                    if (typeof body === 'string') {
                        this._bodyText = body;
                    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                        this._bodyBlob = body;
                        this._options = options;
                    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                        this._bodyFormData = body;
                    } else if (!body) {
                        this._bodyText = '';
                    } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) ;
                };

                if (support.blob) {
                    this.blob = function () {
                        var rejected = consumed(this);

                        if (rejected) {
                            return rejected;
                        }

                        if (this._bodyBlob) {
                            return Promise.resolve(this._bodyBlob);
                        } else if (this._bodyFormData) {
                            throw new Error('could not read FormData body as blob');
                        } else {
                            return Promise.resolve(new Blob([this._bodyText]));
                        }
                    };

                    this.arrayBuffer = function () {
                        return this.blob().then(readBlobAsArrayBuffer);
                    };

                    this.text = function () {
                        var rejected = consumed(this);

                        if (rejected) {
                            return rejected;
                        }

                        if (this._bodyBlob) {
                            return readBlobAsText(this._bodyBlob, this._options);
                        } else if (this._bodyFormData) {
                            throw new Error('could not read FormData body as text');
                        } else {
                            return Promise.resolve(this._bodyText);
                        }
                    };
                } else {
                    this.text = function () {
                        var rejected = consumed(this);
                        return rejected ? rejected : Promise.resolve(this._bodyText);
                    };
                }

                if (support.formData) {
                    this.formData = function () {
                        return this.text().then(decode);
                    };
                }

                this.json = function () {
                    return this.text().then(JSON.parse);
                };

                return this;
            } // HTTP methods whose capitalization should be normalized


            var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

            function normalizeMethod(method) {
                var upcased = method.toUpperCase();
                return methods.indexOf(upcased) > -1 ? upcased : method;
            }

            function Request(input, options) {
                options = options || {};
                var body = options.body;

                if (Request.prototype.isPrototypeOf(input)) {
                    if (input.bodyUsed) {
                        throw new TypeError('Already read');
                    }

                    this.url = input.url;
                    this.responseType = input.responseType;
                    this.credentials = input.credentials;

                    if (!options.headers) {
                        this.headers = new Headers(input.headers);
                    }

                    this.method = input.method;
                    this.mode = input.mode;

                    if (!body) {
                        body = input._bodyInit;
                        input.bodyUsed = true;
                    }
                } else {
                    this.url = input;
                }

                this.responseType = options.responseType || this.responseType;
                this.credentials = options.credentials || this.credentials || 'omit';

                if (options.headers || !this.headers) {
                    this.headers = new Headers(options.headers);
                }

                this.method = normalizeMethod(options.method || this.method || 'GET');
                this.mode = options.mode || this.mode || null;
                this.referrer = null;

                if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                    throw new TypeError('Body not allowed for GET or HEAD requests');
                }

                this._initBody(body, options);
            }

            Request.prototype.clone = function () {
                return new Request(this);
            };

            function decode(body) {
                var form = new FormData();
                body.trim().split('&').forEach(function (bytes) {
                    if (bytes) {
                        var split = bytes.split('=');
                        var name = split.shift().replace(/\+/g, ' ');
                        var value = split.join('=').replace(/\+/g, ' ');
                        form.append(decodeURIComponent(name), decodeURIComponent(value));
                    }
                });
                return form;
            }

            function headers(xhr) {
                var head = new Headers(); // console.log(xhr._headers)
                // TODO figure out why this isn't supported
                // var pairs = xhr.getAllResponseHeaders().trim().split('\n')
                // pairs.forEach(function(header) {
                //     var split = header.trim().split(':')
                //     var key = split.shift().trim()
                //     var value = split.join(':').trim()
                //     head.append(key, value)
                // })
                // Alternative header parsing for now, using function we shouldn't use
                // for (var key in locationHeader) {
                //     if (locationHeader.hasOwnProperty(key)) {
                //         // Do things here
                //         head.append(key, locationHeader[key])
                //     }
                // }

                var locationHeader = xhr.getResponseHeader('location');

                if (locationHeader) {
                    head.append('location', locationHeader);
                }

                return head;
            }

            Body.call(Request.prototype);

            function Response(bodyInit, options) {
                if (!options) {
                    options = {};
                }

                this._initBody(bodyInit, options);

                this.type = 'default';
                this.status = options.status;
                this.ok = this.status >= 200 && this.status < 300;
                this.statusText = options.statusText;
                this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
                this.url = options.url || '';
            }

            Body.call(Response.prototype);

            Response.prototype.clone = function () {
                return new Response(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Headers(this.headers),
                    url: this.url
                });
            };

            Response.error = function () {
                var response = new Response(null, {
                    status: 0,
                    statusText: ''
                });
                response.type = 'error';
                return response;
            };

            var redirectStatuses = [301, 302, 303, 307, 308];

            Response.redirect = function (url, status) {
                if (redirectStatuses.indexOf(status) === -1) {
                    throw new RangeError('Invalid status code');
                }

                return new Response(null, {
                    status: status,
                    headers: {
                        location: url
                    }
                });
            };

            self.Headers = Headers;
            self.Request = Request;
            self.Response = Response;

            self.fetch = function (input, init) {
                return new Promise(function (resolve, reject) {
                    var request;

                    if (Request.prototype.isPrototypeOf(input) && !init) {
                        request = input;
                    } else {
                        request = new Request(input, init);
                    }

                    var xhr = new XMLHttpRequest();

                    function responseURL() {
                        if ('responseURL' in xhr) {
                            return xhr.responseURL;
                        } // TODO Figure out why this isnt supported
                        // // Avoid security warnings on getResponseHeader when not allowed by CORS
                        // if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
                        //     return xhr.getResponseHeader('X-Request-URL')
                        // }


                        return;
                    }

                    var __onLoadHandled = false;

                    function onload() {
                        if (xhr.readyState !== 4) {
                            return;
                        }

                        var status = xhr.status === 1223 ? 204 : xhr.status;

                        if (status < 100 || status > 599) {
                            if (__onLoadHandled) {
                                return;
                            } else {
                                __onLoadHandled = true;
                            }

                            reject(new TypeError('Network request failed'));
                            return;
                        }

                        var options = {
                            status: status,
                            statusText: xhr.statusText,
                            headers: headers(xhr),
                            url: responseURL()
                        };
                        var body = 'response' in xhr ? xhr.response : xhr.responseText;

                        if (__onLoadHandled) {
                            return;
                        } else {
                            __onLoadHandled = true;
                        }

                        resolve(new Response(body, options));
                    }

                    xhr.onreadystatechange = onload;
                    xhr.onload = onload;

                    xhr.onerror = function () {
                        if (__onLoadHandled) {
                            return;
                        } else {
                            __onLoadHandled = true;
                        }

                        reject(new TypeError('Network request failed'));
                    };

                    xhr.open(request.method, request.url, true); // `withCredentials` should be setted after calling `.open` in IE10
                    // http://stackoverflow.com/a/19667959/1219343

                    try {
                        if (request.credentials === 'include') {
                            // if ('withCredentials' in xhr) {
                            xhr.withCredentials = true; // } else {
                            //     console && console.warn && console.warn('withCredentials is not supported, you can ignore this warning');
                            // }
                            // console.log(`Inside fetch, here's responseType ${request.responseType}`)
                        }
                    } catch (e) {
                        console && console.warn && console.warn('set withCredentials error:' + e);
                    }

                    if ('responseType' in xhr && support.blob || request.responseType === 'blob') {
                        xhr.responseType = 'blob';
                    } // if ('responseType' in xhr && request.jsonResponseType) {
                    //     xhr.responseType = 'json'
                    // }


                    request.headers.forEach(function (value, name) {
                        xhr.setRequestHeader(name, value);
                    });
                    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
                });
            };

            self.fetch.polyfill = true; // Support CommonJS

            if ( module.exports) {
                module.exports = self.fetch;
            }
        })(commonjsGlobal);
    });

    var GoogleDriveAPI = /*#__PURE__*/function (_LHBaseClass) {
        _inherits(GoogleDriveAPI, _LHBaseClass);

        var _super = _createSuper(GoogleDriveAPI);

        function GoogleDriveAPI(params) {
            var _this;

            _classCallCheck(this, GoogleDriveAPI);

            _this = _super.call(this, params); // this.credId = this.getParam(params, "credentialId", "");

            _this.access_token = _this.getParam(params, "accessToken", null);
            _this.clientId = _this.getParam(params, "clientId", null);
            _this.clientSecret = _this.getParam(params, "clientSecret", null);
            _this.redirectUri = _this.getParam(params, "redirectUri", null);
            _this.scopes = _this.getParam(params, "scopes", null);
            _this.request = new AsyncXHR_1();
            _this.validPaths = [];
            _this.baseUrl = "https://www.googleapis.com"; // Basic endpoint to recieve params - works for files and folders

            _this.FileEndpoint = "/drive/v3/files";
            _this.FileUploadEndpoint = "/upload/drive/v3/files";
            _this.PermissionsPathFragment = '/permissions'; // ^ but with file or folder id

            _this.FileEndpointId = function (fileId) {
                return "/drive/v3/files/".concat(fileId);
            };

            return _this;
        }

        _createClass(GoogleDriveAPI, [{
            key: "updateKeys",
            value: function updateKeys(params) {
                this.clientId = this.getParam(params, "clientId", null);
                this.clientSecret = this.getParam(params, "clientSecret", null);
                this.redirectUri = this.getParam(params, "redirectUri", null);
                this.scopes = this.getParam(params, "scopes", null);
            }
        }, {
            key: "setCredId",
            value: function () {
                var _setCredId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(credId) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    this.credId = credId;

                                case 1:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function setCredId(_x) {
                    return _setCredId.apply(this, arguments);
                }

                return setCredId;
            }()
        }, {
            key: "setAccessToken",
            value: function setAccessToken(access_token) {
                this.access_token = access_token;
            }
        }, {
            key: "_get",
            value: function () {
                var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
                    var qs, res;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    qs = new URLSearchParamsPartial_1(options.qs);
                                    qs = "?" + qs.toString(); // let res = await this.request.get( `${options.uri}${qs}`, options.headers, null);
                                    // return res;

                                    _context2.next = 4;
                                    return fetch("".concat(options.uri).concat(qs), {
                                        method: "get",
                                        headers: options.headers,
                                        credentials: "include",
                                        responseType: options.responseType
                                    });

                                case 4:
                                    res = _context2.sent;

                                    if (!(options.responseType === 'blob')) {
                                        _context2.next = 11;
                                        break;
                                    }

                                    _context2.next = 8;
                                    return res;

                                case 8:
                                    return _context2.abrupt("return", _context2.sent);

                                case 11:
                                    _context2.next = 13;
                                    return res.json();

                                case 13:
                                    return _context2.abrupt("return", _context2.sent);

                                case 14:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2);
                }));

                function _get(_x2) {
                    return _get2.apply(this, arguments);
                }

                return _get;
            }()
        }, {
            key: "_post",
            value: function () {
                var _post2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
                    var qs, formQs, res;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    qs = '';

                                    if (options.qs) {
                                        qs = new URLSearchParamsPartial_1(options.qs);
                                        qs = "?" + qs.toString();
                                    }

                                    if ("form" in options) {
                                        formQs = new URLSearchParams(options.form);
                                        options.body = formQs.toString();
                                        delete options.form;
                                    }

                                    options.credentials = "include"; // options.

                                    _context3.next = 6;
                                    return fetch("".concat(options.uri).concat(qs), options);

                                case 6:
                                    res = _context3.sent;

                                    if (!qs.includes('resumable')) {
                                        _context3.next = 13;
                                        break;
                                    }

                                    _context3.next = 10;
                                    return res;

                                case 10:
                                    return _context3.abrupt("return", _context3.sent);

                                case 13:
                                    _context3.next = 15;
                                    return res.json();

                                case 15:
                                    return _context3.abrupt("return", _context3.sent);

                                case 16:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3);
                }));

                function _post(_x3) {
                    return _post2.apply(this, arguments);
                }

                return _post;
            }()
        }, {
            key: "_delete",
            value: function () {
                var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(options) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    // return await rp(options);
                                    // return await this.request.delete( options.uri, options.headers, null);
                                    options.credentials = "include";
                                    _context4.next = 3;
                                    return fetch(options.uri, options);

                                case 3:
                                    res = _context4.sent;

                                    if (!(res.status !== 204)) {
                                        _context4.next = 8;
                                        break;
                                    }

                                    this.throwException("Delete failed");
                                    _context4.next = 9;
                                    break;

                                case 8:
                                    return _context4.abrupt("return", res);

                                case 9:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function _delete(_x4) {
                    return _delete2.apply(this, arguments);
                }

                return _delete;
            }()
        }, {
            key: "_patch",
            value: function () {
                var _patch2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(options) {
                    var qs, res;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    qs = '';

                                    if (options.qs) {
                                        qs = new URLSearchParamsPartial_1(options.qs);
                                        qs = "?" + qs.toString();
                                    }
                                    options.credentials = "include";
                                    _context5.next = 6;
                                    return fetch("".concat(options.uri).concat(qs), options);

                                case 6:
                                    res = _context5.sent;
                                    _context5.next = 9;
                                    return res.json();

                                case 9:
                                    return _context5.abrupt("return", _context5.sent);

                                case 10:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5);
                }));

                function _patch(_x5) {
                    return _patch2.apply(this, arguments);
                }

                return _patch;
            }()
        }, {
            key: "_put",
            value: function () {
                var _put2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(options) {
                    var qs, res;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    qs = '';

                                    if (options.qs) {
                                        qs = new URLSearchParamsPartial_1(options.qs);
                                        qs = "?" + qs.toString();
                                    }

                                    options.credentials = "include";
                                    _context6.next = 5;
                                    return fetch("".concat(options.uri).concat(qs), options);

                                case 5:
                                    res = _context6.sent;
                                    _context6.next = 8;
                                    return res.json();

                                case 8:
                                    return _context6.abrupt("return", _context6.sent);

                                case 9:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6);
                }));

                function _put(_x6) {
                    return _put2.apply(this, arguments);
                }

                return _put;
            }() // AUTH
            // This is more effectively executed for testing in ../auth_sdk.js, where a new browser is opened

        }, {
            key: "getSuccessCode",
            value: function () {
                var _getSuccessCode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                    var options, res;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    options = {
                                        uri: "https://accounts.google.com/o/oauth2/auth",
                                        qs: {
                                            client_id: this.clientId,
                                            //process.env.CLIENT_ID,
                                            redirect_uri: this.redirectUri,
                                            //process.env.REDIRECT_URI,
                                            response_type: "token",
                                            scope: this.scopes,
                                            //process.env.SCOPES,
                                            access_type: "offline",
                                            include_granted_scopes: "true"
                                        }
                                    };
                                    _context7.next = 3;
                                    return this._get(options);

                                case 3:
                                    res = _context7.sent;
                                    return _context7.abrupt("return", res);

                                case 5:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));

                function getSuccessCode() {
                    return _getSuccessCode.apply(this, arguments);
                }

                return getSuccessCode;
            }() //

        }, {
            key: "getAccessToken",
            value: function () {
                var _getAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(code) {
                    var body, options, res;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                                case 0:
                                    body = {
                                        code: code,
                                        client_id: this.clientId,
                                        //process.env.CLIENT_ID,
                                        client_secret: this.clientSecret,
                                        //process.env.CLIENT_SECRET,
                                        redirect_uri: this.redirectUri,
                                        //process.env.REDIRECT_URI,
                                        grant_type: "authorization_code"
                                    };
                                    options = {
                                        method: "POST",
                                        uri: "https://oauth2.googleapis.com/token",
                                        // Send as application type= www form encoded
                                        form: body,
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        }
                                    };
                                    _context8.next = 4;
                                    return this._post(options);

                                case 4:
                                    res = _context8.sent;
                                    this.setAccessToken(res.access_token);
                                    return _context8.abrupt("return", res);

                                case 7:
                                case "end":
                                    return _context8.stop();
                            }
                        }
                    }, _callee8, this);
                }));

                function getAccessToken(_x7) {
                    return _getAccessToken.apply(this, arguments);
                }

                return getAccessToken;
            }()
        }, {
            key: "refreshAccessToken",
            value: function () {
                var _refreshAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(refreshToken) {
                    var body, options, res;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                                case 0:
                                    if (!refreshToken) {
                                        this.throwException("Refresh token not specified");
                                    }

                                    body = {
                                        client_id: this.clientId,
                                        //process.env.CLIENT_ID,
                                        client_secret: this.clientSecret,
                                        //process.env.CLIENT_SECRET,
                                        refreshToken: refreshToken,
                                        grant_type: "refresh_token"
                                    };
                                    options = {
                                        method: "POST",
                                        uri: "https://oauth2.googleapis.com/token",
                                        form: body,
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        }
                                    };
                                    _context9.next = 5;
                                    return this._post(options);

                                case 5:
                                    res = _context9.sent;
                                    this.access_token = res.access_token;
                                    return _context9.abrupt("return", res);

                                case 8:
                                case "end":
                                    return _context9.stop();
                            }
                        }
                    }, _callee9, this);
                }));

                function refreshAccessToken(_x8) {
                    return _refreshAccessToken.apply(this, arguments);
                }

                return refreshAccessToken;
            }() // Info: https://developers.google.com/drive/api/v3/ref-search-terms
            //TODO Pagination

        }, {
            key: "searchDrive",
            value: function () {
                var _searchDrive = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(query) {
                    var _this2 = this;

                    var q, options, res, resultsWithPaths;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                        while (1) {
                            switch (_context11.prev = _context11.next) {
                                case 0:
                                    if (!query) {
                                        this.throwException("Query not specified");
                                    }

                                    console.log(query);
                                    q = [query];
                                    options = {
                                        uri: this.baseUrl + this.FileEndpoint,
                                        // json: true,
                                        headers: {
                                            // "Content-Type": "application/json",
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            // E.g. search for name
                                            pageSize: 1000,
                                            q: q[0],
                                            fields: "*"
                                        }
                                    };
                                    _context11.next = 6;
                                    return this._get(options);

                                case 6:
                                    res = _context11.sent;
                                    // Path doesn't exist if the files are in Trash... let's care about that in getPathFromID
                                    resultsWithPaths = Promise.all(res.files.map( /*#__PURE__*/function () {
                                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(item) {
                                            var path;
                                            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                                while (1) {
                                                    switch (_context10.prev = _context10.next) {
                                                        case 0:
                                                            _context10.next = 2;
                                                            return _this2.getPathFromId(item);

                                                        case 2:
                                                            path = _context10.sent;
                                                            item.path = path;
                                                            return _context10.abrupt("return", item);

                                                        case 5:
                                                        case "end":
                                                            return _context10.stop();
                                                    }
                                                }
                                            }, _callee10);
                                        }));

                                        return function (_x10) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()));
                                    return _context11.abrupt("return", resultsWithPaths);

                                case 9:
                                case "end":
                                    return _context11.stop();
                            }
                        }
                    }, _callee11, this);
                }));

                function searchDrive(_x9) {
                    return _searchDrive.apply(this, arguments);
                }

                return searchDrive;
            }()
        }, {
            key: "listFiles",
            value: function () {
                var _listFiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                    var options, res;
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                        while (1) {
                            switch (_context12.prev = _context12.next) {
                                case 0:
                                    options = {
                                        uri: this.baseUrl + this.FileEndpoint + "?mimeType!='application/vnd.google-apps.folder'",
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            // fields: "*"
                                            spaces: "test"
                                        }
                                    };
                                    _context12.next = 3;
                                    return this._get(options);

                                case 3:
                                    res = _context12.sent;
                                    return _context12.abrupt("return", res.files);

                                case 5:
                                case "end":
                                    return _context12.stop();
                            }
                        }
                    }, _callee12, this);
                }));

                function listFiles() {
                    return _listFiles.apply(this, arguments);
                }

                return listFiles;
            }()
            /**
             * Lists all folders for a given Google Account
             * @returns An array of Folder Objects
             */

        }, {
            key: "listFolders",
            value: function () {
                var _listFolders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                    var nextPageToken,
                        folderList,
                        options,
                        res,
                        token,
                        _args13 = arguments;
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                        while (1) {
                            switch (_context13.prev = _context13.next) {
                                case 0:
                                    nextPageToken = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : '';
                                    folderList = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : [];
                                    _context13.prev = 2;
                                    options = {
                                        uri: this.baseUrl + this.FileEndpoint,
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            pageToken: nextPageToken ? nextPageToken : "",
                                            pageSize: 1000,
                                            q: "mimeType='application/vnd.google-apps.folder' and trashed=false",
                                            fields: "kind, files(id, mimeType, name, webViewLink, parents, size, modifiedTime),nextPageToken"
                                        }
                                    };
                                    _context13.next = 6;
                                    return this._get(options);

                                case 6:
                                    res = _context13.sent;
                                    token = res.nextPageToken;
                                    _context13.next = 10;
                                    return folderList.push.apply(folderList, _toConsumableArray(res.files));

                                case 10:
                                    if (!token) {
                                        _context13.next = 16;
                                        break;
                                    }

                                    _context13.next = 13;
                                    return this.listFolders(token, folderList);

                                case 13:
                                    return _context13.abrupt("return", _context13.sent);

                                case 16:
                                    return _context13.abrupt("return", folderList);

                                case 17:
                                    _context13.next = 22;
                                    break;

                                case 19:
                                    _context13.prev = 19;
                                    _context13.t0 = _context13["catch"](2);
                                    this.throwException("The API returned an error: ".concat(_context13.t0));

                                case 22:
                                case "end":
                                    return _context13.stop();
                            }
                        }
                    }, _callee13, this, [[2, 19]]);
                }));

                function listFolders() {
                    return _listFolders.apply(this, arguments);
                }

                return listFolders;
            }()
            /**
             * Converts a list of Folders into a Folder Tree, provides Pathing options.
             *
             * @returns An array of Folder Objects with a tree and a path
             * The ValidPaths Path Object is as follows:
             * {
             *     path: "/Example/Path", //  UNIQUE The actual path, starting from Root
             *     id: "12kSkjf923AKJ", // FIRST FOUND Id by that path (can be multiple)
             *     alternativeIds: ["102380FAJf",...], // Any additional IDs that match that path
             *     parentIds: ["102380FAJf",...], // Any immediate parentIds for the path
             *     childIds: ["102380FAJf",...] // Any child IDs for the Path
             * }
             */

        }, {
            key: "getValidPaths",
            value: function () {
                var _getValidPaths = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(rebuild) {
                    var rootFolder, folders, paths;
                    return regeneratorRuntime.wrap(function _callee15$(_context15) {
                        while (1) {
                            switch (_context15.prev = _context15.next) {
                                case 0:
                                    if (!(this.validPaths.length === 0 || rebuild == true)) {
                                        _context15.next = 20;
                                        break;
                                    }

                                    _context15.prev = 1;
                                    _context15.next = 4;
                                    return this.getInfoById('root');

                                case 4:
                                    rootFolder = _context15.sent;
                                    _context15.next = 7;
                                    return this.listFolders();

                                case 7:
                                    folders = _context15.sent;

                                    paths = function () {
                                        var _c = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(folder, folderSt, pathSt, res) {
                                            var ar, arrayFolderSt, currentFolderObj, parentIds, pathObj, _iterator, _step, currentPath;

                                            return regeneratorRuntime.wrap(function _callee14$(_context14) {
                                                while (1) {
                                                    switch (_context14.prev = _context14.next) {
                                                        case 0:
                                                            // Get Children Folders
                                                            ar = folders.filter(function (e) {
                                                                return e.parents !== undefined && e.parents.includes(folder);
                                                            }); // For the current Folder, create the Folder ID String to pass on

                                                            folderSt += folder + "#_aabbccddee_#"; // Split on our unique string and pop the last one we just added so that we have the array

                                                            arrayFolderSt = folderSt.split("#_aabbccddee_#");
                                                            arrayFolderSt.pop();
                                                            _context14.next = 6;
                                                            return folders.find(function (_ref2) {
                                                                var id = _ref2.id;
                                                                return id == folder;
                                                            });

                                                        case 6:
                                                            currentFolderObj = _context14.sent;
                                                            parentIds = currentFolderObj ? currentFolderObj.parents ? currentFolderObj.parents : [''] : ['']; // Create our path object

                                                            pathObj = {
                                                                pathIdString: arrayFolderSt.join('/'),
                                                                pathIds: arrayFolderSt,
                                                                // We just created this
                                                                path: pathSt,
                                                                // We should receive this from the past, because we prepped
                                                                folderId: folder,
                                                                childrenIds: ar.map(function (childFolder) {
                                                                    return childFolder.id;
                                                                }),
                                                                parentIds: parentIds
                                                            };
                                                            res.push(pathObj);
                                                            ar.length == 0 && (folderSt = "");
                                                            _iterator = _createForOfIteratorHelper(ar);
                                                            _context14.prev = 12;

                                                            _iterator.s();

                                                        case 14:
                                                            if ((_step = _iterator.n()).done) {
                                                                _context14.next = 21;
                                                                break;
                                                            }

                                                            folder = _step.value;
                                                            currentPath = "".concat(pathSt, "/").concat(folder.name);
                                                            _context14.next = 19;
                                                            return c(folder.id, folderSt, currentPath, res);

                                                        case 19:
                                                            _context14.next = 14;
                                                            break;

                                                        case 21:
                                                            _context14.next = 26;
                                                            break;

                                                        case 23:
                                                            _context14.prev = 23;
                                                            _context14.t0 = _context14["catch"](12);

                                                            _iterator.e(_context14.t0);

                                                        case 26:
                                                            _context14.prev = 26;

                                                            _iterator.f();

                                                            return _context14.finish(26);

                                                        case 29:
                                                            return _context14.abrupt("return", res);

                                                        case 31:
                                                        case "end":
                                                            return _context14.stop();
                                                    }
                                                }
                                            }, _callee14, null, [[12, 23, 26, 29]]);
                                        }));

                                        function c(_x12, _x13, _x14, _x15) {
                                            return _c.apply(this, arguments);
                                        }

                                        return c;
                                    }()(rootFolder.id, "", '', []);

                                    _context15.next = 11;
                                    return paths;

                                case 11:
                                    this.validPaths = _context15.sent;
                                    return _context15.abrupt("return");

                                case 15:
                                    _context15.prev = 15;
                                    _context15.t0 = _context15["catch"](1);
                                    console.error(_context15.t0);

                                case 18:
                                    _context15.next = 21;
                                    break;

                                case 20:
                                    return _context15.abrupt("return");

                                case 21:
                                case "end":
                                    return _context15.stop();
                            }
                        }
                    }, _callee15, this, [[1, 15]]);
                }));

                function getValidPaths(_x11) {
                    return _getValidPaths.apply(this, arguments);
                }

                return getValidPaths;
            }()
        }, {
            key: "getIdFromPath",
            value: function () {
                var _getIdFromPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(providedPath) {
                    var rootFolder, pathSections, parentPath, itemName, parentFolder, searchResults;
                    return regeneratorRuntime.wrap(function _callee16$(_context16) {
                        while (1) {
                            switch (_context16.prev = _context16.next) {
                                case 0:
                                    if (!(providedPath == '/' || providedPath == 'root')) {
                                        _context16.next = 9;
                                        break;
                                    }

                                    _context16.next = 3;
                                    return this.getInfoById('root');

                                case 3:
                                    rootFolder = _context16.sent;
                                    _context16.next = 6;
                                    return rootFolder.id;

                                case 6:
                                    return _context16.abrupt("return", _context16.sent);

                                case 9:
                                    _context16.next = 11;
                                    return this.getValidPaths();

                                case 11:
                                    pathSections = providedPath.split('/');
                                    parentPath = pathSections.slice(0, pathSections.length - 1).join('/');
                                    itemName = pathSections[pathSections.length - 1];
                                    _context16.next = 16;
                                    return this.validPaths.find(function (_ref3) {
                                        var path = _ref3.path;
                                        return parentPath == path;
                                    });

                                case 16:
                                    parentFolder = _context16.sent;

                                    if (!parentFolder) {
                                        _context16.next = 24;
                                        break;
                                    }

                                    _context16.next = 20;
                                    return this.searchDrive("name = '".concat(itemName, "' and '").concat(parentFolder.folderId, "' in parents and trashed = false"));

                                case 20:
                                    searchResults = _context16.sent;
                                    return _context16.abrupt("return", searchResults[0].id);

                                case 24:
                                    this.throwException("No item found by the path '".concat(providedPath, "'"));

                                case 25:
                                case "end":
                                    return _context16.stop();
                            }
                        }
                    }, _callee16, this);
                }));

                function getIdFromPath(_x16) {
                    return _getIdFromPath.apply(this, arguments);
                }

                return getIdFromPath;
            }()
        }, {
            key: "getPathFromId",
            value: function () {
                var _getPathFromId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(providedItem) {
                    var foundFolder, parentFolder;
                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                        while (1) {
                            switch (_context17.prev = _context17.next) {
                                case 0:
                                    _context17.next = 2;
                                    return this.getValidPaths();

                                case 2:
                                    if (!(!providedItem.mimeType || !providedItem.name)) {
                                        _context17.next = 6;
                                        break;
                                    }

                                    _context17.next = 5;
                                    return this.getInfoById(providedItem.id);

                                case 5:
                                    providedItem = _context17.sent;

                                case 6:
                                    if (!providedItem.trashed) {
                                        _context17.next = 8;
                                        break;
                                    }

                                    return _context17.abrupt("return", '');

                                case 8:
                                    if (!(providedItem.mimeType === "application/vnd.google-apps.folder")) {
                                        _context17.next = 17;
                                        break;
                                    }

                                    foundFolder = this.validPaths.find(function (_ref4) {
                                        var folderId = _ref4.folderId;
                                        return providedItem.id == folderId;
                                    });

                                    if (!foundFolder) {
                                        _context17.next = 14;
                                        break;
                                    }

                                    return _context17.abrupt("return", foundFolder.path);

                                case 14:
                                    this.throwException("No valid path found by the folder ID '".concat(providedItem.id, "'"));

                                case 15:
                                    _context17.next = 23;
                                    break;

                                case 17:
                                    // We assume it's a file, so we check for it's parent... grabbing the first parent
                                    // TODO we should support multiple parents and multiple path options for other folks.
                                    parentFolder = this.validPaths.find(function (_ref5) {
                                        var folderId = _ref5.folderId;
                                        return providedItem.parents[0] == folderId;
                                    });

                                    if (!parentFolder) {
                                        _context17.next = 22;
                                        break;
                                    }

                                    return _context17.abrupt("return", "".concat(parentFolder.path, "/").concat(providedItem.name));

                                case 22:
                                    this.throwException("No valid path found for the item of ID '".concat(providedItem.id, "'"));

                                case 23:
                                case "end":
                                    return _context17.stop();
                            }
                        }
                    }, _callee17, this);
                }));

                function getPathFromId(_x17) {
                    return _getPathFromId.apply(this, arguments);
                }

                return getPathFromId;
            }()
        }, {
            key: "listFolderContents",
            value: function () {
                var _listFolderContents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                    var _this3 = this;

                    var folderId,
                        includePaths,
                        options,
                        children,
                        childrenWithPaths,
                        _args19 = arguments;
                    return regeneratorRuntime.wrap(function _callee19$(_context19) {
                        while (1) {
                            switch (_context19.prev = _context19.next) {
                                case 0:
                                    folderId = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : 'root';
                                    includePaths = _args19.length > 1 && _args19[1] !== undefined ? _args19[1] : 'true';
                                    // var q = `mimeType = 'application/vnd.google-apps.folder' and '${folderId}' in parents`;
                                    options = {
                                        uri: this.baseUrl + this.FileEndpoint,
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            mimeType: "application/vnd.google-apps.folder",
                                            q: "'".concat(folderId, "' in parents and trashed=false"),
                                            //TODO Fine tune this for Dev purposes... maybe in the K2 Folder method
                                            fields: '*'
                                        }
                                    };
                                    _context19.next = 5;
                                    return this._get(options);

                                case 5:
                                    children = _context19.sent;

                                    if (!includePaths) {
                                        _context19.next = 13;
                                        break;
                                    }

                                    _context19.next = 9;
                                    return this.getValidPaths();

                                case 9:
                                    childrenWithPaths = Promise.all(children.files.map( /*#__PURE__*/function () {
                                        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(item) {
                                            var path;
                                            return regeneratorRuntime.wrap(function _callee18$(_context18) {
                                                while (1) {
                                                    switch (_context18.prev = _context18.next) {
                                                        case 0:
                                                            _context18.next = 2;
                                                            return _this3.getPathFromId(item);

                                                        case 2:
                                                            path = _context18.sent;
                                                            item.path = path;
                                                            return _context18.abrupt("return", item);

                                                        case 5:
                                                        case "end":
                                                            return _context18.stop();
                                                    }
                                                }
                                            }, _callee18);
                                        }));

                                        return function (_x18) {
                                            return _ref6.apply(this, arguments);
                                        };
                                    }()));
                                    return _context19.abrupt("return", childrenWithPaths);

                                case 13:
                                    return _context19.abrupt("return", children);

                                case 14:
                                case "end":
                                    return _context19.stop();
                            }
                        }
                    }, _callee19, this);
                }));

                function listFolderContents() {
                    return _listFolderContents.apply(this, arguments);
                }

                return listFolderContents;
            }()
        }, {
            key: "createFolder",
            value: function () {
                var _createFolder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(name, parentId) {
                    var includePath,
                        body,
                        options,
                        res,
                        path,
                        _args20 = arguments;
                    return regeneratorRuntime.wrap(function _callee20$(_context20) {
                        while (1) {
                            switch (_context20.prev = _context20.next) {
                                case 0:
                                    includePath = _args20.length > 2 && _args20[2] !== undefined ? _args20[2] : true;
                                    body = {
                                        name: name,
                                        mimeType: "application/vnd.google-apps.folder",
                                        parents: [parentId]
                                    };
                                    options = {
                                        method: "POST",
                                        uri: this.baseUrl + this.FileEndpoint,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token),
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(body),
                                        qs: {
                                            //TODO Be more selective
                                            fields: '*'
                                        }
                                    }; // Required for fetch

                                    _context20.next = 5;
                                    return this._post(options);

                                case 5:
                                    res = _context20.sent;

                                    if (!includePath) {
                                        _context20.next = 13;
                                        break;
                                    }

                                    _context20.next = 9;
                                    return this.getValidPaths(true);

                                case 9:
                                    _context20.next = 11;
                                    return this.getPathFromId(res);

                                case 11:
                                    path = _context20.sent;
                                    // Get the path for the item
                                    res.path = path;

                                case 13:
                                    return _context20.abrupt("return", res);

                                case 14:
                                case "end":
                                    return _context20.stop();
                            }
                        }
                    }, _callee20, this);
                }));

                function createFolder(_x19, _x20) {
                    return _createFolder.apply(this, arguments);
                }

                return createFolder;
            }()
        }, {
            key: "copyFile",
            value: function () {
                var _copyFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(id, parentId, newName) {
                    var includePath,
                        body,
                        options,
                        res,
                        path,
                        _args21 = arguments;
                    return regeneratorRuntime.wrap(function _callee21$(_context21) {
                        while (1) {
                            switch (_context21.prev = _context21.next) {
                                case 0:
                                    includePath = _args21.length > 3 && _args21[3] !== undefined ? _args21[3] : true;
                                    body = {};

                                    if (parentId) {
                                        body.parents = [parentId];
                                    }

                                    if (newName) {
                                        body.name = newName;
                                    }

                                    options = {
                                        method: "POST",
                                        uri: this.baseUrl + this.FileEndpointId(id) + "/copy",
                                        json: true,
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            fields: "*"
                                        },
                                        body: JSON.stringify(body)
                                    };
                                    _context21.next = 7;
                                    return this._post(options);

                                case 7:
                                    res = _context21.sent;

                                    if (!includePath) {
                                        _context21.next = 15;
                                        break;
                                    }

                                    _context21.next = 11;
                                    return this.getValidPaths(true);

                                case 11:
                                    _context21.next = 13;
                                    return this.getPathFromId(res);

                                case 13:
                                    path = _context21.sent;
                                    // Get the path for the item
                                    res.path = path;

                                case 15:
                                    return _context21.abrupt("return", res);

                                case 16:
                                case "end":
                                    return _context21.stop();
                            }
                        }
                    }, _callee21, this);
                }));

                function copyFile(_x21, _x22, _x23) {
                    return _copyFile.apply(this, arguments);
                }

                return copyFile;
            }()
        }, {
            key: "copySingleFolderAndContents",
            value: function () {
                var _copySingleFolderAndContents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(sourceId, targetId) {
                    var sourceContents, sourceFolders, sourceFiles, i, j, sourceFile, sourceChildFolder, sourceChildFolderName, newCopiedChildFolder;
                    return regeneratorRuntime.wrap(function _callee22$(_context22) {
                        while (1) {
                            switch (_context22.prev = _context22.next) {
                                case 0:
                                    _context22.next = 2;
                                    return this.listFolderContents(sourceId, false);

                                case 2:
                                    sourceContents = _context22.sent;
                                    // Get a filtered array of folders
                                    sourceFolders = sourceContents.files.filter(function (item) {
                                        return item.mimeType === 'application/vnd.google-apps.folder';
                                    }); // Get a filtered array of "everything else"

                                    sourceFiles = sourceContents.files.filter(function (item) {
                                        return item.mimeType !== 'application/vnd.google-apps.folder';
                                    });
                                    i = 0;
                                    j = 0; // Loop over and copy every file from the source folder into the target folder, overwrite the name

                                case 7:
                                    if (!sourceFiles[i]) {
                                        _context22.next = 14;
                                        break;
                                    }

                                    sourceFile = sourceFiles[i];
                                    _context22.next = 11;
                                    return this.copyFile(sourceFile.id, targetId, sourceFile.name);

                                case 11:
                                    i++;
                                    _context22.next = 7;
                                    break;

                                case 14:
                                    if (!sourceFolders[j]) {
                                        _context22.next = 25;
                                        break;
                                    }

                                    sourceChildFolder = sourceFolders[j];
                                    sourceChildFolderName = sourceChildFolder.name;
                                    _context22.next = 19;
                                    return this.createFolder(sourceChildFolderName, targetId);

                                case 19:
                                    newCopiedChildFolder = _context22.sent;
                                    _context22.next = 22;
                                    return this.copySingleFolderAndContents(sourceChildFolder.id, newCopiedChildFolder.id);

                                case 22:
                                    j++;
                                    _context22.next = 14;
                                    break;

                                case 25:
                                case "end":
                                    return _context22.stop();
                            }
                        }
                    }, _callee22, this);
                }));

                function copySingleFolderAndContents(_x24, _x25) {
                    return _copySingleFolderAndContents.apply(this, arguments);
                }

                return copySingleFolderAndContents;
            }()
        }, {
            key: "copyEntireFolder",
            value: function () {
                var _copyEntireFolder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(id, targetParentId) {
                    var sourceFolder, parentFolder, newFolder, path;
                    return regeneratorRuntime.wrap(function _callee23$(_context23) {
                        while (1) {
                            switch (_context23.prev = _context23.next) {
                                case 0:
                                    _context23.next = 2;
                                    return this.getInfoById(id);

                                case 2:
                                    sourceFolder = _context23.sent;

                                    if (sourceFolder.mimeType !== "application/vnd.google-apps.folder") {
                                        this.throwException("Attempting to copy a non-folder. Please provide a valid Folder.");
                                    } // Get target folder info and type to confirm folder


                                    _context23.next = 6;
                                    return this.getInfoById(targetParentId);

                                case 6:
                                    parentFolder = _context23.sent;

                                    if (parentFolder.mimeType !== "application/vnd.google-apps.folder") {
                                        this.throwException("Attempting to copy to a non-folder destination. Please provide a valid Folder.");
                                    } // Create new folder (the copy) in the target folder


                                    _context23.next = 10;
                                    return this.createFolder(sourceFolder.name, parentFolder.id);

                                case 10:
                                    newFolder = _context23.sent;
                                    _context23.next = 13;
                                    return this.copySingleFolderAndContents(sourceFolder.id, newFolder.id);

                                case 13:
                                    _context23.next = 15;
                                    return this.getValidPaths(true);

                                case 15:
                                    _context23.next = 17;
                                    return this.getPathFromId(newFolder);

                                case 17:
                                    path = _context23.sent;
                                    // Get the path for the item
                                    newFolder.path = path;
                                    return _context23.abrupt("return", newFolder);

                                case 20:
                                case "end":
                                    return _context23.stop();
                            }
                        }
                    }, _callee23, this);
                }));

                function copyEntireFolder(_x26, _x27) {
                    return _copyEntireFolder.apply(this, arguments);
                }

                return copyEntireFolder;
            }() // If it's a folder --- all descendants owned by the user are also deleted.

        }, {
            key: "deleteFileOrFolder",
            value: function () {
                var _deleteFileOrFolder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(id, permanent) {
                    var res, options, _options;

                    return regeneratorRuntime.wrap(function _callee24$(_context24) {
                        while (1) {
                            switch (_context24.prev = _context24.next) {
                                case 0:
                                    if (!id) {
                                        this.throwException("Id not specified");
                                    }

                                    if (!permanent) {
                                        _context24.next = 8;
                                        break;
                                    }

                                    options = {
                                        method: "delete",
                                        uri: this.baseUrl + this.FileEndpointId(id),
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        }
                                    };
                                    _context24.next = 5;
                                    return this._delete(options);

                                case 5:
                                    res = _context24.sent;
                                    _context24.next = 12;
                                    break;

                                case 8:
                                    _options = {
                                        method: "patch",
                                        uri: this.baseUrl + this.FileEndpointId(id),
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token),
                                            'Content-Type': "application/json"
                                        },
                                        body: JSON.stringify({
                                            trashed: true
                                        })
                                    };
                                    _context24.next = 11;
                                    return this._patch(_options);

                                case 11:
                                    res = _context24.sent;

                                case 12:
                                    _context24.next = 14;
                                    return this.getValidPaths(true);

                                case 14:
                                    return _context24.abrupt("return", res);

                                case 15:
                                case "end":
                                    return _context24.stop();
                            }
                        }
                    }, _callee24, this);
                }));

                function deleteFileOrFolder(_x28, _x29) {
                    return _deleteFileOrFolder.apply(this, arguments);
                }

                return deleteFileOrFolder;
            }() // Same endpoint for file and folder

        }, {
            key: "getShareUrlById",
            value: function () {
                var _getShareUrlById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(id) {
                    var options, res;
                    return regeneratorRuntime.wrap(function _callee25$(_context25) {
                        while (1) {
                            switch (_context25.prev = _context25.next) {
                                case 0:
                                    if (!id) {
                                        this.throwException("Id not specified");
                                    }

                                    options = {
                                        uri: this.baseUrl + this.FileEndpointId(id),
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            fields: "kind, id, name, mimeType, starred, trashed, parents/*, webViewLink, shared"
                                        }
                                    };
                                    _context25.next = 4;
                                    return this._get(options);

                                case 4:
                                    res = _context25.sent;

                                    if (res.shared) {
                                        _context25.next = 8;
                                        break;
                                    }

                                    _context25.next = 8;
                                    return this.createSharePermissions(id, 'commenter', 'anyone');

                                case 8:
                                    return _context25.abrupt("return", res);

                                case 9:
                                case "end":
                                    return _context25.stop();
                            }
                        }
                    }, _callee25, this);
                }));

                function getShareUrlById(_x30) {
                    return _getShareUrlById.apply(this, arguments);
                }

                return getShareUrlById;
            }()
        }, {
            key: "getFileShareUrls",
            value: function () {
                var _getFileShareUrls = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
                    var options, res;
                    return regeneratorRuntime.wrap(function _callee26$(_context26) {
                        while (1) {
                            switch (_context26.prev = _context26.next) {
                                case 0:
                                    options = {
                                        uri: this.baseUrl + this.FileEndpoint,
                                        json: true,
                                        qs: {
                                            fields: "kind, files(id, mimeType, name, webViewLink)"
                                        },
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        }
                                    };
                                    _context26.next = 3;
                                    return this._get(options);

                                case 3:
                                    res = _context26.sent;
                                    return _context26.abrupt("return", res);

                                case 5:
                                case "end":
                                    return _context26.stop();
                            }
                        }
                    }, _callee26, this);
                }));

                function getFileShareUrls() {
                    return _getFileShareUrls.apply(this, arguments);
                }

                return getFileShareUrls;
            }()
        }, {
            key: "getFolderShareUrls",
            value: function () {
                var _getFolderShareUrls = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
                    var options, res;
                    return regeneratorRuntime.wrap(function _callee27$(_context27) {
                        while (1) {
                            switch (_context27.prev = _context27.next) {
                                case 0:
                                    options = {
                                        uri: this.baseUrl + this.FileEndpoint,
                                        json: true,
                                        qs: {
                                            fields: "kind, files(id, name, mimeType, webViewLink)",
                                            q: "mimeType='application/vnd.google-apps.folder'"
                                        },
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        }
                                    };
                                    _context27.next = 3;
                                    return this._get(options);

                                case 3:
                                    res = _context27.sent;
                                    return _context27.abrupt("return", res);

                                case 5:
                                case "end":
                                    return _context27.stop();
                            }
                        }
                    }, _callee27, this);
                }));

                function getFolderShareUrls() {
                    return _getFolderShareUrls.apply(this, arguments);
                }

                return getFolderShareUrls;
            }()
        }, {
            key: "createSharePermissions",
            value: function () {
                var _createSharePermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(id, role, type) {
                    var body, options, res;
                    return regeneratorRuntime.wrap(function _callee28$(_context28) {
                        while (1) {
                            switch (_context28.prev = _context28.next) {
                                case 0:
                                    if (!id) {
                                        this.throwException("Id not specified");
                                    }

                                    if (!role) {
                                        this.throwException("Role not specified");
                                    }

                                    if (!type) {
                                        this.throwException("Type not specified");
                                    }

                                    body = {
                                        role: role,
                                        type: type
                                    };
                                    options = {
                                        uri: this.baseUrl + this.FileEndpointId(id) + this.PermissionsPathFragment,
                                        method: 'POST',
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            fields: "kind, id, name, mimeType, starred, trashed, parents/*, webViewLink"
                                        },
                                        body: JSON.stringify(body)
                                    };
                                    _context28.next = 7;
                                    return this._post(options);

                                case 7:
                                    res = _context28.sent;
                                    return _context28.abrupt("return", res);

                                case 9:
                                case "end":
                                    return _context28.stop();
                            }
                        }
                    }, _callee28, this);
                }));

                function createSharePermissions(_x31, _x32, _x33) {
                    return _createSharePermissions.apply(this, arguments);
                }

                return createSharePermissions;
            }()
        }, {
            key: "getInfoById",
            value: function () {
                var _getInfoById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(id) {
                    var options, res;
                    return regeneratorRuntime.wrap(function _callee29$(_context29) {
                        while (1) {
                            switch (_context29.prev = _context29.next) {
                                case 0:
                                    if (!id) {
                                        this.throwException("Id not specified");
                                    }

                                    options = {
                                        uri: this.baseUrl + this.FileEndpointId(id),
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            fields: "*"
                                        }
                                    };
                                    _context29.next = 4;
                                    return this._get(options);

                                case 4:
                                    res = _context29.sent;
                                    return _context29.abrupt("return", res);

                                case 6:
                                case "end":
                                    return _context29.stop();
                            }
                        }
                    }, _callee29, this);
                }));

                function getInfoById(_x34) {
                    return _getInfoById.apply(this, arguments);
                }

                return getInfoById;
            }()
        }, {
            key: "getInfoByPath",
            value: function () {
                var _getInfoByPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(path) {
                    var itemId, res;
                    return regeneratorRuntime.wrap(function _callee30$(_context30) {
                        while (1) {
                            switch (_context30.prev = _context30.next) {
                                case 0:
                                    if (!path) {
                                        this.throwException("Path not specified");
                                    } // Get the ID by the Path TODO we can do better, probably return full details


                                    _context30.next = 3;
                                    return this.getIdFromPath(path);

                                case 3:
                                    itemId = _context30.sent;
                                    _context30.next = 6;
                                    return this.getInfoById(itemId);

                                case 6:
                                    res = _context30.sent;
                                    // Don't forget to add path back into the response
                                    res.path = path;
                                    return _context30.abrupt("return", res);

                                case 9:
                                case "end":
                                    return _context30.stop();
                            }
                        }
                    }, _callee30, this);
                }));

                function getInfoByPath(_x35) {
                    return _getInfoByPath.apply(this, arguments);
                }

                return getInfoByPath;
            }()
        }, {
            key: "moveFolderOrFile",
            value: function () {
                var _moveFolderOrFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(id, prevParentId, newParentId) {
                    var options, res, path;
                    return regeneratorRuntime.wrap(function _callee31$(_context31) {
                        while (1) {
                            switch (_context31.prev = _context31.next) {
                                case 0:
                                    if (!id) {
                                        this.throwException("Id not specified");
                                    }

                                    if (!prevParentId) {
                                        this.throwException("Prev parent id not specified");
                                    }

                                    if (!newParentId) {
                                        this.throwException("New parent id not specified");
                                    }

                                    options = {
                                        method: "PATCH",
                                        uri: this.baseUrl + this.FileEndpointId(id),
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token),
                                            "Content-Type": "application/json"
                                        },
                                        qs: {
                                            fields: "*",
                                            removeParents: prevParentId,
                                            uploadType: "multipart",
                                            addParents: newParentId
                                        }
                                    };
                                    _context31.next = 6;
                                    return this._patch(options);

                                case 6:
                                    res = _context31.sent;
                                    _context31.next = 9;
                                    return this.getValidPaths(true);

                                case 9:
                                    _context31.next = 11;
                                    return this.getPathFromId(res);

                                case 11:
                                    path = _context31.sent;
                                    // Get the path for the item
                                    res.path = path;
                                    return _context31.abrupt("return", res);

                                case 14:
                                case "end":
                                    return _context31.stop();
                            }
                        }
                    }, _callee31, this);
                }));

                function moveFolderOrFile(_x36, _x37, _x38) {
                    return _moveFolderOrFile.apply(this, arguments);
                }

                return moveFolderOrFile;
            }() // TODO: Test with different types of upload formats
            // Info: https://developers.google.com/drive/api/v3/manage-uploads

        }, {
            key: "resumableUpload",
            value: function () {
                var _resumableUpload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(fileContent, parentId) {
                    var metadata, preFlightOptions, preFlightRes, uploadUri, options, res, path;
                    return regeneratorRuntime.wrap(function _callee32$(_context32) {
                        while (1) {
                            switch (_context32.prev = _context32.next) {
                                case 0:
                                    metadata = {
                                        name: fileContent.filename,
                                        parents: [parentId]
                                    };
                                    preFlightOptions = {
                                        uri: this.baseUrl + this.FileUploadEndpoint,
                                        headers: {
                                            "Content-Type": "application/json",
                                            "X-Upload-Content-Type": "application/octet-stream",
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        method: "POST",
                                        jsonResponseType: true,
                                        qs: {
                                            uploadType: 'resumable'
                                        },
                                        body: JSON.stringify(metadata)
                                    };
                                    _context32.next = 4;
                                    return this._post(preFlightOptions);

                                case 4:
                                    preFlightRes = _context32.sent;
                                    uploadUri = preFlightRes.headers.get('Location');
                                    options = {
                                        uri: uploadUri,
                                        headers: {
                                            "Content-Type": "application/octet-stream" // Authorization: `Bearer ${this.access_token}`

                                        },
                                        method: "PUT",
                                        // jsonResponseType: true,
                                        qs: {
                                            //TODO make this more selective later
                                            fields: '*'
                                        },
                                        body: fileContent
                                    };
                                    _context32.next = 9;
                                    return this._put(options);

                                case 9:
                                    res = _context32.sent;
                                    _context32.next = 12;
                                    return this.getPathFromId(res);

                                case 12:
                                    path = _context32.sent;
                                    // Get the path for the item
                                    res.path = path;
                                    return _context32.abrupt("return", res);

                                case 15:
                                case "end":
                                    return _context32.stop();
                            }
                        }
                    }, _callee32, this);
                }));

                function resumableUpload(_x39, _x40) {
                    return _resumableUpload.apply(this, arguments);
                }

                return resumableUpload;
            }()
        }, {
            key: "mimeTypeMapping",
            value: function mimeTypeMapping(mimeType) {
                switch (mimeType) {
                    case "application/vnd.google-apps.document":
                        mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                        break;
                    // case "application/vnd.google-apps.audio":
                    //   mimeType = '';
                    //   break;

                    case "application/vnd.google-apps.drawing":
                        mimeType = 'image/png';
                        break;

                    case "application/vnd.google-apps.file":
                        mimeType = 'application/octet-stream';
                        break;

                    case "application/vnd.google-apps.folder":
                        mimeType = 'application/zip';
                        break;

                    case "application/vnd.google-apps.form":
                        mimeType = 'application/zip';
                        break;
                    // case "application/vnd.google-apps.fusiontable":
                    //   mimeType ='';
                    //   break;
                    // case "application/vnd.google-apps.map":
                    //   mimeType ='';
                    //   break;
                    // case "application/vnd.google-apps.photo":
                    //   mimeType = '';
                    //   break;

                    case "application/vnd.google-apps.presentation":
                        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                        break;

                    case "application/vnd.google-apps.script":
                        mimeType = 'application/vnd.google-apps.script+json';
                        break;

                    case "application/vnd.google-apps.site":
                        mimeType = 'text/plain';
                        break;

                    case "application/vnd.google-apps.spreadsheet":
                        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                        break;

                    case "application/vnd.google-apps.unknown":
                        mimeType = 'application/octet-stream';
                        break;
                    // case "application/vnd.google-apps.video":
                    //   mimeType = '';
                    //   break;

                    case "application/vnd.google-apps.jam":
                        mimeType = "application/pdf";
                        break;
                }

                return mimeType;
            }
        }, {
            key: "determineDownloadUrl",
            value: function determineDownloadUrl(item) {
                var mimeType = item.mimeType;
                var downloadEndpoint = '';

                if (mimeType.includes("application/vnd.google-apps.")) {
                    downloadEndpoint = "/export?mimeType=".concat(this.mimeTypeMapping(item.mimeType));
                } else {
                    downloadEndpoint = "?alt=media";
                }

                var uri = "".concat(this.baseUrl).concat(this.FileEndpointId(item.id)).concat(downloadEndpoint);
                return uri;
            } // https://developers.google.com/drive/api/v3/ref-export-formats

        }, {
            key: "downloadFile",
            value: function () {
                var _downloadFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(id) {
                    var mimeType,
                        convertedType,
                        options,
                        res,
                        _args33 = arguments;
                    return regeneratorRuntime.wrap(function _callee33$(_context33) {
                        while (1) {
                            switch (_context33.prev = _context33.next) {
                                case 0:
                                    mimeType = _args33.length > 1 && _args33[1] !== undefined ? _args33[1] : "text/plain";
                                    convertedType = this.mimeTypeMapping(mimeType);
                                    options = {
                                        uri: this.baseUrl + this.FileEndpointId(id) + "/export",
                                        // Authorization is optional ?
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        responseType: 'blob',
                                        qs: {
                                            // All mime type options: https://developers.google.com/drive/api/v3/mime-types
                                            mimeType: convertedType,
                                            fields: "*"
                                        }
                                    };
                                    _context33.next = 5;
                                    return this._get(options);

                                case 5:
                                    res = _context33.sent;
                                    return _context33.abrupt("return", res);

                                case 7:
                                case "end":
                                    return _context33.stop();
                            }
                        }
                    }, _callee33, this);
                }));

                function downloadFile(_x41) {
                    return _downloadFile.apply(this, arguments);
                }

                return downloadFile;
            }()
        }, {
            key: "getFileDownloadUrl",
            value: function () {
                var _getFileDownloadUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(id) {
                    var options, res;
                    return regeneratorRuntime.wrap(function _callee34$(_context34) {
                        while (1) {
                            switch (_context34.prev = _context34.next) {
                                case 0:
                                    if (!id) {
                                        this.throwException("Id not specified");
                                    }

                                    options = {
                                        uri: this.baseUrl + this.FileEndpointId(id),
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            fields: "id, name, webContentLink, exportLinks/*"
                                        }
                                    };
                                    _context34.next = 4;
                                    return this._get(options);

                                case 4:
                                    res = _context34.sent;
                                    return _context34.abrupt("return", res);

                                case 6:
                                case "end":
                                    return _context34.stop();
                            }
                        }
                    }, _callee34, this);
                }));

                function getFileDownloadUrl(_x42) {
                    return _getFileDownloadUrl.apply(this, arguments);
                }

                return getFileDownloadUrl;
            }()
        }, {
            key: "getServiceQuota",
            value: function () {
                var _getServiceQuota = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
                    var options, res;
                    return regeneratorRuntime.wrap(function _callee35$(_context35) {
                        while (1) {
                            switch (_context35.prev = _context35.next) {
                                case 0:
                                    options = {
                                        uri: this.baseUrl + "/drive/v3/about",
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token)
                                        },
                                        qs: {
                                            fields: "storageQuota"
                                        }
                                    };
                                    _context35.next = 3;
                                    return this._get(options);

                                case 3:
                                    res = _context35.sent;
                                    return _context35.abrupt("return", res);

                                case 5:
                                case "end":
                                    return _context35.stop();
                            }
                        }
                    }, _callee35, this);
                }));

                function getServiceQuota() {
                    return _getServiceQuota.apply(this, arguments);
                }

                return getServiceQuota;
            }()
        }, {
            key: "updatePropertiesById",
            value: function () {
                var _updatePropertiesById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(id, properties) {
                    var body, options, res, path;
                    return regeneratorRuntime.wrap(function _callee36$(_context36) {
                        while (1) {
                            switch (_context36.prev = _context36.next) {
                                case 0:
                                    if (!properties) {
                                        this.throwException("Must provide a valid properties object");
                                    }

                                    body = {
                                        properties: properties
                                    };
                                    options = {
                                        method: "PATCH",
                                        uri: this.baseUrl + this.FileEndpointId(id),
                                        json: true,
                                        headers: {
                                            Authorization: "Bearer ".concat(this.access_token),
                                            "Content-Type": 'application/json'
                                        },
                                        qs: {
                                            fields: "*"
                                        },
                                        body: JSON.stringify(body)
                                    };
                                    _context36.next = 5;
                                    return this._patch(options);

                                case 5:
                                    res = _context36.sent;
                                    _context36.next = 8;
                                    return this.getPathFromId(res);

                                case 8:
                                    path = _context36.sent;
                                    // Get the path for the item
                                    res.path = path;
                                    return _context36.abrupt("return", res);

                                case 11:
                                case "end":
                                    return _context36.stop();
                            }
                        }
                    }, _callee36, this);
                }));

                function updatePropertiesById(_x43, _x44) {
                    return _updatePropertiesById.apply(this, arguments);
                }

                return updatePropertiesById;
            }()
        }]);

        return GoogleDriveAPI;
    }(LHBaseClass_1);

    var GoogleDriveAPI_1 = GoogleDriveAPI;

    var Integration = /*#__PURE__*/function (_K2BaseIntegration) {
        _inherits(Integration, _K2BaseIntegration);

        var _super = _createSuper(Integration);

        function Integration(params) {
            var _this;

            _classCallCheck(this, Integration);

            _this = _super.call(this, params);
            _this.metaData = {
                systemName: "GoogleDriveIntegration",
                displayName: "Google Drive Integration",
                description: "Integration of Google Drive"
            };
            _this.api = new GoogleDriveAPI_1(); //TODO remove this, it is for testing K2 until they fix their google authentication
            // this.api.setAccessToken("ya29.a0Ae4lvC1VC4oGce4geZAPZHwHSw04MEpOojIwbtE4ZJNtv75Jwqg3JxtspCg18fynY45vcH5usEcEq95KdxgGh9N0Nc7MfAG72aCFOdn-i9ksh3TAdtMKCTGbWNEDY1buy9m6oalb1IHv6YUYpq7muau3tRDG2R2yVEcC");

            var soParams = {
                api: _this.api
            };
            _this.smartObjects = [new File_1(soParams), new Folder_1(soParams), new Service_1(soParams)];
            return _this;
        }

        _createClass(Integration, [{
            key: "getMetaData",
            value: function getMetaData() {
                return this.metaData;
            }
        }]);

        return Integration;
    }(K2BaseIntegration_1);

    var Integration_1 = Integration;

    integration = new Integration_1();
    metadata = integration.getMetaData();

    ondescribe = function ondescribe(_ref) {
        var configuration = _ref.configuration;
        postSchema(integration.getSchemas());
    };

    onexecute = function onexecute(_ref2) {
        var objectName = _ref2.objectName,
            methodName = _ref2.methodName,
            parameters = _ref2.parameters,
            properties = _ref2.properties;
        return integration.execute(objectName, methodName, parameters, properties);
    };

}());
//# sourceMappingURL=index.js.map