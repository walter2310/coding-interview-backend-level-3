import { Item } from "../interfaces/item.interface";

/**
 * Valida un objeto item.
 * Verifica si los campos requeridos están presentes y valida sus valores.
 *
 * @param item - El objeto item a ser validado.
 * @returns Un array de errores, donde cada error es un objeto con un campo y un mensaje.
 */
const validateItem = (item: Partial<Item>) => {
    const errors: { field: string, message: string }[] = [];

    // Validate the name field
    if (!item.name) {
        errors.push({
            field: 'name',
            message: 'Field "name" is required'
        });
    }

    // Validate the price field
    if (!item.price) {
        errors.push({
            field: 'price',
            message: 'Field "price" is required'
        });
    } else if (item.price < 0) {
        errors.push({
            field: 'price',
            message: 'Field "price" cannot be negative'
        });
    }

    return errors;
};

export { validateItem };
