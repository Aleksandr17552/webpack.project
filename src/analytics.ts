import * as $ from 'jquery';

function createAnalytics(): object {
  let couter = 0;
  let destroyed: boolean = false;

  console.log('test')

  const listener = (): number => couter++

  $(document).on('click', listener)

  return {
    destroy() {
      document.removeEventListener('click', listener);
      destroyed = true;
    },

    getClicks() {
      if (destroyed) {
        return 'Analytics is destroyed. Total';
      }
      return couter;
    }
  }
}

window['analytics'] = createAnalytics();