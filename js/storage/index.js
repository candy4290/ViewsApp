import AsyncStorage from '@react-native-community/async-storage';
/**
 * 储存key-value数据
 */
export async function doSave(key, value) {
  AsyncStorage.setItem(key, value, error => {
    error && console.log(error.toString());
  });
}
/**
 * 获取key对应的数据
 */
export async function doGet(key, callback) {
  AsyncStorage.getItem(key, callback);
}
/**
 * 移除key对应的数据
 */
export async function doRemove(key) {
  AsyncStorage.removeItem(key, error => {
    error && console.log(error.toString());
  });
}
/**
 * 清除所有本地存储
 */
export async function clear() {
  AsyncStorage.clear();
}
