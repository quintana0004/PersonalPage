(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HTML ANIMATION_atlas_1", frames: [[185,513,436,75],[0,0,624,126],[0,359,579,75],[0,436,552,75],[0,205,607,75],[0,128,684,75],[0,282,591,75],[0,513,183,183],[626,0,100,100]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["HTML ANIMATION_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["HTML ANIMATION_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["HTML ANIMATION_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["HTML ANIMATION_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["HTML ANIMATION_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["HTML ANIMATION_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["HTML ANIMATION_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["HTML ANIMATION_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Star = function() {
	this.initialize(ss["HTML ANIMATION_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Star();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,100,100), null);


(lib.InputText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.txtInput = new cjs.Text("", "bold 25px 'Yu Gothic UI'");
	this.txtInput.name = "txtInput";
	this.txtInput.textAlign = "center";
	this.txtInput.lineHeight = 31;
	this.txtInput.lineWidth = 283;
	this.txtInput.parent = this;
	this.txtInput.setTransform(155.45,57.25);

	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(33,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-0.5,38.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.txtInput}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InputText, new cjs.Rectangle(-0.5,0,312,101.8), null);


// stage content:
(lib.Hw3Animation_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* import flash.events.MouseEvent;
		
		stop();
		
		var sText: String;
		
		function inputTextIntro(e: MouseEvent) {
			textInput.text
			
		}
		
		
		btnSave.addEventListener(MouseEvent.CLICK, inputTextIntro);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46));

	// motion_tween
	this.instance = new lib.Symbol1();
	this.instance.setTransform(64.05,1340.9,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:87.85,y:1332.9},0).wait(1).to({x:111.7,y:1325.25},0).wait(1).to({x:135.55,y:1318},0).wait(1).to({x:159.5,y:1311.1},0).wait(1).to({x:183.45,y:1304.55},0).wait(1).to({x:207.45,y:1298.4},0).wait(1).to({x:231.5,y:1292.6},0).wait(1).to({x:255.6,y:1287.2},0).wait(1).to({x:279.75,y:1282.15},0).wait(1).to({x:303.9,y:1277.45},0).wait(1).to({x:328.1,y:1273.15},0).wait(1).to({x:352.4,y:1269.2},0).wait(1).to({x:376.7,y:1265.6},0).wait(1).to({x:401,y:1262.4},0).wait(1).to({x:425.4,y:1259.55},0).wait(1).to({x:449.8,y:1257.1},0).wait(1).to({x:474.3,y:1254.95},0).wait(1).to({x:498.8,y:1253.2},0).wait(1).to({x:523.35,y:1251.85},0).wait(1).to({x:547.9,y:1250.85},0).wait(1).to({x:572.55,y:1250.2},0).wait(1).to({x:597.25,y:1249.9},0).wait(1).to({x:621.95,y:1250},0).wait(1).to({x:646.7,y:1250.45},0).wait(1).to({x:671.5,y:1251.3},0).wait(1).to({x:696.35,y:1252.5},0).wait(1).to({x:721.25,y:1254.05},0).wait(1).to({x:746.2,y:1255.95},0).wait(1).to({x:771.15,y:1258.25},0).wait(1).to({x:796.2,y:1260.95},0).wait(1).to({x:821.25,y:1263.95},0).wait(1).to({x:846.4,y:1267.35},0).wait(1).to({x:871.55,y:1271.1},0).wait(1).to({x:896.75,y:1275.25},0).wait(1).to({x:922,y:1279.75},0).wait(1).to({x:947.25,y:1284.6},0).wait(1).to({x:972.6,y:1289.85},0).wait(1).to({x:998,y:1295.45},0).wait(1).to({x:1023.4,y:1301.45},0).wait(1).to({x:1048.9,y:1307.8},0).wait(1).to({x:1074.4,y:1314.5},0).wait(1).to({x:1099.95,y:1321.55},0).wait(1).to({x:1125.55,y:1329},0).wait(1).to({x:1151.2,y:1336.85},0).wait(1).to({x:1176.95,y:1345.05},0).wait(1));

	// shape_tween
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC6iDCDQiDCDi6AAQi5AAiDiDQiDiDAAi6QAAi4CDiDQCDiDC5AAQC6AACDCDQCDCDAAC4g");
	this.shape.setTransform(195.75,1065.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("Ak8E8QiCiDAAi5QAAi4CCiEQCDiDC5ABQC6gBCDCDQCCCEAAC4QAAC5iCCDQiDCDi6AAQi5AAiDiDg");
	this.shape_1.setTransform(195.75,1065.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CDiDQCDiDC5AAQC6AACDCDQCDCDAAC4QAAC6iDCDQiDCDi6AAQi5AAiDiDQiDiDAAi6g");
	this.shape_2.setTransform(215.75,1065.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi4CEiEQCCiDC5ABQC5gBCECDQCDCEgBC4QABC5iDCDQiECDi5AAQi5AAiCiDg");
	this.shape_3.setTransform(215.75,1065.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CDiDQCDiDC5AAQC5AACDCDQCECDAAC4QAAC6iECDQiDCDi5AAQi5AAiDiDQiDiDAAi6g");
	this.shape_4.setTransform(235.8,1065.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CDiDQCDiDC5AAQC6AACCCDQCECDAAC4QAAC6iECDQiCCDi6AAQi5AAiDiDQiDiDAAi6g");
	this.shape_5.setTransform(255.8,1065.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("Ak7E8QiEiDABi5QgBi4CEiEQCCiDC5ABQC5gBCECDQCDCEgBC4QABC5iDCDQiECDi5AAQi5AAiCiDg");
	this.shape_6.setTransform(255.8,1065.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("Ak7E8QiDiDAAi5QAAi4CDiEQCCiDC5ABQC5gBCECDQCDCEgBC4QABC5iDCDQiECDi5AAQi5AAiCiDg");
	this.shape_7.setTransform(295.85,1065.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi4CEiEQCCiDC5ABQC5gBCDCDQCECEAAC4QAAC5iECDQiDCDi5AAQi5AAiCiDg");
	this.shape_8.setTransform(315.85,1065.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CEiDQCDiDC4AAQC6AACDCDQCDCDAAC4QAAC6iDCDQiDCDi6AAQi4AAiDiDQiEiDAAi6g");
	this.shape_9.setTransform(335.9,1065.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CEiDQCCiDC5AAQC6AACDCDQCDCDAAC4QAAC6iDCDQiDCDi6AAQi5AAiCiDQiEiDAAi6g");
	this.shape_10.setTransform(375.95,1065.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CEiDQCCiDC5AAQC6AACCCDQCECDAAC4QAAC6iECDQiCCDi6AAQi5AAiCiDQiEiDAAi6g");
	this.shape_11.setTransform(416,1065.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FF00").s().p("Ak7E8QiDiDgBi5QABi4CDiEQCCiDC5ABQC5gBCECDQCDCEgBC4QABC5iDCDQiECDi5AAQi5AAiCiDg");
	this.shape_12.setTransform(456.05,1065.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#006600").ss(2,1,1).p("Am+AAQAAi4CDiDQCDiDC4AAQC6AACDCDQCDCDAAC4QAAC6iDCDQiDCDi6AAQi4AAiDiDQiDiDAAi6g");
	this.shape_13.setTransform(476.05,1065.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FF00").s().p("Ak8E8QiDiDAAi5QAAi4CDiEQCEiDC4ABQC5gBCDCDQCECEAAC4QAAC5iECDQiDCDi5AAQi4AAiEiDg");
	this.shape_14.setTransform(496.05,1065.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi4CEiEQCDiDC4ABQC5gBCDCDQCECEAAC4QAAC5iECDQiDCDi5AAQi4AAiDiDg");
	this.shape_15.setTransform(536.1,1065.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CEiDQCCiDC5AAQC5AACDCDQCECDAAC4QAAC6iECDQiDCDi5AAQi5AAiCiDQiEiDAAi6g");
	this.shape_16.setTransform(556.1,1065.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CEiDQCDiDC4AAQC6AACCCDQCECDAAC4QAAC6iECDQiCCDi6AAQi4AAiDiDQiEiDAAi6g");
	this.shape_17.setTransform(576.15,1065.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FF00").s().p("Ak8E8QiDiDABi5QgBi4CDiEQCDiDC5ABQC6gBCDCDQCCCEAAC4QAAC5iCCDQiDCDi6AAQi5AAiDiDg");
	this.shape_18.setTransform(596.15,1065.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CEiDQCDiDC4AAQC5AACDCDQCECDAAC4QAAC6iECDQiDCDi5AAQi4AAiDiDQiEiDAAi6g");
	this.shape_19.setTransform(656.25,1065.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FF00").s().p("Ak8E8QiCiDAAi5QAAi4CCiEQCEiDC4ABQC6gBCDCDQCCCEAAC4QAAC5iCCDQiDCDi6AAQi4AAiEiDg");
	this.shape_20.setTransform(756.35,1065.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FF00").s().p("Ak8E8QiCiDAAi5QAAi4CCiEQCDiDC5ABQC5gBCECDQCCCEAAC4QAAC5iCCDQiECDi5AAQi5AAiDiDg");
	this.shape_21.setTransform(856.45,1065.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi4CEiEQCDiDC4ABQC5gBCECDQCDCEAAC4QAAC5iDCDQiECDi5AAQi4AAiDiDg");
	this.shape_22.setTransform(956.55,1065.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi4CEiEQCDiDC4ABQC6gBCCCDQCECEAAC4QAAC5iECDQiCCDi6AAQi4AAiDiDg");
	this.shape_23.setTransform(1016.6,1065.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#006600").ss(2,1,1).p("Am/AAQAAi4CDiDQCEiDC4AAQC5AACDCDQCECDAAC4QAAC6iECDQiDCDi5AAQi4AAiEiDQiDiDAAi6g");
	this.shape_24.setTransform(1076.7,1065.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi4CEiEQCCiDC5ABQC5gBCDCDQCDCEAAC4QAAC5iDCDQiDCDi5AAQi5AAiCiDg");
	this.shape_25.setTransform(1076.7,1065.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC6iECDQiDCDi5AAQi4AAiEiDQiDiDAAi6QAAi4CDiDQCEiDC4AAQC5AACDCDQCECDAAC4g");
	this.shape_26.setTransform(1096.7,1065.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:195.75}},{t:this.shape}]}).to({state:[{t:this.shape_3,p:{x:215.75}},{t:this.shape_2}]},1).to({state:[{t:this.shape_1,p:{x:235.8}},{t:this.shape_4,p:{x:235.8}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5,p:{x:255.8}}]},1).to({state:[{t:this.shape_1,p:{x:275.85}},{t:this.shape_4,p:{x:275.85}}]},1).to({state:[{t:this.shape_7},{t:this.shape_4,p:{x:295.85}}]},1).to({state:[{t:this.shape_8,p:{x:315.85}},{t:this.shape_4,p:{x:315.85}}]},1).to({state:[{t:this.shape_3,p:{x:335.9}},{t:this.shape_9,p:{x:335.9}}]},1).to({state:[{t:this.shape_8,p:{x:355.9}},{t:this.shape_9,p:{x:355.9}}]},1).to({state:[{t:this.shape_3,p:{x:375.95}},{t:this.shape_10,p:{x:375.95}}]},1).to({state:[{t:this.shape_8,p:{x:395.95}},{t:this.shape_10,p:{x:395.95}}]},1).to({state:[{t:this.shape_3,p:{x:416}},{t:this.shape_11,p:{x:416}}]},1).to({state:[{t:this.shape_8,p:{x:436}},{t:this.shape_11,p:{x:436}}]},1).to({state:[{t:this.shape_12},{t:this.shape_5,p:{x:456.05}}]},1).to({state:[{t:this.shape_8,p:{x:476.05}},{t:this.shape_13,p:{x:476.05}}]},1).to({state:[{t:this.shape_14,p:{x:496.05}},{t:this.shape_13,p:{x:496.05}}]},1).to({state:[{t:this.shape_8,p:{x:516.1}},{t:this.shape_4,p:{x:516.1}}]},1).to({state:[{t:this.shape_15,p:{x:536.1}},{t:this.shape_4,p:{x:536.1}}]},1).to({state:[{t:this.shape_1,p:{x:556.1}},{t:this.shape_16,p:{x:556.1}}]},1).to({state:[{t:this.shape_15,p:{x:576.15}},{t:this.shape_17,p:{x:576.15}}]},1).to({state:[{t:this.shape_18,p:{x:596.15}},{t:this.shape_17,p:{x:596.15}}]},1).to({state:[{t:this.shape_14,p:{x:616.2}},{t:this.shape_4,p:{x:616.2}}]},1).to({state:[{t:this.shape_18,p:{x:636.2}},{t:this.shape_4,p:{x:636.2}}]},1).to({state:[{t:this.shape_14,p:{x:656.25}},{t:this.shape_19,p:{x:656.25}}]},1).to({state:[{t:this.shape_18,p:{x:676.25}},{t:this.shape_19,p:{x:676.25}}]},1).to({state:[{t:this.shape_14,p:{x:696.3}},{t:this.shape_9,p:{x:696.3}}]},1).to({state:[{t:this.shape_1,p:{x:716.3}},{t:this.shape_9,p:{x:716.3}}]},1).to({state:[{t:this.shape_15,p:{x:736.35}},{t:this.shape_16,p:{x:736.35}}]},1).to({state:[{t:this.shape_20},{t:this.shape_16,p:{x:756.35}}]},1).to({state:[{t:this.shape_1,p:{x:776.35}},{t:this.shape_16,p:{x:776.35}}]},1).to({state:[{t:this.shape_18,p:{x:796.4}},{t:this.shape_17,p:{x:796.4}}]},1).to({state:[{t:this.shape_1,p:{x:816.4}},{t:this.shape_17,p:{x:816.4}}]},1).to({state:[{t:this.shape_8,p:{x:836.4}},{t:this.shape_17,p:{x:836.4}}]},1).to({state:[{t:this.shape_21},{t:this.shape_4,p:{x:856.45}}]},1).to({state:[{t:this.shape_15,p:{x:876.45}},{t:this.shape_4,p:{x:876.45}}]},1).to({state:[{t:this.shape_1,p:{x:896.5}},{t:this.shape_19,p:{x:896.5}}]},1).to({state:[{t:this.shape_15,p:{x:916.5}},{t:this.shape_19,p:{x:916.5}}]},1).to({state:[{t:this.shape_1,p:{x:936.55}},{t:this.shape_9,p:{x:936.55}}]},1).to({state:[{t:this.shape_22,p:{x:956.55}},{t:this.shape_9,p:{x:956.55}}]},1).to({state:[{t:this.shape_1,p:{x:976.6}},{t:this.shape_16,p:{x:976.6}}]},1).to({state:[{t:this.shape_22,p:{x:996.6}},{t:this.shape_13,p:{x:996.6}}]},1).to({state:[{t:this.shape_23,p:{x:1016.6}},{t:this.shape_13,p:{x:1016.6}}]},1).to({state:[{t:this.shape_15,p:{x:1036.65}},{t:this.shape_4,p:{x:1036.65}}]},1).to({state:[{t:this.shape_15,p:{x:1056.65}},{t:this.shape_4,p:{x:1056.65}}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23,p:{x:1096.7}},{t:this.shape_26}]},1).wait(1));

	// frame_by_frame
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC5iDCDQiDCEi6AAQi5AAiDiEQiDiDAAi5QAAi5CDiCQCDiEC5AAQC6AACDCEQCDCCAAC5g");
	this.shape_27.setTransform(195.25,856.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi4CEiDQCCiEC5AAQC5AACDCEQCECDAAC4QAAC5iECDQiDCEi5AAQi5AAiCiEg");
	this.shape_28.setTransform(195.25,856.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FF00").s().p("Ak8E8QiDiDAAi5QAAi4CDiDQCEiEC4AAQC5AACDCEQCECDAAC4QAAC5iECDQiDCEi5AAQi4AAiEiEg");
	this.shape_29.setTransform(206.25,856.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00FF00").s().p("Ak8E8QiCiDAAi5QAAi4CCiDQCDiEC5AAQC6AACDCEQCCCDAAC4QAAC5iCCDQiDCEi6AAQi5AAiDiEg");
	this.shape_30.setTransform(219.25,856.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC5iECDQiCCEi6AAQi5AAiDiEQiDiDAAi5QAAi5CDiCQCDiEC5AAQC6AACCCEQCECCAAC5g");
	this.shape_31.setTransform(244.25,856.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi4CEiDQCDiEC4AAQC5AACDCEQCECDAAC4QAAC5iECDQiDCEi5AAQi4AAiDiEg");
	this.shape_32.setTransform(277.25,856.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC5iECDQiCCEi6AAQi5AAiCiEQiEiDAAi5QAAi5CEiCQCCiEC5AAQC6AACCCEQCECCAAC5g");
	this.shape_33.setTransform(295.75,856.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC5iECDQiDCEi5AAQi5AAiDiEQiDiDAAi5QAAi5CDiCQCDiEC5AAQC5AACDCEQCECCAAC5g");
	this.shape_34.setTransform(319.85,856.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00FF00").s().p("Ak8E8QiDiDABi5QgBi4CDiDQCEiEC4AAQC6AACCCEQCDCDAAC4QAAC5iDCDQiCCEi6AAQi4AAiEiEg");
	this.shape_35.setTransform(476.35,856.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FF00").s().p("Ak7E8QiEiDABi5QgBi4CEiDQCCiEC5AAQC5AACECEQCDCDgBC4QABC5iDCDQiECEi5AAQi5AAiCiEg");
	this.shape_36.setTransform(498.35,856.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC5iECDQiDCEi5AAQi5AAiCiEQiEiDAAi5QAAi5CEiCQCCiEC5AAQC5AACDCEQCECCAAC5g");
	this.shape_37.setTransform(555.35,856.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FF00").s().p("Ak7E9QiEiDAAi6QAAi5CEiDQCDiCC4AAQC5AACDCCQCECDAAC5QAAC6iECDQiDCCi5AAQi4AAiDiCg");
	this.shape_38.setTransform(637.35,842.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC6iECCQiDCEi5AAQi5AAiCiEQiEiCAAi6QAAi4CEiDQCCiEC5AAQC5AACDCEQCECDAAC4g");
	this.shape_39.setTransform(655.35,822.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi5CEiCQCDiEC4AAQC5AACDCEQCECCAAC5QAAC5iECDQiDCEi5AAQi4AAiDiEg");
	this.shape_40.setTransform(655.35,822.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00FF00").s().p("Ak8E9QiDiDABi6QgBi5CDiDQCEiCC4AAQC6AACCCCQCECDgBC5QABC6iECDQiCCCi6AAQi4AAiEiCg");
	this.shape_41.setTransform(674.35,801.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00FF00").s().p("Ak8E9QiCiDAAi6QAAi5CCiDQCDiDC5ABQC6gBCDCDQCCCDAAC5QAAC6iCCDQiDCCi6AAQi5AAiDiCg");
	this.shape_42.setTransform(694.35,782.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00FF00").s().p("Ak7E9QiEiDAAi6QAAi5CEiDQCCiDC5ABQC5gBCECDQCDCDgBC5QABC6iDCDQiECCi5AAQi5AAiCiCg");
	this.shape_43.setTransform(759.35,782.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FF00").s().p("Ak7E9QiEiEAAi5QAAi5CEiCQCCiEC5AAQC5AACDCEQCECCAAC5QAAC5iECEQiDCDi5gBQi5ABiCiDg");
	this.shape_44.setTransform(779.35,794.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi4CEiEQCDiDC4ABQC5gBCDCDQCECEAAC4QAAC5iECDQiDCDi5AAQi4AAiDiDg");
	this.shape_45.setTransform(799.35,826.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00FF00").s().p("Ak8E8QiCiDAAi5QAAi5CCiCQCDiEC5AAQC6AACDCEQCCCCAAC5QAAC5iCCDQiDCEi6AAQi5AAiDiEg");
	this.shape_46.setTransform(847.35,873.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FF00").s().p("Ak8E8QiDiDABi5QgBi5CDiCQCEiEC4AAQC6AACCCEQCECCgBC5QABC5iECDQiCCEi6AAQi4AAiEiEg");
	this.shape_47.setTransform(953.35,873.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC5iDCDQiDCEi6AAQi4AAiDiEQiDiDAAi5QAAi5CDiCQCDiEC4AAQC6AACDCEQCDCCAAC5g");
	this.shape_48.setTransform(993.35,873.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi5CEiCQCCiEC5AAQC5AACECEQCDCCgBC5QABC5iDCDQiECEi5AAQi5AAiCiEg");
	this.shape_49.setTransform(993.35,873.85);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi5CEiCQCDiEC4AAQC6AACCCEQCECCAAC5QAAC5iECDQiCCEi6AAQi4AAiDiEg");
	this.shape_50.setTransform(1041.35,873.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FF00").s().p("Ak8E8QiDiDAAi5QAAi5CDiCQCEiEC4AAQC5AACDCEQCECCAAC5QAAC5iECDQiDCEi5AAQi4AAiEiEg");
	this.shape_51.setTransform(1060.35,873.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#006600").ss(2,1,1).p("AHAAAQAAC5iDCDQiDCEi6AAQi4AAiDiEQiEiDAAi5QAAi5CEiCQCDiEC4AAQC6AACDCEQCDCCAAC5g");
	this.shape_52.setTransform(1088.35,873.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FF00").s().p("Ak8E8QiDiDABi5QgBi5CDiCQCEiEC4AAQC5AACDCEQCDCCAAC5QAAC5iDCDQiDCEi5AAQi4AAiEiEg");
	this.shape_53.setTransform(1088.35,873.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FF00").s().p("Ak7E8QiEiDAAi5QAAi5CEiCQCCiEC5AAQC5AACDCEQCECCAAC5QAAC5iECDQiDCEi5AAQi5AAiCiEg");
	this.shape_54.setTransform(1130.35,873.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28,p:{x:195.25}},{t:this.shape_27,p:{x:195.25}}]}).to({state:[{t:this.shape_29,p:{x:206.25}},{t:this.shape_27,p:{x:206.25}}]},1).to({state:[{t:this.shape_30,p:{x:219.25}},{t:this.shape_27,p:{x:219.25}}]},1).to({state:[{t:this.shape_30,p:{x:244.25}},{t:this.shape_31,p:{x:244.25}}]},1).to({state:[{t:this.shape_28,p:{x:258.25}},{t:this.shape_31,p:{x:258.25}}]},1).to({state:[{t:this.shape_32,p:{x:277.25}},{t:this.shape_31,p:{x:277.25}}]},1).to({state:[{t:this.shape_30,p:{x:295.75}},{t:this.shape_33}]},1).to({state:[{t:this.shape_30,p:{x:319.85}},{t:this.shape_34,p:{x:319.85}}]},1).to({state:[{t:this.shape_30,p:{x:339.85}},{t:this.shape_34,p:{x:339.85}}]},1).to({state:[{t:this.shape_30,p:{x:364.85}},{t:this.shape_34,p:{x:364.85}}]},1).to({state:[{t:this.shape_29,p:{x:380.85}},{t:this.shape_34,p:{x:380.85}}]},1).to({state:[{t:this.shape_32,p:{x:409.35}},{t:this.shape_34,p:{x:409.35}}]},1).to({state:[{t:this.shape_28,p:{x:428.35}},{t:this.shape_34,p:{x:428.35}}]},1).to({state:[{t:this.shape_28,p:{x:455.35}},{t:this.shape_34,p:{x:455.35}}]},1).to({state:[{t:this.shape_35,p:{x:476.35}},{t:this.shape_34,p:{x:476.35}}]},1).to({state:[{t:this.shape_36,p:{x:498.35}},{t:this.shape_34,p:{x:498.35}}]},1).to({state:[{t:this.shape_36,p:{x:516.35}},{t:this.shape_34,p:{x:516.35}}]},1).to({state:[{t:this.shape_28,p:{x:536.35}},{t:this.shape_34,p:{x:536.35}}]},1).to({state:[{t:this.shape_32,p:{x:555.35}},{t:this.shape_37,p:{x:555.35,y:856.85}}]},1).to({state:[{t:this.shape_35,p:{x:584.35}},{t:this.shape_37,p:{x:584.35,y:856.85}}]},1).to({state:[{t:this.shape_32,p:{x:600.35}},{t:this.shape_37,p:{x:600.35,y:856.85}}]},1).to({state:[{t:this.shape_32,p:{x:625.35}},{t:this.shape_37,p:{x:625.35,y:856.85}}]},1).to({state:[{t:this.shape_38,p:{x:637.35,y:842.85}},{t:this.shape_37,p:{x:637.35,y:842.85}}]},1).to({state:[{t:this.shape_40,p:{x:655.35,y:822.9}},{t:this.shape_39,p:{x:655.35,y:822.9}}]},1).to({state:[{t:this.shape_41},{t:this.shape_39,p:{x:674.35,y:801.9}}]},1).to({state:[{t:this.shape_42},{t:this.shape_39,p:{x:694.35,y:782.9}}]},1).to({state:[{t:this.shape_38,p:{x:724.35,y:766.9}},{t:this.shape_39,p:{x:724.35,y:766.9}}]},1).to({state:[{t:this.shape_38,p:{x:745.35,y:766.9}},{t:this.shape_39,p:{x:745.35,y:766.9}}]},1).to({state:[{t:this.shape_43},{t:this.shape_39,p:{x:759.35,y:782.9}}]},1).to({state:[{t:this.shape_44},{t:this.shape_39,p:{x:779.35,y:794.9}}]},1).to({state:[{t:this.shape_45},{t:this.shape_39,p:{x:799.35,y:826.9}}]},1).to({state:[{t:this.shape_38,p:{x:799.35,y:852.85}},{t:this.shape_37,p:{x:799.35,y:852.85}}]},1).to({state:[{t:this.shape_40,p:{x:799.35,y:873.85}},{t:this.shape_37,p:{x:799.35,y:873.85}}]},1).to({state:[{t:this.shape_40,p:{x:823.35,y:873.85}},{t:this.shape_37,p:{x:823.35,y:873.85}}]},1).to({state:[{t:this.shape_46,p:{x:847.35}},{t:this.shape_37,p:{x:847.35,y:873.85}}]},1).to({state:[{t:this.shape_46,p:{x:874.35}},{t:this.shape_37,p:{x:874.35,y:873.85}}]},1).to({state:[{t:this.shape_40,p:{x:898.35,y:873.85}},{t:this.shape_37,p:{x:898.35,y:873.85}}]},1).to({state:[{t:this.shape_40,p:{x:925.35,y:873.85}},{t:this.shape_37,p:{x:925.35,y:873.85}}]},1).to({state:[{t:this.shape_47,p:{x:953.35}},{t:this.shape_37,p:{x:953.35,y:873.85}}]},1).to({state:[{t:this.shape_47,p:{x:971.35}},{t:this.shape_37,p:{x:971.35,y:873.85}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48,p:{x:993.35}}]},1).to({state:[{t:this.shape_50},{t:this.shape_48,p:{x:1041.35}}]},1).to({state:[{t:this.shape_51},{t:this.shape_48,p:{x:1060.35}}]},1).to({state:[{t:this.shape_53},{t:this.shape_52,p:{x:1088.35}}]},1).to({state:[{t:this.shape_54},{t:this.shape_52,p:{x:1130.35}}]},1).to({state:[{t:this.shape_54},{t:this.shape_52,p:{x:1130.35}}]},1).wait(1));

	// main_layer
	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(61,1154.25,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(61,934.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(61,729.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(61,546,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_2();
	this.instance_5.setTransform(61,385.95,0.5,0.5);

	this.instance_6 = new lib.Star();
	this.instance_6.setTransform(151,600);

	this.textInput = new lib.InputText();
	this.textInput.name = "textInput";
	this.textInput.setTransform(216.5,302.6,1,1,0,0,0,155.5,50.9);

	this.instance_7 = new lib.CachedBmp_1();
	this.instance_7.setTransform(149.5,441.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.textInput},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(46));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(974.1,1001.7,252.89999999999998,393.39999999999986);
// library properties:
lib.properties = {
	id: '1D58E7BEA11086448D7D6A4F6D02F578',
	width: 1920,
	height: 1500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HTML ANIMATION_atlas_1.png", id:"HTML ANIMATION_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1D58E7BEA11086448D7D6A4F6D02F578'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;