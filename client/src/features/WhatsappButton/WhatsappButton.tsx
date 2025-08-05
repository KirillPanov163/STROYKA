import Script from 'next/script';

const GoodAppWidget = () => {
  return (
    <>
      <Script
        id="goodapp-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function () { 
            var widget = document.createElement('script'); 
            widget.defer = true; 
            widget.dataset.pfId = 'a598c526-2e49-49db-9de6-7478e691d6b0'; 
            widget.src = 'https://widget.yourgood.app/script/widget.js?id=a598c526-2e49-49db-9de6-7478e691d6b0&now='+Date.now(); 
            document.head.appendChild(widget); 
          })()
        `,
        }}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
      (function() {
        try {
          const theme = localStorage.getItem('theme');
          const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (theme === 'dark' || (!theme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
          }
        } catch (_) {}
      })();
    `,
        }}
      />
    </>
  );
};

export default GoodAppWidget;
