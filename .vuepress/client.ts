import { defineClientConfig } from '@vuepress/client'

const routerSkip =  ['/my/','/photo/', '/souni/', '/zvue/'];//路由跳过

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log('enhance',siteData);
    router.beforeEach((to, from, next) => {
        // console.log('before navigation')
        if(routerSkip && routerSkip.length){
          routerSkip.forEach(url=>{
            if(to.path.startsWith(url)){
              window.location.href = to.path;
              return;
            }
          })
        }
        next();
      })
  
      router.afterEach((to) => {
        // console.log('after navigation')
      })
  },
  setup() {
    // console.log('setup');
  },
  rootComponents: [],
})