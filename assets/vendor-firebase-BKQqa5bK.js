import{r as ee,R as En}from"./vendor-apollo-B9XqHIAo.js";import{a as ne}from"./vendor-amplitude-core-CQMkGYFj.js";import{p as Mn}from"./vendor-axios-CFwfAwt2.js";(function(){try{var e=typeof window<"u"?window:typeof ne<"u"?ne:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"0ec442be81a4ee21bfcf5745e8ef10bc76836958"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof ne<"u"?ne:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c4ca6e13-0d75-465c-bb34-cb8c542deb14",e._sentryDebugIdIdentifier="sentry-dbid-c4ca6e13-0d75-465c-bb34-cb8c542deb14")})()}catch{}(function(){try{var e=typeof window<"u"?window:typeof ne<"u"?ne:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];if(n!=null)for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])}return t}({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:pixai-web-app-key":!0})}catch{}})();let Tn=0;function Se(e,t){const r=`atom${++Tn}`,n={toString:()=>r};return typeof e=="function"?n.read=e:(n.init=e,n.read=vn,n.write=Bn),t&&(n.write=t),n}function vn(e){return e(this)}function Bn(e,t,r){return t(this,typeof r=="function"?r(e(this)):r)}const tt=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,Qt=e=>"init"in e,Jt=e=>!!e.write,Oe=new WeakMap,Pn=(e,t)=>{Oe.set(e,t),e.catch(()=>{}).finally(()=>Oe.delete(e))},Zt=(e,t)=>{const r=Oe.get(e);r&&(Oe.delete(e),r(t))},Xt=(e,t)=>{e.status="fulfilled",e.value=t},qt=(e,t)=>{e.status="rejected",e.reason=t},_n=e=>typeof e?.then=="function",De=(e,t)=>!!e&&"v"in e&&"v"in t&&Object.is(e.v,t.v),er=(e,t)=>!!e&&"e"in e&&"e"in t&&Object.is(e.e,t.e),we=e=>!!e&&"v"in e&&e.v instanceof Promise,Rn=(e,t)=>"v"in e&&"v"in t&&e.v.orig&&e.v.orig===t.v.orig,Ne=e=>{if("e"in e)throw e.e;return e.v},yr=()=>{const e=new WeakMap,t=new WeakMap,r=[],n=new WeakMap,o=c=>e.get(c),a=(c,m)=>{m.d.forEach((k,$)=>{if(!n.has($)){const p=o($);n.set($,[p,new Set]),p&&a($,p)}n.get($)[1].add(c)})},s=(c,m)=>{var k;const $=o(c);if(e.set(c,m),(k=r[r.length-1])==null||k.add(c),n.has(c)||(n.set(c,[$,new Set]),a(c,m)),we($)){const p="v"in m?m.v instanceof Promise?m.v:Promise.resolve(m.v):Promise.reject(m.e);$.v!==p&&Zt($.v,p)}},i=(c,m,k,$)=>{const p=new Map($?m.d:null);let h=!1;k.forEach((I,y)=>{!I&&tt(c,y)&&(I=m),I&&(p.set(y,I),m.d.get(y)!==I&&(h=!0))}),(h||m.d.size!==p.size)&&(m.d=p)},d=(c,m,k,$)=>{const p=o(c),h={d:p?.d||new Map,v:m};if(k&&i(c,h,k,$),De(p,h)&&p.d===h.d)return p;if(we(p)&&we(h)&&Rn(p,h)){if(p.d===h.d)return p;h.v=p.v}return s(c,h),h},u=(c,m,k,$)=>{if(_n(m)){let p;const h=()=>{const y=o(c);if(!we(y)||y.v!==I)return;const D=d(c,I,k);t.has(c)&&y.d!==D.d&&zt(c,D,y.d)},I=new Promise((y,D)=>{let b=!1;m.then(P=>{b||(b=!0,Xt(I,P),y(P),h())},P=>{b||(b=!0,qt(I,P),D(P),h())}),p=P=>{b||(b=!0,P.then(_=>Xt(I,_),_=>qt(I,_)),y(P))}});return I.orig=m,I.status="pending",Pn(I,y=>{y&&p(y),$?.()}),d(c,I,k,!0)}return d(c,m,k)},g=(c,m,k)=>{const $=o(c),p={d:$?.d||new Map,e:m};return k&&i(c,p,k),er($,p)&&$.d===p.d?$:(s(c,p),p)},E=(c,m)=>{const k=o(c);if(!m?.(c)&&k&&(t.has(c)||Array.from(k.d).every(([b,P])=>{if(b===c)return!0;const _=E(b,m);return _===P||De(_,P)})))return k;const $=new Map;let p=!0;const h=b=>{if(tt(c,b)){const _=o(b);if(_)return $.set(b,_),Ne(_);if(Qt(b))return $.set(b,void 0),b.init;throw new Error("no atom init")}const P=E(b,m);return $.set(b,P),Ne(P)};let I,y;const D={get signal(){return I||(I=new AbortController),I.signal},get setSelf(){return!y&&Jt(c)&&(y=(...b)=>{if(!p)return Re(c,...b)}),y}};try{const b=c.read(h,D);return u(c,b,$,()=>I?.abort())}catch(b){return g(c,b,$)}finally{p=!1}},H=c=>Ne(E(c)),F=c=>{const m=y=>{var D,b;const P=new Set((D=t.get(y))==null?void 0:D.t);return(b=n.get(y))==null||b[1].forEach(_=>{P.add(_)}),P},k=new Array,$=new Set,p=y=>{if(!$.has(y)){$.add(y);for(const D of m(y))y!==D&&p(D);k.push(y)}};p(c);const h=new Set([c]),I=y=>$.has(y);for(let y=k.length-1;y>=0;--y){const D=k[y],b=o(D);if(!b)continue;let P=!1;for(const _ of b.d.keys())if(_!==D&&h.has(_)){P=!0;break}if(P){const _=E(D,I);a(D,_),De(b,_)||h.add(D)}$.delete(D)}},j=(c,...m)=>{const k=h=>Ne(E(h)),$=(h,...I)=>{const y=r.length>0;y||r.push(new Set([h]));let D;if(tt(c,h)){if(!Qt(h))throw new Error("atom not writable");const b=o(h),P=u(h,I[0]);De(b,P)||F(h)}else D=j(h,...I);return y||et(r.pop()),D};return c.write(k,$,...m)},Re=(c,...m)=>{r.push(new Set([c]));const k=j(c,...m);return et(r.pop()),k},Xe=(c,m,k)=>{var $;const p=t.get(c);if(p)return m&&p.t.add(m),p;const h=k||[];($=o(c))==null||$.d.forEach((y,D)=>{D!==c&&Xe(D,c,h)}),E(c);const I={t:new Set(m&&[m]),l:new Set};if(t.set(c,I),Jt(c)&&c.onMount){const{onMount:y}=c;h.push(()=>{const D=y((...b)=>Re(c,...b));D&&(I.u=D)})}return k||h.forEach(y=>y()),I},Cn=(c,m)=>!m.l.size&&(!m.t.size||m.t.size===1&&m.t.has(c)),qe=(c,m)=>{if(!Cn(c,m))return;const k=m.u;k&&k(),t.delete(c);const $=o(c);$&&(we($)&&Zt($.v),$.d.forEach((p,h)=>{if(h!==c){const I=t.get(h);I&&(I.t.delete(c),qe(h,I))}}))},zt=(c,m,k)=>{const $=new Set(m.d.keys()),p=new Set;k?.forEach((h,I)=>{if($.has(I)){$.delete(I);return}p.add(I);const y=t.get(I);y&&y.t.delete(c)}),$.forEach(h=>{Xe(h,c)}),p.forEach(h=>{const I=t.get(h);I&&qe(h,I)})},et=c=>{const m=[],k=$=>{var p;if(!n.has($))return;const[h,I]=n.get($);n.delete($),m.push([$,h]),I.forEach(k),(p=o($))==null||p.d.forEach((y,D)=>k(D))};c.forEach(k),m.forEach(([$,p])=>{const h=o($);if(h&&h!==p){const I=t.get($);I&&h.d!==p?.d&&zt($,h,p?.d),I&&!(!we(p)&&(De(p,h)||er(p,h)))&&I.l.forEach(y=>y())}})};return{get:H,set:Re,sub:(c,m)=>{const k=Xe(c);et([c]);const $=k.l;return $.add(m),()=>{$.delete(m),qe(c,k)}}}};let rt;const Nn=()=>(rt||(rt=yr()),rt),Un=yr,kr=Nn,wr=ee.createContext(void 0),Sr=e=>{const t=ee.useContext(wr);return e?.store||t||kr()},Sf=({children:e,store:t})=>{const r=ee.useRef();return!t&&!r.current&&(r.current=Un()),ee.createElement(wr.Provider,{value:t||r.current},e)},Ln=e=>typeof e?.then=="function",On=En.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)});function Fn(e,t){const r=Sr(t),[[n,o,a],s]=ee.useReducer(u=>{const g=r.get(e);return Object.is(u[0],g)&&u[1]===r&&u[2]===e?u:[g,r,e]},void 0,()=>[r.get(e),r,e]);let i=n;(o!==r||a!==e)&&(s(),i=r.get(e));const d=t?.delay;return ee.useEffect(()=>{const u=r.sub(e,()=>{if(typeof d=="number"){setTimeout(s,d);return}s()});return s(),u},[r,e,d]),ee.useDebugValue(i),Ln(i)?On(i):i}function Wn(e,t){const r=Sr(t);return ee.useCallback((...o)=>r.set(e,...o),[r,e])}function bf(e,t){return[Fn(e,t),Wn(e,t)]}const Vn=Symbol("");function Af(e,t){return Se(e,function(r,n,o){n(this,t(r(this),o))})}const nt=(e,t,r)=>(t.has(r)?t:t.set(r,e())).get(r),xn=new WeakMap,Gn=(e,t,r,n)=>{const o=nt(()=>new WeakMap,xn,t),a=nt(()=>new WeakMap,o,r);return nt(e,a,n)};function Df(e,t,r=Object.is){return Gn(()=>{const n=Symbol(),o=([s,i])=>{if(i===n)return t(s);const d=t(s,i);return r(i,d)?i:d},a=Se(s=>{const i=s(a),d=s(e);return o([d,i])});return a.init=n,a},e,t,r)}const Kn=e=>typeof e?.then=="function";function Hn(e=()=>{try{return window.localStorage}catch{return}},t){var r;let n,o;const a={getItem:(d,u)=>{var g,E;const H=j=>{if(j=j||"",n!==j){try{o=JSON.parse(j,t?.reviver)}catch{return u}n=j}return o},F=(E=(g=e())==null?void 0:g.getItem(d))!=null?E:null;return Kn(F)?F.then(H):H(F)},setItem:(d,u)=>{var g;return(g=e())==null?void 0:g.setItem(d,JSON.stringify(u,void 0))},removeItem:d=>{var u;return(u=e())==null?void 0:u.removeItem(d)}},s=d=>(u,g,E)=>d(u,H=>{let F;try{F=JSON.parse(H||"")}catch{F=E}g(F)});let i;try{i=(r=e())==null?void 0:r.subscribe}catch{}return!i&&typeof window<"u"&&typeof window.addEventListener=="function"&&window.Storage&&(i=(d,u)=>{if(!(e()instanceof window.Storage))return()=>{};const g=E=>{E.storageArea===e()&&E.key===d&&u(E.newValue)};return window.addEventListener("storage",g),()=>{window.removeEventListener("storage",g)}}),i&&(a.subscribe=s(i)),a}const jn=Hn();function Yn(e,t,r=jn,n){const o=n?.getOnInit,a=Se(o?r.getItem(e,t):t);return a.onMount=i=>{i(r.getItem(e,t));let d;return r.subscribe&&(d=r.subscribe(e,i,t)),d},Se(i=>i(a),(i,d,u)=>{const g=typeof u=="function"?u(i(a)):u;return g===Vn?(d(a,t),r.removeItem(e)):g instanceof Promise?g.then(E=>(d(a,E),r.setItem(e,E))):(d(a,g),r.setItem(e,g))})}function Cf(e,t){const r=Se(0);return Se((n,o)=>(n(r),e(n,o)),(n,o,...a)=>{if(a.length===0)o(r,s=>s+1);else return t(n,o,...a)})}var zn=(e=>(e.Minor="MINOR",e.Over18="OVER18",e))(zn||{}),Qn=(e=>(e.Album="ALBUM",e.All="ALL",e.AnimatedArtwork="ANIMATED_ARTWORK",e.AnimatedComic="ANIMATED_COMIC",e.Character="CHARACTER",e.ComfyFlow="COMFY_FLOW",e.Comic="COMIC",e.Default="DEFAULT",e.Manga="MANGA",e.MangaModel="MANGA_MODEL",e.Workflow="WORKFLOW",e.World="WORLD",e))(Qn||{}),Jn=(e=>(e.Image="IMAGE",e.Video="VIDEO",e.VideoHls="VIDEO_HLS",e.VideoStream="VIDEO_STREAM",e))(Jn||{}),Zn=(e=>(e.N="N",e.Sr="SR",e.Ssr="SSR",e))(Zn||{}),Xn=(e=>(e.Audio="AUDIO",e.Live="LIVE",e.Static="STATIC",e))(Xn||{}),qn=(e=>(e.Eur="EUR",e.Jpy="JPY",e.Usd="USD",e))(qn||{}),eo=(e=>(e.ArtworkFrame="ARTWORK_FRAME",e.AvatarFrame="AVATAR_FRAME",e.Badge="BADGE",e))(eo||{}),to=(e=>(e.Campaign="CAMPAIGN",e.Membership="MEMBERSHIP",e.Tier="TIER",e))(to||{}),ro=(e=>(e.EventBased="EVENT_BASED",e.Monthly="MONTHLY",e))(ro||{}),no=(e=>(e.Bookmark="BOOKMARK",e.Like="LIKE",e))(no||{}),oo=(e=>(e.AnyLora="ANY_LORA",e.AnyModel="ANY_MODEL",e.AnyNonSdxlLora="ANY_NON_SDXL_LORA",e.AnyNonUserLora="ANY_NON_USER_LORA",e.AnySdxlLora="ANY_SDXL_LORA",e.AnyUserLora="ANY_USER_LORA",e.AnyVae="ANY_VAE",e.Chat="CHAT",e.Dit5AModelInternal="DIT5A_MODEL_INTERNAL",e.Dit7ALora="DIT7A_LORA",e.Dit7AModel="DIT7A_MODEL",e.Dit7AVae="DIT7A_VAE",e.Dit7BLora="DIT7B_LORA",e.Dit7BModel="DIT7B_MODEL",e.Dit7BVae="DIT7B_VAE",e.Dit7CLora="DIT7C_LORA",e.Dit7CModel="DIT7C_MODEL",e.Dit7CVae="DIT7C_VAE",e.Dit7DLora="DIT7D_LORA",e.Dit7DModel="DIT7D_MODEL",e.Dit7DVae="DIT7D_VAE",e.Dit7Lora="DIT7_LORA",e.Dit7Model="DIT7_MODEL",e.Dit7Vae="DIT7_VAE",e.Lora="LORA",e.MultiLora="MULTI_LORA",e.Sd3MediumModel="SD3_MEDIUM_MODEL",e.SdxlLora="SDXL_LORA",e.SdxlModel="SDXL_MODEL",e.SdxlVae="SDXL_VAE",e.SdV1Model="SD_V1_MODEL",e.UnknownLora="UNKNOWN_LORA",e.UnknownModel="UNKNOWN_MODEL",e.UserLora="USER_LORA",e.UserMultiLora="USER_MULTI_LORA",e.UserSdxlLora="USER_SDXL_LORA",e.Vae="VAE",e))(oo||{}),ao=(e=>(e.Month="MONTH",e.Year="YEAR",e))(ao||{}),so=(e=>(e.Album="ALBUM",e.AnimatedComic="ANIMATED_COMIC",e.Comic="COMIC",e))(so||{}),io=(e=>(e.Inspire="INSPIRE",e.Like="LIKE",e))(io||{}),co=(e=>(e.Cf="CF",e.S3="S3",e))(co||{}),uo=(e=>(e.Image="IMAGE",e.Video="VIDEO",e))(uo||{}),lo=(e=>(e.End="END",e.Human="HUMAN",e.Machine="MACHINE",e.Warning="WARNING",e))(lo||{}),fo=(e=>(e.AppealAccepted="APPEAL_ACCEPTED",e.AppealRejected="APPEAL_REJECTED",e.Comment="COMMENT",e.CommentReply="COMMENT_REPLY",e.ContestReward="CONTEST_REWARD",e.DailyClaim="DAILY_CLAIM",e.DailyRanking="DAILY_RANKING",e.Follow="FOLLOW",e.GenerationTaskCompleted="GENERATION_TASK_COMPLETED",e.ItemLike="ITEM_LIKE",e.Like="LIKE",e.MembershipExpired="MEMBERSHIP_EXPIRED",e.MembershipGifted="MEMBERSHIP_GIFTED",e.MembershipRenewalFailed="MEMBERSHIP_RENEWAL_FAILED",e.MembershipRenewed="MEMBERSHIP_RENEWED",e.ModelClaim="MODEL_CLAIM",e.ModelClaimedByOthers="MODEL_CLAIMED_BY_OTHERS",e.ModelCoverNsfw="MODEL_COVER_NSFW",e.MonthlyRanking="MONTHLY_RANKING",e.NewbiesRanking="NEWBIES_RANKING",e.News="NEWS",e.NewsDraft="NEWS_DRAFT",e.NewSupporter="NEW_SUPPORTER",e.PaymentFailed="PAYMENT_FAILED",e.Privilege="PRIVILEGE",e.ReplyTheme="REPLY_THEME",e.System="SYSTEM",e.TrainingTaskCompleted="TRAINING_TASK_COMPLETED",e.UserAvatarNsfw="USER_AVATAR_NSFW",e.UserCoverNsfw="USER_COVER_NSFW",e.WeeklyRanking="WEEKLY_RANKING",e.WorldNewCharacter="WORLD_NEW_CHARACTER",e))(fo||{}),go=(e=>(e.Artwork="ARTWORK",e.ArtworkAnimated="ARTWORK_ANIMATED",e.Comic="COMIC",e))(go||{}),$o=(e=>(e.Artwork="ARTWORK",e.Coupon="COUPON",e.Manga="MANGA",e.Media="MEDIA",e.Message="MESSAGE",e.Model="MODEL",e.Post="POST",e.Task="TASK",e.User="USER",e))($o||{}),po=(e=>(e.ClaimModel="CLAIM_MODEL",e.InappropriateContent="INAPPROPRIATE_CONTENT",e.IrrelevantTag="IRRELEVANT_TAG",e.IrrelevantTitle="IRRELEVANT_TITLE",e.MislabeledArchivedArtwork="MISLABELED_ARCHIVED_ARTWORK",e.MislabeledNsfw="MISLABELED_NSFW",e.MistakenInfo="MISTAKEN_INFO",e.NotAiArtwork="NOT_AI_ARTWORK",e.NsfwPrompt="NSFW_PROMPT",e.Offensive="OFFENSIVE",e.RequestEditModel="REQUEST_EDIT_MODEL",e.Spam="SPAM",e))(po||{}),mo=(e=>(e.Cancel="CANCEL",e.Comment="COMMENT",e.Dislike="DISLIKE",e.Like="LIKE",e))(mo||{}),ho=(e=>(e.AnimatedDiff="ANIMATED_DIFF",e.Chat="CHAT",e.Enlarge="ENLARGE",e.Hires="HIRES",e.I2VPro="I2V_PRO",e.T2I2V="T2I2V",e.Workflow="WORKFLOW",e))(ho||{}),V=(e=>(e.Invisible="INVISIBLE",e.Managed="MANAGED",e.NonInteractive="NON_INTERACTIVE",e))(V||{}),Io=(e=>(e.CheckHash="CHECK_HASH",e.Complete="COMPLETE",e.Init="INIT",e.UploadPart="UPLOAD_PART",e))(Io||{}),yo=(e=>(e.Left="LEFT",e.Right="RIGHT",e.Skip="SKIP",e))(yo||{}),ko=(e=>(e.Note="NOTE",e.QualityTag="QUALITY_TAG",e))(ko||{}),wo=(e=>(e.Email="Email",e))(wo||{}),So=(e=>(e.ChangeEmail="ChangeEmail",e.ForgetPassword="ForgetPassword",e.ResetPassword="ResetPassword",e.VerifyEmail="VerifyEmail",e.WithdrawAccount="WithdrawAccount",e))(So||{}),bo=(e=>(e.Comfyui="COMFYUI",e))(bo||{});const l=`
    fragment ModerationFlagPreview on ModerationFlag {
  shouldBlur
}
    `,f=`
    fragment MediaBase on Media {
  id
  type
  width
  height
  urls {
    variant
    url
  }
  imageType
  fileUrl
  duration
  thumbnailUrl
  hlsUrl
  size
  flag {
    ...ModerationFlagPreview
  }
}
    `,T=`
    fragment ModerationFlagDetail on ModerationFlag {
  status
  isSensitive
  isMinors
  isRealistic
  isFlagged
  isSexyPic
  isSexyText
  shouldBlur
  isWarned
  isAppealable
}
    `,v=`
    fragment ArtworkBase on Artwork {
  __typename
  id
  title
  authorId
  prompts
  createdAt
  updatedAt
  mediaId
  media {
    ...MediaBase
  }
  videoMediaId
  hidePrompts
  isPrivate
  isNsfw
  isSensitive
  extra
  type
  paidCredit
  aesScore
  feedMetadata {
    retrieverId
  }
  flag {
    ...ModerationFlagDetail
  }
}
    `,w=`
    fragment DecorationBase on Decoration {
  id
  code
  type
  data
  createdAt
  updatedAt
}
    `,S=`
    fragment UserBase on User {
  id
  email
  emailVerified
  verificationStatus
  username
  displayName
  createdAt
  updatedAt
  avatarMediaId
  membership {
    membershipId
    tier
  }
  deleteAfter
  isAdmin
  activeDecorations {
    id
    decorationId
    decoration {
      ...DecorationBase
    }
    isEnabled
    obtainedAt
    obtainedFrom
    createdAt
    updatedAt
    userId
  }
}
    `,Be=`
    fragment ArtworkPreview on Artwork {
  ...ArtworkBase
  likedCount
  liked
  commentCount
  author {
    ...UserBase
  }
  flag {
    ...ModerationFlagDetail
  }
}
    `,At=`
    fragment MangaBase on Manga {
  __typename
  id
  authorId
  title
  description
  coverMediaId
  coverMedia {
    ...MediaBase
  }
  isNsfw
  isPrivate
  isArchived
  type
  extra
  createdAt
  updatedAt
  artworkId
}
    `,Dt=`
    fragment MangaChapterBase on MangaChapter {
  id
  mangaId
  order
  title
  coverMediaId
  coverMedia {
    ...MediaBase
  }
  originalData
  content
  createdAt
  updatedAt
}
    `,Ao=`
    fragment ArtworkWithMangaPreview on Artwork {
  ...ArtworkPreview
  manga {
    ...MangaBase
    likedCount
    liked
    chapter(index: 0) {
      ...MangaChapterBase
    }
  }
}
    `,B=`
    fragment TagBase on Tag {
  id
  name
  mediaId
  createdAt
  updatedAt
  extra
}
    `,br=`
    fragment ArtworkDetail on Artwork {
  ...ArtworkBase
  segmentedPrompts {
    prefix
    content
    suffix
    tagName
  }
  author {
    ...UserBase
    followedByMe
  }
  tags {
    ...TagBase
  }
  likedCount
  liked
  views
  commentCount
  inspiredCount
  flag {
    ...ModerationFlagDetail
  }
}
    `,Do=`
    fragment ArtworkWithTaskDetailBase on Artwork {
  ...ArtworkDetail
  loras {
    id
    isNsfw
    isPrivate
    title
    likedCount
    mediaId
    media {
      ...MediaBase
    }
    type
    authorId
    createdAt
    updatedAt
    isDownloadable
    flag {
      ...ModerationFlagPreview
    }
  }
  taskParameters {
    id
    parameters
    outputs
  }
}
    `,Co=`
    fragment Manga on Manga {
  ...MangaBase
  author {
    ...UserBase
  }
  likedCount
  liked
}
    `,Eo=`
    fragment MangaWithFirstChapter on Manga {
  ...Manga
  chapter(index: 0) {
    ...MangaChapterBase
  }
}
    `,Mo=`
    fragment UserLikedManga on Manga {
  ...MangaWithFirstChapter
  artwork {
    ...ArtworkBase
  }
}
    `,Ar=`
    fragment ChatWorkspaceBaseFragment on ChatWorkspaceBase {
  id
  userId
  title
  initialImage
  lastImage
  private
  createdAt
  updatedAt
}
    `,Dr=`
    fragment ChatTaskReactionBase on ChatTaskReaction {
  taskId
  mediaId
  likeOrDislike
}
    `,Cr=`
    fragment ChatEditingScenePageConfigBase on ChatEditingScenePageConfig {
  sceneId
  title
  name
  description
  tutorial
  tags
  presets {
    name
    key
    i18nKey
  }
  images {
    background
    demo
  }
}
    `,Ie=`
    fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
    `,To=`
    fragment RankItemBase on RankItem {
  id
  mediaId
  media {
    ...MediaBase
  }
  prompt
}
    `,vo=`
    fragment RankPairBase on RankPair {
  id
  leftRankItemId
  rightRankItemId
  leftRankItem {
    ...RankItemBase
  }
  rightRankItem {
    ...RankItemBase
  }
}
    `,Er=`
    fragment ContestBase on Contest {
  id
  name
  mediaId
  media {
    ...MediaBase
  }
  startAt
  endAt
  cid
  description
  prize
  rule
  published
  createdAt
  updatedAt
  locales
  extra
}
    `,O=`
    fragment GenerationModelBase on GenerationModel {
  id
  authorId
  title
  mediaId
  media {
    ...MediaBase
  }
  type
  category
  extra
  createdAt
  updatedAt
  isNsfw
  isDownloadable
  isPrivate
  flag {
    ...ModerationFlagPreview
  }
  loraBaseModelTypes
}
    `,R=`
    fragment GenerationModelVersionBase on GenerationModelVersion {
  id
  modelId
  mediaId
  media {
    ...MediaBase
  }
  name
  fileUploadId
  createdAt
  updatedAt
  extra
  loraBaseModelType
  loraBaseModelId
}
    `,K=`
    fragment GenerationModelPreview on GenerationModel {
  ...GenerationModelBase
  loraBaseModelTypes
  likedCount
  liked
  refCount
  commentCount
  artworkSafetyScore {
    safetyScoreSum
    safetyScoreCount
  }
  latestAvailableVersion {
    ...GenerationModelVersionBase
    status
    downloadUrl
  }
  tags {
    ...TagBase
  }
}
    `,Pe=`
    fragment ReviewSummaryBase on ReviewSummary {
  itemId
  score
  ratingDetail {
    rating
    count
  }
}
    `,Ge=`
    fragment GenerationModelVersionDetail on GenerationModelVersion {
  ...GenerationModelVersionBase
  previewArtworkIds
  previewArtworks {
    ...ArtworkBase
  }
  modelType
  downloadUrl
  status
}
    `,ae=`
    fragment FileUploadRecordBase on FileUploadRecord {
  id
  fileSize
  fileType
  filename
  hash
  sha256
  asset
  createdAt
  updatedAt
  userId
  externalId
  isFinished
  status
  extra
}
    `,Ke=`
    fragment GenerationModelVersionWithFile on GenerationModelVersion {
  ...GenerationModelVersionDetail
  fileUploadRecord {
    ...FileUploadRecordBase
  }
}
    `,ye=`
    fragment TrainingTaskBase on TrainingTask {
  id
  userId
  status
  token
  priority
  startedAt
  endAt
  createdAt
  updatedAt
  archived
  retryCount
  type
  refId
  parameters {
    title
    mediaIds
  }
  extra {
    progress
    estimatedTotalTime
  }
  outputs {
    message
  }
}
    `,He=`
    fragment GenerationModelDetail on GenerationModel {
  ...GenerationModelPreview
  author {
    ...UserBase
  }
  reviewSummary {
    ...ReviewSummaryBase
  }
  bookmarked
  refUserCount
  latestAvailableVersion {
    ...GenerationModelVersionWithFile
  }
  baseModelVersion {
    ...GenerationModelVersionBase
  }
  trainingTask {
    ...TrainingTaskBase
  }
  loraTrainingTasks {
    ...TrainingTaskBase
  }
  rebateAmount
  flag {
    ...ModerationFlagDetail
  }
}
    `,Ct=`
    fragment GenerationModelVersionPreview on GenerationModelVersion {
  ...GenerationModelVersionBase
  modelType
  status
}
    `,Et=`
    fragment ReviewBase on Review {
  id
  userId
  itemId
  rating
  createdAt
  updatedAt
}
    `,Bo=`
    fragment SummerEvent2025UserState on SummerEvent2025Status {
  creditsUsed
  questList {
    id
    status
  }
  rewardList {
    id
    status
  }
}
    `,Po=`
    fragment FileStatistics on FileStatistics {
  count
  size
}
    `,_o=`
    fragment CouponBase on Coupon {
  id
  code
  type
  amount
  status
  paymentItemIds
  createdAt
  updatedAt
  rule
  usage {
    id
    createdAt
    updatedAt
  }
}
    `,Mt=`
    fragment MessageBase on Message {
  id
  topicId
  authorId
  author {
    ...UserBase
  }
  createdAt
  updatedAt
  type
  content
  mediaId
  media {
    ...MediaBase
  }
  extra
  nonce
  replyToMessageId
}
    `,Ro=`
    fragment TaskSummaryBase on TaskSummary {
  id
  userId
  status
  priority
  runnerId
  startedAt
  endAt
  createdAt
  paidCredit
  mediaId
  batchMediaIds
  i2vProModel
  characteristics
  artworkCount
  promptsPreview
}
    `,Tt=`
    fragment UserPreview on User {
  ...UserBase
  followedByMe
}
    `,se=`
    fragment UserDetail on User {
  ...UserBase
  coverMedia {
    ...MediaBase
  }
  followedByMe
  followingMe
  followerCount
  followingCount
  inspiredCount
  followingWorldCount
}
    `,No=`
    fragment PaymentResultBase on PaymentResult {
  url
  orderId
  onerwayTransactionId
  onerwaySubProductType
  revenueInfo {
    revenue
    currency
  }
  codeId
  deepLink
}
    `,Mr=`
    fragment MembershipBase on Membership {
  membershipId
  tier
  privilege
}
    `,vt=`
    fragment UserSubscriptionBase on UserSubscription {
  provider
  planId
  interval
  status
  tier
  startAt
  endAt
  cancelAtPeriodEnd
  invoice
  lastPaymentError
  nextAction
}
    `,Bt=`
    fragment UserSubscriptionDetail on UserSubscription {
  ...UserSubscriptionBase
  futureSubscription {
    ...UserSubscriptionBase
  }
}
    `,Uo=`
    fragment SessionBase on Session {
  id
  userId
  ip
  ua
  client
  extra
  createdAt
  expiredAt
  location
  userAgentData
  isValid
  isCurrentSession
}
    `,Tr=`
    fragment AccessTokenBase on AccessToken {
  id
  userId
  name
  secret
  expireTime
  lastUsedAt
  createdAt
}
    `,vr=`
    fragment WebhookBase on UserWebhook {
  id
  userId
  name
  url
  scopes
  createdAt
  updatedAt
}
    `,Br=`
    fragment ExternalProfileBase on ExternalProfile {
  provider
  externalId
  name
  createdAt
  updatedAt
}
    `,je=`
    fragment BookmarkBase on Bookmark {
  id
  isPublic
  name
  order
  parentId
  rootId
  updatedAt
  userId
  createdAt
  coverMediaId
  coverMedia {
    ...MediaBase
  }
}
    `,Lo=`
    fragment WaitingQueueBase on WaitingQueueStat {
  name
  amount
  concurrency
  estimatedConsumptionTimePerUnit
}
    `,Oo=`
    fragment MFABase on MFA {
  id
  userId
  type
  status
  key
  createdAt
  updatedAt
}
    `,Pr=`
    fragment QuestBase on Quest {
  id
  name
  type
  published
  interval
  startAt
  endAt
  rewardType
  rewardAmount
  periodTimes
  canStack
  info {
    questId
    rewardedTimes
    rewardableTimes
    completedTimes
  }
  surveyLink
}
    `,_r=`
    fragment RoleBase on Role {
  id
  name
}
    `,Rr=`
    fragment CollectionCardSetBase on CollectionCardSet {
  id
  code
  data
  type
  status
  createdAt
  updatedAt
}
    `,ke=`
    fragment CollectionCardBase on CollectionCard {
  id
  code
  type
  rarity
  status
  hasNumber
  numberPrefix
  collectionCardSetId
  collectionCardSetOrder
  data
  createdAt
  updatedAt
}
    `,Fo=`
    fragment UserCollectionCardBase on UserCollectionCard {
  id
  userId
  collectionCardId
  serialNumber
  obtainedFrom
  collectionCard {
    ...CollectionCardBase
  }
  createdAt
  updatedAt
}
    `,ie=`
    fragment WorkflowBase on Workflow {
  id
  userId
  uniqueId
  createdAt
  updatedAt
  artworkId
  name
  coverMediaId
  published
}
    `,Z=`
    fragment WorkflowVersionBase on WorkflowVersion {
  id
  workflowId
  name
  status
  createdAt
  updatedAt
  data
}
    `,Nr=`
    fragment WorkflowForMe on Workflow {
  ...WorkflowBase
  draftVersion {
    ...WorkflowVersionBase
  }
  latestVersion {
    ...WorkflowVersionBase
  }
  latestPublishedVersion {
    ...WorkflowVersionBase
  }
}
    `,Wo=`
    fragment WorkflowArtworkForMe on Artwork {
  id
  likedCount
  liked
  commentCount
  workflow {
    ...WorkflowForMe
  }
}
    `,Pt=`
    fragment WorkflowCard on Artwork {
  ...ArtworkPreview
  tags {
    ...TagBase
  }
  workflow {
    ...WorkflowBase
    readme
    latestPublishedVersion {
      ...WorkflowVersionBase
    }
  }
}
    `,G=`
    fragment TaskBase on Task {
  id
  userId
  parameters
  outputs
  status
  priority
  runnerId
  startedAt
  endAt
  createdAt
  updatedAt
  retryCount
  paidCredit
  moderationAction {
    promptsModerationAction
  }
}
    `,be=`
    fragment TaskWithMedia on Task {
  ...TaskBase
  favoritedAt
  artworkIds
  paidCredit
  mediaId
  media {
    ...MediaBase
  }
}
    `,_t=`
    fragment BookmarkItemBase on BookmarkItem {
  id
  task {
    ...TaskWithMedia
  }
  artwork {
    ...ArtworkBase
    likedCount
    liked
    commentCount
  }
  mediaId
  media {
    ...MediaBase
  }
  model {
    ...GenerationModelPreview
  }
  order
  createdAt
  updatedAt
}
    `,de=`
    fragment WorldBase on World {
  id
  artworkId
  user {
    ...UserBase
  }
  name
  description
  locales
  mediaId
  media {
    ...MediaBase
  }
  followedByMe
  followerCount
}
    `,_e=`
    fragment CharacterBase on Character {
  id
  artworkId
  name
  description
  locales
  mediaId
  media {
    ...MediaBase
  }
  worlds {
    ...WorldBase
  }
  usageCount
}
    `,Rt=`
    fragment ArtworkWithWorldCharacterBase on Artwork {
  ...ArtworkBase
  bookmarkedByMe
  world {
    ...WorldBase
  }
  character {
    ...CharacterBase
  }
  tags {
    ...TagBase
  }
}
    `,Vo=`
    fragment BookmarkCharacterItemBase on BookmarkItem {
  ...BookmarkItemBase
  artwork {
    ...ArtworkWithWorldCharacterBase
  }
}
    `,Ur=`
    fragment CharacterPresetBase on CharacterPreset {
  id
  characterId
  parameters
  modelId
  modelType
  resolvedParameters {
    prompts
    modelId
    lora
    resolvedModel {
      ...GenerationModelVersionBase
    }
    resolvedLoraList {
      ...GenerationModelVersionBase
    }
  }
}
    `,Lr=`
    fragment CharacterDetail on Character {
  ...CharacterBase
  user {
    ...UserBase
  }
  modelVersions {
    ...GenerationModelVersionBase
    model {
      ...GenerationModelBase
      tags {
        ...TagBase
      }
    }
    modelType
  }
  resources(first: 1) {
    nodes {
      artworkId
      type
    }
  }
  presets(first: 1) {
    nodes {
      ...CharacterPresetBase
    }
  }
}
    `,xo=`
    fragment ArtworkWithWorldCharacterDetail on Artwork {
  ...ArtworkWithWorldCharacterBase
  commentCount
  character {
    ...CharacterDetail
  }
}
    `,Nt=`
    fragment TaskStageDetail on TaskStage {
  id
  taskId
  index
  type
  status
  priority
  input
  output
  metadata
  createdAt
  updatedAt
  startedAt
  endAt
  retryCount
  extra
}
    `,Ut=`
    fragment TaskDetail on Task {
  ...TaskBase
  favoritedAt
  artworkId
  artworkIds
  artworks {
    createdAt
    hidePrompts
    id
    isNsfw
    isSensitive
    mediaId
    title
    updatedAt
    flag {
      ...ModerationFlagPreview
    }
  }
  mediaId
  media {
    ...MediaBase
  }
  stages {
    ...TaskStageDetail
  }
}
    `,Ye=`
    fragment NotificationBase on Notification {
  id
  type
  userId
  relatedUserIds
  relatedUsers {
    ...UserBase
  }
  refId
  refType
  refTitle
  refMedia {
    ...MediaBase
  }
  artwork {
    ...ArtworkBase
    character {
      id
    }
  }
  artworkId
  createdAt
  updatedAt
  title
  content
  locales
  iconMedia {
    ...MediaBase
  }
  unread
  data {
    rank {
      mediaType
      rankNumber
    }
    world {
      id
      name
    }
  }
  extra
}
    `,Go=`
    fragment AllEvents on Events {
  taskUpdated {
    ...TaskDetail
  }
  newNotification {
    ...NotificationBase
  }
}
    `,Ko=`
    query listCampaignAds($lang: String!, $category: String) {
  campaignAds(language: $lang, category: $category) {
    title
    description
    trackingId
    type
    media
    targetUrl
    isShownForYearlyMember
    isShownForMonthlyMember
    isAd
    isClickableForNonLoginUser
  }
}
    `,Ho=`
    mutation opBanUser($id: ID!) {
  opBanUser(id: $id)
}
    `,jo=`
    mutation opUnBanUser($id: ID!) {
  opUnBanUser(id: $id)
}
    `,Yo=`
    mutation opShadowBanUser($id: ID!) {
  opShadowBanUser(id: $id)
}
    `,zo=`
    mutation opDeleteAllArtworksOfUser($userId: ID!) {
  opDeleteAllArtworksOfUser(userId: $userId)
}
    `,Qo=`
    mutation opDeleteAllModelsOfUser($userId: ID!) {
  opDeleteAllModelsOfUser(userId: $userId)
}
    `,Jo=`
    mutation opDeleteAllMessagesOfUser($userId: ID!) {
  opDeleteAllMessagesOfUser(userId: $userId)
}
    `,Zo=`
    mutation opResetUserAvatar($userId: ID!) {
  opResetUserAvatar(userId: $userId)
}
    `,Xo=`
    mutation opResetUserCover($userId: ID!) {
  opResetUserCover(userId: $userId)
}
    `,qo=`
    mutation opMarkAsNSFW($artworkId: ID, $modelId: ID, $mangaId: ID, $target: Boolean!) {
  opMarkAsNSFW(
    artworkId: $artworkId
    modelId: $modelId
    mangaId: $mangaId
    target: $target
  )
}
    `,ea=`
    mutation opModerationNSFW($input: ModerationNSFWInput!) {
  opModerationNSFW(input: $input)
}
    `,ta=`
    mutation opRefreshTextSafetyScore($input: RefreshTextSafetyScoreInput!) {
  opRefreshTextSafetyScore(input: $input) {
    artworkId
    modelId
    textSafetyScore
  }
}
    `,ra=`
    mutation opRefreshMediaSafetyScore($input: RefreshMediaSafetyScoreInput!) {
  opRefreshMediaSafetyScore(input: $input) {
    artworkId
    mediaSafetyScore
  }
}
    `,na=`
    mutation opChangeUserQuota($currency: String!, $amount: Int!, $userId: ID, $username: String, $bulkId: String, $logReason: String, $message: String) {
  opChangeUserQuota(
    currency: $currency
    amount: $amount
    userId: $userId
    username: $username
    bulkId: $bulkId
    logReason: $logReason
    message: $message
  )
}
    `,oa=`
    mutation opSetUserSubscriptionInfo($userId: ID!, $input: SetUserSubscriptionInfoInput!) {
  opSetUserSubscriptionInfo(userId: $userId, input: $input)
}
    `,aa=`
    mutation upsertArtwork($input: UpsertArtworkInput!, $id: ID) {
  upsertArtwork(input: $input, id: $id) {
    ...ArtworkBase
  }
}
    ${v}
${f}
${l}
${T}`,sa=`
    mutation deleteArtwork($id: ID!) {
  deleteArtwork(id: $id)
}
    `,ia=`
    mutation deleteManga($id: ID!) {
  deleteManga(id: $id)
}
    `,da=`
    mutation markArtwork($artworkId: ID!, $type: MarkType!, $target: Boolean!) {
  markArtwork(artworkId: $artworkId, type: $type, target: $target)
}
    `,ca=`
    mutation markManga($mangaId: ID!, $type: MarkType!, $target: Boolean!) {
  markManga(mangaId: $mangaId, type: $type, target: $target)
}
    `,ua=`
    query listArtworks($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $isNsfw: Boolean, $tag: String, $q: String, $relevantArtworkId: ID, $keyword: String, $text: String, $hidePrompts: Boolean, $isSafeSearch: Boolean, $feed: String, $authorId: ID, $challenge: Int, $archived: Boolean, $isPrivate: Boolean, $i2vPro: Boolean, $animatedBaseArtworkId: ID, $modelId: ID, $modelVersionId: ID, $loraId: ID, $loraVersionId: ID, $workflowId: ID, $workflowVersionId: ID, $time: DateRange, $type: ArtworkType, $types: [ArtworkType], $rankMediaType: RankMediaType, $worldId: ID, $characterId: ID) {
  artworks(
    before: $before
    after: $after
    first: $first
    last: $last
    orderBy: $orderBy
    isNsfw: $isNsfw
    tag: $tag
    q: $q
    relevantArtworkId: $relevantArtworkId
    keyword: $keyword
    text: $text
    hidePrompts: $hidePrompts
    isSafeSearch: $isSafeSearch
    feed: $feed
    authorId: $authorId
    challenge: $challenge
    archived: $archived
    isPrivate: $isPrivate
    i2vPro: $i2vPro
    animatedBaseArtworkId: $animatedBaseArtworkId
    modelId: $modelId
    modelVersionId: $modelVersionId
    loraId: $loraId
    loraVersionId: $loraVersionId
    worldId: $worldId
    characterId: $characterId
    workflowId: $workflowId
    workflowVersionId: $workflowVersionId
    time: $time
    type: $type
    types: $types
    rankMediaType: $rankMediaType
  ) {
    edges {
      node {
        ...ArtworkWithMangaPreview
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    totalCount
  }
}
    ${Ao}
${Be}
${v}
${f}
${l}
${T}
${S}
${w}
${At}
${Dt}`,la=`
    query listUserLikedArtworks($userId: ID!, $before: String, $after: String, $first: Int, $last: Int, $isNsfw: Boolean, $types: [ArtworkType!]) {
  user(id: $userId) {
    likedArtworks(
      before: $before
      after: $after
      first: $first
      last: $last
      isNsfw: $isNsfw
      types: $types
    ) {
      edges {
        node {
          ...ArtworkPreview
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
}
    ${Be}
${v}
${f}
${l}
${T}
${S}
${w}`,fa=`
    query listUserLikedMangaList($userId: ID!, $before: String, $after: String, $first: Int, $last: Int, $isNsfw: Boolean) {
  user(id: $userId) {
    likedMangaList(
      before: $before
      after: $after
      first: $first
      last: $last
      isNsfw: $isNsfw
    ) {
      edges {
        node {
          ...UserLikedManga
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
}
    ${Mo}
${Eo}
${Co}
${At}
${f}
${l}
${S}
${w}
${Dt}
${v}
${T}`,ga=`
    query getArtwork($id: ID!) {
  artwork(id: $id) {
    ...ArtworkDetail
  }
}
    ${br}
${v}
${f}
${l}
${T}
${S}
${w}
${B}`,$a=`
    query getArtworkWithTaskDetail($id: ID!) {
  artwork(id: $id) {
    ...ArtworkWithTaskDetailBase
  }
}
    ${Do}
${br}
${v}
${f}
${l}
${T}
${S}
${w}
${B}`,pa=`
    query getManga($id: ID!) {
  manga(id: $id) {
    ...MangaBase
    artwork {
      ...ArtworkBase
      author {
        ...UserBase
      }
    }
  }
}
    ${At}
${f}
${l}
${v}
${T}
${S}
${w}`,ma=`
    query getMangaChapter($mangaId: ID!, $chapterId: ID, $index: Int) {
  manga(id: $mangaId) {
    chapter(id: $chapterId, index: $index) {
      ...MangaChapterBase
    }
  }
}
    ${Dt}
${f}
${l}`,ha=`
    mutation createChatWorkspace($initialImage: String!, $title: String) {
  createChatWorkspace(initialImage: $initialImage, title: $title) {
    id
    userId
    title
    initialImage
    private
  }
}
    `,Ia=`
    mutation updateChatWorkspace($workspaceId: ID!, $title: String!) {
  updateChatWorkspace(workspaceId: $workspaceId, title: $title) {
    createdAt
    id
    initialImage
    private
    title
    updatedAt
    userId
  }
}
    `,ya=`
    mutation updateChatTaskReaction($workspaceId: ID!, $taskId: ID!, $mediaId: String!, $likeOrDislike: Boolean) {
  updateChatTaskReaction(
    workspaceId: $workspaceId
    taskId: $taskId
    mediaId: $mediaId
    likeOrDislike: $likeOrDislike
  ) {
    taskId
    mediaId
    likeOrDislike
  }
}
    `,ka=`
    mutation linkTaskToWorkspace($workspaceId: ID!, $taskId: ID!) {
  linkTaskToWorkspace(workspaceId: $workspaceId, taskId: $taskId)
}
    `,wa=`
    mutation deleteChatWorkspace($workspaceId: ID!) {
  deleteChatWorkspace(workspaceId: $workspaceId)
}
    `,Sa=`
    mutation createChatEditingSceneTask($input: CreateChatEditingSceneTaskInput!) {
  createChatEditingSceneTask(input: $input) {
    id
  }
}
    `,ba=`
    query getChatWorkspace($id: ID!) {
  chatWorkspace(id: $id) {
    ...ChatWorkspaceBaseFragment
  }
}
    ${Ar}`,Aa=`
    query listChatWorkspaces($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $userId: ID) {
  chatWorkspaces(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    userId: $userId
  ) {
    edges {
      node {
        ...ChatWorkspaceBaseFragment
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    totalCount
  }
}
    ${Ar}`,Da=`
    query getChatWorkspaceTasks($workspaceId: ID!, $before: String, $after: String, $first: Int, $last: Int, $orderBy: String) {
  chatWorkspaceTasks(
    workspaceId: $workspaceId
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
        ...TaskWithMedia
      }
    }
  }
}
    ${be}
${G}
${f}
${l}`,Ca=`
    query getChatTaskReactionByWorkspace($workspaceId: ID!) {
  chatTaskReactionByWorkspace(workspaceId: $workspaceId) {
    ...ChatTaskReactionBase
  }
}
    ${Dr}`,Ea=`
    query getChatTaskReactionByMedia($mediaId: String!) {
  chatTaskReactionByMedia(mediaId: $mediaId) {
    ...ChatTaskReactionBase
  }
}
    ${Dr}`,Ma=`
    query listChatEditingScenes {
  chatEditingScenes {
    ...ChatEditingScenePageConfigBase
  }
}
    ${Cr}`,Ta=`
    query getChatEditingScene($sceneId: String!) {
  chatEditingScene(sceneId: $sceneId) {
    ...ChatEditingScenePageConfigBase
  }
}
    ${Cr}`,va=`
    mutation report($refId: ID!, $refType: RefType!, $reason: ReportReason!, $extra: JSONObject) {
  report(refId: $refId, refType: $refType, reason: $reason, extra: $extra)
}
    `,Ba=`
    mutation submitRating($input: SubmitRatingInput!) {
  submitRating(input: $input) {
    userRankId
  }
}
    `,Pa=`
    query getContest($id: ID!) {
  contest(id: $id) {
    ...ContestBase
  }
}
    ${Er}
${f}
${l}`,_a=`
    query listContests($before: String, $after: String, $first: Int, $last: Int, $published: Boolean, $active: Boolean) {
  contests(
    before: $before
    after: $after
    first: $first
    last: $last
    published: $published
    active: $active
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      cursor
      node {
        ...ContestBase
      }
    }
  }
}
    ${Er}
${f}
${l}`,Ra=`
    query getRankPairs {
  rankPairs {
    ...RankPairBase
  }
}
    ${vo}
${To}
${f}
${l}`,Na=`
    mutation upsertGenerationModel($id: ID, $input: UpsertGenerationModelInput!) {
  upsertGenerationModel(id: $id, input: $input) {
    ...GenerationModelDetail
  }
}
    ${He}
${K}
${O}
${f}
${l}
${R}
${B}
${S}
${w}
${Pe}
${Ke}
${Ge}
${v}
${T}
${ae}
${ye}`,Ua=`
    mutation upsertGenerationModelVersion($id: ID, $input: UpsertGenerationModelVersionInput!) {
  upsertGenerationModelVersion(id: $id, input: $input) {
    ...GenerationModelVersionDetail
    model {
      ...GenerationModelDetail
    }
  }
}
    ${Ge}
${R}
${f}
${l}
${v}
${T}
${He}
${K}
${O}
${B}
${S}
${w}
${Pe}
${Ke}
${ae}
${ye}`,La=`
    mutation importExternalModel($url: String!) {
  importExternalModel(input: {url: $url}) {
    fileId
    file {
      ...FileUploadRecordBase
    }
    exists
    hash
    type
    name
    author
    description
    tags
    isNsfw
    extra
    mediaList {
      ...MediaBase
    }
    items {
      name
      url
      mediaList {
        ...MediaBase
      }
    }
  }
}
    ${ae}
${f}
${l}`,Oa=`
    mutation markGenerationModel($modelId: ID!, $type: GenerationModelMarkType!, $target: Boolean!) {
  markGenerationModel(modelId: $modelId, type: $type, target: $target)
}
    `,Fa=`
    mutation deleteGenerationModel($id: ID!) {
  deleteGenerationModel(id: $id)
}
    `,Wa=`
    mutation submitReview($input: ReviewInput!) {
  review(input: $input) {
    ...ReviewBase
  }
}
    ${Et}`,Va=`
    mutation reviewMemberOnlyModelEarlyAccess($input: ReviewCommentInput!) {
  reviewMemberOnlyModelEarlyAccess(input: $input)
}
    `,xa=`
    query getGenerationModel($id: ID!) {
  generationModel(id: $id) {
    ...GenerationModelDetail
    myReview {
      ...ReviewBase
    }
  }
}
    ${He}
${K}
${O}
${f}
${l}
${R}
${B}
${S}
${w}
${Pe}
${Ke}
${Ge}
${v}
${T}
${ae}
${ye}
${Et}`,Ga=`
    query getGenerationModelDetailByVersionId($id: ID!) {
  generationModelVersion(id: $id) {
    ...GenerationModelVersionDetail
    model {
      ...GenerationModelDetail
      myReview {
        ...ReviewBase
      }
    }
  }
}
    ${Ge}
${R}
${f}
${l}
${v}
${T}
${He}
${K}
${O}
${B}
${S}
${w}
${Pe}
${Ke}
${ae}
${ye}
${Et}`,Ka=`
    query getGenerationModelByVersionId($id: ID!) {
  generationModelVersion(id: $id) {
    ...GenerationModelVersionPreview
    model {
      ...GenerationModelBase
    }
  }
}
    ${Ct}
${R}
${f}
${l}
${O}`,Ha=`
    query getGenerationModelByVersionIdForArtwork($id: ID!) {
  generationModelVersion(id: $id) {
    ...GenerationModelVersionPreview
    model {
      liked
      likedCount
      ...GenerationModelBase
    }
  }
}
    ${Ct}
${R}
${f}
${l}
${O}`,ja=`
    query getGenerationModelVersion($fileHash: String) {
  generationModelVersion(fileHash: $fileHash) {
    ...GenerationModelVersionBase
  }
}
    ${R}
${f}
${l}`,Ya=`
    query listGenerationModels($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $tag: String, $type: GenerationModelType, $types: [GenerationModelType], $timeRange: DateRange, $keyword: String, $feed: String, $authorId: ID, $category: String, $loraBaseModelTypes: [GenerationModelType!], $loraBaseModelIds: [ID!]) {
  generationModels(
    before: $before
    after: $after
    first: $first
    last: $last
    orderBy: $orderBy
    tag: $tag
    type: $type
    types: $types
    timeRange: $timeRange
    keyword: $keyword
    feed: $feed
    authorId: $authorId
    category: $category
    loraBaseModelTypes: $loraBaseModelTypes
    loraBaseModelIds: $loraBaseModelIds
  ) {
    edges {
      node {
        ...GenerationModelPreview
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    totalCount
  }
}
    ${K}
${O}
${f}
${l}
${R}
${B}`,za=`
    query listGenerationModelsWithTrainingTask($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $type: GenerationModelType, $types: [GenerationModelType], $timeRange: DateRange, $feed: String, $authorId: ID) {
  generationModels(
    before: $before
    after: $after
    first: $first
    last: $last
    orderBy: $orderBy
    type: $type
    types: $types
    timeRange: $timeRange
    feed: $feed
    authorId: $authorId
  ) {
    edges {
      node {
        ...GenerationModelPreview
        trainingTask {
          ...TrainingTaskBase
        }
        loraTrainingTasks {
          ...TrainingTaskBase
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    totalCount
  }
}
    ${K}
${O}
${f}
${l}
${R}
${B}
${ye}`,Qa=`
    query listGenerationModelVersions($modelId: ID!, $before: String, $after: String, $first: Int, $last: Int, $baseModelType: GenerationModelType) {
  generationModelVersions(
    before: $before
    after: $after
    first: $first
    last: $last
    modelId: $modelId
    baseModelType: $baseModelType
  ) {
    edges {
      node {
        ...GenerationModelVersionPreview
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    totalCount
  }
}
    ${Ct}
${R}
${f}
${l}`,Ja=`
    query listUserBookmarkedGenerationModels($userId: ID!, $before: String, $after: String, $first: Int, $last: Int, $modelType: GenerationModelType, $modelTypes: [GenerationModelType!]) {
  user(id: $userId) {
    bookmarkedGenerationModels(
      before: $before
      after: $after
      first: $first
      last: $last
      modelType: $modelType
      modelTypes: $modelTypes
    ) {
      edges {
        node {
          ...GenerationModelPreview
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${K}
${O}
${f}
${l}
${R}
${B}`,Za=`
    query listMyBookmarkedGenerationModels($before: String, $after: String, $first: Int, $last: Int, $modelType: GenerationModelType, $modelTypes: [GenerationModelType], $keyword: String, $loraBaseModelTypes: [GenerationModelType!], $loraBaseModelIds: [ID!]) {
  me {
    id
    bookmarkedGenerationModels(
      before: $before
      after: $after
      first: $first
      last: $last
      modelType: $modelType
      modelTypes: $modelTypes
      keyword: $keyword
      loraBaseModelTypes: $loraBaseModelTypes
      loraBaseModelIds: $loraBaseModelIds
    ) {
      edges {
        node {
          ...GenerationModelPreview
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${K}
${O}
${f}
${l}
${R}
${B}`,Xa=`
    query listUserLikedGenerationModel($userId: ID!, $before: String, $after: String, $first: Int, $last: Int, $isNsfw: Boolean, $types: [GenerationModelType!]) {
  user(id: $userId) {
    likedGenerationModelList(
      before: $before
      after: $after
      first: $first
      last: $last
      isNsfw: $isNsfw
      types: $types
    ) {
      edges {
        node {
          ...GenerationModelPreview
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${K}
${O}
${f}
${l}
${R}
${B}`,qa=`
    query getReviewSummary($itemId: ID!) {
  reviewSummary(itemId: $itemId) {
    ...ReviewSummaryBase
  }
}
    ${Pe}`,es=`
    query getPrivateGenerationModelTotalCount($authorId: ID, $type: GenerationModelType, $isPrivate: Boolean) {
  generationModels(
    authorId: $authorId
    type: $type
    isPrivate: $isPrivate
    last: 1
  ) {
    totalCount
  }
}
    `,ts=`
    mutation createGrowthEventTask($sceneId: String!, $args: JSONObject!) {
  createLotteryGenerationTask(sceneId: $sceneId, args: $args) {
    ...TaskBase
  }
}
    ${G}`,rs=`
    query summerEvent2025GetState {
  me {
    summerEvent2025Status {
      ...SummerEvent2025UserState
    }
  }
}
    ${Bo}`,ns=`
    mutation summerEvent2025ClaimReward($nodeId: String!) {
  summerEvent2025RedeemStep(step: $nodeId)
}
    `,os=`
    mutation rollAugustEventLottery($isTenRoll: Boolean!) {
  rollLottery(
    lotteryType: "augustEvent2025"
    augustEvent2025Input: {useEventToken: true, isTenRoll: $isTenRoll}
  ) {
    cardCodes
    isGuarantee
    guaranteeType
  }
}
    `,as=`
    query getAugustCardDrawStatus {
  me {
    id
    augustEvent2025Status {
      rollCount
      ownedCardCodes
      eventTokenCount
      ssrPityCount
      srPityCount
      ssrPityRemaining
      srPityRemaining
    }
  }
}
    `,ss=`
    query listAugustEventLotteryRecords($userId: ID!, $before: String, $after: String, $first: Int, $last: Int) {
  lotteries(
    userId: $userId
    before: $before
    after: $after
    first: $first
    last: $last
    lotteryType: "augustEvent2025"
  ) {
    edges {
      node {
        id
        extra
        createdAt
        updatedAt
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${Ie}`,is=`
    query listCards($cardCodes: [String!]!) {
  collectionCardsByCodes(cardCodes: $cardCodes) {
    ...CollectionCardBase
  }
}
    ${ke}`,ds=`
    mutation uploadMedia($input: UploadMediaInput!) {
  uploadMedia(input: $input) {
    uploadUrl
    externalId
    mediaId
    media {
      ...MediaBase
    }
  }
}
    ${f}
${l}`,cs=`
    mutation uploadFileMultiPart($step: UploadMultiPartStep!, $input: UploadMultiPartInput!) {
  uploadFileMultiPart(step: $step, input: $input) {
    uploadId
    uploadUrl
    exists
  }
}
    `,us=`
    mutation deleteFile($id: ID!) {
  deleteFile(id: $id)
}
    `,ls=`
    query getMedia($id: String!) {
  media(id: $id) {
    ...MediaBase
  }
}
    ${f}
${l}`,fs=`
    query getFile($id: ID!) {
  fileUploadRecord(id: $id) {
    ...FileUploadRecordBase
  }
}
    ${ae}`,gs=`
    query getFileStatistics($userId: ID!, $scope: String, $q: String) {
  fileStatistics(userId: $userId, q: $q, scope: $scope) {
    ...FileStatistics
  }
}
    ${Po}`,$s=`
    query listFiles($userId: ID!, $scope: String, $q: String, $after: String, $first: Int, $before: String, $last: Int, $orderBy: String) {
  files(
    userId: $userId
    scope: $scope
    q: $q
    after: $after
    first: $first
    before: $before
    last: $last
    orderBy: $orderBy
  ) {
    edges {
      cursor
      node {
        ...FileUploadRecordBase
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${ae}
${Ie}`,ps=`
    query getFileUploadRecord($id: ID!) {
  fileUploadRecord(id: $id) {
    ...FileUploadRecordBase
  }
}
    ${ae}`,ms=`
    mutation intentToPay($itemId: String!, $interval: Interval, $opt: PaymentOpt) {
  intentToPay(itemId: $itemId, interval: $interval, opt: $opt) {
    ...PaymentResultBase
  }
}
    ${No}`,hs=`
    mutation setupPaymentAccount($opts: SetupPaymentAccountOption!) {
  setupPaymentAccount(opt: $opts) {
    paddleCheckoutParams
    braintreeClientToken
  }
}
    `,Is=`
    mutation verifyReceipt($provider: String!, $transactionId: String!) {
  verifyReceipt(input: {provider: $provider, transactionId: $transactionId}) {
    orderId
  }
}
    `,ys=`
    mutation cancelSubscription {
  cancelSubscription
}
    `,ks=`
    mutation verifyCreditCoupon($couponCode: String!) {
  verifyCreditCoupon(couponCode: $couponCode) {
    id
    code
    type
    amount
    status
    paymentItemIds
    createdAt
    updatedAt
  }
}
    `,ws=`
    mutation resumeSubscription {
  resumeSubscription {
    ...UserSubscriptionDetail
  }
}
    ${Bt}
${vt}`,Ss=`
    query getMyPaymentAccount($provider: String!) {
  me {
    id
    paymentAccount(provider: $provider) {
      provider
      externalId
    }
  }
}
    `,bs=`
    query getAllPaymentItems($type: PaymentItemType, $couponCode: String) {
  paymentItems(type: $type, couponCode: $couponCode) {
    id
    planId
    tier
    type
    prices {
      interval
      promotionalCode
      currencies {
        amount
        originalAmount
        currency
        by
      }
    }
    privilege
    values {
      tier
      value
      creditsAfterBoosts
      extraPackageBoosts {
        type
        name
        percentage
        category
        endTime
      }
    }
    oneTimePurchase
    monthlyPurchase
  }
}
    `,As=`
    query getMyMembership {
  me {
    id
    membership {
      ...MembershipBase
    }
    subscription {
      ...UserSubscriptionDetail
    }
  }
}
    ${Mr}
${Bt}
${vt}`,Ds=`
    query getUserMembership($userId: ID!) {
  user(id: $userId) {
    membership {
      ...MembershipBase
    }
    subscription {
      ...UserSubscriptionDetail
    }
  }
}
    ${Mr}
${Bt}
${vt}`,Cs=`
    query getOrderById($orderId: ID!) {
  order(id: $orderId) {
    id
    userId
    itemId
    provider
    externalId
    status
    amount
    currency
    extra
    createdAt
    updatedAt
  }
}
    `,Es=`
    query listLotteriesByOrderId($orderId: ID, $lotteryType: String!, $first: Int, $last: Int) {
  lotteries(
    orderId: $orderId
    lotteryType: $lotteryType
    first: $first
    last: $last
  ) {
    edges {
      node {
        lotteryType
        rewardType
        rewardValue
        extra
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    totalCount
  }
}
    `,Ms=`
    query getRemainingRollUntilBonus($lotteryType: String!) {
  remainingRollUntilBonus(lotteryType: $lotteryType)
}
    `,Ts=`
    mutation sendMessage($topicId: ID!, $input: MessageInput!) {
  sendMessage(topicId: $topicId, input: $input) {
    ...MessageBase
  }
}
    ${Mt}
${S}
${w}
${f}
${l}`,vs=`
    mutation deleteMessage($messageId: ID!, $topicRefType: RefType!) {
  deleteMessage(messageId: $messageId, topicRefType: $topicRefType)
}
    `,Bs=`
    query getMessage($id: ID!) {
  message(id: $id) {
    ...MessageBase
  }
}
    ${Mt}
${S}
${w}
${f}
${l}`,Ps=`
    query listMessages($topicId: ID!, $before: String, $after: String, $first: Int, $last: Int, $messagesId: IDRange, $time: DateRange) {
  messages(
    topicId: $topicId
    before: $before
    after: $after
    first: $first
    last: $last
    id: $messagesId
    time: $time
  ) {
    edges {
      node {
        ...MessageBase
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
  }
}
    ${Mt}
${S}
${w}
${f}
${l}`,_s=`
    query getMessageCount($topicId: ID!) {
  messages(topicId: $topicId) {
    totalCount
  }
}
    `,Rs=`
    query getSpringEventState {
  me {
    id
    springEventPuzzleStatus {
      rollCount
      eventTokenCount
      puzzlePieces
      pointerPowerGauge
      pointerPowerBounty
      pointerPowerCount
    }
  }
}
    `,Ns=`
    query getSpringEventBadges {
  me {
    id
    profile(key: "springEvent2025")
  }
}
    `,Us=`
    mutation buySpringTokenWithCredits($quantity: Int) {
  purchaseLotteryToken(lotteryType: "springEvent2025", quantity: $quantity)
}
    `,Ls=`
    mutation useSpringEventToken {
  rollLottery(
    lotteryType: "springEvent2025"
    springEvent2025Input: {useEventToken: true}
  ) {
    puzzlePieces
  }
}
    `,Os=`
    mutation useSpringEventPointerPower($pieceIndex: Int!) {
  rollLottery(
    lotteryType: "springEvent2025"
    springEvent2025Input: {usePointerPower: true, puzzlePieceIndex: $pieceIndex}
  ) {
    puzzlePieces
  }
}
    `,Fs=`
    mutation useSpringEventFinalBoost {
  rollLottery(
    lotteryType: "springEvent2025"
    springEvent2025Input: {useGuarantee: true}
  ) {
    puzzlePieces
  }
}
    `,Ws=`
    mutation resetSpringEventProgress {
  resetSpringEvent2025Status
}
    `,Vs=`
    mutation upsertTag($id: ID, $input: UpsertTagInput!) {
  upsertTag(id: $id, input: $input) {
    ...TagBase
  }
}
    ${B}`,xs=`
    mutation deleteTag($id: ID!) {
  deleteTag(id: $id)
}
    `,Gs=`
    query getTag($id: ID, $name: String) {
  tag(id: $id, name: $name) {
    ...TagBase
  }
}
    ${B}`,Ks=`
    query listTags($before: String, $after: String, $first: Int, $last: Int, $category: String, $q: String, $orderBy: String, $rootTagId: ID, $health: FloatRange, $feed: String, $mediaId: String) {
  tags(
    before: $before
    after: $after
    first: $first
    last: $last
    category: $category
    q: $q
    orderBy: $orderBy
    rootTagId: $rootTagId
    health: $health
    feed: $feed
    mediaId: $mediaId
  ) {
    edges {
      cursor
      node {
        ...TagBase
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    totalCount
  }
}
    ${B}`,Hs=`
    mutation createGenerationTask($parameters: JSONObject!) {
  createGenerationTask(parameters: $parameters) {
    ...TaskBase
  }
}
    ${G}`,js=`
    mutation createArtworkFromTaskV2($taskId: ID!, $input: CreateArtworkFromTaskInput!) {
  createArtworkFromTaskV2(taskId: $taskId, input: $input) {
    ...ArtworkBase
  }
}
    ${v}
${f}
${l}
${T}`,Ys=`
    mutation cancelGenerationTask($taskId: ID!, $reason: String) {
  cancelGenerationTask(id: $taskId, reason: $reason) {
    ...TaskBase
  }
}
    ${G}`,zs=`
    mutation deleteGenerationTask($taskId: ID!) {
  deleteGenerationTask(id: $taskId)
}
    `,Qs=`
    mutation rerunGenerationTask($taskId: ID!) {
  rerunGenerationTask(id: $taskId) {
    ...TaskBase
  }
}
    ${G}`,Js=`
    mutation updateGenerationTask($id: ID!, $input: UpdateGenerationTaskInput!) {
  updateGenerationTask(id: $id, input: $input) {
    ...TaskDetail
  }
}
    ${Ut}
${G}
${l}
${f}
${Nt}`,Zs=`
    mutation createTrainingTask($input: CreateTrainingTaskInput!) {
  createTrainingTask(input: $input) {
    ...TrainingTaskBase
  }
}
    ${ye}`,Xs=`
    mutation archiveTrainingTask($id: ID!) {
  archiveTrainingTask(id: $id)
}
    `,qs=`
    query listMyTasks($status: String, $before: String, $after: String, $first: Int, $last: Int, $parameterFields: [String!]) {
  me {
    id
    tasks(
      status: $status
      before: $before
      after: $after
      first: $first
      last: $last
      parameterFields: $parameterFields
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          ...TaskWithMedia
        }
      }
    }
  }
}
    ${be}
${G}
${f}
${l}`,ei=`
    query listUserTasks($before: String, $after: String, $first: Int, $last: Int, $userId: ID!, $status: String, $keyword: String, $sceneId: String, $sceneIds: [String!], $createdAt: DateRange, $parameterFields: [String!], $workflowId: String, $workflowVersionId: String) {
  tasks(
    before: $before
    after: $after
    first: $first
    last: $last
    userId: $userId
    status: $status
    keyword: $keyword
    sceneId: $sceneId
    sceneIds: $sceneIds
    createdAt: $createdAt
    parameterFields: $parameterFields
    workflowId: $workflowId
    workflowVersionId: $workflowVersionId
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
        ...TaskWithMedia
      }
    }
  }
}
    ${be}
${G}
${f}
${l}`,ti=`
    query listUserTaskSummaries($before: String, $after: String, $first: Int, $last: Int, $userId: ID!, $status: String, $keyword: String, $createdAt: DateRange) {
  taskSummaries(
    before: $before
    after: $after
    first: $first
    last: $last
    userId: $userId
    status: $status
    keyword: $keyword
    createdAt: $createdAt
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
        ...TaskSummaryBase
      }
    }
  }
}
    ${Ro}`,ri=`
    query getTaskById($id: ID!) {
  task(id: $id) {
    ...TaskDetail
  }
}
    ${Ut}
${G}
${l}
${f}
${Nt}`,ni=`
    query getTrainingTaskById($id: ID!) {
  trainingTask(id: $id) {
    ...TrainingTaskBase
  }
}
    ${ye}`,oi=`
    query detectNeedToEnablePromptHelper($parameters: JSONObject!) {
  detectNeedToEnablePromptHelper(parameters: $parameters) {
    needToEnable
    enableReasonCode
  }
}
    `,ai=`
    mutation register($input: RegisterOrLoginInput!) {
  register(input: $input) {
    ...UserBase
  }
}
    ${S}
${w}`,si=`
    mutation login($input: RegisterOrLoginInput!) {
  login(input: $input) {
    ...UserDetail
  }
}
    ${se}
${S}
${w}
${f}
${l}`,ii=`
    mutation refreshToken {
  refreshToken
}
    `,di=`
    mutation forgetPassword($input: ForgetPasswordInput!) {
  forgetPassword(input: $input)
}
    `,ci=`
    mutation genCode($input: GenCodeInput!) {
  genCode(input: $input)
}
    `,ui=`
    mutation verifyEmail($code: String) {
  verifyEmail(code: $code)
}
    `,li=`
    mutation setupMFA($input: SetupMFAInput!) {
  setupMFA(input: $input) {
    url
    recoveryCode
  }
}
    `,fi=`
    mutation updateUserInfo($input: UpdateUserInfoInput!) {
  updateUserInfo(input: $input) {
    ...UserDetail
  }
}
    ${se}
${S}
${w}
${f}
${l}`,gi=`
    mutation updateUserSensitiveInfos($input: UpdateUserSensitiveInfosInput!) {
  updateUserSensitiveInfos(input: $input) {
    ...UserDetail
  }
}
    ${se}
${S}
${w}
${f}
${l}`,$i=`
    mutation unlinkExternal($type: String!) {
  unlinkExternal(type: $type)
}
    `,pi=`
    mutation setPushToken($token: String!, $withdraw: Boolean) {
  setPushToken(input: {token: $token, withdraw: $withdraw}) {
    acknowledged
  }
}
    `,mi=`
    mutation upsertBookmark($id: ID, $input: UpsertBookmarkInput!) {
  upsertBookmark(id: $id, input: $input) {
    ...BookmarkBase
  }
}
    ${je}
${f}
${l}`,hi=`
    mutation deleteBookmark($id: ID!) {
  deleteBookmark(id: $id)
}
    `,Ii=`
    mutation setFollowState($userId: ID!, $target: Boolean!, $private: Boolean) {
  setFollowState(userId: $userId, target: $target, private: $private)
}
    `,yi=`
    mutation withdrawAccount($code: String, $force: Boolean, $cancel: Boolean) {
  withdrawAccount(code: $code, force: $force, cancel: $cancel)
}
    `,ki=`
    mutation setReferrer($code: String!) {
  setReferrer(code: $code)
}
    `,wi=`
    mutation upsertMySetting($id: ID, $type: UserSettingType!, $data: JSONObject!) {
  upsertSetting(id: $id, type: $type, data: $data) {
    id
    type
    data
  }
}
    `,Si=`
    mutation deleteMySetting($id: ID!) {
  deleteSetting(id: $id)
}
    `,bi=`
    mutation dailyClaimQuota {
  dailyClaimQuota
}
    `,Ai=`
    mutation claimQuestReward($id: ID!) {
  rewardQuest(id: $id) {
    count
  }
}
    `,Di=`
    mutation setPreferences($value: JSONObject!) {
  setPreferences(value: $value)
}
    `,Ci=`
    mutation setProfiles($value: JSONObject!) {
  setProfiles(value: $value)
}
    `,Ei=`
    mutation toggleDecoration($decorationId: ID!, $enabled: Boolean!) {
  toggleDecorationV2(decorationId: $decorationId, enabled: $enabled) {
    id
    isEnabled
  }
}
    `,Mi=`
    mutation markNotificationRead($ids: [ID!], $types: [NotificationType!], $all: Boolean) {
  markNotificationRead(ids: $ids, types: $types, all: $all)
}
    `,Ti=`
    mutation updateBookmarkItem($input: SetBookmarkItemInput!) {
  setBookmarkItem(input: $input)
}
    `,vi=`
    mutation terminateSession($input: TerminateSessionInput!) {
  terminateSession(input: $input)
}
    `,Bi=`
    mutation claimShareCredit {
  getShareCredit {
    amountEach
    countRemains
  }
}
    `,Pi=`
    mutation createAccessToken($input: CreateAccessTokenInput!) {
  createAccessToken(input: $input) {
    token {
      ...AccessTokenBase
    }
    secret
  }
}
    ${Tr}`,_i=`
    mutation revokeAccessToken($id: ID!) {
  revokeAccessToken(id: $id)
}
    `,Ri=`
    mutation createWebhook($input: CreateWebhookInput!) {
  createWebhook(input: $input) {
    webhookId
    webhook {
      ...WebhookBase
    }
  }
}
    ${vr}`,Ni=`
    mutation deleteWebhook($id: ID!) {
  deleteWebhook(id: $id)
}
    `,Ui=`
    mutation generateReferralCode {
  generateReferralCode {
    id
    code
    type
  }
}
    `,Li=`
    query listUsers($before: String, $after: String, $first: Int, $last: Int, $feed: String, $keyword: String) {
  users(
    before: $before
    after: $after
    first: $first
    last: $last
    keyword: $keyword
    feed: $feed
  ) {
    edges {
      node {
        ...UserPreview
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    totalCount
  }
}
    ${Tt}
${S}
${w}`,Oi=`
    query listUserFollowings($userId: ID!, $private: Boolean, $before: String, $after: String, $first: Int, $last: Int) {
  user(id: $userId) {
    followings(
      private: $private
      before: $before
      after: $after
      first: $first
      last: $last
    ) {
      edges {
        node {
          ...UserPreview
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${Tt}
${S}
${w}`,Fi=`
    query listUserFollowers($userId: ID!, $before: String, $after: String, $first: Int, $last: Int) {
  user(id: $userId) {
    followers(before: $before, after: $after, first: $first, last: $last) {
      edges {
        node {
          ...UserPreview
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${Tt}
${S}
${w}`,Wi=`
    query getUserInfo {
  me {
    ...UserDetail
    passwordEnabled
  }
}
    ${se}
${S}
${w}
${f}
${l}`,Vi=`
    query getUserArtworkLikedCount($userId: ID!) {
  user(id: $userId) {
    artworkLikedCount
  }
}
    `,xi=`
    query getUserInfoById($userId: ID!) {
  user(id: $userId) {
    ...UserDetail
  }
}
    ${se}
${S}
${w}
${f}
${l}`,Gi=`
    query getUserInfoByUsername($username: String!) {
  user(username: $username) {
    ...UserDetail
  }
}
    ${se}
${S}
${w}
${f}
${l}`,Ki=`
    query getUserProfiles($userId: ID!) {
  user(id: $userId) {
    profiles
  }
}
    `,Hi=`
    query getUserWithExternalProfiles($userId: ID!) {
  user(id: $userId) {
    ...UserDetail
    profiles
    externalProfiles {
      ...ExternalProfileBase
    }
  }
}
    ${se}
${S}
${w}
${f}
${l}
${Br}`,ji=`
    query getUserRoles($userId: ID!, $names: [String!], $before: String, $after: String, $first: Int, $last: Int) {
  user(id: $userId) {
    roles(names: $names, before: $before, after: $after, first: $first, last: $last) {
      edges {
        node {
          ...RoleBase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${_r}`,Yi=`
    query getMyRoles($before: String, $after: String, $first: Int, $last: Int, $names: [String!]) {
  me {
    id
    roles(before: $before, after: $after, first: $first, last: $last, names: $names) {
      edges {
        node {
          ...RoleBase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
}
    ${_r}`,zi=`
    query getMyExternalProfiles {
  me {
    id
    externalProfiles {
      ...ExternalProfileBase
    }
  }
}
    ${Br}`,Qi=`
    query getWaitingQueue($name: String!) {
  waitingQueue(name: $name) {
    ...WaitingQueueBase
  }
}
    ${Lo}`,Ji=`
    query getMyYearWrappedStats($year: Int) {
  me {
    id
    yearWrappedStats(filter: {year: $year}) {
      status
      generatedImageCount
      publishedArtworkCount
      receivedLikeCount
      receivedCommentCount
      membershipDays
      membershipTimeSavedInSeconds
      membershipCreditsSaved
      membershipExtraCreditsClaimed
      topUsedTags {
        id
        name
        mediaId
        media {
          ...MediaBase
        }
      }
      topLikedWork {
        id
        mediaId
        media {
          ...MediaBase
        }
        title
        views
        likedCount
        commentCount
      }
      favoriteModel {
        mediaId
        media {
          ...MediaBase
        }
        title
      }
      favoriteModelImageCount
    }
  }
}
    ${f}
${l}`,Zi=`
    query getUserYearWrappedStats($userId: ID!, $year: Int) {
  user(id: $userId) {
    yearWrappedStats(filter: {year: $year}) {
      status
      generatedImageCount
      publishedArtworkCount
      receivedLikeCount
      receivedCommentCount
      membershipDays
      membershipTimeSavedInSeconds
      membershipCreditsSaved
      membershipExtraCreditsClaimed
      topUsedTags {
        id
        name
        mediaId
        media {
          ...MediaBase
        }
      }
      topLikedWork {
        id
        mediaId
        media {
          ...MediaBase
        }
        title
        views
        likedCount
        commentCount
      }
      favoriteModel {
        mediaId
        media {
          ...MediaBase
        }
        title
      }
      favoriteModelImageCount
    }
  }
}
    ${f}
${l}`,Xi=`
    query getMyQuota {
  me {
    id
    quotaAmount
  }
}
    `,qi=`
    query getMeWithQuotaForCurrency($currency: String!) {
  me {
    ...UserDetail
    quotaAmount(currency: $currency)
  }
}
    ${se}
${S}
${w}
${f}
${l}`,ed=`
    query getMyFreeGenerationEvents {
  freeGenerationEvents {
    type
    name
    userType
    userRole
    modelVersions
    countRemains
    countTotal
    workflows
    interval
    i2vPro {
      model
      mode
      duration
    }
    sceneId
    sceneIds
  }
}
    `,td=`
    query getDailyClaimAvailable {
  me {
    id
    dailyClaimAvailable
    dailyClaimAmount
  }
}
    `,rd=`
    query listUserQuotaLogs($userId: ID!, $reason: String, $currency: String, $before: String, $after: String, $first: Int, $last: Int) {
  user(id: $userId) {
    quotaLogs(
      logReason: $reason
      currency: $currency
      before: $before
      after: $after
      first: $first
      last: $last
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          userId
          amount
          type
          extra
          createdAt
          updatedAt
        }
        cursor
      }
    }
  }
}
    `,nd=`
    query listMyQuotaLogs($currency: String, $before: String, $after: String, $first: Int, $last: Int) {
  me {
    id
    quotaLogs(
      currency: $currency
      before: $before
      after: $after
      first: $first
      last: $last
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          userId
          amount
          type
          extra
          createdAt
          updatedAt
        }
        cursor
      }
    }
  }
}
    `,od=`
    query listMyMFAList($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $type: String, $status: String) {
  me {
    id
    mfaList(
      before: $before
      after: $after
      first: $first
      last: $last
      orderBy: $orderBy
      type: $type
      status: $status
    ) {
      edges {
        node {
          ...MFABase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${Oo}`,ad=`
    query listMyNotifications($before: String, $after: String, $first: Int, $last: Int, $type: [NotificationType!]) {
  me {
    id
    notifications(
      before: $before
      after: $after
      first: $first
      last: $last
      type: $type
    ) {
      edges {
        node {
          ...NotificationBase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${Ye}
${S}
${w}
${f}
${l}
${v}
${T}`,sd=`
    query getMyPreferences {
  me {
    id
    preferences
  }
}
    `,id=`
    query getMySetting($id: ID!) {
  setting(id: $id) {
    id
    type
    data
  }
}
    `,dd=`
    query listMySettings($type: UserSettingType!, $before: String, $after: String, $first: Int, $last: Int) {
  me {
    id
    settings(
      before: $before
      after: $after
      first: $first
      last: $last
      type: $type
    ) {
      edges {
        node {
          id
          type
          data
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    `,cd=`
    query getMySettingLimit($type: UserSettingType!) {
  me {
    id
    settingLimit(type: $type)
  }
}
    `,ud=`
    query getMyUnreadNotiCount {
  me {
    id
    unreadNotificationCounts {
      type
      count
    }
  }
}
    `,ld=`
    query listMyBookmarkItems($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $types: [RefType]) {
  me {
    id
    defaultBookmark {
      items(
        before: $before
        after: $after
        first: $first
        last: $last
        orderBy: $orderBy
        types: $types
      ) {
        edges {
          node {
            ...BookmarkItemBase
          }
          cursor
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
      }
    }
  }
}
    ${_t}
${be}
${G}
${f}
${l}
${v}
${T}
${K}
${O}
${R}
${B}`,fd=`
    query listMySessions($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $isValid: Boolean) {
  me {
    id
    sessions(
      before: $before
      after: $after
      first: $first
      last: $last
      orderBy: $orderBy
      isValid: $isValid
    ) {
      edges {
        node {
          ...SessionBase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${Uo}`,gd=`
    query listMyAccessTokens($before: String, $after: String, $first: Int, $last: Int) {
  me {
    id
    accessTokens(before: $before, after: $after, first: $first, last: $last) {
      edges {
        node {
          ...AccessTokenBase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${Tr}`,$d=`
    query listMyWebhooks($before: String, $after: String, $first: Int, $last: Int) {
  me {
    id
    webhooks(before: $before, after: $after, first: $first, last: $last) {
      edges {
        node {
          ...WebhookBase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${vr}`,pd=`
    query listMyBookmarks($userId: ID, $username: String, $last: Int, $before: String, $after: String, $first: Int, $isPublic: Boolean, $orderBy: String, $type: String) {
  user(id: $userId, username: $username) {
    bookmarks(
      last: $last
      before: $before
      after: $after
      first: $first
      isPublic: $isPublic
      orderBy: $orderBy
      type: $type
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          ...BookmarkBase
        }
      }
    }
  }
}
    ${je}
${f}
${l}`,md=`
    query listBookmarkItems($bookmarkId: ID, $before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $types: [RefType], $artworkTypes: [ArtworkType], $modelTypes: [GenerationModelType]) {
  bookmark(id: $bookmarkId) {
    items(
      types: $types
      artworkTypes: $artworkTypes
      modelTypes: $modelTypes
      before: $before
      after: $after
      first: $first
      last: $last
      orderBy: $orderBy
    ) {
      edges {
        node {
          ...BookmarkItemBase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${_t}
${be}
${G}
${f}
${l}
${v}
${T}
${K}
${O}
${R}
${B}`,hd=`
    query getBookmark($id: ID) {
  bookmark(id: $id) {
    ...BookmarkBase
  }
}
    ${je}
${f}
${l}`,Id=`
    query getMyShareCreditInfo {
  me {
    id
    shareCreditInfo {
      amountEach
      countRemains
    }
  }
}
    `,yd=`
    query listNotifications($before: String, $after: String, $first: Int, $last: Int, $type: [NotificationType!]) {
  notifications(
    before: $before
    after: $after
    first: $first
    last: $last
    type: $type
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      cursor
      node {
        ...NotificationBase
      }
    }
  }
}
    ${Ye}
${S}
${w}
${f}
${l}
${v}
${T}`,kd=`
    query getNotification($id: ID!) {
  notification(id: $id) {
    ...NotificationBase
  }
}
    ${Ye}
${S}
${w}
${f}
${l}
${v}
${T}`,wd=`
    query getCoupon($code: String!) {
  coupon(code: $code) {
    ...CouponBase
  }
}
    ${_o}`,Sd=`
    query getMyAppGiftInfo {
  me {
    id
    appGiftInfo {
      amount
      enabled
    }
  }
}
    `,bd=`
    query listQuests($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $tag: String, $published: Boolean, $active: Boolean) {
  quests(
    before: $before
    after: $after
    first: $first
    last: $last
    orderBy: $orderBy
    tag: $tag
    published: $published
    active: $active
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      cursor
      node {
        ...QuestBase
      }
    }
  }
}
    ${Pr}`,Ad=`
    query getQuest($id: ID!) {
  quest(id: $id) {
    ...QuestBase
  }
}
    ${Pr}`,Dd=`
    query getMyReferralCode {
  me {
    id
    referralCode {
      id
      code
      type
    }
  }
}
    `,Cd=`
    query getMyReferrerId {
  me {
    id
    referrerId
  }
}
    `,Ed=`
    query getUserReferralLogs($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $referrerId: ID) {
  referralLogs(
    before: $before
    after: $after
    first: $first
    last: $last
    orderBy: $orderBy
    referrerId: $referrerId
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      cursor
      node {
        id
        userId
        updatedAt
        credits
        reward
        rewardCurrency
        rewardBy
      }
    }
  }
}
    `,Md=`
    query getReferralCodeInfo($referCode: String!) {
  referralCode(referCode: $referCode) {
    userId
    firstPurchaseRewardCredits
  }
}
    `,Td=`
    query listUserDecorations($id: ID, $before: String, $after: String, $first: Int, $last: Int, $type: DecorationType) {
  user(id: $id) {
    decorations(
      before: $before
      after: $after
      first: $first
      last: $last
      type: $type
    ) {
      edges {
        node {
          id
          decorationId
          decoration {
            ...DecorationBase
          }
          isEnabled
          obtainedAt
          obtainedFrom
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
}
    ${w}`,vd=`
    query listMyDecorations($before: String, $after: String, $first: Int, $last: Int, $type: DecorationType) {
  me {
    decorations(
      before: $before
      after: $after
      first: $first
      last: $last
      type: $type
    ) {
      edges {
        node {
          id
          decorationId
          decoration {
            ...DecorationBase
          }
          isEnabled
          obtainedAt
          obtainedFrom
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
}
    ${w}`,Bd=`
    query listMyActiveDecorations($id: ID, $type: DecorationType) {
  user(id: $id) {
    activeDecorations(type: $type) {
      id
      decorationId
      decoration {
        ...DecorationBase
      }
      isEnabled
      obtainedAt
      obtainedFrom
    }
  }
}
    ${w}`,Pd=`
    query listUserActiveDecorations($id: ID, $type: DecorationType) {
  user(id: $id) {
    activeDecorations(type: $type) {
      id
      decoration {
        ...DecorationBase
      }
      isEnabled
      obtainedAt
      obtainedFrom
    }
  }
}
    ${w}`,_d=`
    query listActiveCollectionCardSets($type: CollectionCardSetType, $before: String, $after: String, $first: Int, $last: Int) {
  activeCollectionCardSets(
    type: $type
    before: $before
    after: $after
    first: $first
    last: $last
  ) {
    edges {
      node {
        id
        code
        name
        type
        status
        description
        collectionCards {
          ...CollectionCardBase
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
  }
}
    ${ke}`,Rd=`
    query listActiveCollectionCards($type: CollectionCardType, $rarity: CollectionCardRarity, $collectionCardSetId: ID, $first: Int, $after: String) {
  activeCollectionCards(
    type: $type
    rarity: $rarity
    collectionCardSetId: $collectionCardSetId
    first: $first
    after: $after
  ) {
    edges {
      node {
        ...CollectionCardBase
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
  }
}
    ${ke}`,Nd=`
    query listUserCollectionCards($userId: ID, $type: CollectionCardType, $rarity: CollectionCardRarity, $collectionCardSetId: ID, $before: String, $after: String, $first: Int, $last: Int, $orderBy: String) {
  user(id: $userId) {
    collectionCards(
      type: $type
      rarity: $rarity
      collectionCardSetId: $collectionCardSetId
      before: $before
      after: $after
      first: $first
      last: $last
      orderBy: $orderBy
    ) {
      edges {
        node {
          id
          userId
          collectionCardId
          serialNumber
          obtainedFrom
          collectionCard {
            ...CollectionCardBase
          }
          createdAt
          updatedAt
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
}
    ${ke}`,Ud=`
    query getUserCardSetProgress($userId: ID!, $collectionCardSetId: ID, $collectionCardSetCode: String) {
  user(id: $userId) {
    collectionCardSetProgress(
      collectionCardSetId: $collectionCardSetId
      collectionCardSetCode: $collectionCardSetCode
    ) {
      collectionCardSet {
        ...CollectionCardSetBase
      }
      totalCollectionCards {
        ...CollectionCardBase
      }
      ownedCollectionCards {
        ...CollectionCardBase
      }
    }
  }
}
    ${Rr}
${ke}`,Ld=`
    query listUserCardSetProgress($userId: ID!, $before: String, $after: String, $first: Int, $last: Int, $orderBy: String) {
  user(id: $userId) {
    collectionCardSetProgresses(
      before: $before
      after: $after
      first: $first
      last: $last
      orderBy: $orderBy
    ) {
      edges {
        node {
          collectionCardSet {
            ...CollectionCardSetBase
          }
          totalCollectionCards {
            ...CollectionCardBase
          }
          ownedCollectionCards {
            ...CollectionCardBase
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
}
    ${Rr}
${ke}`,Od=`
    query listMyCollectionCards($cardCodes: [String!], $num: Int) {
  me {
    collectionCards(cardCodes: $cardCodes, first: $num) {
      edges {
        node {
          ...UserCollectionCardBase
        }
        cursor
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
}
    ${Fo}
${ke}
${Ie}`,Fd=`
    mutation upsertWorkflow($id: ID, $input: UpsertWorkflowInput!) {
  upsertWorkflow(id: $id, input: $input) {
    ...WorkflowBase
  }
}
    ${ie}`,Wd=`
    mutation upsertWorkflowVersion($versionId: ID, $input: UpsertWorkflowVersionInput!) {
  upsertWorkflowVersion(id: $versionId, input: $input) {
    ...WorkflowVersionBase
  }
}
    ${Z}`,Vd=`
    mutation deleteWorkflow($id: ID!) {
  deleteWorkflow(id: $id)
}
    `,xd=`
    query listWorkflows($authorId: ID, $published: Boolean, $before: String, $after: String, $first: Int, $last: Int) {
  workflows(
    authorId: $authorId
    published: $published
    before: $before
    after: $after
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        ...WorkflowForMe
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${Nr}
${ie}
${Z}
${Ie}`,Gd=`
    query listWorkflowArtworksForMe($authorId: ID, $isPrivate: Boolean, $q: String, $timeRange: DateRange, $first: Int, $after: String, $last: Int, $before: String) {
  artworks(
    type: COMFY_FLOW
    authorId: $authorId
    isPrivate: $isPrivate
    q: $q
    time: $timeRange
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    edges {
      cursor
      node {
        ...WorkflowArtworkForMe
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${Wo}
${Nr}
${ie}
${Z}
${Ie}`,Kd=`
    query listWorkflowMarketItems($feed: String, $orderBy: String, $authorId: ID, $isPrivate: Boolean, $q: String, $tag: String, $timeRange: DateRange, $first: Int, $after: String, $last: Int, $before: String) {
  artworks(
    type: COMFY_FLOW
    feed: $feed
    orderBy: $orderBy
    authorId: $authorId
    isPrivate: $isPrivate
    q: $q
    tag: $tag
    time: $timeRange
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    edges {
      cursor
      node {
        ...WorkflowCard
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${Pt}
${Be}
${v}
${f}
${l}
${T}
${S}
${w}
${B}
${ie}
${Z}
${Ie}`,Hd=`
    query getWorkflowForMarket($id: ID!) {
  artwork(id: $id) {
    ...WorkflowCard
  }
}
    ${Pt}
${Be}
${v}
${f}
${l}
${T}
${S}
${w}
${B}
${ie}
${Z}`,jd=`
    query getWorkflowForMarketByWorkflowId($workflowId: ID!) {
  workflow(id: $workflowId) {
    artwork {
      ...WorkflowCard
    }
  }
}
    ${Pt}
${Be}
${v}
${f}
${l}
${T}
${S}
${w}
${B}
${ie}
${Z}`,Yd=`
    query getWorkflow($id: ID, $username: String, $uniqueId: String) {
  workflow(id: $id, username: $username, uniqueId: $uniqueId) {
    ...WorkflowBase
    coverMediaId
    readme
    artworkId
    artwork {
      tags {
        ...TagBase
      }
    }
    draftVersion {
      ...WorkflowVersionBase
    }
    latestVersion {
      ...WorkflowVersionBase
    }
  }
}
    ${ie}
${B}
${Z}`,zd=`
    query getWorkflowForRunner($workflowId: ID!) {
  workflow(id: $workflowId) {
    ...WorkflowBase
    latestPublishedVersion {
      ...WorkflowVersionBase
    }
  }
}
    ${ie}
${Z}`,Qd=`
    query listWorkflowVersions($workflowId: ID!, $status: String, $after: String, $first: Int, $before: String, $last: Int) {
  workflow(id: $workflowId) {
    versions(
      status: $status
      after: $after
      first: $first
      before: $before
      last: $last
    ) {
      edges {
        cursor
        node {
          ...WorkflowVersionBase
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
}
    ${Z}
${Ie}`,Jd=`
    mutation upsertWorld($id: ID, $input: UpsertWorldInput!) {
  upsertWorld(id: $id, input: $input) {
    ...WorldBase
  }
}
    ${de}
${S}
${w}
${f}
${l}`,Zd=`
    mutation upsertCharacter($id: ID, $input: UpsertCharacterInput!) {
  upsertCharacter(id: $id, input: $input) {
    ...CharacterBase
  }
}
    ${_e}
${f}
${l}
${de}
${S}
${w}`,Xd=`
    mutation deleteWorld($id: ID!) {
  deleteWorld(id: $id)
}
    `,qd=`
    mutation deleteCharacter($id: ID!) {
  deleteCharacter(id: $id)
}
    `,ec=`
    mutation followWorld($id: ID!, $follow: Boolean!) {
  setFollowWorld(worldId: $id, target: $follow)
}
    `,tc=`
    query getWorld($id: ID!) {
  world(id: $id) {
    ...WorldBase
  }
}
    ${de}
${S}
${w}
${f}
${l}`,rc=`
    query getArtworkWithWorldCharacter($id: ID!) {
  artwork(id: $id) {
    ...ArtworkWithWorldCharacterDetail
  }
}
    ${xo}
${Rt}
${v}
${f}
${l}
${T}
${de}
${S}
${w}
${_e}
${B}
${Lr}
${R}
${O}
${Ur}`,nc=`
    query getCharacter($id: ID!) {
  character(id: $id) {
    ...CharacterDetail
  }
}
    ${Lr}
${_e}
${f}
${l}
${de}
${S}
${w}
${R}
${O}
${B}
${Ur}`,oc=`
    query listBookmarksCharacters($userId: ID, $username: String, $last: Int, $before: String, $after: String, $first: Int, $isPublic: Boolean, $orderBy: String, $type: String, $artworkId: ID) {
  user(id: $userId, username: $username) {
    bookmarks(
      last: $last
      before: $before
      after: $after
      first: $first
      isPublic: $isPublic
      orderBy: $orderBy
      type: $type
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          ...BookmarkBase
          item(refId: $artworkId) {
            id
          }
        }
      }
    }
  }
}
    ${je}
${f}
${l}`,ac=`
    query listWorldCharacters($before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $isNsfw: Boolean, $tag: String, $q: String, $relevantArtworkId: ID, $keyword: String, $text: String, $hidePrompts: Boolean, $authorName: String, $isSafeSearch: Boolean, $feed: String, $authorId: ID, $challenge: Int, $archived: Boolean, $isPrivate: Boolean, $isTheme: Boolean, $animated: Boolean, $animatedBaseArtworkId: ID, $themeId: ID, $modelId: ID, $modelVersionId: ID, $loraId: ID, $loraVersionId: ID, $worldId: ID, $characterId: ID, $time: DateRange, $type: ArtworkType, $types: [ArtworkType], $rankMediaType: RankMediaType) {
  artworks(
    before: $before
    after: $after
    first: $first
    last: $last
    orderBy: $orderBy
    isNsfw: $isNsfw
    tag: $tag
    q: $q
    relevantArtworkId: $relevantArtworkId
    keyword: $keyword
    text: $text
    hidePrompts: $hidePrompts
    authorName: $authorName
    isSafeSearch: $isSafeSearch
    feed: $feed
    authorId: $authorId
    challenge: $challenge
    archived: $archived
    isPrivate: $isPrivate
    isTheme: $isTheme
    animated: $animated
    animatedBaseArtworkId: $animatedBaseArtworkId
    themeId: $themeId
    modelId: $modelId
    modelVersionId: $modelVersionId
    loraId: $loraId
    loraVersionId: $loraVersionId
    worldId: $worldId
    characterId: $characterId
    time: $time
    type: $type
    types: $types
    rankMediaType: $rankMediaType
  ) {
    edges {
      node {
        ...ArtworkWithWorldCharacterBase
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    totalCount
  }
}
    ${Rt}
${v}
${f}
${l}
${T}
${de}
${S}
${w}
${_e}
${B}`,sc=`
    query listBookmarkCharacterItems($bookmarkId: ID, $before: String, $after: String, $first: Int, $last: Int, $orderBy: String, $types: [RefType], $artworkTypes: [ArtworkType]) {
  bookmark(id: $bookmarkId) {
    items(
      types: $types
      artworkTypes: $artworkTypes
      before: $before
      after: $after
      first: $first
      last: $last
      orderBy: $orderBy
    ) {
      edges {
        node {
          ...BookmarkCharacterItemBase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${Vo}
${_t}
${be}
${G}
${f}
${l}
${v}
${T}
${K}
${O}
${R}
${B}
${Rt}
${de}
${S}
${w}
${_e}`,ic=`
    query listUserFollowingWorlds($userId: ID!, $before: String, $after: String, $first: Int, $last: Int) {
  user(id: $userId) {
    followingWorlds(before: $before, after: $after, first: $first, last: $last) {
      edges {
        node {
          ...WorldBase
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
}
    ${de}
${S}
${w}
${f}
${l}`,dc=`
    subscription subscribePersonalEvents {
  personalEvents {
    ...AllEvents
  }
}
    ${Go}
${Ut}
${G}
${l}
${f}
${Nt}
${Ye}
${S}
${w}
${v}
${T}`,cc=`
    subscription subscribeWorkflowEvents($taskId: ID!) {
  workflowProgress(taskId: $taskId)
}
    `;function Ef(e){return{listCampaignAds(t,r){return e(Ko,t,r)},opBanUser(t,r){return e(Ho,t,r)},opUnBanUser(t,r){return e(jo,t,r)},opShadowBanUser(t,r){return e(Yo,t,r)},opDeleteAllArtworksOfUser(t,r){return e(zo,t,r)},opDeleteAllModelsOfUser(t,r){return e(Qo,t,r)},opDeleteAllMessagesOfUser(t,r){return e(Jo,t,r)},opResetUserAvatar(t,r){return e(Zo,t,r)},opResetUserCover(t,r){return e(Xo,t,r)},opMarkAsNSFW(t,r){return e(qo,t,r)},opModerationNSFW(t,r){return e(ea,t,r)},opRefreshTextSafetyScore(t,r){return e(ta,t,r)},opRefreshMediaSafetyScore(t,r){return e(ra,t,r)},opChangeUserQuota(t,r){return e(na,t,r)},opSetUserSubscriptionInfo(t,r){return e(oa,t,r)},upsertArtwork(t,r){return e(aa,t,r)},deleteArtwork(t,r){return e(sa,t,r)},deleteManga(t,r){return e(ia,t,r)},markArtwork(t,r){return e(da,t,r)},markManga(t,r){return e(ca,t,r)},listArtworks(t,r){return e(ua,t,r)},listUserLikedArtworks(t,r){return e(la,t,r)},listUserLikedMangaList(t,r){return e(fa,t,r)},getArtwork(t,r){return e(ga,t,r)},getArtworkWithTaskDetail(t,r){return e($a,t,r)},getManga(t,r){return e(pa,t,r)},getMangaChapter(t,r){return e(ma,t,r)},createChatWorkspace(t,r){return e(ha,t,r)},updateChatWorkspace(t,r){return e(Ia,t,r)},updateChatTaskReaction(t,r){return e(ya,t,r)},linkTaskToWorkspace(t,r){return e(ka,t,r)},deleteChatWorkspace(t,r){return e(wa,t,r)},createChatEditingSceneTask(t,r){return e(Sa,t,r)},getChatWorkspace(t,r){return e(ba,t,r)},listChatWorkspaces(t,r){return e(Aa,t,r)},getChatWorkspaceTasks(t,r){return e(Da,t,r)},getChatTaskReactionByWorkspace(t,r){return e(Ca,t,r)},getChatTaskReactionByMedia(t,r){return e(Ea,t,r)},listChatEditingScenes(t,r){return e(Ma,t,r)},getChatEditingScene(t,r){return e(Ta,t,r)},report(t,r){return e(va,t,r)},submitRating(t,r){return e(Ba,t,r)},getContest(t,r){return e(Pa,t,r)},listContests(t,r){return e(_a,t,r)},getRankPairs(t,r){return e(Ra,t,r)},upsertGenerationModel(t,r){return e(Na,t,r)},upsertGenerationModelVersion(t,r){return e(Ua,t,r)},importExternalModel(t,r){return e(La,t,r)},markGenerationModel(t,r){return e(Oa,t,r)},deleteGenerationModel(t,r){return e(Fa,t,r)},submitReview(t,r){return e(Wa,t,r)},reviewMemberOnlyModelEarlyAccess(t,r){return e(Va,t,r)},getGenerationModel(t,r){return e(xa,t,r)},getGenerationModelDetailByVersionId(t,r){return e(Ga,t,r)},getGenerationModelByVersionId(t,r){return e(Ka,t,r)},getGenerationModelByVersionIdForArtwork(t,r){return e(Ha,t,r)},getGenerationModelVersion(t,r){return e(ja,t,r)},listGenerationModels(t,r){return e(Ya,t,r)},listGenerationModelsWithTrainingTask(t,r){return e(za,t,r)},listGenerationModelVersions(t,r){return e(Qa,t,r)},listUserBookmarkedGenerationModels(t,r){return e(Ja,t,r)},listMyBookmarkedGenerationModels(t,r){return e(Za,t,r)},listUserLikedGenerationModel(t,r){return e(Xa,t,r)},getReviewSummary(t,r){return e(qa,t,r)},getPrivateGenerationModelTotalCount(t,r){return e(es,t,r)},createGrowthEventTask(t,r){return e(ts,t,r)},summerEvent2025GetState(t,r){return e(rs,t,r)},summerEvent2025ClaimReward(t,r){return e(ns,t,r)},rollAugustEventLottery(t,r){return e(os,t,r)},getAugustCardDrawStatus(t,r){return e(as,t,r)},listAugustEventLotteryRecords(t,r){return e(ss,t,r)},listCards(t,r){return e(is,t,r)},uploadMedia(t,r){return e(ds,t,r)},uploadFileMultiPart(t,r){return e(cs,t,r)},deleteFile(t,r){return e(us,t,r)},getMedia(t,r){return e(ls,t,r)},getFile(t,r){return e(fs,t,r)},getFileStatistics(t,r){return e(gs,t,r)},listFiles(t,r){return e($s,t,r)},getFileUploadRecord(t,r){return e(ps,t,r)},intentToPay(t,r){return e(ms,t,r)},setupPaymentAccount(t,r){return e(hs,t,r)},verifyReceipt(t,r){return e(Is,t,r)},cancelSubscription(t,r){return e(ys,t,r)},verifyCreditCoupon(t,r){return e(ks,t,r)},resumeSubscription(t,r){return e(ws,t,r)},getMyPaymentAccount(t,r){return e(Ss,t,r)},getAllPaymentItems(t,r){return e(bs,t,r)},getMyMembership(t,r){return e(As,t,r)},getUserMembership(t,r){return e(Ds,t,r)},getOrderById(t,r){return e(Cs,t,r)},listLotteriesByOrderId(t,r){return e(Es,t,r)},getRemainingRollUntilBonus(t,r){return e(Ms,t,r)},sendMessage(t,r){return e(Ts,t,r)},deleteMessage(t,r){return e(vs,t,r)},getMessage(t,r){return e(Bs,t,r)},listMessages(t,r){return e(Ps,t,r)},getMessageCount(t,r){return e(_s,t,r)},getSpringEventState(t,r){return e(Rs,t,r)},getSpringEventBadges(t,r){return e(Ns,t,r)},buySpringTokenWithCredits(t,r){return e(Us,t,r)},useSpringEventToken(t,r){return e(Ls,t,r)},useSpringEventPointerPower(t,r){return e(Os,t,r)},useSpringEventFinalBoost(t,r){return e(Fs,t,r)},resetSpringEventProgress(t,r){return e(Ws,t,r)},upsertTag(t,r){return e(Vs,t,r)},deleteTag(t,r){return e(xs,t,r)},getTag(t,r){return e(Gs,t,r)},listTags(t,r){return e(Ks,t,r)},createGenerationTask(t,r){return e(Hs,t,r)},createArtworkFromTaskV2(t,r){return e(js,t,r)},cancelGenerationTask(t,r){return e(Ys,t,r)},deleteGenerationTask(t,r){return e(zs,t,r)},rerunGenerationTask(t,r){return e(Qs,t,r)},updateGenerationTask(t,r){return e(Js,t,r)},createTrainingTask(t,r){return e(Zs,t,r)},archiveTrainingTask(t,r){return e(Xs,t,r)},listMyTasks(t,r){return e(qs,t,r)},listUserTasks(t,r){return e(ei,t,r)},listUserTaskSummaries(t,r){return e(ti,t,r)},getTaskById(t,r){return e(ri,t,r)},getTrainingTaskById(t,r){return e(ni,t,r)},detectNeedToEnablePromptHelper(t,r){return e(oi,t,r)},register(t,r){return e(ai,t,r)},login(t,r){return e(si,t,r)},refreshToken(t,r){return e(ii,t,r)},forgetPassword(t,r){return e(di,t,r)},genCode(t,r){return e(ci,t,r)},verifyEmail(t,r){return e(ui,t,r)},setupMFA(t,r){return e(li,t,r)},updateUserInfo(t,r){return e(fi,t,r)},updateUserSensitiveInfos(t,r){return e(gi,t,r)},unlinkExternal(t,r){return e($i,t,r)},setPushToken(t,r){return e(pi,t,r)},upsertBookmark(t,r){return e(mi,t,r)},deleteBookmark(t,r){return e(hi,t,r)},setFollowState(t,r){return e(Ii,t,r)},withdrawAccount(t,r){return e(yi,t,r)},setReferrer(t,r){return e(ki,t,r)},upsertMySetting(t,r){return e(wi,t,r)},deleteMySetting(t,r){return e(Si,t,r)},dailyClaimQuota(t,r){return e(bi,t,r)},claimQuestReward(t,r){return e(Ai,t,r)},setPreferences(t,r){return e(Di,t,r)},setProfiles(t,r){return e(Ci,t,r)},toggleDecoration(t,r){return e(Ei,t,r)},markNotificationRead(t,r){return e(Mi,t,r)},updateBookmarkItem(t,r){return e(Ti,t,r)},terminateSession(t,r){return e(vi,t,r)},claimShareCredit(t,r){return e(Bi,t,r)},createAccessToken(t,r){return e(Pi,t,r)},revokeAccessToken(t,r){return e(_i,t,r)},createWebhook(t,r){return e(Ri,t,r)},deleteWebhook(t,r){return e(Ni,t,r)},generateReferralCode(t,r){return e(Ui,t,r)},listUsers(t,r){return e(Li,t,r)},listUserFollowings(t,r){return e(Oi,t,r)},listUserFollowers(t,r){return e(Fi,t,r)},getUserInfo(t,r){return e(Wi,t,r)},getUserArtworkLikedCount(t,r){return e(Vi,t,r)},getUserInfoById(t,r){return e(xi,t,r)},getUserInfoByUsername(t,r){return e(Gi,t,r)},getUserProfiles(t,r){return e(Ki,t,r)},getUserWithExternalProfiles(t,r){return e(Hi,t,r)},getUserRoles(t,r){return e(ji,t,r)},getMyRoles(t,r){return e(Yi,t,r)},getMyExternalProfiles(t,r){return e(zi,t,r)},getWaitingQueue(t,r){return e(Qi,t,r)},getMyYearWrappedStats(t,r){return e(Ji,t,r)},getUserYearWrappedStats(t,r){return e(Zi,t,r)},getMyQuota(t,r){return e(Xi,t,r)},getMeWithQuotaForCurrency(t,r){return e(qi,t,r)},getMyFreeGenerationEvents(t,r){return e(ed,t,r)},getDailyClaimAvailable(t,r){return e(td,t,r)},listUserQuotaLogs(t,r){return e(rd,t,r)},listMyQuotaLogs(t,r){return e(nd,t,r)},listMyMFAList(t,r){return e(od,t,r)},listMyNotifications(t,r){return e(ad,t,r)},getMyPreferences(t,r){return e(sd,t,r)},getMySetting(t,r){return e(id,t,r)},listMySettings(t,r){return e(dd,t,r)},getMySettingLimit(t,r){return e(cd,t,r)},getMyUnreadNotiCount(t,r){return e(ud,t,r)},listMyBookmarkItems(t,r){return e(ld,t,r)},listMySessions(t,r){return e(fd,t,r)},listMyAccessTokens(t,r){return e(gd,t,r)},listMyWebhooks(t,r){return e($d,t,r)},listMyBookmarks(t,r){return e(pd,t,r)},listBookmarkItems(t,r){return e(md,t,r)},getBookmark(t,r){return e(hd,t,r)},getMyShareCreditInfo(t,r){return e(Id,t,r)},listNotifications(t,r){return e(yd,t,r)},getNotification(t,r){return e(kd,t,r)},getCoupon(t,r){return e(wd,t,r)},getMyAppGiftInfo(t,r){return e(Sd,t,r)},listQuests(t,r){return e(bd,t,r)},getQuest(t,r){return e(Ad,t,r)},getMyReferralCode(t,r){return e(Dd,t,r)},getMyReferrerId(t,r){return e(Cd,t,r)},getUserReferralLogs(t,r){return e(Ed,t,r)},getReferralCodeInfo(t,r){return e(Md,t,r)},listUserDecorations(t,r){return e(Td,t,r)},listMyDecorations(t,r){return e(vd,t,r)},listMyActiveDecorations(t,r){return e(Bd,t,r)},listUserActiveDecorations(t,r){return e(Pd,t,r)},listActiveCollectionCardSets(t,r){return e(_d,t,r)},listActiveCollectionCards(t,r){return e(Rd,t,r)},listUserCollectionCards(t,r){return e(Nd,t,r)},getUserCardSetProgress(t,r){return e(Ud,t,r)},listUserCardSetProgress(t,r){return e(Ld,t,r)},listMyCollectionCards(t,r){return e(Od,t,r)},upsertWorkflow(t,r){return e(Fd,t,r)},upsertWorkflowVersion(t,r){return e(Wd,t,r)},deleteWorkflow(t,r){return e(Vd,t,r)},listWorkflows(t,r){return e(xd,t,r)},listWorkflowArtworksForMe(t,r){return e(Gd,t,r)},listWorkflowMarketItems(t,r){return e(Kd,t,r)},getWorkflowForMarket(t,r){return e(Hd,t,r)},getWorkflowForMarketByWorkflowId(t,r){return e(jd,t,r)},getWorkflow(t,r){return e(Yd,t,r)},getWorkflowForRunner(t,r){return e(zd,t,r)},listWorkflowVersions(t,r){return e(Qd,t,r)},upsertWorld(t,r){return e(Jd,t,r)},upsertCharacter(t,r){return e(Zd,t,r)},deleteWorld(t,r){return e(Xd,t,r)},deleteCharacter(t,r){return e(qd,t,r)},followWorld(t,r){return e(ec,t,r)},getWorld(t,r){return e(tc,t,r)},getArtworkWithWorldCharacter(t,r){return e(rc,t,r)},getCharacter(t,r){return e(nc,t,r)},listBookmarksCharacters(t,r){return e(oc,t,r)},listWorldCharacters(t,r){return e(ac,t,r)},listBookmarkCharacterItems(t,r){return e(sc,t,r)},listUserFollowingWorlds(t,r){return e(ic,t,r)},subscribePersonalEvents(t,r){return e(dc,t,r)},subscribeWorkflowEvents(t,r){return e(cc,t,r)}}}const W=Symbol.for("@ts-pattern/matcher"),Or=Symbol.for("@ts-pattern/isVariadic"),Fe="@ts-pattern/anonymous-select-key",$t=e=>!!(e&&typeof e=="object"),Le=e=>e&&!!e[W],N=(e,t,r)=>{if(Le(e)){const n=e[W](),{matched:o,selections:a}=n.match(t);return o&&a&&Object.keys(a).forEach(s=>r(s,a[s])),o}if($t(e)){if(!$t(t))return!1;if(Array.isArray(e)){if(!Array.isArray(t))return!1;let n=[],o=[],a=[];for(const s of e.keys()){const i=e[s];Le(i)&&i[Or]?a.push(i):a.length?o.push(i):n.push(i)}if(a.length){if(a.length>1)throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(t.length<n.length+o.length)return!1;const s=t.slice(0,n.length),i=o.length===0?[]:t.slice(-o.length),d=t.slice(n.length,o.length===0?1/0:-o.length);return n.every((u,g)=>N(u,s[g],r))&&o.every((u,g)=>N(u,i[g],r))&&(a.length===0||N(a[0],d,r))}return e.length===t.length&&e.every((s,i)=>N(s,t[i],r))}return Object.keys(e).every(n=>{const o=e[n];return(n in t||Le(a=o)&&a[W]().matcherType==="optional")&&N(o,t[n],r);var a})}return Object.is(t,e)},x=e=>{var t,r,n;return $t(e)?Le(e)?(t=(r=(n=e[W]()).getSelectionKeys)==null?void 0:r.call(n))!=null?t:[]:Array.isArray(e)?Ce(e,x):Ce(Object.values(e),x):[]},Ce=(e,t)=>e.reduce((r,n)=>r.concat(t(n)),[]);function uc(...e){if(e.length===1){const[t]=e;return r=>N(t,r,()=>{})}if(e.length===2){const[t,r]=e;return N(t,r,()=>{})}throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`)}function U(e){return Object.assign(e,{optional:()=>Lt(e),and:t=>M(e,t),or:t=>Fr(e,t),select:t=>t===void 0?Ee(e):Ee(t,e)})}function pt(e){return Object.assign((t=>Object.assign(t,{[Symbol.iterator](){let r=0;const n=[{value:Object.assign(t,{[Or]:!0}),done:!1},{done:!0,value:void 0}];return{next:()=>{var o;return(o=n[r++])!=null?o:n.at(-1)}}}}))(e),{optional:()=>pt(Lt(e)),select:t=>pt(t===void 0?Ee(e):Ee(t,e))})}function Lt(e){return U({[W]:()=>({match:t=>{let r={};const n=(o,a)=>{r[o]=a};return t===void 0?(x(e).forEach(o=>n(o,void 0)),{matched:!0,selections:r}):{matched:N(e,t,n),selections:r}},getSelectionKeys:()=>x(e),matcherType:"optional"})})}const lc=(e,t)=>{for(const r of e)if(!t(r))return!1;return!0},fc=(e,t)=>{for(const[r,n]of e.entries())if(!t(n,r))return!1;return!0};function M(...e){return U({[W]:()=>({match:t=>{let r={};const n=(o,a)=>{r[o]=a};return{matched:e.every(o=>N(o,t,n)),selections:r}},getSelectionKeys:()=>Ce(e,x),matcherType:"and"})})}function Fr(...e){return U({[W]:()=>({match:t=>{let r={};const n=(o,a)=>{r[o]=a};return Ce(e,x).forEach(o=>n(o,void 0)),{matched:e.some(o=>N(o,t,n)),selections:r}},getSelectionKeys:()=>Ce(e,x),matcherType:"or"})})}function A(e){return{[W]:()=>({match:t=>({matched:!!e(t)})})}}function Ee(...e){const t=typeof e[0]=="string"?e[0]:void 0,r=e.length===2?e[1]:typeof e[0]=="string"?void 0:e[0];return U({[W]:()=>({match:n=>{let o={[t??Fe]:n};return{matched:r===void 0||N(r,n,(a,s)=>{o[a]=s}),selections:o}},getSelectionKeys:()=>[t??Fe].concat(r===void 0?[]:x(r))})})}function Y(e){return typeof e=="number"}function ce(e){return typeof e=="string"}function X(e){return typeof e=="bigint"}const Wr=U(A(function(e){return!0})),gc=Wr,ue=e=>Object.assign(U(e),{startsWith:t=>{return ue(M(e,(r=t,A(n=>ce(n)&&n.startsWith(r)))));var r},endsWith:t=>{return ue(M(e,(r=t,A(n=>ce(n)&&n.endsWith(r)))));var r},minLength:t=>ue(M(e,(r=>A(n=>ce(n)&&n.length>=r))(t))),maxLength:t=>ue(M(e,(r=>A(n=>ce(n)&&n.length<=r))(t))),includes:t=>{return ue(M(e,(r=t,A(n=>ce(n)&&n.includes(r)))));var r},regex:t=>{return ue(M(e,(r=t,A(n=>ce(n)&&!!n.match(r)))));var r}}),$c=ue(A(ce)),z=e=>Object.assign(U(e),{between:(t,r)=>z(M(e,((n,o)=>A(a=>Y(a)&&n<=a&&o>=a))(t,r))),lt:t=>z(M(e,(r=>A(n=>Y(n)&&n<r))(t))),gt:t=>z(M(e,(r=>A(n=>Y(n)&&n>r))(t))),lte:t=>z(M(e,(r=>A(n=>Y(n)&&n<=r))(t))),gte:t=>z(M(e,(r=>A(n=>Y(n)&&n>=r))(t))),int:()=>z(M(e,A(t=>Y(t)&&Number.isInteger(t)))),finite:()=>z(M(e,A(t=>Y(t)&&Number.isFinite(t)))),positive:()=>z(M(e,A(t=>Y(t)&&t>0))),negative:()=>z(M(e,A(t=>Y(t)&&t<0)))}),pc=z(A(Y)),q=e=>Object.assign(U(e),{between:(t,r)=>q(M(e,((n,o)=>A(a=>X(a)&&n<=a&&o>=a))(t,r))),lt:t=>q(M(e,(r=>A(n=>X(n)&&n<r))(t))),gt:t=>q(M(e,(r=>A(n=>X(n)&&n>r))(t))),lte:t=>q(M(e,(r=>A(n=>X(n)&&n<=r))(t))),gte:t=>q(M(e,(r=>A(n=>X(n)&&n>=r))(t))),positive:()=>q(M(e,A(t=>X(t)&&t>0))),negative:()=>q(M(e,A(t=>X(t)&&t<0)))}),mc=q(A(X)),hc=U(A(function(e){return typeof e=="boolean"})),Ic=U(A(function(e){return typeof e=="symbol"})),yc=U(A(function(e){return e==null})),kc=U(A(function(e){return e!=null}));var Mf={__proto__:null,matcher:W,optional:Lt,array:function(...e){return pt({[W]:()=>({match:t=>{if(!Array.isArray(t))return{matched:!1};if(e.length===0)return{matched:!0};const r=e[0];let n={};if(t.length===0)return x(r).forEach(a=>{n[a]=[]}),{matched:!0,selections:n};const o=(a,s)=>{n[a]=(n[a]||[]).concat([s])};return{matched:t.every(a=>N(r,a,o)),selections:n}},getSelectionKeys:()=>e.length===0?[]:x(e[0])})})},set:function(...e){return U({[W]:()=>({match:t=>{if(!(t instanceof Set))return{matched:!1};let r={};if(t.size===0)return{matched:!0,selections:r};if(e.length===0)return{matched:!0};const n=(a,s)=>{r[a]=(r[a]||[]).concat([s])},o=e[0];return{matched:lc(t,a=>N(o,a,n)),selections:r}},getSelectionKeys:()=>e.length===0?[]:x(e[0])})})},map:function(...e){return U({[W]:()=>({match:t=>{if(!(t instanceof Map))return{matched:!1};let r={};if(t.size===0)return{matched:!0,selections:r};const n=(i,d)=>{r[i]=(r[i]||[]).concat([d])};if(e.length===0)return{matched:!0};var o;if(e.length===1)throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${(o=e[0])==null?void 0:o.toString()}`);const[a,s]=e;return{matched:fc(t,(i,d)=>{const u=N(a,d,n),g=N(s,i,n);return u&&g}),selections:r}},getSelectionKeys:()=>e.length===0?[]:[...x(e[0]),...x(e[1])]})})},intersection:M,union:Fr,not:function(e){return U({[W]:()=>({match:t=>({matched:!N(e,t,()=>{})}),getSelectionKeys:()=>[],matcherType:"not"})})},when:A,select:Ee,any:Wr,_:gc,string:$c,number:pc,bigint:mc,boolean:hc,symbol:Ic,nullish:yc,nonNullable:kc,instanceOf:function(e){return U(A(function(t){return r=>r instanceof t}(e)))},shape:function(e){return U(A(uc(e)))}};const mt={matched:!1,value:void 0};function Ue(e){return new We(e,mt)}class We{constructor(t,r){this.input=void 0,this.state=void 0,this.input=t,this.state=r}with(...t){if(this.state.matched)return this;const r=t[t.length-1],n=[t[0]];let o;t.length===3&&typeof t[1]=="function"?o=t[1]:t.length>2&&n.push(...t.slice(1,t.length-1));let a=!1,s={};const i=(u,g)=>{a=!0,s[u]=g},d=!n.some(u=>N(u,this.input,i))||o&&!o(this.input)?mt:{matched:!0,value:r(a?Fe in s?s[Fe]:s:this.input,this.input)};return new We(this.input,d)}when(t,r){if(this.state.matched)return this;const n=!!t(this.input);return new We(this.input,n?{matched:!0,value:r(this.input,this.input)}:mt)}otherwise(t){return this.state.matched?this.state.value:t(this.input)}exhaustive(){if(this.state.matched)return this.state.value;let t;try{t=JSON.stringify(this.input)}catch{t=this.input}throw new Error(`Pattern matching error: no pattern matches value ${t}`)}run(){return this.exhaustive()}returnType(){return this}}const Vr=e=>{if(e)try{return JSON.parse(e)}catch{}},ge={apiUrl:"https://capi.voids.top",gatewayUrl:"wss://gw.pixai.art",rapiUrl:"https://rapi.pixai.art",isDev:!1,isProd:!0,amplitudeApiKey:"d95cfd06ddfbfefa9a8cfc33b860bd13",amplitudeExperimentsServerUrl:"https://experiments.pixai.art",amplitudeExperimentDeploymentKey:"client-4QLcUkUI8o4FkoOt9Oh4bX9wBPctjYq3",amplitudeServerUrl:"https://t.pixai.art/",getway:{ak:"6lgWlhyZecpiucMmPS6QIN",sk:"6FgzSlCS75fxcE3XBBHv2r"},appVersion:"1.0.17059",sentryDsn:"https://4bdd05545d14ec1e2db8056ba9ebc26e@o374408.ingest.us.sentry.io/4509727752847360",commitHash:"0ec442be81a4ee21bfcf5745e8ef10bc76836958",recaptchaSiteKey:"6Ld_hskiAAAAADfg9HredZvZx8Z_C8FrNJ519Rc6",shareUrl:"https://s.pixai.art",iosAppStoreLink:"https://apps.apple.com/app/pixai-ai-anime-art-generator/id6474528911",playStoreLink:"https://play.google.com/store/apps/details?id=io.mewtant.pixaiart&listing=pixaiweb-app",apkReleaseLink:"https://cdn.pixai.art/android_apk/app_release_latest.apk",helpCenterUrl:"https://support.pixai.art/",youtubeChannelUrl:"https://www.youtube.com/@PixaiART",comfyAppLibUrl:"https://cdn.pixai.art/lib/comfyui/index.js",firebase:{apiKey:"AIzaSyC9v9Q6kzk7hCUqvlI4P1nJg5_NBHtUfoY",vapidKey:"BFfRGgEdusKm661h2wtFKHU51U1bdJbf7efA1mggRNi8CIzYoogf_eWoyAtahALZz3NaZf8gC_5c_yytpnRhBw4"},turnstile:{invisibleSiteKey:"0x4AAAAAAAGM--P3VuJYItj9",nonInteractiveSiteKey:"0x4AAAAAABkdPYsrRwR4GfQK",managedSiteKey:"0x4AAAAAABkbsz0wsSnkOIKt"},intercomAppId:"kq7t2r83"},wc=()=>Vr(localStorage["api-base-url"])||ge.apiUrl,Tf=()=>Vr(localStorage["gateway-base-url"])||ge.gatewayUrl,vf=()=>({get isProd(){return!window.location.hostname.endsWith("pages.dev")},get isDev(){return!this.isProd}}),Bf=()=>{const e=wc();return{get isProd(){return e.includes(".")},get isTest(){return e.includes("ring.mewtant.co")&&e.includes("papi")},get isStaging(){return e.includes(".")&&e.includes("pai-api")},get isLocal(){return!this.isProd&&!this.isTest&&!this.isStaging},get name(){return this.isProd?"prod":this.isTest?"test":this.isStaging?"staging":"local"}}},Sc=Yn("debug::turnstile-site-key-type","",void 0,{getOnInit:!0}),Pf=e=>{const t=kr().get(Sc);return t==="test-always-pass"?Ue(e).returnType().with(V.Managed,()=>"1x00000000000000000000AA").with(V.NonInteractive,()=>"1x00000000000000000000AA").with(V.Invisible,()=>"1x00000000000000000000BB").exhaustive():t==="test-always-block"?Ue(e).returnType().with(V.Managed,()=>"2x00000000000000000000AB").with(V.NonInteractive,()=>"2x00000000000000000000AB").with(V.Invisible,()=>"2x00000000000000000000BB").exhaustive():t==="test-force-interactive"?Ue(e).returnType().with(V.Managed,()=>"3x00000000000000000000FF").with(V.NonInteractive,()=>"1x00000000000000000000AA").with(V.Invisible,()=>"1x00000000000000000000BB").exhaustive():Ue(e).returnType().with(V.Managed,()=>ge.turnstile.managedSiteKey).with(V.NonInteractive,()=>ge.turnstile.nonInteractiveSiteKey).with(V.Invisible,()=>ge.turnstile.invisibleSiteKey).exhaustive()};var tr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=o&63|128):(o&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=o&63|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=o&63|128)}return t},bc=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){const a=e[r++];t[n++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=e[r++],s=e[r++],i=e[r++],d=((o&7)<<18|(a&63)<<12|(s&63)<<6|i&63)-65536;t[n++]=String.fromCharCode(55296+(d>>10)),t[n++]=String.fromCharCode(56320+(d&1023))}else{const a=e[r++],s=e[r++];t[n++]=String.fromCharCode((o&15)<<12|(a&63)<<6|s&63)}}return t.join("")},Gr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<e.length;o+=3){const a=e[o],s=o+1<e.length,i=s?e[o+1]:0,d=o+2<e.length,u=d?e[o+2]:0,g=a>>2,E=(a&3)<<4|i>>4;let H=(i&15)<<2|u>>6,F=u&63;d||(F=64,s||(H=64)),n.push(r[g],r[E],r[H],r[F])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):bc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<e.length;){const a=r[e.charAt(o++)],i=o<e.length?r[e.charAt(o)]:0;++o;const u=o<e.length?r[e.charAt(o)]:64;++o;const E=o<e.length?r[e.charAt(o)]:64;if(++o,a==null||i==null||u==null||E==null)throw new Ac;const H=a<<2|i>>4;if(n.push(H),u!==64){const F=i<<4&240|u>>2;if(n.push(F),E!==64){const j=u<<6&192|E;n.push(j)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ac extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dc=function(e){const t=xr(e);return Gr.encodeByteArray(t,!0)},Kr=function(e){return Dc(e).replace(/\./g,"")},Cc=function(e){try{return Gr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof ne<"u")return ne;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=()=>Ec().__FIREBASE_DEFAULTS__,Tc=()=>{if(typeof Mn>"u"||typeof tr>"u")return;const e=tr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},vc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Cc(e[1]);return t&&JSON.parse(t)},Bc=()=>{try{return Mc()||Tc()||vc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Hr=()=>{var e;return(e=Bc())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}function jr(){try{return typeof indexedDB=="object"}catch{return!1}}function Yr(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var a;t(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){t(r)}})}function _c(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="FirebaseError";class Ae extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=Rc,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ze.prototype.create)}}class ze{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},o=`${this.service}/${t}`,a=this.errors[t],s=a?Nc(a,n):"Error",i=`${this.serviceName}: ${s} (${o}).`;return new Ae(o,i,n)}}function Nc(e,t){return e.replace(Uc,(r,n)=>{const o=t[n];return o!=null?String(o):`<${n}?>`})}const Uc=/\{\$([^}]+)}/g;function ht(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const o of r){if(!n.includes(o))return!1;const a=e[o],s=t[o];if(rr(a)&&rr(s)){if(!ht(a,s))return!1}else if(a!==s)return!1}for(const o of n)if(!r.includes(o))return!1;return!0}function rr(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return e&&e._delegate?e._delegate:e}class oe{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new Pc;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&n.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const n=this.normalizeInstanceIdentifier(t?.identifier),o=(r=t?.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fc(t))try{this.getOrInitializeService({instanceIdentifier:le})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:o});n.resolve(a)}catch{}}}}clearInstance(t=le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=le){return this.instances.has(t)}getOptions(t=le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(a);n===i&&s.resolve(o)}return o}onInit(t,r){var n;const o=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(o))!==null&&n!==void 0?n:new Set;a.add(t),this.onInitCallbacks.set(o,a);const s=this.instances.get(o);return s&&t(s,o),()=>{a.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(n)for(const o of n)try{o(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Oc(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=le){return this.component?this.component.multipleInstances?t:le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Oc(e){return e===le?void 0:e}function Fc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new Lc(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(C||(C={}));const Vc={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},xc=C.INFO,Gc={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},Kc=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),o=Gc[t];if(o)console[o](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hc{constructor(t){this.name=t,this._logLevel=xc,this._logHandler=Kc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in C))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...t),this._logHandler(this,C.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...t),this._logHandler(this,C.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,C.INFO,...t),this._logHandler(this,C.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,C.WARN,...t),this._logHandler(this,C.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...t),this._logHandler(this,C.ERROR,...t)}}const jc=(e,t)=>t.some(r=>e instanceof r);let nr,or;function Yc(){return nr||(nr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zc(){return or||(or=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zr=new WeakMap,It=new WeakMap,Qr=new WeakMap,ot=new WeakMap,Ft=new WeakMap;function Qc(e){const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{r(J(e.result)),o()},s=()=>{n(e.error),o()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(r=>{r instanceof IDBCursor&&zr.set(r,e)}).catch(()=>{}),Ft.set(t,e),t}function Jc(e){if(It.has(e))return;const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{r(),o()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});It.set(e,t)}let yt={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return It.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Qr.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return J(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zc(e){yt=e(yt)}function Xc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(at(this),t,...r);return Qr.set(n,t.sort?t.sort():[t]),J(n)}:zc().includes(e)?function(...t){return e.apply(at(this),t),J(zr.get(this))}:function(...t){return J(e.apply(at(this),t))}}function qc(e){return typeof e=="function"?Xc(e):(e instanceof IDBTransaction&&Jc(e),jc(e,Yc())?new Proxy(e,yt):e)}function J(e){if(e instanceof IDBRequest)return Qc(e);if(ot.has(e))return ot.get(e);const t=qc(e);return t!==e&&(ot.set(e,t),Ft.set(t,e)),t}const at=e=>Ft.get(e);function Qe(e,t,{blocked:r,upgrade:n,blocking:o,terminated:a}={}){const s=indexedDB.open(e,t),i=J(s);return n&&s.addEventListener("upgradeneeded",d=>{n(J(s.result),d.oldVersion,d.newVersion,J(s.transaction),d)}),r&&s.addEventListener("blocked",d=>r(d.oldVersion,d.newVersion,d)),i.then(d=>{a&&d.addEventListener("close",()=>a()),o&&d.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),i}function st(e,{blocked:t}={}){const r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",n=>t(n.oldVersion,n)),J(r).then(()=>{})}const eu=["get","getKey","getAll","getAllKeys","count"],tu=["put","add","delete","clear"],it=new Map;function ar(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(it.get(t))return it.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,o=tu.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(o||eu.includes(r)))return;const a=async function(s,...i){const d=this.transaction(s,o?"readwrite":"readonly");let u=d.store;return n&&(u=u.index(i.shift())),(await Promise.all([u[r](...i),o&&d.done]))[0]};return it.set(t,a),a}Zc(e=>({...e,get:(t,r,n)=>ar(t,r)||e.get(t,r,n),has:(t,r)=>!!ar(t,r)||e.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(nu(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function nu(e){const t=e.getComponent();return t?.type==="VERSION"}const kt="@firebase/app",sr="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Hc("@firebase/app"),ou="@firebase/app-compat",au="@firebase/analytics-compat",su="@firebase/analytics",iu="@firebase/app-check-compat",du="@firebase/app-check",cu="@firebase/auth",uu="@firebase/auth-compat",lu="@firebase/database",fu="@firebase/database-compat",gu="@firebase/functions",$u="@firebase/functions-compat",pu="@firebase/installations",mu="@firebase/installations-compat",hu="@firebase/messaging",Iu="@firebase/messaging-compat",yu="@firebase/performance",ku="@firebase/performance-compat",wu="@firebase/remote-config",Su="@firebase/remote-config-compat",bu="@firebase/storage",Au="@firebase/storage-compat",Du="@firebase/firestore",Cu="@firebase/firestore-compat",Eu="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]",Mu={[kt]:"fire-core",[ou]:"fire-core-compat",[su]:"fire-analytics",[au]:"fire-analytics-compat",[du]:"fire-app-check",[iu]:"fire-app-check-compat",[cu]:"fire-auth",[uu]:"fire-auth-compat",[lu]:"fire-rtdb",[fu]:"fire-rtdb-compat",[gu]:"fire-fn",[$u]:"fire-fn-compat",[pu]:"fire-iid",[mu]:"fire-iid-compat",[hu]:"fire-fcm",[Iu]:"fire-fcm-compat",[yu]:"fire-perf",[ku]:"fire-perf-compat",[wu]:"fire-rc",[Su]:"fire-rc-compat",[bu]:"fire-gcs",[Au]:"fire-gcs-compat",[Du]:"fire-fst",[Cu]:"fire-fst-compat","fire-js":"fire-js",[Eu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Map,Tu=new Map,St=new Map;function ir(e,t){try{e.container.addComponent(t)}catch(r){$e.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function pe(e){const t=e.name;if(St.has(t))return $e.debug(`There were multiple attempts to register component ${t}.`),!1;St.set(t,e);for(const r of Ve.values())ir(r,e);for(const r of Tu.values())ir(r,e);return!0}function Wt(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},te=new ze("app","Firebase",vu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,r,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}function Jr(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const n=Object.assign({name:wt,automaticDataCollectionEnabled:!1},t),o=n.name;if(typeof o!="string"||!o)throw te.create("bad-app-name",{appName:String(o)});if(r||(r=Hr()),!r)throw te.create("no-options");const a=Ve.get(o);if(a){if(ht(r,a.options)&&ht(n,a.config))return a;throw te.create("duplicate-app",{appName:o})}const s=new Wc(o);for(const d of St.values())s.addComponent(d);const i=new Bu(r,n,s);return Ve.set(o,i),i}function Pu(e=wt){const t=Ve.get(e);if(!t&&e===wt&&Hr())return Jr();if(!t)throw te.create("no-app",{appName:e});return t}function re(e,t,r){var n;let o=(n=Mu[e])!==null&&n!==void 0?n:e;r&&(o+=`-${r}`);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const i=[`Unable to register library "${o}" with version "${t}":`];a&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&i.push("and"),s&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$e.warn(i.join(" "));return}pe(new oe(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="firebase-heartbeat-database",Ru=1,Me="firebase-heartbeat-store";let dt=null;function Zr(){return dt||(dt=Qe(_u,Ru,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Me)}catch(r){console.warn(r)}}}}).catch(e=>{throw te.create("idb-open",{originalErrorMessage:e.message})})),dt}async function Nu(e){try{const r=(await Zr()).transaction(Me),n=await r.objectStore(Me).get(Xr(e));return await r.done,n}catch(t){if(t instanceof Ae)$e.warn(t.message);else{const r=te.create("idb-get",{originalErrorMessage:t?.message});$e.warn(r.message)}}}async function dr(e,t){try{const n=(await Zr()).transaction(Me,"readwrite");await n.objectStore(Me).put(t,Xr(e)),await n.done}catch(r){if(r instanceof Ae)$e.warn(r.message);else{const n=te.create("idb-set",{originalErrorMessage:r?.message});$e.warn(n.message)}}}function Xr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=1024,Lu=30*24*60*60*1e3;class Ou{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Wu(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,r;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=cr();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(s=>s.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Lu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=cr(),{heartbeatsToSend:n,unsentEntries:o}=Fu(this._heartbeatsCache.heartbeats),a=Kr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function cr(){return new Date().toISOString().substring(0,10)}function Fu(e,t=Uu){const r=[];let n=e.slice();for(const o of e){const a=r.find(s=>s.agent===o.agent);if(a){if(a.dates.push(o.date),ur(r)>t){a.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),ur(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Wu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jr()?Yr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Nu(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return dr(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return dr(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function ur(e){return Kr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e){pe(new oe("platform-logger",t=>new ru(t),"PRIVATE")),pe(new oe("heartbeat",t=>new Ou(t),"PRIVATE")),re(kt,sr,e),re(kt,sr,"esm2017"),re("fire-js","")}Vu("");const qr="@firebase/installations",Vt="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=1e4,tn=`w:${Vt}`,rn="FIS_v2",xu="https://firebaseinstallations.googleapis.com/v1",Gu=60*60*1e3,Ku="installations",Hu="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},me=new ze(Ku,Hu,ju);function nn(e){return e instanceof Ae&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on({projectId:e}){return`${xu}/projects/${e}/installations`}function an(e){return{token:e.token,requestStatus:2,expiresIn:zu(e.expiresIn),creationTime:Date.now()}}async function sn(e,t){const n=(await t.json()).error;return me.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function dn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Yu(e,{refreshToken:t}){const r=dn(e);return r.append("Authorization",Qu(t)),r}async function cn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function zu(e){return Number(e.replace("s","000"))}function Qu(e){return`${rn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ju({appConfig:e,heartbeatServiceProvider:t},{fid:r}){const n=on(e),o=dn(e),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const s={fid:r,authVersion:rn,appId:e.appId,sdkVersion:tn},i={method:"POST",headers:o,body:JSON.stringify(s)},d=await cn(()=>fetch(n,i));if(d.ok){const u=await d.json();return{fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:an(u.authToken)}}else throw await sn("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=/^[cdef][\w-]{21}$/,bt="";function qu(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const r=el(e);return Xu.test(r)?r:bt}catch{return bt}}function el(e){return Zu(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map;function fn(e,t){const r=Je(e);gn(r,t),tl(r,t)}function gn(e,t){const r=ln.get(e);if(r)for(const n of r)n(t)}function tl(e,t){const r=rl();r&&r.postMessage({key:e,fid:t}),nl()}let fe=null;function rl(){return!fe&&"BroadcastChannel"in self&&(fe=new BroadcastChannel("[Firebase] FID Change"),fe.onmessage=e=>{gn(e.data.key,e.data.fid)}),fe}function nl(){ln.size===0&&fe&&(fe.close(),fe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="firebase-installations-database",al=1,he="firebase-installations-store";let ct=null;function xt(){return ct||(ct=Qe(ol,al,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(he)}}})),ct}async function xe(e,t){const r=Je(e),o=(await xt()).transaction(he,"readwrite"),a=o.objectStore(he),s=await a.get(r);return await a.put(t,r),await o.done,(!s||s.fid!==t.fid)&&fn(e,t.fid),t}async function $n(e){const t=Je(e),n=(await xt()).transaction(he,"readwrite");await n.objectStore(he).delete(t),await n.done}async function Ze(e,t){const r=Je(e),o=(await xt()).transaction(he,"readwrite"),a=o.objectStore(he),s=await a.get(r),i=t(s);return i===void 0?await a.delete(r):await a.put(i,r),await o.done,i&&(!s||s.fid!==i.fid)&&fn(e,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e){let t;const r=await Ze(e.appConfig,n=>{const o=sl(n),a=il(e,o);return t=a.registrationPromise,a.installationEntry});return r.fid===bt?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}function sl(e){const t=e||{fid:qu(),registrationStatus:0};return pn(t)}function il(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(me.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=dl(e,r);return{installationEntry:r,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:cl(e)}:{installationEntry:t}}async function dl(e,t){try{const r=await Ju(e,t);return xe(e.appConfig,r)}catch(r){throw nn(r)&&r.customData.serverCode===409?await $n(e.appConfig):await xe(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function cl(e){let t=await lr(e.appConfig);for(;t.registrationStatus===1;)await un(100),t=await lr(e.appConfig);if(t.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await Gt(e);return n||r}return t}function lr(e){return Ze(e,t=>{if(!t)throw me.create("installation-not-found");return pn(t)})}function pn(e){return ul(e)?{fid:e.fid,registrationStatus:0}:e}function ul(e){return e.registrationStatus===1&&e.registrationTime+en<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll({appConfig:e,heartbeatServiceProvider:t},r){const n=fl(e,r),o=Yu(e,r),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const s={installation:{sdkVersion:tn,appId:e.appId}},i={method:"POST",headers:o,body:JSON.stringify(s)},d=await cn(()=>fetch(n,i));if(d.ok){const u=await d.json();return an(u)}else throw await sn("Generate Auth Token",d)}function fl(e,{fid:t}){return`${on(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t=!1){let r;const n=await Ze(e.appConfig,a=>{if(!mn(a))throw me.create("not-registered");const s=a.authToken;if(!t&&pl(s))return a;if(s.requestStatus===1)return r=gl(e,t),a;{if(!navigator.onLine)throw me.create("app-offline");const i=hl(a);return r=$l(e,i),i}});return r?await r:n.authToken}async function gl(e,t){let r=await fr(e.appConfig);for(;r.authToken.requestStatus===1;)await un(100),r=await fr(e.appConfig);const n=r.authToken;return n.requestStatus===0?Kt(e,t):n}function fr(e){return Ze(e,t=>{if(!mn(t))throw me.create("not-registered");const r=t.authToken;return Il(r)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function $l(e,t){try{const r=await ll(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await xe(e.appConfig,n),r}catch(r){if(nn(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await $n(e.appConfig);else{const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await xe(e.appConfig,n)}throw r}}function mn(e){return e!==void 0&&e.registrationStatus===2}function pl(e){return e.requestStatus===2&&!ml(e)}function ml(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Gu}function hl(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Il(e){return e.requestStatus===1&&e.requestTime+en<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(e){const t=e,{installationEntry:r,registrationPromise:n}=await Gt(t);return n?n.catch(console.error):Kt(t).catch(console.error),r.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(e,t=!1){const r=e;return await wl(r),(await Kt(r,t)).token}async function wl(e){const{registrationPromise:t}=await Gt(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(e){if(!e||!e.options)throw ut("App Configuration");if(!e.name)throw ut("App Name");const t=["projectId","apiKey","appId"];for(const r of t)if(!e.options[r])throw ut(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ut(e){return me.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="installations",bl="installations-internal",Al=e=>{const t=e.getProvider("app").getImmediate(),r=Sl(t),n=Wt(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},Dl=e=>{const t=e.getProvider("app").getImmediate(),r=Wt(t,hn).getImmediate();return{getId:()=>yl(r),getToken:o=>kl(r,o)}};function Cl(){pe(new oe(hn,Al,"PUBLIC")),pe(new oe(bl,Dl,"PRIVATE"))}Cl();re(qr,Vt);re(qr,Vt,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="/firebase-messaging-sw.js",Ml="/firebase-cloud-messaging-push-scope",In="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Tl="https://fcmregistrations.googleapis.com/v1",yn="google.c.a.c_id",vl="google.c.a.c_l",Bl="google.c.a.ts",Pl="google.c.a.e";var gr;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(gr||(gr={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Te;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Te||(Te={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function _l(e){const t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(r),o=new Uint8Array(n.length);for(let a=0;a<n.length;++a)o[a]=n.charCodeAt(a);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="fcm_token_details_db",Rl=5,$r="fcm_token_object_Store";async function Nl(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(lt))return null;let t=null;return(await Qe(lt,Rl,{upgrade:async(n,o,a,s)=>{var i;if(o<2||!n.objectStoreNames.contains($r))return;const d=s.objectStore($r),u=await d.index("fcmSenderId").get(e);if(await d.clear(),!!u){if(o===2){const g=u;if(!g.auth||!g.p256dh||!g.endpoint)return;t={token:g.fcmToken,createTime:(i=g.createTime)!==null&&i!==void 0?i:Date.now(),subscriptionOptions:{auth:g.auth,p256dh:g.p256dh,endpoint:g.endpoint,swScope:g.swScope,vapidKey:typeof g.vapidKey=="string"?g.vapidKey:Q(g.vapidKey)}}}else if(o===3){const g=u;t={token:g.fcmToken,createTime:g.createTime,subscriptionOptions:{auth:Q(g.auth),p256dh:Q(g.p256dh),endpoint:g.endpoint,swScope:g.swScope,vapidKey:Q(g.vapidKey)}}}else if(o===4){const g=u;t={token:g.fcmToken,createTime:g.createTime,subscriptionOptions:{auth:Q(g.auth),p256dh:Q(g.p256dh),endpoint:g.endpoint,swScope:g.swScope,vapidKey:Q(g.vapidKey)}}}}}})).close(),await st(lt),await st("fcm_vapid_details_db"),await st("undefined"),Ul(t)?t:null}function Ul(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="firebase-messaging-database",Ol=1,ve="firebase-messaging-store";let ft=null;function kn(){return ft||(ft=Qe(Ll,Ol,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ve)}}})),ft}async function Fl(e){const t=wn(e),n=await(await kn()).transaction(ve).objectStore(ve).get(t);if(n)return n;{const o=await Nl(e.appConfig.senderId);if(o)return await Ht(e,o),o}}async function Ht(e,t){const r=wn(e),o=(await kn()).transaction(ve,"readwrite");return await o.objectStore(ve).put(t,r),await o.done,t}function wn({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},L=new ze("messaging","Messaging",Wl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(e,t){const r=await Yt(e),n=Sn(t),o={method:"POST",headers:r,body:JSON.stringify(n)};let a;try{a=await(await fetch(jt(e.appConfig),o)).json()}catch(s){throw L.create("token-subscribe-failed",{errorInfo:s?.toString()})}if(a.error){const s=a.error.message;throw L.create("token-subscribe-failed",{errorInfo:s})}if(!a.token)throw L.create("token-subscribe-no-token");return a.token}async function xl(e,t){const r=await Yt(e),n=Sn(t.subscriptionOptions),o={method:"PATCH",headers:r,body:JSON.stringify(n)};let a;try{a=await(await fetch(`${jt(e.appConfig)}/${t.token}`,o)).json()}catch(s){throw L.create("token-update-failed",{errorInfo:s?.toString()})}if(a.error){const s=a.error.message;throw L.create("token-update-failed",{errorInfo:s})}if(!a.token)throw L.create("token-update-no-token");return a.token}async function Gl(e,t){const n={method:"DELETE",headers:await Yt(e)};try{const a=await(await fetch(`${jt(e.appConfig)}/${t}`,n)).json();if(a.error){const s=a.error.message;throw L.create("token-unsubscribe-failed",{errorInfo:s})}}catch(o){throw L.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function jt({projectId:e}){return`${Tl}/projects/${e}/registrations`}async function Yt({appConfig:e,installations:t}){const r=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function Sn({p256dh:e,auth:t,endpoint:r,vapidKey:n}){const o={web:{endpoint:r,auth:t,p256dh:e}};return n!==In&&(o.web.applicationPubKey=n),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=7*24*60*60*1e3;async function Hl(e){const t=await Yl(e.swRegistration,e.vapidKey),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Q(t.getKey("auth")),p256dh:Q(t.getKey("p256dh"))},n=await Fl(e.firebaseDependencies);if(n){if(zl(n.subscriptionOptions,r))return Date.now()>=n.createTime+Kl?jl(e,{token:n.token,createTime:Date.now(),subscriptionOptions:r}):n.token;try{await Gl(e.firebaseDependencies,n.token)}catch(o){console.warn(o)}return pr(e.firebaseDependencies,r)}else return pr(e.firebaseDependencies,r)}async function jl(e,t){try{const r=await xl(e.firebaseDependencies,t),n=Object.assign(Object.assign({},t),{token:r,createTime:Date.now()});return await Ht(e.firebaseDependencies,n),r}catch(r){throw r}}async function pr(e,t){const n={token:await Vl(e,t),createTime:Date.now(),subscriptionOptions:t};return await Ht(e,n),n.token}async function Yl(e,t){const r=await e.pushManager.getSubscription();return r||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_l(t)})}function zl(e,t){const r=t.vapidKey===e.vapidKey,n=t.endpoint===e.endpoint,o=t.auth===e.auth,a=t.p256dh===e.p256dh;return r&&n&&o&&a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ql(t,e),Jl(t,e),Zl(t,e),t}function Ql(e,t){if(!t.notification)return;e.notification={};const r=t.notification.title;r&&(e.notification.title=r);const n=t.notification.body;n&&(e.notification.body=n);const o=t.notification.image;o&&(e.notification.image=o);const a=t.notification.icon;a&&(e.notification.icon=a)}function Jl(e,t){t.data&&(e.data=t.data)}function Zl(e,t){var r,n,o,a,s;if(!t.fcmOptions&&!(!((r=t.notification)===null||r===void 0)&&r.click_action))return;e.fcmOptions={};const i=(o=(n=t.fcmOptions)===null||n===void 0?void 0:n.link)!==null&&o!==void 0?o:(a=t.notification)===null||a===void 0?void 0:a.click_action;i&&(e.fcmOptions.link=i);const d=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;d&&(e.fcmOptions.analyticsLabel=d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(e){return typeof e=="object"&&!!e&&yn in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");bn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function bn(e,t){const r=[];for(let n=0;n<e.length;n++)r.push(e.charAt(n)),n<t.length&&r.push(t.charAt(n));return r.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(e){if(!e||!e.options)throw gt("App Configuration Object");if(!e.name)throw gt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:r}=e;for(const n of t)if(!r[n])throw gt(n);return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}function gt(e){return L.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,r,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=ql(t);this.firebaseDependencies={app:t,appConfig:o,installations:r,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(e){try{e.swRegistration=await navigator.serviceWorker.register(El,{scope:Ml}),e.swRegistration.update().catch(()=>{})}catch(t){throw L.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf(e,t){if(!t&&!e.swRegistration&&await tf(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw L.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nf(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=In)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(e,t){if(!navigator)throw L.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw L.create("permission-blocked");return await nf(e,t?.vapidKey),await rf(e,t?.serviceWorkerRegistration),Hl(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(e,t,r){const n=af(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:r[yn],message_name:r[vl],message_time:r[Bl],message_device_time:Math.floor(Date.now()/1e3)})}function af(e){switch(e){case Te.NOTIFICATION_CLICKED:return"notification_open";case Te.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sf(e,t){const r=t.data;if(!r.isFirebaseMessaging)return;e.onMessageHandler&&r.messageType===Te.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(mr(r)):e.onMessageHandler.next(mr(r)));const n=r.data;Xl(n)&&n[Pl]==="1"&&await of(e,r.messageType,n)}const hr="@firebase/messaging",Ir="0.12.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=e=>{const t=new ef(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",r=>sf(t,r)),t},cf=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:n=>An(t,n)}};function uf(){pe(new oe("messaging",df,"PUBLIC")),pe(new oe("messaging-internal",cf,"PRIVATE")),re(hr,Ir),re(hr,Ir,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(){try{await Yr()}catch{return!1}return typeof window<"u"&&jr()&&_c()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(e,t){if(!navigator)throw L.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e=Pu()){return Dn().then(t=>{if(!t)throw L.create("unsupported-browser")},t=>{throw L.create("indexed-db-unsupported")}),Wt(Ot(e),"messaging").getImmediate()}async function gf(e,t){return e=Ot(e),An(e,t)}function _f(e,t){return e=Ot(e),lf(e,t)}uf();var $f="firebase",pf="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re($f,pf,"app");const mf=Jr({apiKey:ge.firebase.apiKey,authDomain:"mewtant-pixai.firebaseapp.com",projectId:"mewtant-pixai",storageBucket:"mewtant-pixai.appspot.com",messagingSenderId:"106543755468",appId:"1:106543755468:web:fab58eea1e5e9e7a5b1269",measurementId:"G-3B8JKQXMDQ"});async function hf(){return await Dn()?ff(mf):null}async function Rf(){const e=await hf();if(e)return gf(e,{serviceWorkerRegistration:await navigator.serviceWorker.ready,vapidKey:ge.firebase.vapidKey})}export{Ue as $,zn as A,po as B,qn as C,eo as D,uo as E,co as F,oo as G,fo as H,ao as I,go as J,Un as K,ro as L,lo as M,Mf as N,to as O,Sf as P,Df as Q,Vn as R,Cf as S,ho as T,Io as U,ko as V,no as W,mo as X,Sc as Y,wo as Z,So as _,Yn as a,yo as a0,Xn as a1,bo as a2,Af as a3,Hn as a4,Zn as a5,Se as b,wc as c,st as d,uc as e,ge as f,kr as g,Fn as h,Tf as i,Ef as j,Wn as k,vf as l,Bf as m,Sr as n,Qe as o,Jn as p,hf as q,_f as r,Rf as s,V as t,bf as u,Pf as v,Qn as w,$o as x,io as y,so as z};
