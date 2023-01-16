<template>
    <section class="Menu">
        <button @click="despegable=!despegable" class="opciones"><img src="@/assets/menu.svg" alt=""></button>
        <transition name="fade">
        <div class="despegable" v-if="despegable">
            <div class="trans">
            <div class="idioma"><button class="traducida"><div class="traducto"><img src="@/assets/traductor.svg" alt="si"> Idioma</div></button></div>
            <div class="pago"><button class="paga"><div class="billote"><img src="@/assets/billetera.svg" alt="no"> Formas de pago</div></button></div>
            <div class="cerra_despegable" @click="despegable=false"><button><div><img src="@/assets/flecha.svg" alt=""></div></button></div>
            </div>    
        </div>
        </transition>

        <div class="icono_frase_boton">
            <img src="https://menugrg.com.mx:7443/recs_marcas/logo_toks.png" alt="" class="logo">
            <h2 class="frase">Estar aqui, está mejor</h2>
            <router-link class="boton_menu" :to="{name:'about'}">MENÚ</router-link>
        </div>

        <div class="modal" v-if="AbrirModal">
            <div class="informacion">
                <h3 class="localizacion">Confírmanos tu ubicación</h3>
                <div class="panel_localizacion">
                    <img src="@/assets/ubicacion.png" alt="">
                    <div class="ciudad">Puebla</div>
                </div>    
                <div class="botones">
                    <button @click="AbrirModal=false" class="boton_si"><p>Sí</p></button>
                    <button @click="AbrirModal=false, AbrirModal_Dos=true" class="boton_no"><p>No</p></button>
                </div>
            </div>
        </div>

        <div class="AbrirModal_Dos" v-if="AbrirModal_Dos">
            <div class="estado_sucursal">

                <ul class="dos_opciones">
                 <div class="dentro">
                    <h3 class="pregunta">¿Donde te encuentras?</h3>
                    <li>
                        <div>
                            <div class="objeto_estado" @click="Estados=true">
                                <img src="@/assets/nueva_ubica.png" alt="algoxd">
                                <span>Estado</span>
                            </div>
                            <div class="lista_estado" v-if="Estados">
                                <ul class="lista_estados">
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Aguascalientes</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Baja California</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Campeche</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Chiapas</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Guerrero</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Chiapas</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Hidalgo</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Jalisco</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Puebla</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Estados=false" class="ver"><div class="lista_todo">Oaxaca</div></button></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div>
                            <div class="objeto_sucursal" @click="Sucursales=true">
                                <img src="@/assets/tienda.png" alt="algomas xd">
                                <span>Sucursal</span>
                            </div>
                            <div class="lista_sucursale" v-if="Sucursales">
                                <ul class="lista_sucursales">
                                    <li value="[object Object]" class="lista"><button @click="Sucursales=false" class="ver"><div class="lista_todo">Sucursal 1</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Sucursales=false" class="ver"><div class="lista_todo">Sucursal 2</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Sucursales=false" class="ver"><div class="lista_todo">Sucursal 3</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Sucursales=false" class="ver"><div class="lista_todo">Sucursal 4</div></button></li>
                                    <li value="[object Object]" class="lista"><button @click="Sucursales=false" class="ver"><div class="lista_todo">Sucursal 5</div></button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <button @click="AbrirModal_Dos=false" class="cerrarr">Confirmar</button> 
                 </div>   
                </ul>      
            </div>
        </div>
    

    </section>
</template>

<script>
import font from "@/common/font.css";
import { ref } from "vue";

export default {
    data(){
        return{
            AbrirModal:true,
            AbrirModal_Dos:false,
            Sucursales:false,
            Estados:false,
        }
    },
    setup(){
        const despegable= ref(false);
        return{despegable};
    }
}
</script>

