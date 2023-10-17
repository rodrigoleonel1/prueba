async function changeRole(uid) {
    const res = await fetch(`https://prueba-mocha-tau.vercel.app/api/users/admin/changeRole/${uid}`, { method: "GET" });
    if (res.status == 401) {
        return Toastify({
            text: "No puedes hacer eso.",
            style: { background: "#dc3545" },
            gravity: "bottom"
        }).showToast();
    }
    location.reload();
}

async function deleteUser(uid) {
    const res = await fetch(`https://prueba-mocha-tau.vercel.app/api/users/admin/deleteUser/${uid}`, { method: "DELETE" });
    if (res.status == 401) {
        return Toastify({
            text: "No puedes hacer eso.",
            style: { background: "#dc3545" },
            gravity: "bottom"
        }).showToast();
    }
    location.reload();
}