// Global scope ke pollution se problem hoti hai kahibar to global scope ke variable hai jo decaration usko remove karne ke liye IIfe use hota hai 


(function chai(){
    console.log('DB connected');
})();


((name) => {
    console.log(`DB Connected two ${name}`);
    
})('Nishant')

// There is two iife smiple and normal iife
