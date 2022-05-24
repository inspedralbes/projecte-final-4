
#  Funcionament aplicacio
- La aplicacio comença en /views/HomeView.vue on s'executa tres columnes en la cual la del mitg es mostra el joc
```
    <div class="col s12 center-align">
     <h1 id="lletres"></h1>
         <div class="row main-container center-align">
             <div class="col s3 center-align ocultar-movil">
       
             </div>
            <div class="col s6 center-align masgrande-movil">
                <joc />
            </div>
            <div class="col s3 center-align ocultar-movil">
       
             </div>
    </div>

```
El joc esta en components/joc.vue , aqui esta tot el joc , tot en el mateix component.
- El joc comença amb un <button v-on:click="iniciarPartida()"> -> "Linia 7" , la funció iniciarPartida() esta en -> "Linea 726".El que fa aquesta funcio es que al clicar en el boto el boto y la normativa fan un display:none; y es mostra un cronometre que se inicia. ("El temps que durara la partida"). Inmediatament es mostrara les caselles (linea 36) amb un "display: block;"
