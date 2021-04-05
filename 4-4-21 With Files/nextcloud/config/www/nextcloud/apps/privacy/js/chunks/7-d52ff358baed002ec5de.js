(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{391:function(n,e,t){"use strict";t.r(e);var i=t(397),r=t.n(i),o=t(394),c=t.n(o),l=t(116),s=t(398),a=t.n(s),u=t(400),d=t.n(u),p=t(401),E=t(396);function v(n,e,t,i,r,o,c){try{var l=n[o](c),s=l.value}catch(n){return void t(n)}l.done?e(s):Promise.resolve(s).then(i,r)}var f={name:"Encryption",components:{Actions:a.a,ActionButton:d.a},directives:{ClickOutside:r.a},data:function(){return{fullDiskEncryptionEnabled:!1,serverSideEncryptionEnabled:!1,isEditing:!1,isSavingChanges:!1}},computed:{label:function(){return this.serverSideEncryptionEnabled||this.fullDiskEncryptionEnabled?this.serverSideEncryptionEnabled&&!this.fullDiskEncryptionEnabled?this.$t("privacy","Your files are encrypted with {linkopen}server-side-encryption ↗{linkclose}.").replace("{linkopen}",'<a href="https://nextcloud.com/blog/encryption-in-nextcloud/" target="_blank" title="" rel="noreferrer noopener">').replace("{linkclose}","</a>"):!this.serverSideEncryptionEnabled&&this.fullDiskEncryptionEnabled?this.$t("privacy","This server is protected with full-disk-encryption."):this.$t("privacy","Your files are encrypted with {linkopen}server-side-encryption ↗{linkclose}. Additionally, this server is protected with full-disk-encryption.").replace("{linkopen}",'<a href="https://nextcloud.com/blog/encryption-in-nextcloud/" target="_blank" title="" rel="noreferrer noopener">').replace("{linkclose}","</a>"):this.$t("privacy","Your files are not protected by encryption.")}},mounted:function(){this.fullDiskEncryptionEnabled=Object(p.loadState)("privacy","fullDiskEncryptionEnabled"),this.serverSideEncryptionEnabled=Object(p.loadState)("privacy","serverSideEncryptionEnabled")},methods:{openEditFullDiskEncryptionForm:function(){this.isEditing=!0},cancelEditFullDiskEncryptionForm:function(){this.isEditing=!1},saveFullDiskEncryptionForm:function(){var n,e=this;return(n=regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(l.generateUrl)("/apps/privacy/api/fullDiskEncryption"),e.isSavingChanges=!0,n.prev=2,n.next=5,c.a.post(t,{enabled:e.fullDiskEncryptionEnabled?"1":"0"});case 5:n.next=12;break;case 7:n.prev=7,n.t0=n.catch(2),console.error(n.t0),Object(E.a)("Error saving new state of full-disk-encryption"),e.fullDiskEncryptionEnabled=!e.fullDiskEncryptionEnabled;case 12:return n.prev=12,e.isSavingChanges=!1,e.isEditing=!1,n.finish(12);case 16:case"end":return n.stop()}}),n,null,[[2,7,12,16]])})),function(){var e=this,t=arguments;return new Promise((function(i,r){var o=n.apply(e,t);function c(n){v(o,i,r,c,l,"next",n)}function l(n){v(o,i,r,c,l,"throw",n)}c(void 0)}))})()}}},k=t(395),h=Object(k.a)(f,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"who-has-access"},[t("p",{directives:[{name:"show",rawName:"v-show",value:!n.isEditing,expression:"!isEditing"}],domProps:{innerHTML:n._s(n.label)}}),n._v(" "),n.$is_admin&&!n.isEditing?t("Actions",[t("ActionButton",{attrs:{icon:"icon-rename"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),n.openEditFullDiskEncryptionForm(e)}}})],1):n._e(),n._v(" "),n.isEditing?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:n.cancelEditFullDiskEncryptionForm,expression:"cancelEditFullDiskEncryptionForm"}]},[t("form",[t("input",{directives:[{name:"model",rawName:"v-model",value:n.fullDiskEncryptionEnabled,expression:"fullDiskEncryptionEnabled"}],staticClass:"checkbox",attrs:{id:"fullDiskEncryptionEnabledCheckbox",disabled:n.isSavingChanges,type:"checkbox",name:"fullDiskEncryptionEnabledCheckbox"},domProps:{checked:Array.isArray(n.fullDiskEncryptionEnabled)?n._i(n.fullDiskEncryptionEnabled,null)>-1:n.fullDiskEncryptionEnabled},on:{change:[function(e){var t=n.fullDiskEncryptionEnabled,i=e.target,r=!!i.checked;if(Array.isArray(t)){var o=n._i(t,null);i.checked?o<0&&(n.fullDiskEncryptionEnabled=t.concat([null])):o>-1&&(n.fullDiskEncryptionEnabled=t.slice(0,o).concat(t.slice(o+1)))}else n.fullDiskEncryptionEnabled=r},n.saveFullDiskEncryptionForm]}}),n._v(" "),t("label",{attrs:{for:"fullDiskEncryptionEnabledCheckbox"}},[n._v("\n\t\t\t\t"+n._s(n.$t("privacy","This server is using full-disk-encryption."))+"\n\t\t\t")])])]):n._e()],1)}),[],!1,null,null,null);e.default=h.exports},397:function(n,e){function t(n){return"function"==typeof n.value||(console.warn("[Vue-click-outside:] provided expression",n.expression,"is not a function."),!1)}function i(n){return void 0!==n.componentInstance&&n.componentInstance.$isServer}n.exports={bind:function(n,e,r){if(!t(e))return;function o(e){if(r.context){var t=e.path||e.composedPath&&e.composedPath();t&&t.length>0&&t.unshift(e.target),n.contains(e.target)||function(n,e){if(!n||!e)return!1;for(var t=0,i=e.length;t<i;t++)try{if(n.contains(e[t]))return!0;if(e[t].contains(n))return!1}catch(n){return!1}return!1}(r.context.popupItem,t)||n.__vueClickOutside__.callback(e)}}n.__vueClickOutside__={handler:o,callback:e.value};const c="ontouchstart"in document.documentElement?"touchstart":"click";!i(r)&&document.addEventListener(c,o)},update:function(n,e){t(e)&&(n.__vueClickOutside__.callback=e.value)},unbind:function(n,e,t){const r="ontouchstart"in document.documentElement?"touchstart":"click";!i(t)&&n.__vueClickOutside__&&document.removeEventListener(r,n.__vueClickOutside__.handler),delete n.__vueClickOutside__}}}}]);
//# sourceMappingURL=7-d52ff358baed002ec5de.js.map