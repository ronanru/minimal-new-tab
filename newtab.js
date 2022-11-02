chrome.topSites.get().then(sites =>
  sites.forEach(({ title, url }) => {
    const [a, img, p] = ['a', 'img', 'p'].map(tag => document.createElement(tag));
    a.href = url;
    a.title = title;
    img.src = `https://s2.googleusercontent.com/s2/favicons?domain=${encodeURIComponent(
      url
    )}&sz=96`;
    img.height = 96;
    img.width = 96;
    img.alt = title;
    p.textContent = title;
    a.appendChild(img);
    a.appendChild(p);
    document.body.appendChild(a);
  })
);
