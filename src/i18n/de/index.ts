// merge all locales into a single object
import main from './main.ts';

// the translations
const translations = {
    de: {
        translation: {
            ...main,
        }
    }
};

export default translations;