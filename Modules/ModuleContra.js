function GenContra(DatosUsuario) {
    const { Name, FavoriteColor, FavoriteNumber, FavoriteFood } = DatosUsuario;
    const Datos = [Name, FavoriteColor, FavoriteNumber, FavoriteFood].map(str => str.slice(-2))
    const Contraseña = Datos.join('');
    return Contraseña.toLowerCase();
}

export { GenContra };