<style scoped>
.opciones{
    margin-left: -69rem;
    margin-top: -32rem;
    position: fixed;
    border: none;
    cursor: pointer;
    background: transparent;
}
.opciones img{
    width: 30px;
    height: 30px;
}
.idioma{
    background:transparent;
    height: 3rem;
    cursor: pointer;
    margin-top: 2rem;
}
.idioma:hover{
    background: rgb(36, 35, 35);
    transition: background-color 1s;
}
.idioma img{
    width:35px ;
    height:35px ;
    
}
.traducida{
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
}
.traducto{
    display: flex;
    align-items: center;
}
.pago{
    margin-top: 2rem;
    background:transparent;
    height: 3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.pago:hover{
    background: rgb(36, 35, 35);
    transition: background-color 1s;
}
.pago img{
    width: 35px;
    height: 35px;
}
.paga{
    background: transparent;
    border: none;
    cursor: pointer;
        color: white;
}
.billote{
    display: flex;
    align-items: center;
}
.cerra_despegable {
    margin-top: 3rem;
    margin-left: 14.5rem;

}

.despegable{
    background: linear-gradient(180deg,#2f2f30,#262628);
    position: fixed;
    width: 17rem;
    height: 38rem;
    margin-left: -58rem;
    border-radius: 25px;
}
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity 1s ease;
}



.Menu{
background: linear-gradient(60deg,rgba(0,0,0,.726),rgba(0,0,0,.384) 0,rgba(3,3,3,.705)), url(https://menugrg.com.mx:7443/recs_marcas/fondo_home.jpg);
position: fixed;
width: 100vw;
height: 100vh;
background-position-y: -22rem;
background-position-x: -.2rem;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
}
.icono_frase_boton{
    width: 19rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    margin-top: 4rem;
}
.logo{
    width: 230px;
    height: 200px;
    margin-left: 2rem;
}
.boton_menu{
    background: linear-gradient(rgb(245, 130, 32) 0%, rgb(219, 101, 0) 100%) 0% 0%;    box-shadow: 0 3px 6px rgba(0,0,0,.69);
    opacity: 1;
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 27px;
    color: white;
    font-size: 23px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    text-decoration: none;
}

.boton_menu:hover{
    background: rgb(236, 164, 29);
    transition: background-color 1s;
}
.frase{
    color: white;
    font-family:cocogoose-pro;
    font-size: 23px;
    margin-top: -8px;
}
/* ----------------------------------------------------------------------------------------------------------------------------------------- */
.modal{
    background: linear-gradient(180deg,#2f2f30,#262628);
    box-shadow: 0 3px 6px rgb(0 0 0 / 26%);
    position: fixed;
    width: 32rem;
    height: 15rem;
    border-radius: 25px;
}

.informacion{
    width: 30rem;
    margin-left: 1rem;
    margin-top: 1rem;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.localizacion{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    width: 20rem;
    color: white;
    text-align: center;
    margin-top: -20px;
}
.botones{
    width: 22rem;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-bottom: -1.5rem;
}
.panel_localizacion:hover{
    cursor: pointer;
}
.boton_si{
    width: 9.5rem;
    height: 36px;
    border-radius: 25px;
    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,.69);
    border: none;
    font-family:cocogoose-pro;
    font-size: 1.1rem;
    background: linear-gradient(rgb(245, 130, 32) 0%, rgb(219, 101, 0) 100%) 0% 0%;
    cursor: pointer;
    margin-left: 1rem;
}
.boton_si:hover{
    background: rgb(240, 168, 35);
    transition: background-color 1s;
}

.boton_no{
    width: 9.5rem;
    height: 36px;
    border-radius: 25px;
    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,.69);
    border: none;
    font-family:cocogoose-pro;
    font-size: 1.1rem;
    background: linear-gradient(rgb(47, 47, 48) 0%, rgb(38, 38, 40) 100%);
    cursor: pointer;
}
.boton_no:hover{
    background: rgb(114, 109, 109);
    transition: background-color 1s;
}

.panel_localizacion{
    background: linear-gradient(180deg,#2f2f30,#262628);
    box-shadow: -1px 4px 2px -2px rgba(255,255,255,0.34);
    width: 28.5rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    height: 3.5rem;
}
.panel_localizacion img{
    width: 50px;
    height: 50px;
    margin-left: .5rem;
}
.ciudad{
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    color: white;
    margin-left: 8.5rem;
    font-size: 1.5rem;
}
/* ----------------------------------------------------------------------------------------------------------------------------------------- */
.AbrirModal_Dos{
    box-shadow: 0 3px 6px rgb(0 0 0 / 26%);
    position: fixed;
    width: 32rem;
    height: 15rem;
    border-radius: 25px;
}
.estado_sucursal{
    background: linear-gradient(180deg,#2f2f30,#262628);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    text-align: center;
    transition: 1s;
}

.objeto_estado{
    background: transparent; 
    cursor: pointer;
    width: 20rem;
    height: 3rem;
    margin-top: 1.2rem;
    list-style: none;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    color: white;
    align-items: center;
}
.objeto_estado:hover{
    background: rgb(37, 36, 36);
    transition: background-color 1s;
}
.objeto_estado img{
    width: 40px;
    height: 40px;
    margin-right: 2rem;
}

.objeto_sucursal img{
    width: 40px;
    height: 40px;
    margin-right: 2rem;
}
.lista_estados{
    margin: 0;
    padding: 8px 0;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    list-style: none;
    overflow-y: scroll;
    height: 8rem;
    
}

.objeto_sucursal{
    background: transparent;
    cursor: pointer;
    width: 20rem;
    height: 3rem;
    margin-top: 1.2rem;
    list-style: none;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    color: white;
    align-items: center;
}
.objeto_sucursal:hover{
    background: rgb(37, 36, 36);
    transition: background-color 1s;
}
.lista{
    display: flex;
}


.lista_sucursales{
    margin: 0;
    padding: 8px 0;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    list-style: none;
    overflow-y: scroll;
    height: 8rem;
}
li{
    display: list-item;
}
ul{
    list-style: none;
}
.ver{
    background: transparent;
    border: none;
}
.pregunta{
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    color: white;
    margin-left: 8.5rem;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-left: -1rem;
}
.lista_todo{
    width: 18rem;
    height: 2.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
    font-size: 1rem;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.lista_todo:hover{
    background: rgb(114, 109, 109);
    transition: background-color 1s;
}

.cerrarr{
    margin-top: 2rem;
    margin-bottom: 1.2rem;
    width: 9.5rem;
    height: 36px;
    border-radius: 25px;
    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,.69);
    border: none;
    font-family:cocogoose-pro;
    font-size: 1.1rem;
    background: linear-gradient(rgb(245, 130, 32) 0%, rgb(219, 101, 0) 100%) 0% 0%;
    cursor: pointer;
}

/*----------------------------------------------------------------------------------------------------------------------------------------- */
@media (min-width: 320px) and (max-width: 399px){
    .logo{
        width: 180px;
        height: 150px;
    }
    .frase{
        font-weight: 400;
        font-size: 18px;
    }

    .Menu{
        background-position-x:-9rem ;
        background-position-y:0rem ;
    }
    .icono_frase_boton{
        margin-top: 7rem;
    }
    .modal{
        width: 20rem;
        height: 15rem;
    }    
    .informacion{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .localizacion{
        margin-left: -12rem;
        width: 19.5rem;
    }
    .panel_localizacion{
        width: 18rem;
        margin-left: -12rem;
    }
    .ciudad{
        margin-left: 5rem;
    }
    .botones{
        margin-left: -12rem;
        width: 14rem;
    }
    .boton_si{
        width: 70px;
    }
    .boton_no{
        width: 70px;
    }
    .estado_sucursal{
        width: 20rem;
        margin-left: 6rem;
    }

}
/*--------------------------------------------------------------------------------------------- */
@media (min-width: 400px) and (max-width: 480px){
    .logo{
    width: 250px;
    height: 250px;
    }
    .frase{
    font-weight: 400;
    font-size: 25px;
    }
    .Menu{
    background-position-x:-15rem ;
    background-position-y:-.5rem ;
        }
    .icono_frase_boton{
        margin-top: 1rem;
    }

    .modal{
        width: 22rem;
        height: 15rem;
    } 

    .informacion{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .localizacion{
        margin-left: -10rem;
        width: 19.5rem;
    }
    .panel_localizacion{
        width: 21rem;
        margin-left: -10rem;
    }
    .ciudad{
        margin-left: 5rem;
    }
    .botones{
        margin-left: -12rem;
        width: 14rem;
    }
    .boton_si{
        width: 70px;
    }
    .boton_no{
        width: 70px;
    }
    .estado_sucursal{
        width: 20rem;
        margin-left: 6rem;
    }

}

@media (min-width: 768px) and (max-width: 1024px){
    
    .logo{
    width: 250px;
    height: 200px;
    }
    .frase{
    font-weight: 400;
    font-size: 25px;
    }
    .Menu{
        background-position-x: 0rem;
        background-position-y: -15rem;
        }

}

</style>