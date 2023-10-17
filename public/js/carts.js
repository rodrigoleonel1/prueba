async function clearCart(cid) {
    await fetch(`https://prueba-mocha-tau.vercel.app/api/carts/${cid}`, { method: "DELETE" });
    location.reload();
}

async function deleteProduct(cid, pid) {
    await fetch(`https://prueba-mocha-tau.vercel.app/api/carts/${cid}/products/${pid}`, { method: "DELETE" });
    location.reload();
}

async function purchase(cid) {
    await fetch(`https://prueba-mocha-tau.vercel.app/api/carts/${cid}/purchase`, { method: "POST" });
    location.replace('https://prueba-mocha-tau.vercel.app/products');
}