export const myLogger = (store) => (next) => (action) => {
  // store - redux store'a erişip değerleri kullanabilirim
  // action - dispat edilen action opjesine erişip değerleri kullanabilirim
  // next - işlemi devam ettirebilirim

  console.log("[Middleware] Şimdiki state:", store.getState());
  console.log("[Middleware] Şu aksiyon dispatch edilecek:", action);
  const result = next(action);
  console.log("[Middleware] Sonraki state:", store.getState());
  return result;
};

// -------------
