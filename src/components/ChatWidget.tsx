import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function() {
        window.VG_CONFIG = {
          ID: "geu0x9frfbn766ty",
          region: 'eu',
          render: 'bottom-right',
          stylesheets: [
            "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
          ],
          user: {
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            phone: '+1234567890',
          }
        }
        var VG_SCRIPT = document.createElement("script");
        VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
        VG_SCRIPT.defer = true;
        document.body.appendChild(VG_SCRIPT);
      })()
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="VG_OVERLAY_CONTAINER" style={{ width: 0, height: 0 }} />;
};

export default ChatWidget;