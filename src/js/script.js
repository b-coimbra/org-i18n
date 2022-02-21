onload = () => {
  const config = {
    defaultLanguage: 'en',
    hideTags: true
  };

  const selectedLang = (lang) => {
    const params = new URLSearchParams(window.location.search);
    lang(params.get('lang') || config.defaultLanguage);
  };

  const availableLangs = () =>
        Array.from(new Set([...document.querySelectorAll('.tag span:nth-child(2)')].map(tag => tag.className)));

  const getHeadline = (tag) =>
        tag.parentNode.parentNode.parentNode;

  const hideElement = (elem) =>
        elem.style.display = 'none';

  const hideTags = () =>
        document.querySelectorAll('.tag').forEach(hideElement);

  const hideHeadlines = (lang) => {
    document
      .querySelectorAll(`h2 .tag .lang + span:not(.${lang})`)
      .forEach(tag => hideElement(getHeadline(tag)));
  };

  selectedLang(lang => hideHeadlines(lang));

  if (config.hideTags) hideTags();
};
