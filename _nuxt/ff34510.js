(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{437:function(e,t,r){"use strict";r.r(t);r(22),r(37),r(27),r(13),r(38),r(39);var n,o,c,l,d,f,h,m,v,x,R,w=r(70),y=r(11);r(64),r(71),r(264),r(6),r(26),r(28),r(263),r(134),r(21),r(36),r(40),r(57);function T(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}t.default={name:"IndexPage",data:function(){return{sendDataConfig:{headers:{"Content-Type":"application/json",Authorization:"Token 11e64fc80aacaca0e8dbc66e0680ca38cb8dce5d"}},actionTitles:{coloriseImg:"Colorise Images",coloriseVideo:"Colorise Videos",upscaleImg:"Upscale Images",scanTexts:"Scan Texts For Similarity"},operationHandlers:{},currentAction:"coloriseImg",currentSectionTitle:"",uploadSpinnerIsActive:!1,videoProgress:0,fileMimeTypes:{image:"colorised-image.png",video:"colorised-video.mp4"},scanTextData:{firstText:"",secondText:""},scanTextResult:-1,results:{imgResult:[],videoResult:[]}}},methods:{setSimilarityPercent:function(e){var t=100*Number(e);t=t.toFixed(0),this.scanTextResult=t},resetResults:function(){this.results={imgResult:[],videoResult:[],textResult:[]}},setOperationHandlers:function(){this.operationHandlers.coloriseImg=this.coloriseImgHandler,this.operationHandlers.upscaleImg=this.upscaleImgHandler,this.operationHandlers.coloriseVideo=this.coloriseVideoHandler},showErrorToast:function(){this.$toast.add({severity:"error",summary:"Error",detail:"An Error Ocurred !"})},changeToActionTitle:function(e){this.currentSectionTitle=this.actionTitles[e]},changeCurrentAction:function(e){this.currentAction=e},onActionButtonClick:function(e){this.resetResults(),this.changeToActionTitle(e),this.changeCurrentAction(e)},activateLoadingSpinner:function(){this.uploadSpinnerIsActive=!0},deactivateLoadingSpinner:function(){this.uploadSpinnerIsActive=!1},downloadFile:(R=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.$get(t,{responseType:"arraybuffer"});case 2:n=e.sent,console.log(this.fileMimeTypes[r]),o=window.URL.createObjectURL(new Blob([n])),(link=document.createElement("a")).href=o,link.setAttribute("download",this.fileMimeTypes[r]),document.body.appendChild(link),link.click(),document.body.removeChild(link);case 11:case"end":return e.stop()}}),e,this)}))),function(e,t){return R.apply(this,arguments)}),comvertImageToDataURL:(x=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),r=[],n=T(t),e.prev=3,c=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.value,e.next=3,new Promise((function(e,n){var o=new FileReader;o.onload=function(){r.push(o.result),e()},o.readAsDataURL(t)}));case 3:case"end":return e.stop()}}),e)})),n.s();case 6:if((o=n.n()).done){e.next=10;break}return e.delegateYield(c(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),n.e(e.t1);case 15:return e.prev=15,n.f(),e.finish(15);case 18:return console.log(r),e.abrupt("return",r);case 20:case"end":return e.stop()}}),e,null,[[3,12,15,18]])}))),function(e){return x.apply(this,arguments)}),uploadHandler:function(e){console.log(e),this.operationHandlers[this.currentAction](e)},upscaleImgHandler:(v=Object(y.a)(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.activateLoadingSpinner(),e.next=3,this.comvertImageToDataURL(t.files);case 3:e.sent.forEach(function(){var e=Object(y.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getImgUpscalePredictionData(t);case 2:n=e.sent,r.sendDataRecursive(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)}),getImgUpscalePredictionData:(m=Object(y.a)(regeneratorRuntime.mark((function e(t){var data,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={input:{image:t,task_type:"Real-World Image Super-Resolution-Large",noise:15,jpeg:40},version:"660d922d33153019e8c263a3bba265de882e7f4f70396546b6c9c8f9d47a021a"},e.next=3,this.$axios.$post("replicateApi",JSON.stringify(data),this.sendDataConfig);case 3:return r=e.sent,n=r,e.abrupt("return",n.id);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)}),coloriseImgHandler:(h=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.activateLoadingSpinner(),e.next=3,this.comvertImageToDataURL(t.files);case 3:r=e.sent,console.log(r),r.forEach(function(){var e=Object(y.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getImgColorisePredictionData(t);case 2:r=e.sent,n.sendDataRecursive(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)}),getImgColorisePredictionData:(f=Object(y.a)(regeneratorRuntime.mark((function e(t){var data,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={input:{image:t,mode:"Real Gray Colorization"},version:"9451bfbf652b21a9bccc741e5c7046540faa5586cfa3aa45abc7dbb46151a4f7"},e.next=3,this.$axios.$post("replicateApi",JSON.stringify(data),this.sendDataConfig);case 3:return r=e.sent,n=r,e.abrupt("return",n.id);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)}),resetVideoLoadingPercent:function(){this.videoProgress=0},setVideoLoadingPercent:function(e){this.videoProgress=e},getVideoProgress:function(e){var t=e.lastIndexOf("\n"),r=e.slice(t+1),n=r.lastIndexOf("|"),o=r.slice(n+2),c=o.indexOf("%"),progress=o.slice(0,c);return 0==Number(progress)||Number(progress)?Math.floor(progress):100},convertVideoToDataUrl:(d=Object(y.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var n=new FileReader;n.onload=function(){e(n.result)},n.readAsDataURL(t)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)}),coloriseVideoHandler:(l=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.activateLoadingSpinner(),e.next=3,this.convertVideoToDataUrl(t);case 3:return r=e.sent,e.next=6,this.getVideoColorisePredictionData(r);case 6:n=e.sent,this.sendDataRecursive(n);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)}),getVideoColorisePredictionData:(c=Object(y.a)(regeneratorRuntime.mark((function e(t){var data,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={input:{input_video:t,render_factor:35},version:"8f1189b476fcb54cfbe1d07d97b025c571a2ce4e9a7a9558640c78647576e16f"},e.next=3,this.$axios.$post("replicateApi",JSON.stringify(data),this.sendDataConfig);case 3:return r=e.sent,n=r,e.abrupt("return",n.id);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)}),sendDataRecursive:(o=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="replicateApi/"+"".concat(t),e.next=4,this.$axios.$get(r,this.sendDataConfig);case 4:if(n=e.sent,"coloriseVideo"==this.currentAction&&n.logs&&(this.videoProgress=this.getVideoProgress(n.logs)),"failed"!=n.status){e.next=9;break}return this.showErrorToast(),e.abrupt("return");case 9:if("succeeded"!=n.status||"coloriseImg"!=this.currentAction){e.next=14;break}return console.log(n),this.results.imgResult=[].concat(Object(w.a)(this.results.imgResult),Object(w.a)(n.output)),this.deactivateLoadingSpinner(),e.abrupt("return");case 14:if("succeeded"!=n.status||"upscaleImg"!=this.currentAction){e.next=18;break}return this.results.imgResult=[n.output],this.deactivateLoadingSpinner(),e.abrupt("return");case 18:if("succeeded"!=n.status||"coloriseVideo"!=this.currentAction){e.next=23;break}return this.results.videoResult=[n.output],this.deactivateLoadingSpinner(),this.resetVideoLoadingPercent(),e.abrupt("return");case 23:"succeeded"!=n.status&&setTimeout(this.sendDataRecursive,1e3,t),e.next=31;break;case 26:e.prev=26,e.t0=e.catch(0),this.showErrorToast(),this.deactivateLoadingSpinner(),this.resetVideoLoadingPercent();case 31:case"end":return e.stop()}}),e,this,[[0,26]])}))),function(e){return o.apply(this,arguments)}),scanText:(n=Object(y.a)(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Content-Type":"application/json",Authorization:"Bearer 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"}},r={inputs:{source_sentence:this.scanTextData.firstText,sentences:[this.scanTextData.secondText,this.scanTextData.secondText]}},e.next=4,this.$axios.$post("https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",r,t);case 4:n=e.sent,this.setSimilarityPercent(n[0]);case 6:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},created:function(){this.currentSectionTitle=this.actionTitles.coloriseImg,this.setOperationHandlers()}}}}]);