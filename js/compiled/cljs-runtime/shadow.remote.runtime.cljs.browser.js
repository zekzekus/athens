goog.provide('shadow.remote.runtime.cljs.browser');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('shadow.cljs.devtools.client.env');
goog.require('goog.net.XhrIo');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.shared');
goog.require('shadow.remote.runtime.cljs.env');
goog.require('shadow.remote.runtime.cljs.js_builtins');
goog.require('shadow.remote.runtime.tap_support');
goog.require('shadow.remote.runtime.obj_support');
goog.require('shadow.remote.runtime.eval_support');
shadow.remote.runtime.cljs.browser.transit_read = (function shadow$remote$runtime$cljs$browser$transit_read(data){
var t = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(t,data);
});
shadow.remote.runtime.cljs.browser.transit_str = (function shadow$remote$runtime$cljs$browser$transit_str(obj){
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write(w,obj);
});
shadow.remote.runtime.cljs.browser.abort_BANG_ = (function shadow$remote$runtime$cljs$browser$abort_BANG_(p__68107,action,ex){
var map__68112 = p__68107;
var map__68112__$1 = (((((!((map__68112 == null))))?(((((map__68112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68112):map__68112);
var state = map__68112__$1;
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68112__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__68118 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"failed","failed",-1397425762),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"ex","ex",-1413771341),ex,new cljs.core.Keyword(null,"ex-action","ex-action",672251553),action], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__68118) : callback.call(null,G__68118));
});
shadow.remote.runtime.cljs.browser.interpret_action = (function shadow$remote$runtime$cljs$browser$interpret_action(p__68119,p__68120){
var map__68121 = p__68119;
var map__68121__$1 = (((((!((map__68121 == null))))?(((((map__68121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68121):map__68121);
var state = map__68121__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68121__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68122 = p__68120;
var map__68122__$1 = (((((!((map__68122 == null))))?(((((map__68122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68122):map__68122);
var action = map__68122__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68122__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__68125 = type;
var G__68125__$1 = (((G__68125 instanceof cljs.core.Keyword))?G__68125.fqn:null);
switch (G__68125__$1) {
case "repl/invoke":
var map__68126 = action;
var map__68126__$1 = (((((!((map__68126 == null))))?(((((map__68126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68126):map__68126);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68126__$1,new cljs.core.Keyword(null,"js","js",1768080579));
try{var res = runtime.eval_js(js);
var G__68129 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"eval-results","eval-results",553789722),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),res,new cljs.core.Keyword(null,"action","action",-811238024),action], null));
return (shadow.remote.runtime.cljs.browser.interpret_actions.cljs$core$IFn$_invoke$arity$1 ? shadow.remote.runtime.cljs.browser.interpret_actions.cljs$core$IFn$_invoke$arity$1(G__68129) : shadow.remote.runtime.cljs.browser.interpret_actions.call(null,G__68129));
}catch (e68128){var ex = e68128;
return shadow.remote.runtime.cljs.browser.abort_BANG_(state,action,ex);
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68125__$1)].join('')));

}
});
shadow.remote.runtime.cljs.browser.interpret_actions = (function shadow$remote$runtime$cljs$browser$interpret_actions(p__68130){
var map__68131 = p__68130;
var map__68131__$1 = (((((!((map__68131 == null))))?(((((map__68131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68131):map__68131);
var state = map__68131__$1;
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68131__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
if(cljs.core.empty_QMARK_(actions)){
var fexpr__68133 = new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(state);
return (fexpr__68133.cljs$core$IFn$_invoke$arity$1 ? fexpr__68133.cljs$core$IFn$_invoke$arity$1(state) : fexpr__68133.call(null,state));
} else {
var map__68134 = cljs.core.first(actions);
var map__68134__$1 = (((((!((map__68134 == null))))?(((((map__68134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68134):map__68134);
var action = map__68134__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68134__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.rest);
return shadow.remote.runtime.cljs.browser.interpret_action(state__$1,action);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {shadow.remote.runtime.api.IRuntime}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.remote.runtime.cljs.browser.BrowserRuntime = (function (ws,state_ref,__meta,__extmap,__hash){
this.ws = ws;
this.state_ref = state_ref;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.eval_js = (function (code){
var self__ = this;
var this$ = this;
return (0,eval)(code);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.eval_cljs = (function (msg,callback){
var self__ = this;
var this$ = this;
var G__68141 = [shadow.cljs.devtools.client.env.get_url_base(),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__68142 = (function (res){
var req = this;
var map__68148 = shadow.remote.runtime.cljs.browser.transit_read(req.getResponseText());
var map__68148__$1 = (((((!((map__68148 == null))))?(((((map__68148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68148):map__68148);
var result = map__68148__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68148__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("repl","actions","repl/actions",-809718877),type)))){
var G__68151 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"failed","failed",-1397425762),true,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__68151) : callback.call(null,G__68151));
} else {
return shadow.remote.runtime.cljs.browser.interpret_actions(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),this$,new cljs.core.Keyword(null,"callback","callback",-705136228),callback,new cljs.core.Keyword(null,"input","input",556931961),msg,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"eval-results","eval-results",553789722),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null));
}
});
var G__68143 = "POST";
var G__68144 = shadow.remote.runtime.cljs.browser.transit_str(msg);
var G__68145 = ({"content-type": "application/transit+json; charset=utf-8"});
return goog.net.XhrIo.send(G__68141,G__68142,G__68143,G__68144,G__68145);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k68137,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__68152 = k68137;
var G__68152__$1 = (((G__68152 instanceof cljs.core.Keyword))?G__68152.fqn:null);
switch (G__68152__$1) {
case "ws":
return self__.ws;

break;
case "state-ref":
return self__.state_ref;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68137,else__4442__auto__);

}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__68153){
var vec__68154 = p__68153;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68154,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68154,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.remote.runtime.cljs.browser.BrowserRuntime{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws","ws",86841443),self__.ws],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),self__.state_ref],null))], null),self__.__extmap));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68136){
var self__ = this;
var G__68136__$1 = this;
return (new cljs.core.RecordIter((0),G__68136__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"state-ref","state-ref",2127874952)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,self__.state_ref,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__68157 = (function (coll__4436__auto__){
return (725844968 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__68157(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68138,other68139){
var self__ = this;
var this68138__$1 = this;
return (((!((other68139 == null)))) && ((this68138__$1.constructor === other68139.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68138__$1.ws,other68139.ws)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68138__$1.state_ref,other68139.state_ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68138__$1.__extmap,other68139.__extmap)));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.shadow$remote$runtime$api$IRuntime$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2 = (function (runtime,msg){
var self__ = this;
var runtime__$1 = this;
return self__.ws.send(shadow.remote.runtime.cljs.browser.transit_str(msg));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.shadow$remote$runtime$api$IRuntime$add_extension$arity$3 = (function (runtime,key,spec){
var self__ = this;
var runtime__$1 = this;
return shadow.remote.runtime.shared.add_extension(runtime__$1,key,spec);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.shadow$remote$runtime$api$IRuntime$del_extension$arity$2 = (function (runtime,key){
var self__ = this;
var runtime__$1 = this;
return shadow.remote.runtime.shared.del_extension(runtime__$1,key);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,self__.state_ref,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__68136){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__68158 = cljs.core.keyword_identical_QMARK_;
var expr__68159 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__68161 = new cljs.core.Keyword(null,"ws","ws",86841443);
var G__68162 = expr__68159;
return (pred__68158.cljs$core$IFn$_invoke$arity$2 ? pred__68158.cljs$core$IFn$_invoke$arity$2(G__68161,G__68162) : pred__68158.call(null,G__68161,G__68162));
})())){
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(G__68136,self__.state_ref,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__68163 = new cljs.core.Keyword(null,"state-ref","state-ref",2127874952);
var G__68164 = expr__68159;
return (pred__68158.cljs$core$IFn$_invoke$arity$2 ? pred__68158.cljs$core$IFn$_invoke$arity$2(G__68163,G__68164) : pred__68158.call(null,G__68163,G__68164));
})())){
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,G__68136,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,self__.state_ref,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__68136),null));
}
}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws","ws",86841443),self__.ws,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),self__.state_ref,null))], null),self__.__extmap));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__68136){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(self__.ws,self__.state_ref,G__68136,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws","ws",1727372970,null),new cljs.core.Symbol(null,"state-ref","state-ref",-526560817,null)], null);
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.cljs$lang$type = true);

(shadow.remote.runtime.cljs.browser.BrowserRuntime.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.remote.runtime.cljs.browser/BrowserRuntime",null,(1),null));
}));

(shadow.remote.runtime.cljs.browser.BrowserRuntime.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.remote.runtime.cljs.browser/BrowserRuntime");
}));

/**
 * Positional factory function for shadow.remote.runtime.cljs.browser/BrowserRuntime.
 */
shadow.remote.runtime.cljs.browser.__GT_BrowserRuntime = (function shadow$remote$runtime$cljs$browser$__GT_BrowserRuntime(ws,state_ref){
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(ws,state_ref,null,null,null));
});

/**
 * Factory function for shadow.remote.runtime.cljs.browser/BrowserRuntime, taking a map of keywords to field values.
 */
shadow.remote.runtime.cljs.browser.map__GT_BrowserRuntime = (function shadow$remote$runtime$cljs$browser$map__GT_BrowserRuntime(G__68140){
var extmap__4478__auto__ = (function (){var G__68165 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68140,new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state-ref","state-ref",2127874952)], 0));
if(cljs.core.record_QMARK_(G__68140)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68165);
} else {
return G__68165;
}
})();
return (new shadow.remote.runtime.cljs.browser.BrowserRuntime(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(G__68140),new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(G__68140),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.remote.runtime.cljs.browser.start = (function shadow$remote$runtime$cljs$browser$start(){
var temp__5737__auto__ = cljs.core.deref(shadow.remote.runtime.cljs.env.runtime_ref);
if((temp__5737__auto__ == null)){
var ws_url = [shadow.cljs.devtools.client.env.get_ws_url_base(),"/api/runtime"].join('');
var socket = (new WebSocket(ws_url));
var state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var runtime = (function (){var G__68166 = (new shadow.remote.runtime.cljs.browser.BrowserRuntime(socket,state_ref,null,null,null));
shadow.remote.runtime.shared.add_defaults(G__68166);

return G__68166;
})();
var obj_support = shadow.remote.runtime.obj_support.start(runtime);
var tap_support = shadow.remote.runtime.tap_support.start(runtime,obj_support);
var eval_support = shadow.remote.runtime.eval_support.start(runtime,obj_support);
var stop = (function (){
shadow.remote.runtime.tap_support.stop(tap_support);

shadow.remote.runtime.obj_support.stop(obj_support);

shadow.remote.runtime.eval_support.stop(eval_support);

return socket.close();
});
cljs.core.reset_BANG_(shadow.remote.runtime.cljs.env.runtime_ref,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-support","tap-support",80346439),tap_support,new cljs.core.Keyword(null,"eval-support","eval-support",-1581799533),eval_support,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop], null));

socket.addEventListener("message",(function (e){
return shadow.remote.runtime.shared.process(runtime,shadow.remote.runtime.cljs.browser.transit_read(e.data));
}));

socket.addEventListener("open",(function (e){
return null;
}));

socket.addEventListener("close",(function (e){
return stop();
}));

return socket.addEventListener("error",(function (e){
console.warn("tap-socket error",e);

return stop();
}));
} else {
var map__68167 = temp__5737__auto__;
var map__68167__$1 = (((((!((map__68167 == null))))?(((((map__68167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68167):map__68167);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68167__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
(stop.cljs$core$IFn$_invoke$arity$0 ? stop.cljs$core$IFn$_invoke$arity$0() : stop.call(null));

cljs.core.reset_BANG_(shadow.remote.runtime.cljs.env.runtime_ref,null);

return setTimeout(shadow.remote.runtime.cljs.browser.start,(10));
}
});
shadow.remote.runtime.cljs.browser.start();

//# sourceMappingURL=shadow.remote.runtime.cljs.browser.js.map