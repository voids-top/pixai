import{t as u}from"./vendor-gifsicle-BG1huUEI.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"911cefd9055a9cd346a34f173d65e53af476cfbd"},e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=(function(r){for(var n=1;n<arguments.length;n++){var t=arguments[n];if(t!=null)for(var a in t)t.hasOwnProperty(a)&&(r[a]=t[a])}return r})({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:pixai-web-app-key":!0});var d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="797af4a9-2ac2-4aaa-8dfe-d15377fddfb8",e._sentryDebugIdIdentifier="sentry-dbid-797af4a9-2ac2-4aaa-8dfe-d15377fddfb8")}catch{}})();function g(e,d){const{x:r,y:n,height:t,width:a}=d,o=Math.max(a,t)>1024?a>t?"--resize-width 1024":"--resize-height 1024":"";return new Promise((f,s)=>{u.run({input:[{file:e,name:"image.gif"}],command:[`
      -U
      --crop ${r},${n}+${a}x${t}
      ${o}
      -O1 --lossy=60
      image.gif
      -o /out/out.gif`]}).then(i=>{f(i[0])}).catch(i=>{s(i)})})}export{g as cropGif};
