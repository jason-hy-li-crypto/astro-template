export const defaultLang = 'en';
export const supportedLanguages = ['en', 'ko'];
export type SupportedLanguage = typeof supportedLanguages[number];
export const languages = {
    en: 'English',
    ko: 'Français',
};
export function getLangFromUrl(url: URL): SupportedLanguage {
    const [, lang] = url.pathname.split('/');

    if (supportedLanguages.includes(lang)) return lang as SupportedLanguage
    return defaultLang;
}