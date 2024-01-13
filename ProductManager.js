class ProductManager{
    constructor(){
        this.products = [];
    }
    
    
    getProducts = () =>{
        return this.products
    };
    addProduct(
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ) {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        if (this.products.length === 0){
            product.id = 1
        } else {
            product.id = this.products[this.products.length-1].id +1;
        }
        console.log("creando producto");
        this.products.push(product)
        console.log("producto creado");
        return this.products
    };
    getProductById(idproducto){
        const indexProduct = this.products.find(e => {
            if( e.id === idproducto){
            return e.id === idproducto
            } else {
                console.log("not found");
            }
        })
        console.log(indexProduct);
    };
    updateProduct(
        idproducto,
        newtitle,
        newdescription,
        newprice,
        newthumbnail,
        newcode,
        newstock
        ){
            // console.log(newtitle);
        const updatedProduct = this.products.find(e => {
            if( e.id === idproducto){
                e.title = newtitle
                e.description = newdescription
                e.price = newprice
                e.thumbnail = newthumbnail
                e.code = newcode
                e.stock = newstock
                return idproducto
            } else {
                console.log("not found");
            }
        })
        console.log(updatedProduct);
    };
    deleteProduct(idproducto){
        const indexProduct = this.products.find(e => {
            if( e.id === idproducto){

            } else {
                console.log("not found");
            }
        })
        console.log("Product deleted.");
    }
    
    }
console.log("Iniciando programa");

let product= new ProductManager()

