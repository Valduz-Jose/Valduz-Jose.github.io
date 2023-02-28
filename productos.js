var cat_hamburguesas = ["Combo", "Pollo", "Carne", "3 Carnes", "Chuleta Ahumada", "Mixta", "Doble Carne"];
var cat_perros = ["Normal", "Pollo", "Carne", "Mixto", "Choripan", "Choripollo", "Choricarne"];
var cat_pizzas = ["Guerrera", "Pollo", "Hawaiana", "Gordon 4x4", "Vegetariana", "La Especial"];
var cat_especiales = ["Salchipapas", "Choripapas", "Salchipollo", "Parrilla", "Racion de papas fritas"];
var cat_refrescos = ["Malta", "Coca-Cola", "Pepsi-Cola", "Maxi", "Postobon", "Colita"];

var hamburguesas=["img/products/hamburguesas/combo"];
var perros=[""];
var pizzas=[""];
var especiales=[""];
var refrescos=[""];

function cambia_cat() {
    var cat
    cat = document.getElementById('categoria').value
    //mis_cat = acentos(cat)
    //alert(cat)

    mis_tipos = eval("cat_" + cat)
    //alert(mis_tipos)
    num_tipos = mis_tipos.length
    //alert(num_tipos)
    document.form1.tipos.length = num_tipos
    for (i = 0; i < num_tipos; i++) {
        document.form1.tipos.options[i].value = mis_tipos[i]
        document.form1.tipos.options[i].text = mis_tipos[i]
    }

}
function choice_photo(){
    var cho
    cho=document.getElementById('tipos').value
    alert(cho)
}