

let input_pais=document.querySelector('.input_pais');
let inputs=document.querySelector('.inputs');
let p_desorden=document.querySelector('.p_desorden');
let p_orden=document.querySelector('.p_orden');
let aciertos=document.querySelector('.aciertos');
let otra_btn=document.querySelector('.otra_btn');
let contar=0
let veces=false;
let veces_mensaje=false;
let nombres=[
    "NICARAGUA",
    "URUGUAY",
    "COLOMBIA",
    "VENEZUELA",
    "BOLIVIA",
    "PERU",
    "EL SALVADOR",
    "CANADA",
    "ESTADOS UNIDOS",
    "BRASIL",
    "GUATEMALA",
    "PANAMA",
    "HONDURAS",
    "COSTA RICA",
    "MEXICO"
]
let nombreReal;
let nombreAlreves;

function verNombre(){
    // inputs.style.background=" rgb(0, 128, 0)"
    inputs.style="box-shadow:0 0 10px rgb(255, 255, 255)"

    let nom=Math.round(Math.random()*nombres.length);

        // console.log(nombres[nom])
        nombreReal=nombres[nom]
        if(nombres[nom]===undefined){
            verNombre()
            // console.log('null')
        }


        nom=nombres[nom].split("")
        nom=nom.sort(function(){
            return Math.random()-0.5
        })
        nom=nom.toString()
        nom=nom.replace(/,/g," ")
        nombreAlreves=nom;
        p_desorden.innerHTML=nombreAlreves

        // console.log(nom)
        if(veces_mensaje===false){
            setTimeout(()=>{
                mostrarMensaje()
        
            },3000)
        }
        veces_mensaje=true

}
    verNombre()

    function verrificar(){
        
        let sasa=input_pais.value;
            sasa=sasa.split("").join(" ")
        
        // console.log(sasa)
        p_orden.innerHTML=sasa.toUpperCase()
    
    
        if(nombreReal===input_pais.value.toUpperCase()){
            if(veces===false){
                setTimeout(()=>{
                    contar++;
                    aciertos.innerHTML=contar
                },800)
                veces=true
            }


            document.querySelector('.caja_acertada').classList.add('ver_acierto')
            document.querySelector('.mensaje_acierto').innerHTML=`Haz adivinado el pais: <b>${nombreReal}</b>`
            setTimeout(()=>{
                document.querySelector('.caja_acertada').classList.remove('ver_acierto')

            },4000)
     
            inputs.style.background=" rgb(0, 128, 0)"
            inputs.style="box-shadow:0 0 10px rgb(153, 255, 0)"
            document.querySelector('.fa-circle-check').style.display="block";
            document.querySelector('.fa-circle-xmark').style.display="none";
        }else{
            inputs.style.background="rgb(255, 0, 0)"
            inputs.style="box-shadow:0 0 10px rgb(255, 0, 0)"
            document.querySelector('.fa-circle-xmark').style.display="block";
            document.querySelector('.fa-circle-check').style.display="none";
        }
        if(input_pais.value===""||input_pais.value===" "){
        p_orden.innerHTML="|";
            input_pais.style.background="rgb(255, 255, 255)"
            document.querySelector('.fa-circle-xmark').style.display="none";
            document.querySelector('.fa-circle-check').style.display="none";
            inputs.style="box-shadow:0 0 10px rgb(255, 255, 255)"
        }
    
    }
    function volver(){
        veces=false
        input_pais.value="";
        p_orden.innerHTML="|";
        input_pais.style.background="rgb(255, 255, 255)"
        document.querySelector('.fa-circle-xmark').style.display="none";
        document.querySelector('.fa-circle-check').style.display="none";
        inputs.style="box-shadow:0 0 10px rgb(255, 255, 255)"
    
        verNombre()
    }
    function mostrarMensaje(){
        document.querySelector('.contenedor_mensaje').classList.add('ver_mensaje')
        console.log("ber")
        setTimeout(()=>{
        document.querySelector('.contenedor_mensaje').classList.remove('ver_mensaje')

        },5000)
    }
    input_pais.addEventListener('keyup',function(){
        verrificar()
    })
    otra_btn.addEventListener("click",function(){
        volver()
    })