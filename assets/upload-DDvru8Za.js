import{j0 as p,i as o,j1 as c,ir as h}from"./index-BTMYyhc6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="e935d896-7296-4a18-98e4-693dd3ea6dc3",t._sentryDebugIdIdentifier="sentry-dbid-e935d896-7296-4a18-98e4-693dd3ea6dc3")}catch{}})();{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};n._sentryModuleMetadata=n._sentryModuleMetadata||{},n._sentryModuleMetadata[new Error().stack]=Object.assign({},n._sentryModuleMetadata[new Error().stack],{"_sentryBundlerPluginAppKey:pixai-web-app-key":!0})}const D=async(t,{provider:a=c.S3,preserveFileType:i,onProgress:e,signal:u}={})=>{var y,r;const d=t.type.startsWith("image")?p.Image:t.type.startsWith("video")?p.Video:void 0;if(!d)throw new Error(`Unsupported media type ${d}`);e==null||e(0);const{uploadMedia:{uploadUrl:l,externalId:s}}=await o.uploadMedia({input:{type:d,provider:a}},{signal:u});if(!l)throw new Error("Upload url is not specified");e==null||e(.15);const f=new FormData;f.append("file",t);const m=d===p.Image&&a!==c.S3?{method:"POST",data:f}:{method:"PUT",data:t},I=await h.request({url:l,...m,onUploadProgress:w=>{w.progress&&(e==null||e(.15+w.progress*.7))},signal:u}),b=a===c.S3?U(l):d===p.Image?(r=(y=I.data)==null?void 0:y.result)==null?void 0:r.id:s,M=await o.uploadMedia({input:{type:d,provider:a,externalId:b,imageType:i?t.type:void 0}},{signal:u});return e==null||e(1),{...M.uploadMedia,type:d}};function U(t){const a=new URL(t),{pathname:i}=a;return i.split("/").pop()}export{D as u};
//# sourceMappingURL=upload-DDvru8Za.js.map
