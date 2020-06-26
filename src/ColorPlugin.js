export class ColorPlugin {

}

ColorPlugin.install = (Vue) => {

  Vue.filter('capitalize', (value) => {
    if (!value)
      return '';

    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  });

  Vue.filter('paintbrush', (value) => {
    return `🖌️ ${value}`;
  });

  Vue.filter('hex', (value) => {
    return `#${value}`;
  });

  Vue.filter('toHex', (value) => {
    return value.toString(16);
  });

  Vue.directive('highlight', (el) => {
    el.addEventListener('mouseenter', () => {
      el.style.fontWeight = "bold"
    });

    el.addEventListener('mouseleave', () => {
      el.style.fontWeight = "initial"
    });
  });
};
