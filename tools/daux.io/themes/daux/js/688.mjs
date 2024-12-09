export const id=688;export const ids=[688];export const modules={1688:(e,t,l)=>{l.d(t,{diagram:()=>f});var n=l(2127),o=l(2455),a=l(5625),i=l(3087),s=l(360);l(7484),l(7967),l(7856),l(3771),l(9368);const d=e=>i.e.sanitizeText(e,(0,i.c)());let r={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const c=function(e,t,l,n,o){const a=Object.keys(e);i.l.info("keys:",a),i.l.info(e),a.filter((t=>e[t].parent==o)).forEach((function(l){var a,s;const r=e[l],c=r.cssClasses.join(" "),p=r.label??r.id,b={labelStyle:"",shape:"class_box",labelText:d(p),classData:r,rx:0,ry:0,class:c,style:"",id:r.id,domId:r.domId,tooltip:n.db.getTooltip(r.id,o)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(a=(0,i.c)().flowchart)?void 0:a.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,b),o&&t.setParent(r.id,o),i.l.info("setNode",b)}))};function p(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const b={setConf:function(e){r={...r,...e}},draw:async function(e,t,l,n){i.l.info("Drawing class - ",t);const b=(0,i.c)().flowchart??(0,i.c)().class,f=(0,i.c)().securityLevel;i.l.info("config:",b);const g=(null==b?void 0:b.nodeSpacing)??50,y=(null==b?void 0:b.rankSpacing)??50,u=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:g,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=n.db.getNamespaces(),v=n.db.getClasses(),w=n.db.getRelations(),x=n.db.getNotes();let m;i.l.info(w),function(e,t,l,n){const o=Object.keys(e);i.l.info("keys:",o),i.l.info(e),o.forEach((function(l){var o,a;const s=e[l],r={shape:"rect",id:s.id,domId:s.domId,labelText:d(s.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(o=(0,i.c)().flowchart)?void 0:o.padding)??(null==(a=(0,i.c)().class)?void 0:a.padding)};t.setNode(s.id,r),c(s.classes,t,0,n,s.id),i.l.info("setNode",r)}))}(h,u,0,n),c(v,u,0,n),function(e,t){const l=(0,i.c)().flowchart;let n=0;e.forEach((function(e){var a;n++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+n,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:p(e.relation.type1),arrowTypeEnd:p(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,i.n)(null==l?void 0:l.curve,o.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,i.k)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(a=(0,i.c)().flowchart)?void 0:a.htmlLabels)??(0,i.c)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,n)}))}(w,u),function(e,t,l,n){i.l.info(e),e.forEach((function(e,a){var s,c;const p=e,b=p.text,f={labelStyle:"",shape:"note",labelText:d(b),noteData:p,rx:0,ry:0,class:"",style:"",id:p.id,domId:p.id,tooltip:"",type:"note",padding:(null==(s=(0,i.c)().flowchart)?void 0:s.padding)??(null==(c=(0,i.c)().class)?void 0:c.padding)};if(t.setNode(p.id,f),i.l.info("setNode",f),!p.class||!(p.class in n))return;const g=l+a,y={id:`edgeNote${g}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,i.n)(r.curve,o.c_6)};t.setEdge(p.id,p.class,y,g)}))}(x,u,w.length+1,v),"sandbox"===f&&(m=(0,o.Ys)("#i"+t));const k="sandbox"===f?(0,o.Ys)(m.nodes()[0].contentDocument.body):(0,o.Ys)("body"),T=k.select(`[id="${t}"]`),S=k.select("#"+t+" g");if(await(0,s.r)(S,u,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),i.u.insertTitle(T,"classTitleText",(null==b?void 0:b.titleTopMargin)??5,n.db.getDiagramTitle()),(0,i.o)(u,T,null==b?void 0:b.diagramPadding,null==b?void 0:b.useMaxWidth),!(null==b?void 0:b.htmlLabels)){const e="sandbox"===f?m.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),n=e.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",l.width),n.setAttribute("height",l.height),t.insertBefore(n,t.firstChild)}}}},f={parser:n.p,db:n.d,renderer:b,styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,n.d.clear()}}}};