<template>
  <nav class="nav">
    <ul class="list">

        <li class="list_item">
            <div class="list_button">
                <img src="" alt="kk">
                <a>Inicio</a>
            </div>
        </li>

        <li class="list_item list_item--click">
            <div class="list_button list_button--click">
                <img src="" alt="document">
                <a  class="nav_link">Servicios</a>
                <img src="" alt="flecha">
            </div>

            <ul class="list_show">
                <li class="list_inside">
                    <a  class="nav_link nav_link--iniside">Estoy dentro</a>
                </li>

                <li class="list_inside">
                    <a  class="nav_link nav_link--iniside">Estoy dentro</a>
                </li>

                <li class="list_inside">
                    <a  class="nav_link nav_link--iniside">Estoy dentro</a>
                </li>

                <li class="list_inside">
                    <a  class="nav_link nav_link--iniside">Estoy dentro</a>
                </li>
            </ul>
        </li>

        <li class="list_item">
            <div class="list_button">
                <img src="" alt="kk">
                <a >Estadisticas</a>
            </div>
        </li>

        <li class="list_item list_item--click">
            <div class="list_button list_button--click">
                <img src="" alt="document">
                <a  class="nav_link" @click="hazclik">Notificaciones</a>
                <img src="" alt="flecha">
            </div>

            <ul class="list_show">
                <li class="list_inside">
                    <a href="" class="nav_link nav_link--iniside">Estoy dentro</a>
                </li>

                <li class="list_inside">
                    <a href="" class="nav_link nav_link--iniside">Estoy dentro</a>
                </li>

                <li class="list_inside">
                    <a href="" class="nav_link nav_link--iniside">Estoy dentro</a>
                </li>

                <li class="list_inside">
                    <a href="" class="nav_link nav_link--iniside">Estoy dentro</a>
                </li>
            </ul>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
    methods:{
        hazclik(){
            const height = 0;
            let algo = document.querySelectorAll('list_button--click')

            
            console.log(menu.clientHeight)
        }
    }

}
</script>

<style  scoped>
.nav{
    width: 300px;
}
.nav_link{
    color: #303440;
    display: block;
    padding: 15px 0;
    text-decoration: none;
}
.nav_link--iniside{
    border-radius: 6px;
    padding-left: 20px;
}
.nav_link--iniside:hover{
    background: goldenrod;
}


.list{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 0 16px 16px 0;
    background: #fff;
}

.list_item{
    list-style-type: none;
    width: 100%;
    text-align: center;
    overflow: hidden;
}

.list_item--click{
    cursor: pointer;
}

.list_button{
    display: flex;
    align-items: center;
    gap: 1em;
    width: 70%;
    margin:  0 auto;
}

.list_show{
    width: 80%;
    margin-left: auto;
    border-left: 2px solid #303440;
    list-style: none;
    transition: height .4s;
    height: 0;
}

</style>>