import{w as n}from"./app-6279875b.js";import{_ as u,M as c,p as _,q as s,R as l,t as e,z as t,N as d,a1 as r}from"./framework-5866ffd3.js";const a=r('<h1 id="環境變數" tabindex="-1"><a class="header-anchor" href="#環境變數" aria-hidden="true">#</a> 環境變數</h1><h2 id="介紹" tabindex="-1"><a class="header-anchor" href="#介紹" aria-hidden="true">#</a> 介紹</h2><p>在 Vercel 平台設置環境變數，可以變更程式的設定。</p><h2 id="一覽" tabindex="-1"><a class="header-anchor" href="#一覽" aria-hidden="true">#</a> 一覽</h2>',4),i=l("thead",null,[l("tr",null,[l("th",null,"名稱"),l("th",null,"預設值"),l("th",null,"說明")])],-1),h=l("tr",null,[l("td",null,[l("code",null,"APP_DEBUG")]),l("td",null,[l("code",null,"false")]),l("td",null,[e("是否在標準輸出印出訊息，值必須為 "),l("code",null,"true"),e(" 或 "),l("code",null,"false"),e("。")])],-1),E=l("tr",null,[l("td",null,[l("code",null,"APP_WEBHOOK_PATH")]),l("td",null,[l("code",null,"/webhook")]),l("td",null,"應用程式的 webhook URL 路徑。")],-1),A=l("tr",null,[l("td",null,[l("code",null,"APP_API_TIMEOUT")]),l("td",null,[l("code",null,"9000")]),l("td",null,"呼叫外部服務 API 的超時時間。")],-1),p=l("tr",null,[l("td",null,[l("code",null,"APP_LANG")]),l("td",null,[l("code",null,"zh")]),l("td",null,[e("程式的初始語言，值必須為 "),l("code",null,"zh"),e("、"),l("code",null,"en"),e(" 或 "),l("code",null,"ja"),e("。")])],-1),P=l("tr",null,[l("td",null,[l("code",null,"APP_MAX_GROUPS")]),l("td",null,[l("code",null,"1")]),l("td",null,[e("群組數量上限，必須設置 "),l("code",null,"VERCEL_ACCESS_TOKEN"),e(" 環境變數。")])],-1),I=l("tr",null,[l("td",null,[l("code",null,"APP_MAX_USERS")]),l("td",null,[l("code",null,"5")]),l("td",null,[e("用戶數量上限，必須設置 "),l("code",null,"VERCEL_ACCESS_TOKEN"),e(" 環境變數。")])],-1),T=l("tr",null,[l("td",null,[l("code",null,"APP_MAX_PROMPT_MESSAGES")]),l("td",null,[l("code",null,"12")]),l("td",null,"上下文語句的數量上限。")],-1),O=l("tr",null,[l("td",null,[l("code",null,"APP_MAX_PROMPT_TOKENS")]),l("td",null,[l("code",null,"1024")]),l("td",null,"上下文單詞的數量上限。")],-1),N=l("tr",null,[l("td",null,[l("code",null,"APP_INIT_PROMPT")]),l("td",null,[l("code",null,"''")]),l("td",null,"系統的初始提示詞，用來設定使用者或 AI 的人物設定。")],-1),f=l("tr",null,[l("td",null,[l("code",null,"HUMAN_NAME")]),l("td",null,[l("code",null,"''")]),l("td",null,"使用者的名字。")],-1),m=l("tr",null,[l("td",null,[l("code",null,"HUMAN_INIT_PROMPT")]),l("td",null,[l("code",null,"''")]),l("td",null,"使用者的初始提示詞，用來設定使用者或 AI 的人物設定。")],-1),g=l("tr",null,[l("td",null,[l("code",null,"BOT_NAME")]),l("td",null,[l("code",null,"AI")]),l("td",null,"AI 的名字。當 AI 自動回覆設為關閉時，可以用來呼叫。")],-1),M=l("tr",null,[l("td",null,[l("code",null,"BOT_INIT_PROMPT")]),l("td",null,[l("code",null,"''")]),l("td",null,"AI 的初始提示詞，用來設定使用者或 AI 的人物設定。")],-1),L=l("tr",null,[l("td",null,[l("code",null,"BOT_TONE")]),l("td",null,[l("code",null,"''")]),l("td",null,"AI 的回覆語氣。")],-1),R=l("tr",null,[l("td",null,[l("code",null,"BOT_DEACTIVATED")]),l("td",null,[l("code",null,"false")]),l("td",null,[e("是否在一開始將 AI 自動回覆設為關閉，值必須為 "),l("code",null,"true"),e(" 或 "),l("code",null,"false"),e("。")])],-1),k=l("tr",null,[l("td",null,[l("code",null,"ERROR_TIMEOUT_DISABLED")]),l("td",null,[l("code",null,"false")]),l("td",null,[e("是否將呼叫外部服務 API 的超時錯誤關閉，值必須為 "),l("code",null,"true"),e(" 或 "),l("code",null,"false"),e("。")])],-1),b=l("tr",null,[l("td",null,[l("code",null,"VERCEL_TIMEOUT")]),l("td",null,[l("code",null,"<APP_API_TIMEOUT>")]),l("td",null,"呼叫 Vercel API 的超時時間。")],-1),C=l("tr",null,[l("td",null,[l("code",null,"VERCEL_PROJECT_NAME")]),l("td",null,[l("code",null,"gpt-ai-assistant")]),l("td",null,"Vercel 的專案名稱。當 Vercel 的專案名稱與 GitHub 的專案名稱不一樣時，必須使用此環境變數指定。")],-1),S=l("td",null,[l("code",null,"VERCEL_TEAM_ID")],-1),V=l("td",null,[l("code",null,"null")],-1),U=["href"],y=l("td",null,[l("code",null,"VERCEL_ACCESS_TOKEN")],-1),x=l("td",null,[l("code",null,"null")],-1),v=["href"],B=l("td",null,[l("code",null,"VERCEL_DEPLOY_HOOK_URL")],-1),G=l("td",null,[l("code",null,"null")],-1),K=["href"],D=l("tr",null,[l("td",null,[l("code",null,"OPENAI_TIMEOUT")]),l("td",null,[l("code",null,"<APP_API_TIMEOUT>")]),l("td",null,"呼叫 OpenAI API 的超時時間。")],-1),H=l("td",null,[l("code",null,"OPENAI_API_KEY")],-1),w=l("td",null,[l("code",null,"null")],-1),z=["href"],Y=l("td",null,[l("code",null,"OPENAI_COMPLETION_MODEL")],-1),X=l("td",null,[l("code",null,"gpt-3.5-turbo")],-1),q={href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-model",target:"_blank",rel:"noopener noreferrer"},W=l("td",null,[l("code",null,"OPENAI_COMPLETION_TEMPERATURE")],-1),j=l("td",null,[l("code",null,"0.9")],-1),F={href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature",target:"_blank",rel:"noopener noreferrer"},J=l("td",null,[l("code",null,"OPENAI_COMPLETION_MAX_TOKENS")],-1),Q=l("td",null,[l("code",null,"160")],-1),Z={href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-max_tokens",target:"_blank",rel:"noopener noreferrer"},$=l("td",null,[l("code",null,"OPENAI_COMPLETION_FREQUENCY_PENALTY")],-1),ll=l("td",null,[l("code",null,"0")],-1),el={href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-frequency_penalty",target:"_blank",rel:"noopener noreferrer"},nl=l("td",null,[l("code",null,"OPENAI_COMPLETION_PRESENCE_PENALTY")],-1),tl=l("td",null,[l("code",null,"0.6")],-1),ol={href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-presence_penalty",target:"_blank",rel:"noopener noreferrer"},dl=l("td",null,[l("code",null,"OPENAI_IMAGE_GENERATION_SIZE")],-1),ul=l("td",null,[l("code",null,"256x256")],-1),cl={href:"https://beta.openai.com/docs/api-reference/images/create#images/create-size",target:"_blank",rel:"noopener noreferrer"},_l=l("tr",null,[l("td",null,[l("code",null,"LINE_TIMEOUT")]),l("td",null,[l("code",null,"<APP_API_TIMEOUT>")]),l("td",null,"呼叫 LINE Messaging API 的超時時間。")],-1),sl=l("td",null,[l("code",null,"LINE_CHANNEL_ACCESS_TOKEN")],-1),rl=l("td",null,[l("code",null,"null")],-1),al=["href"],il=l("td",null,[l("code",null,"LINE_CHANNEL_SECRET")],-1),hl=l("td",null,[l("code",null,"null")],-1),El=["href"],Al=l("tr",null,[l("td",null,[l("code",null,"SERPAPI_TIMEOUT")]),l("td",null,[l("code",null,"<APP_API_TIMEOUT>")]),l("td",null,"呼叫 SerpApi API 的超時時間。")],-1),pl=l("td",null,[l("code",null,"SERPAPI_API_KEY")],-1),Pl=l("td",null,[l("code",null,"null")],-1),Il=["href"],Tl=l("tr",null,[l("td",null,[l("code",null,"SERPAPI_LOCATION")]),l("td",null,[l("code",null,"Taiwan")]),l("td",null,"查詢 Google 資料時，使用的地區。")],-1),Ol=l("tr",null,[l("td",null,[l("code",null,"SERPAPI_LANG")]),l("td",null,[l("code",null,"lang_zh-TW")]),l("td",null,"查詢 Google 資料時，使用的語言。")],-1),Nl=l("h2",{id:"重新部署",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#重新部署","aria-hidden":"true"},"#"),e(" 重新部署")],-1),fl=l("p",null,"每當環境變數有變更，就必須在 Vercel 平台點選「Redeploy」按鈕，以重新套用設定。",-1),ml={align:"center"},gl=["src"],Ml={__name:"environments.html",setup(Ll){return(Rl,kl)=>{const o=c("ExternalLinkIcon");return _(),s("div",null,[a,l("table",null,[i,l("tbody",null,[h,E,A,p,P,I,T,O,N,f,m,g,M,L,R,k,b,C,l("tr",null,[S,V,l("td",null,[e("Vercel 的 "),l("a",{href:t(n)("/images/vercel-team-id.png"),target:"_blank"},"team ID",8,U),e("。使用 Vercel 的 Pro 方案時，必須使用此環境變數指定。")])]),l("tr",null,[y,x,l("td",null,[e("Vercel 的 "),l("a",{href:t(n)("/images/vercel-access-token.png"),target:"_blank"},"access token",8,v),e("，用來實現持久化儲存。")])]),l("tr",null,[B,G,l("td",null,[e("Vercel 的 "),l("a",{href:t(n)("/images/vercel-deploy-hook-url.png"),target:"_blank"},"deploy hook URL",8,K),e("，用來重新部署應用程式。")])]),D,l("tr",null,[H,w,l("td",null,[e("OpenAI 的 "),l("a",{href:t(n)("/images/openai-api-key.png"),target:"_blank"},"API key",8,z),e("，用來實現與 AI 對話。")])]),l("tr",null,[Y,X,l("td",null,[e("詳見 "),l("a",q,[e("model"),d(o)]),e(" 參數說明。")])]),l("tr",null,[W,j,l("td",null,[e("詳見 "),l("a",F,[e("temperature"),d(o)]),e(" 參數說明。")])]),l("tr",null,[J,Q,l("td",null,[e("詳見 "),l("a",Z,[e("max_tokens"),d(o)]),e(" 參數說明。")])]),l("tr",null,[$,ll,l("td",null,[e("詳見 "),l("a",el,[e("frequency_penalty"),d(o)]),e(" 參數說明。")])]),l("tr",null,[nl,tl,l("td",null,[e("詳見 "),l("a",ol,[e("presence_penalty"),d(o)]),e(" 參數說明。")])]),l("tr",null,[dl,ul,l("td",null,[e("詳見 "),l("a",cl,[e("size"),d(o)]),e(" 參數說明。")])]),_l,l("tr",null,[sl,rl,l("td",null,[e("LINE 的 "),l("a",{href:t(n)("/images/line-channel-access-token.png"),target:"_blank"},"channel access token",8,al),e("，用來傳送訊息。")])]),l("tr",null,[il,hl,l("td",null,[e("LINE 的 "),l("a",{href:t(n)("/images/line-channel-secret.png"),target:"_blank"},"channel secret",8,El),e("，用來驗證訊息來源。")])]),Al,l("tr",null,[pl,Pl,l("td",null,[e("SerpApi 的 "),l("a",{href:t(n)("/images/serpapi-api-key.png"),target:"_blank"},"API key",8,Il),e("，用來查詢 Google 資料。")])]),Tl,Ol])]),Nl,fl,l("div",ml,[l("img",{src:t(n)("/images/vercel-redeploy.png"),width:"600"},null,8,gl)])])}}},Sl=u(Ml,[["__file","environments.html.vue"]]);export{Sl as default};
