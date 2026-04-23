import{t as b}from"./vendor-gifsicle-DCqyfT3Y.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"266a3d816bcfa4c371bb9a4aab547cb6d56f6bab"},e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=(function(r){for(var n=1;n<arguments.length;n++){var t=arguments[n];if(t!=null)for(var a in t)t.hasOwnProperty(a)&&(r[a]=t[a])}return r})({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:pixai-web-app-key":!0});var i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="bba32a4b-2960-4350-93e0-0031b3ca8a3d",e._sentryDebugIdIdentifier="sentry-dbid-bba32a4b-2960-4350-93e0-0031b3ca8a3d")}catch{}})();function c(e,i){const{x:r,y:n,height:t,width:a}=i,d=Math.max(a,t)>1024?a>t?"--resize-width 1024":"--resize-height 1024":"";return new Promise((s,u)=>{b.run({input:[{file:e,name:"image.gif"}],command:[`
      -U
      --crop ${r},${n}+${a}x${t}
      ${d}
      -O1 --lossy=60
      image.gif
      -o /out/out.gif`]}).then(o=>{s(o[0])}).catch(o=>{u(o)})})}export{c as cropGif};
