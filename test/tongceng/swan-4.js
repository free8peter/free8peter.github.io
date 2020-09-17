! function(e, a) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = a();
	else if ("function" == typeof define && define.amd) define([], a);
	else {
		var n = a();
		for (var t in n)("object" == typeof exports ? exports : e)[t] = n[t]
	}
}(window, function() {
	return t = {}, r.m = n = [function(e, a, n) {
		"use strict";
		var t = (+new Date + "").slice(-3),
			r = navigator.userAgent,
			i = {
				isBoxApp: function(e) {
					return !1 !== / baiduboxapp\//i.test(r)
				},
				getHost: function() {
					var e = null,
						a = /swan-(?!native\/)([a-zA-Z0-9]+)\/([\d+\.]+)/;
					return a.exec(r) && (e = a.exec(r)[1]), e
				},
				isBox: / baiduboxapp\//i.test(r) && !/ (lite|info) baiduboxapp/.test(r),
				isIOS: /(iPhone|iPod|iPad)/.test(r) || /P2/.test(r),
				isAndroid: /(Android);?[\s\/]+([\d.]+)?/.test(r) || /P1/.test(r),
				getId: function() {
					return t++
				},
				emptyArr: [],
				emptyFn: function() {},
				cleanObj: {},
				byId: function(e) {
					return i.isString(e) ? document.getElementById(e) : e
				},
				toArray: function(e) {
					return i.emptyArr.slice.call(e)
				},
				$: function(e, a) {
					return a = a && 1 === a.nodeType ? a : document, i.toArray(a.querySelectorAll(e))
				}
			};
		"Error,Object,Boolean,Undefined,Function,String,Array,Number,RegExp".replace(/[^, ]+/g, function(a) {
			i["is" + a] = function(e) {
				return function(e, a) {
					return i.cleanObj.toString.call(e).slice(8, -1) === a
				}(e, a)
			}
		}), i.isWindow = function(e) {
			return null != e && e == e.window
		}, i.isPlainObject = function(e) {
			return i.isObject(e) && !i.isWindow(e) && Object.getPrototypeOf(e) == Object.prototype
		}, i.isEmptyObject = function(e) {
			return e && i.isObject(e) && 0 === Object.keys(e).length && e.constructor === Object
		}, i.isNaN = function(e) {
			return i.isNumber(e) && isNaN(e)
		}, i.isInfinite = function(e) {
			return i.isNumber(e) && !isFinite(e)
		}, e.exports = i
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		a.hasNoGlobal = "undefined" == typeof swanGlobal, a.global = "undefined" == typeof swanGlobal ? window : swanGlobal, a.globalNative = "undefined" == typeof swanGlobal ? window : _naSwan
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		a.HOST_NAME_LIST = {
			baiduboxapp: "baidu"
		}, a.CANCEL_CONVERT_LIST = ["request", /ai\.(?!getVoiceRecognizer)\w+/, /^uploadFile/, "sendSocketMessage", "requestWeChatPayment", "requestPolymerPayment", "statisticEvent", "statisticFlowJar", "recognizeImage", "setMenuOpacity", "joinActivity", "video.fullScreen", "cloud.renewalDocument", "cloud.deleteDocument", "cloud.getCollection", "cloud.addDocument", "cloud.countDocument", "cloud.getDocument", "cloud.setDocument", "cloud.callFunction", "baidu.playStream", "compressImage", "boxjs.invokePluginPayment", "boxjs.invokePluginLoginAndGetUserInfo", "addEventOnCalendar"], a.CANCEL_SUPPORT_PROMISE_LOG = ["voiceRecognizer.start"], a.noop = function() {}, a.PARAMS_CHECK = {
			string: "",
			Number: 1,
			Boolean: !0,
			filePath: {
				filePath: ""
			},
			url: {
				url: ""
			},
			key: {
				key: ""
			},
			index: {
				index: 1
			},
			image: {
				image: ""
			},
			src: {
				src: ""
			}
		}, a.SCOPE_MAP = {
			"scope.userInfo": "snsapi_userinfo",
			"scope.mobile": "mobile",
			"scope.userLocation": "mapp_location",
			"scope.writePhotosAlbum": "mapp_images",
			"scope.address": "mapp_choose_address",
			"scope.invoiceTitle": "mapp_choose_invoice",
			"scope.camera": "mapp_camera",
			"scope.record": "mapp_record",
			"scope.faceVerify": "mapp_i_face_verify",
			"scope.realNameInfo": "ppcert"
		}, a.PID_MAP = {
			input: "1706",
			search: "1707"
		}, a.PROGRAM_LAUNCH_SCENE = "1170000000000000", a.DURATION_LOG_LIST = ["login", "checkSession", "getUserInfo", "requestPolymerPayment", "requestAliPayment", "requestPayment", "requestWeChatPayment"], a.IMAGE_RECOGNIZE_MAP = {
			BARCODE: "扫一扫",
			QUESTION: "拍题",
			TRANSLATE: "翻译",
			PLANT: "识花",
			AR: "AR"
		}, a.TOAST_TYPE_MAP = {
			none: "1",
			success: "2",
			loading: "3",
			btn: "4"
		}, a.SUPPORT_IMAGE_RECOGNIZE_TIP = {
			BARCODE: {
				tipList: ["topTip", "bottomTip"],
				tipLen: 60
			},
			AR: {
				tipList: ["guideTip", "resultTitle"],
				tipLen: 50
			}
		}, a.swanCallBoxjsCommonAPIList = ["getSystemInfo", "getSystemInfoSync", "getNetworkType", "openSetting", "vibrateShort", "getUserInfo"], a.swanCallBoxjsAPIList = ["getPhoneNumber", "cancelRequest", "chooseInvoiceTitle", "chooseAddress"], a.swanCallboxjsCompatibleAPIList = ["request", "getStorageSync", "setStorageSync", "requestPolymerPayment"], a.OLD_SYNC_API_LIST = {
			setStorageSync: 1,
			getStorageSync: 1,
			getStorageInfoSync: 1,
			removeStorageSync: 1,
			clearStorageSync: 1,
			getEnvInfoSync: 1,
			getBatteryInfoSync: 1,
			getSystemInfoSync: 1,
			isLoginSync: 1,
			getMenuButtonBoundingClientRect: 1,
			postGameCenterMessageSync: 1,
			getFileSystemManager: 1,
			"backgroundAudio.getParamsSync": 1,
			getNetworkTypeSync: 1,
			vibrateShortSync: 1,
			getAppInfoSync: 1,
			getCommonSysInfoSync: 1,
			getSlaveIdSync: 1,
			getMediaVolumeSync: 1,
			getAutoRotationSync: 1,
			addComponentToFullScreenSync: 1,
			removeComponentFromFullScreenSync: 1,
			setFullscreenOrientationSync: 1,
			getPushSettingStateSync: 1,
			getLaunchOptionsSync: 1
		}, a.DYNAMICLIB_ID_REG = /^dynamicLib:\/\/([A-Za-z0-9_-]+)[\/]?/
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.frameInfo = a.osInfo = a.envInfo = a.getEnvInfo = a.hostRegx = a.hostName = a.schema = void 0;
		var t, r = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			i = n(1),
			s = n(0),
			o = (t = s) && t.__esModule ? t : {
				default: t
			};
		var u = {};
		try {
			u = r({}, JSON.parse(_naSwan.getEnvVariables()))
		} catch (e) {
			console.error("获取宿主环境信息失败")
		}
		a.schema = u.scheme || "baiduboxapp";
		var l = a.hostName = u.hostName || "baidu",
			m = (a.hostRegx = new RegExp("baidu\\.|" + l + "\\."), a.getEnvInfo = function() {
				return !i.hasNoGlobal && o.default.isIOS ? "ios.jsc" : i.hasNoGlobal || o.default.isIOS ? o.default.isIOS ? "ios.webview" : "android.webview" : "android.v8"
			}),
			c = a.envInfo = m();
		a.osInfo = c.split(".")[0], a.frameInfo = c.split(".")[1]
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.ubcInvokeMethodItem = a.asyncInvokeMethodItem = a.syncInvokeMethodItem = void 0;
		var t = n(3),
			r = n(32);
		a.syncInvokeMethodItem = r.envMap[t.osInfo][t.frameInfo].sync, a.asyncInvokeMethodItem = r.envMap[t.osInfo][t.frameInfo].async, a.ubcInvokeMethodItem = r.envMap[t.osInfo][t.frameInfo].ubc
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.LOGPARAMS = void 0, a.sendTimesLog = s, a.sendInvokeResLog = function(e, a) {
			!e || 0 != +e.status && 202 != +e.status ? s({
				apiName: a.apiName,
				success: i.CALL_FAIL,
				errMsg: e.message,
				errHappen: e.errHappen || "JS",
				start: a.startTime,
				end: Date.now()
			}) : (s({
				apiName: a.apiName,
				success: i.CALL_SUCCESS,
				start: a.startTime,
				end: Date.now()
			}), a.addDurationLog && !e.status && (0, r.addDurationLogToQueue)({
				apiName: a.apiName,
				success: i.CALL_SUCCESS,
				start: a.startTime,
				end: Date.now()
			}))
		};
		var t = n(25),
			r = n(11),
			i = a.LOGPARAMS = {
				CALL: 2,
				CALL_SUCCESS: 1,
				CALL_FAIL: 0
			};

		function s(e) {
			t.events.emit("addTimesLog", e)
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.nativeDescriptionError = a.isEmptyNativeDescription = a.isNativeDescription = a.nativeDescription = void 0;
		var t, r = n(0),
			i = (t = r) && t.__esModule ? t : {
				default: t
			};
		n(3), n(2);
		var s = [],
			o = !0,
			u = !1,
			l = "";
		try {
			if (i.default.isIOS) a.nativeDescription = s = _naSwan.getAPIs();
			else if (i.default.isAndroid) {
				var m = JSON.parse(_naSwan.getAPIs(0)),
					c = m.descriptions,
					v = m.totalSlices;
				if (a.nativeDescription = s = c, 1 < v)
					for (var g = 1; g < v; g++) a.nativeDescription = s = s.concat(JSON.parse(_naSwan.getAPIs(g)).descriptions)
            }
            window.bbb = a.nativeDescription;
			s.length || (a.isNativeDescription = o = !1, a.isEmptyNativeDescription = u = !0)
		} catch (e) {
			a.isNativeDescription = o = !1, a.nativeDescriptionError = l = e.message
		}
		a.nativeDescription = s, a.isNativeDescription = o, a.isEmptyNativeDescription = u, a.nativeDescriptionError = l
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		a.INVOKE_LIST = {
			"swan.message.url": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:URL", "CallMessage"],
			"swan.message.json": ["ArgCheck", "ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "NativeParmasCombine:arg", "CallMessage"],
			"swan.prompt": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:URLArrayString", "CallPromptAdapter"],
			"swan.method.json": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:argArray", "CallMethodAdpter"],
			"swan.normalMethod.json": ["ArgCheck", "ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "NativeParmasCombine:argArray", "CallMethodAdpter"],
			"swan.method.jsonString": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:argArrayString", "CallMethodAdpter"],
			"swan.naMethod.json": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:argArray", "CallMethodAdpter"],
			"swan.naMethod.jsonString": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:argArrayString", "CallMethodAdpter"],
			"swan.method.url": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:Object", "SchemeCombine:URLArray", "CallMethodAdpter"],
			"swan.method.ubc": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgCombine:JSONString", "SchemeCombine:argArray", "CallMethodAdpter"]
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.clientAuthorizeOptimizeAPIResHandler = a.nativeResHandler = void 0;
		var t, r = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			i = n(0),
			s = (t = i) && t.__esModule ? t : {
				default: t
			},
			o = n(1),
			u = n(9);
		a.nativeResHandler = function(e) {
			var a = e.sync || !1,
				n = {},
				t = s.default.isString(e.res) ? JSON.parse(e.res) : e.res;
			return 0 == +t.status ? n = e.thunk ? e.thunk(t).data : t.data || {} : a ? (n = e.isOldSyncApi ? new Error(t.message) : void 0, console.error(t.message)) : (n.errCode = t.status, n.errMsg = t.message), n
		}, a.clientAuthorizeOptimizeAPIResHandler = function(e, a) {
			if (a.data && a.data.isSync) {
				var n = r({}, a.data);
				delete n.isSync, (0, u.executeCallbackForLevel1BindingInvoke)({
					params: e.params,
					apiName: e.apiName,
					res: n,
					thunk: e.thunk,
					startTime: e.startTime
				}), o.global[e.params.cb](a)
			}
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.hasAPICallback = a.callFailAndComplete = a.sendLogAndExecuteCallback = a.executeCallbackForLevel1BindingInvoke = a.developerCallbackExecutor = void 0;
		var t, s = function(e, a) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return function(e, a) {
					var n = [],
						t = !0,
						r = !1,
						i = void 0;
					try {
						for (var s, o = e[Symbol.iterator](); !(t = (s = o.next()).done) && (n.push(s.value), !a || n.length !== a); t = !0);
					} catch (e) {
						r = !0, i = e
					} finally {
						try {
							!t && o.return && o.return()
						} finally {
							if (r) throw i
						}
					}
					return n
				}(e, a);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			},
			r = n(0),
			o = (t = r) && t.__esModule ? t : {
				default: t
			},
			i = n(25),
			u = n(11),
			l = n(17),
			m = n(2),
			c = n(5);

		function v(e, a) {
			var n; - 1 !== m.DURATION_LOG_LIST.indexOf(e) && (n = "addDurationLog", i.events.emit(n, {
				apiName: e,
				success: c.LOGPARAMS.CALL_SUCCESS,
				start: u.startTimeMap.get(a),
				end: Date.now()
			}), u.startTimeMap.delete(a))
		}
		var g = a.developerCallbackExecutor = function(e, a, n, t) {
			var r = function(e) {
					var a = "at api",
						n = "callback function";
					return {
						success: a + " " + e + " success " + n,
						fail: a + " " + e + " fail " + n,
						complete: a + " " + e + " complete " + n
					}
				}(e.apiName),
				i = e.params || {},
				s = {
					apiName: e.apiName,
					success: "success" === n ? c.LOGPARAMS.CALL_SUCCESS : a.errCode && 202 == +a.errCode ? c.LOGPARAMS.CALL_SUCCESS : c.LOGPARAMS.CALL_FAIL,
					start: e.startTime,
					end: Date.now()
				};
			t && (s.statusCode = t), (0, c.sendTimesLog)(s), e.noNeedCallback || ((0, l.executeByTryCatch)(i[n], r[n], a), (0, l.executeByTryCatch)(i.complete, r.complete, a))
		};
		a.executeCallbackForLevel1BindingInvoke = function(e) {
			var a = {},
				n = o.default.isString(e.res) ? JSON.parse(e.res) : e.res;
			0 == +n.status ? (a = e.thunk ? e.thunk(n).data : n.data || {}, (0, u.isAllowedSaveToBootstrapLogQueue)() && e.startTime && (0, u.addDurationLogToQueue)({
				apiName: e.apiName,
				success: 1,
				start: e.startTime,
				end: Date.now()
			}), g(e, a, "success")) : (a.errCode = n.status, a.errMsg = n.message, g(e, a, "fail"))
		}, a.sendLogAndExecuteCallback = function(t) {
			var r = t.apiName,
				i = t.params || {};
			o.default.isArray(t.promise) ? Promise.all(t.promise).then(function(e) {
				var a = s(e, 2),
					n = (a[0], a[1]);
				v(r, i), g(t, n, "success", n.statusCode)
			}).catch(function(e) {
				v(r, i);
				var a = o.default.isError(e) ? {
					errCode: 904,
					errMsg: e.message
				} : e;
				g(t, a, "fail")
			}) : t.promise.then(function(e) {
				e.isSync || (delete e.isSync, g(t, e, "success"))
			}).catch(function(e) {
				var a = o.default.isError(e) ? {
					errCode: 904,
					errMsg: e.message
				} : e;
				g(t, a, "fail")
			})
		}, a.callFailAndComplete = function(e, a, n, t) {
			var r = 3 < arguments.length && void 0 !== t ? t : 904;
			n = a + ":fail " + n, o.default.isObject(e) && ((0, l.executeByTryCatch)(e.fail, "at api " + a + " fail callback function", {
				errCode: r,
				errMsg: n
			}), (0, l.executeByTryCatch)(e.complete, "at api " + a + " complete callback function", {
				errCode: r,
				errMsg: n
			}))
		}, a.hasAPICallback = function(e) {
			return e && (e.success || e.fail || e.complete)
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		a.paramsInOrder = function(e, a, n) {
			return e.apis[e.apiIndex[a]].args.map(function(e) {
				return n[e.name]
			})
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.getAPIsUbcReport = a.startTimeMap = void 0, a.addTimesLog = function(e) {
			p.push(e), p.length >= o && u()
		}, a.ubcReportLog = u, a.addDurationLog = l, a.addDurationLogToQueue = function(e) {
			f && s.push(e);
			return s
		}, a.sendAndStopRecordingBootstrapLog = function() {
			if (!f) return;
			f = !1, l(s, "bootstrap"), s = []
		}, a.isAllowedSaveToBootstrapLogQueue = function() {
			return f
		}, a.ubcLog = function() {
			var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			h = h || (0, m.default)().appid, e.value.ext = e.value.ext || {}, e.value.ext.appKey = h;
			try {
				(0, v.ubcReport)(e)
			} catch (e) {}
		};
		var m = i(n(41)),
			c = i(n(42)),
			v = n(44),
			g = n(45),
			t = n(6),
			r = i(n(0)),
			d = n(5);

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var s = [];
		setTimeout(function e() {
			u(), setTimeout(e, 6e4)
		}, 6e4);
		var p = [],
			o = 70;
		var h = "";

		function u() {
			if (h = h || (0, m.default)().appid, p.length && h) {
				for (var e = {}, a = 0, n = p.length; a < n; a++) {
					var t = void 0,
						r = p[a];
					e[t = r.success === d.LOGPARAMS.CALL_SUCCESS ? JSON.stringify({
						apiName: r.apiName,
						success: r.success
					}) : JSON.stringify(p[a])] || (e[t] = {
						count: 0,
						startTime: [],
						endTime: []
					}), e[t].count++, r.success === d.LOGPARAMS.CALL_SUCCESS && (e[t].startTime.push(r.start), e[t].endTime.push(r.end))
				}
				var i = [];
				for (var s in e) {
					var o = JSON.parse(s);
					o.count = e[s].count, o.startTime = e[s].startTime, o.endTime = e[s].endTime, i.push(o)
				}
				var u = {
						actionId: "786",
						min_v: "16789504",
						value: {
							from: "swan",
							type: "call",
							ext: {
								appKey: h,
								swan: (0, c.default)().SDKVersion,
								list: i
							}
						}
					},
					l = {
						groupId: "12",
						bizId: "38",
						swanType: "swan",
						eventName: "call",
						smartAppId: h,
						min_v: "16789504",
						content: {
							ext: {
								list: i
							}
						}
					};
				p = [];
				try {
					(0, v.ubcReport)(u)
				} catch (e) {}
				try {
					(0, g.statisticEvent)(l)
				} catch (e) {}
			}
		}
		a.startTimeMap = new Map;

		function l(e, a) {
			h = h || (0, m.default)().appid, "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]), e = e.map(function(e) {
				return e.duration = e.end - e.start, e
			});
			var n = {
				actionId: "855",
				min_v: "16789504",
				value: {
					from: "swan",
					type: "duration",
					ext: {
						appKey: h,
						list: e,
						type: a
					}
				}
			};
			try {
				(0, v.ubcReport)(n)
			} catch (e) {}
		}
		var f = !0;
		a.getAPIsUbcReport = function() {
			h = h || (0, m.default)().appid;
			var e = (0, c.default)(),
				a = {
					apiName: "getAPIs",
					success: t.isNativeDescription ? 1 : t.isEmptyNativeDescription ? 2 : 0,
					os: r.default.isIOS ? "ios" : r.default.isAndroid ? "android" : "developTool",
					swan: e.SDKVersion,
					appVersion: e.version
				};
			t.isNativeDescription || t.isEmptyNativeDescription || (a.errorMsg = t.nativeDescriptionError);
			var n = {
				actionId: "1087",
				min_v: "16789504",
				value: {
					from: "swan",
					type: "getAPIs",
					ext: {
						appKey: h,
						list: [a]
					}
				}
			};
			try {
				(0, v.ubcReport)(n)
			} catch (e) {}
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.webviewExtLocalDescriptionMap = a.webviewSyncDescriptionMap = a.webviewAsyncDescriptionMap = a.webviewDescriptionList = void 0;
		var t = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			r = n(4);
		a.webviewDescriptionList = ["getNetworkType", "makePhoneCall", "app.insert", "setClipboardData", "setNavigationBarColor", "openAdWebPage", "getLocation", "openLocation", "getPhoneContacts", "navigateToSmartProgram", "login", "openBdboxWebview", "previewImage", "setNavigationBarTitle", "chooseImage", "chooseLocation", "postMessage", "openShare", "showToast", "scanCode", "baidu.getPushSettingStateSync", "baidu.thirdPartyLogin", "baidu.joinActivity", "baidu.closeFullScreenView", "baidu.activityRequest", "baidu.guidePushSetting", "baidu.getCommonSysInfo", "baidu.openBdboxWebview"], a.webviewAsyncDescriptionMap = [t({
			name: "webView.postMessage",
			authority: "swanAPI",
			path: "/webviewPostMessage",
			args: [{
				name: "data",
				value: "string"
			}]
		}, r.asyncInvokeMethodItem), t({
			name: "getZid",
			authority: "account",
			path: "/getZid",
			args: [{
				name: "v",
				value: "number"
			}, {
				name: "jsParams",
				value: "string=s"
			}]
		}, r.asyncInvokeMethodItem), t({
			name: "favor",
			authority: "swanAPI",
			path: "/addActivityFavor",
			args: [{
				name: "appid",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, r.asyncInvokeMethodItem)], a.webviewSyncDescriptionMap = [t({
			name: "setTplBdussSync",
			authority: "swanAPI",
			path: "/setTplBdussSync",
			args: [{
				name: "errno",
				value: "string"
			}, {
				name: "data",
				value: "Object"
			}]
		}, r.syncInvokeMethodItem), t({
			name: "setSelectedAddressSync",
			authority: "swanAPI",
			path: "/setSelectedAddressSync",
			args: [{
				name: "errno",
				value: "string"
			}, {
				name: "data",
				value: "Object"
			}]
		}, r.syncInvokeMethodItem)], a.webviewExtLocalDescriptionMap = [t({}, r.syncInvokeMethodItem, {
			name: "baidu.getPushSettingStateSync",
			authority: "swanAPI",
			path: "/getPushSettingStateSync",
			args: [],
			method: "_naSwan.bridge.extension.getPushSettingStateSync"
		}), t({
			name: "baidu.thirdPartyLogin",
			authority: "swanAPI",
			path: "/thirdPartyLogin",
			args: [{
				name: "cb",
				value: "string"
			}, {
				name: "timeout",
				value: "string="
			}, {
				name: "type",
				value: {
					oneOf: ["weibo", "qq", "weixin", "sms"]
				}
			}]
		}, r.asyncInvokeMethodItem), t({
			name: "baidu.joinActivity",
			authority: "swanAPI",
			path: "/joinActivity",
			args: [{
				name: "taskId",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, r.asyncInvokeMethodItem), t({
			name: "baidu.closeFullScreenView",
			authority: "swanAPI",
			path: "/closeFullScreenView",
			args: []
		}, r.asyncInvokeMethodItem), t({
			name: "baidu.activityRequest",
			authority: "swanAPI",
			path: "/activityRequest",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "data",
				value: "string=|object="
			}, {
				name: "header",
				value: "object="
			}, {
				name: "method",
				value: "string="
			}, {
				name: "dataType",
				value: "string="
			}, {
				name: "responseType",
				value: "string="
			}, {
				name: "ping",
				value: "boolean="
			}]
		}, r.asyncInvokeMethodItem), t({
			name: "baidu.guidePushSetting",
			authority: "swanAPI",
			path: "/guidePushSetting",
			args: [{
				name: "source",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, r.asyncInvokeMethodItem), t({
			name: "baidu.getCommonSysInfo",
			authority: "swanAPI",
			path: "/getCommonSysInfo",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, r.asyncInvokeMethodItem), t({
			name: "baidu.openBdboxWebview",
			authority: "swanAPI",
			path: "/pageTransition",
			args: [{
				name: "module",
				value: "string="
			}, {
				name: "action",
				value: "string="
			}, {
				name: "scheme",
				value: "object="
			}, {
				name: "path",
				value: "string="
			}, {
				name: "authority",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, r.asyncInvokeMethodItem)]
	}, function(e, a, n) {
		"use strict";

		function t(e, a) {
			var n = "boxjs" === e.extension || "both" === e.extension,
				t = g.test(e.name),
				r = ~l.boxjsDescriptionList.indexOf(e.name);
			t || r || n ? function(e, a) {
				"adWebview.insert" === e.name && (e.name = "openAdWebPage"), "webView.exit" === e.name && a.swanDescription.push(i({}, e, {
					name: "exit"
				})), "both" === e.extension && m.swanCallBoxjsAPIList.push(e.name), a.boxjsDescription.push(e)
			}(e, a) : function(a, n) {
				l.specialList[a.name] ? l.specialList[a.name].forEach(function(e) {
					n.swanDescription.push(i({}, a, {
						name: e
					}))
				}) : n.swanDescription.push(a)
			}(e, a)
		}
		var i = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			r = n(3),
			s = n(7),
			o = n(23),
			u = n(6),
			l = n(38),
			m = n(2),
			c = {},
			v = {},
			g = new RegExp("\\.insert|\\.update|\\.remove|\\.post|webView\\.|^boxjs\\."),
			d = o.allDescription.reduce(function(e, a) {
				var n = i({}, a, {
					args: [].concat(a.args)
				});
				return n = function(a) {
					return l.noCallbackAPIs.find(function(e) {
						return a.name.match(e)
					}) || (l.bindingInvokeList.includes(a.invoke) ? c[a.name] = a.name : l.naBindingInvokeList.includes(a.invoke) ? v[a.name] = a.name : a.args.push({
						name: "innerCallback",
						value: "function"
					})), a.invoke = s.INVOKE_LIST[a.invoke], a.scheme = r.schema, a
				}(n), t(n, e), e
			}, {
				swanDescription: [],
				boxjsDescription: []
			});
		e.exports = {
			swanDescription: d.swanDescription,
			boxjsDescription: d.boxjsDescription,
			isNativeDescription: u.isNativeDescription,
			asyncBindingApiMap: c,
			naAsyncBindingApiMap: v
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.swanjsNative = void 0;
		var t, r = n(15),
			i = (t = r) && t.__esModule ? t : {
				default: t
			};
		a.swanjsNative = i.default.createContainer()
	}, function(_, C, e) {
		(function(e) {
			var a, n, t, u, r, i, s, o, l, m, c;

			function v(e, a) {
				for (var n = 0, t = e && e.length || 0; n < t && !1 !== a(e[n], n); n++);
			}

			function g(e) {
				return e
			}

			function d(e) {
				return "string" == typeof e ? JSON.parse(e) : e
			}

			function p(i, e, s) {
				v(e, function(e, a) {
					var n, t = h(e.value);
					switch (function a(n, t) {
						t = h(t);
						if (null == n) return t.isRequired && "*" !== t.type ? 1 : 0;
						var r = !1;
						switch (typeof t.type) {
							case "string":
								switch (t.type) {
									case "string":
									case "boolean":
									case "number":
									case "function":
									case "object":
										r = typeof n === t.type;
										break;
									case "Object":
										r = "object" == typeof n;
										break;
									case "Array":
										r = n instanceof Array;
										break;
									case "*":
										r = !0
								}
								if (!r) return 2;
								break;
							case "object":
								if (n && "object" == typeof n)
									for (var e in r = !0, t.type)
										if (!(r = !a(n[e], t.type[e]))) break;
								if (!r) return 2;
								break;
							default:
								if (t.oneOf) {
									if (v(t.oneOf, function(e) {
											return !(r = e === n)
										}), !r) return 3
								} else if (t.oneOfType) {
									if (v(t.oneOfType, function(e) {
											return !(r = !a(n, e))
										}), !r) return 4
								} else if (t.arrayOf) {
									if (!(n instanceof Array)) return 2;
									if (r = !0, v(n, function(e) {
											return r = !a(e, t.arrayOf)
										}), !r) return 5
								}
						}
						return 0
					}(i[a], t)) {
						case 1:
							n = " is required.";
							break;
						case 2:
							n = " type error. must be " + JSON.stringify(t.type || "Array");
							break;
						case 3:
							n = " type error, must be oneOf " + JSON.stringify(t.oneOf);
							break;
						case 4:
							n = " type error, must be oneOfType " + JSON.stringify(t.oneOfType);
							break;
						case 5:
							n = " type error, must be arrayOf " + JSON.stringify(t.arrayOf)
					}
					if (n) {
						var r = s && s.options.errorTitle || "jsNative";
						throw new Error("[" + r + " Argument Error]" + e.name + n)
					}
				})
			}

			function h(e) {
				if ("string" != typeof e) return e;
				var a = {
					isRequired: !0
				};
				return /=$/.test(e) && (a.isRequired = !1, e = e.slice(0, e.length - 1)), /\[\]$/.test(e) ? a.arrayOf = e.slice(0, e.length - 2) : 0 < e.indexOf("|") ? a.oneOfType = e.split("|") : a.type = e, a
			}

			function f(n) {
				return v(n, function(e, a) {
					"function" == typeof e && (n[a] = function(a) {
						return function(e) {
							a("string" == typeof e ? JSON.parse(e) : e)
						}
					}(e))
				}), n
			}

			function y(n) {
				return v(n, function(e, a) {
					"function" == typeof e && (n[a] = function(a) {
						var n = i + r++;
						return u[n] = function(e) {
							delete u[n], a(e)
						}, n
					}(e))
				}), n
			}

			function b(n) {
				return v(n, function(e, a) {
					n[a] = JSON.stringify(e)
				}), n
			}

			function I(t, e) {
				var r = {};
				return v(e, function(e, a) {
					var n = t[a];
					null != n && (r[e.name] = n)
				}), r
			}

			function w(e) {
				return u.prompt(e)
			}

			function A(e) {
				u.location.href = e
			}

			function P(e) {
				var a = document.createElement("iframe");
				a.src = e, document.body.appendChild(a), document.body.removeChild(a)
			}

			function S(e, a) {
				for (var n in a) a.hasOwnProperty(n) && !m[n] && (e[n] = a[n]);
				return e
			}

			function O(e, a) {
				var n = [];
				if (e.args instanceof Array)
					for (var t = 0; t < e.args.length; t++) {
						var r = e.args[t];
						n.push({
							name: r.name || r.n,
							value: r.value || r.v
						})
					}
				return (a = a || S)({
					name: e.name,
					args: n,
					invoke: function(e) {
						if (e instanceof Array) return e;
						switch (typeof e) {
							case "string":
								return s[e];
							case "object":
								var a = [];
								return e.check && a.push("ArgCheck"), e.before && (a = a.concat(l[e.before])), a.push(o[e.call]), "JSON" === e.after && a.push("ReturnDecode:JSON"), a
						}
					}(e.invoke),
					method: e.method,
					scheme: e.scheme || e.schema,
					authority: e.authority,
					path: e.path,
					handler: e.handler
				}, e)
			}

			function k(e) {
				var s = {
						ArgCheck: function(a, e, n) {
							return function(e) {
								return p(e, a.args, n), e
							}
						},
						ArgFuncArgDecode: function(e, a) {
							return "JSON" === a ? f : g
						},
						ArgFuncEncode: function() {
							return y
						},
						ArgEncode: function(e, a) {
							return "JSON" === a ? b : g
						},
						ArgAdd: function(e, a) {
							var n = e.args.length;
							e.args.push({
								name: "_" + a,
								value: "*"
							});
							var t = e[a];
							return function(e) {
								return e[n] = t, e
							}
						},
						ArgCombine: function(a, e) {
							switch (e) {
								case "URL":
									var n = a.scheme + "://" + a.authority + a.path;
									return function(t) {
										var r = [];
										v(a.args, function(e, a) {
											var n = t[a];
											null != n && r.push(e.name + "=" + encodeURIComponent(n))
										});
										var e = r.join("&");
										return e ? n + "?" + e : n
									};
								case "Object":
									return function(e) {
										return I(e, a.args)
									};
								case "JSONString":
									return function(e) {
										return JSON.stringify(I(e, a.args))
									}
							}
							return g
						},
						CallMethod: function(t, e) {
							var r, i;
							return function(e) {
								switch (function() {
									if (!r) {
										var e = t.method.split("."),
											a = e.length - 1;
										i = e[a], r = u;
										for (var n = 0; n < a; n++) r = r[e[n]]
									}
								}(), t.args.length) {
									case 0:
										return r[i]();
									case 1:
										return r[i](e[0]);
									case 2:
										return r[i](e[0], e[1]);
									case 3:
										return r[i](e[0], e[1], e[2])
								}
								return r[i].apply(r, e)
							}
						},
						CallPrompt: function() {
							return w
						},
						CallIframe: function() {
							return P
						},
						CallLocation: function() {
							return A
						},
						CallMessage: function(a) {
							return function(e) {
								u.webkit.messageHandlers[a.handler].postMessage(e)
							}
						},
						ReturnDecode: function(e, a) {
							return "JSON" === a ? d : g
						}
					},
					o = {
						options: {
							errorTitle: "jsNative",
							namingConflict: "error"
						},
						apis: [],
						apisLen: 0,
						apiIndex: {},
						config: function(e) {
							return e = e || {}, this.options.errorTitle = e.errorTitle || this.options.errorTitle, this.options.namingConflict = e.namingConflict || this.options.namingConflict, this
						},
						add: function(e) {
							if (e instanceof Array)
								for (var a = 0; a < e.length; a++) this.add(e[a]);
							else if ("object" == typeof e) {
								var n = e.name;
								if (null != this.apiIndex[n]) switch (this.options.namingConflict) {
									case "override":
										this.apis[this.apiIndex[n]] = O(e, this.descriptionPropMerger);
									case "ignore":
										break;
									case "error":
									default:
										throw new Error("[" + this.options.errorTitle + "] API exists: " + n)
								} else {
									var t = O(e, this.descriptionPropMerger);
									this.apiIndex[n] = this.apisLen, this.apis[this.apisLen++] = t
								}
							}
							return this
						},
						fromNative: function(e) {
							return this.add(n(O(e, this.descriptionPropMerger)))
						},
						invoke: function(e, a) {
							return n(this.apis[this.apiIndex[e]], a)
						},
						map: function(e) {
							e = e || function(e) {
								return e
							};
							for (var a, n, t = {}, r = 0; r < this.apis.length; r++) {
								var i = this.apis[r],
									s = (a = e, n = i.name, "function" == typeof a ? a(n) : a[n]);
								if (s && i.invoke)
									if (0 < s.indexOf(".")) {
										for (var o = s.split("."), u = 0, l = t; u < o.length - 1; u++) {
											var m = o[u];
											l[m] = l[m] || {}, l = l[m]
										}
										l[o[u]] = c(i)
									} else t[s] = c(i)
							}
							return t
						},
						invokeAPI: function(e, a) {
							return n(O(e, this.descriptionPropMerger), a)
						},
						addProcessorCreator: function(e, a) {
							if (s[e]) throw new Error("[" + this.options.errorTitle + "] processorCreators exists: " + e);
							return s[e] = a, this
						},
						setExternalDescriptionProps: function(e) {
							for (var a = "", n = 0; n < e.length; n++) {
								var t = e[n];
								a += 'target["' + t + '"] = source["' + t + '"];'
							}
							this.descriptionPropMerger = new Function("target", "source", a + "return target;")
						}
					};
				return o.config(e), o;

				function t(r) {
					var i = [];
					if (!r.invoke) throw new Error("[" + o.options.errorTitle + "] invoke undefined: " + r.name);
					return v(r.invoke, function(e) {
						var a, n = e.indexOf(":");
						0 < n && (a = e.slice(n + 1), e = e.slice(0, n));
						var t = s[e](r, a, o);
						"function" == typeof t && i.push(t)
					}), i
				}

				function n(e, a) {
					if (e) return a = a || [], v(t(e), function(e) {
						a = e(a)
					}), a
				}

				function c(e) {
					var n = t(e);
					return function() {
						return function(a) {
							return v(n, function(e) {
								a = e(a)
							}), a
						}(Array.prototype.slice.call(arguments, 0, e.args.length))
					}
				}
			}
			u = "undefined" != typeof window ? window : void 0 !== e ? e : this, i = "__jsna_", s = {
				method: ["ArgCheck", "CallMethod"],
				"method.json": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "CallMethod", "ReturnDecode:JSON"],
				"prompt.json": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgAdd:name", "ArgCombine:JSONString", "CallPrompt", "ReturnDecode:JSON"],
				"prompt.url": ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "ArgCombine:URL", "CallPrompt", "ReturnDecode:JSON"],
				location: ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "ArgCombine:URL", "CallLocation"],
				iframe: ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "ArgCombine:URL", "CallIframe"],
				message: ["ArgCheck", "ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgAdd:name", "ArgCombine:Object", "CallMessage"]
			}, o = {
				method: "CallMethod",
				prompt: "CallPrompt",
				location: "CallLocation",
				iframe: "CallIframe",
				message: "CallMessage"
			}, l = {
				JSONStringInTurn: ["ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON"],
				JSONString: ["ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgAdd:name", "ArgCombine:JSONString"],
				JSONObject: ["ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgAdd:name", "ArgCombine:Object"],
				URL: ["ArgFuncArgDecode:JSON", "ArgFuncEncode", "ArgEncode:JSON", "ArgCombine:URL"]
			}, m = {
				name: r = 1,
				args: 1,
				invoke: 1,
				method: 1,
				scheme: 1,
				authority: 1,
				path: 1,
				handler: 1
			}, (c = new k).version = "1.2.4", c.createContainer = function(e) {
				return new k(e)
			}, u.jsNative = c, n = [], void 0 === (t = "function" == typeof(a = c) ? a.apply(C, n) : a) || (_.exports = t), C.jsNative = c
		}).call(this, e(16))
	}, function(e, a) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || new Function("return this")()
		} catch (e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}, function(e, a, n) {
		"use strict";
		(function(t) {
			Object.defineProperty(a, "__esModule", {
				value: !0
			});
			a.executeByTryCatch = function(e, a, n) {
				try {
					e && e(n)
				} catch (e) {
					t.masterManager.communicator.fireMessage({
						type: "apiError",
						params: e
					}), console.error("thirdScriptError\n" + e.message + " ; " + a + "\n" + e.stack)
				}
			}
		}).call(this, n(16))
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.boxjsNative = void 0;
		var t, r = n(15),
			i = (t = r) && t.__esModule ? t : {
				default: t
			};
		a.boxjsNative = i.default.createContainer().config({
			namingConflict: "ignore"
		})
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var i = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
		a.convertNumberToString = function(e) {
			var a, n = 0 < arguments.length && void 0 !== e ? e : {},
				t = {};
			for (var r in n) "function" == typeof n[r] && (t[r] = n[r]);
			return a = JSON.parse(JSON.stringify(n)), i(a, t),
				function e(a) {
					for (var n in a) "number" == typeof a[n] ? a[n] = "" + a[n] : "object" === s(a[n]) && (a[n] = e(a[n]));
					return a
				}(a)
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.parseMessage = function(e) {
			if (o.default.isObject(e)) return e;
			try {
				e = (0, r.isAndroid)() ? JSON.parse(e) : JSON.parse(unescape(e))
			} catch (e) {
				console.error("message parse fail", e)
			}
			return e
		}, a.aiParser = function(e) {
			var a = e.data,
				n = a.statusCode,
				t = a.header,
				r = JSON.parse(e.data.body);
			return {
				statusCode: n,
				header: t,
				data: r
			}
		}, a.cloudParser = function(e) {
			var a = o.default.isString(e) ? JSON.parse(e) : e,
				n = a.status,
				t = a.message,
				r = a.data;
			return {
				status: n,
				message: t,
				data: r
			}
		}, a.jsonParse = l, a.resNeedDecode = m, a.base64Decode = c, a.base64Parser = function(e) {
			return (e = l(e)).data && (e.data = c(e.data)), m(e)
		}, a.base64ToArrayBuffer = function(e) {
			for (var a = u.globalNative.atob(e), n = a.length, t = new Uint8Array(n), r = 0; r < n; r++) t[r] = a.charCodeAt(r);
			return t.buffer
		}, a.settingThunkHandle = function(e) {
			var a = l(e);
			if (0 !== a.status) return a;
			var n = {};
			for (var t in i.SCOPE_MAP) {
				var r = i.SCOPE_MAP[t];
				"1" !== a.data[r] && !0 !== a.data[r] || (n[t] = !0), "0" !== a.data[r] && !1 !== a.data[r] || (n[t] = !1)
			}
			return a.data = {
				authSetting: n
			}, a
		}, a.getStorageAllThunkHandler = function(a) {
			var n = {};
			try {
				n = JSON.parse(a)
			} catch (e) {
				n = a
			}
			if (0 == +n.status) {
				var e = [];
				for (var t in n.data.keys) {
					var r = n.data.keys[t];
					try {
						r = JSON.parse(decodeURIComponent(r))
					} catch (e) {
						r = decodeURIComponent(r)
					}
					e.push(r)
				}
				n.data.keys = e
			}
			return n
		}, a.base64ToUint8 = function(e) {
			for (var a = u.globalNative.atob(e), n = a.length, t = new Uint8ClampedArray(n), r = 0; r < n; r++) t[r] = a.charCodeAt(r);
			return t
		}, a.getUserInfoParser = function(e) {
			if (0 === (e = o.default.isString(e) ? l(e) : e).status && e.data && e.data.userinfo) {
				e.data.userInfo = e.data.userinfo, delete e.data.userinfo;
				var a = e.data.userInfo;
				a.nickName = a.shoubainickname, a.avatarUrl = a.headimgurl, a.gender = a.sex, delete a.nickname, delete a.shoubainickname, delete a.headimgurl, delete a.sex
			}
			return e
		};
		var t, i = n(2),
			r = n(21),
			s = n(0),
			o = (t = s) && t.__esModule ? t : {
				default: t
			},
			u = n(1);

		function l(a) {
			var n = {};
			try {
				(n = JSON.parse(a)).status = +n.status
			} catch (e) {
				n = a
			}
			return n
		}

		function m(e, a) {
			var n = l(e),
				t = n.data || {};
			0 == +n.status && n.data && "string" == typeof n.data && (t = decodeURIComponent(n.data));
			try {
				n.data = JSON.parse(t)
			} catch (e) {
				n.data = t
			}
			var r = {
				tips: "this is a ping request",
				"Set-Cookie": n.data.header && n.data.header["Set-Cookie"] || ""
			};
			return a && (n.data = r), n
		}

		function c(e) {
			try {
				e = decodeURIComponent(escape(u.globalNative.atob(e)))
			} catch (e) {
				console.error("base64 decode fail", e)
			}
			return e
		}
	}, function(e, a, n) {
		"use strict";
		var t = s(n(0)),
			r = s(n(48)),
			i = s(n(49));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = {
			versionCompare: r.default,
			isIOS: function() {
				return t.default.isIOS
			},
			isAndroid: function() {
				return t.default.isAndroid
			},
			os: t.default.isIOS ? "ios" : t.default.isAndroid ? "android" : "none",
			osVersion: function() {
				return i.default.getOSVerion()
			},
			isBox: t.default.isBoxApp,
			boxVersion: i.default.getBoxVersion,
			host: t.default.getHost(),
			hostVersion: i.default.getHostVersion(),
			sdkVersion: i.default.getSdkVersion(),
			isWebView: function() {
				return /\bswan\//.test(navigator.userAgent)
			}
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.allWebviewDescriptions = void 0;
		var t = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			r = n(12),
			i = n(33),
			s = n(3),
			o = n(7),
			u = n(13),
			l = /^baidu\./,
			m = i.webviewDescriptions.concat(r.webviewAsyncDescriptionMap, r.webviewSyncDescriptionMap).map(function(e) {
				var a = t({}, e);
				return a.invoke = o.INVOKE_LIST[e.invoke], a.scheme = s.schema, "postMessage" === e.name && (a.args = [].concat(a.args)), e.name.match("Sync") || "postMessage" === e.name || u.asyncBindingApiMap[e.name] || a.args.push({
					name: "innerCallback",
					value: "function"
				}), l.test(e.name) && (a.name = e.name.split(".")[1]), "app.insert" === e.name && (a.name = "openApp"), a
			});
		a.allWebviewDescriptions = m
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.allDescription = void 0;
		var t = n(34),
			r = n(3),
			i = n(6),
            s = [];
            window.isNa = i.nativeDescription;
        i.isNativeDescription ? a.allDescription = s = i.nativeDescription : (a.allDescription = s = (0, t.getLocalDescList)(), (0, r.getEnvInfo)()), a.allDescription = s
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.swanInit = a.extensionAPIInit = a.getInvokeMethod = a.swanCallboxjsAPIInit = a.extensionToSwan = void 0;
		var t, u = function(e, a) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return function(e, a) {
					var n = [],
						t = !0,
						r = !1,
						i = void 0;
					try {
						for (var s, o = e[Symbol.iterator](); !(t = (s = o.next()).done) && (n.push(s.value), !a || n.length !== a); t = !0);
					} catch (e) {
						r = !0, i = e
					} finally {
						try {
							!t && o.return && o.return()
						} finally {
							if (r) throw i
						}
					}
					return n
				}(e, a);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			},
			s = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			r = n(0),
			o = (t = r) && t.__esModule ? t : {
				default: t
			},
			l = n(39),
			m = n(3),
			i = n(2);
		var c = i.swanCallBoxjsAPIList.concat(i.swanCallBoxjsCommonAPIList),
			v = a.extensionToSwan = function(e, a, n, t) {
				delete a.extension;
				var r = n.split(".")[0];
				if (m.hostRegx.test(n))
					if ("baidu" === r) {
						e[n.replace("baidu.", "")] = t
					} else {
						var i = n.replace(m.hostName + ".", "");
						e[m.hostName] = e[m.hostName] || {}, e[m.hostName][i] = t
					}
				else;
			},
			g = a.swanCallboxjsAPIInit = function(e, a, n) {
				if (-1 < e.indexOf(".")) {
					v(a, {
						extension: "both"
					}, e, n[e])
				} else a[e] = n[e]
			},
			d = a.getInvokeMethod = function(t, r, i) {
				return r.match("Sync") || o.default.isFunction(i) ? function() {
					for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
					return l.invokeMaker.apply(void 0, [t, r, i, null].concat(a))
				} : function(e) {
					return "function" == typeof e ? (0, l.invokeMaker)(t, r, i, null, e) : (0, l.invokeMaker)(t, r, i, null, s({}, i.defaultParam, e))
				}
			},
			p = a.extensionAPIInit = function(e, a, n, t) {
				var r = e.split("."),
					i = u(r, 2),
					s = i[0],
					o = i[1];
				n.extension ? v(a, n, e, t) : (a[s] = a[s] || {}, a[s][o] = t)
			};
		a.swanInit = function(e, a, n) {
			for (var t in n)
				if (c.includes(t)) g(t, a, n);
				else {
					var r = n[t],
						i = d(e, t, r);
					0 < t.indexOf(".") ? p(t, a, r, i) : a[t] = i
				}
			return a
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.events = void 0;
		var t = function(e, a, n) {
			return a && r(e.prototype, a), n && r(e, n), e
		};

		function r(e, a) {
			for (var n = 0; n < a.length; n++) {
				var t = a[n];
				t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
			}
		}
		var i, s = n(40),
			o = (i = s) && i.__esModule ? i : {
				default: i
			},
			u = n(17);
		var l = (function(e, a) {
			if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
			e.prototype = Object.create(a && a.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a)
		}(m, o.default), t(m, [{
			key: "once",
			value: function(e, a) {
				this.onMessage(e, function(e) {
					(0, u.executeByTryCatch)(a, "at callback", e.data)
				}, {
					once: !0
				})
			}
		}, {
			key: "on",
			value: function(e, a) {
				this.onMessage(e, function(e) {
					(0, u.executeByTryCatch)(a, "at callback", e.data)
				})
			}
		}, {
			key: "emit",
			value: function(e, a) {
				this.fireMessage({
					type: e,
					data: a
				})
			}
		}]), m);

		function m() {
			return function(e, a) {
					if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
				}(this, m),
				function(e, a) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !a || "object" != typeof a && "function" != typeof a ? e : a
				}(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments))
		}
		a.events = new l
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.asyncMethodInvoker = void 0;
		var t = n(13),
			r = n(47),
			i = n(50);
		a.asyncMethodInvoker = function(e) {
			return t.asyncBindingApiMap[e.apiName] ? (0, r.bindingInvoker)(e) : (0, i.schemeInvoker)(e)
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.createBindingBoxjsPromise = a.createBindingCbPromise = a.createLevel2Promise = a.createInvokePromise = void 0;
		var t, r = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			i = n(0),
			s = (t = i) && t.__esModule ? t : {
				default: t
			},
			o = n(1),
			u = n(2),
			l = n(19),
			m = n(20),
			c = n(10),
			v = n(28),
			g = n(8),
			d = n(13);
		a.createInvokePromise = function(t) {
			return new Promise(function(a, n) {
				var e = t.params || {};
				if (e.success && "function" != typeof e.success || e.fail && "function" != typeof e.fail) return n((0, g.nativeResHandler)({
					res: {
						status: 904,
						message: "params type error",
						errHappen: "JS"
					}
				})), !1;
				e = JSON.parse(JSON.stringify(e)), e = u.CANCEL_CONVERT_LIST.some(function(e) {
					return t.apiName.match(e)
				}) ? e : (0, l.convertNumberToString)(e), e = r(e, {
					innerCallback: function(e) {
						0 == +e.status ? a((0, g.nativeResHandler)({
							res: e,
							thunk: t.thunk
						})) : n((0, g.nativeResHandler)({
							res: e,
							thunk: t.thunk
						}))
					}
				}), t.jsNative.invoke(t.apiName, (0, c.paramsInOrder)(t.jsNative, t.apiName, e))
			})
		}, a.createLevel2Promise = function(t) {
			return t.params.cb = (0, v.getParamsCBName)(), new Promise(function(a, n) {
				o.global[t.params.cb] = function(e) {
					0 == +(e = t.parser ? t.parser(e) : (0, m.jsonParse)(e)).status ? a((0, g.nativeResHandler)({
						res: e
					})) : n((0, g.nativeResHandler)({
						res: e
					}))
				}, t.apiName && d.asyncBindingApiMap[t.apiName] && t.jsNative.invoke(t.apiName, (0, c.paramsInOrder)(t.jsNative, t.apiName, t.params))
			})
		}, a.createBindingCbPromise = function(t) {
			return t.params.cb = (0, v.getParamsCBName)(), new Promise(function(a, n) {
				o.global[t.params.cb] = function(e) {
					0 == +(e = t.parser ? t.parser(e) : s.default.isString(e) ? (0, m.jsonParse)(e) : e).status ? a((0, g.nativeResHandler)({
						res: e,
						thunk: t.thunk
					})) : n((0, g.nativeResHandler)({
						res: e,
						thunk: t.thunk
					}))
				}
			})
		}, a.createBindingBoxjsPromise = function(r) {
			return new Promise(function(e, a) {
				var n = r.params || {};
				n = JSON.parse(JSON.stringify(n));
				var t = r.jsNative.invoke(r.apiName, (0, c.paramsInOrder)(r.jsNative, r.apiName, n));
				0 == +(t = s.default.isString(t) ? JSON.parse(t) : t).status ? e((0, g.nativeResHandler)({
					res: t
				})) : a((0, g.nativeResHandler)({
					res: t
				}))
			})
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.getParamsCBName = void 0;
		var t, r = n(0),
			i = (t = r) && t.__esModule ? t : {
				default: t
			};
		a.getParamsCBName = function() {
			return "_bdbox_pjs_" + i.default.getId()
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.invokeBindingMethod = a.invokeMethod = void 0;
		var t = n(10),
			r = a.invokeMethod = function(e, a, n) {
				return e.invoke(a, (0, t.paramsInOrder)(e, a, n))
			};
		a.invokeBindingMethod = function(e, a, n) {
			var t = void 0;
			try {
				t = r(e, a, n)
			} catch (e) {
				t = {
					status: 904,
					message: e.message,
					errHappen: "JS"
				}
			}
			return t
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.postMessage = void 0;
		var t, r = n(0),
			i = (t = r) && t.__esModule ? t : {
				default: t
			},
			s = n(1),
			o = n(14),
			u = n(10);
		a.postMessage = function(e) {
			var a = {};
			if (i.default.isAndroid) return s.globalNative.Bdbox_aiapps_jsbridge.setData("master", JSON.stringify(e));
			a = {
				webviewid: "master",
				message: JSON.stringify(e)
			}, o.swanjsNative.invoke("postMessage", (0, u.paramsInOrder)(o.swanjsNative, "postMessage", a))
		}
	}, function(e, a, n) {
		"use strict";
		var t = n(22),
			r = n(14),
			i = n(24),
			s = n(52),
			o = n(60),
			u = n(21),
            l = n(61);
            window.aaa = t.allWebviewDescriptions;
		for (var m in r.swanjsNative.add(t.allWebviewDescriptions), o.processors) r.swanjsNative.addProcessorCreator(m, o.processors[m]);
		window.swan = (0, u.isWebView)() ? (0, i.swanInit)(r.swanjsNative, {}, s.swanjsMap) : (0, l.webSwanInit)(s.swanjsMap)
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		a.envMap = {
			ios: {
				webview: {
					async: {
						invoke: "swan.message.url",
						handler: "bridge"
					},
					sync: {
						invoke: "swan.prompt"
					},
					ubc: {
						name: "ubcReport",
						authority: "utils",
						path: "ubcReport",
						handler: "bridge",
						invoke: "swan.message.url",
						args: [{
							name: "actionId",
							value: "string"
						}, {
							name: "value",
							value: "Object"
						}, {
							name: "minver",
							value: "string="
						}, {
							name: "min_v",
							value: "string="
						}]
					}
				},
				jsc: {
					async: {
						invoke: "swan.method.url",
						method: "_naSwan.bridge.postMessage"
					},
					sync: {
						invoke: "swan.method.json",
						method: "_naSwan.bridge.prompt"
					},
					ubc: {
						name: "ubcReport",
						authority: "utils",
						path: "ubcReport",
						method: "_naSwan.bridge.postMessage",
						invoke: "swan.method.url",
						args: [{
							name: "actionId",
							value: "string"
						}, {
							name: "value",
							value: "Object"
						}, {
							name: "minver",
							value: "string="
						}, {
							name: "min_v",
							value: "string="
						}]
					}
				}
			},
			android: {
				webview: {
					async: {
						invoke: "swan.method.url",
						method: "Bdbox_android_jsbridge.dispatch"
					},
					sync: {
						invoke: "swan.method.url",
						method: "Bdbox_aiapps_jsbridge.dispatch"
					},
					ubc: {
						name: "ubcReport",
						authority: "utils",
						path: "ubcEvent",
						invoke: "swan.method.ubc",
						method: "Bdbox_android_utils.ubcEvent",
						args: [{
							name: "actionId",
							value: "string"
						}, {
							name: "value",
							value: "Object"
						}, {
							name: "minver",
							value: "string="
						}, {
							name: "min_v",
							value: "string="
						}]
					}
				},
				v8: {
					async: {
						invoke: "swan.method.url",
						method: "_naSwan.Bdbox_android_jsbridge.dispatch"
					},
					sync: {
						invoke: "swan.method.url",
						method: "_naSwan.Bdbox_aiapps_jsbridge.dispatch"
					},
					ubc: {
						name: "ubcReport",
						authority: "utils",
						path: "ubcEvent",
						invoke: "swan.method.ubc",
						method: "_naSwan.Bdbox_android_utils.ubcEvent",
						args: [{
							name: "actionId",
							value: "string"
						}, {
							name: "value",
							value: "Object"
						}, {
							name: "minver",
							value: "string="
						}, {
							name: "min_v",
							value: "string="
						}]
					}
				}
			}
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.webviewDescriptions = void 0;
		var t = n(23),
			r = n(12),
			i = n(6),
			s = t.allDescription.filter(function(e) {
				return r.webviewDescriptionList.includes(e.name)
			});
		i.isNativeDescription || (a.webviewDescriptions = s = s.concat(r.webviewExtLocalDescriptionMap)), a.webviewDescriptions = s
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.getLocalDescList = void 0;
		var t, r = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			i = n(0),
			s = (t = i) && t.__esModule ? t : {
				default: t
			},
			o = n(3),
			u = n(35),
			l = n(36),
			m = n(37),
			c = n(4);
		a.getLocalDescList = function() {
			var e = u.synclist.concat(s.default.isIOS ? m.iosSpecialSyncMap : l.androidSpecialSyncMap);
			e = e.map(function(e) {
				return e = r({}, c.syncInvokeMethodItem, e), "jsc" === o.frameInfo && (e.method = "_naSwan.bridge." + e.name), e
			});
			var a = "ios" === o.osInfo ? u.asynclist.concat(u.openSourceDebugList, m.iosSpecialMap) : u.asynclist.concat(u.openSourceDebugList, l.androidSpecialMap);
			a = a.map(function(e) {
				return e = r({}, c.asyncInvokeMethodItem, e)
			});
			var n = e.concat(a);
			return n.push(c.ubcInvokeMethodItem), n
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.asynclist = a.synclist = a.openSourceDebugList = void 0;
		var t, r = n(4),
			i = n(0),
			s = (t = i) && t.__esModule ? t : {
				default: t
			},
			o = n(1);
		var u = s.default.isAndroid && o.globalNative._naUtils && o.globalNative._naUtils.getSystemInfo,
			l = s.default.isAndroid ? "utils" : "swanAPI",
			m = (a.openSourceDebugList = [{
				name: "downloadExtension",
				authority: "swanAPI",
				path: "/debug/downloadExtension",
				args: [{
					name: "url",
					value: "string"
				}, {
					name: "cb",
					value: "string"
				}]
			}, {
				name: "getDebugConfig",
				authority: "swanAPI",
				path: "/debug/getDebugConfig",
				args: []
			}, {
				name: "setDebugConfig",
				authority: "swanAPI",
				path: "/debug/setDebugConfig",
				args: [{
					name: "config",
					value: "object"
				}]
			}, {
				name: "setCtsConfig",
				authority: "swanAPI",
				path: "/debug/setCtsConfig",
				args: [{
					name: "loadCts",
					value: "string"
				}, {
					name: "cb",
					value: "string"
				}]
			}, {
				name: "setExtensionConfig",
				authority: "swanAPI",
				path: "/debug/setExtensionConfig",
				args: [{
					name: "useExtension",
					value: "string"
				}]
			}, {
				name: "replaceSwanCore",
				authority: "swanAPI",
				path: "/debug/replaceSwanCore",
				args: [{
					name: "url",
					value: "string"
				}, {
					name: "cb",
					value: "string"
				}]
			}, {
				name: "setReplaceSwanCoreConfig",
				authority: "swanAPI",
				path: "/debug/setReplaceSwanCoreConfig",
				args: [{
					name: "emitReplaceSwanCore",
					value: "string"
				}]
			}, {
				name: "replaceGameCore",
				authority: "swanAPI",
				path: "/debug/replaceGameCore",
				args: [{
					name: "url",
					value: "string="
				}, {
					name: "cb",
					value: "string="
				}]
			}, {
				name: "setReplaceGameCoreConfig",
				authority: "swanAPI",
				path: "/debug/setReplaceGameCoreConfig",
				args: [{
					name: "emitReplaceGameCore",
					value: "string="
				}]
			}], a.synclist = [{
				name: "getSystemInfoSync",
				authority: l,
				path: "/getSystemInfoSync",
				args: []
			}, {
				name: "getStorageInfoSync",
				authority: "swanAPI",
				path: "/getStorageInfoSync",
				args: []
			}, {
				name: "clearStorageSync",
				authority: "swanAPI",
				path: "/clearStorageSync",
				args: []
			}, {
				name: "getStorageSync",
				authority: "swanAPI",
				path: "/getStorageSync",
				args: [{
					name: "key",
					value: "string"
				}]
			}, {
				name: "setStorageSync",
				authority: "swanAPI",
				path: "/setStorageSync",
				args: [{
					name: "key",
					value: "string"
				}, {
					name: "data",
					value: "*"
				}]
			}, {
				name: "removeStorageSync",
				authority: "swanAPI",
				path: "/removeStorageSync",
				args: [{
					name: "key",
					value: "string"
				}]
			}, {
				name: "isLoginSync",
				authority: "swanAPI",
				path: "/isLoginSync",
				args: []
			}, {
				name: "canvas.measureTextSync",
				authority: "swanAPI",
				path: "/canvas/measureTextSync",
				args: [{
					name: "slaveId",
					value: "string"
				}, {
					name: "canvasId",
					value: "string="
				}, {
					name: "text",
					value: "string="
				}, {
					name: "font",
					value: "string="
				}]
			}, {
				name: "backgroundAudio.getParamsSync",
				authority: "swanAPI",
				path: "/backgroundAudio/getParamsSync",
				args: [{
					name: "slaveId",
					value: "string"
				}, {
					name: "param",
					value: "string"
				}]
			}, {
				name: "getMenuButtonBoundingClientRect",
				authority: "swanAPI",
				path: "/getMenuButtonBoundingClientRect",
				args: []
			}, {
				name: "getBatteryInfoSync",
				authority: "swanAPI",
				path: "/getBatteryInfoSync",
				args: []
			}, {
				name: "getCommonSysInfoSync",
				authority: l,
				path: "/getCommonSysInfoSync",
				args: []
			}, {
				name: "getSlaveIdSync",
				authority: "swanAPI",
				path: "/getSlaveIdSync",
				args: []
			}, {
				name: "getAppInfoSync",
				authority: "swanAPI",
				path: "/getAppInfoSync",
				args: []
			}, {
				name: "getFileSystemManager",
				authority: "swanAPI",
				path: "/",
				args: [],
				invoke: s.default.isAndroid ? "swan.method.jsonString" : "swan.method.json",
				method: s.default.isAndroid ? "_naSwan.getFileSystemManager" : "_naSwan.bridge.getFileSystemManager"
			}], r.asyncInvokeMethodItem.invoke),
			c = r.asyncInvokeMethodItem.method,
			v = r.asyncInvokeMethodItem.handler,
			g = s.default.isAndroid ? "swan.method.jsonString" : m;
		a.asynclist = [{
			name: "getPhoneContacts",
			authority: "swanAPI",
			path: "/getPhoneContacts",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "setMenuOpacity",
			authority: "swanAPI",
			path: "/menu/setMenuOpacity",
			args: [{
				name: "alpha",
				value: "number"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "setMenuEnabled",
			authority: "swanAPI",
			path: "/menu/setMenuEnabled",
			args: [{
				name: "enabled",
				value: "boolean"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "live.play",
			authority: "swanAPI",
			path: "/live/play",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "liveId",
				value: "string"
			}]
		}, {
			name: "live.stop",
			authority: "swanAPI",
			path: "/live/stop",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "liveId",
				value: "string"
			}]
		}, {
			name: "live.pause",
			authority: "swanAPI",
			path: "/live/pause",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "liveId",
				value: "string"
			}]
		}, {
			name: "live.resume",
			authority: "swanAPI",
			path: "/live/resume",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "liveId",
				value: "string"
			}]
		}, {
			name: "live.mute",
			authority: "swanAPI",
			path: "/live/mute",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "liveId",
				value: "string"
			}, {
				name: "muted",
				value: "boolean"
			}]
		}, {
			name: "live.fullScreen",
			authority: "swanAPI",
			path: "/live/fullScreen",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "liveId",
				value: "string"
			}, {
				name: "fullScreen",
				value: "boolean"
			}, {
				name: "direction",
				value: "string="
			}]
		}, {
			name: "map.getScale",
			authority: "swanAPI",
			path: "/map/getScale",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "mapId",
				value: "string"
			}]
		}, {
			name: "map.getRegion",
			authority: "swanAPI",
			path: "/map/getRegion",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "mapId",
				value: "string"
			}]
		}, {
			name: "map.includePoints",
			authority: "swanAPI",
			path: "/map/includePoints",
			args: [{
				name: "points",
				value: "Array"
			}, {
				name: "padding",
				value: "Array="
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "mapId",
				value: "string"
			}]
		}, {
			name: "map.translateMarker",
			authority: "swanAPI",
			path: "/map/translateMarker",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "mapId",
				value: "string"
			}, {
				name: "markerId",
				value: "string"
			}, {
				name: "destination",
				value: "object"
			}, {
				name: "autoRotate",
				value: "boolean"
			}, {
				name: "rotate",
				value: "string"
			}, {
				name: "duration",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "map.moveToLocation",
			authority: "swanAPI",
			path: "/map/moveToLocation",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "mapId",
				value: "string"
			}]
		}, {
			name: "map.getCenterLocation",
			authority: "swanAPI",
			path: "/map/getCenterLocation",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "mapId",
				value: "string"
			}]
		}, {
			name: "onMemoryWarning",
			authority: "swanAPI",
			path: "/memoryWarning",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "onNetworkStatusChange",
			authority: "swanAPI",
			path: "/networkStatusChange",
			args: [{
				name: "cb",
				value: "string"
			}],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naNetwork.networkStatusChange" : c
		}, {
			name: "recorder.start",
			authority: "swanAPI",
			path: "/recorder/start",
			args: [{
				name: "duration",
				value: "string="
			}, {
				name: "sampleRate",
				value: "string="
			}, {
				name: "numberOfChannels",
				value: "string="
			}, {
				name: "encodeBitRate",
				value: "string="
			}, {
				name: "format",
				value: "string="
			}, {
				name: "audioSource",
				value: "string="
			}, {
				name: "cb",
				value: "object="
			}]
		}, {
			name: "recorder.pause",
			authority: "swanAPI",
			path: "/recorder/pause",
			args: []
		}, {
			name: "recorder.resume",
			authority: "swanAPI",
			path: "/recorder/resume",
			args: []
		}, {
			name: "recorder.stop",
			authority: "swanAPI",
			path: "/recorder/stop",
			args: []
		}, {
			name: "request",
			authority: "swanAPI",
			path: "/request",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "data",
				value: "string|object="
			}, {
				name: "header",
				value: "object="
			}, {
				name: "method",
				value: "string="
			}, {
				name: "dataType",
				value: "string="
			}, {
				name: "responseType",
				value: "string="
			}, {
				name: "ping",
				value: "boolean="
			}, {
				name: "__plugin__",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "ext",
				value: "object="
			}, {
				name: "__requestDataType__",
				value: "string="
			}]
		}, {
			name: "arrayBufferRequest",
			authority: "swanAPI",
			path: "/arrayBufferRequest",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "data",
				value: "string|object="
			}, {
				name: "header",
				value: "object="
			}, {
				name: "method",
				value: "string="
			}, {
				name: "dataType",
				value: "string="
			}, {
				name: "responseType",
				value: "string="
			}, {
				name: "ping",
				value: "boolean="
			}, {
				name: "__plugin__",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "ext",
				value: "object="
			}, {
				name: "__requestDataType__",
				value: "string="
			}]
		}, {
			name: "updateManager.applyUpdate",
			authority: "swanAPI",
			path: "/applyUpdate",
			args: []
		}, {
			name: "video.play",
			authority: "swanAPI",
			path: "/video/play",
			args: [{
				name: "videoId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "video.pause",
			authority: "swanAPI",
			path: "/video/pause",
			args: [{
				name: "videoId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "video.seek",
			authority: "swanAPI",
			path: "/video/seek",
			args: [{
				name: "videoId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "position",
				value: "string"
			}]
		}, {
			name: "video.sendDanmu",
			authority: "swanAPI",
			path: "/video/sendDanmu",
			args: [{
				name: "videoId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "text",
				value: "string="
			}, {
				name: "color",
				value: "string="
			}]
		}, {
			name: "video.fullScreen",
			authority: "swanAPI",
			path: "/video/fullScreen",
			args: [{
				name: "videoId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "fullScreen",
				value: "boolean"
			}, {
				name: "direction",
				value: {
					oneOf: [0, 90, -90]
				}
			}]
		}, {
			name: "video.showStatusBar",
			authority: "swanAPI",
			path: "/video/showStatusBar",
			args: [{
				name: "videoId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "video.hideStatusBar",
			authority: "swanAPI",
			path: "/video/hideStatusBar",
			args: [{
				name: "videoId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "video.playbackRate",
			authority: "swanAPI",
			path: "/video/playbackRate",
			args: [{
				name: "videoId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "rate",
				value: "string="
			}]
		}, {
			name: "video.stop",
			authority: "swanAPI",
			path: "/video/stop",
			args: [{
				name: "videoId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "voiceRecognizer.start",
			authority: "swanAPI",
			path: "/voiceRecognize/start",
			args: [{
				name: "vad",
				value: "string"
			}, {
				name: "isLongSpeech",
				value: "boolean"
			}, {
				name: "cb",
				value: "object"
			}, {
				name: "pid",
				value: "string"
			}, {
				name: "voiceServerPath",
				value: "string"
			}]
		}, {
			name: "voiceRecognizer.stop",
			authority: "swanAPI",
			path: "/voiceRecognize/stop",
			args: []
		}, {
			name: "voiceRecognizer.cancel",
			authority: "swanAPI",
			path: "/voiceRecognize/cancel",
			args: []
		}, {
			name: "showToast",
			authority: "swanAPI",
			path: "/showToast",
			args: [{
				name: "title",
				value: "string"
			}, {
				name: "message",
				value: "string="
			}, {
				name: "icon",
				value: "string="
			}, {
				name: "mask",
				value: "boolean="
			}, {
				name: "time",
				value: "string"
			}, {
				name: "type",
				value: "string"
			}, {
				name: "image",
				value: "string="
			}, {
				name: "buttonText",
				value: "string="
			}, {
				name: "cb",
				value: "string="
			}]
		}, {
			name: "getPhoneNumber",
			authority: "swanAPI",
			path: "/getPhoneNumber",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "setTabBarBadge",
			authority: "swanAPI",
			path: "/setTabBarBadge",
			args: [{
				name: "index",
				value: "string"
			}, {
				name: "text",
				value: "string"
			}]
		}, {
			name: "removeTabBarBadge",
			authority: "swanAPI",
			path: "/closeTabBarBadge",
			args: [{
				name: "index",
				value: "string"
			}]
		}, {
			name: "showTabBarRedDot",
			authority: "swanAPI",
			path: "/openTabBarRedDot",
			args: [{
				name: "index",
				value: "string"
			}]
		}, {
			name: "hideTabBarRedDot",
			authority: "swanAPI",
			path: "/closeTabBarRedDot",
			args: [{
				name: "index",
				value: "string"
			}]
		}, {
			name: "setTabBarStyle",
			authority: "swanAPI",
			path: "/setTabBarStyle",
			args: [{
				name: "color",
				value: "string="
			}, {
				name: "selectedColor",
				value: "string="
			}, {
				name: "backgroundColor",
				value: "string="
			}, {
				name: "borderStyle",
				value: {
					oneOf: ["black", "white"]
				}
			}]
		}, {
			name: "setTabBarItem",
			authority: "swanAPI",
			path: "/setTabBarItem",
			args: [{
				name: "index",
				value: "string"
			}, {
				name: "text",
				value: "string="
			}, {
				name: "iconPath",
				value: "string="
			}, {
				name: "selectedIconPath",
				value: "string="
			}]
		}, {
			name: "showTabBar",
			authority: "swanAPI",
			path: "/openTabBar",
			args: [{
				name: "animation",
				value: "boolean"
			}]
		}, {
			name: "hideTabBar",
			authority: "swanAPI",
			path: "/closeTabBar",
			args: [{
				name: "animation",
				value: "boolean"
			}]
		}, {
			name: "vibrateShort",
			authority: "swanAPI",
			path: "/vibrateShort",
			args: []
		}, {
			name: "getImageInfo",
			authority: "swanAPI",
			path: "/getImageInfo",
			args: [{
				name: "src",
				value: "string"
			}]
		}, {
			name: "chooseImage",
			authority: "swanAPI",
			path: "/chooseImage",
			args: [{
				name: "count",
				value: "string="
			}, {
				name: "sizeType",
				value: "string[]="
			}, {
				name: "sourceType",
				value: "string[]="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "saveImageToPhotosAlbum",
			authority: "swanAPI",
			path: "/saveImageToPhotosAlbum",
			args: [{
				name: "filePath",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "canvasToTempFilePath",
			authority: "swanAPI",
			path: "/canvas/toTempFilePath",
			args: [{
				name: "canvasId",
				value: "string"
			}, {
				name: "x",
				value: "string="
			}, {
				name: "y",
				value: "string="
			}, {
				name: "width",
				value: "string="
			}, {
				name: "height",
				value: "string="
			}, {
				name: "destWidth",
				value: "string="
			}, {
				name: "destHeight",
				value: "string="
			}, {
				name: "fileType",
				value: "string="
			}, {
				name: "quality",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "openLocation",
			authority: "swanAPI",
			path: "/map/openLocation",
			args: [{
				name: "latitude",
				value: "string"
			}, {
				name: "longitude",
				value: "string"
			}, {
				name: "name",
				value: "string="
			}, {
				name: "address",
				value: "string="
			}, {
				name: "scale",
				value: "string="
			}, {
				name: "ignoredApps",
				value: "Array="
			}]
		}, {
			name: "startLocationUpdate",
			authority: "swanAPI",
			path: "/startLocationUpdate",
			args: [{
				name: "cb",
				value: "string"
			}],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naLocationService.startLocationUpdate" : c
		}, {
			name: "stopLocationUpdate",
			authority: "swanAPI",
			path: "/stopLocationUpdate",
			args: [],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naLocationService.stopLocationUpdate" : c
		}, {
			name: "login",
			authority: "swanAPI",
			path: "/login",
			args: [{
				name: "force",
				value: "boolean="
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "timeout",
				value: "string="
			}, {
				name: "__plugin__",
				value: "string="
			}]
		}, {
			name: "getSetting",
			authority: "swanAPI",
			path: "/getSetting",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "openSetting",
			authority: "swanAPI",
			path: "/openSetting",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "getLocation",
			authority: "swanAPI",
			path: "/getLocation",
			args: [{
				name: "type",
				value: "string="
			}, {
				name: "altitude",
				value: "boolean="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "getUserInfo",
			authority: "swanAPI",
			path: "/getUserInfo",
			args: [{
				name: "invokeFrom",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "__plugin__",
				value: "string="
			}]
		}, {
			name: "checkSession",
			authority: "swanAPI",
			path: "/checkSession",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "authorize",
			authority: "swanAPI",
			path: "/authorize",
			args: [{
				name: "scope",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "showLoading",
			authority: "swanAPI",
			path: "/showLoading",
			args: [{
				name: "title",
				value: "string"
			}, {
				name: "mask",
				value: "boolean="
			}]
		}, {
			name: "hideLoading",
			authority: "swanAPI",
			path: "/hideLoading",
			args: []
		}, {
			name: "hideKeyboard",
			authority: l,
			path: "/hideKeyboard",
			args: []
		}, {
			name: "getNetworkType",
			authority: l,
			path: "/getNetworkType",
			args: []
		}, {
			name: "getSystemInfo",
			authority: l,
			path: "/getSystemInfo",
			args: [],
			invoke: u ? "swan.method.jsonString" : m,
			method: u ? "_naUtils.getSystemInfo" : c
		}, {
			name: "getClipboardData",
			authority: l,
			path: "/getClipboardData",
			args: []
		}, {
			name: "setClipboardData",
			authority: l,
			path: "/setClipboardData",
			args: [{
				name: "data",
				value: "string"
			}]
		}, {
			name: "setNavigationBarColor",
			authority: "swanAPI",
			path: "/setNavigationBarColor",
			args: [{
				name: "frontColor",
				value: "string"
			}, {
				name: "backgroundColor",
				value: "string"
			}, {
				name: "animation",
				value: "object="
			}]
		}, {
			name: "setNavigationBarTitle",
			authority: "swanAPI",
			path: "/setNavigationBarTitle",
			args: [{
				name: "title",
				value: "string"
			}]
		}, {
			name: "showNavigationBarLoading",
			authority: "swanAPI",
			path: "/showNavigationBarLoading",
			args: []
		}, {
			name: "hideNavigationBarLoading",
			authority: "swanAPI",
			path: "/hideNavigationBarLoading",
			args: []
		}, {
			name: "makePhoneCall",
			authority: l,
			path: "/makePhoneCall",
			args: [{
				name: "phoneNumber",
				value: "string"
			}]
		}, {
			name: "getStorageInfo",
			authority: "swanAPI",
			path: "/getStorageInfo",
			args: []
		}, {
			name: "clearStorage",
			authority: "swanAPI",
			path: "/clearStorage",
			args: []
		}, {
			name: "getStorage",
			authority: "swanAPI",
			path: "/getStorage",
			args: [{
				name: "key",
				value: "string"
			}]
		}, {
			name: "setStorage",
			authority: "swanAPI",
			path: "/setStorage",
			args: [{
				name: "key",
				value: "string"
			}, {
				name: "data",
				value: "*"
			}]
		}, {
			name: "removeStorage",
			authority: "swanAPI",
			path: "/removeStorage",
			args: [{
				name: "key",
				value: "string"
			}]
		}, {
			name: "showModal",
			authority: l,
			path: "/showModal",
			args: [{
				name: "title",
				value: "string"
			}, {
				name: "content",
				value: "string"
			}, {
				name: "showCancel",
				value: "boolean="
			}, {
				name: "cancelText",
				value: "string="
			}, {
				name: "confirmText",
				value: "string="
			}, {
				name: "cancelColor",
				value: "string="
			}, {
				name: "confirmColor",
				value: "string="
			}]
		}, {
			name: "showActionSheet",
			authority: "swanAPI",
			path: "/showActionSheet",
			args: [{
				name: "itemList",
				value: "string[]"
			}, {
				name: "itemColor",
				value: "string="
			}]
		}, {
			name: "startPullDownRefresh",
			authority: "swanAPI",
			path: "/startPullDownRefresh",
			args: []
		}, {
			name: "stopPullDownRefresh",
			authority: "swanAPI",
			path: "/stopPullDownRefresh",
			args: []
		}, {
			name: "saveFile",
			authority: "swanAPI",
			path: "/file/save",
			args: [{
				name: "tempFilePath",
				value: "string"
			}]
		}, {
			name: "getSavedFileList",
			authority: "swanAPI",
			path: "/file/getSavedFileList",
			args: []
		}, {
			name: "getSavedFileInfo",
			authority: "swanAPI",
			path: "/file/getSavedFileInfo",
			args: [{
				name: "filePath",
				value: "string"
			}]
		}, {
			name: "removeSavedFile",
			authority: "swanAPI",
			path: "/file/removeSavedFile",
			args: [{
				name: "filePath",
				value: "string"
			}]
		}, {
			name: "getSwanId",
			authority: "swanAPI",
			path: "/getSwanId",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "stopAccelerometer",
			authority: "swanAPI",
			path: "/stopAccelerometer",
			args: []
		}, {
			name: "setScreenBrightness",
			authority: "swanAPI",
			path: "/brightness/set",
			args: [{
				name: "value",
				value: "string"
			}]
		}, {
			name: "stopCompass",
			authority: "swanAPI",
			path: "/stopCompass",
			args: []
		}, {
			name: "getScreenBrightness",
			authority: "swanAPI",
			path: "/brightness/get",
			args: []
		}, {
			name: "setKeepScreenOn",
			authority: "swanAPI",
			path: "/brightness/keepScreenOn",
			args: [{
				name: "keepScreenOn",
				value: "boolean"
			}]
		}, {
			name: "vibrateLong",
			authority: "swanAPI",
			path: "/vibrateLong",
			args: []
		}, {
			name: "chooseVideo",
			authority: "swanAPI",
			path: "/chooseVideo",
			args: [{
				name: "cb",
				value: "string"
			}, {
				name: "sourceType",
				value: "string[]="
			}, {
				name: "compressed",
				value: "boolean="
			}, {
				name: "maxDuration",
				value: "string="
			}, {
				name: "camera",
				value: "string="
			}]
		}, {
			name: "chooseAddress",
			authority: "swanAPI",
			path: "/chooseAddress",
			args: [{
				name: "invokeFrom",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "chooseInvoiceTitle",
			authority: "swanAPI",
			path: "/chooseInvoiceTitle",
			args: [{
				name: "invokeFrom",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "scanCode",
			authority: "swanAPI",
			path: "/scanCode",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "recommendSimilarProducts",
			authority: "swanAPI",
			path: "/recommendSimilarProducts",
			args: [{
				name: "cb",
				value: "string"
			}, {
				name: "data",
				value: "object="
			}]
		}, {
			name: "recommendProducts",
			authority: "swanAPI",
			path: "/recommendProducts",
			args: [{
				name: "cb",
				value: "string"
			}, {
				name: "data",
				value: "object="
			}]
		}, {
			name: "saveVideoToPhotosAlbum",
			authority: "swanAPI",
			path: "/saveVideoToPhotosAlbum",
			args: [{
				name: "filePath",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "getFileInfo",
			authority: "swanAPI",
			path: "/file/getInfo",
			args: [{
				name: "filePath",
				value: "string"
			}, {
				name: "digestAlgorithm",
				value: "string="
			}]
		}, {
			name: "chooseLocation",
			authority: "swanAPI",
			path: "/map/chooseLocation",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "setEnableDebug",
			authority: "swanAPI",
			path: "/sConsole/debugSwitch",
			args: [{
				name: "enableDebug",
				value: "boolean"
			}]
		}, {
			name: "loadSubPackage",
			authority: "swanAPI",
			path: "/preloadSubPackage",
			args: [{
				name: "root",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "canvasPutImageData",
			authority: "swanAPI",
			path: "/canvas/putImageData",
			args: [{
				name: "cb",
				value: "string"
			}, {
				name: "data",
				value: "string"
			}, {
				name: "canvasId",
				value: "string"
			}, {
				name: "x",
				value: "string"
			}, {
				name: "y",
				value: "string"
			}, {
				name: "width",
				value: "string"
			}, {
				name: "height",
				value: "string="
			}]
		}, {
			name: "canvasGetImageData",
			authority: "swanAPI",
			path: "/canvas/getImageData",
			args: [{
				name: "cb",
				value: "string"
			}, {
				name: "canvasId",
				value: "string"
			}, {
				name: "x",
				value: "string"
			}, {
				name: "y",
				value: "string"
			}, {
				name: "width",
				value: "string"
			}, {
				name: "height",
				value: "string"
			}]
		}, {
			name: "openTabopt",
			authority: "feed",
			path: "/tabopt",
			args: [{
				name: "upgrade",
				value: "string="
			}, {
				name: "action",
				value: "string="
			}, {
				name: "tab_id",
				value: "string="
			}, {
				name: "tabinfo",
				value: "object="
			}, {
				name: "tabindex",
				value: "string="
			}, {
				name: "tabselected",
				value: "string="
			}]
		}, {
			name: "openShare",
			authority: "swanAPI",
			path: "/share",
			args: [{
				name: "title",
				value: "string="
			}, {
				name: "content",
				value: "string="
			}, {
				name: "imageUrl",
				value: "string="
			}, {
				name: "path",
				value: "string="
			}, {
				name: "pannel",
				value: "Array"
			}, {
				name: "defaultPannel",
				value: "Array"
			}, {
				name: "linkUrl",
				value: "string"
			}, {
				name: "mediaType",
				value: {
					oneOf: ["ugc_forward", "weixin_friend", "weixin_timeline", "baiduhi", "sinaweibo", "qqfriend", "qqdenglu", "baidu_friend"]
				}
			}, {
				name: "categoryData",
				value: "object"
			}, {
				name: "type",
				value: "string"
			}, {
				name: "source",
				value: "string"
			}, {
				name: "shareUrl",
				value: "string="
			}, {
				name: "minver",
				value: "string="
			}, {
				name: "command",
				value: "object="
			}, {
				name: "banner",
				value: "object="
			}, {
				name: "categoryInfo",
				value: "object="
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "snapshot",
				value: "boolean"
			}, {
				name: "forceLightTheme",
				value: "boolean"
			}]
		}, {
			name: "canvas.drawCanvas",
			authority: "swanAPI",
			path: "/canvas/drawCanvas",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "canvasId",
				value: "string"
			}, {
				name: "actions",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "reserve",
				value: "string="
			}]
		}, {
			name: "requestPolymerPayment",
			authority: "BDWallet",
			path: "/requestPolymerPayment",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "componentId",
				value: "string="
			}, {
				name: "orderInfo",
				value: "object"
			}, {
				name: "bannedChannels",
				value: "string[]="
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "from",
				value: "string="
			}, {
				name: "version",
				value: "string="
			}, {
				name: "__plugin__",
				value: "string="
			}, {
				name: "error",
				value: "object="
			}]
		}, {
			name: "requestAliPayment",
			authority: "BDWallet",
			path: "/requestAliPayment",
			args: [{
				name: "orderInfo",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "from",
				value: "string="
			}, {
				name: "version",
				value: "string="
			}]
		}, {
			name: "requestPayment",
			authority: "BDWallet",
			path: "/requestPayment",
			args: [{
				name: "orderInfo",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "from",
				value: "string="
			}, {
				name: "version",
				value: "string="
			}]
		}, {
			name: "requestWeChatPayment",
			authority: "BDWallet",
			path: "/requestWeChatPayment",
			args: [{
				name: "src",
				value: "string"
			}, {
				name: "extraData",
				value: "Object"
			}, {
				name: "cb",
				value: "string="
			}, {
				name: "from",
				value: "string="
			}, {
				name: "version",
				value: "string="
			}]
		}, {
			name: "sendSocketMessage",
			authority: "swanAPI",
			path: "/webSocket/send",
			args: [{
				name: "taskID",
				value: "string"
			}, {
				name: "data",
				value: "string"
			}, {
				name: "dataType",
				value: "string"
			}]
		}, {
			name: "closeSocket",
			authority: "swanAPI",
			path: "/webSocket/close",
			args: [{
				name: "taskID",
				value: "string"
			}, {
				name: "code",
				value: "string="
			}, {
				name: "reason",
				value: "string="
			}]
		}, {
			name: "connectSocket",
			authority: "swanAPI",
			path: "/webSocket/connect",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "header",
				value: "object="
			}, {
				name: "method",
				value: "string="
			}, {
				name: "protocols",
				value: "Array="
			}, {
				name: "__plugin__",
				value: "string="
			}, {
				name: "cb",
				value: "object"
			}]
		}, {
			name: "startAccelerometer",
			authority: "swanAPI",
			path: "/startAccelerometer",
			args: [{
				name: "interval",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "addPhoneContact",
			authority: "swanAPI",
			path: "/setPhoneContact",
			args: [{
				name: "action",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "firstName",
				value: "string"
			}, {
				name: "photoFilePath",
				value: "string="
			}, {
				name: "nickName",
				value: "string="
			}, {
				name: "lastName",
				value: "string="
			}, {
				name: "middleName",
				value: "string="
			}, {
				name: "remark",
				value: "string="
			}, {
				name: "mobilePhoneNumber",
				value: "string="
			}, {
				name: "weChatNumber",
				value: "string="
			}, {
				name: "addressCountry",
				value: "string="
			}, {
				name: "addressState",
				value: "string="
			}, {
				name: "addressCity",
				value: "string="
			}, {
				name: "addressStreet",
				value: "string="
			}, {
				name: "addressPostalCode",
				value: "string="
			}, {
				name: "organization",
				value: "string="
			}, {
				name: "title",
				value: "string="
			}, {
				name: "workFaxNumber",
				value: "string="
			}, {
				name: "workPhoneNumber",
				value: "string="
			}, {
				name: "hostNumber",
				value: "string="
			}, {
				name: "email",
				value: "string="
			}, {
				name: "url",
				value: "string="
			}, {
				name: "workAddressCountry",
				value: "string="
			}, {
				name: "workAddressState",
				value: "string="
			}, {
				name: "workAddressCity",
				value: "string="
			}, {
				name: "workAddressStreet",
				value: "string="
			}, {
				name: "workAddressPostalCode",
				value: "string="
			}, {
				name: "homeFaxNumber",
				value: "string="
			}, {
				name: "homePhoneNumber",
				value: "string="
			}, {
				name: "homeAddressCountry",
				value: "string="
			}, {
				name: "homeAddressState",
				value: "string="
			}, {
				name: "homeAddressCity",
				value: "string="
			}, {
				name: "homeAddressStreet",
				value: "string="
			}, {
				name: "homeAddressPostalCode",
				value: "string="
			}]
		}, {
			name: "ARCamera.takePhoto",
			authority: "swanAPI",
			path: "/ARCamera/takePhoto",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "ARCameraId",
				value: "string="
			}]
		}, {
			name: "ARCamera.retake",
			authority: "swanAPI",
			path: "/ARCamera/update",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "ARCameraId",
				value: "string="
			}, {
				name: "reset",
				value: "boolean="
			}]
		}, {
			name: "ARCamera.startRecord",
			authority: "swanAPI",
			path: "/ARCamera/startRecord",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "ARCameraId",
				value: "string="
			}, {
				name: "onProgressUpdate",
				value: "string="
			}, {
				name: "stopCallback",
				value: "string="
			}]
		}, {
			name: "ARCamera.stopRecord",
			authority: "swanAPI",
			path: "/ARCamera/stopRecord",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "ARCameraId",
				value: "string="
			}]
		}, {
			name: "ARCamera.detect",
			authority: "swanAPI",
			path: "/ARCamera/detectContent",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "ARCameraId",
				value: "string="
			}, {
				name: "detectType",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "ARCamera.arMessage",
			authority: "swanAPI",
			path: "/ARCamera/arMessage",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "ARCameraId",
				value: "string="
			}, {
				name: "messageData",
				value: "Object="
			}]
		}, {
			name: "ARCamera.changeARStatus",
			authority: "swanAPI",
			path: "/ARCamera/changeARStatus",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "ARCameraId",
				value: "string="
			}, {
				name: "ARKey",
				value: "string"
			}, {
				name: "ARType",
				value: "string"
			}, {
				name: "status",
				value: "string"
			}]
		}, {
			name: "camera.takePhoto",
			authority: "swanAPI",
			path: "/camera/takePhoto",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "quality",
				value: "string="
			}]
		}, {
			name: "camera.startRecord",
			authority: "swanAPI",
			path: "/camera/startRecord",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "timeoutCallback",
				value: "string"
			}]
		}, {
			name: "camera.stopRecord",
			authority: "swanAPI",
			path: "/camera/stopRecord",
			args: [{
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "startCompass",
			authority: "swanAPI",
			path: "/startCompass",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cancelRequest",
			authority: "swanAPI",
			path: "/cancelRequest",
			args: [{
				name: "cancelTag",
				value: "string="
			}, {
				name: "taskIdentifier",
				value: "string="
			}]
		}, {
			name: "downloadFile",
			authority: "swanAPI",
			path: "/downloadFile",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "filePath",
				value: "string="
			}, {
				name: "header",
				value: "object="
			}, {
				name: "onProgressUpdate",
				value: "string"
			}, {
				name: "__plugin__",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "uploadFile",
			authority: "swanAPI",
			path: "/uploadFile",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "header",
				value: "object="
			}, {
				name: "filePath",
				value: "string"
			}, {
				name: "formData",
				value: "object="
			}, {
				name: "name",
				value: "string"
			}, {
				name: "onProgressUpdate",
				value: "string"
			}, {
				name: "__plugin__",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "pageScrollTo",
			authority: "swanAPI",
			path: "/pageScrollTo",
			args: [{
				name: "scrollTop",
				value: "string|number"
			}, {
				name: "duration",
				value: "string|number="
			}]
		}, {
			name: "getHistory",
			authority: "swanAPI",
			path: "/getHistory",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "deleteHistory",
			authority: "swanAPI",
			path: "/deleteHistory",
			args: [{
				name: "appid",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "addFavor",
			authority: "swanAPI",
			path: "/addFavor",
			args: [{
				name: "appid",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "deleteFavor",
			authority: "swanAPI",
			path: "/deleteFavor",
			args: [{
				name: "appid",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "getFavor",
			authority: "swanAPI",
			path: "/getFavor",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "checkFavor",
			authority: "swanAPI",
			path: "/isFavor",
			args: [{
				name: "appid",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "setTopFavor",
			authority: "swanAPI",
			path: "/topFavor",
			args: [{
				name: "appid",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "setBackgroundTextStyle",
			authority: "swanAPI",
			path: "/setBackgroundTextStyle",
			args: [{
				name: "textStyle",
				value: "string"
			}]
		}, {
			name: "setBackgroundColor",
			authority: "swanAPI",
			path: "/setBackgroundColor",
			args: [{
				name: "backgroundColor",
				value: "string="
			}, {
				name: "backgroundColorTop",
				value: "string="
			}, {
				name: "backgroundColorBottom",
				value: "string="
			}]
		}, {
			name: "setInnerAudioOption",
			authority: "swanAPI",
			path: "/audio/setInnerAudioOption",
			args: [{
				name: "mixWithOther",
				value: "boolean="
			}]
		}, {
			name: "appInstallManager.install",
			authority: "swanAPI",
			path: "/installApp",
			args: [{
				name: "type",
				value: {
					oneOf: ["queryStatus", "startDownload", "pauseDownload", "cancelDownload", "installApp", "resumeDownload"]
				}
			}, {
				name: "url",
				value: "string="
			}, {
				name: "appId",
				value: "string="
			}, {
				name: "name",
				value: "string="
			}, {
				name: "onProgressUpdate",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "isAppInstalled",
			authority: "swanAPI",
			path: "/checkAppInstalled",
			args: [{
				name: "name",
				value: "string"
			}]
		}, {
			name: "recognizeImage",
			authority: "swanAPI",
			path: "/imageRecognition",
			args: [{
				name: "currentIndex",
				value: "number="
			}, {
				name: "categoryList",
				value: "object[]"
			}, {
				name: "customTips",
				value: "Object="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "showFavoriteGuide",
			authority: "swanAPI",
			path: "/showFavoriteGuide",
			args: [{
				name: "type",
				value: {
					oneOf: ["bar", "bar-autohide", "tip"]
				}
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "showOpenAppGuide",
			authority: "swanAPI",
			path: "/showOpenAppGuide",
			args: [{
				name: "name",
				value: "string="
			}, {
				name: "scheme",
				value: "string"
			}, {
				name: "downloadUrl",
				value: "string"
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "hideOpenAppGuide",
			authority: "swanAPI",
			path: "/hideOpenAppGuide",
			args: []
		}, {
			name: "getBatteryInfo",
			authority: "swanAPI",
			path: "/getBatteryInfo",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "startDeviceMotionListening",
			authority: "swanAPI",
			path: "/startDeviceMotion",
			args: [{
				name: "interval",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "stopDeviceMotionListening",
			authority: "swanAPI",
			path: "/stopDeviceMotion",
			args: []
		}, {
			name: "animView.insert",
			authority: "swanAPI",
			path: "/animView/insert",
			args: [{
				name: "gesture",
				value: "string"
			}, {
				name: "hide",
				value: "string"
			}, {
				name: "sanId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}, {
				name: "style",
				value: "Object"
			}, {
				name: "loop",
				value: "boolean"
			}, {
				name: "autoPlay",
				value: "boolean"
			}, {
				name: "path",
				value: "string"
			}, {
				name: "action",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}]
		}, {
			name: "animView.update",
			authority: "swanAPI",
			path: "/animView/update",
			args: [{
				name: "gesture",
				value: "string"
			}, {
				name: "hide",
				value: "string"
			}, {
				name: "sanId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}, {
				name: "style",
				value: "Object"
			}, {
				name: "loop",
				value: "boolean"
			}, {
				name: "autoPlay",
				value: "boolean"
			}, {
				name: "path",
				value: "string"
			}, {
				name: "action",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}]
		}, {
			name: "animView.remove",
			authority: "swanAPI",
			path: "/animView/remove",
			args: [{
				name: "sanId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}]
		}, {
			name: "ARCamera.insert",
			authority: "swanAPI",
			path: "/ARCamera/insert",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "ARCameraId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "hide",
				value: "boolean"
			}, {
				name: "ARKey",
				value: "string"
			}, {
				name: "ARType",
				value: "string"
			}, {
				name: "flash",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}]
		}, {
			name: "ARCamera.update",
			authority: "swanAPI",
			path: "/ARCamera/update",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "ARCameraId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "hide",
				value: "boolean"
			}, {
				name: "ARKey",
				value: "string"
			}, {
				name: "ARType",
				value: "string"
			}, {
				name: "flash",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}]
		}, {
			name: "ARCamera.remove",
			authority: "swanAPI",
			path: "/ARCamera/remove",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "ARCameraId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}]
		}, {
			name: "button.insert",
			authority: "swanAPI",
			path: "/button/insert",
			args: [{
				name: "gesture",
				value: "string="
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "buttonId",
				value: "string"
			}, {
				name: "text",
				value: "string"
			}]
		}, {
			name: "button.update",
			authority: "swanAPI",
			path: "/button/update",
			args: [{
				name: "gesture",
				value: "string="
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "buttonId",
				value: "string"
			}, {
				name: "text",
				value: "string"
			}]
		}, {
			name: "button.remove",
			authority: "swanAPI",
			path: "/button/remove",
			args: [{
				name: "gesture",
				value: "string="
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "buttonId",
				value: "string"
			}]
		}, {
			name: "camera.insert",
			authority: "swanAPI",
			path: "/camera/insert",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "cameraId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "hide",
				value: "boolean"
			}, {
				name: "devicePosition",
				value: "string"
			}, {
				name: "flash",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}]
		}, {
			name: "camera.update",
			authority: "swanAPI",
			path: "/camera/update",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "cameraId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "hide",
				value: "boolean"
			}, {
				name: "devicePosition",
				value: "string"
			}, {
				name: "flash",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}]
		}, {
			name: "camera.remove",
			authority: "swanAPI",
			path: "/camera/remove",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "cameraId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}]
		}, {
			name: "canvas.insert",
			authority: "swanAPI",
			path: "/canvas/insert",
			args: [{
				name: "canvasId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "hide",
				value: "string"
			}, {
				name: "disableScroll",
				value: "string"
			}, {
				name: "gesture",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}]
		}, {
			name: "canvas.update",
			authority: "swanAPI",
			path: "/canvas/update",
			args: [{
				name: "canvasId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "hide",
				value: "string"
			}, {
				name: "disableScroll",
				value: "string"
			}, {
				name: "gesture",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}]
		}, {
			name: "canvas.remove",
			authority: "swanAPI",
			path: "/canvas/remove",
			args: [{
				name: "canvasId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "coverView.insert",
			authority: "swanAPI",
			path: "/coverview/insert",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "hide",
				value: "string"
			}, {
				name: "gesture",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}, {
				name: "style",
				value: "Object"
			}, {
				name: "text",
				value: "string"
			}, {
				name: "scrollTop",
				value: "string"
			}]
		}, {
			name: "coverView.update",
			authority: "swanAPI",
			path: "/coverview/update",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "hide",
				value: "string"
			}, {
				name: "gesture",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}, {
				name: "style",
				value: "Object"
			}, {
				name: "text",
				value: "string"
			}, {
				name: "scrollTop",
				value: "string"
			}, {
				name: "transition",
				value: "Object="
			}]
		}, {
			name: "coverView.remove",
			authority: "swanAPI",
			path: "/coverview/remove",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}]
		}, {
			name: "coverImage.insert",
			authority: "swanAPI",
			path: "/coverimage/insert",
			args: [{
				name: "gesture",
				value: "string="
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "src",
				value: "string"
			}, {
				name: "loadState",
				value: "boolean"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "coverImage.update",
			authority: "swanAPI",
			path: "/coverimage/update",
			args: [{
				name: "gesture",
				value: "string="
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "src",
				value: "string"
			}, {
				name: "loadState",
				value: "boolean"
			}, {
				name: "transition",
				value: "Object="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "coverImage.remove",
			authority: "swanAPI",
			path: "/coverimage/remove",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}]
		}, {
			name: "getLocalImgData",
			authority: "swanAPI",
			path: "/getLocalImgData",
			args: [{
				name: "filePath",
				value: "string="
			}]
		}, {
			name: "input.insert",
			authority: "swanAPI",
			path: "/openInput",
			args: [{
				name: "id",
				value: "string="
			}, {
				name: "slaveId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "type",
				value: "string="
			}, {
				name: "value",
				value: "string="
			}, {
				name: "maxLength",
				value: "string="
			}, {
				name: "password",
				value: "string="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "cursorSpacing",
				value: "string="
			}, {
				name: "cursor",
				value: "string="
			}, {
				name: "focus",
				value: "string="
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "disabled",
				value: "boolean="
			}, {
				name: "placeholder",
				value: "string="
			}, {
				name: "placeholderStyle",
				value: "Object="
			}, {
				name: "confirmHold",
				value: "string="
			}, {
				name: "confirmType",
				value: "string="
			}, {
				name: "selectionStart",
				value: "string="
			}, {
				name: "selectionEnd",
				value: "string="
			}, {
				name: "adjustPosition",
				value: "string="
			}, {
				name: "cb",
				value: "string="
			}]
		}, {
			name: "input.update",
			authority: "swanAPI",
			path: "/updateInput",
			args: [{
				name: "id",
				value: "string="
			}, {
				name: "slaveId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "type",
				value: "string="
			}, {
				name: "value",
				value: "string="
			}, {
				name: "maxLength",
				value: "string="
			}, {
				name: "password",
				value: "string="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "cursorSpacing",
				value: "string="
			}, {
				name: "cursor",
				value: "string="
			}, {
				name: "focus",
				value: "string="
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "disabled",
				value: "boolean="
			}, {
				name: "placeholder",
				value: "string="
			}, {
				name: "placeholderStyle",
				value: "Object="
			}, {
				name: "confirmHold",
				value: "string="
			}, {
				name: "confirmType",
				value: "string="
			}, {
				name: "selectionStart",
				value: "string="
			}, {
				name: "selectionEnd",
				value: "string="
			}, {
				name: "adjustPosition",
				value: "string="
			}]
		}, {
			name: "input.remove",
			authority: "swanAPI",
			path: "/closeInput",
			args: [{
				name: "id",
				value: "string="
			}, {
				name: "slaveId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "type",
				value: "string="
			}, {
				name: "value",
				value: "string="
			}, {
				name: "maxLength",
				value: "string="
			}, {
				name: "password",
				value: "string="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "cursorSpacing",
				value: "string="
			}, {
				name: "cursor",
				value: "string="
			}, {
				name: "focus",
				value: "string="
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "placeholder",
				value: "string="
			}, {
				name: "placeholderStyle",
				value: "Object="
			}, {
				name: "confirmHold",
				value: "string="
			}, {
				name: "confirmType",
				value: "string="
			}, {
				name: "selectionStart",
				value: "string="
			}, {
				name: "selectionEnd",
				value: "string="
			}, {
				name: "adjustPosition",
				value: "string="
			}]
		}, {
			name: "map.insert",
			authority: "swanAPI",
			path: "/map/create",
			args: [{
				name: "mapId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "showLocation",
				value: "boolean="
			}, {
				name: "enable3D",
				value: "boolean="
			}, {
				name: "enableRotate",
				value: "boolean="
			}, {
				name: "enableScroll",
				value: "boolean="
			}, {
				name: "enableZoom",
				value: "boolean="
			}, {
				name: "enableOverlooking",
				value: "boolean="
			}, {
				name: "showCompass",
				value: "boolean="
			}, {
				name: "subkey",
				value: "string="
			}, {
				name: "longitude",
				value: "string="
			}, {
				name: "latitude",
				value: "string="
			}, {
				name: "scale",
				value: "string="
			}, {
				name: "markers",
				value: "Array="
			}, {
				name: "polyline",
				value: "Array="
			}, {
				name: "polygons",
				value: "Array="
			}, {
				name: "circles",
				value: "Array="
			}, {
				name: "controls",
				value: "Array="
			}, {
				name: "includePoints",
				value: "Array="
			}, {
				name: "layerStyle",
				value: "string="
			}, {
				name: "cb",
				value: "string="
			}]
		}, {
			name: "map.update",
			authority: "swanAPI",
			path: "/map/update",
			args: [{
				name: "mapId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "showLocation",
				value: "boolean="
			}, {
				name: "enable3D",
				value: "boolean="
			}, {
				name: "enableRotate",
				value: "boolean="
			}, {
				name: "enableScroll",
				value: "boolean="
			}, {
				name: "enableZoom",
				value: "boolean="
			}, {
				name: "enableOverlooking",
				value: "boolean="
			}, {
				name: "showCompass",
				value: "boolean="
			}, {
				name: "subkey",
				value: "string="
			}, {
				name: "longitude",
				value: "string="
			}, {
				name: "latitude",
				value: "string="
			}, {
				name: "scale",
				value: "string="
			}, {
				name: "markers",
				value: "Array="
			}, {
				name: "polyline",
				value: "Array="
			}, {
				name: "polygons",
				value: "Array="
			}, {
				name: "circles",
				value: "Array="
			}, {
				name: "controls",
				value: "Array="
			}, {
				name: "includePoints",
				value: "Array="
			}]
		}, {
			name: "map.remove",
			authority: "swanAPI",
			path: "/map/remove",
			args: [{
				name: "mapId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "picker.insert",
			authority: l,
			path: "/openPicker",
			args: [{
				name: "title",
				value: "string="
			}, {
				name: "array",
				value: "Array="
			}, {
				name: "current",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}],
			invoke: g,
			method: s.default.isAndroid ? "_naInteraction.openPicker" : c
		}, {
			name: "multiPicker.insert",
			authority: l,
			path: "/openMultiPicker",
			args: [{
				name: "title",
				value: "string="
			}, {
				name: "array",
				value: "Array="
			}, {
				name: "current",
				value: "Array="
			}, {
				name: "cb",
				value: "string="
			}],
			invoke: g,
			method: s.default.isAndroid ? "_naInteraction.openMultiPicker" : c
		}, {
			name: "multiPicker.update",
			authority: l,
			path: "/updateMultiPicker",
			args: [{
				name: "column",
				value: "string="
			}, {
				name: "array",
				value: "Array="
			}, {
				name: "current",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}],
			invoke: g,
			method: s.default.isAndroid ? "_naInteraction.updateMultiPicker" : c
		}, {
			name: "datePicker.insert",
			authority: l,
			path: "/showDatePickerView",
			args: [{
				name: "start",
				value: "string="
			}, {
				name: "end",
				value: "string="
			}, {
				name: "mode",
				value: "string="
			}, {
				name: "value",
				value: "string="
			}, {
				name: "fields",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}],
			invoke: g,
			method: s.default.isAndroid ? "_naInteraction.showDatePickerView" : c
		}, {
			name: "getRegionData",
			authority: "swanAPI",
			path: "/getRegionData",
			args: []
		}, {
			name: "textarea.insert",
			authority: "swanAPI",
			path: "/openTextarea",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "inputId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "disabled",
				value: "string="
			}, {
				name: "placeholder",
				value: "string="
			}, {
				name: "value",
				value: "string="
			}, {
				name: "maxLength",
				value: "string="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "focus",
				value: "string="
			}, {
				name: "cursor",
				value: "string="
			}, {
				name: "cursorSpacing",
				value: "string="
			}, {
				name: "selectionStart",
				value: "string="
			}, {
				name: "selectionEnd",
				value: "string="
			}, {
				name: "showConfirmBar",
				value: "string="
			}, {
				name: "confirmType",
				value: "string="
			}, {
				name: "confirmHold",
				value: "string="
			}, {
				name: "adjustPosition",
				value: "string="
			}, {
				name: "fixed",
				value: "string="
			}, {
				name: "autoHeight",
				value: "string="
			}, {
				name: "placeholderStyle",
				value: "Object="
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "cb",
				value: "string="
			}]
		}, {
			name: "textarea.update",
			authority: "swanAPI",
			path: "/updateTextarea",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "inputId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "disabled",
				value: "string="
			}, {
				name: "placeholder",
				value: "string="
			}, {
				name: "value",
				value: "string="
			}, {
				name: "maxLength",
				value: "string="
			}, {
				name: "style",
				value: "Object="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "focus",
				value: "string="
			}, {
				name: "cursor",
				value: "string="
			}, {
				name: "cursorSpacing",
				value: "string="
			}, {
				name: "selectionStart",
				value: "string="
			}, {
				name: "selectionEnd",
				value: "string="
			}, {
				name: "showConfirmBar",
				value: "string="
			}, {
				name: "confirmType",
				value: "string="
			}, {
				name: "confirmHold",
				value: "string="
			}, {
				name: "adjustPosition",
				value: "string="
			}, {
				name: "fixed",
				value: "string="
			}, {
				name: "autoHeight",
				value: "string="
			}, {
				name: "placeholderStyle",
				value: "Object="
			}, {
				name: "hide",
				value: "string="
			}, {
				name: "cb",
				value: "string="
			}]
		}, {
			name: "textarea.remove",
			authority: "swanAPI",
			path: "/closeTextarea",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "inputId",
				value: "string"
			}, {
				name: "viewId",
				value: "string"
			}, {
				name: "parentId",
				value: "string"
			}]
		}, {
			name: "video.insert",
			authority: "swanAPI",
			path: "/video/open",
			args: [{
				name: "gesture",
				value: "string="
			}, {
				name: "videoId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "sanId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "src",
				value: "string="
			}, {
				name: "initialTime",
				value: "string="
			}, {
				name: "duration",
				value: "string="
			}, {
				name: "objectFit",
				value: "string="
			}, {
				name: "poster",
				value: "string="
			}, {
				name: "slaveId",
				value: "string="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "controls",
				value: "boolean="
			}, {
				name: "autoplay",
				value: "boolean="
			}, {
				name: "loop",
				value: "boolean="
			}, {
				name: "muted",
				value: "boolean="
			}, {
				name: "showPlayBtn",
				value: "boolean="
			}, {
				name: "showCenterPlayBtn",
				value: "boolean="
			}, {
				name: "showMuteBtn",
				value: "boolean="
			}, {
				name: "danmuList",
				value: "Array="
			}, {
				name: "enableDanmu",
				value: "boolean="
			}, {
				name: "danmuBtn",
				value: "boolean="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "pageGesture",
				value: "boolean="
			}, {
				name: "showProgress",
				value: "boolean="
			}, {
				name: "direction",
				value: "string="
			}, {
				name: "showFullscreenBtn",
				value: "boolean="
			}, {
				name: "enableProgressGesture",
				value: "boolean="
			}, {
				name: "showNoWifiTip",
				value: "boolean="
			}, {
				name: "title",
				value: "string="
			}, {
				name: "enablePlayGesture",
				value: "boolean="
			}, {
				name: "vslideGestureInFullscreen",
				value: "boolean="
			}, {
				name: "playBtnPosition",
				value: "string="
			}]
		}, {
			name: "video.update",
			authority: "swanAPI",
			path: "/video/update",
			args: [{
				name: "gesture",
				value: "string="
			}, {
				name: "videoId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "sanId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "src",
				value: "string="
			}, {
				name: "initialTime",
				value: "string="
			}, {
				name: "duration",
				value: "string="
			}, {
				name: "objectFit",
				value: "string="
			}, {
				name: "poster",
				value: "string="
			}, {
				name: "slaveId",
				value: "string="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "controls",
				value: "boolean="
			}, {
				name: "autoplay",
				value: "boolean="
			}, {
				name: "loop",
				value: "boolean="
			}, {
				name: "muted",
				value: "boolean="
			}, {
				name: "showPlayBtn",
				value: "boolean="
			}, {
				name: "showCenterPlayBtn",
				value: "boolean="
			}, {
				name: "showMuteBtn",
				value: "boolean="
			}, {
				name: "danmuList",
				value: "Array="
			}, {
				name: "enableDanmu",
				value: "boolean="
			}, {
				name: "danmuBtn",
				value: "boolean="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "pageGesture",
				value: "boolean="
			}, {
				name: "showProgress",
				value: "boolean="
			}, {
				name: "direction",
				value: "string="
			}, {
				name: "showFullscreenBtn",
				value: "boolean="
			}, {
				name: "enableProgressGesture",
				value: "boolean="
			}, {
				name: "title",
				value: "string="
			}, {
				name: "enablePlayGesture",
				value: "boolean="
			}, {
				name: "vslideGestureInFullscreen",
				value: "boolean="
			}, {
				name: "playBtnPosition",
				value: "string="
			}]
		}, {
			name: "video.remove",
			authority: "swanAPI",
			path: "/video/remove",
			args: [{
				name: "videoId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "sanId",
				value: "string="
			}, {
				name: "slaveId",
				value: "string="
			}]
		}, {
			name: "boxjs.vrVideoOpen",
			authority: "swanAPI",
			path: "/vrvideo/open",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "videoId",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}, {
				name: "src",
				value: "string"
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "gesture",
				value: "string="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "vrVideoMode",
				value: {
					type: {
						projectionMode: "string",
						displayMode: "string",
						interactiveMode: "string"
					},
					isRequired: !1
				}
			}, {
				name: "showCenterPlayBtn",
				value: "boolean="
			}, {
				name: "showPlayBtn",
				value: "boolean="
			}, {
				name: "showFullscreenBtn",
				value: "boolean="
			}, {
				name: "showProgress",
				value: "boolean="
			}, {
				name: "showNoWifiTip",
				value: "boolean="
			}, {
				name: "direction",
				value: "string="
			}, {
				name: "initialTime",
				value: "string="
			}, {
				name: "controls",
				value: "boolean="
			}, {
				name: "autoplay",
				value: "boolean="
			}, {
				name: "loop",
				value: "boolean="
			}, {
				name: "muted",
				value: "boolean="
			}, {
				name: "poster",
				value: "string="
			}]
		}, {
			name: "boxjs.vrVideoUpdate",
			authority: "swanAPI",
			path: "/vrvideo/update",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "videoId",
				value: "string"
			}, {
				name: "src",
				value: "string"
			}, {
				name: "position",
				value: "Object"
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "gesture",
				value: "string="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "vrVideoMode",
				value: {
					type: {
						projectionMode: "string",
						displayMode: "string",
						interactiveMode: "string"
					},
					isRequired: !1
				}
			}, {
				name: "showCenterPlayBtn",
				value: "boolean="
			}, {
				name: "showPlayBtn",
				value: "boolean="
			}, {
				name: "showFullscreenBtn",
				value: "boolean="
			}, {
				name: "showProgress",
				value: "boolean="
			}, {
				name: "showNoWifiTip",
				value: "boolean="
			}, {
				name: "direction",
				value: "number="
			}, {
				name: "initialTime",
				value: "string="
			}, {
				name: "controls",
				value: "boolean="
			}, {
				name: "autoplay",
				value: "boolean="
			}, {
				name: "loop",
				value: "boolean="
			}, {
				name: "muted",
				value: "boolean="
			}, {
				name: "poster",
				value: "string="
			}]
		}, {
			name: "boxjs.vrVideoRemove",
			authority: "swanAPI",
			path: "/vrvideo/remove",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "videoId",
				value: "string"
			}]
		}, {
			name: "live.insert",
			authority: "swanAPI",
			path: "/live/open",
			args: [{
				name: "gesture",
				value: "string="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "slaveId",
				value: "string="
			}, {
				name: "liveId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "src",
				value: "string="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "autoplay",
				value: "boolean="
			}, {
				name: "muted",
				value: "boolean="
			}, {
				name: "orientation",
				value: "string="
			}, {
				name: "objectFit",
				value: "string="
			}, {
				name: "backgroundMute",
				value: "boolean="
			}, {
				name: "minCache",
				value: "string="
			}, {
				name: "maxCache",
				value: "string="
			}]
		}, {
			name: "live.update",
			authority: "swanAPI",
			path: "/live/update",
			args: [{
				name: "gesture",
				value: "string="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "slaveId",
				value: "string="
			}, {
				name: "liveId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "src",
				value: "string="
			}, {
				name: "position",
				value: "Object="
			}, {
				name: "autoplay",
				value: "boolean="
			}, {
				name: "muted",
				value: "boolean="
			}, {
				name: "orientation",
				value: "string="
			}, {
				name: "objectFit",
				value: "string="
			}, {
				name: "backgroundMute",
				value: "boolean="
			}, {
				name: "minCache",
				value: "string="
			}, {
				name: "maxCache",
				value: "string="
			}]
		}, {
			name: "live.remove",
			authority: "swanAPI",
			path: "/live/remove",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "liveId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}]
		}, {
			name: "webView.insert",
			authority: "swanAPI",
			path: "/insertWebView",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "src",
				value: "string="
			}]
		}, {
			name: "webView.update",
			authority: "swanAPI",
			path: "/updateWebView",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "hide",
				value: "boolean="
			}, {
				name: "src",
				value: "string="
			}]
		}, {
			name: "webView.remove",
			authority: "swanAPI",
			path: "/removeWebView",
			args: [{
				name: "slaveId",
				value: "string="
			}, {
				name: "parentId",
				value: "string="
			}, {
				name: "viewId",
				value: "string="
			}]
		}, {
			name: "webView.navigateTo",
			authority: "swanAPI",
			path: "/navigateTo",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "initData",
				value: "Object="
			}, {
				name: "startTime",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "webView.navigateBack",
			authority: "swanAPI",
			path: "/navigateBack",
			args: [{
				name: "delta",
				value: "string"
			}, {
				name: "startTime",
				value: "string="
			}]
		}, {
			name: "webView.redirectTo",
			authority: "swanAPI",
			path: "/redirectTo",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "initData",
				value: "Object="
			}, {
				name: "startTime",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "webView.reLaunch",
			authority: "swanAPI",
			path: "/reLaunch",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "initData",
				value: "Object="
			}, {
				name: "startTime",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "webView.switchTab",
			authority: "swanAPI",
			path: "/switchTab",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "startTime",
				value: "string="
			}]
		}, {
			name: "getFormId",
			authority: "swanAPI",
			path: "/getFormId",
			args: [{
				name: "reportType",
				value: "string="
			}, {
				name: "subscribeId",
				value: "string="
			}, {
				name: "templateId",
				value: "string="
			}, {
				name: "cb",
				value: "string="
			}]
		}, {
			name: "IM.insert",
			authority: "message",
			path: "/deliverMnpAppKey",
			args: [{
				name: "appKey",
				value: "string"
			}, {
				name: "appLaunchScheme",
				value: "string="
			}, {
				name: "cb",
				value: "string="
			}]
		}, {
			name: "springback.insert",
			authority: "swanAPI",
			path: "/openSpringback",
			args: []
		}, {
			name: "springback.remove",
			authority: "swanAPI",
			path: "/closeSpringback",
			args: []
		}, {
			name: "adWebview.insert",
			authority: "swanAPI",
			path: "/openAdWebPage",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "extraData",
				value: "string="
			}]
		}, {
			name: "statisticEvent",
			authority: "swanAPI",
			path: "/openStatisticEvent",
			args: [{
				name: "groupId",
				value: "string"
			}, {
				name: "bizId",
				value: "string"
			}, {
				name: "eventName",
				value: "string"
			}, {
				name: "content",
				value: "Object"
			}, {
				name: "appVersion",
				value: "string="
			}, {
				name: "swanType",
				value: "string="
			}]
		}, {
			name: "performpanel",
			authority: "swanAPI",
			path: "/performancePanel",
			args: [{
				name: "data",
				value: "Array"
			}]
		}, {
			name: "ubcFlowJar",
			authority: "swanAPI",
			path: "/ubcFlowJar",
			args: [{
				name: "flowId",
				value: "string"
			}, {
				name: "ext",
				value: "Object="
			}, {
				name: "data",
				value: "Array"
			}]
		}, {
			name: "statisticFlowJar",
			authority: "swanAPI",
			path: "/openStatisticFlowJar",
			args: [{
				name: "groupId",
				value: "string"
			}, {
				name: "bizId",
				value: "string"
			}, {
				name: "data",
				value: "Array"
			}]
		}, {
			name: "getLaunchAppInfo",
			authority: "swanAPI",
			path: "/getLaunchAppInfo",
			args: [{
				name: "cb",
				value: "string"
			}]
		}, {
			name: "app.insert",
			authority: "swanAPI",
			path: "/openApp",
			args: [{
				name: "open",
				value: "string"
			}, {
				name: "download",
				value: "Object="
			}, {
				name: "url",
				value: "string="
			}, {
				name: "isNeedDownload",
				value: "boolean="
			}, {
				name: "invokAnyWay",
				value: "boolean="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "webView.launch",
			authority: "swanAPI",
			path: "/launch",
			args: [{
				name: "appid",
				value: "string"
			}, {
				name: "url",
				value: "string="
			}, {
				name: "navi",
				value: "string="
			}, {
				name: "from",
				value: "string="
			}, {
				name: "extraData",
				value: "string|Object="
			}]
		}, {
			name: "webView.exit",
			authority: "swanAPI",
			path: "/exit",
			args: []
		}, {
			name: "installApp4Ad",
			authority: "swanAPI",
			path: "/installApp4Ad",
			args: [{
				name: "type",
				value: {
					oneOf: ["queryStatus", "startDownload", "pauseDownload", "cancelDownload", "installApp", "resumeDownload"]
				}
			}, {
				name: "url",
				value: "string="
			}, {
				name: "appId",
				value: "string="
			}, {
				name: "name",
				value: "string="
			}, {
				name: "onProgressUpdate",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "setSanIncData2Console",
			authority: "swanAPI",
			path: "/sConsole/sanIncData2Console",
			args: [{
				name: "incData",
				value: "Object"
			}]
		}, {
			name: "setSanFullData2Console",
			authority: "swanAPI",
			path: "/sConsole/sanFullData2Console",
			args: [{
				name: "fullData",
				value: "Array"
			}]
		}, {
			name: "getSanDataFromActiveSlave",
			authority: "swanAPI",
			path: "/sConsole/getSanDataFromActiveSlave",
			args: []
		}, {
			name: "ai.faceDetect",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						image_type: {
							oneOf: ["URL", "BASE64", "FACE_TOKEN"],
							isRequired: !0
						},
						face_field: "string=",
						max_face_num: "string=",
						face_type: "string=",
						image: "string="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string="
					}
				}
			}]
		}, {
			name: "ai.faceMatch",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: "Object"
			}, {
				name: "fileMap",
				value: "Object"
			}]
		}, {
			name: "ai.faceSearch",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						image_type: {
							oneOf: ["URL", "BASE64", "FACE_TOKEN"],
							isRequired: !0
						},
						group_id_list: "string",
						quality_control: "string=",
						liveness_control: "string=",
						user_id: "string=",
						max_user_num: "number=",
						image: "string="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string="
					}
				}
			}]
		}, {
			name: "ai.facePersonVerify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						image_type: {
							oneOf: ["URL", "BASE64", "FACE_TOKEN"],
							isRequired: !0
						},
						id_card_number: "string",
						name: "string",
						quality_control: "string=",
						liveness_control: "string=",
						image: "string="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string="
					}
				}
			}]
		}, {
			name: "ai.facePersonIdmatch",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						id_card_number: "string",
						name: "string"
					}
				}
			}]
		}, {
			name: "ai.faceVerify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: "Object"
			}, {
				name: "fileMap",
				value: "Object"
			}]
		}, {
			name: "ai.faceLivenessSessioncode",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						appid: "string"
					}
				}
			}]
		}, {
			name: "ai.faceLivenessVerify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						video_base64: "string=",
						session_id: "string="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						video_base64: "string="
					}
				}
			}]
		}, {
			name: "ai.nlpLexerCustom",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						text: "string"
					}
				}
			}]
		}, {
			name: "ai.ocrIdCard",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						detect_direction: "boolean=",
						id_card_side: "string",
						detect_risk: "boolean="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.textClassify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						detect_direction: "string="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.nlpLexer",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: "Object"
			}]
		}, {
			name: "ai.ocrBankCard",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.ocrDrivingLicense",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string",
						detect_direction: "string=",
						unified_valid_period: "boolean="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.ocrVehicleLicense",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string",
						detect_direction: "string=",
						accuracy: "string="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.textReview",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						content: "string"
					}
				}
			}]
		}, {
			name: "ai.textToAudio",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						tex: "string",
						ctp: "string=",
						lan: "string=",
						spd: "string=",
						pit: "string=",
						vol: "string=",
						per: "string="
					}
				}
			}]
		}, {
			name: "ai.imageAudit",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string"
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string=",
						imageUrl: "string="
					}
				}
			}]
		}, {
			name: "ai.advancedGeneralIdentify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string"
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.objectDetectIdentify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string",
						with_face: "number="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.dishClassify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						top_num: "number=",
						filter_threshold: "number"
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.carClassify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string",
						top_num: "number="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.logoClassify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string=",
						custom_lib: "boolean="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.animalClassify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string",
						top_num: "number="
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "ai.plantClassify",
			authority: "swanAPI",
			path: "/aiRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						string_key: "string"
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						image: "string"
					}
				}
			}]
		}, {
			name: "cloud.renewalDocument",
			authority: "swanAPI",
			path: "/cloudRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						collectionname: "string",
						documentid: "string|number",
						data: {
							type: {
								Document: "object"
							}
						}
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.deleteDocument",
			authority: "swanAPI",
			path: "/cloudRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						collectionname: "string",
						documentid: "string|number"
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.callFunction",
			authority: "swanAPI",
			path: "/cloudRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						name: "string",
						data: "Object="
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.uploadFile",
			authority: "swanAPI",
			path: "/cloudUploadFile",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						cloudPath: "string",
						data: {
							type: {
								Headers: "Object="
							}
						}
					}
				}
			}, {
				name: "fileMap",
				value: {
					type: {
						filePath: "string"
					}
				}
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.downloadFile",
			authority: "swanAPI",
			path: "/cloudDownloadFile",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						fileID: "string"
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.deleteFile",
			authority: "swanAPI",
			path: "/cloudRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						fileList: "Array"
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.getCollection",
			authority: "swanAPI",
			path: "/cloudRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						collectionname: "string",
						data: {
							type: {
								Query: "object=",
								Options: "object="
							}
						}
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.addDocument",
			authority: "swanAPI",
			path: "/cloudRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						collectionname: "string",
						data: {
							type: {
								document: "object"
							}
						}
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.countDocument",
			authority: "swanAPI",
			path: "/cloudRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						collectionname: "string",
						data: {
							type: {
								Query: "object=",
								Options: "object="
							}
						}
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.getDocument",
			authority: "swanAPI",
			path: "/cloudRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						collectionname: "string",
						documentid: "string|number"
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "cloud.setDocument",
			authority: "swanAPI",
			path: "/cloudRequest",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						workspaceid: "string",
						collectionname: "string",
						documentid: "string|number",
						data: {
							type: {
								Document: "object"
							}
						}
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "getCloudUrl",
			authority: "swanAPI",
			path: "/cloudGetUrl",
			args: [{
				name: "service",
				value: "string"
			}, {
				name: "api",
				value: "string"
			}, {
				name: "stringMap",
				value: {
					type: {
						fileID: "string"
					}
				}
			}, {
				name: "fileMap",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "audio.open",
			authority: "swanAPI",
			path: "/audio/open",
			args: [{
				name: "src",
				value: "string="
			}, {
				name: "audioId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "cb",
				value: "object"
			}, {
				name: "startTime",
				value: "string="
			}, {
				name: "loop",
				value: "string="
			}, {
				name: "volume",
				value: "string="
			}, {
				name: "obeyMuteSwitch",
				value: "string="
			}]
		}, {
			name: "audio.renew",
			authority: "swanAPI",
			path: "/audio/update",
			args: [{
				name: "src",
				value: "string="
			}, {
				name: "audioId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "startTime",
				value: "string="
			}, {
				name: "loop",
				value: "string="
			}, {
				name: "volume",
				value: "string="
			}, {
				name: "obeyMuteSwitch",
				value: "string="
			}]
		}, {
			name: "audio.play",
			authority: "swanAPI",
			path: "/audio/play",
			args: [{
				name: "audioId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "audio.pause",
			authority: "swanAPI",
			path: "/audio/pause",
			args: [{
				name: "audioId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "audio.stop",
			authority: "swanAPI",
			path: "/audio/stop",
			args: [{
				name: "audioId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "audio.seek",
			authority: "swanAPI",
			path: "/audio/seek",
			args: [{
				name: "audioId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}, {
				name: "position",
				value: "string="
			}]
		}, {
			name: "audio.close",
			authority: "swanAPI",
			path: "/audio/close",
			args: [{
				name: "audioId",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "backgroundAudio.renew",
			authority: "swanAPI",
			path: "/backgroundAudio/update",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "src",
				value: "string="
			}, {
				name: "startTime",
				value: "string="
			}, {
				name: "title",
				value: "string="
			}, {
				name: "epname",
				value: "string="
			}, {
				name: "singer",
				value: "string="
			}, {
				name: "coverImgUrl",
				value: "string="
			}, {
				name: "webUrl",
				value: "string="
			}, {
				name: "protocol",
				value: "string="
			}, {
				name: "lrcURL",
				value: "string="
			}]
		}, {
			name: "backgroundAudio.open",
			authority: "swanAPI",
			path: "/backgroundAudio/open",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "cb",
				value: "Object"
			}, {
				name: "src",
				value: "string"
			}, {
				name: "startTime",
				value: "string="
			}, {
				name: "title",
				value: "string"
			}, {
				name: "epname",
				value: "string="
			}, {
				name: "singer",
				value: "string="
			}, {
				name: "coverImgUrl",
				value: "string="
			}, {
				name: "webUrl",
				value: "string="
			}, {
				name: "protocol",
				value: "string="
			}, {
				name: "lrcURL",
				value: "string="
			}]
		}, {
			name: "backgroundAudio.play",
			authority: "swanAPI",
			path: "/backgroundAudio/play",
			args: [{
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "backgroundAudio.pause",
			authority: "swanAPI",
			path: "/backgroundAudio/pause",
			args: [{
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "backgroundAudio.stop",
			authority: "swanAPI",
			path: "/backgroundAudio/stop",
			args: [{
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "backgroundAudio.seek",
			authority: "swanAPI",
			path: "/backgroundAudio/seek",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "position",
				value: "string="
			}]
		}, {
			name: "navigateToSmartProgram",
			authority: "swanAPI",
			path: "/navigateToProgram",
			args: [{
				name: "appKey",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}, {
				name: "path",
				value: "string="
			}, {
				name: "from",
				value: "string="
			}, {
				name: "extraData",
				value: "Object="
			}, {
				name: "ubc",
				value: "Object="
			}]
		}, {
			name: "chooseAlbum",
			authority: "swanAPI",
			path: "/chooseAlbum",
			args: [{
				name: "count",
				value: "string="
			}, {
				name: "mode",
				value: "string="
			}, {
				name: "compressed",
				value: "boolean="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "faceVerify.insert",
			authority: "swanAPI",
			path: "/faceVerify",
			args: [{
				name: "invokeFrom",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "faceResultVerify",
			authority: "swanAPI",
			path: "/faceResultVerify",
			args: [{
				name: "callbackKey",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "confirmAppClose",
			authority: "swanAPI",
			path: "/confirmSwanClose",
			args: [{
				name: "content",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "adRequest",
			authority: "swanAPI",
			path: "/adRequest",
			args: [{
				name: "url",
				value: "string"
			}, {
				name: "extParams",
				value: "object="
			}, {
				name: "data",
				value: "string|object="
			}, {
				name: "header",
				value: "object="
			}, {
				name: "method",
				value: "string="
			}, {
				name: "dataType",
				value: "string="
			}, {
				name: "responseType",
				value: "string="
			}, {
				name: "ping",
				value: "boolean="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "sconsole.insert",
			authority: "swanAPI",
			path: "/sconsole/show",
			args: []
		}, {
			name: "sconsole.remove",
			authority: "swanAPI",
			path: "/sconsole/hide",
			args: []
		}, {
			name: "openAdWebPage",
			authority: "swanAPI",
			path: "/openAdLandingPage",
			args: [{
				name: "url",
				value: "string"
			}]
		}, {
			name: "postMessage",
			authority: "swanAPI",
			path: "/postMessage",
			args: [{
				name: "webviewid",
				value: "string"
			}, {
				name: "message",
				value: "string"
			}]
		}, {
			name: "pageInfo.post",
			authority: "swanAPI",
			path: "/postPageInfo",
			args: [{
				name: "pageInfo",
				value: "object"
			}, {
				name: "type",
				value: "string"
			}, {
				name: "url",
				value: "string"
			}]
		}, {
			name: "downloadPackages",
			authority: "swanAPI",
			path: "/downloadPackages",
			args: [{
				name: "appKeys",
				value: "Array"
			}, {
				name: "appType",
				value: "string="
			}, {
				name: "netconf",
				value: "string="
			}]
		}, {
			name: "shareFile",
			authority: "swanAPI",
			path: "/shareFile",
			args: [{
				name: "filePath",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naFile.shareFile" : c,
			handler: s.default.isAndroid ? "" : v
		}, {
			name: "getAvailableAudioSources",
			authority: "swanAPI",
			path: "/audio/getAvailableAudioSources",
			args: []
		}, {
			name: "getSystemRiskInfo",
			authority: "swanAPI",
			path: "/getSystemRiskInfo",
			args: []
		}, {
			name: "multiAuthorize",
			authority: "swanAPI",
			path: "/multiAuthorize",
			args: [{
				name: "scopes",
				value: "Array"
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "compressImage",
			authority: "swanAPI",
			path: "/compressImage",
			args: [{
				name: "quality",
				value: "number="
			}, {
				name: "src",
				value: "string"
			}, {
				name: "cb",
				value: "string"
			}],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naImage.compressImage" : c,
			handler: s.default.isAndroid ? "" : v
		}, {
			name: "getWalletRiskControlData",
			authority: "swanAPI",
			path: "/payment/getWalletRiskControlData",
			args: [{
				name: "info",
				value: "Object"
			}, {
				name: "cb",
				value: "string"
			}],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naSwan._naPrivateBusiness.getWalletRiskControlData" : c,
			handler: s.default.isIOS ? v : ""
		}, {
			name: "boxjs.invokePluginPayment",
			authority: "swanAPI",
			path: "/invokePluginPayment",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "componentId",
				value: "string"
			}, {
				name: "pluginProvider",
				value: "string"
			}, {
				name: "providerRootPath",
				value: "string"
			}, {
				name: "pluginVersion",
				value: "string="
			}, {
				name: "args",
				value: {
					type: {
						fee: "number",
						paymentArgs: "object=",
						currencyType: "string="
					},
					isRequired: !0
				}
			}, {
				name: "cb",
				value: "string="
			}],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naPlugin.invokePluginPayment" : c,
			handler: s.default.isAndroid ? "" : v
		}, {
			name: "boxjs.invokePluginLoginAndGetUserInfo",
			authority: "swanAPI",
			path: "/invokePluginLoginAndGetUserInfo",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "componentId",
				value: "string"
			}, {
				name: "pluginProvider",
				value: "string"
			}, {
				name: "providerRootPath",
				value: "string"
			}, {
				name: "pluginVersion",
				value: "string="
			}, {
				name: "args",
				value: {
					type: {
						timeout: "number="
					}
				}
			}, {
				name: "cb",
				value: "string="
			}],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naPlugin.invokePluginLoginAndGetUserInfo" : c,
			handler: s.default.isAndroid ? "" : v
		}, {
			name: "boxjs.invokePluginChooseAddress",
			authority: "swanAPI",
			path: "/invokePluginChooseAddress",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "componentId",
				value: "string"
			}, {
				name: "pluginProvider",
				value: "string"
			}, {
				name: "providerRootPath",
				value: "string"
			}, {
				name: "pluginVersion",
				value: "string="
			}, {
				name: "args",
				value: "object="
			}, {
				name: "cb",
				value: "string="
			}],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naPlugin.invokePluginChooseAddress" : c,
			handler: s.default.isAndroid ? "" : v
		}, {
			name: "subscribeService",
			authority: "swanAPI",
			path: "/subscription/subscribeService",
			args: [{
				name: "templateId",
				value: "string"
			}, {
				name: "subscribeId",
				value: "string"
			}, {
				name: "type",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}],
			invoke: s.default.isAndroid ? "swan.method.jsonString" : m,
			method: s.default.isAndroid ? "_naSubscription.subscribeService" : c,
			handler: s.default.isAndroid ? "" : v
		}, {
			name: "test.testAPI",
			authority: "swanAPI",
			path: "/testAPI",
			args: [],
			extension: "swan"
		}, {
			name: "baidu.testAPI",
			authority: "swanAPI",
			path: "/testAPI",
			args: [],
			extension: "swan"
		}, {
			name: "baidu.boxjsTestAPI",
			authority: "swanAPI",
			path: "/testAPI",
			args: [],
			extension: "boxjs"
		}]
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		a.androidSpecialMap = [{
			name: "startMediaVolumeListen",
			authority: "swanAPI",
			path: "/startMediaVolumeListen",
			args: [{
				name: "id",
				value: "string="
			}, {
				name: "cb",
				value: "string="
			}]
		}, {
			name: "stopMediaVolumeListen",
			authority: "swanAPI",
			path: "/stopMediaVolumeListen",
			args: [{
				name: "id",
				value: "string="
			}]
		}, {
			name: "preventPullDownRefresh.insert",
			authority: "swanAPI",
			path: "/preventPullDownRefresh",
			args: [{
				name: "slaveId",
				value: "string"
			}, {
				name: "prevent",
				value: "boolean"
			}]
		}, {
			name: "openAdApp.insert",
			authority: "swanAPI",
			path: "/openApp4Ad",
			args: [{
				name: "name",
				value: "string"
			}]
		}, {
			name: "hideToast",
			authority: "swanAPI",
			path: "/hideToast",
			args: []
		}, {
			name: "openDocument",
			authority: "swanAPI",
			path: "/file/openDocument",
			args: [{
				name: "filePath",
				value: "string"
			}, {
				name: "fileType",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}, {
			name: "previewImage",
			authority: "utils",
			path: "/previewImage",
			args: [{
				name: "urls",
				value: "string[]="
			}, {
				name: "images",
				value: "Object[]="
			}, {
				name: "current",
				value: "string="
			}, {
				name: "from",
				value: "string="
			}]
		}, {
			name: "postGameCenterMessage",
			authority: "swanAPI",
			path: "/postGameCenterMessage",
			args: [{
				name: "api",
				value: "string"
			}, {
				name: "params",
				value: "Object="
			}, {
				name: "cb",
				value: "string"
			}],
			invoke: "swan.method.jsonString",
			method: "_naGameCenter.postGameCenterMessage"
		}], a.androidSpecialSyncMap = [{
			name: "getMediaVolumeSync",
			authority: "swanAPI",
			path: "/getMediaVolumeSync",
			args: []
		}, {
			name: "getAutoRotationSync",
			authority: "swanAPI",
			path: "/getAutoRotationSync",
			args: []
		}, {
			name: "addComponentToFullScreenSync",
			authority: "swanAPI",
			path: "/addComponentToFullScreenSync",
			args: [{
				name: "componentId",
				value: "Array="
			}, {
				name: "slaveId",
				value: "string="
			}]
		}, {
			name: "removeComponentFromFullScreenSync",
			authority: "swanAPI",
			path: "/removeComponentFromFullScreenSync",
			args: [{
				name: "componentId",
				value: "Array="
			}, {
				name: "slaveId",
				value: "string="
			}]
		}, {
			name: "setFullScreenOrientationSync",
			authority: "swanAPI",
			path: "/setFullScreenOrientationSync",
			args: [{
				name: "orientationType",
				value: "string"
			}, {
				name: "slaveId",
				value: "string"
			}]
		}, {
			name: "postGameCenterMessageSync",
			authority: "swanAPI",
			path: "/postGameCenterMessageSync",
			args: [{
				name: "api",
				value: "string"
			}, {
				name: "params",
				value: "Object="
			}],
			invoke: "swan.method.jsonString",
			method: "_naGameCenter.postGameCenterMessageSync"
		}]
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		a.iosSpecialMap = [{
			name: "hideToast",
			authority: "swanAPI",
			path: "/dismissToast",
			args: []
		}, {
			name: "onSwanJSLoaded",
			authority: "swanAPI",
			path: "/onSwanJSLoaded",
			args: []
		}, {
			name: "container.insert",
			authority: "swanAPI",
			path: "/insertContainer",
			args: [{
				name: "scrollHeight",
				value: "string="
			}, {
				name: "containerId",
				value: "string="
			}, {
				name: "slaveId",
				value: "string="
			}, {
				name: "position",
				value: "Object="
			}]
		}, {
			name: "container.update",
			authority: "swanAPI",
			path: "/updateContainer",
			args: [{
				name: "scrollHeight",
				value: "string="
			}, {
				name: "containerId",
				value: "string="
			}, {
				name: "slaveId",
				value: "string="
			}, {
				name: "position",
				value: "Object="
			}]
		}, {
			name: "openDocument",
			authority: "swanAPI",
			path: "/file/openDocument",
			args: [{
				name: "filePath",
				value: "string"
			}, {
				name: "fileType",
				value: "string="
			}]
		}, {
			name: "previewImage",
			authority: "swanAPI",
			path: "/previewImage",
			args: [{
				name: "urls",
				value: "string[]="
			}, {
				name: "images",
				value: "Object[]="
			}, {
				name: "current",
				value: "string="
			}, {
				name: "from",
				value: "string="
			}, {
				name: "cb",
				value: "string"
			}]
		}], a.iosSpecialSyncMap = []
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.naBindingInvokeList = a.bindingInvokeList = a.noCallbackAPIs = a.specialList = a.boxjsDescriptionList = void 0;
		var t, r = n(0),
			i = (t = r) && t.__esModule ? t : {
				default: t
			},
			s = n(2);
		var o = ["getLocalImgData", "getRegionData", "getLaunchAppInfo", "getSanDataFromActiveSlave", "getCommonSysInfoSync", "getSlaveIdSync", "getAppInfoSync", "getFormId", "setSanIncData2Console", "setSanFullData2Console", "ubcReport", "statisticEvent", "performpanel", "ubcFlowJar", "statisticFlowJar", "openIM", "openSpringback", "openAdWebview", "openApp", "closeSpringback", "installApp4Ad", "adRequest", "getCloudUrl", "arrayBufferRequest"].concat(i.default.isIOS ? ["onSwanJSLoaded"] : ["startMediaVolumeListen", "stopMediaVolumeListen", "getMediaVolumeSync", "getAutoRotationSync", "addComponentToFullScreenSync", "removeComponentFromFullScreenSync", "setFullscreenOrientationSync"], s.swanCallBoxjsAPIList, s.swanCallBoxjsCommonAPIList, s.swanCallboxjsCompatibleAPIList);
		a.boxjsDescriptionList = o, a.specialList = {
			navigateToSmartProgram: ["navigateToMiniProgram", "navigateBackMiniProgram", "navigateToSmartProgram", "navigateBackSmartProgram"]
		}, a.noCallbackAPIs = ["getMenuButtonBoundingClientRect", "ubcReport", "Sync", "updateManager.applyUpdate"], a.bindingInvokeList = ["swan.method.jsonString", "swan.method.json"], a.naBindingInvokeList = ["swan.naMethod.jsonString", "swan.naMethod.json"]
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.invokeMaker = void 0;
		var t, r = n(0),
			I = (t = r) && t.__esModule ? t : {
				default: t
			},
			w = n(9),
			A = n(11),
			P = n(2),
			S = n(46),
			O = n(26),
			k = n(51),
			_ = n(5);
		a.invokeMaker = function(e, a, n, t) {
			for (var r = arguments.length, i = Array(4 < r ? r - 4 : 0), s = 4; s < r; s++) i[s - 4] = arguments[s];
			if (I.default.isFunction(n)) return n.apply(void 0, i);
			var o = n.specialCheck,
				u = n.filter,
				l = n.moreParamsKey,
				m = n.paramsCBName,
				c = n.proxyHandler,
				v = n.parser,
				g = n.thunk,
				d = n.isSync;
			(0, _.sendTimesLog)({
				apiName: a,
				success: _.LOGPARAMS.CALL
			});
			var p = "";
			if (!o || !(p = o(i[0]))) {
				var h = u ? u.apply(void 0, i) : i[0];
				if (h && h.callback && !h.cb && (0, S.supportLevel2Callback)(h), l) {
					var f = {};
					l.forEach(function(e, a) {
						f[e] = i[a]
					}), h = f
				}
				if (c) return c(h);
				var y = i[0],
					b = Date.now();
				return a.match("Sync") || d ? (0, k.syncMethodInvoker)({
					jsNative: e,
					apiName: a,
					params: h,
					thunk: g,
					startTime: b
				}) : (-1 !== P.DURATION_LOG_LIST.indexOf(a) && A.startTimeMap.set(y, b), (0, O.asyncMethodInvoker)({
					jsNative: e,
					apiName: a,
					params: h,
					callbacks: y,
					supportPromise: t,
					paramsCBName: m,
					thunk: g,
					parser: v,
					startTime: b
				}))
			}(0, w.callFailAndComplete)(i[0], a, "parameter error: " + p)
		}
	}, function(e, a, n) {
		window,
		e.exports = function(n) {
			var t = {};

			function r(e) {
				if (t[e]) return t[e].exports;
				var a = t[e] = {
					i: e,
					l: !1,
					exports: {}
				};
				return n[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
			}
			return r.m = n, r.c = t, r.d = function(e, a, n) {
				r.o(e, a) || Object.defineProperty(e, a, {
					configurable: !1,
					enumerable: !0,
					get: n
				})
			}, r.r = function(e) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}, r.n = function(e) {
				var a = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return r.d(a, "a", a), a
			}, r.o = function(e, a) {
				return Object.prototype.hasOwnProperty.call(e, a)
			}, r.p = "", r(r.s = 2)
		}([function(e, a, n) {
			"use strict";
			Object.defineProperty(a, "__esModule", {
				value: !0
			});
			var t = function() {
					function t(e, a) {
						for (var n = 0; n < a.length; n++) {
							var t = a[n];
							t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
						}
					}
					return function(e, a, n) {
						return a && t(e.prototype, a), n && t(e, n), e
					}
				}(),
				r = function() {
					function e() {
						! function(e, a) {
							if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.queue = []
					}
					return t(e, [{
						key: "push",
						value: function(e) {
							this.queue.push(e)
						}
					}, {
						key: "getQueue",
						value: function() {
							return this.queue
						}
					}, {
						key: "pop",
						value: function() {
							for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, a = []; e--;) a.push(this.queue.pop());
							return a
						}
					}, {
						key: "del",
						value: function(a) {
							this.queue = this.queue.filter(function(e) {
								return e.handler !== a
							})
						}
					}, {
						key: "clear",
						value: function() {
							this.queue = []
						}
					}]), e
				}();
			a.default = r
		}, function(e, a, n) {
			"use strict";
			Object.defineProperty(a, "__esModule", {
				value: !0
			}), a.default = void 0;
			var t, r = function() {
					function t(e, a) {
						for (var n = 0; n < a.length; n++) {
							var t = a[n];
							t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
						}
					}
					return function(e, a, n) {
						return a && t(e.prototype, a), n && t(e, n), e
					}
				}(),
				i = (t = n(0)) && t.__esModule ? t : {
					default: t
				},
				s = function() {
					function e() {
						! function(e, a) {
							if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.queueSet = {}
					}
					return r(e, [{
						key: "get",
						value: function(e) {
							return this.queueSet[e] || (this.queueSet[e] = new i.default), this.queueSet[e]
						}
					}, {
						key: "pushTo",
						value: function(e, a) {
							this.get(e).push(a)
						}
					}, {
						key: "has",
						value: function(e) {
							return !!this.queueSet[e]
						}
					}, {
						key: "del",
						value: function(e, n) {
							var t = this;
							if (n)
								if ("*" === e) Object.keys(this.queueSet).forEach(function(e) {
									var a = t.queueSet[e];
									a && a.del(n)
								});
								else {
									var a = this.queueSet[e];
									a && a.del(n)
								}
							else {
								var r = this.queueSet[e];
								r && r.clear()
							}
						}
					}]), e
				}();
			a.default = s
		}, function(e, a, n) {
			"use strict";
			Object.defineProperty(a, "__esModule", {
				value: !0
			}), a.QueueSet = a.default = void 0;
			var t, i = function() {
					function t(e, a) {
						for (var n = 0; n < a.length; n++) {
							var t = a[n];
							t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
						}
					}
					return function(e, a, n) {
						return a && t(e.prototype, a), n && t(e, n), e
					}
				}(),
				s = (t = n(1)) && t.__esModule ? t : {
					default: t
				},
				r = function() {
					function r() {
						! function(e, a) {
							if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
						}(this, r), this.handlerQueueSet = new s.default, this.messageQueueSet = new s.default
					}
					return i(r, [{
						key: "fireMessage",
						value: function(a) {
							var n = this;
							return a && a.type && this.handlerQueueSet.get(a.type) && (this.messageQueueSet.pushTo(a.type, a), this.handlerQueueSet.get(a.type).getQueue().forEach(function(e) {
								n.handlerWrapper(e, a.type, a)
							}), this.handlerQueueSet.get("*").getQueue().forEach(function(e) {
								n.handlerWrapper(e, "*", a)
							})), this
						}
					}, {
						key: "onMessage",
						value: function(e, a) {
							var n = this,
								t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
							return "[object Array]" === Object.prototype.toString.call(e) ? e.forEach(function(e) {
								return n.onMessage(e, a, t)
							}) : (this.handlerQueueSet.pushTo(e, {
								handler: a,
								once: t.once
							}), !0 === t.listenPreviousEvent && this.messageQueueSet.has(e) && this.handlerWrapper({
								handler: a,
								once: t.once
							}, e, this.messageQueueSet.get(e).getQueue())), this
						}
					}, {
						key: "delHandler",
						value: function(e, a) {
							return this.handlerQueueSet.del(e, a), this
						}
					}, {
						key: "handlerWrapper",
						value: function(e, a, n) {
							var t = e.handler,
								r = e.once;
							return !!t && (t(n), r && this.handlerQueueSet.del(a, t), !0)
						}
					}], [{
						key: "merge",
						value: function() {
							for (var a = new r, e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
							return [].concat(n).forEach(function(e) {
								e.onMessage("*", function(e) {
									return a.fireMessage(e)
								})
							}), a
						}
					}]), r
				}();
			a.default = r, a.QueueSet = s.default
		}])
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var t = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			r = n(18),
			i = n(8),
			s = n(4),
			o = n(7),
			u = n(3),
			l = n(6),
			m = n(1),
			c = {},
			v = (0, u.getEnvInfo)().split(".")[1],
			g = t({}, s.syncInvokeMethodItem, {
				invoke: o.INVOKE_LIST[s.syncInvokeMethodItem.invoke],
				scheme: u.schema,
				name: "getAppInfoSync",
				authority: "swanAPI",
				path: "/getAppInfoSync",
				args: []
			});
		"jsc" === v && (g.method = "_naSwan.bridge.getAppInfoSync"), l.isNativeDescription && "android" === u.osInfo && m.globalNative._naSetting && m.globalNative._naSetting.getAppInfoSync && (g.invoke = o.INVOKE_LIST["swan.method.jsonString"], g.method = "_naSetting.getAppInfoSync"), r.boxjsNative.add(g), a.default = function() {
			if (!c.appid) try {
				c = (0, i.nativeResHandler)({
					res: r.boxjsNative.invoke("getAppInfoSync", []),
					sync: !0,
					isOldSyncApi: !0
				})
			} catch (e) {
				c = {}
			}
			return c
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var t = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			r = n(43),
			i = n(8),
			s = n(4),
			o = n(7),
			u = n(6),
			l = n(3),
			m = n(1),
			c = {},
			v = t({}, s.syncInvokeMethodItem, {
				invoke: o.INVOKE_LIST[s.syncInvokeMethodItem.invoke],
				scheme: l.schema,
				name: "getSystemInfoSync",
				authority: "utils",
				path: "/getSystemInfoSync",
				args: []
			});
		"jsc" === l.frameInfo && (v.method = "_naSwan.bridge.getSystemInfoSync"), "ios" === l.osInfo && (v.authority = "swanAPI"), u.isNativeDescription && "android" === l.osInfo && m.globalNative._naUtils && m.globalNative._naUtils.getSystemInfoSync && (v.invoke = o.INVOKE_LIST["swan.method.jsonString"], v.method = "_naUtils.getSystemInfoSync"), r.swanNative.add(v), a.default = function() {
			try {
				c = (0, i.nativeResHandler)({
					res: r.swanNative.invoke("getSystemInfoSync", []),
					sync: !0,
					isOldSyncApi: !0
				})
			} catch (e) {
				c = {}
			}
			return c
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.swanNative = void 0;
		var t, r = n(15),
			i = (t = r) && t.__esModule ? t : {
				default: t
			};
		a.swanNative = i.default.createContainer().config({
			namingConflict: "ignore"
		})
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var t = Object.assign || function(e) {
			for (var a = 1; a < arguments.length; a++) {
				var n = arguments[a];
				for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
			}
			return e
		};
		a.ubcReport = function(e) {
			return function(e, a) {
				var n = g.filter(a);
				n = function e(a) {
					for (var n in a) m.default.isNumber(a) ? a[n] = a[n] + "" : m.default.isObject(a) && (a[n] = e(a[n]));
					return a
				}(n);
				try {
					i.boxjsNative.invoke(e, (0, c.paramsInOrder)(i.boxjsNative, e, n))
				} catch (e) {}
			}("ubcReport", e)
		};
		var r, i = n(18),
			s = n(4),
			o = n(3),
			u = n(7),
			l = n(0),
			m = (r = l) && r.__esModule ? r : {
				default: r
			},
			c = n(10);
		var v = t({}, s.ubcInvokeMethodItem, {
				invoke: u.INVOKE_LIST[s.ubcInvokeMethodItem.invoke],
				scheme: o.schema,
				name: "ubcReport",
				authority: s.ubcInvokeMethodItem.authority,
				path: s.ubcInvokeMethodItem.path,
				args: s.ubcInvokeMethodItem.args
			}),
			g = {
				filter: function(e) {
					return m.default.isIOS ? e.minver = "7.3.0.0" : e.min_v = "16789504", e
				}
			};
		i.boxjsNative.add(v)
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var r = Object.assign || function(e) {
			for (var a = 1; a < arguments.length; a++) {
				var n = arguments[a];
				for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
			}
			return e
		};
		a.statisticEvent = function(e) {
			return function(e, t) {
				return new Promise(function(a, n) {
					t = r(t, {
						innerCallback: function(e) {
							0 == +e.status ? a((0, u.nativeResHandler)({
								res: e
							})) : n((0, u.nativeResHandler)({
								res: e
							}))
						}
					}), i.boxjsNative.invoke(e, (0, l.paramsInOrder)(i.boxjsNative, e, t))
				})
			}("statisticEvent", e)
		};
		var i = n(18),
			t = n(4),
			s = n(3),
			o = n(7),
			u = n(8),
			l = n(10),
			m = r({}, t.asyncInvokeMethodItem, {
				invoke: o.INVOKE_LIST[t.asyncInvokeMethodItem.invoke],
				scheme: s.schema,
				name: "statisticEvent",
				authority: "swanAPI",
				path: "/openStatisticEvent",
				args: [{
					name: "groupId",
					value: "string"
				}, {
					name: "bizId",
					value: "string"
				}, {
					name: "eventName",
					value: "string"
				}, {
					name: "content",
					value: "Object"
				}, {
					name: "appVersion",
					value: "string="
				}, {
					name: "swanType",
					value: "string="
				}, {
					name: "innerCallback",
					value: "function"
				}]
			});
		i.boxjsNative.add(m)
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.supportLevel2Callback = function(t) {
			if (t.cb) return t;
			if (s.default.isFunction(t.callback)) {
				var e = "_bdbox_pjs_" + s.default.getId();
				t.cb = e, r.global[e] = function() {
					for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
					t.callback.apply(r.global, a)
				}
			} else s.default.isString(t.callback) && (t.cb = t.callback, delete t.callback);
			return t
		};
		var t, r = n(1),
			i = n(0),
			s = (t = i) && t.__esModule ? t : {
				default: t
			}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.bindingInvoker = void 0;
		var t, s = n(27),
			o = n(29),
			u = n(9),
			l = n(2),
			m = n(19),
			c = n(8),
			r = n(0),
			v = (t = r) && t.__esModule ? t : {
				default: t
			},
			g = n(1),
			d = n(5);
		a.bindingInvoker = function(a) {
			var e = void 0;
			if (a.params = l.CANCEL_CONVERT_LIST.some(function(e) {
					return a.apiName.match(e)
				}) ? a.params : (0, m.convertNumberToString)(a.params), a.supportPromise) {
				var n = a.params.boxjsInvokeForAPI ? (0, o.invokeBindingMethod)(a.jsNative, a.apiName, a.params) : (0, s.createBindingBoxjsPromise)(a).then(function(e) {
					return (0, d.sendTimesLog)({
						apiName: a.apiName,
						success: d.LOGPARAMS.CALL_SUCCESS,
						start: a.startTime,
						end: Date.now()
					}), e
				}).catch(function(e) {
					throw (0, d.sendTimesLog)({
						apiName: a.apiName,
						success: d.LOGPARAMS.CALL_FAIL,
						start: a.startTime,
						end: Date.now()
					}), e
				});
				if (a.params.boxjsInvokeForAPI) {
					var t = v.default.isString(n) ? JSON.parse(n) : n;
					(0, d.sendInvokeResLog)(t, {
						apiName: a.apiName,
						startTime: a.startTime
					})
				}
				return n
			}
			if (a.paramsCBName) {
				var r = (0, s.createBindingCbPromise)(a);
				(0, u.sendLogAndExecuteCallback)({
					apiName: a.apiName,
					promise: r,
					params: a.callbacks,
					startTime: a.startTime
				}), e = (0, o.invokeBindingMethod)(a.jsNative, a.apiName, a.params);
				var i = v.default.isString(e) ? JSON.parse(e) : e;
				0 == +i.status ? (0, c.clientAuthorizeOptimizeAPIResHandler)(a, i) : g.global[a.params.cb](e)
			} else e = (0, o.invokeBindingMethod)(a.jsNative, a.apiName, a.params), (0, u.executeCallbackForLevel1BindingInvoke)({
				params: a.params,
				apiName: a.apiName,
				res: e,
				thunk: a.thunk,
				startTime: a.startTime
			})
		}
	}, function(e, a, n) {
		"use strict";
		e.exports = function(e, a) {
			a += "";
			for (var n = (e += "").split("."), t = a.split("."), r = 0, i = Math.max(n.length, t.length); r < i; r++) {
				if (n[r] && !t[r] && 0 < parseInt(n[r]) || parseInt(n[r]) > parseInt(t[r])) return 1;
				if (t[r] && !n[r] && 0 < parseInt(t[r]) || parseInt(n[r]) < parseInt(t[r])) return -1
			}
			return 0
		}
	}, function(e, a, n) {
		"use strict";
		var t, r = n(0),
			i = (t = r) && t.__esModule ? t : {
				default: t
			},
			s = n(1);
		var o = navigator.userAgent;

		function u(e, a) {
			var n = "0";
			return a || (a = 1), (e = e).exec(o) && (n = e.exec(o)[a]), n
		}
		var l = {
			getBoxVersion: function() {
				var e = 0;
				if (i.default.isBox) {
					var a = /swan-(?!native\/)([a-zA-Z0-9]+)\/([\d+\.]+)/.exec(o);
					e = a ? a[2] : (a = /baiduboxapp\/([\d+.]+)/.exec(o))[1]
				}
				return e
			},
			getHostVersion: function() {
				return u(/swan-(?!native\/)([a-zA-Z0-9]+)\/([\d+\.]+)/, 2)
			},
			getSdkVersion: function() {
				return u(/swan\/([\d+.]+)/, 1)
			},
			getOSVerion: function(e) {
				var a = 0 < arguments.length && void 0 !== e ? e : navigator.userAgent,
					n = "unknown",
					t = s.hasNoGlobal ? a.match(/(Android);?\s+([\d.]+)?/) : a.match(/(P1)\s([\d/.]+)/),
					r = s.hasNoGlobal ? a.match(/(iPhone|iPad)\sOS\s([\d_]+)/) : a.match(/(P2)\s([\d/.]+)/);
				return t ? n = t[2] : r && (n = s.hasNoGlobal ? r[2].replace(/_/g, ".") : r[2]), n
			}
		};
		e.exports = l
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.schemeInvoker = void 0;
		var r = n(27),
			i = n(9),
			s = n(11),
			o = n(5),
			u = n(2);
		a.schemeInvoker = function(n) {
			var e, a = n.paramsCBName ? (0, r.createLevel2Promise)({
				params: n.params,
				parser: n.parser
			}) : null;
			if (e = (0, r.createInvokePromise)({
					jsNative: n.jsNative,
					apiName: n.apiName,
					params: n.params,
					thunk: n.thunk
				}).then(function(e) {
					if ((0, s.isAllowedSaveToBootstrapLogQueue)()) {
						var a = Date.now();
						(0, s.addDurationLogToQueue)({
							apiName: n.apiName,
							success: 1,
							start: n.startTime,
							end: a
						})
					}
					return n.supportPromise && (u.CANCEL_SUPPORT_PROMISE_LOG.some(function(e) {
						return n.apiName.match(e)
					}) || (0, o.sendTimesLog)({
						apiName: n.apiName,
						success: o.LOGPARAMS.CALL_SUCCESS,
						start: n.startTime,
						end: Date.now()
					})), e
				}).catch(function(e) {
					throw n.supportPromise && (u.CANCEL_SUPPORT_PROMISE_LOG.some(function(e) {
						return n.apiName.match(e)
					}) || (0, o.sendTimesLog)({
						apiName: n.apiName,
						success: o.LOGPARAMS.CALL_FAIL,
						start: n.startTime,
						end: Date.now()
					})), e
				}), n.supportPromise) return e;
			var t = a ? [e, a] : e;
			(0, i.sendLogAndExecuteCallback)({
				apiName: n.apiName,
				promise: t,
				params: n.callbacks,
				startTime: n.startTime
			})
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.syncMethodInvoker = void 0;
		var t, s = n(29),
			o = n(2),
			u = n(19),
			l = n(8),
			r = n(0),
			m = (t = r) && t.__esModule ? t : {
				default: t
			},
			c = n(5);
		a.syncMethodInvoker = function(a) {
			var e = o.CANCEL_CONVERT_LIST.some(function(e) {
					return a.apiName.match(e)
				}) ? a.params : (0, u.convertNumberToString)(a.params),
				n = o.OLD_SYNC_API_LIST.hasOwnProperty(a.apiName);
			try {
				var t = (0, s.invokeMethod)(a.jsNative, a.apiName, e),
					r = m.default.isString(t) ? JSON.parse(t) : t,
					i = {
						apiName: a.apiName,
						startTime: a.startTime,
						addDurationLog: !0
					};
				return (0, c.sendInvokeResLog)(r, i), (0, l.nativeResHandler)({
					res: t,
					thunk: a.thunk,
					sync: !0,
					isOldSyncApi: n
				})
			} catch (e) {
				return (0, c.sendTimesLog)({
					apiName: a.apiName,
					success: c.LOGPARAMS.CALL_FAIL,
					errHappen: "JS",
					errMsg: e.message
				}), console.error(e.message), n ? e : void 0
			}
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.swanjsMap = void 0;
		var t, r = Object.assign || function(e) {
				for (var a = 1; a < arguments.length; a++) {
					var n = arguments[a];
					for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
				}
				return e
			},
			i = n(53),
			s = n(59),
			o = n(0),
			u = (t = o) && t.__esModule ? t : {
				default: t
			};
		for (var l in i.classifiedAPIMap) s.normalAPIMap[l] && u.default.isObject(i.classifiedAPIMap[l]) ? r(s.normalAPIMap[l], i.classifiedAPIMap[l]) : s.normalAPIMap[l] = i.classifiedAPIMap[l];
		a.swanjsMap = s.normalAPIMap
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.classifiedAPIMap = void 0;
		var t, r = n(54),
			i = n(20),
			s = n(55),
			o = n(30),
			u = n(56),
			l = n(14),
			m = n(0),
			c = (t = m) && t.__esModule ? t : {
				default: t
			},
			v = n(58),
			g = n(2),
			d = n(12),
			p = n(24);
		var h = {
			login: {
				filter: r.loginFilter
			},
			guidePushSetting: {
				filter: function(e) {
					return e.source = "activity", e
				}
			},
			navigateToSmartProgram: {
				filter: function(e) {
					return "develop" === e.envVersion ? e.appKey += "_dev" : "trial" === e.envVersion && (e.appKey += "_trial"), e
				}
			},
			openBdboxWebview: {
				filter: function(e) {
					return e.parameters = e.parameters ? e.parameters : {}, e.scheme = e.parameters, delete e.parameters, e.scheme.upgrade = 0, "wallet" === e.module && (e.scheme.url = "https://www.baifubao.com/content/mywallet/h5/sdk_page/sdk_quan_manager.html"), e
				}
			},
			previewImage: {
				filter: r.previewImageFilter
			},
			chooseImage: {
				defaultParam: r.chooseImageParams,
				parser: i.resNeedDecode
			},
			openShare: s.openShare,
			shareToWeibo: function(e) {
				(0, s.openShare)(e, "sinaweibo")
			},
			shareToWeixin: function(e) {
				(0, s.openShare)(e, "weixin_friend")
			},
			shareToQQ: function(e) {
				(0, s.openShare)(e, "qqfriend")
			},
			shareToWeixinFriends: function(e) {
				(0, s.openShare)(e, "weixin_timeline")
			},
			"webView.navigateTo": function(e) {
				var a = {
					type: "webviewNavigateTo",
					params: e
				};
				(0, o.postMessage)(a)
			},
			"webView.navigateBack": function(e) {
				var a = {
					type: "webviewNavigateBack",
					params: e
				};
				(0, o.postMessage)(a)
			},
			"webView.switchTab": function(e) {
				var a = {
					type: "webviewSwitchTab",
					params: e
				};
				(0, o.postMessage)(a)
			},
			"webView.reLaunch": function(e) {
				var a = {
					type: "webviewReLaunch",
					params: e
				};
				(0, o.postMessage)(a)
			},
			"webView.redirectTo": function(e) {
				var a = {
					type: "webviewRedirectTo",
					params: e
				};
				(0, o.postMessage)(a)
			},
			ubcReporter: function(e) {
				var a = {
					type: "webviewUbclog",
					params: e
				};
				(0, o.postMessage)(a)
			},
			reportAnalytics: function(e) {
				var a = {
					type: "webviewReportAnalytics",
					params: e
				};
				(0, o.postMessage)(a)
			},
			activityRequest: {
				parser: i.resNeedDecode
			},
			openApp: {
				filter: function(e) {
					return e.download = e.download || {}, e.isNeedDownload = !!e.download.url, e
				}
			},
			showToast: function(e) {
				(0, u.showToast)(e, l.swanjsNative)
			},
			"webView.postMessage": {
				filter: function(e) {
					var a = 0 < arguments.length && void 0 !== e ? e : {};
					return void 0 !== a.data && !c.default.isFunction(a.data) && "" !== a.data && !1 !== a.data && null !== a.data || (a.data = {}), a.data = JSON.stringify(a.data), a
				}
			},
			"webView.getEnv": v.getEnv
		};
		g.swanCallBoxjsAPIList.concat(g.swanCallBoxjsCommonAPIList).forEach(function(e) {
			if (d.webviewDescriptionList.includes(e)) {
				var a = h[e] || {};
				h[e] = (0, p.getInvokeMethod)(l.swanjsNative, e, a)
			}
		}), a.classifiedAPIMap = h
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.chooseImageParams = a.previewImageFilter = a.loginFilter = void 0;
		var t, r = n(0),
			i = (t = r) && t.__esModule ? t : {
				default: t
			};
		a.loginFilter = function(e) {
			return i.default.isNumber(e.timeout) || delete e.timeout, e
		}, a.previewImageFilter = function(e) {
			return e.from = "swan", e
		}, a.chooseImageParams = {
			count: 9,
			sizeType: ["original", "compressed"],
			sourceType: ["album", "camera"]
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.openShare = void 0;
		var t, r = n(0),
			i = (t = r) && t.__esModule ? t : {
				default: t
			},
			s = n(30);
		a.openShare = function(e, a) {
			a && (e.mediaType = a);
			var n = {
				type: "webviewOpenShare",
				params: i.default.isAndroid ? e : escape(JSON.stringify(e))
			};
			(0, s.postMessage)(n)
		}
	}, function(e, a, n) {
		"use strict";
		(function(s) {
			Object.defineProperty(a, "__esModule", {
				value: !0
			}), a.showToast = void 0;
			var o = n(2),
				u = n(9),
				l = n(57),
				m = n(17),
				c = n(20),
				v = n(26),
				g = n(5);
			a.showToast = function(e, a) {
				var n = 0 < arguments.length && void 0 !== e ? e : {},
					t = a,
					r = function(e) {
						if ("" !== e.title) {
							if (e.time = e.duration || 2e3, e.mask = e.mask || !1, e.message = e.title, e.type = !e.image && o.TOAST_TYPE_MAP[e.icon] && "" !== e.image ? o.TOAST_TYPE_MAP[e.icon] : "2", e.image) try {
								e.image = s.masterManager.getPathFromFront(e.image)
							} catch (e) {
								console.error("set showToast image error:", e.message)
							}
							return e
						}(0, u.callFailAndComplete)(e, "showToast", "parameter error: title must not be empty")
					}(n);
				if (r) {
					"4" === r.type && (n.cb = (0, l.createLevel2Callback)(function(e) {
						(0, m.executeByTryCatch)(n.clickCallback, "at api showToast clickCallback function", e)
					}, c.jsonParse)), (0, g.sendTimesLog)({
						apiName: "showToast",
						success: g.LOGPARAMS.CALL
					});
					var i = Date.now();
					return (0, v.asyncMethodInvoker)({
						jsNative: t,
						apiName: "showToast",
						params: n,
						callbacks: n,
						supportPromise: !1,
						startTime: i
					})
				}
			}
		}).call(this, n(16))
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.createLevel2Callback = void 0;
		var r = n(28),
			i = n(1);
		a.createLevel2Callback = function(n, t) {
			var e = (0, r.getParamsCBName)();
			return i.global[e] = function(e) {
				var a = t(e);
				n && n(a.data || {})
			}, e
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.getEnv = void 0;
		var t, r = n(0),
			i = (t = r) && t.__esModule ? t : {
				default: t
			};
		a.getEnv = function(e) {
			var a = !1,
				n = i.default.isIOS && window.webkit && window.webkit.messageHandlers,
				t = n ? window.webkit.messageHandlers : window;
			i.default.isAndroid && window.Bdbox_aiapps_jsbridge ? a = !0 : n && (t.bridge || t.BBAMNPJSBridgeWebViewComponent) && (a = !0);
			var r = {
				smartprogram: a
			};
			if (!i.default.isFunction(e)) return r;
			e(r)
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.normalAPIMap = void 0;
		var t = n(22);
		a.normalAPIMap = t.allWebviewDescriptions.reduce(function(a, e) {
			var n = e.name,
				t = e.args;
			return a[n] = {}, t.forEach(function(e) {
				"cb" === e.name && (a[n].paramsCBName = !0)
			}), a
		}, {})
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.processors = void 0;
		var t, s = n(1),
			r = n(0),
			o = (t = r) && t.__esModule ? t : {
				default: t
			},
			i = n(3);

		function u(e, a, n) {
			var t = {
				ubcReport: {
					action: "?action=",
					callback: "",
					params: "&params=" + a,
					qm: ""
				},
				default: {
					action: "",
					callback: n && "callback=" + n || "",
					params: a && "params=" + a + "&"
				}
			};
			return t.default.qm = n || a ? "?" : "", n || (t.default.params = a && "params=" + a), t[e] || t.default
		}

		function l(e, a) {
			var n = e.innerCallback;
			delete e.innerCallback;
			var t = "{}" !== JSON.stringify(e) ? encodeURIComponent(JSON.stringify(e)) : a.match("Sync") ? "" : encodeURIComponent("{}"),
				r = u(a, t, n);
			return {
				params: r.params,
				callback: r.callback,
				qm: r.qm
			}
		}

		function m(e, a) {
			var n = e.innerCallback;
			return delete e.innerCallback, {
				scheme: i.schema,
				module: a.authority,
				path: a.path,
				params: e,
				callback: n
			}
		}
		a.processors = {
			SchemeCombine: function(s, e) {
				var a = u(s.name).action,
					o = s.scheme + "://" + s.authority + a + s.path;
				switch (e) {
					case "URL":
						return function(e) {
							var a = l(e, s.name),
								n = a.params,
								t = a.callback,
								r = a.qm;
							return o + r + n + t
						};
					case "URLArrayString":
						return function(e) {
							var a = l(e, s.name),
								n = a.params,
								t = a.callback,
								r = a.qm,
								i = o + r + n + t;
							return JSON.stringify({
								func: "dispatch",
								args: [i]
							})
						};
					case "URLArray":
						return function(e) {
							var a = l(e, s.name),
								n = a.params,
								t = a.callback,
								r = a.qm;
							return [o + r + n + t]
						};
					case "argArray":
						return function(e) {
							return [e]
						};
					case "argArrayString":
						return function(e) {
							return 0 < Object.keys(e).length ? [JSON.stringify(e)] : []
						}
				}
			},
			CallMethodAdpter: function(t, e) {
				var r = void 0,
					i = void 0;
				return function(e) {
					! function() {
						if (!r) {
							var e = t.method.split("."),
								a = e.length - 1;
							i = e[a], r = s.hasNoGlobal ? window : s.globalNative;
							for (var n = 0; n < a; n++) r[e[n]] && (r = r[e[n]])
						}
					}(), e = o.default.isString(e) ? [e] : e;
					var a = "";
					try {
						a = r[i].apply(r, e)
					} catch (e) {
						a = JSON.stringify({
							status: e.status || 904,
							message: e.message || "调用端能力出错",
							errHappen: "native"
						})
					}
					return a
				}
			},
			NativeParmasCombine: function(a, e) {
				switch (e) {
					case "argArray":
						return function(e) {
							return [{
								message: m(e, a),
								type: "API"
							}]
						};
					case "arg":
						return function(e) {
							return {
								type: "API",
								message: m(e, a)
							}
						}
				}
			},
			CallPromptAdapter: function(e, a) {
				return function(e) {
					var a = "";
					try {
						a = window.prompt(e)
					} catch (e) {
						a = JSON.stringify({
							status: e.status || 904,
							message: e.message || "调用端能力出错",
							errHappen: "native"
						})
					}
					return a
				}
			}
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var s = function(e, a) {
			if (Array.isArray(e)) return e;
			if (Symbol.iterator in Object(e)) return function(e, a) {
				var n = [],
					t = !0,
					r = !1,
					i = void 0;
				try {
					for (var s, o = e[Symbol.iterator](); !(t = (s = o.next()).done) && (n.push(s.value), !a || n.length !== a); t = !0);
				} catch (e) {
					r = !0, i = e
				} finally {
					try {
						!t && o.return && o.return()
					} finally {
						if (r) throw i
					}
				}
				return n
			}(e, a);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		};
		a.webSwanInit = function(e) {
			var i = {};
			return Object.keys(e).forEach(function(e) {
				if (0 < e.indexOf(".")) {
					var a = e.split("."),
						n = s(a, 2),
						t = n[0],
						r = n[1];
					i[t] = i[t] || {}, i[t][r] = o.invokeSmartProgram
				} else i[e] = o.invokeSmartProgram
			}), i
		};
		var o = n(62)
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.invokeSmartProgram = function() {
			var e = (0, u.getToken)();
			e && (0, o.copy)(e) && function() {
				var e = {
					scheme: (0, r.isIOS)() ? c : v,
					failUrl: (0, r.isIOS)() ? l : m,
					timeout: "800"
				};
				(0, s.default)(e)
			}()
		};
		var t, r = n(21),
			i = n(63),
			s = (t = i) && t.__esModule ? t : {
				default: t
			},
			o = n(64),
			u = n(65);
		var l = "https://itunes.apple.com/cn/app/id382201985?mt=8",
			m = "https://downpack.baidu.com/baidusearch_AndroidPhone_1023534m.apk",
			c = "baiduboxapp://apppage?action=openPage&params=%7B%22pageid%22%3A%22homepage%22%7D",
			v = "baiduboxapp://utils?action=sendIntent&minver=7.4&params=%7B%22intent%22%3A%22intent%3A%23Intent%3Baction%3Dcom.baidu.searchbox.action.HOME%3Bcategory%3Dandroid.intent.category.DEFAULT%3Bend%22%7D"
	}, function(e, a, n) {
		window,
		e.exports = function(n) {
			var t = {};

			function r(e) {
				if (t[e]) return t[e].exports;
				var a = t[e] = {
					i: e,
					l: !1,
					exports: {}
				};
				return n[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
			}
			return r.m = n, r.c = t, r.d = function(e, a, n) {
				r.o(e, a) || Object.defineProperty(e, a, {
					enumerable: !0,
					get: n
				})
			}, r.r = function(e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}, r.t = function(a, e) {
				if (1 & e && (a = r(a)), 8 & e) return a;
				if (4 & e && "object" == typeof a && a && a.__esModule) return a;
				var n = Object.create(null);
				if (r.r(n), Object.defineProperty(n, "default", {
						enumerable: !0,
						value: a
					}), 2 & e && "string" != typeof a)
					for (var t in a) r.d(n, t, function(e) {
						return a[e]
					}.bind(null, t));
				return n
			}, r.n = function(e) {
				var a = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return r.d(a, "a", a), a
			}, r.o = function(e, a) {
				return Object.prototype.hasOwnProperty.call(e, a)
			}, r.p = "", r(r.s = 0)
		}([function(e, a, n) {
			"use strict";
			n.r(a);
			var t = {
					baidu: {
						name: "baidu",
						UAKey: / baiduboxapp\//i,
						uaFunc: function(e) {
							return / baiduboxapp\//i.test(e) && !/ (lite|info|mission) baiduboxapp/.test(e)
						},
						scheme: "baiduboxapp",
						universalLink: "https://boxer.baidu.com/scheme",
						yybLink: "http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox",
						appStoreLink: "https://itunes.apple.com/cn/app/id382201985?mt=8",
						wechatBanned: !0
					}
				},
				r = window.navigator.userAgent;

			function i() {
				return Object.keys(t).find(function(e) {
					return !0 === t[e].UAKey.test(r)
				}) || !1
			}

			function s(e) {
				return t[e]
			}
			var l = {
					success: {
						errCode: "success",
						errMsg: "调起成功"
					},
					fail: {
						errCode: "fail",
						errMsg: "调起失败"
					},
					timeout: {
						errCode: "timeout",
						errMsg: "调起超时"
					}
				},
				o = function e(a) {
					var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
					! function(e, a) {
						if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
					}(this, e), "timeout" === a ? (this.errno = "1", this.errCode = l.timeout.errCode, this.errMsg = l.timeout.errMsg) : (this.errno = "2", this.errCode = l.fail.errCode, this.errMsg = n)
				};
			var u = navigator.userAgent,
				m = function() {
					var n = {
							os: "unknown",
							osVersion: "0",
							app: "unknown",
							appVersion: "0"
						},
						t = {
							wechat: /micromessenger\/([\d|.]*)/i,
							qq: /QQ\/([\d|.]*)/,
							weibo: /\bweibo\b/i,
							baiduhi: /\bbaiduhi/i,
							baidu: /\bbaiduboxapp\/([\d|.]*)/i,
							chrome: /\bChrome\/([\d|.]*)/i,
							safari: /\bsafari\/([\d|.]*)/i
						};
					Object.keys(t).find(function(e) {
						var a = u.match(t[e]);
						return !!a && (n.app = e, n.appVersion = a[1] || "", !0)
					}), n.app || (n.app = i());
					var e = u.match(/(Android);?\s+([\d.]+)?/);
					if (e) return n.os = "android", n.osVersion = e[2], n;
					var a = u.match(/(iPad|iPod|iPhone).*OS\s([\d_]+)/);
					return a && (n.os = "ios", n.osVersion = a[2]), n
				}();

			function c(e) {
				var a = s(e);
				return !!a && a.UAKey.test(u) && a.uaFunc(u)
			}
			var v = "ios" === m.os;

			function g(e) {
				return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function d(e) {
				return "object" === g(e)
			}
			m.os;
			var p = (Date.now() + "").slice(-5);

			function h(e) {
				return new Promise(function(a, n) {
					window[e] = function(e) {
						0 === (e = function(e) {
							var a = "",
								n = "",
								t = {};
							if (d(e)) a = 0 <= e.errCode ? e.errCode : +e.status, n = e.errMsg || e.message, t = e.data;
							else {
								try {
									e = JSON.parse(e)
								} catch (e) {}
								a = +e.status, t = e.data || {}
							}
							return {
								errCode: a,
								errMsg: n,
								data: t
							}
						}(e)).errCode && a(e), n(e)
					}
				})
			}

			function f() {
				return "_swan_invoke_" + p++
			}

			function y(e, n) {
				if (!Object.keys(n).length) return e;
				var a = function(e, a) {
						return function(e) {
							if (Array.isArray(e)) return e
						}(e) || function(e, a) {
							var n = [],
								t = !0,
								r = !1,
								i = void 0;
							try {
								for (var s, o = e[Symbol.iterator](); !(t = (s = o.next()).done) && (n.push(s.value), !a || n.length !== a); t = !0);
							} catch (e) {
								r = !0, i = e
							} finally {
								try {
									t || null == o.return || o.return()
								} finally {
									if (r) throw i
								}
							}
							return n
						}(e, a) || function() {
							throw new TypeError("Invalid attempt to destructure non-iterable instance")
						}()
					}(e.split("#"), 2),
					t = a[0],
					r = a[1],
					i = void 0 === r ? "" : r;
				return t += 0 < t.indexOf("?") ? "&" : "?", t += Object.keys(n).map(function(e) {
					var a = n[e];
					return "Object" === Object.prototype.toString.call(a).slice(8, -1) && (a = JSON.stringify(a)), e + "=" + encodeURIComponent(a)
				}).join("&") + i
			}

			function b(r) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {},
						a = Object.keys(i);
					"function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
						return Object.getOwnPropertyDescriptor(i, e).enumerable
					}))), a.forEach(function(e) {
						var a, n, t;
						a = r, t = i[n = e], n in a ? Object.defineProperty(a, n, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : a[n] = t
					})
				}
				return r
			}
			var I = "baiduboxapp://v16/public/thirdPart/config?params=";

			function w(e) {
				var a = e.appKey,
					n = e.path,
					t = e.hostInfo,
					r = e.query,
					i = e.scheme,
					s = e.from,
					o = e.ext,
					u = void 0 === o ? {} : o;
				return i || y("".concat(t.scheme, "://swan/").concat(a).concat("/" === n[0] ? n : "/" + n), b({}, r, {
					_baiduboxapp: JSON.stringify({
						from: s,
						ext: b({
							sInvokeFromApp: m.app,
							sInvokeFromInBox: m.app === e.hostId ? "1" : "0"
						}, u)
					})
				}))
			}

			function A(e) {
				var a = I,
					n = "";
				if ("ios" === m.os) n = "swan/swanparse";
				else {
					var t = e.appKey,
						r = e.path;
					n = "swan/" + t + ("/" === r[0] ? r : "/" + r)
				}
				var i = {
					ext: e.ext || {},
					type: "openSwan",
					schemeList: [n]
				};
				return a += encodeURIComponent(JSON.stringify(i)), a += "&oauthType=openSwan"
			}

			function P(r) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {},
						a = Object.keys(i);
					"function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
						return Object.getOwnPropertyDescriptor(i, e).enumerable
					}))), a.forEach(function(e) {
						var a, n, t;
						a = r, t = i[n = e], n in a ? Object.defineProperty(a, n, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : a[n] = t
					})
				}
				return r
			}

			function S(e, a) {
				for (var n = 0; n < a.length; n++) {
					var t = a[n];
					t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
				}
			}
			var O = ("http:" === window.location.protocol ? "http:" : "https:") + "//m.baidu.com/tcbox",
				k = {
					action: "pblog",
					service: "bdbox",
					data: {
						appid: 1,
						cateid: 99,
						actiontype: 1,
						actiondata: {
							id: "10353",
							type: "0",
							timestamp: "",
							content: {
								boxVersion: m.appVersion || "",
								platform: m.os,
								inBox: "baidu" === m.app ? "0" : "1",
								type: "",
								source: m.app,
								ext: {
									url: window.location.href,
									browserVersion: m.appVersion
								}
							}
						}
					}
				},
				_ = new(function() {
					function e() {
						! function(e, a) {
							if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.data = k
					}
					return S(e.prototype, [{
						key: "init",
						value: function(e) {
							this.data.data.actiondata.content.inBox = m.app === e.hostId ? "0" : "1", this.data.data.actiondata.content.ext = P({}, this.data.data.actiondata.content.ext, {
								appKey: e.appKey,
								path: e.path,
								query: e.query,
								ext: e.ext,
								from: e.from
							})
						}
					}, {
						key: "log",
						value: function(r, i) {
							var s = this;
							return new Promise(function(e, a) {
								s.data.data.actiondata.content = P({}, s.data.data.actiondata.content, {
									failMsg: i || {},
									type: r
								}), s.data.data.actiondata.timestamp = Date.now() + "";
								var n = new Image(1, 1),
									t = "_swan_invoke_mon" + (Date.now() + "").slice(-5);
								(window[t] = n).onload = n.onerror = n.onabort = function() {
									n.onload = n.onerror = n.onabort = null, window[t] = n = null, e()
								}, n.src = y(O, s.data), setTimeout(function() {
									e()
								}, 100)
							})
						}
					}]), e
				}());

			function C(e) {
				var a = w(e) + "&oauthType=openSwan";
				return j(A(e)).then(function(e) {
					return _.log("success"), j(a)
				}).then(function(e) {
					return l.success
				}).catch(function(e) {
					throw new o("fail", e)
				})
			}

			function j(e) {
				var a = f();
				e += "&callback=" + a;
				var n = h(a),
					t = window.Bdbox_android_jsbridge;
				if (t && t.dispatch) t.dispatch(e);
				else {
					var r = window.prompt("BdboxApp:" + JSON.stringify({
						obj: "Bdbox_android_jsbridge",
						func: "dispatch",
						args: [e]
					}));
					try {
						(r = JSON.parse(r)) && "false" === r.result && window[a]({
							errCode: 903,
							errMsg: "端能力调用失败"
						})
					} catch (e) {
						window[a]({
							errCode: 903,
							errMsg: "端能力调用失败"
						})
					}
				}
				return n
			}

			function M(e) {
				var a = w(e) + "&oauthType=openSwan";
				return N(A(e)).then(function(e) {
					return _.log("success"), N(a)
				}).then(function(e) {
					return l.success
				}).catch(function(e) {
					throw new o("fail", e)
				})
			}

			function N(e) {
				var a = f();
				e += "&callback=" + a;
				var n = h(a),
					t = document.createElement("iframe"),
					r = document.body || document.getElementsByTagName("body")[0];
				return t.style.display = "none", t.src = e, r.appendChild(t), setTimeout(function() {
					r.removeChild(t), t = null
				}, 0), n
			}
			var T = function(i) {
					return new Promise(function(e, a) {
						var n = i.hostId,
							t = i.hostInfo.yybLink,
							r = w(i);
						"baidu" === n && (t = y(t, {
							android_scheme: r
						})), "replace" === i.yybJumpMethod ? location.replace(t) : window.location.href = t
					})
				},
				x = function(n) {
					return new Promise(function(e, a) {
						window.location.href = w(n), e(new o("timeout"))
					})
				};

			function L(i) {
				return new Promise(function(e, a) {
					var n = w(i),
						t = document.createElement("iframe");
					t.style.display = "none", t.src = n;
					var r = document.body || document.getElementsByTagName("body")[0];
					r.appendChild(t), setTimeout(function() {
						r.removeChild(t), t = null
					}, 0), e(new o("timeout"))
				})
			}
			var R = function(e, a) {
					for (var n = a + "", t = (e + "").split("."), r = n.split("."), i = 0; i < Math.max(t.length, r.length); i++) {
						var s = parseInt(t[i], 10),
							o = parseInt(r[i], 10);
						if (t[i] && !r[i] && 0 < s || o < s) return 1;
						if (r[i] && !t[i] && 0 < o || s < o) return -1
					}
					return 0
				},
				D = function(e) {
					var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "fail",
						n = e.failUrl,
						t = e.timeout;
					if (c(e.hostId) ? n = n || "https://mbd.baidu.com/ma/upgrade" : n || (n = E(e)), "timeout" !== a) return new Promise(function(e, a) {
						window.location.href = n, a(new o("fail"))
					});
					var r = +Date.now();
					setTimeout(function() {
						+Date.now() - r < e.timeout + 200 && "visible" === document.visibilityState && (window.location.href = n)
					}, t)
				};

			function E(e) {
				var a, n = e.appKey,
					t = e.path,
					r = e.from,
					i = e.query,
					s = e.source,
					o = e.channel;
				return y("https://mbd.baidu.com/ma/landingpage?t=smartapp_share", {
					appid: n,
					from: r,
					activity_id: "289",
					source: s,
					channel: o,
					url: t + "?" + (a = i, "string" == typeof a ? a : d(a) ? Object.keys(a).map(function(e) {
						return e + "=" + a[e]
					}).join("&") : "")
				})
			}
			var B = function(u) {
				return new Promise(function(e, a) {
					var n = u.hostId,
						t = u.hostInfo,
						r = u.failUrl,
						i = u.from,
						s = u.channel,
						o = t.universalLink;
					"baidu" === n && (o = y(o, {
						scheme: w(u),
						target: r || E(u),
						from: i,
						channel: s
					})), window.location.href = o, e(l.success)
				})
			};

			function F(e) {
				var a = f(),
					n = f(),
					t = h(a),
					r = h(n),
					i = Promise.all([t, r]).then(function(e) {
						var a = function(e, a) {
							return function(e) {
								if (Array.isArray(e)) return e
							}(e) || function(e, a) {
								var n = [],
									t = !0,
									r = !1,
									i = void 0;
								try {
									for (var s, o = e[Symbol.iterator](); !(t = (s = o.next()).done) && (n.push(s.value), !a || n.length !== a); t = !0);
								} catch (e) {
									r = !0, i = e
								} finally {
									try {
										t || null == o.return || o.return()
									} finally {
										if (r) throw i
									}
								}
								return n
							}(e, a) || function() {
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}()
						}(e, 2);
						return a[0], a[1], l.success
					}).catch(function(e) {
						throw new o("fail", e)
					}),
					s = function(e, a, n) {
						var t = e.appKey,
							r = e.path,
							i = e.hostInfo,
							s = e.query,
							o = e.from,
							u = e.ext,
							l = {
								appKey: t,
								cb: n,
								from: o,
								extraData: void 0 === u ? {} : u
							};
						return r && (l.path = y(r, s)), i.scheme + "://swanAPI/navigateToProgram?params=" + encodeURIComponent(JSON.stringify(l)) + "&callback=" + a
					}(e, a, n);
				try {
					! function(e) {
						var a = "undefined" == typeof swanGlobal;
						!a && v ? _naSwan.bridge.postMessage(e) : a || v ? v ? window.webkit.messageHandlers.bridge.postMessage(e) : window.Bdbox_android_jsbridge.dispatch(e) : _naSwan.Bdbox_android_jsbridge.dispatch(e)
					}(s)
				} catch (e) {
					return Promise.reject(new o("fail", e.message))
				}
				return i
			}

			function q(e) {
				var n = function(e) {
					var a = e;
					return a.hostId = a.hostId || i() || "baidu", a.path = a.path || "", a.query = a.query || {}, a.timeout = a.timeout || 200, a.from = a.from || "1271000600000000", a.source = a.source || "1023295y", a.channel = a.channel || "1023295z", a.yybJumpMethod = a.yybJumpMethod || "href",
						function(r) {
							for (var e = 1; e < arguments.length; e++) {
								var i = null != arguments[e] ? arguments[e] : {},
									a = Object.keys(i);
								"function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
									return Object.getOwnPropertyDescriptor(i, e).enumerable
								}))), a.forEach(function(e) {
									var a, n, t;
									a = r, t = i[n = e], n in a ? Object.defineProperty(a, n, {
										value: t,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : a[n] = t
								})
							}
							return r
						}({}, a, {
							hostInfo: s(a.hostId)
						})
				}(e);
				n.scheme = e.scheme,
					function(e) {
						return c(e.hostId) && /\bswan\//i.test(u) ? F : c(e.hostId) ? "android" === m.os ? C : M : "ios" === m.os ? "wechat" === m.app && R(m.appVersion, "7.0.5") < 0 ? D : R(m.osVersion, "9.0") < 0 || "baiduhi" === m.app ? L : B : "android" === m.os ? "wechat" === m.app || "qq" === m.app ? T : "chrome" === m.app && R(m.appVersion, "55") ? x : L : D
					}(n)(n).then(function(e) {
						if ("timeout" === e.errCode) throw new o("timeout")
					}).catch(function(e) {
						var a = e.errCode;
						e.errMsg, D(n, a)
					})
			}
			n.d(a, "default", function() {
				return q
			})
		}]).default
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.copy = function(e) {
			return function(e) {
					e.select(), e.setSelectionRange(0, e.value.length), e.value
				}(r(e)),
				function() {
					try {
						return document.execCommand("copy")
					} catch (e) {
						return !1
					}
				}()
		};
		var t = void 0;

		function r(e) {
			var a = "rtl" === document.documentElement.getAttribute("dir");
			t && (document.body.removeChild(t), t = null), (t = document.createElement("textarea")).style.fontSize = "12pt", t.style.border = "0", t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style[a ? "right" : "left"] = "-9999px";
			var n = window.pageYOffset || document.documentElement.scrollTop;
			return t.style.top = n + "px", t.setAttribute("readonly", ""), t.value = e, document.body.appendChild(t), t
		}
	}, function(e, a, n) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		}), a.getToken = function() {
			return (0, i.default)(location.search)._swebtoken
		};
		var t, r = n(66),
			i = (t = r) && t.__esModule ? t : {
				default: t
			}
	}, function(e, a, n) {
		"use strict";
		e.exports = function(e) {
			var a = e.split("?"),
				n = (a[1] ? a[1] : a[0]).split("&"),
				t = {};
			return n.forEach(function(e) {
				if (0 < (e = e.split("="))[0].length) {
					var a = "";
					try {
						a = decodeURIComponent(e[1]) || ""
					} catch (e) {}
					t[e[0]] = a
				}
			}), t
		}
	}], r.c = t, r.d = function(e, a, n) {
		r.o(e, a) || Object.defineProperty(e, a, {
			enumerable: !0,
			get: n
		})
	}, r.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, r.t = function(a, e) {
		if (1 & e && (a = r(a)), 8 & e) return a;
		if (4 & e && "object" == typeof a && a && a.__esModule) return a;
		var n = Object.create(null);
		if (r.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: a
			}), 2 & e && "string" != typeof a)
			for (var t in a) r.d(n, t, function(e) {
				return a[e]
			}.bind(null, t));
		return n
	}, r.n = function(e) {
		var a = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return r.d(a, "a", a), a
	}, r.o = function(e, a) {
		return Object.prototype.hasOwnProperty.call(e, a)
	}, r.p = "", r(r.s = 31);

	function r(e) {
		if (t[e]) return t[e].exports;
		var a = t[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return n[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
	}
	var n, t
});
