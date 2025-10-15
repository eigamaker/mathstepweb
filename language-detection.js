// Language Detection and Redirection
(function() {
    'use strict';
    
    // Get language from URL parameter or browser language
    function getLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        
        if (langParam) {
            return langParam.toLowerCase();
        }
        
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const lang = browserLang.split('-')[0].toLowerCase();
        
        // Map browser languages to our supported languages
        const languageMap = {
            'ja': 'ja',
            'en': 'en',
            'ko': 'ko',
            'zh': 'zh-cn', // Default to simplified Chinese
            'zh-cn': 'zh-cn',
            'zh-tw': 'zh-tw',
            'zh-hk': 'zh-tw'
        };
        
        return languageMap[lang] || 'en'; // Default to English
    }
    
    // Get current page type
    function getPageType() {
        const path = window.location.pathname;
        if (path.includes('eula')) return 'eula';
        if (path.includes('privacy')) return 'privacy';
        if (path.includes('support')) return 'support';
        return 'index';
    }
    
    // Redirect to appropriate language page
    function redirectToLanguage() {
        const language = getLanguage();
        const pageType = getPageType();
        
        // If already on the correct language page, don't redirect
        if (window.location.pathname.includes(`-${language}.html`)) {
            return;
        }
        
        // If on index page, redirect to language-specific index
        if (pageType === 'index' && language !== 'en') {
            window.location.href = `index-${language}.html`;
            return;
        }
        
        // For other pages, redirect to language-specific version
        if (pageType !== 'index') {
            const baseName = pageType;
            window.location.href = `${baseName}-${language}.html`;
        }
    }
    
    // Only redirect if not already on a language-specific page
    if (!window.location.pathname.includes('-') || window.location.pathname.endsWith('.html')) {
        redirectToLanguage();
    }
})();
