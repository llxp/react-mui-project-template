// merge all locales into a single object
import main from './main.ts';

// the translations
const translations = {
    en: {
        translation: {
            ...main,
        }
    }
};

export default translations;