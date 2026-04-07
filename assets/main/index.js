System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,o,n,r,l,s,a,c,p,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,s=e.SpriteFrame,a=e.CCFloat,c=e.Collider2D,p=e.Contact2DType,u=e.Sprite,h=e.Component}],execute:function(){var v,d,g,f,C,m,y;r._RF.push({},"08ca1uAuFRHyK/QkFptd1F9","Bird",void 0);var B=l.ccclass,T=l.property;e("Bird",(v=B("bird"),d=T({type:[s]}),g=T({type:[a]}),v((m=t((C=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,o(t,"spriteBird",m,n(t)),o(t,"scaleList",y,n(t)),t.listToRemove=[],t.level=0,t}i(t,e);var r=t.prototype;return r.start=function(){var e=this.getComponent(c);e&&(e.on(p.BEGIN_CONTACT,this.onBeginContact,this),e.on(p.END_CONTACT,this.onEndContact,this))},r.onBeginContact=function(e,i,o){e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelUp(),this.listToRemove.push(i.node)),console.log("onBeginContact"),console.log(e),console.log(i),console.log(o)},r.onEndContact=function(e,t,i){},r.levelUp=function(){this.level+1<this.spriteBird.length&&(this.level++,this.getComponent(u).spriteFrame=this.spriteBird[this.level%this.spriteBird.length],this.level<this.scaleList.length&&this.node.scale.multiplyScalar(this.scaleList[this.level]))},r.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(h)).prototype,"spriteBird",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=t(C.prototype,"scaleList",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=C))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,a,c,s,u,l,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,s=t.input,u=t.Input,l=t.instantiate,p=t.Component}],execute:function(){var f,d,h,b,y;i._RF.push({},"45ed5gM2wdHtID40+bKsA0H","GameController",void 0);var g=a.ccclass,v=a.property;t("Background",(f=g("Background"),d=v({type:c}),f((y=e((b=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",y,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){s.on(u.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){var e=l(this.birdPrefab),r=t.getUILocation();e.setParent(this.node),e.setWorldPosition(r.x,r.y,0)},i.update=function(t){},e}(p)).prototype,"birdPrefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=b))||h));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});