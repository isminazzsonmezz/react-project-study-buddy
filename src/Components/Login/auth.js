
// tanımlı sabit bir kullanıcı bilgisi 
const currentUser = {
    username: "admin@gmail.com",
    password: "1234",
  };
  
    /* 
    - Bu fonksiyon, kullanıcı giriş yapmaya çalıştığında çağrılan fonksiyon.
    - Kullanıcının girdiği bilgileri parametre olarak alır. 
    */
  export function login(username, password) {
    if (username === currentUser.username && password === currentUser.password) {
        /*
            - localStorage'a "loggedIn" anahtarıyla "true" değeri kaydedilir.
            Yani kullanıcı giriş yaptı olarak işaretlenir. Bu bilgi sayfa yenilense bile tarayıcıda saklanır.
        */
      localStorage.setItem("loggedIn", "true");
      return true;
    }
    return false;
  }
  /*
    - Bu fonksiyon, kullanıcı çıkış yaptığında çağrılır.
    - localStorage'dan "loggedIn" anahtarı silinir. Yani sistem artık kullanıcıyı giriş yapmış olarak görmez.
   */
  export function logout() {
    localStorage.removeItem("loggedIn");
  }
  /*
    - Bu fonksiyon, kullanıcının giriş yapıp yapmadığını kontrol eder.
    - Eğer "loggedIn" değeri "true" ise, kullanıcı giriş yapmış kabul edilir.
    ** Bu genellikle "giriş yapılmadan bu sayfaya erişilemez" gibi durumlar için kullanılır.
  */
  export function isLoggedIn() {
    return localStorage.getItem("loggedIn") === "true";
  }
  