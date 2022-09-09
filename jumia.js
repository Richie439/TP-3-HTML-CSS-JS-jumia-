

    let ph = document.querySelectorAll(".ph");
    let changer = 0;
    function richie(){
        for (let i=0 ;i<ph.length;i++){
            ph[i].classList.remove("active");
        }
    }
    
    setInterval(() => {
                      changer++;
                        if(changer >= ph.length){
                            changer = 0;
                          }
                          richie();
                          ph[changer].classList.add("active");
                      }, 2500);     

              const battle1 = document.querySelector('.battle1');
              const battle2 = document.querySelector('.battle2');
              battle1.disabled =true;

              const slidepied=()=>{
                const pd = document.querySelectorAll('.pd');
                const bas = document.querySelectorAll('.bas');

          for(let i=0; i<pd.length; i++){
          let slade1 = pd[i];
          let slade2 = bas[i];

          if(slade1.style.display == 'block'){
          slade1.style.display = 'none';
          slade2.style.display = 'block';
          battle2.disabled = true;
          battle1.disabled = false;
          }
          else{
            slade1.style.display = 'block';
            slade2.style.display = 'none';
          battle1.disabled = true;
          battle2.disabled = false;
         }
      }
}

   







