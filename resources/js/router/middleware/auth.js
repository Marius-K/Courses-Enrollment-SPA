export default function auth ({ next, store, to }){
  if(!store.getters['auth/isAuthenticated']) {
      return next({
         name: 'login',
         query: { redirect: to.fullPath }
      });
  }
 
  return next();
 }