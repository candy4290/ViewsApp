import Types from '../types';

export function onTarbarVisible(visible) {
  return {type: Types.TABBAR_VISIBLR, visible: visible};
}
