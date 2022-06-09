
export const dateFormat = (date) => {
    const localeDate = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return localeDate.toLocaleDateString('es-AR',options)
}

