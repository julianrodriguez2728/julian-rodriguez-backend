class ProductManager{
  constructor(productos){
      this.productos = productos
      this.productos = [];
  }
  addProductos(
      title,
      description,
      price,
      thumbnail,
      code,
      stock = 30
      ){
          const eventos = {
              id: this.productos.length + 1,
              title,
              description,
              price,
              thumbnail,
              code,
              stock,
          };
          this.productos.push(eventos);
      }
  getProducts(){
          return this.products
      }
  getProductById(id){
      const identificador = this.productos.find((prod)=> prod.id === id);
      if(identificador){
          let keys = Object.values(identificador) 
          console.log(keys)
      }else{
          console.log("producto NO encontrado");
      }
  }
}

const nuevoProducto = new ProductManager();
nuevoProducto.addProductos("Papas lays","nuevas papas lays 124g", 280+"$","./img/123123.jpg", "LpjwbBn234")
nuevoProducto.addProductos("choclo","nuevas papas lays 124g", 280+"$","./img/123123.jpg", "LpjwbBn234")
nuevoProducto.addProductos("nashe","nuevas papas lays 124g", 280+"$","./img/123123.jpg", "LpjwbBn234")
nuevoProducto.getProductById(2)
nuevoProducto.getProductById(1)
nuevoProducto.getProductById(29)
console.log(nuevoProducto)
