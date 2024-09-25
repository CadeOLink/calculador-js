function Calculadora(){
   display = document.querySelector('.display')
   enter()
   this.Calculadora = function(){
      addEventListener('click', function(e){
         const el = e.target

         if(el.classList.contains('btn-num')){
            setValueDisplay(el)
         } 
         if(el.classList.contains('btn-zera')){
            nullValueDisplay()
         }
         if(el.classList.contains('btn-delete')){
            deleteOneValueDisplay()
         }
         if(el.classList.contains('btn-igual')){
            makeAccount()
         }
      }.bind(this))
   }

   function setValueDisplay(el){
      this.display.value += el.innerText
   }

   function nullValueDisplay(){
      this.display.value = ''
   }

   function deleteOneValueDisplay(){
      this.display.value = display.value.slice(0,-1)
   }
   
   function makeAccount(){
      let account
      try{
         account = eval(this.display.value)
         !account ? console.log("Erro") : this.display.value = String(account)
      } catch(e) {
         alert("Conta inválida: "+e)
      }
   }
   function enter(){
      this.display.addEventListener('keyup', e => {
         if(e.keyCode === 13){
            makeAccount()
         }
      })
   }

}

const calculadora = new Calculadora()

calculadora.Calculadora()
