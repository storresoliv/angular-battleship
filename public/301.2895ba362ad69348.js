"use strict";(self.webpackChunkbattleship=self.webpackChunkbattleship||[]).push([[301],{301:(at,P,u)=>{u.r(P),u.d(P,{BattleshipModule:()=>nt});var d=u(808),b=u(342),f=u(340);class a{static error(s){f.N.logLevel>0&&console.error(`:::LOGGER:::ERROR:: ${s}`)}static warn(s){f.N.logLevel>1&&console.warn(`:::LOGGER:::WARN:: ${s}`)}static info(s){f.N.logLevel>2&&console.log(`:::LOGGER:::INFO:: ${s}`)}static debug(s){f.N.logLevel>3&&console.log(`:::LOGGER:::DEBUG:: ${s}`)}}var o=u(223),p=(()=>{return(e=p||(p={})).CLEAN="clean",e.HIT="hit",e.DESTROYED="destroyed",e.FAIL="fail",p;var e})(),l=(()=>{return(e=l||(l={})).RIGHT="right",e.LEFT="left",e.UP="up",e.DOWN="down",l;var e})();class m{toString(){let s="";try{s=JSON.stringify(this)}catch(t){this.throwError(`error to try transform ${this.constructor.name} to string`)}return s}throwError(s){throw new Error(`[${this.constructor.name}]: ${s}`)}}class N extends m{constructor(s){super(),this._position=s,this._state=p.CLEAN,this._isShip=!1}get isShip(){return this._isShip}get state(){return this._state}get position(){return this._position}setState(s){this._state=s}setShip(){this._isShip=!0}}class k extends m{constructor(s,t){super(),this.x=s,this.y=t}}class J extends m{constructor(s=0){super(),this._positions=[],this._size=s,this._hits=0}get size(){return this._size?this._size:this._positions.length}get positions(){return this._positions}get hits(){return this._hits}get isDestroyed(){return this._hits===this.size}build(s){0===s.length&&this.throwError("positions can not be empty."),this._size>0&&this._size!==s.length&&this.throwError(`positions length should be ${this._size} instead ${s.length}`),this._positions.length>0&&this.throwError("this ship is already builded."),this._positions=s}hit(){this._hits++}}class L extends m{constructor(s){super(),this._position=s}get position(){return this._position}}class c{static createPosition(s,t){return new k(s,t)}static createShip(s){return new J(s)}static createShot(s){return new L(s)}static createCellBoard(s){return new N(s)}static createGameBoard(s,t){return new Y(s,t)}static addPosition(s,t){let i;switch(t){case l.RIGHT:i=c.createPosition(s.x+1,s.y);break;case l.LEFT:i=c.createPosition(s.x-1,s.y);break;case l.UP:i=c.createPosition(s.x,s.y+1);break;case l.DOWN:i=c.createPosition(s.x,s.y-1);break;default:i=s}return i}}const y=e=>{let s=Math.floor(Math.random()*e)-1;return s>=0?s:0},x=[l.RIGHT,l.LEFT,l.DOWN,l.UP];class Y extends m{constructor(s,t){super(),this._dimension=s,this._unBuildedShips=t,this._board=[],this._ships=[],this.build()}get dimension(){return this._dimension}get board(){return this._board}get ships(){return this._ships}build(){this._board=this.createGameBoard(),this.buildShips(this._board)}createGameBoard(){let s,t=[];for(let i=0;i<this._dimension;i++){s=[];for(let r=0;r<this._dimension;r++){let n=c.createPosition(i,r),g=c.createCellBoard(n);s.push(g)}t.push(s)}return t}buildShips(s){const t=i=>{let r=this.createShipPositions(i.size,s);return i.build(r),s=this.insertShipOnBoard(i,s),i};this._ships=this._unBuildedShips.map(i=>t(i))}createShipPositions(s,t){return 1===s?[this.createEmptyPosition(t)]:this.findPositions(s,t)}findPositions(s,t,i=0){1e3===i&&this.throwError("can create position for this ship."),i++;let I,_,r=this.createEmptyPosition(t),n=[r],g=r,O=s,E=x.length,A=0,v=y(x.length),G=1,M=!1,Z=!1;for(;!M;){let F=!1;I=x[v],_=c.addPosition(g,I),g.toString()!==_.toString()&&(F=this.isEmptyPosition(_,t)),F?(g=_,n.push(_),G++):(n=[r],g=r,G=1,A++,v++),v>E&&(v=0),A===E&&(Z=!0,M=!0),G===O&&(M=!0)}return Z?this.findPositions(s,t,i):n}createEmptyPosition(s){let t=this.createRandomPosition();return this.isEmptyPosition(t,s)?t:this.createEmptyPosition(s)}createRandomPosition(){let s=y(this._dimension),t=y(this._dimension);return c.createPosition(s,t)}isEmptyPosition(s,t){try{let i=t[s.x][s.y],{isShip:r}=i;return!r}catch(i){return!1}}insertShipOnBoard(s,t){return s.positions.forEach(i=>{let r=t[i.x][i.y];r.setShip(),t[i.x][i.y]=r}),t}}let T=(()=>{class e{constructor(){}createShip(t){return c.createShip(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var z=u(135),$=u(579);let w=(()=>{class e{constructor(){this._gameboard=new z.X(c.createGameBoard(0,[])),this._shots=0,this._playAgain=new $.x}playAgain(){this._playAgain.next()}playAgainEvent(){return this._playAgain}getShots(){return this._shots}setShots(t){this._shots=t}getGameboard(){return this._gameboard}createGameboard(t,i){return c.createGameBoard(t,i)}loadGameboard(t){this._gameboard.next(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var S=(()=>{return(e=S||(S={})).DIMENSION="dimension",e.SHOTS="shots",S;var e})();let C=(()=>{class e{constructor(){}setLocal(t,i){let r=this.encrypt(i);localStorage.setItem(t,r)}setSession(t,i){if(a.debug(`${i}`),"string"==typeof i){let r=this.encrypt(i);sessionStorage.setItem(t,r)}}getLocal(t){let i=localStorage.getItem(t)||"";return this.decrypt(i)}getSession(t){a.debug(`${t}`);let i=sessionStorage.getItem(t)||"";return this.decrypt(i)}clearLocal(){localStorage.clear()}clearSession(){sessionStorage.clear()}encrypt(t){return btoa(t)}decrypt(t){return atob(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),B=(()=>{class e extends m{constructor(t){super(),this.storageService=t}getShots(){let t=this.storageService.getSession(S.SHOTS),i=0;try{i=JSON.parse(t)}catch(r){this.throwError("Error al tratar de transformar los tiros.")}return i}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(C))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),j=(()=>{class e{constructor(t,i,r){this.shipService=t,this.gameboardService=i,this.shotsService=r}ngOnInit(){this.listenPlayAgain()}listenPlayAgain(){this.gameboardService.playAgainEvent().subscribe(()=>{this.buildGame()})}buildGame(){a.debug("building..."),a.debug("creating ships...");let t=this.createShips();a.debug("creating gameboard...");let i=this.createGameboard(f.N.dimension,t),r=this.getShots();a.debug(`getting shots ${r}`),a.debug("load gameboard..."),this.gameboardService.setShots(r),this.gameboardService.loadGameboard(i)}createShips(){return[this.shipService.createShip(4),this.shipService.createShip(3),this.shipService.createShip(3),this.shipService.createShip(2),this.shipService.createShip(2),this.shipService.createShip(2),this.shipService.createShip(1),this.shipService.createShip(1),this.shipService.createShip(1),this.shipService.createShip(1)]}createGameboard(t,i){return this.gameboardService.createGameboard(t,i)}getShots(){return this.shotsService.getShots()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(T),o.Y36(w),o.Y36(B))},e.\u0275cmp=o.Xpm({type:e,selectors:[["bts-battleship"]],decls:2,vars:0,consts:[[1,"p-12"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0),o._UZ(1,"router-outlet"),o.qZA())},directives:[b.lC],styles:[""]}),e})();const U=function(e){return["gameboard__cell",e]};function D(e,s){if(1&e){const t=o.EpF();o.TgZ(0,"li",11),o.NdJ("click",function(){const n=o.CHM(t).index,g=o.oxw().index;return o.oxw(2).fireShot(g,n)}),o.qZA()}2&e&&o.Q6J("ngClass",o.VKq(1,U,"gameboard__cell--"+s.$implicit.state))}function H(e,s){if(1&e&&(o.TgZ(0,"ul",9),o.YNc(1,D,1,3,"li",10),o.qZA()),2&e){const t=s.$implicit;o.xp6(1),o.Q6J("ngForOf",t)}}function q(e,s){if(1&e&&(o.TgZ(0,"section",7),o.YNc(1,H,2,1,"ul",8),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngForOf",t.getBoard())}}function Q(e,s){if(1&e&&(o.TgZ(0,"div",12)(1,"div",13)(2,"p"),o._uU(3),o.qZA(),o.TgZ(4,"p"),o._uU(5),o.qZA(),o.TgZ(6,"p"),o._uU(7),o.qZA(),o.TgZ(8,"p"),o._uU(9),o.qZA()()()),2&e){const t=o.oxw();o.xp6(3),o.hij("Dimension: ",t.gameboard.dimension,""),o.xp6(2),o.hij("Barcos: ",t.gameboard.ships.length,""),o.xp6(2),o.hij("Barcos hundidos: ",t.shipsDestroyed,""),o.xp6(2),o.hij("Turnos: ",t.shots<0?"infinitos":t.shots,"")}}function X(e,s){if(1&e){const t=o.EpF();o.TgZ(0,"div",14)(1,"p",15),o._uU(2,"Game Over"),o.qZA(),o.TgZ(3,"button",16),o.NdJ("click",function(){return o.CHM(t),o.oxw().restart()}),o._uU(4," Intentar de nuevo "),o.qZA()()}}let W=(()=>{class e{constructor(t,i){this.gameboardService=t,this.router=i,this._shots=-1,this._shipsDestroyed=0}get shipsDestroyed(){return this._shipsDestroyed}get canPlay(){return 0!==this.shots}get gameboard(){return this._gameboard}get shots(){return this._shots}ngOnInit(){this.listenGameboardChanges(),this.restart()}restart(){this.gameboardService.playAgain()}back(){this.router.navigate(["battleship/menu"])}listenGameboardChanges(){this.gameboardService.getGameboard().subscribe(t=>{a.debug(`gameboard are loaded with dimension ${t.dimension}`),this.getShots(),a.debug(`${this._shots}`),this.setGameboard(t)})}getShots(){let t=this.gameboardService.getShots();this.setShots(t)}setShots(t){this._shots=t}setGameboard(t){this._gameboard=t}fireShot(t,i){if(!this.canPlay)return;let r=this.getCell(t,i);if(r.state===p.CLEAN&&(this.decreaseShot(),a.debug(`fireShot is emitted on (${t},${i}) position`),r.setState(p.FAIL),r.isShip)){a.debug("this cell contain a ship: +1 hit");let n=this.findShip(t,i);n&&n.hit(),r.setState(p.HIT),(null==n?void 0:n.isDestroyed)&&(a.debug("this ship has been destroyed."),this.destroyShip(n))}}destroyShip(t){t.positions.forEach(({x:i,y:r})=>{this.getCell(i,r).setState(p.DESTROYED)}),this._shipsDestroyed++}findShip(t,i){let r=JSON.stringify({x:t,y:i});return this.getShips().find(n=>n.positions.join().includes(r))}getCell(t,i){return this.getBoard()[t][i]}getBoard(){return this._gameboard.board}getShips(){return this._gameboard.ships}decreaseShot(){this._shots--}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(w),o.Y36(b.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["bts-gameboard"]],decls:8,vars:3,consts:[[1,"grid","grid-rows-3","grid-flow-col","gap-4","mx-auto","bg-white","rounded-xl","shadow-lg","items-center","p-6"],["class","gameboard row-span-3",4,"ngIf"],[1,"col-span-2","row-span-1"],["class","text-center flex-auto text-2xl",4,"ngIf"],["class","text-center flex-auto",4,"ngIf"],[1,"relative","h-full","row-span-2","col-span-2"],["type","button",1,"absolute","bottom-0","right-0","bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline",3,"click"],[1,"gameboard","row-span-3"],["class","gameboard__row",4,"ngFor","ngForOf"],[1,"gameboard__row"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"],[1,"text-center","flex-auto","text-2xl"],[1,"text-left"],[1,"text-center","flex-auto"],[1,"mb-6","text-3xl","text-bold"],["type","button",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline",3,"click"]],template:function(t,i){1&t&&(o.TgZ(0,"main",0),o.YNc(1,q,2,1,"section",1),o.TgZ(2,"section",2),o.YNc(3,Q,10,4,"div",3),o.YNc(4,X,5,0,"div",4),o.qZA(),o.TgZ(5,"section",5)(6,"button",6),o.NdJ("click",function(){return i.back()}),o._uU(7," Volver "),o.qZA()()()),2&t&&(o.xp6(1),o.Q6J("ngIf",i.gameboard),o.xp6(2),o.Q6J("ngIf",i.canPlay&&i.gameboard),o.xp6(1),o.Q6J("ngIf",!i.canPlay))},directives:[d.O5,d.sg,d.mk],styles:["[_nghost-%COMP%]   .gameboard[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .gameboard__row[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .gameboard__cell[_ngcontent-%COMP%]{background-color:#d6f8b8;border:1px solid #74BEC1;width:48px;height:48px}[_nghost-%COMP%]   .gameboard__cell--clean[_ngcontent-%COMP%]:hover{background-color:#74bec1}[_nghost-%COMP%]   .gameboard__cell--hit[_ngcontent-%COMP%]{background-color:#f8b195}[_nghost-%COMP%]   .gameboard__cell--fail[_ngcontent-%COMP%]{background-color:#6b7b8e}[_nghost-%COMP%]   .gameboard__cell--destroyed[_ngcontent-%COMP%]{background-color:#f67280}"]}),e})();var h=u(382);function V(e,s){1&e&&(o.TgZ(0,"p",6),o._uU(1,"Ingresa un valor de turnos valido."),o.qZA())}const K=[{path:"",redirectTo:"battleship/menu"},{path:"battleship",component:j,children:[{path:"menu",component:(()=>{class e{constructor(t,i){this.storageService=t,this.router=i,this.shots=new h.NI(0,[h.kI.required,h.kI.min(0)])}ngOnInit(){}play(){let t=this.shots.value,i=Number(t);if(this.shots.valid&&i>0)return a.debug(`valid number of shots ${t}`),this.saveShots(t),this.goToGameboard();this.shots.setErrors({})}saveShots(t){this.storageService.setSession(S.SHOTS,t)}goToGameboard(){this.router.navigate(["battleship/gameboard"])}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(C),o.Y36(b.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["bts-menu"]],decls:8,vars:2,consts:[[1,"text-center","items-center","max-w-xs","mx-auto","bg-white","rounded-xl","shadow-lg","p-6"],[1,"mb-4","text-left"],["for","turnos",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["id","shots","type","text","oninput","this.value = Math.round(this.value);","placeholder","numero de turnos",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline",3,"formControl"],["class","text-red-500 text-xs italic mt-2",4,"ngIf"],["type","button",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline",3,"click"],[1,"text-red-500","text-xs","italic","mt-2"]],template:function(t,i){1&t&&(o.TgZ(0,"form",0)(1,"div",1)(2,"label",2),o._uU(3," Ingrese el numero de turnos "),o.qZA(),o._UZ(4,"input",3),o.YNc(5,V,2,0,"p",4),o.qZA(),o.TgZ(6,"button",5),o.NdJ("click",function(){return i.play()}),o._uU(7," Iniciar juego "),o.qZA()()),2&t&&(o.xp6(4),o.Q6J("formControl",i.shots),o.xp6(1),o.Q6J("ngIf",i.shots.invalid))},directives:[h._Y,h.JL,h.F,h.Fj,h.JJ,h.oH,d.O5],styles:[""]}),e})()},{path:"gameboard",component:W}]}];let tt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[b.Bz.forChild(K)],b.Bz]}),e})(),et=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[w],imports:[[d.ez]]}),e})(),ot=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[T],imports:[[d.ez]]}),e})(),st=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[C],imports:[[d.ez]]}),e})(),it=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[d.ez,st,h.UX,h.u5]]}),e})(),rt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[B],imports:[[d.ez]]}),e})(),nt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[d.ez,tt,et,ot,it,rt]]}),e})()}}]);