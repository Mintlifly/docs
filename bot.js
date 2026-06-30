function initEmbeddedMessaging() {
  try {
    embeddedservice_bootstrap.settings.language = 'en_US';
    embeddedservice_bootstrap.init(
      '00DWC00000CLPyz',
      'GoGuardian_Support',
      'https://goguardian--uat.sandbox.my.site.com/ESWGoGuardianSupport1770722306967',
      { scrt2URL: 'https://goguardian--uat.sandbox.my.salesforce-scrt.com' }
    );
  } catch (err) {
    console.error('Error loading Embedded Messaging: ', err);
  }
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://goguardian--uat.sandbox.my.site.com/ESWGoGuardianSupport1770722306967/assets/js/bootstrap.min.js';
script.onload = initEmbeddedMessaging;
document.body.appendChild(script);
