  //Corrección de problemas de aparicion del modelo en RA
  const sceneEl = document.querySelector('a-scene');
  sceneEl.addEventListener('loaded', () => {
      sceneEl.camera= new THREE.PerspectiveCamera();
      scene.add(camera);
  });

  //variables
  var cont = 0;
  var bl = 0;

  //planos
  var plano = document.querySelector('#plano1');
  var plano2 = document.querySelector('#plano2');
  var plano3 = document.querySelector('#plano3');
  var plano4 = document.querySelector('#plano4');
  var plano5 = document.querySelector('#plano5');

  //textos
  var texto1 = document.querySelector("#t1");
  var texto2 = document.querySelector("#t2");
  var texto3 = document.querySelector("#t3");
  var texto4 = document.querySelector("#t4");
  var texto5 = document.querySelector("#t5");

  //funciones

  //funcion cambio de imagenes
  function fotos(){
        cont++;
        switch (bl){
            case 0:
                switch(cont % 4+1){
                    case 1:
                        plano.setAttribute('src','#en1');
                        plano2.setAttribute('src','#cc1');
                        plano3.setAttribute('src','#cub2');
                        plano4.setAttribute('src','#bib2');
                        plano5.setAttribute('src','#caf2');
                    break;
                    case 2:
                        plano.setAttribute('src','#en2');
                        plano2.setAttribute('src','#cc2');
                        plano3.setAttribute('src','#cub1');
                        plano4.setAttribute('src','#bib3');
                        plano5.setAttribute('src','#caf3');
                    break;
                    case 3:
                        plano.setAttribute('src','#en3');
                        plano2.setAttribute('src','#cc3');
                        plano3.setAttribute('src','#cub2');
                        plano4.setAttribute('src','#bib1');
                        plano5.setAttribute('src','#caf1');
                    break;
                    case 4:
                        plano.setAttribute('src','#en4');
                        plano2.setAttribute('src','#cc4');
                        plano3.setAttribute('src','#cub1');
                        plano4.setAttribute('src','#bib2');
                        plano5.setAttribute('src','#caf2');
                    break;
                } 
            break;
            case 1:
                plano.setAttribute('src','#MEN');
                plano2.setAttribute('src','#MCC');
                plano3.setAttribute('src','#ME');
                plano4.setAttribute('src','#MB');
                plano5.setAttribute('src','#MF');
            break;
            case 2:
                plano.setAttribute('src','#infoEn');
                plano2.setAttribute('src','#infoCe');
                plano3.setAttribute('src','#infoDo');
                plano4.setAttribute('src','#infoBi');
                plano5.setAttribute('src','#infoCa');
            break;

        }
    
  }

  //funcion de intervalo entre cambio de imagen
  function inicio(event){
      setInterval(fotos,3000)
  }

  //funcion mostrar boton
  function mostrar(){
      document.getElementById('estilo').style.display = 'block';
  }
  
  
  var m = document.querySelector("a-marker");
  
    m.addEventListener('markerFound', inicio);

  


   
  
  //boton información
  document.getElementById("info").addEventListener('click', (e)=>{
      //alert('oprimió información');
      //Entrada
      texto1.setAttribute('text-geometry','value','Informacion');
      texto1.setAttribute('material','color','#FFC300');
      texto1.setAttribute('position','-2.6 0.5 -3');

      //Computo
      texto2.setAttribute('text-geometry','value','Informacion');
      texto2.setAttribute('material','color','#FFC300');
      texto2.setAttribute('position','-2.6 0.5 -3');

      //Docencia
      texto3.setAttribute('text-geometry','value','Informacion');
      texto3.setAttribute('material','color','#FFC300');
      texto1.setAttribute('position','-2.6 0.5 -3');

      //Biblioteca
      texto4.setAttribute('text-geometry','value','Informacion');
      texto4.setAttribute('material','color','#FFC300');
      
      //Cafteria
      texto5.setAttribute('text-geometry','value','Informacion');
      texto5.setAttribute('material','color','#FFC300');

      document.getElementById("cerrar").style.display= 'block';

      bl = 2;
  });

  //boton croquis
  
  
  document.getElementById("mapa").addEventListener('click', (e)=>{
     //Entrada
      texto1.setAttribute('text-geometry','value','Ubicacion actual');
      texto1.setAttribute('material','color','#A3060F');
      

      //Computo
      texto2.setAttribute('text-geometry','value','Ubicacion actual');
      texto2.setAttribute('material','color','#A3060F');
      

      //Docencia
      texto3.setAttribute('text-geometry','value','Ubicacion actual');
      texto3.setAttribute('material','color','#A3060F');
      

      //Biblioteca
      texto4.setAttribute('text-geometry','value','Ubicacion actual');
      texto4.setAttribute('material','color','#A3060F');
      texto4.setAttribute('position','-3.8 0.5 -3');
      
      
      //Cafteria
      texto5.setAttribute('text-geometry','value','Ubicacion actual');
      texto5.setAttribute('material','color','#A3060F');
      texto5.setAttribute('position','-3.8 0.5 -3');
      

      document.getElementById("cerrar").style.display= 'block';

      //alert('oprimió ubicación');
      bl = 1;
  });


 //boton cerrar
  document.getElementById("cerrar").addEventListener('click',(e)=>{

      //Entrada
      //plano.setAttribute('src','#en1');    
      texto1.setAttribute('text-geometry','value','Entrada Principal');
      texto1.setAttribute('material','color','#D4AC0D');
      texto1.setAttribute('position','-3.8 0.5 -3');

      //Computo
      //plano2.setAttribute('src','#cc1');    
      texto2.setAttribute('text-geometry','value','Centro de computo');
      texto2.setAttribute('material','color','#D4AC0D');
      texto2.setAttribute('position','-4.6 0.5 -3');

      //Docencia
      //plano3.setAttribute('src','#cc1');    
      texto3.setAttribute('text-geometry','value','Edificio de Docencia');
      texto3.setAttribute('material','color','#D4AC0D');
      texto3.setAttribute('position','-4.6 0.5 -3');
      //Biblioteca
      texto4.setAttribute('text-geometry','value','Biblioteca');
      texto4.setAttribute('material','color','#D4AC0D');
      texto4.setAttribute('position','-2.6 0.5 -3');

      //Cafeteria
      texto5.setAttribute('text-geometry','value','Cafeteria');
      texto5.setAttribute('material','color','#D4AC0D');
      texto5.setAttribute('position','-2.6 0.5 -3');
      //m.addEventListener('markerFound',inicio);
      bl=0;
      document.getElementById("cerrar").style.display= 'none';
      //alert('clik 1');

 });